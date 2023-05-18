import React, { useState } from "react";
import { ProfileTree, ProfileTreeNode } from "../../utils/buildTree";
import { shouldDisplayNode } from "@/utils/utils";
import { getDisplayPath } from "@/utils/path_utils";
import "react-tooltip/dist/react-tooltip.css";
import RootPrimitive from "./RootPrimitive";
import RootParent from "./RootParent";
import { StructureDefinition } from "fhir/r4";
import AddResourceButton from "../buttons/AddResourceButton";
import { Modes } from "@/utils/constants";

interface ProfileTreeComponentProps {
  profileTree: ProfileTree;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
  checkedBranchIds: string[];
  pathsWithInvalidCardinality: string[];
  setPathsWithInvalidCardinality: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  profile: StructureDefinition;
  mode: Modes;
  resourceType?: string;
}

const ProfileTreeComponent: React.FC<ProfileTreeComponentProps> = (
  props: ProfileTreeComponentProps
) => {
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
            setProfileTree={props.setProfileTree}
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
          profileTree={props.profileTree}
          setProfileTree={props.setProfileTree}
          toggleNodeExpansion={toggleNodeExpansion}
        />
      );
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col mb-4 gap-2">
        <div className="flex flex-row gap-4 items-center">
          <span className="text-gray-500 text-xs">Profile URL:</span>
          <span className="text-md">{props.profile.url}</span>
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
              setExpandedNodes(props.profileTree.map((node) => node.dataPath))
            }
          >
            Open All
          </button>
        </div>
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
