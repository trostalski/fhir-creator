import {
  ElementDefinition,
  ElementDefinitionType,
  StructureDefinition,
} from "fhir/r4";
import { primitiveTypes } from "./constants";

interface ProfileTreeNode {
  element: ElementDefinition;
  component: string;
  path?: string;
  parentId: string | null;
}

type ProfileTree = ProfileTreeNode[];

enum TreeComponents {
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
    }
    if (primitiveTypes.includes(type.code)) {
      result = true;
    }
    if (primitiveTypes.includes(getIdSuffix(element.id!))) {
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
  } else if (profile.id === "Identifier") {
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

function getIdSuffix(id: string) {
  const idParts = id.split(".");
  return idParts[idParts.length - 1];
}

export function buildTreeFromElementsRecursive(
  elements: ElementDefinition[],
  profileTree: ProfileTree = [],
  parentId: string = ""
): ProfileTree {
  let result = profileTree;
  for (const element of elements) {
    if (!containsDot(element.id!)) {
      continue;
    }

    if (idExistsInTree(element.id!, profileTree)) {
      // const existingNode = profileTree.find((node) => node.path === element.id);
      // const updatedElement = updateElementWithOther(
      //   existingNode?.element!,
      //   element
      // );
      // // update node in tree
      // existingNode!.element = updatedElement;
    }

    if (isPrimitiveElement(element)) {
      // is a primitive type
      profileTree.push({
        element: element,
        component: TreeComponents.PrimitveInput,
        parentId: parentId,
      });
    } else {
      // is a complex type
      // add node to and add all type children
      const childrenTypeDefinitions = getChildrenTypeDefinitions(element);
      let childrenElements: ElementDefinition[] = [];
      for (const childType of childrenTypeDefinitions) {
        if (!childType) {
          continue;
        }
        if (isPrimitiveType(childType)) {
          profileTree.push({
            element: childType.snapshot!.element![0],
            component: TreeComponents.PrimitveInput,
            parentId: element.id!,
          });
        } else {
          childrenElements.push(...childType.snapshot!.element!);
        }
      }
      result.push({
        element: element,
        component: TreeComponents.ParentWrapper,
        parentId: element.id!,
      });
      profileTree.concat(
        buildTreeFromElementsRecursive(
          childrenElements!,
          profileTree,
          element.id!
        )
      );
    }
  }
  return result;
}

const test = () => {
  const profile: StructureDefinition = require("../data/base-profiles/Condition_profile.json");
  const elements = profile.snapshot!.element!;
  const tree = buildTreeFromElementsRecursive(elements, [], "");
  console.log(tree.length);
  tree.map((node) => {
    console.log(node.element.id!);
  });
};

test();
