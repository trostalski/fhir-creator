import { Cardinality, CheckCardinalitiesResult, PathItem } from "../types";
import {
  multiTypeString,
  notImportantIdSuffices as notImportantIds,
  rootName,
  sliceDelimiter,
} from "./constants";
import { StructureDefinition, ElementDefinition, Resource } from "fhir/r4";
import { ProfileTree, ProfileTreeNode } from "./buildTree";
import { getSliceNames, removeNPathPartsFromStart } from "./path_utils";
import { getNodeByDataPath } from "./tree_utils";
import uniq from "lodash/uniq";

export const isProd = () => {
  return process.env.NEXT_PUBLIC_ENV === "prod";
}

export const containsDot = (str: string) => {
  return str.includes(".");
};

export function logWithCopy(...args: any[]) {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "object") {
      const c = structuredClone(args[i]);
      console.log(c);
    } else {
      console.log(arguments[i]);
    }
  }
}

export const isUrl = (string: string) => {
  try {
    new URL(string);
  } catch (_) {
    return false;
  }
  return true;
};

export const containsSnapshot = (profile: StructureDefinition) => {
  return "snapshot" in profile;
};

export const containsDifferential = (profile: StructureDefinition) => {
  return "differential" in profile;
};

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const parseMaxString = (str: string) => {
  if (str === "*") {
    return Infinity;
  } else {
    return parseInt(str);
  }
};

export function getIndexString(index: number) {
  return `[${index}]`;
}

export function getElementTypes(element: ElementDefinition) {
  return element.type?.map((type) => type.code);
}

export function elementExpectsArray(element: ElementDefinition) {
  let result = false;
  if (
    element.max &&
    parseMaxString(element.max) > 1 &&
    containsDot(element.id!)
  ) {
    result = true;
  }
  return result;
}

export function isMultiTypeString(string: string) {
  return string.includes(multiTypeString);
}

export function removeMultiTypeString(str: string): string {
  return str.replace(/\[x\]/g, "");
}

export function isMultiTypeElement(element: ElementDefinition): boolean {
  let result = false;
  if (element.type && element.type.length > 0 && element.path.includes("[x]")) {
    result = true;
  }
  return result;
}

export function arraysEqual(a: any[], b: any[]) {
  // from https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export function getBranchId(id: string) {
  return removeNPathPartsFromStart(id, 1);
}

export const idIsImportant = (id: string) => {
  let result = true;
  if (notImportantIds.includes(id)) {
    result = false;
  }
  return result;
};

export const isBaseUrl = (url: string) => {
  return url.includes("hl7.org");
};

export const getUid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const getResourceTypeFromUrl = (url: string) => {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1];
};

export const getResourceTypeFromProfile = (profile: StructureDefinition) => {
  let result = undefined;
  if (containsSnapshot(profile)) {
    result = profile.snapshot!.element[0].id?.split(".")[0];
  } else if (containsDifferential(profile)) {
    result = profile.differential!.element[0].id?.split(".")[0];
  }
  return result;
};

export const elementContainsValidType = (element: ElementDefinition) => {
  let result = true;
  const types = element.type;
  if (types === undefined || types.length === 0) {
    result = false;
  }
  types?.forEach((type) => {
    if (type.code.includes("BackboneElement")) {
      result = false;
    }
  });
  return result;
};

export const getBaseUrl = (profile: StructureDefinition) => {
  return profile.baseDefinition;
};

export const removeAfterColon = (str: string) => {
  const colonIndex = str.indexOf(":");
  return colonIndex >= 0 ? str.slice(0, colonIndex) : str;
};

export const isSliceElement = (element: ElementDefinition) => {
  return element.id!.includes(sliceDelimiter);
};

export const isSliceString = (str: string) => {
  return str.includes(sliceDelimiter);
};

export const removeBetweenColonAndPeriod = (str: string): string => {
  const regex = /:[^.]*(?=\.)/g;
  return str.replace(regex, "").replace(":", "");
};

const getCharsAfterVar = (str: string, variable: string, n: number) => {
  const index = str.indexOf(variable);
  if (index < 0) {
    return "";
  } else if (index + variable.length + n > str.length) {
    return str.substring(index + variable.length);
  } else {
    return str.substring(index + variable.length, index + variable.length + n);
  }
};

