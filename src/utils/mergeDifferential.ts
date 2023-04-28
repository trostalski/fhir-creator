import { ElementDefinition } from "fhir/r4";
import {
  arraysEqual,
  capitalizeFirstLetter,
  getElementTypes,
  isMultiTypeElement,
} from "./utils";
import { ProfileTree, ProfileTreeNode, isSliceEntry } from "./buildTree";
import { pathDelimiter, primitiveTypes, sliceDelimiter } from "./constants";
import {
  getSliceNames,
  removeNPathPartsFromEnd,
  removeNPathPartsFromStart,
  replaceMultiTypePath,
} from "./path_utils";
import {
  copyAllDescendants,
  extractDirectChildren,
  getNodeByDataPath,
} from "./tree_utils";

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

function getNewDataPath(baseDataPath: string, diffId: string) {
  let newParts: string[] = [];
  const baseParts = baseDataPath.split(pathDelimiter);
  const diffParts = diffId.split(pathDelimiter);
  const basePathLength = baseParts.length;
  for (let i = 0; i < basePathLength; i++) {
    if (diffParts[i].includes(sliceDelimiter)) {
      newParts.push(baseParts[i] + substringFromColon(diffParts[i]));
    } else {
      newParts.push(baseParts[i]);
    }
  }
  return newParts.join(pathDelimiter);
}

function isClosedSlice(element: ElementDefinition) {
  return element.slicing?.rules === "closed";
}

export function baseEqual(
  node: ProfileTreeNode,
  diffElement: ElementDefinition
) {
  const diffBasePath = removeNPathPartsFromStart(diffElement.path, 1);
  return removeNPathPartsFromStart(node.basePath, 1) === diffBasePath;
}
export function baseAndSlicesEqual(
  node: ProfileTreeNode,
  diffElement: ElementDefinition
) {
  const diffBasePath = removeNPathPartsFromStart(diffElement.path, 1);
  return (
    removeNPathPartsFromStart(node.basePath, 1) === diffBasePath &&
    arraysEqual(getSliceNames(node.dataPath), getSliceNames(diffElement.id!))
  );
}

export function baseAndParentSlicesEqual(
  node: ProfileTreeNode,
  diffElement: ElementDefinition
) {
  const diffBasePath = removeNPathPartsFromStart(diffElement.path, 1);
  return (
    removeNPathPartsFromStart(node.basePath, 1) === diffBasePath &&
    arraysEqual(
      getSliceNames(node.parentDataPath),
      getSliceNames(diffElement.id!)
    )
  );
}

export function mergeTreeWithDifferential(
  profileTree: ProfileTree,
  differentialElements: ElementDefinition[]
): ProfileTree {
  for (const differentialElement of differentialElements) {
    const node = profileTree.find((n) =>
      baseAndSlicesEqual(n, differentialElement)
    );
    if (node) {
      node.element = updateElementWithOther(node.element, differentialElement);
      node.isSliceEntry = isSliceEntry(differentialElement);
    } else {
      let node = profileTree.find((n) =>
        baseAndParentSlicesEqual(n, differentialElement)
      );
      if (!node) {
        node = profileTree.find((n) => baseEqual(n, differentialElement));
      }
      if (node) {
        const newDataPath = getNewDataPath(
          node.dataPath,
          differentialElement.id!
        );
        const newParentPath = removeNPathPartsFromEnd(newDataPath, 1);
        const newNode: ProfileTreeNode = {
          ...node,
          isSliceEntry: isSliceEntry(differentialElement),
          dataPath: newDataPath,
          element: updateElementWithOther(node.element, differentialElement),
        };
        let parentNode;
        parentNode =
          getNodeByDataPath(profileTree, newParentPath) ||
          getNodeByDataPath(profileTree, node.parentDataPath);
        if (parentNode) {
          parentNode.childPaths.push(newNode.dataPath);
        }
        let children;
        if (isMultiTypeElement(differentialElement)) {
          const diffTypes = getElementTypes(differentialElement);
          newNode.type = diffTypes![0];
          children = copyAllDescendants(node, profileTree, diffTypes!);
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
            let oldPathParts = replaceMultiTypePath(node!.dataPath, childType);
            let newPathParts = replaceMultiTypePath(newDataPath, childType);
            return {
              ...child,
              parentDataPath: newDataPath,
              dataPath: child.dataPath.replace(oldPathParts, newPathParts),
            };
          });
        } else {
          children = copyAllDescendants(node, profileTree);
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
      const descendants = copyAllDescendants(node, profileTree);
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
