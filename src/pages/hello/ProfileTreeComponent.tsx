import React from "react";
import { ProfileTree, ProfileTreeNode } from "../../utils/buildTree";
import PrimitveInput from "@/components/PrimitveInput";

interface ProfileTreeProps {
  tree: ProfileTree;
}

const ProfileTreeComponent: React.FC<ProfileTreeProps> = ({ tree }) => {
  console.log("tree: ", tree);
  const renderNode = (node: ProfileTreeNode) => {
    if (node.isPrimitive) {
      return (
        <div key={node.path} className="pl-8">
          <PrimitveInput node={node} />
        </div>
      );
    } else {
      return (
        <div className="pl-8">
          <h2 className="">{node.path}</h2>
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
