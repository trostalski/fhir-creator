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
  isValidElement,
  mergePaths,
  replaceMultiTypePath,
} from "./buildTree";
import {
  capitalizeFirstLetter,
  getNthPartOfPath,
  getPathSuffix,
  isMultiTypeElement,
  removeNPathPartsFromEnd,
  removeNPathPartsFromStart,
} from "./utils";
import {
  baseAndParentSlicesEqual,
  baseAndSlicesEqual,
  baseEqual,
  getElementTypes,
  getNewDataPath,
  updateElementWithOther,
} from "./mergeDifferential";
import { primitiveTypes } from "./constants";
import { ProfileTreeNode } from "./profileTreeNode";

export class ProfileTree {
  profile: StructureDefinition;
  elements: ElementDefinition[];
  root: ProfileTreeNode;
  nodes: ProfileTreeNode[];

  constructor(profile: StructureDefinition) {
    const elements = profile.snapshot!.element;
    const rootElement = elements[0];
    const { id: rootId } = rootElement;
    this.elements = elements;
    this.profile = profile;
    this.root = new ProfileTreeNode(rootElement, rootId!, null, rootId!, false);
    this.nodes = [this.root];
  }

  async initialize() {
    this.nodes = await this.buildTreeRecursive(
      this.profile.snapshot!.element,
      this.root
    );
    this.updateParents();
  }

  get branchIds() {
    return this.nodes
      .filter((node) => node.parentNode?.isRoot)
      .map((node) => node.displayPath);
  }

  get inputData() {
    return this.nodes
      .filter((node) => node.value)
      .map((node) => ({
        path: node.dataPath,
        value: node.value,
      }));
  }

  private async buildTreeRecursive(
    elements: ElementDefinition[],
    parentNode: ProfileTreeNode
  ) {
    const nodes: ProfileTreeNode[] = [];
    const parentDataPath = parentNode.dataPath;

    for (const element of elements) {
      if (element.path! !== this.root.dataPath && !isValidElement(element)) {
        continue;
      }
      const elementId = element.id!;
      const elementDataPath = this.getDataPath(parentDataPath, element);
      const elementBasePath = mergePaths(
        parentNode.basePath,
        removeNPathPartsFromStart(elementId, 1)
      );
      const elementNode = new ProfileTreeNode(
        element,
        elementDataPath,
        parentNode,
        elementBasePath,
        false
      );
      if (this.hasNode(elementDataPath)) {
        this.removeNode(elementDataPath);
      }
      if (await isPrimitiveElement(element)) {
        elementNode.isPrimitive = true;
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
              childBasePath,
              true
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
        nodes.push(elementNode, ...childNodes);
      }
    }
    return nodes;
  }

  mergeDifferential(differential: StructureDefinition) {
    const diffElements = differential.differential!.element;
    for (const diffElement of diffElements) {
      const diffBasePath = removeNPathPartsFromStart(diffElement.path, 1);
      let node = this.nodes.find((n) => baseAndSlicesEqual(n, diffElement));
      if (node) {
        node.element = updateElementWithOther(node.element, diffElement);
      } else {
        node = this.nodes.find((n) => baseAndParentSlicesEqual(n, diffElement));
        if (!node) {
          node = this.nodes.find((n) => baseEqual(n, diffElement));
        }
        if (node) {
          const newDataPath = getNewDataPath(node.dataPath, diffElement.id!);
          const newParentPath = removeNPathPartsFromEnd(newDataPath, 1);
          const parentNode = this.getNode(newParentPath) || node.parentNode;
          const newNode = new ProfileTreeNode(
            updateElementWithOther(node.element, diffElement),
            newDataPath,
            parentNode,
            node.basePath,
            node.isPrimitive,
            node.childNodes
          );
          parentNode?.addChildNode(newNode);
          let childNodes: ProfileTreeNode[];
          if (isMultiTypeElement(diffElement)) {
            const diffTypes = getElementTypes(diffElement);
            node.type = diffTypes![0];
            childNodes = node.descendants.filter((n) => {
              for (const type of diffTypes!) {
                if (n.dataPath.toLowerCase().includes(type.toLowerCase())) {
                  return true;
                }
              }
              return false;
            });
            childNodes = childNodes.map((childNode) => {
              let childType;
              if (
                childNode.element.type &&
                primitiveTypes.includes(childNode.element.type[0].code)
              ) {
                childType = capitalizeFirstLetter(
                  childNode.element.type[0].code
                );
              } else {
                childType = childNode.element.type![0].code;
              }
              let oldPathParts = replaceMultiTypePath(
                node!.dataPath,
                childType
              );
              let newPathParts = replaceMultiTypePath(newDataPath, childType);
              childNode.parentNode = newNode;
              childNode.dataPath = childNode.dataPath.replace(
                oldPathParts,
                newPathParts
              );
              return childNode;
            });
          } else {
            childNodes = node.descendants;
            childNodes = childNodes.map((childNode) => {
              childNode.parentNode = newNode;
              childNode.dataPath = childNode.dataPath.replace(
                node!.dataPath,
                newDataPath
              );
              return childNode;
            });
          }
          newNode.childNodes = extractDirectChildNodes(newNode, childNodes);
          this.addNode(newNode);
        }
      }
    }
  }

  hasNode(path: string) {
    return this.nodes.some((node) => node.dataPath === path);
  }

  getNode(path: string) {
    return this.nodes.find((node) => node.dataPath === path);
  }

  addNode(node: ProfileTreeNode) {
    this.nodes.push(node);
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

  private updateParents() {
    // e.g. when backbonelements in profile (Condition.evidence.detail)
    for (const node of this.nodes) {
      if (
        getPathLength(node.dataPath) >
        getPathLength(node.parentNode?.dataPath!) + 1
      ) {
        const newParent = this.nodes.find(
          (n) => n.basePath === removeNPathPartsFromEnd(node.basePath, 1)
        );
        if (newParent) {
          node.parentNode = newParent;
          newParent.addChildNode(node);
          const newDataPath = mergePaths(
            newParent.dataPath,
            getPathSuffix(node.dataPath)
          );
          node.updateDataPath(newDataPath);
        }
      }
    }
  }
}
