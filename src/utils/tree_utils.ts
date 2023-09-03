import { CodingChildren } from "@/types";
import { ProfileTree, ProfileTreeNode } from "./buildTree";
import { rootName } from "./constants";
import { getPathLength } from "./path_utils";
import { getBranchId } from "./utils";

export function getAllChidlren(
  profileTree: ProfileTree,
  node: ProfileTreeNode
) {
  const children = [];
  for (const childPath of node.childPaths) {
    const childNode = getNodeByDataPath(profileTree, childPath);
    if (childNode) {
      children.push(childNode);
    }
  }
  return children;
}

export function getCodingChildren(
  profileTree: ProfileTree,
  node: ProfileTreeNode
): CodingChildren {
  const children = getAllChidlren(profileTree, node);
  const systemNode = children.find((child) =>
    child.baseId.endsWith(".system")
  )!;
  const codeNode = children.find((child) => child.baseId.endsWith(".code"))!;
  const displayNode = children.find((child) =>
    child.baseId.endsWith(".display")
  )!;
  const versionNode = children.find((child) =>
    child.baseId.endsWith(".version")
  )!;
  const userSelectedNode = children.find((child) =>
    child.baseId.endsWith(".userSelected")
  )!;
  return {
    systemNode,
    codeNode,
    displayNode,
    versionNode,
    userSelectedNode,
  };
}

export function extractDirectChildrenPaths(
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

export function extractDirectChildren(
  parentNode: ProfileTreeNode,
  childNodes: ProfileTreeNode[]
) {
  const directChildren: ProfileTreeNode[] = [];
  for (const childNode of childNodes) {
    if (
      getPathLength(childNode.dataPath) ===
      getPathLength(parentNode.dataPath) + 1
    ) {
      directChildren.push(childNode);
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
    const existingChildNode = getNodeByDataPath(profileTree, childPath!);
    const childNodeCopy = structuredClone(existingChildNode);
    if (childNodeCopy) {
      descendants.push(childNodeCopy);
      childPaths = childPaths.concat(childNodeCopy.childPaths);
    }
  }
  return descendants;
}

export function getAllDescendants(
  profileTree: ProfileTree,
  node: ProfileTreeNode,
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

export function getLastDescendant(
  profileTree: ProfileTree,
  node: ProfileTreeNode
) {
  // returns the last descendant or the node itself if it has no descendants
  const descendants = getAllDescendants(profileTree, node);
  if (descendants.length > 0) {
    return descendants[descendants.length - 1];
  }
  return node;
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

export function insertAfterNode(
  profileTree: ProfileTree,
  afterNode: ProfileTreeNode,
  nodeIn: ProfileTreeNode
) {
  const afterNodeIndex = profileTree.indexOf(afterNode);
  profileTree.splice(afterNodeIndex + 1, 0, nodeIn);
  return profileTree;
}

export function updateNode(profileTree: ProfileTree, newNode: ProfileTreeNode) {
  const node = getNodeByDataPath(profileTree, newNode.dataPath);
  if (node) {
    Object.assign(node, newNode);
  }
  return profileTree;
}

export function duplicateBranch(
  profileTree: ProfileTree,
  node: ProfileTreeNode
) {
  const parentNode = getNodeByDataPath(profileTree, node.parentDataPath);
  const descendants = copyAllDescendants(node, profileTree);
  const directChildren = extractDirectChildren(node, descendants);

  if (parentNode) {
    parentNode.childPaths.push(node.dataPath);
  }
  if (descendants) {
    let prevChild = node;
    const oldDataPath = directChildren![0].parentDataPath;
    for (const descendant of descendants) {
      descendant.dataPath = descendant.dataPath.replace(
        oldDataPath,
        node.dataPath
      );
      descendant.childPaths = descendant.childPaths.map((childPath) =>
        childPath.replace(oldDataPath, node.dataPath)
      );
      descendant.value = "";
      insertAfterNode(profileTree, prevChild, descendant);
      prevChild = descendant;
    }
    const newChildPaths = [];
    for (const directChild of directChildren) {
      directChild.parentDataPath = node.dataPath;
      newChildPaths.push(directChild.dataPath);
    }
    node.childPaths = newChildPaths;
    updateNode(profileTree, node);
  }
  return profileTree;
}

export function getFirstChildren(profileTree: ProfileTree) {
  let firstChildren: ProfileTreeNode[] = [];
  profileTree.forEach((node) => {
    // find nodes one level below the root node
    if (node.dataPath.split(".").length == 2) {
      firstChildren.push(node);
    }
  });
  return firstChildren;
}

export function deleteBranch(profileTree: ProfileTree, node: ProfileTreeNode) {
  const parentNode = getNodeByDataPath(profileTree, node.parentDataPath);
  const descendants = getAllDescendants(profileTree, node);
  if (parentNode) {
    parentNode!.childPaths = parentNode!.childPaths.filter(
      (childPath) => childPath !== node.dataPath
    );
  }
  for (const descendant of descendants) {
    const index = profileTree.indexOf(descendant);
    profileTree.splice(index, 1);
  }
  const index = profileTree.indexOf(node);
  profileTree.splice(index, 1);
  return profileTree;
}

function nodeOrChildWasModified(
  profileTree: ProfileTree,
  node: ProfileTreeNode
) {
  if (node.value !== "") {
    return true;
  }
  const children = getChildNodes(profileTree, node);
  for (const child of children) {
    if (nodeOrChildWasModified(profileTree, child)) {
      return true;
    }
  }
  return false;
}

export function getExpansionBgColour(
  profileTree: ProfileTree,
  pathsWithInvalidCardinality: string[],
  hastConstraintIssues: boolean,
  node: ProfileTreeNode
) {
  if (pathsWithInvalidCardinality.includes(node.dataPath)) {
    return "bg-red-400";
  } else if (nodeOrChildWasModified(profileTree, node)) {
    return "bg-green-500";
  } else if (hastConstraintIssues) {
    return "bg-pink-800";
  } else if (node.element.sliceName) {
    return "bg-violet-300";
  } else {
    return "bg-blue-300";
  }
}

export function nodeIsType(node: ProfileTreeNode, type: string) {
  if (node.multiTypeType) {
    return node.multiTypeType === type;
  } else if (!node.element.type) {
    return false;
  } else {
    return node.element.type[0].code === type;
  }
}
