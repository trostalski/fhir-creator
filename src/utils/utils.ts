import { InputData } from "@/types";
import {
  notImportantIdSuffices as notImportantIds,
  rootName,
} from "./constants";
import { StructureDefinition, ElementDefinition } from "fhir/r4";
import { ProfileTree, ProfileTreeNode } from "../utils/buildTree";

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

export const removeDots = (str: string) => {
  return str.replace(/\./g, "");
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

function removeNPathPartsFromEnd(path: string, n: number) {
  const pathParts = path.split(".");
  const result = pathParts.slice(0, -n).join(".");
  return result;
}

export function arraysEqual(a: any[], b: any[]) {
  // from https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export function getBranchId(id: string) {
  return removeNPathPartsFromStart(id, 1);
}

export function getBranchIds(profileTree: ProfileTree) {
  // Get all paths that have the rootName as parent without the root
  const nodes = profileTree.filter((node) => node.parentDataPath === rootName);
  const branchIds = nodes.map((node) => getBranchId(node.baseId));
  return branchIds;
}

export const idIsImportant = (id: string) => {
  let result = true;
  if (notImportantIds.includes(id)) {
    result = false;
  }
  return result;
};

export const isFhirBaseDefinition = (url: string) => {
  return url.startsWith("http://hl7.org/fhir/StructureDefinition/");
};

export const getUid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const getResourceTypeFromUrl = (url: string) => {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1];
};

export const getResourceTypeFromProfile = (profile: StructureDefinition) => {
  let result = null;
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
  return element.id!.includes(":");
};

export const removeBetweenColonAndPeriod = (str: string): string => {
  const regex = /:[^.]*(?=\.)/g;
  return str.replace(regex, "").replace(":", "");
};

export const formatInputDataForResource = (inputData: InputData[]) => {
  let result;
  result = inputData.map((data) => {
    const newData = { ...data };
    let newPath = removeAfterColon(data.path);
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

// TODO: check if deprecated
export function createJsonFromPathList(pathList: string[], value: any): any {
  const result = {}; // Initialize the result object

  for (const pathString of pathList) {
    let current: any = result; // Initialize the current object to the result object
    const pathArray = pathString.split("."); // Split the path string into an array of property names

    for (let i = 0; i < pathArray.length; i++) {
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

    current = value; // Set the value at the final property
  }

  return result;
}

// currently in use
export function createJsonFromPathArray(
  pathArray: { path: string; value: any }[]
): any {
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

  return convertNumericKeysToArrays(result);
}

export interface NotMet {
  path: string;
  minIsMet: boolean;
  maxIsMet: boolean;
}

interface Cardinality {
  min: number;
  max: string;
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

function getChildren(
  profileTree: ProfileTree,
  path: string
): ProfileTreeNode[] {
  const children: ProfileTreeNode[] = [];
  const profileTreeNode = profileTree.find((node) => node.dataPath === path)!;
  for (const child of profileTreeNode.childPaths) {
    const childNode: ProfileTreeNode = profileTree.find(
      (node) => node.dataPath === child
    )!;
    children.push(childNode);
  }
  return children;
}

function existsInOutput(inputData: InputData[], path: string): boolean {
  path = removeNPathPartsFromStart(path, 1);
  const exists = inputData.some((data) => data.path.includes(path));
  return exists;
}

function hasValue(inputData: InputData[], path: string): boolean {
  path = removeNPathPartsFromStart(path, 1);
  const exists = inputData.some((data) => data.path === path && data.value);
  return exists;
}

export function checkCardinality(
  profileTree: ProfileTree,
  path: string,
  inputData: InputData[],
  notMet: string[]
): boolean {
  let isMet = true;
  const profileTreeNode = profileTree.find((node) => node.dataPath === path)!;
  const cardinality = getCardinality(profileTreeNode);
  const isPrimitive = profileTreeNode.isPrimitive;
  const hasChildren = profileTreeNode.childPaths.length > 0;

  if (cardinality.min > 0 && !existsInOutput(inputData, path)) {
    isMet = false;
  }

  if (hasChildren) {
    const children = getChildren(profileTree, path);
    for (const child of children) {
      const childPath = child.dataPath;
      const childIsMet = checkCardinality(
        profileTree,
        childPath,
        inputData,
        notMet
      );
      if (!childIsMet) {
        isMet = false;
      }
    }
  }

  if (isPrimitive && cardinality.min > 0 && !hasValue(inputData, path)) {
    isMet = false;
  }

  if (!isMet) {
    notMet.push(path);
  }

  return isMet;
}

export function checkCardinalities(
  profileTree: ProfileTree,
  inputData: InputData[]
): boolean {
  let isMet = true;
  const notMet: string[] = [];
  const firstChilds = profileTree.filter(
    (node) => node.parentDataPath === rootName
  );
  for (const child of firstChilds) {
    const path = child.dataPath;
    isMet = checkCardinality(profileTree, path, inputData, notMet);
  }

  return isMet;
}