export const formatInputDataForResource = (inputData: PathItem[]) => {
  // TODO this is a mess
  inputData = inputData.sort((a, b) => {
    if (a.path < b.path) {
      return -1;
    } else if (a.path > b.path) {
      return 1;
    } else {
      return 0;
    }
  });
  let result;
  result = inputData.map((data) => {
    const { path } = data;
    if (path.includes(":")) {
      const indexRegex = /\[(\d+)\]/;
      const sliceNames = getSliceNames(path);
      for (const sliceName of sliceNames) {
        const slicePart = path
          .split(".")
          .filter((part) => part.includes(sliceName))[0];
        const startPart = path.substring(0, path.indexOf(sliceName) - 4);
        if (indexRegex.test(slicePart)) {
          let t = inputData.filter((data) => {
            return data.path.startsWith(startPart);
          });
          let prevIndeces = inputData
            .filter((data) => data.path.startsWith(startPart))
            .map((d) => {
              const indexPart = getCharsAfterVar(d.path, startPart, 4);
              const match = indexRegex.exec(indexPart);
              return match ? parseInt(match[1]) : -1;
            });
          const maxPrevIndex = Math.max(...prevIndeces);
          if (maxPrevIndex < prevIndeces.length) {
            const currentStart = path.substring(
              0,
              path.indexOf(sliceName) + sliceName.length
            );
            const newStartPart = startPart + "[" + (maxPrevIndex + 1) + "]";
            inputData = inputData.map((data) => {
              if (data.path.startsWith(currentStart)) {
                data.path = data.path.replace(currentStart, newStartPart);
              }
              return data;
            });
          }
        }
      }
    }
    const newData = { ...data };
    let newPath = removeBetweenColonAndPeriod(data.path);
    newPath = removeNPathPartsFromStart(newPath, 1); // remove root
    newData.path = newPath;
    return newData;
  });
  return result;
};

export function shouldDisplayNode(
  node: ProfileTreeNode,
  checkedBranchIds: string[]
) {
  let result = true;
  if (node.parentDataPath === rootName) {
    result = checkedBranchIds.includes(getBranchId(node.baseId));
  }
  return result;
}

export function extractPathValuePairs(profileTree: ProfileTree) {
  const inputData = profileTree
    .filter((node) => node.value)
    .map((node) => ({
      path: node.dataPath,
      value: node.value!,
    }));
  return inputData;
}

export function removeNullValues(obj: any): any {
  // remoces null values from json
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(removeNullValues).filter((val) => val !== null);
  }

  return Object.entries(obj)
    .map(([key, value]) => [key, removeNullValues(value)])
    .reduce((acc: any, [key, value]) => {
      if (value !== null) {
        acc[key] = value;
      }
      return acc;
    }, {});
}

export function convertObjectToPathArray(obj: object): PathItem[] {
  const result: PathItem[] = [];

  function traverseObject(obj: object, currentPath: string = "") {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = (obj as any)[key];
        const newPath = currentPath ? `${currentPath}.${key}` : key;

        if (Array.isArray(value)) {
          value.forEach((item, index) => {
            const arrayPath = `${newPath}[${index}]`;
            if (typeof item === "object") {
              traverseObject(item, arrayPath);
            } else {
              result.push({ path: arrayPath, value: item });
            }
          });
        } else if (typeof value === "object") {
          traverseObject(value, newPath);
        } else {
          result.push({ path: newPath, value });
        }
      }
    }
  }

  traverseObject(obj);
  return result;
}

type PathItem = {
  path: string;
  value: string;
};

export function createPathArrayFromJson(obj: any, currentPath: string = ""): PathItem[] {
  let result: PathItem[] = [];

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      for (let i = 0; i < obj[key].length; i++) {
        const newPath = `${currentPath}${currentPath ? "." : ""}${key}[${i}]`;
        if (typeof obj[key][i] === 'object' && obj[key][i] !== null) {
          result = result.concat(createPathArrayFromJson(obj[key][i], newPath));
        } else {
          result.push({
            path: newPath,
            value: obj[key][i]
          });
        }
      }
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      const newPath = `${currentPath}${currentPath ? "." : ""}${key}`;
      result = result.concat(createPathArrayFromJson(obj[key], newPath));
    } else {
      result.push({
        path: `${currentPath}${currentPath ? "." : ""}${key}`,
        value: obj[key]
      });
    }
  }

  return result;
}


