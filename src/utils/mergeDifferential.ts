import { ElementDefinition, StructureDefinition } from "fhir/r4";
import {
  arraysEqual,
  containsSnapshot,
  getPathSuffix,
  isMultiTypeElement,
  isSliceElement,
  logWithCopy,
  removeNPathPartsFromStart,
} from "./utils";
import {
  ProfileTree,
  ProfileTreeNode,
  extractDirectChildren,
  getSliceNames,
  isSliceEntry,
} from "./buildTree";

const updateElementWithOther = (
  element: ElementDefinition,
  otherElement: ElementDefinition
) => {
  // merge element with otherElement, properties of otherElement overwrite properties of element
  const updatedElement = { ...element, ...otherElement };
  return updatedElement;
};

const elmentsHaveSameIdStem = (
  element1: ElementDefinition,
  element2: ElementDefinition
) => {
  let result = false;
  // remove first path element
  const id1 = element1.id!.split(".").slice(1).join(".");
  const id2 = element2.id!.split(".").slice(1).join(".");
  if (id1.startsWith(id2 + ".") || id1.startsWith(id2 + ":")) {
    result = true;
  }
  return result;
};

export const mergeSliceElement = (
  sliceElement: ElementDefinition,
  baseElements: ElementDefinition[],
  differentialElements: ElementDefinition[]
) => {
  let updatedElement;

  const diffElement = differentialElements.find(
    (element) => element.path === sliceElement.path
  );

  if (diffElement) {
    updatedElement = updateElementWithOther(diffElement, sliceElement);
  }
  const baseElement = baseElements.find(
    (element) => element.path === sliceElement.path
  );
  if (baseElement) {
    updatedElement = updateElementWithOther(baseElement, sliceElement);
  }
  if (updatedElement) {
    return updatedElement;
  } else {
    return sliceElement;
  }
};

export const mergeDifferentialWithSnapshot = (
  baseProfile: StructureDefinition,
  differentialProfile: StructureDefinition
) => {
  let elements: ElementDefinition[] = [];

  // elements that exist in base profile
  elements = baseProfile.snapshot!.element.map((baseElement) => {
    const differentialElement = differentialProfile.differential!.element.find(
      (diffElement) => diffElement.path === baseElement.path
    );
    if (differentialElement) {
      // update base element with differential element
      return updateElementWithOther(baseElement, differentialElement);
    }
    return baseElement;
  });

  // new elements that dont exist in base profile
  for (let differentialElement of differentialProfile.differential!.element) {
    // merge base element into slice element
    // if (isSliceElement(differentialElement)) {
    //   differentialElement = mergeSliceElement(
    //     differentialElement,
    //     elements,
    //     differentialProfile.differential!.element
    //   );
    // }

    const elementExists = elements.some(
      (element) => element.id === differentialElement.id
    );

    if (!elementExists) {
      let foundElement = false;

      for (let index = 0; index < elements.length; index++) {
        // if slice element, merge with base element without slice paths in id
        let element = elements[index];

        if (elmentsHaveSameIdStem(differentialElement, element)) {
          elements.splice(index + 1, 0, differentialElement);
          foundElement = true;
          break;
        }
      }

      if (!foundElement) {
        elements.push(differentialElement);
      }
    }
  }
  return elements;
};

function substringFromColon(str: string) {
  return str.substring(str.indexOf(":"));
}

function mergeDataPaths(baseDataPath: string, diffId: string) {
  let newParts = [];
  const baseParts = baseDataPath.split(".");
  const diffParts = diffId.split(".");
  const basePathLength = baseParts.length;
  for (let i = 0; i < basePathLength; i++) {
    if (diffParts[i].includes(":")) {
      newParts.push(baseParts[i] + substringFromColon(diffParts[i]));
    } else {
      newParts.push(baseParts[i]);
    }
  }
  return newParts.join(".");
}

function getAllDescendants(
  node: ProfileTreeNode,
  profileTree: ProfileTree,
  types?: string[]
) {
  const descendants = [];
  let childPaths = node.childPaths.slice(); // first level copy
  if (types) {
    childPaths = childPaths.filter((path) => {
      for (const type of types) {
        if (path.toLowerCase().includes(type.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }
  while (childPaths.length > 0) {
    const childPath = childPaths.shift();
    const childNode = profileTree.find((node) => node.dataPath === childPath);
    if (childNode) {
      descendants.push(childNode);
      childPaths = childPaths.concat(childNode.childPaths);
    }
  }
  return descendants;
}

function getParentNode(
  node: ProfileTreeNode,
  profileTree: ProfileTree
): ProfileTreeNode | undefined {
  const parentPath = node.parentDataPath;
  return profileTree.find((n) => n.dataPath === parentPath);
}

export function mergeTreeWithDifferential(
  profileTree: ProfileTree,
  differentialElements: ElementDefinition[]
): ProfileTree {
  for (const differentialElement of differentialElements) {
    const diffBasePath = removeNPathPartsFromStart(differentialElement.path, 1);
    const node = profileTree.find(
      (n) =>
        removeNPathPartsFromStart(n.basePath, 1) === diffBasePath &&
        arraysEqual(
          getSliceNames(n.dataPath),
          getSliceNames(differentialElement.id!)
        )
    );
    if (node) {
      node.element = updateElementWithOther(node.element, differentialElement);
    } else {
      // is mutltitype and type exist -> get node by path insert type and and id without indeces??
      let node = profileTree.find(
        (n) =>
          removeNPathPartsFromStart(n.basePath, 1) === diffBasePath &&
          arraysEqual(
            getSliceNames(n.parentDataPath),
            getSliceNames(differentialElement.id!)
          )
      );
      if (!node) {
        node = profileTree.find(
          (n) => removeNPathPartsFromStart(n.basePath, 1) === diffBasePath
        );
      }
      if (node) {
        const newDataPath = mergeDataPaths(
          node.dataPath,
          differentialElement.id!
        );
        const newParentPath = newDataPath.split(".").slice(0, -1).join(".");
        const newNode: ProfileTreeNode = {
          ...node,
          isSliceEntry: isSliceEntry(differentialElement),
          dataPath: newDataPath,
          element: updateElementWithOther(node.element, differentialElement),
        };
        let parentNode;
        parentNode = profileTree.find((n) => n.dataPath === newParentPath);
        if (!parentNode) {
          parentNode = profileTree.find(
            (n) => n.dataPath === newNode.parentDataPath
          );
        }
        if (parentNode) {
          parentNode.childPaths.push(newNode.dataPath);
        }
        let children;
        if (isMultiTypeElement(differentialElement)) {
          const diffTypes = differentialElement.type?.map((t) => t.code);
          newNode.type = diffTypes![0];
          children = getAllDescendants(node, profileTree, diffTypes!);
        } else {
          children = getAllDescendants(node, profileTree);
        }
        const newChildren = children.map((child) => ({
          ...child,
          parentDataPath: newDataPath,
          dataPath: child.dataPath.replace(node!.dataPath, newDataPath),
        }));
        console.log("new c: ",newChildren);
        newNode.childPaths = extractDirectChildren(
          newNode.dataPath,
          newChildren.map((n) => n.dataPath)
        );
        console.log("new c: ",newNode.childPaths);
        profileTree.push(newNode);
        profileTree = profileTree.concat(newChildren);
      }
    }
  }
  return profileTree;
}
