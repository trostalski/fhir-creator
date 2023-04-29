import React, { useState } from "react";
import { ProfileTree, ProfileTreeNode } from "../utils/buildTree";
import PrimitveInput from "@/components/PrimitveInput";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { logWithCopy, parseMaxString, shouldDisplayNode } from "@/utils/utils";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import {
  extractIndex,
  getDisplayPath,
  getPathSuffix,
  incrementDataPath,
} from "@/utils/path_utils";
import {
  deleteBranch,
  duplicateBranch,
  getAllDescendants,
  getLastDescendant,
  insertAfterNode,
} from "@/utils/tree_utils";

interface ProfileTreeComponentProps {
  profileTree: ProfileTree;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
  checkedBranchIds: string[];
}

const ProfileTreeComponent: React.FC<ProfileTreeComponentProps> = (
  props: ProfileTreeComponentProps
) => {
  const [closedNodes, setClosedNodes] = useState<string[]>([]);

  const isNodeExpanded = (nodePath: string) => {
    return !closedNodes.includes(nodePath);
  };
  const toggleNodeExpansion = (nodePath: string) => {
    if (isNodeExpanded(nodePath)) {
      setClosedNodes([...closedNodes, nodePath]);
    } else {
      setClosedNodes(closedNodes.filter((path) => path !== nodePath));
    }
  };

  const renderNode = (node: ProfileTreeNode) => {
    const isExpanded = isNodeExpanded(node.dataPath);
    if (node.isPrimitive) {
      if (node.isRootPrimitive) {
        return (
          // TODO: replicate from below
          <div
            className={`w-full p-1 border-[1px] border-dotted rounded-sm border-gray-200 ${
              node.element.sliceName ? "border-violet-400" : ""
            }`}
            key={node.dataPath}
          >
            <div className="flex flex-row items-center">
              <button
                className="flex flex-row items-center"
                onClick={() => toggleNodeExpansion(node.dataPath)}
              >
                {isExpanded ? (
                  <MdExpandLess size={24} />
                ) : (
                  <MdExpandMore size={24} />
                )}
                <h2
                  className={`font-light text-sm ${
                    node.element.min! > 0
                      ? "after:text-red-600 after:content-['*']"
                      : ""
                  }`}
                >
                  {getDisplayPath(node)}
                </h2>
              </button>
            </div>
            {isExpanded && (
              <div key={node.dataPath} className="flex-grow pb-2">
                <PrimitveInput
                  node={node}
                  profileTreeNode={node}
                  setProfileTree={props.setProfileTree}
                />
              </div>
            )}
          </div>
        );
      }
      return (
        <div key={node.dataPath} className="flex-grow pb-2">
          <PrimitveInput
            node={node}
            profileTreeNode={node}
            setProfileTree={props.setProfileTree}
          />
        </div>
      );
    } else {
      return (
        <div
          className={`w-full p-1 border-[1px] border-dotted rounded-sm border-gray-200 ${
            node.element.sliceName ? "border-violet-400" : ""
          }`}
          key={node.dataPath}
        >
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <button
                className="flex flex-row items-center"
                onClick={() => toggleNodeExpansion(node.dataPath)}
              >
                {isExpanded ? (
                  <MdExpandLess size={24} />
                ) : (
                  <MdExpandMore size={24} />
                )}
                <h2
                  className={`font-light text-sm ${
                    node.element.min! > 0
                      ? "after:text-red-600 after:content-['*']"
                      : ""
                  }`}
                >
                  {getDisplayPath(node)}
                </h2>
              </button>
            </div>
            <span className="flex-grow" />
            <div className="flex flex-row items-center gap-2">
              {node.element.sliceName && (
                <AiOutlinePieChart style={{ color: "" }} />
              )}
              {!node.element.type || node.element.type?.length <= 1 ? null : (
                <select
                  id="element-type"
                  placeholder="Type"
                  className="bg-white py-0.5 px-4 w-40 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={node.type}
                  onChange={(e) => {
                    const newProfileTree = [...props.profileTree];
                    const nodeIndex = newProfileTree.findIndex(
                      (n) => n.dataPath === node.dataPath
                    );
                    (newProfileTree[nodeIndex].type = e.target.value),
                      props.setProfileTree(newProfileTree);
                  }}
                >
                  {node.element.type ? (
                    node.element.type.map((type) => (
                      <option value={type.code} key={type.code}>
                        {type.code}
                      </option>
                    ))
                  ) : (
                    <option value="string">string</option>
                  )}
                </select>
              )}
              {extractIndex(getPathSuffix(node.dataPath)) > 0 ? (
                <button
                  onClick={() => {
                    let newProfileTree = [...props.profileTree];
                    newProfileTree = deleteBranch(newProfileTree, node);
                    props.setProfileTree(newProfileTree);
                  }}
                >
                  <AiOutlineMinus size={20} />
                </button>
              ) : null}
              {parseMaxString(node.element.max!) > 1 ? (
                <button
                  onClick={() => {
                    // TODO
                    const newNode = structuredClone(node);
                    newNode.value = "";
                    newNode.dataPath = incrementDataPath(
                      props.profileTree,
                      node
                    );
                    const lastDescendant = getLastDescendant(
                      props.profileTree,
                      node
                    );
                    let newProfileTree = [...props.profileTree];
                    newProfileTree = insertAfterNode(
                      newProfileTree,
                      lastDescendant,
                      newNode
                    );
                    newProfileTree = duplicateBranch(newProfileTree, newNode);
                    props.setProfileTree(newProfileTree);
                  }}
                >
                  <GrFormAdd size={20} />
                </button>
              ) : null}
            </div>
          </div>
          {isExpanded && (
            <div className="flex flex-row flex-wrap gap-1 pl-8">
              {node.childPaths.map((childPath: string) => {
                let childNode = props.profileTree.find(
                  (n: ProfileTreeNode) => n.dataPath === childPath
                );
                if (node.type) {
                  // multiype node with select input for type selection
                  // the following code filters the child nodes to only show the ones that match the selected type
                  childNode = childNode?.dataPath
                    .toLowerCase()
                    .includes(node.type.toLowerCase())
                    ? childNode
                    : undefined;
                }
                return childNode && renderNode(childNode);
              })}
            </div>
          )}
        </div>
      );
    }
  };

  logWithCopy("Tree before rendering", props.profileTree);
  return (
    <div>
      <div className="flex flex-row">
        <span className="flex-grow" />
        <button
          className="text-gray-500 hover:text-gray-70 text-xs rounded py-1 px-2"
          onClick={() =>
            setClosedNodes(props.profileTree.map((node) => node.dataPath))
          }
        >
          Collapse All
        </button>
        <button
          className="text-gray-500 hover:text-gray-700 text-xs rounded py-1 px-2"
          onClick={() => setClosedNodes([])}
        >
          Open All
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {props.profileTree
          .filter((node) => shouldDisplayNode(node, props.checkedBranchIds))
          .map((node: ProfileTreeNode) => {
            if (node.parentDataPath === "root") {
              return renderNode(node);
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default ProfileTreeComponent;
