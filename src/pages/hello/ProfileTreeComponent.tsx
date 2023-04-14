import React from "react";
import { ProfileTree, ProfileTreeNode, TreeComponents } from "../buildTree";

interface ProfileTreeProps {
  tree: ProfileTree;
}

const ProfileTreeComponent: React.FC<ProfileTreeProps> = ({ tree }) => {
  const renderNode = (node: ProfileTreeNode) => {
    if (node.isPrimitive) {
      return (
        <>
          <h1>primitve: {node.path}</h1>
        </>
      );
    } else {
      return (
        <div>
          <h2>complex: {node.path}</h2>
          {node.childPaths.map((childPath: string) => {
            const childNode = tree.find(
              (n: ProfileTreeNode) => n.path === childPath
            );
            return childNode && renderNode(childNode);
          })}
        </div>
      );
    }
  };

  return (
    <>
      {tree.map((node: ProfileTreeNode) => {
        if (node.parentPath === "root") {
          return renderNode(node);
        }
        return null;
      })}
    </>
  );
};

export default ProfileTreeComponent;
