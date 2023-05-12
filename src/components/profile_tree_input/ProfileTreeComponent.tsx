import React, { useState } from "react";
import { ProfileTree, ProfileTreeNode } from "../../utils/buildTree";
import PrimitveInput from "@/components/profile_tree_input/PrimitveInput";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { shouldDisplayNode } from "@/utils/utils";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlinePieChart, AiOutlineQuestionCircle } from "react-icons/ai";
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
  getLastDescendant,
  insertAfterNode,
} from "@/utils/tree_utils";
import { usePathCounter } from "@/hooks/usePathCounter";
import { Tooltip } from "react-tooltip";
import { tooltipStyles } from "../../utils/styles";
import "react-tooltip/dist/react-tooltip.css";
import RootPrimitive from "./RootPrimitive";
import IntermediateParent from "./IntermediateParent";
import RootParent from "./RootParent";

interface ProfileTreeComponentProps {
  profileTree: ProfileTree;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
  checkedBranchIds: string[];
  pathsWithInvalidCardinality: string[];
}

const ProfileTreeComponent: React.FC<ProfileTreeComponentProps> = (
  props: ProfileTreeComponentProps
) => {
  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);
  const [searchInput, setSearchInput] = React.useState<string | null>(null);

  const isNodeExpanded = (nodePath: string) => {
    return expandedNodes.includes(nodePath);
  };
  const toggleNodeExpansion = (nodePath: string) => {
    if (isNodeExpanded(nodePath)) {
      setExpandedNodes(expandedNodes.filter((path) => path !== nodePath));
    } else {
      setExpandedNodes([...expandedNodes, nodePath]);
    }
  };

  const renderRootNode = (node: ProfileTreeNode) => {
    const isExpanded = isNodeExpanded(node.dataPath);
    if (node.isPrimitive) {
      if (node.isRootPrimitive) {
        return (
          <RootPrimitive
            node={node}
            pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
            setProfileTree={props.setProfileTree}
            toggleNodeExpansion={toggleNodeExpansion}
            isExpanded={isExpanded}
          />
        );
      }
    } else {
      return (
        <RootParent
          node={node}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
          profileTree={props.profileTree}
          setProfileTree={props.setProfileTree}
          toggleNodeExpansion={toggleNodeExpansion}
          isExpanded={isExpanded}
        />
      );
    }
  };

  return (
    <div className="">
      <div className="flex flex-row mb-4">
        <input
          placeholder="search"
          className="h-8 w-3/4 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <span className="flex-grow" />
        <button
          className="text-gray-500 hover:text-gray-70 text-xs rounded py-1 px-2"
          onClick={() => setExpandedNodes([])}
        >
          Collapse All
        </button>
        <button
          className="text-gray-500 hover:text-gray-700 text-xs rounded py-1 px-2"
          onClick={() =>
            setExpandedNodes(props.profileTree.map((node) => node.dataPath))
          }
        >
          Open All
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {props.profileTree
          .filter((node) => shouldDisplayNode(node, props.checkedBranchIds))
          .filter((node) => {
            if (searchInput) {
              return getDisplayPath(node)
                .toLowerCase()
                .includes(searchInput.toLowerCase());
            } else {
              return true;
            }
          })
          .map((node: ProfileTreeNode) => {
            if (node.parentDataPath === "root") {
              return renderRootNode(node);
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default ProfileTreeComponent;
