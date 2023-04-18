import {
  ElementDefinition,
  ElementDefinitionType,
  StructureDefinition,
} from "fhir/r4";
import { primitiveTypes } from "./constants";
import { capitalizeFirstLetter } from "./utils";

export interface ProfileTreeNode {
  element: ElementDefinition;
  path: string;
  parentPath: string;
  childPaths: string[];
  isPrimitive: boolean;
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

function removeIdPrefix(id: string) {
  const idParts = id.split(".");
  idParts.shift();
  return idParts.join(".");
}

function getPathFromParentPathAndId(parentPath: string, id: string) {
  let result = parentPath;
  if (!containsDot(id)) {
    result = result;
  } else if (parentPath.endsWith("[x]")) {
    const parsedParentPath = parentPath.replace(
      "[x]",
      capitalizeFirstLetter(id.split(".")[0])
    );
    result = parsedParentPath + "." + removeIdPrefix(id);
  } else {
    result = parentPath + "." + removeIdPrefix(id);
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
  } else if (element.id === "root") {
    result = false;
  } else if (!element.id.includes(".")) {
    result = false;
  } else if (element.base?.path?.endsWith("id")) {
    result = false;
  } else if (element.id.endsWith(".extension")) {
    result = false;
  }
  return result;
}

function replaceWrongParentPaths(profileTree: ProfileTree) {
  for (const node of profileTree) {
    const { path, parentPath } = node;
    if (parentPath.split(".").length < path.split(".").length - 1) {
      const childPathStem = path.split(".").slice(0, -1).join(".");
      node.parentPath = childPathStem;
    }
  }
}

function addMissingChildren(profileTree: ProfileTree) {
  for (const node of profileTree) {
    const { parentPath } = node;
    const parent = profileTree.find((node) => node.path === parentPath);
    if (parent && !parent.childPaths.includes(node.path)) {
      parent.childPaths.push(node.path);
    }
  }
}

export async function buildTreeFromElementsRecursive(
  elements: ElementDefinition[],
  parentPath: string = "root"
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

    const elementPath = getPathFromParentPathAndId(parentPath, id!);

    if (await isPrimitiveElement(element)) {
      const node: ProfileTreeNode = {
        element,
        parentPath,
        isPrimitive: true,
        path: elementPath,
        childPaths: [],
      };
      if (!profileTree.find((node) => node.path === elementPath)) {
        profileTree.push(node);
      }
    } else {
      // element is a complex type, so we need to get its children
      const childrenTypeDefinitions = await getChildrenTypeDefinitions(element);
      const childNodes: ProfileTreeNode[] = [];
      for (const childType of childrenTypeDefinitions) {
        if (childType && !isPrimitiveType(childType)) {
          const grandchildNodes = await buildTreeFromElementsRecursive(
            childType.snapshot!.element!,
            elementPath
          );
          childNodes.push(...grandchildNodes);
        }
      }
      // child nodes also include grantchildren nodes, so we need to extract the direct children
      const childPaths = extractDirectChildren(
        elementPath,
        childNodes.map((node) => node.path)
      );
      const parentNode: ProfileTreeNode = {
        element,
        parentPath,
        isPrimitive: false,
        path: elementPath,
        childPaths,
      };
      profileTree.push(parentNode, ...childNodes);
    }
  }

  replaceWrongParentPaths(profileTree); // validate and fix parent paths
  addMissingChildren(profileTree); // add missing children to parent nodes

  return profileTree;
}
