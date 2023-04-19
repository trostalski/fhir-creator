import {
  ElementDefinition,
  ElementDefinitionType,
  StructureDefinition,
} from "fhir/r4";
import { primitiveTypes, rootName } from "./constants";
import {
  capitalizeFirstLetter,
  isSliceElement,
  parseMaxString,
  removeNPathPartsFromStart,
} from "./utils";

export interface ProfileTreeNode {
  element: ElementDefinition;
  dataPath: string;
  baseId: string;
  parentDataPath: string;
  childPaths: string[];
  basePath: string; // used for differential merging
  isPrimitive: boolean;
  isSliceEntry: boolean;
  type?: string;
  value?: string;
  sliceName?: string;
  cardinalityMet?: boolean;
}

export type ProfileTree = ProfileTreeNode[];

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
  try {
    const res = await fetch(`/api/types?filename=${code}`);
    const type_definition = await res.json();
    result = type_definition;
  } catch (error) {}
  return result;
}

async function isPrimitiveElement(element: ElementDefinition) {
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

function isPrimitiveType(profile: StructureDefinition) {
  let result = false;
  if (profile.kind === "primitive-type") {
    result = true;
  } else if (profile.id === "Reference") {
    result = true;
  }
  return result;
}

async function getChildrenTypeDefinitions(element: ElementDefinition) {
  let childProfiles = [];
  if (element.type) {
    for (const type of element.type!) {
      const childTypeDefinition = await getTypeDefinition(type);
      childProfiles.push(childTypeDefinition);
    }
  }
  return childProfiles;
}

function getPath(parentPath: string, element: ElementDefinition) {
  let result = parentPath;
  const id = element.id!;

  if (parentPath.endsWith("[x]")) {
    const parsedParentPath = parentPath.replace(
      "[x]",
      capitalizeFirstLetter(id.split(".")[0])
    );
    if (removeNPathPartsFromStart(id, 1).length > 0) {
      result = parsedParentPath + "." + removeNPathPartsFromStart(id, 1);
    } else {
      result = parsedParentPath;
    }
  } else {
    result = parentPath + "." + removeNPathPartsFromStart(id, 1);
  }
  if (element.max && parseMaxString(element.max) > 1) {
    result = result + "[0]";
  }
  return result;
}

function extractDirectChildren(parentPath: string, childPaths: string[]) {
  const directChildren: string[] = [];
  for (const childPath of childPaths) {
    const childPathParts = childPath.split(".");
    const parentPathParts = parentPath.split(".");
    if (childPathParts.length === parentPathParts.length + 1) {
      directChildren.push(childPath);
    }
  }
  return directChildren;
}

function isValidElement(element: ElementDefinition) {
  let result = true;
  if (!element.id) {
    result = false;
  } else if (element.id === rootName) {
    result = false;
  } else if (!element.id.includes(".")) {
    result = false;
  } else if (element.base?.path === "Element.id") {
    result = false;
  } else if (element.id.endsWith(".extension")) {
    result = false;
  }
  return result;
}

function replaceWrongParentPaths(profileTree: ProfileTree) {
  for (const node of profileTree) {
    const { dataPath: path, parentDataPath: parentPath } = node;
    if (parentPath.split(".").length < path.split(".").length - 1) {
      const childPathStem = path.split(".").slice(0, -1).join(".");
      node.parentDataPath = childPathStem;
    }
  }
}

function addMissingChildren(profileTree: ProfileTree) {
  for (const node of profileTree) {
    const { parentDataPath: parentPath } = node;
    const parent = profileTree.find((node) => node.dataPath === parentPath);
    if (parent && !parent.childPaths.includes(node.dataPath)) {
      parent.childPaths.push(node.dataPath);
    }
  }
}

export function getSliceNames(str: string): string[] {
  const substrings: string[] = [];
  let startIndex = 0;
  while (startIndex !== -1) {
    startIndex = str.indexOf(":", startIndex);
    if (startIndex === -1) {
      break;
    }
    const endIndex =
      str.indexOf(".", startIndex) !== -1
        ? str.indexOf(".", startIndex)
        : str.indexOf(" ", startIndex);
    if (endIndex === -1) {
      break;
    }
    substrings.push(str.substring(startIndex + 1, endIndex));
    startIndex = endIndex;
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

function isSliceEntry(element: ElementDefinition) {
  return "slicing" in element;
}

export async function buildTreeFromElementsRecursive(
  elements: ElementDefinition[],
  parentPath: string = rootName,
  parentBasePath: string = rootName
): Promise<ProfileTree> {
  const profileTree: ProfileTree = [];

  // this loop iterates over all elements of a structure definition
  // if the element is a primitive type, it is added to the tree
  // if the element is a complex type, it is added to the tree and its children are added recursively
  for (const element of elements) {
    const { id } = element;
    if (!isValidElement(element)) {
      continue; // skip root element
    }

    const elementPath = getPath(parentPath, element);
    const elementBasePath = parentBasePath + "." + id?.split(".").at(-1)!;
    const elementIsSliceEntry = isSliceEntry(element);
    let sliceName = undefined;

    if (isSliceElement(element)) {
      sliceName = getSliceNames(element.id!)[0];
    }

    if (await isPrimitiveElement(element)) {
      const node: ProfileTreeNode = {
        element: element,
        dataPath: elementPath,
        parentDataPath: parentPath,
        basePath: elementBasePath,
        baseId: id!,
        isPrimitive: true,
        childPaths: [],
        isSliceEntry: elementIsSliceEntry,
        sliceName: sliceName,
      };
      if (!profileTree.find((node) => node.dataPath === elementPath)) {
        profileTree.push(node);
      }
    } else {
      // element is a complex type, so we need to get its children
      const childrenTypeDefinitions = await getChildrenTypeDefinitions(element);
      const childNodes: ProfileTreeNode[] = [];
      for (const childType of childrenTypeDefinitions) {
        if (childType && isPrimitiveType(childType)) {
          const childElement = childType.snapshot!.element![0];
          const childBasePath =
            elementBasePath + "." + childElement.id?.split(".").at(-1)!;
          // we need to set element properties from type definitoin (e.g. for onsetDateTime necessary)
          childElement.type = [{ code: childType.id }];
          childElement.min = 0;
          childElement.max = "1";
          const childNode: ProfileTreeNode = {
            element: childElement,
            dataPath: getPath(elementPath, childElement),
            parentDataPath: elementPath,
            basePath: childBasePath,
            baseId: id!,
            isPrimitive: true,
            childPaths: [],
            isSliceEntry: elementIsSliceEntry,
            sliceName: sliceName,
          };
          childNodes.push(childNode);
        }
        if (childType && !isPrimitiveType(childType)) {
          const grandchildNodes = await buildTreeFromElementsRecursive(
            childType.snapshot!.element!,
            elementPath,
            elementBasePath
          );
          childNodes.push(...grandchildNodes);
        }
      }
      // child nodes also include grantchildren nodes, so we need to extract the direct children
      const childPaths = extractDirectChildren(
        elementPath,
        childNodes.map((node) => node.dataPath)
      );
      let elementType = undefined;
      if (element.type && element.type.length > 1) {
        elementType = element.type[0].code;
      }
      const parentNode: ProfileTreeNode = {
        element: element,
        dataPath: elementPath,
        parentDataPath: parentPath,
        basePath: elementBasePath,
        baseId: id!,
        isPrimitive: false,
        childPaths: childPaths,
        type: elementType,
        isSliceEntry: elementIsSliceEntry,
        sliceName: sliceName,
      };
      profileTree.push(parentNode, ...childNodes);
    }
  }

  replaceWrongParentPaths(profileTree); // validate and fix parent paths
  addMissingChildren(profileTree); // add missing children to parent nodes
  return profileTree;
}
