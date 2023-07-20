import {
  Coding,
  ElementDefinition,
  ElementDefinitionType,
  StructureDefinition,
} from "fhir/r4";
import {
  pathDelimiter,
  primitiveTypes,
  rootName,
  validFhirTypes,
} from "./constants";
import {
  capitalizeFirstLetter,
  elementExpectsArray,
  getElementTypes,
  getIndexString,
  isMultiTypeElement,
  isMultiTypeString,
} from "./utils";
import {
  getNthPartOfPath,
  getPathLength,
  getPathSuffix,
  getSliceNames,
  mergePaths,
  removeNPathPartsFromEnd,
  removeNPathPartsFromStart,
  replaceMultiTypePath,
} from "./path_utils";
import { extractDirectChildrenPaths, getNodeByDataPath } from "./tree_utils";
import { ValueSetResolver } from "./valueset_utils";

export interface ProfileTreeNode {
  element: ElementDefinition;
  dataPath: string;
  baseId: string;
  parentDataPath: string;
  childPaths: string[];
  basePath: string; // used for differential merging
  isPrimitive: boolean;
  isRoot?: boolean;
  bindingCodes?: Coding[];
  isMultiType?: boolean;
  isRootPrimitive?: boolean;
  multiTypeType?: string;
  value: any;
  sliceName?: string;
  cardinalityMet?: boolean;
}

export type ProfileTree = ProfileTreeNode[];

function parseTypeCode(code: string) {
  let result = code;
  if (code === "http://hl7.org/fhirpath/System.String") {
    result = "string";
  }
  return result;
}

