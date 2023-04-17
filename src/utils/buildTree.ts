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
  parentPath: string | null;
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
  if (!containsDot(id)) {
    return parentPath;
  }
  if (parentPath.endsWith("[x]")) {
    const parsedParentPath = parentPath.replace(
      "[x]",
      capitalizeFirstLetter(id.split(".")[0])
    );
    return parsedParentPath + "." + removeIdPrefix(id);
  }
  return parentPath + "." + removeIdPrefix(id);
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
    if (!id?.includes(".")) {
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
      profileTree.push(node);
    } else {
      // element is a complex type, so we need to get its children
      const childrenTypeDefinitions = await getChildrenTypeDefinitions(element);
      const childNodes: ProfileTreeNode[] = [];
      for (const childType of childrenTypeDefinitions) {
        if (!childType) {
          continue;
        }
        if (isPrimitiveType(childType)) {
          // child is a primitive type (e.g. string)
          const childId = childType.snapshot?.element?.[0].id;
          console.log(childId);
          if (!childId?.includes(".")) {
            console.log("skipping root element");
            continue; // skip root element
          }
          const childPath = getPathFromParentPathAndId(elementPath, childId!);
          const node: ProfileTreeNode = {
            element: childType.snapshot!.element![0],
            parentPath: elementPath,
            isPrimitive: true,
            path: childPath,
            childPaths: [],
          };
          childNodes.push(node);
        } else {
          const grandchildNodes = await buildTreeFromElementsRecursive(
            childType.snapshot!.element!,
            elementPath
          );
          childNodes.push(...grandchildNodes);
        }
      }
      const childPaths = childNodes.map((node) => node.path);
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

  return profileTree;
}
