import {
  ElementDefinition,
  ElementDefinitionType,
  StructureDefinition,
} from "fhir/r4";
import { primitiveTypes } from "./constants";

export interface ProfileTreeNode {
  element: ElementDefinition;
  component: string;
  path: string;
  parentPath: string | null;
  childPaths: string[];
  isPrimitive: boolean;
}

export type ProfileTree = ProfileTreeNode[];

export enum TreeComponents {
  PrimitveInput = "PrimitveInput",
  ParentWrapper = "ParentWrapper",
}

export const containsDot = (str: string) => {
  return str.includes(".");
};

export const updateElementWithOther = (
  element: ElementDefinition,
  otherElement: ElementDefinition
) => {
  // merge element with otherElement, properties of otherElement overwrite properties of element
  const updatedElement = { ...element, ...otherElement };
  return updatedElement;
};

function parseCode(code: string) {
  let result = code;
  if (code === "http://hl7.org/fhirpath/System.String") {
    result = "string";
  }
  return result;
}

function getTypeDefinition(type: ElementDefinitionType) {
  let result = null;
  const type_base_path: string = "../data/fhir-types/";
  const code = parseCode(type.code);
  try {
    const type_definition: StructureDefinition = require(`${type_base_path}${code}.json`);
    result = type_definition;
  } catch (error) {}
  return result;
}

function isPrimitiveElement(element: ElementDefinition) {
  let result = false;

  if (element.type && element.type.length == 1) {
    const type = element.type[0];
    const type_definition = getTypeDefinition(type);
    if (type_definition && isPrimitiveType(type_definition)) {
      result = true;
    } else if (primitiveTypes.includes(type.code)) {
      result = true;
    }
    return result;
  }
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

function idExistsInTree(id: string, tree: ProfileTree) {
  for (const node of tree) {
    if (node.path === id) {
      return true;
    }
  }
  return false;
}

function getChildrenTypeDefinitions(element: ElementDefinition) {
  let childProfiles = [];
  if (element.type) {
    for (const type of element.type!) {
      const childTypeDefinition = getTypeDefinition(type);
      childProfiles.push(childTypeDefinition);
    }
  }
  return childProfiles;
}

function getChildren(element: ElementDefinition, parentPath: string) {
  const childElements = getChildElements(element);
}
function getChildElements(element: ElementDefinition) {
  let childElements = [];
  if (element.type) {
    for (const type of element.type!) {
      const childProfile = getTypeDefinition(type);
      if (!childProfile) {
        continue;
      }
      for (const childElement of childProfile.snapshot!.element!) {
        childElements.push(childElement);
      }
    }
  }

  return childElements;
}

function getIdSuffix(id: string) {
  const idParts = id.split(".");
  return idParts[idParts.length - 1];
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
  return parentPath + "." + removeIdPrefix(id);
}

export function buildTreeFromElementsRecursive(
  elements: ElementDefinition[],
  parentPath = "root"
): ProfileTree {
  const profileTree: ProfileTree = [];

  for (const element of elements) {
    const { id } = element;
    if (!id?.includes(".")) {
      continue; // skip root element
    }
    const elementPath = getPathFromParentPathAndId(parentPath, id!);
    if (isPrimitiveElement(element)) {
      profileTree.push({
        element,
        component: TreeComponents.PrimitveInput,
        parentPath,
        isPrimitive: true,
        path: elementPath,
        childPaths: [],
      });
    } else {
      const childNodes = getChildrenTypeDefinitions(element).flatMap(
        (childType) => {
          if (!childType) {
            return [];
          }
          if (isPrimitiveType(childType)) {
            const childId = childType.snapshot?.element?.[0].id;
            if (!childId?.includes(".")) {
              return []; // skip root element
            }
            const childPath = getPathFromParentPathAndId(elementPath, childId!);
            return {
              element: childType.snapshot!.element![0],
              component: TreeComponents.PrimitveInput,
              parentPath: elementPath,
              isPrimitive: true,
              path: childPath,
              childPaths: [],
            };
          } else {
            const grandchildNodes = buildTreeFromElementsRecursive(
              childType.snapshot!.element!,
              elementPath
            );
            return grandchildNodes;
          }
        }
      );
      const childPaths = Array.from(childNodes, ({ path }) => path);
      const parentNode = {
        element,
        component: TreeComponents.ParentWrapper,
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

function test() {
  const profile: StructureDefinition = require("../data/base-profiles/Condition_profile.json");
  const elements = profile.snapshot!.element!;
  const tree = buildTreeFromElementsRecursive(elements, "root");
  const s = tree.sort((a, b) => a.path.localeCompare(b.path));
  s.forEach((node) => {
    // console.log("parent path: ", node.parentPath);
    console.log("path: ", node.path);
    console.log("primitive: ", node.isPrimitive);
    // console.log("childPaths: ", node.childPaths);
    // console.log("\n");
  });
  console.log(tree.length);
}

test();