async function getTypeDefinition(type: ElementDefinitionType) {
  let result = null;
  const code = parseTypeCode(type.code);
  if (!validFhirTypes.includes(code)) {
    return null;
  }
  try {
    const typeModule = await import(`../fhir/types/${code}`);
    let type_definition = typeModule.default as StructureDefinition;
    if (code == "Reference") {
      // TODO: hack because Reference.identifier results in loop
      type_definition.snapshot!.element =
        type_definition.snapshot!.element.filter(
          (el: ElementDefinition) => el.id !== "Reference.identifier"
        );
    }
    result = type_definition;
  } catch (error) {
    console.log(error);
  }
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

function isPrimitiveType(profile: StructureDefinition) {
  let result = false;
  if (profile.kind === "primitive-type") {
    result = true;
  } else if (profile.id === "Coding") {
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

function getDataPath(parentPath: string, element: ElementDefinition) {
  let result;
  const { id } = element;
  const idPrefix = getNthPartOfPath(id!, 0);
  const idPartAfterRoot = removeNPathPartsFromStart(id!, 1);
  if (isMultiTypeString(parentPath)) {
    const parsedParentPath = replaceMultiTypePath(
      parentPath,
      capitalizeFirstLetter(idPrefix)
    );
    if (getPathLength(parsedParentPath) <= 1) {
      result = parsedParentPath;
    } else {
      result = mergePaths(parsedParentPath, idPartAfterRoot);
    }
  } else {
    result = mergePaths(parentPath, idPartAfterRoot);
  }

  if (elementExpectsArray(element)) {
    result += getIndexString(0);
  }
  return result;
}

function isValidElement(element: ElementDefinition) {
  let result = true;
  if (!element.id) {
    result = false;
  } else if (element.id === rootName) {
    result = false;
  } else if (!element.id.includes(pathDelimiter)) {
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

export function replaceWrongParentPaths(profileTree: ProfileTree) {
  for (const node of profileTree) {
    if (getPathLength(node.parentDataPath) < getPathLength(node.dataPath) - 1) {
      const childPathStem = removeNPathPartsFromEnd(node.dataPath, 1);
      node.parentDataPath = childPathStem;
    }
    if (!getNodeByDataPath(profileTree, node.parentDataPath)) {
      let newParentPath = node.parentDataPath + "[0]"; // try if parent is array
      if (getNodeByDataPath(profileTree, newParentPath)) {
        node.parentDataPath = newParentPath;
      }
    }
  }
}

export function addMissingChildren(profileTree: ProfileTree) {
  for (const node of profileTree) {
    const { parentDataPath: parentPath } = node;
    const parent = profileTree.find((node) => node.dataPath === parentPath);
    if (parent && !parent.childPaths.includes(node.dataPath)) {
      parent.childPaths.push(node.dataPath);
    }
  }
}

export function removeNonePrimmitiveWithoutChildren(profileTree: ProfileTree) {
  // removes all none primitive elements without children
  // this is needed for some backbone children e.g. Observation.component.referenceRange
  for (const node of profileTree) {
    if (!node.isPrimitive && !node.childPaths.length) {
      const idx = profileTree.indexOf(node);
      profileTree.splice(idx, 1);
    }
  }
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

const tryGetBindingCodes = async (element: ElementDefinition) => {
  let codes: Coding[] | undefined;
  if (element.binding?.valueSet) {
    const valueSetResolver = new ValueSetResolver();
    codes = await valueSetResolver.resolve(element.binding!.valueSet!);
  }
  return codes;
};

export function addRootNode(
  profileTree: ProfileTreeNode[],
  elements: ElementDefinition[]
) {
  const rootElement = elements.find((element) => {
    return !element.id!.includes(pathDelimiter);
  });
  const elementNode: ProfileTreeNode = {
    element: rootElement!,
    dataPath: rootName,
    parentDataPath: "",
    basePath: rootName,
    baseId: rootElement!.id!,
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  };
  profileTree.push(elementNode);
}

export const buildProfileTree = async (
  profile: StructureDefinition
): Promise<ProfileTree> => {
  const elements = profile.snapshot!.element!;
  const profileTree = await buildTreeFromElementsRecursive(elements);
  replaceWrongParentPaths(profileTree);
  addMissingChildren(profileTree);
  removeNonePrimmitiveWithoutChildren(profileTree);
  // add root node for constraint checking
  addRootNode(profileTree, elements);
  return profileTree;
};

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

    const elementDataPath = getDataPath(parentPath, element);
    const elementBasePath = mergePaths(parentBasePath, getPathSuffix(id!));

    const elementNode: ProfileTreeNode = {
      element: element,
      dataPath: elementDataPath,
      parentDataPath: parentPath,
      basePath: elementBasePath,
      baseId: id!,
      isPrimitive: false,
      isRootPrimitive: parentPath === rootName,
      childPaths: [],
      value: "",
    };

    let multiTypeType;
    if (isMultiTypeElement(element)) {
      multiTypeType = getElementTypes(element)![0];
    }

    if (element.binding) {
      const bindingCodes = await tryGetBindingCodes(element);
      if (bindingCodes && bindingCodes.length > 0) {
        elementNode.bindingCodes = bindingCodes;
        elementNode.isPrimitive = true;
        profileTree.push(elementNode);
        continue; // skip children binding element is primitive here
      }
    }

    if (await isPrimitiveElement(element)) {
      if (!profileTree.find((node) => node.dataPath === elementDataPath)) {
        elementNode.isPrimitive = true;
        profileTree.push(elementNode);
      }
    } else {
      // element is a complex type, so we need to get its children
      const childrenTypeDefinitions = await getChildrenTypeDefinitions(element);
      const childNodes: ProfileTreeNode[] = [];
      for (const childType of childrenTypeDefinitions) {
        if (childType && isPrimitiveType(childType)) {
          const childElement = childType.snapshot!.element![0];
          const childBasePath = mergePaths(
            elementBasePath,
            getPathSuffix(childElement.id!)
          );
          const type = childType.id;
          childElement.type = [{ code: type! }];
          childElement.min = 0;
          childElement.max = "1";
          const dataPath = mergePaths(
            getDataPath(elementDataPath, childElement),
            type!
          );
          const childNode: ProfileTreeNode = {
            element: childElement,
            dataPath: dataPath,
            parentDataPath: elementDataPath,
            basePath: childBasePath,
            baseId: id!,
            isPrimitive: true,
            childPaths: [],
            value: "",
          };
          childNodes.push(childNode);
        }
        if (childType && !isPrimitiveType(childType)) {
          const grandchildNodes = await buildTreeFromElementsRecursive(
            childType.snapshot!.element!,
            elementDataPath,
            elementBasePath
          );
          childNodes.push(...grandchildNodes);
        }
      }
      // child nodes also include grantchildren nodes, so we need to extract the direct children
      const childPaths = extractDirectChildrenPaths(
        elementDataPath,
        childNodes.map((node) => node.dataPath)
      );
      const parentNode: ProfileTreeNode = {
        element: element,
        dataPath: elementDataPath,
        parentDataPath: parentPath,
        basePath: elementBasePath,
        baseId: id!,
        isPrimitive: false,
        childPaths: childPaths,
        multiTypeType: multiTypeType,
        value: "",
      };
      profileTree.push(parentNode, ...childNodes);
    }
  }
  return profileTree;
}
