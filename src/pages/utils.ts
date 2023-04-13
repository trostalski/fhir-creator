import { InputData } from "@/types";
import { notImportantIdSuffices } from "./constants";
import { StructureDefinition, ElementDefinition } from "fhir/r4";
import { updateElementWithOther } from "./buildTree";

export const removeDots = (str: string) => {
  return str.replace(/\./g, "");
};

export const containsSnapshot = (profile: StructureDefinition) => {
  return "snapshot" in profile;
};

export const containsDifferential = (profile: StructureDefinition) => {
  return "differential" in profile;
};

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

export function isMultiTypeString(str: string): boolean {
  return str.includes("[x]");
}

export const idIsImportant = (id: string) => {
  let result = true;
  const idParts = id.split(".");
  for (const part of idParts) {
    if (notImportantIdSuffices.includes(part)) {
      result = false;
      break;
    }
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

export const formatIdForPath = (
  id: string,
  type?: string,
  resourceType?: string
) => {
  let result = id;
  if (id.startsWith(resourceType + ".")) {
    result = id.replace(resourceType + ".", "");
  }
  if (isMultiTypeString(id)) {
    result = removeMultiTypeString(result);
    result = result + type;
  }
  return result;
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

const removeSlicePathsFromInputData = (inputData: InputData[]) => {
  const result = inputData.map((data) => {
    const newData = { ...data };
    newData.path = removeBetweenColonAndPeriod(data.path);
    return newData;
  });
  return result;
};

export const formatInputDataForResource = (inputData: InputData[]) => {
  let result;
  result = removeSlicePathsFromInputData(inputData);
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
      (diffElement) => diffElement.id === baseElement.id
    );
    if (differentialElement) {
      // update base element with differential element
      return updateElementWithOther(baseElement, differentialElement);
    }
    return baseElement;
  });

  // new elements that dont exist in base profile
  for (let differentialElement of differentialProfile.differential!.element) {
    if (isSliceElement(differentialElement)) {
      differentialElement = mergeSliceElement(
        differentialElement,
        elements,
        differentialProfile.differential!.element
      );
    }

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
