import { ProfileTree, ProfileTreeNode } from "./buildTree";
import { multiTypeString, pathDelimiter } from "./constants";
import { getAllDescendants } from "./tree_utils";
import {
  capitalizeFirstLetter,
  isSliceString,
  removeAfterColon,
} from "./utils";

export function getSliceNames(input: string): string[] {
  const regex = /:(.*?)(\.|$)/g;
  let matches: RegExpExecArray | null;
  const substrings: string[] = [];
  while ((matches = regex.exec(input)) !== null) {
    substrings.push(matches[1]);
  }
  return substrings;
}

export function removeNPathPartsFromEnd(path: string, n: number) {
  const pathParts = path.split(pathDelimiter);
  const result = pathParts.slice(0, pathParts.length - n).join(pathDelimiter);
  return result;
}

export function removeNPathPartsFromStart(path: string, n: number) {
  const pathParts = path.split(".");
  const result = pathParts.slice(n).join(".");
  return result;
}

export function getPathSuffix(path: string) {
  const pathParts = path.split(".");
  const result = pathParts[pathParts.length - 1];
  return result;
}

export function replaceMultiTypePath(
  path: string, // path with [x] in it
  type: string
) {
  return path.replace(multiTypeString, capitalizeFirstLetter(type));
}

export function mergePaths(...paths: string[]) {
  paths = paths.filter((path) => path && path.length > 0);
  return paths.join(pathDelimiter);
}

export function getPathLength(path: string) {
  return path.split(pathDelimiter).length;
}

export function getNthPartOfPath(path: string, n: number) {
  const pathParts = path.split(pathDelimiter);
  if (n === -1) {
    n = pathParts.length - 1;
  }
  return pathParts[n];
}

export function getDisplayPath(node: ProfileTreeNode) {
  let display = getPathSuffix(node.dataPath);
  display = display.replace(display + ".", "").replace(/\[.\]/g, "");
  return display;
}

export function extractIndex(str: string): number {
  const match = str.match(/\[(\d+)\]/);
  if (match) {
    return parseInt(match[1]);
  }
  return -1; // or throw an error, if there is no index found
}

export function removeLastIndex(dataPath: string) {
  const currSuffix = getPathSuffix(dataPath);
  const currSuffixWithoutIndex = currSuffix.replace(/\[\d+\]$/, "");
  const dataPathWithoutLastIndex = dataPath.replace(
    currSuffix,
    currSuffixWithoutIndex
  );
  return dataPathWithoutLastIndex;
}

export function incrementDataPath(
  profileTree: ProfileTree,
  node: ProfileTreeNode
): string {
  let newDataPath = node.dataPath.slice();
  let sliceNames;
  if (isSliceString(newDataPath)) {
    sliceNames = getSliceNames(newDataPath);
    newDataPath = removeAfterColon(newDataPath);
  }
  const currSuffix = getPathSuffix(newDataPath);
  const currIndex = extractIndex(currSuffix);
  const dataPathWithoutLastIndex = removeLastIndex(newDataPath);
  const nodesWithSamePath = profileTree.filter(
    (n) =>
      n.parentDataPath === node.parentDataPath &&
      n.dataPath.startsWith(dataPathWithoutLastIndex)
  );
  const indices = nodesWithSamePath.map((n) =>
    extractIndex(getPathSuffix(n.dataPath))
  );
  const highestIndex = Math.max(...indices, currIndex);

  if (highestIndex >= 0) {
    newDataPath = newDataPath.replace(/\[\d+\]$/, `[${highestIndex + 1}]`);
    if (sliceNames) {
      newDataPath = newDataPath + ":" + sliceNames[sliceNames.length - 1];
    }
    return newDataPath;
  }
  return node.dataPath.slice();
}
