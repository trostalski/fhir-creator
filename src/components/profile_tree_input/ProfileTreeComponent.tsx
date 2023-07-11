import React, { useState } from "react";
import { ProfileTreeNode } from "../../utils/buildTree";
import { shouldDisplayNode } from "@/utils/utils";
import { getDisplayPath } from "@/utils/path_utils";
import "react-tooltip/dist/react-tooltip.css";
import RootPrimitive from "./RootPrimitive";
import RootParent from "./RootParent";
import { useStore } from "@/stores/useStore";
import { defaultProfileTreeNode } from "@/utils/constants";
import { ConstraintComponent } from "./ConstraintComponent";
import { GUIConstraintResolver } from "@/utils/constraint_utils";

interface ProfileTreeComponentProps {
  pathsWithInvalidCardinality: string[];
  setPathsWithInvalidCardinality: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

const ProfileTreeComponent: React.FC<ProfileTreeComponentProps> = (
  props: ProfileTreeComponentProps
) => {
  const {
    profileTree,
    profile,
    checkedBranchIds,
    orderedConstraintResults,
    updateProfileTree,
    setOrderedConstraintResults,
    clearProfileTree,
  } = useStore((state) => {
    return {
      profileTree: state.activeProfileTree,
      profile: state.activeProfile,
      orderedConstraintResults: state.orderedConstraintResults,
      checkedBranchIds: state.checkedBranchIds,
      updateProfileTree: state.updateProfileTree,
      clearProfileTree: state.clearProfileTree,
      setOrderedConstraintResults: state.setOrderedConstraintResults,
    };
  });
  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);
  const [searchInput, setSearchInput] = React.useState<string | null>(null);

  const toggleNodeExpansion = (nodePath: string) => {
    if (expandedNodes.includes(nodePath)) {
      setExpandedNodes(expandedNodes.filter((path) => path !== nodePath));
    } else {
      setExpandedNodes([...expandedNodes, nodePath]);
    }
  };

  const renderRootNode = (node: ProfileTreeNode) => {
    if (node.isPrimitive) {
      if (node.isRootPrimitive) {
        return (
          <RootPrimitive
            expandedNodes={expandedNodes}
            node={node}
            key={node.dataPath}
            pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
            toggleNodeExpansion={toggleNodeExpansion}
          />
        );
      }
    } else {
      return (
        <RootParent
          expandedNodes={expandedNodes}
          node={node}
          key={node.dataPath}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
          toggleNodeExpansion={toggleNodeExpansion}
        />
      );
    }
  };

  const dummyRootNode = { ...defaultProfileTreeNode, dataPath: "root" };
  let guiConstraintResolver;
  if (orderedConstraintResults) {
    guiConstraintResolver = new GUIConstraintResolver({
      node: dummyRootNode,
      orderedConstraintResults,
    });
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col mb-4 gap-2">
        <div className="flex flex-row gap-4 items-center">
          <span className="text-gray-500 text-xs">Profile URL:</span>
          <span className="text-sm">{profile!.url}</span>
        </div>
        <div className="flex flex-row">
          <input
            placeholder="Search Elements"
            className="h-8 w-full border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <span className="flex-grow" />
          <button
            className="text-gray-500 w-32 hover:text-gray-70 text-xs rounded py-1 px-2"
            onClick={() => setExpandedNodes([])}
          >
            Collapse All
          </button>
          <button
            className="text-gray-500 w-32 hover:text-gray-700 text-xs rounded py-1 px-2"
            onClick={() =>
              setExpandedNodes(profileTree!.map((node) => node.dataPath))
            }
          >
            Open All
          </button>
          <button
            className="text-red-500 w-20 hover:text-red-700 text-xs rounded py-1 px-2"
            onClick={() => {
              props.setPathsWithInvalidCardinality([]);
              setExpandedNodes([]);
              setOrderedConstraintResults(undefined);
              clearProfileTree();
            }}
          >
            Clear
          </button>
        </div>
        <ConstraintComponent resolver={guiConstraintResolver} />
      </div>
      <div className="flex flex-col gap-4">
        {profileTree!
          .filter((node) => shouldDisplayNode(node, checkedBranchIds))
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
