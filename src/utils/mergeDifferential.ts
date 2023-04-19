import { ElementDefinition, StructureDefinition } from "fhir/r4";
import { isSliceElement, removeNPathPartsFromStart } from "./utils";
import { ProfileTree, ProfileTreeNode, getSliceNames } from "./buildTree";

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
      console.log("diffParts[i]: ", diffParts[i]);
      newParts.push(baseParts[i] + substringFromColon(diffParts[i]));
    } else {
      newParts.push(baseParts[i]);
    }
  }
  return newParts.join(".");
}

function getAllDescendants(node: ProfileTreeNode, profileTree: ProfileTree) {
  const descendants = [];
  let childPaths = node.childPaths;
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

export function mergeTreeWithDifferential(
  profileTree: ProfileTree,
  differentialElements: ElementDefinition[]
) {
  for (let differentialElement of differentialElements) {
    const node = profileTree.find(
      (node) =>
        removeNPathPartsFromStart(node.basePath, 1) ===
        removeNPathPartsFromStart(differentialElement.path, 1)
    );
    if (node && differentialElement.path === differentialElement.id) {
      node.element = updateElementWithOther(node.element, differentialElement);
    } else if (node) {
      const newDataPath = mergeDataPaths(
        node.dataPath,
        differentialElement.id!
      );
      if (profileTree.find((node) => node.dataPath === newDataPath)) {
        node.element = updateElementWithOther(
          node.element,
          differentialElement
        );
      } else {
        const newNode = {
          ...node,
          dataPath: newDataPath,
          element: updateElementWithOther(node.element, differentialElement),
        };
        // update parent node in profile tree
        const parentNode = profileTree.find(
          (n) => n.dataPath === node.parentDataPath
        );
        if (parentNode) {
          const parentIndex = profileTree.indexOf(parentNode!);
          parentNode!.childPaths.push(newNode.dataPath);
          console.log("parent node: ", parentNode);
          profileTree.splice(parentIndex, 1, parentNode!);
        }

        profileTree.push(newNode);
        const children = getAllDescendants(node, profileTree);
        const newChildren = children.map((child) => {
          const newChild = { ...child };
          newChild.dataPath = newChild.dataPath.replace(
            node.dataPath,
            newDataPath
          );
          return newChild;
        });
        profileTree = profileTree.concat(newChildren);
      }
    }
  }
  return profileTree;
}
