import { StructureDefinition } from "@/types";
import { notImportantIdSuffices } from "./constants";

export const removeDots = (str: string) => {
  return str.replace(/\./g, "");
};

export const containsDot = (str: string) => {
  return str.includes(".");
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

export const idIsImportant = (id: string) => {
  return !notImportantIdSuffices.some((suffix) => id.endsWith(suffix));
};
