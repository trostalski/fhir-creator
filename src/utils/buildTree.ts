import {
  ElementDefinition,
  ElementDefinitionType,
  StructureDefinition,
} from "fhir/r4";
import {
  multiTypeString,
  pathDelimiter,
  primitiveTypes,
  rootName,
} from "./constants";
import {
  capitalizeFirstLetter,
  getPathSuffix,
  isSliceElement,
  parseMaxString,
  removeNPathPartsFromStart,
} from "./utils";
import { validFhirTypes } from "./fhirTypes";
import { ProfileTreeNode } from "./profileTreeNode";

export const containsDot = (str: string) => {
  return str.includes(".");
};

function parseCode(code: string) {
  let result = code;
  if (code === "http://hl7.org/fhirpath/System.String") {
    result = "string";
  }
  return result;
}

async function getTypeDefinition(type: ElementDefinitionType) {
  let result = null;
  const code = parseCode(type.code);
  if (!validFhirTypes.includes(code)) {
    return null;
  }
  try {
    const res = await fetch(`/api/types?filename=${code}`);
    if (!res.ok) {
      return null;
    }
    const type_definition = await res.json();
    result = type_definition;
  } catch (error) {}
  return result;
}

export async function isPrimitiveElement(element: ElementDefinition) {
  let result = false;

  if (element.type && element.type.length == 1) {
    const type = element.type[0];
    const type_definition = await getTypeDefinition(type);
    if (type_definition && isPrimitiveType(type_definition)) {
      result = true;
    } else if (primitiveTypes.includes(type.code)) {
      result = true;
    }
  }
  return result;
}

export function isPrimitiveType(profile: StructureDefinition) {
  let result = false;
  if (profile.kind === "primitive-type") {
    result = true;
  } else if (profile.id === "Reference") {
    result = true;
  }
  return result;
}

export function replaceMultiTypePath(
  path: string, // path with [x] in it
  type: string
) {
  return path.replace(multiTypeString, capitalizeFirstLetter(type));
}

export function isMultiTypeString(string: string) {
  return string.includes(multiTypeString);
}

export async function getChildrenTypeDefinitions(element: ElementDefinition) {
  let childProfiles = [];
  if (element.type) {
    for (const type of element.type!) {
      const childTypeDefinition = await getTypeDefinition(type);
      childProfiles.push(childTypeDefinition);
    }
  }
  return childProfiles;
}

export function mergePaths(...paths: string[]) {
  paths = paths.filter((path) => path && path.length > 0);
  return paths.join(pathDelimiter);
}

export function getPathLength(path: string) {
  return path.split(pathDelimiter).length;
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

export function getIndexString(index: number) {
  return `[${index}]`;
}

export function extractDirectChildNodes(
  parentNode: ProfileTreeNode,
  childNodes: ProfileTreeNode[]
) {
  const directChildren: ProfileTreeNode[] = [];
  for (const childNode of childNodes) {
    if (childNode.depth === parentNode.depth + 1) {
      directChildren.push(childNode);
    }
  }
  return directChildren;
}

export function isValidElement(element: ElementDefinition, rootPath?: string) {
  let result = true;
  if (!element.id) {
    result = false;
  } else if (!containsDot(element.id)) {
    result = false;
  } else if (element.base?.path === "Element.id") {
    result = false;
  } else if (element.id.endsWith(".extension")) {
    result = false;
  } else if (element.id.endsWith(".modifierExtension")) {
    result = false;
  }
  return result;
}

export function getSliceNames(input: string): string[] {
  const regex = /:(.*?)(\.|$)/g;
  let matches: RegExpExecArray | null;
  const substrings: string[] = [];
  while ((matches = regex.exec(input)) !== null) {
    substrings.push(matches[1]);
  }
  return substrings;
}

export function removeSliceNames(str: string): string {
  let result = str;
  const sliceNames = getSliceNames(str);
  for (const sliceName of sliceNames) {
    result = result.replace(`:${sliceName}`, "");
  }
  return result;
}

export function isSliceEntry(element: ElementDefinition) {
  return "slicing" in element;
}