// currently in use
export function createJsonFromPathArray(pathArray: PathItem[]): any {
  const result: any = {}; // Initialize the result object

  for (const pathObj of pathArray) {
    const { path: id, value } = pathObj;
    let current = result; // Initialize the current object to the result object
    const pathArray = id.split("."); // Split the path string into an array of property names

    for (let i = 0; i < pathArray.length - 1; i++) {
      const prop = pathArray[i];
      const isArray = /\[\d+\]$/.test(prop); // Check if the property is an array index

      if (isArray) {
        const arrayProp = prop.substring(0, prop.indexOf("["));
        const index = parseInt(
          prop.substring(prop.indexOf("[") + 1, prop.indexOf("]"))
        );
        current[arrayProp] = current[arrayProp] || [];
        current = current[arrayProp];
        current[index] = current[index] || {};
        current = current[index];
      } else {
        current[prop] = current[prop] || {};
        current = current[prop];
      }
    }

    const lastProp = pathArray[pathArray.length - 1];
    const lastIsArray = /\[\d+\]$/.test(lastProp); // Check if the last property is an array index

    if (lastIsArray) {
      const lastArrayProp = lastProp.substring(0, lastProp.indexOf("["));
      const lastIndex = parseInt(
        lastProp.substring(lastProp.indexOf("[") + 1, lastProp.indexOf("]"))
      );
      current[lastArrayProp] = current[lastArrayProp] || [];
      current[lastArrayProp][lastIndex] = value;
    } else {
      current[lastProp] = value;
    }
  }

  // Convert any objects with numeric keys to arrays
  function convertNumericKeysToArrays(
    obj: Record<string, any>
  ): Record<string, any> {
    const result: any = {};
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === "object" && !Array.isArray(value)) {
        const numericKeys = Object.keys(value)
          .map((k) => parseInt(k))
          .filter((k) => !isNaN(k));
        if (numericKeys.length > 0) {
          const arrayValue = numericKeys.map((k) => value[k]);
          result[key] = arrayValue;
        } else {
          result[key] = convertNumericKeysToArrays(value);
        }
      } else {
        result[key] = value;
      }
    }
    return result;
  }

  return removeNullValues(convertNumericKeysToArrays(result));
}

function getCardinality(profileTreeNode: ProfileTreeNode): Cardinality {
  let cardinality: Cardinality = { min: 0, max: "0" };
  if (profileTreeNode.element.min) {
    cardinality.min = profileTreeNode.element.min;
  }
  if (profileTreeNode.element.max) {
    cardinality.max = profileTreeNode.element.max;
  }
  return cardinality;
}

function getChildrenForNode(
  profileTree: ProfileTree,
  profileTreeNode: ProfileTreeNode
): ProfileTreeNode[] {
  const children: ProfileTreeNode[] = [];
  for (const childDataPath of profileTreeNode.childPaths) {
    const childNode: ProfileTreeNode = getNodeByDataPath(
      profileTree,
      childDataPath
    )!;
    children.push(childNode);
  }
  return children;
}

function existsInInputData(inputData: PathItem[], dataPath: string): boolean {
  let path: string;
  if (isMultiTypeString(dataPath)) {
    path = removeMultiTypeString(dataPath);
  } else {
    path = dataPath;
  }
  const exists = inputData.some((data) => data.path.startsWith(path));
  return exists;
}

function hasValue(inputData: PathItem[], path: string): boolean {
  const exists = inputData.some((data) => data.path === path && data.value);
  return exists;
}

export function getPathsWithInvalidCardinality(
  profileTree: ProfileTree,
  dataPath: string,
  inputData: PathItem[],
  notMetPaths: string[]
): void {
  const profileTreeNode = getNodeByDataPath(profileTree, dataPath)!;
  const cardinality = getCardinality(profileTreeNode);
  const isPrimitive = profileTreeNode.isPrimitive;
  const hasChildren = profileTreeNode.childPaths.length > 0;

  if (cardinality.min > 0 && !existsInInputData(inputData, dataPath)) {
    notMetPaths.push(dataPath);
  }

  if (hasChildren && existsInInputData(inputData, dataPath)) {
    const children = getChildrenForNode(profileTree, profileTreeNode);
    for (const child of children) {
      if (child.element.sliceName) {
        // if the child is a slice, check if any of its children have a value
        const children = getChildrenForNode(profileTree, child);
        if (!children.some((child) => child.value !== "")) {
          continue;
        }
      }
      const childPath = child.dataPath;
      getPathsWithInvalidCardinality(
        profileTree,
        childPath,
        inputData,
        notMetPaths
      );
    }
  }

  if (isPrimitive && cardinality.min > 0 && !hasValue(inputData, dataPath)) {
    notMetPaths.push(dataPath);
  }
}

export function checkCardinalities(
  profileTree: ProfileTree,
  inputData: PathItem[]
): CheckCardinalitiesResult {
  let isValid = true;
  const pathsWithInvalidCardinality: string[] = [];
  const branchNodes = profileTree.filter(
    (node) => node.parentDataPath === rootName
  );
  for (const child of branchNodes) {
    const dataPath = child.dataPath;
    getPathsWithInvalidCardinality(
      profileTree,
      dataPath,
      inputData,
      pathsWithInvalidCardinality
    );
    if (pathsWithInvalidCardinality.length > 0) {
      isValid = false;
    }
  }

  return {
    isValid: isValid,
    pathsWithInvalidCardinality: uniq(pathsWithInvalidCardinality),
  };
}
