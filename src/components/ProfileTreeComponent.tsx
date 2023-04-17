import React, { useState } from "react";
import { ProfileTree, ProfileTreeNode } from "../utils/buildTree";
import PrimitveInput from "@/components/PrimitveInput";

interface ProfileTreeProps {
  tree: ProfileTree;
}

const ProfileTreeComponent: React.FC<ProfileTreeProps> = ({ tree }) => {
  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);

  const toggleNodeExpansion = (nodePath: string) => {
    if (expandedNodes.includes(nodePath)) {
      setExpandedNodes(expandedNodes.filter((path) => path !== nodePath));
    } else {
      setExpandedNodes([...expandedNodes, nodePath]);
    }
  };

  const isNodeExpanded = (nodePath: string) => {
    return expandedNodes.includes(nodePath);
  };

  const renderNode = (node: ProfileTreeNode) => {
    if (node.isPrimitive) {
      return (
        <div key={node.path} className="flex-grow p-2">
          <PrimitveInput node={node} />
        </div>
      );
    } else {
      const isExpanded = isNodeExpanded(node.path);
      return (
        <div
          className="w-full p-2 border-2 rounded-md shadow-sm border-gray-400"
          key={node.path}
        >
          <div
            className="cursor-pointer"
            onClick={() => toggleNodeExpansion(node.path)}
          >
            <h2 className="">
              {node.path.replace(node.parentPath + ".", "")}{" "}
              {isExpanded ? "▼" : "▶"}
            </h2>
          </div>
          {isExpanded && (
            <div className="flex flex-row flex-wrap gap-4">
              {node.childPaths.map((childPath: string) => {
                const childNode = tree.find(
                  (n: ProfileTreeNode) => n.path === childPath
                );
                return childNode && renderNode(childNode);
              })}
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {tree.map((node: ProfileTreeNode) => {
        if (node.parentPath === "root") {
          return renderNode(node);
        }
        return null;
      })}
    </div>
  );
};

export default ProfileTreeComponent;
