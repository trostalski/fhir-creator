import { ElementDefinition } from "fhir/r4";
import { arraysEqual, removeNPathPartsFromStart } from "./utils";
import { getSliceNames } from "./buildTree";
import { pathDelimiter, sliceDelimiter } from "./constants";
import { ProfileTreeNode } from "./profileTreeNode";

export const updateElementWithOther = (
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

export function getNewDataPath(baseDataPath: string, diffId: string) {
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
      getSliceNames(node.parentNode?.dataPath!),
      getSliceNames(diffElement.id!)
    )
  );
}

export function getElementTypes(element: ElementDefinition) {
  return element.type?.map((type) => type.code);
}
