import { usePathCounter } from "@/hooks/usePathCounter";
import { ProfileTree, ProfileTreeNode } from "@/utils/buildTree";
import {
  extractIndex,
  getDisplayPath,
  getPathSuffix,
  incrementDataPath,
} from "@/utils/path_utils";
import { tooltipStyles } from "@/utils/styles";
import {
  deleteBranch,
  duplicateBranch,
  getLastDescendant,
  insertAfterNode,
} from "@/utils/tree_utils";
import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePieChart,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import PrimitveInput from "./PrimitveInput";

interface IntermediateParentProps {
  node: ProfileTreeNode;
  toggleNodeExpansion: (nodePath: string) => void;
  expandedNodes: string[];
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
  pathsWithInvalidCardinality: string[];
  profileTree: ProfileTree;
}

const IntermediateParent = (props: IntermediateParentProps) => {
  const {
    decrementPathCounter,
    incrementPathCounter,
    evaluateRenderAddButton,
  } = usePathCounter();

  const renderNode = (node: ProfileTreeNode) => {
    if (node.isPrimitive) {
      return (
        <div key={node.dataPath} className="w-full pb-2">
          <PrimitveInput
            node={node}
            profileTreeNode={node}
            setProfileTree={props.setProfileTree}
            pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
          />
        </div>
      );
    } else {
      return (
        <IntermediateParent
          expandedNodes={props.expandedNodes}
          node={node}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
          profileTree={props.profileTree}
          setProfileTree={props.setProfileTree}
          toggleNodeExpansion={props.toggleNodeExpansion}
        />
      );
    }
  };

  return (
    <div
      className="w-full rounded-md border-gray-200"
      key={props.node.dataPath}
    >
      <div className="flex flex-row">
        <div
          className={`flex text-xs rounded-md hover:bg-blue-100 transition-colors duration-300 ease-in-out cursor-pointer ${
            props.pathsWithInvalidCardinality.includes(props.node.dataPath)
              ? "bg-red-400"
              : props.node.element.sliceName
              ? "bg-violet-300"
              : "bg-blue-300 "
          }`}
        >
          <button
            className="flex flex-row items-center h-full"
            onClick={() => {
              console.log("clicked");
              console.log(props.node.dataPath);
              props.toggleNodeExpansion(props.node.dataPath);
            }}
          >
            {props.expandedNodes.includes(props.node.dataPath) ? (
              <MdExpandLess size={24} />
            ) : (
              <MdExpandMore size={24} />
            )}
          </button>
        </div>
        <div className="flex flex-col w-full pl-2">
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center gap-2">
              <h2
                className={`text-md font-bold ${
                  props.node.element.min! > 0
                    ? "after:text-red-600 after:content-['*']"
                    : ""
                }`}
              >
                {getDisplayPath(props.node)}
              </h2>
              <span className="text-gray-400 text-md font-normal">
                {props.node.element.type
                  ? "(" + props.node.element.type[0].code + ")"
                  : null}
              </span>
            </div>
            <span className="flex-grow" />
            <div className="flex flex-row items-center gap-2">
              {props.node.element.sliceName && (
                <AiOutlinePieChart style={{ color: "" }} />
              )}
              {props.node.element.type ||
              props.node.element.type!.length <= 1 ? null : (
                <select
                  id="element-type"
                  placeholder="Type"
                  className="bg-white py-0.5 px-4 w-40 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={props.node.type}
                  onChange={(e) => {
                    const newProfileTree = [...props.profileTree];
                    const nodeIndex = newProfileTree.findIndex(
                      (n) => n.dataPath === props.node.dataPath
                    );
                    (newProfileTree[nodeIndex].type = e.target.value),
                      props.setProfileTree(newProfileTree);
                  }}
                >
                  {props.node.element.type ? (
                    (props.node.element.type as any[]).map((type) => (
                      <option value={type.code} key={type.code}>
                        {type.code}
                      </option>
                    ))
                  ) : (
                    <option value="string">string</option>
                  )}
                </select>
              )}
              {
                // help tooltip that displays the description of the element
                props.node.element.short && (
                  <>
                    <div
                      data-tooltip-id={props.node.dataPath}
                      data-tooltip-content={props.node.element.short}
                    >
                      <AiOutlineQuestionCircle />
                    </div>
                    <Tooltip
                      id={props.node.dataPath}
                      place="right"
                      style={tooltipStyles}
                    />
                  </>
                )
              }
              {extractIndex(getPathSuffix(props.node.dataPath)) > 0 ? (
                <button
                  onClick={() => {
                    let newProfileTree = [...props.profileTree];
                    newProfileTree = deleteBranch(newProfileTree, props.node);
                    props.setProfileTree(newProfileTree);
                    // decrement pathCounter
                    decrementPathCounter(props.node.dataPath);
                  }}
                >
                  <AiOutlineMinus size={20} />
                </button>
              ) : null}
              {evaluateRenderAddButton(
                props.node.element,
                props.node.dataPath
              ) ? (
                <button
                  onClick={() => {
                    const newNode = structuredClone(props.node);
                    newNode.value = "";
                    newNode.dataPath = incrementDataPath(
                      props.profileTree,
                      props.node
                    );
                    const lastDescendant = getLastDescendant(
                      props.profileTree,
                      props.node
                    );
                    let newProfileTree = [...props.profileTree];
                    // TODO does not work yet in the UI
                    newProfileTree = insertAfterNode(
                      newProfileTree,
                      lastDescendant,
                      newNode
                    );
                    newProfileTree = duplicateBranch(newProfileTree, newNode);
                    props.setProfileTree(newProfileTree);
                    // increment pathCounter
                    incrementPathCounter(props.node.dataPath);
                  }}
                >
                  <GrFormAdd size={20} />
                </button>
              ) : null}
            </div>
          </div>
          {props.expandedNodes.includes(props.node.dataPath) && (
            <div className="flex flex-row flex-wrap gap-1 pl-32 py-2">
              {props.node.childPaths.map((childPath: string) => {
                console.log("childpath: ", childPath);
                console.log("parent path: ", props.node.dataPath);
                let childNode = props.profileTree.find(
                  (n: ProfileTreeNode) => n.dataPath === childPath
                );
                if (props.node.type) {
                  // multiype node with select input for type selection
                  // the following code filters the child nodes to only show the ones that match the selected type
                  childNode = childNode?.dataPath
                    .toLowerCase()
                    .includes(props.node.type.toLowerCase())
                    ? childNode
                    : undefined;
                }
                return childNode && renderNode(childNode);
              })}
            </div>
          )}
        </div>
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default IntermediateParent;
