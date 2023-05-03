import { Cardinality, CheckCardinalitiesResult, InputData } from "@/types";
import {
  multiTypeString,
  notImportantIdSuffices as notImportantIds,
  rootName,
  sliceDelimiter,
} from "./constants";
import { StructureDefinition, ElementDefinition } from "fhir/r4";
import { ProfileTree, ProfileTreeNode } from "../utils/buildTree";
import { getSliceNames, removeNPathPartsFromStart } from "./path_utils";
import { getNodeByDataPath } from "./tree_utils";
import uniq from "lodash/uniq";

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
  return element.id!.includes(sliceDelimiter);
};

export const isSliceString = (str: string) => {
  return str.includes(sliceDelimiter);
};

export const removeBetweenColonAndPeriod = (str: string): string => {
  const regex = /:[^.]*(?=\.)/g;
  return str.replace(regex, "").replace(":", "");
};

function getCharsAfterVar(str: string, variable: string, n: number) {
  const index = str.indexOf(variable);
  if (index < 0) {
    return "";
  } else if (index + variable.length + n > str.length) {
    return str.substring(index + variable.length);
  } else {
    return str.substring(index + variable.length, index + variable.length + n);
  }
}

export const formatInputDataForResource = (inputData: InputData[]) => {
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
    console.log("new path: ", newPath);
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

export function extractInputDataFromProfileTree(profileTree: ProfileTree) {
  const inputData = profileTree
    .filter((node) => node.value)
    .map((node) => ({
      path: node.dataPath,
      value: node.value!,
    }));
  return inputData;
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
  for (const child of profileTreeNode.childPaths) {
    const childNode: ProfileTreeNode = profileTree.find(
      (node) => node.dataPath === child
    )!;
    children.push(childNode);
  }
  return children;
}

function existsInInputData(inputData: InputData[], path: string): boolean {
  path = removeNPathPartsFromStart(path, 1);
  console.log("path", path);
  console.log("input data: ", inputData);
  const exists = inputData.some((data) => data.path.startsWith(path));
  return exists;
}

function hasValue(inputData: InputData[], path: string): boolean {
  const exists = inputData.some((data) => data.path === path && data.value);
  return exists;
}

export function getPathsWithInvalidCardinality(
  profileTree: ProfileTree,
  dataPath: string,
  inputData: InputData[],
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
  inputData: InputData[]
): CheckCardinalitiesResult {
  let isValid = true;
  const pathsWithInvalidCardinality: string[] = [];
  const branchChilds = profileTree.filter(
    (node) => node.parentDataPath === rootName
  );
  for (const child of branchChilds) {
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
