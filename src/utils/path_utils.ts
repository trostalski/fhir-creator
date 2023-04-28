import { ProfileTreeNode } from "./buildTree";
import { multiTypeString, pathDelimiter } from "./constants";
import { capitalizeFirstLetter } from "./utils";

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
  const result = node.dataPath
    .replace(node.parentDataPath + ".", "")
    .replace(/\[.\]/g, "");
  return result;
}

function extractLastIndex(str: string): number {
  const match = str.match(/\[(\d+)\]$/);
  if (match) {
    return parseInt(match[1]);
  }
  return -1; // or throw an error, if there is no index found
}

export function incrementDataPath(path: string): string {
  const lastIndex = extractLastIndex(path);
  if (lastIndex >= 0) {
    return path.replace(/\[\d+\]$/, `[${lastIndex + 1}]`);
  }
  return path;
}
