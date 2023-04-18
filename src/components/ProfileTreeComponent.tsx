import React, { useState } from "react";
import { ProfileTree, ProfileTreeNode } from "../utils/buildTree";
import PrimitveInput from "@/components/PrimitveInput";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { parseMaxString, shouldDisplayNode } from "@/utils/utils";
import { GrFormAdd } from "react-icons/gr";

interface ProfileTreeComponentProps {
  profileTree: ProfileTree;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
}

const ProfileTreeComponent: React.FC<ProfileTreeComponentProps> = (
  props: ProfileTreeComponentProps
) => {
  const [expandedNodes, setExpandedNodes] = useState<string[]>(
    props.profileTree.map((n) => n.path)
  );

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

  const renderNode = (
    node: ProfileTreeNode,
    setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>
  ) => {
    if (node.isPrimitive) {
      return (
        <div key={node.path} className="flex-grow p-2">
          <PrimitveInput
            node={node}
            profileTreeNode={node}
            setProfileTree={setProfileTree}
          />
        </div>
      );
    } else {
      const isExpanded = isNodeExpanded(node.path);
      return (
        <div
          className={`w-full p-4 border-2 rounded-md shadow-sm border-gray-200 ${
            node.element.min! > 0
              ? "after:text-red-600 after:content-['*']"
              : ""
          }`}
          key={node.path}
        >
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row">
              <button onClick={() => toggleNodeExpansion(node.path)}>
                {isExpanded ? (
                  <MdExpandLess size={24} />
                ) : (
                  <MdExpandMore size={24} />
                )}
              </button>
              <h2 className="">
                {node.path.replace(node.parentPath + ".", "")}
              </h2>
            </div>
            <div className="flex flex-row">
              {!node.element.type || node.element.type?.length <= 1 ? null : (
                <select
                  id="element-type"
                  placeholder="Type"
                  className="bg-white py-0.5 px-4 border w-40 border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {}}
                >
                  {node.element.type ? (
                    node.element.type.map((type) => (
                      <option value={type.code}>{type.code}</option>
                    ))
                  ) : (
                    <option value="string">string</option>
                  )}
                </select>
              )}
              {parseMaxString(node.element.max!) > 1 ? (
                <button>
                  <GrFormAdd />
                </button>
              ) : (
                <button disabled>
                  <GrFormAdd style={{ opacity: 0.2 }} />
                </button>
              )}
            </div>
          </div>
          {isExpanded && (
            <div className="flex flex-row flex-wrap gap-4 p-2">
              {node.childPaths.map((childPath: string) => {
                const childNode = props.profileTree.find(
                  (n: ProfileTreeNode) => n.path === childPath
                );
                return childNode && renderNode(childNode, props.setProfileTree);
              })}
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {props.profileTree.map((node: ProfileTreeNode) => {
        if (node.parentPath === "root") {
          return renderNode(node, props.setProfileTree);
        }
        return null;
      })}
    </div>
  );
};

export default ProfileTreeComponent;
