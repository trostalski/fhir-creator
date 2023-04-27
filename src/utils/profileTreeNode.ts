import { ElementDefinition } from "fhir/r4";
import { getPathLength } from "./buildTree";

export class ProfileTreeNode {
  dataPath: string;
  value: string;
  parentNode: ProfileTreeNode | null;
  private _childNodes: ProfileTreeNode[];
  element: ElementDefinition;
  basePath: string;
  isPrimitive: boolean;
  type?: string;

  constructor(
    element: ElementDefinition,
    dataPath: string,
    parentNode: ProfileTreeNode | null,
    basePath: string,
    isPrimitive: boolean,
    childNodes?: ProfileTreeNode[]
  ) {
    this.element = element;
    this.dataPath = dataPath;
    this.parentNode = parentNode;
    this.basePath = basePath;
    this.isPrimitive = isPrimitive;
    this.childNodes = childNodes || [];
  }

  get depth() {
    return getPathLength(this.dataPath);
  }

  get isRoot() {
    return this.depth == 1;
  }

  get isRootPrimitive() {
    return this.parentNode?.isRoot && this.isPrimitive;
  }

  get descendants() {
    return this.getDescendants();
  }

  set childNodes(nodes: ProfileTreeNode[]) {
    for (const node of nodes) {
      if (node.parentNode != this) {
        node.parentNode = this;
      }
    }
    this._childNodes = nodes;
  }

  get childNodes() {
    return this._childNodes;
  }

  get displayPath() {
    return this.dataPath
      .replace(this.parentNode?.dataPath + ".", "")
      .replace(/\[.\]/g, "");
  }

  addChildNode(node: ProfileTreeNode) {
    this.childNodes.push(node);
  }

  updateParent(parent: ProfileTreeNode) {
    this.parentNode = parent;
  }

  updateDataPath(newDataPath: string) {
    const oldDataPath = this.dataPath;
    this.dataPath = newDataPath;
    for (const descendant of this.descendants) {
      descendant.dataPath = descendant.dataPath.replace(
        oldDataPath,
        newDataPath
      );
    }
  }

  private getDescendants() {
    const descendants = [];
    const stack = this.childNodes;
    while (stack.length) {
      const node = stack.shift()!;
      descendants.push(node);
      stack.unshift(...node.childNodes);
    }
    return descendants;
  }

  insertBefore(newNode: ProfileTreeNode, referenceNode: ProfileTreeNode) {}
  insertAfter(newNode: ProfileTreeNode, referenceNode: ProfileTreeNode) {}
  replaceChild(newNode: ProfileTreeNode, oldNode: ProfileTreeNode) {}
  removeChild(oldNode: ProfileTreeNode) {}
  appendChild(child: ProfileTreeNode) {}
}
