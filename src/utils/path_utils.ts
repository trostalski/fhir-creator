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
