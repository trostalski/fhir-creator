import { ProfileTree, ProfileTreeNode } from "./buildTree";
import { rootName } from "./constants";
import { getPathLength } from "./path_utils";
import { getBranchId } from "./utils";

export function extractDirectChildren(
  parentPath: string,
  childPaths: string[]
) {
  const directChildren: string[] = [];
  for (const childPath of childPaths) {
    if (getPathLength(childPath) === getPathLength(parentPath) + 1) {
      directChildren.push(childPath);
    }
  }
  return directChildren;
}

export function copyAllDescendants(
  node: ProfileTreeNode,
  profileTree: ProfileTree,
  types?: string[]
) {
  const descendants = [];
  let childPaths = node.childPaths.slice(); // first level copy
  if (types) {
    childPaths = childPaths.filter((path) => {
      for (const type of types) {
        if (path.toLowerCase().includes(type.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }
  while (childPaths.length > 0) {
    const childPath = childPaths.shift();
    const childNode = profileTree.find((node) => node.dataPath === childPath);
    if (childNode) {
      descendants.push(childNode);
      childPaths = childPaths.concat(childNode.childPaths);
    }
  }
  return descendants;
}

export function getNodeByDataPath(nodes: ProfileTreeNode[], dataPath: string) {
  return nodes.find((node) => node.dataPath === dataPath);
}

export function getBranchIds(profileTree: ProfileTree) {
  // Get all paths that have the rootName as parent without the root
  const nodes = profileTree.filter((node) => node.parentDataPath === rootName);
  const branchIds = nodes.map((node) => getBranchId(node.baseId));
  return branchIds;
}

export function getChildNodes(profileTree: ProfileTree, node: ProfileTreeNode) {
  const childNodes = [];
  for (const childPath of node.childPaths) {
    const childNode = getNodeByDataPath(profileTree, childPath);
    if (childNode) {
      childNodes.push(childNode);
    }
  }
  return childNodes;
}
