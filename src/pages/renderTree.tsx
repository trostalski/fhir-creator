import { ReactNode } from "react";
import { ProfileTree, ProfileTreeNode } from "./buildTree";
import PrimitveInput from "@/components/PrimitveInput";

export function getPrimitiveComponents(inputTree: ProfileTree) {
  let primitiveComponents: ReactNode[] = [];
  for (const node of inputTree) {
    if (node.isPrimitive) {
      primitiveComponents.push(
        <PrimitveInput id={node.path} element={node.element} />
      );
    }
  }
}

function renderBranchRecusive(
  branch: ProfileTree,
  parentId: string,
  tree: ProfileTree
) {
  const children = tree.filter((node) => node.parentPath === parentId);
  children.map((child) => {
    if (child.isPrimitive) {
      return <PrimitveInput id={child.path} element={child.element} />;
    } else {
      return renderBranchRecusive(branch, child.element.id!, tree);
    }
  });
}

// function renderTree(tree: ProfileTree) {
//   const branchRoots = tree.filter((node) => node.parentId === "root");
//   let branches = [];
//   for (const branchRoot in branchRoots) {
//     branches.push(renderBranchRecusive(branchRoot));
//   }
// }
