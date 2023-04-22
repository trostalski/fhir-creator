import { ElementDefinition, StructureDefinition } from "fhir/r4";
import {
  elementExpectsArray,
  extractDirectChildNodes,
  getChildrenTypeDefinitions,
  getIndexString,
  getPathLength,
  isMultiTypeString,
  isPrimitiveElement,
  isPrimitiveType,
  isSliceEntry,
  mergePaths,
  replaceMultiTypePath,
} from "./buildTree";
import {
  capitalizeFirstLetter,
  getNthPartOfPath,
  getPathSuffix,
  isMultiTypeElement,
} from "./utils";
import { isValidElement } from "react";

export class ProfileTreeNode {
  dataPath: string;
  value: string;
  parentNode: ProfileTreeNode | null;
  childNodes: ProfileTreeNode[];
  element: ElementDefinition;
  previousSibling: ProfileTreeNode;
  nextSibling: ProfileTreeNode;
  basePath: string;
  type?: string;

  constructor(
    element: ElementDefinition,
    dataPath: string,
    parentNode: ProfileTreeNode | null,
    basePath: string
  ) {
    this.childNodes = [];
    this.element = element;
    this.dataPath = dataPath;
    this.parentNode = parentNode;
    this.basePath = basePath;
  }

  get depth() {
    return getPathLength(this.dataPath);
  }

  insertBefore(newNode: ProfileTreeNode, referenceNode: ProfileTreeNode) {}
  insertAfter(newNode: ProfileTreeNode, referenceNode: ProfileTreeNode) {}
  replaceChild(newNode: ProfileTreeNode, oldNode: ProfileTreeNode) {}
  removeChild(oldNode: ProfileTreeNode) {}
  appendChild(child: ProfileTreeNode) {}
}

export class ProfileTree {
  profile: StructureDefinition;
  root: ProfileTreeNode;
  nodes: ProfileTreeNode[];

  constructor(profile: StructureDefinition) {
    if (!profile.snapshot) {
      throw new Error(
        "Could not initialize ProfileTree. Profile must have a snapshot."
      );
    }
    let elements = profile.snapshot.element;
    const rootElement = elements[0];
    elements = elements.filter((e) => isValidElement(e));
    const { id: rootId } = rootElement;
    this.profile = profile;
    this.root = new ProfileTreeNode(rootElement, rootId!, null, rootId!);
    this.nodes = [this.root];
    this.buildTreeRecursive(elements, this.root);
  }

  private async buildTreeRecursive(
    elements: ElementDefinition[],
    parentNode: ProfileTreeNode
  ) {
    const nodes = [];
    const parentDataPath = parentNode.dataPath;

    for (const element of elements) {
      const elementId = element.id!;
      const elementDataPath = this.getDataPath(parentDataPath, element);
      const elementBasePath = mergePaths(
        parentNode.basePath,
        getPathSuffix(elementId)
      );
      const elementNode = new ProfileTreeNode(
        element,
        elementDataPath,
        parentNode,
        elementBasePath
      );
      if (this.hasNode(elementDataPath)) {
        this.removeNode(elementDataPath);
      }
      if (await isPrimitiveElement(element)) {
        nodes.push(elementNode);
      } else {
        // element is a complex type, so we need to get its children
        const childrenTypeDefinitions = await getChildrenTypeDefinitions(
          element
        );
        const childNodes: ProfileTreeNode[] = [];
        for (const childType of childrenTypeDefinitions) {
          if (childType && isPrimitiveType(childType)) {
            // we need to set element properties from type definition (e.g. for onsetDateTime necessary)
            const childElement = childType.snapshot!.element![0];
            const childBasePath = mergePaths(
              elementBasePath,
              getPathSuffix(childElement.id)
            );
            const type = childType.id;
            childElement.type = [{ code: type }];
            childElement.min = 0;
            childElement.max = "1";
            const dataPath = mergePaths(
              this.getDataPath(elementDataPath, childElement),
              type
            );

            const childNode: ProfileTreeNode = new ProfileTreeNode(
              childElement,
              dataPath,
              elementNode,
              childBasePath
            );

            childNodes.push(childNode);
          }
          if (childType && !isPrimitiveType(childType)) {
            const grandchildNodes = await this.buildTreeRecursive(
              childType.snapshot!.element!,
              elementNode
            );
            childNodes.push(...grandchildNodes);
          }
        }
        // child nodes also include grantchildren nodes, so we need to extract the direct children
        const directChildNodes = extractDirectChildNodes(
          elementNode,
          childNodes
        );
        elementNode.childNodes = directChildNodes;
        nodes.push(elementNode, ...directChildNodes);
      }
    }

    return nodes;
  }

  hasNode(path: string) {
    return this.nodes.some((node) => node.dataPath === path);
  }

  removeNode(path: string) {
    const nodeIndex = this.nodes.findIndex((node) => node.dataPath === path);
    if (nodeIndex === -1) {
      return;
    }
    this.nodes.splice(nodeIndex, 1);
  }

  private getDataPath(parentPath: string, element: ElementDefinition) {
    let result;
    const { id } = element;
    const idPrefix = getNthPartOfPath(id!, 0);
    const idPartAfterRoot = getNthPartOfPath(id!, 1);

    if (isMultiTypeString(parentPath)) {
      const parsedParentPath = replaceMultiTypePath(
        parentPath,
        capitalizeFirstLetter(idPrefix)
      );
      result = mergePaths(parsedParentPath, idPartAfterRoot);
    } else {
      result = mergePaths(parentPath, idPartAfterRoot);
    }

    if (elementExpectsArray(element)) {
      result += getIndexString(0);
    }
    return result;
  }
}
