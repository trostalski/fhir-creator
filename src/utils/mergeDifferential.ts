import { ElementDefinition } from "fhir/r4";
import {
  arraysEqual,
  capitalizeFirstLetter,
  isMultiTypeElement,
  removeNPathPartsFromStart,
} from "./utils";
import {
  ProfileTree,
  ProfileTreeNode,
  extractDirectChildren,
  getSliceNames,
  isSliceEntry,
} from "./buildTree";
import { primitiveTypes } from "./constants";

const updateElementWithOther = (
  element: ElementDefinition,
  otherElement: ElementDefinition
) => {
  // merge element with otherElement, properties of otherElement overwrite properties of element
  const updatedElement = { ...element, ...otherElement };
  return updatedElement;
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

function isClosedSlice(element: ElementDefinition) {
  return element.slicing?.rules === "closed";
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
      node.isSliceEntry = isSliceEntry(differentialElement);
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
          console.log("children: ", children);
          children = children.map((child) => {
            let childType;
            if (
              child.element.type &&
              primitiveTypes.includes(child.element.type[0].code)
            ) {
              childType = capitalizeFirstLetter(child.element.type[0].code);
            } else {
              childType = child.element.type![0].code;
            }
            let oldPathParts = node!.dataPath.replace("[x]", childType);
            let newPathParts = newDataPath.replace("[x]", childType);
            return {
              ...child,
              parentDataPath: newDataPath,
              dataPath: child.dataPath.replace(oldPathParts, newPathParts),
            };
          });
        } else {
          children = getAllDescendants(node, profileTree);
          children = children.map((child) => ({
            ...child,
            parentDataPath: newDataPath,
            dataPath: child.dataPath.replace(node!.dataPath, newDataPath),
          }));
        }
        newNode.childPaths = extractDirectChildren(
          newNode.dataPath,
          children.map((n) => n.dataPath)
        );
        profileTree.push(newNode);
        profileTree = profileTree.concat(children);
      }
    }
  }
  // remove nodes that are not part of closed slice
  for (const node of profileTree) {
    if (node.isSliceEntry && isClosedSlice(node.element)) {
      // remove node and all children from profileTree
      const descendants = getAllDescendants(node, profileTree);
      const descendantDataPaths = descendants.map((n) => n.dataPath);
      profileTree = profileTree.filter(
        (n) =>
          n.dataPath !== node.dataPath &&
          !descendantDataPaths.includes(n.dataPath)
      );
    }
  }
  return profileTree;
}
