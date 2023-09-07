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
import AddResourceButton from "../buttons/AddResourceButton";
import Select from "react-select";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/db";

interface ProfileTreeComponentProps {
  pathsWithInvalidCardinality: string[];
  setPathsWithInvalidCardinality: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

const ProfileTreeComponent: React.FC<ProfileTreeComponentProps> = (
  props: ProfileTreeComponentProps
) => {
  const { setPathsWithInvalidCardinality, pathsWithInvalidCardinality } = props;
  const {
    profileTree,
    profile,
    checkedBranchIds,
    orderedConstraintResults,
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
  const [addToBundleId, setAddToBundleId] = useState<string | undefined>(
    undefined
  );
  const bundleFolders = useLiveQuery(() => {
    return db.bundleFolders.toArray();
  });

  const bundleFolderOptions = bundleFolders?.map((folder) => {
    return {
      value: folder.id,
      label: folder.id,
    };
  });

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
    <div className="flex flex-col gap-2 pb-20 w-full overflow-scroll">
      <div className="flex flex-col">
        <div className="flex flex-row gap-4 items-center">
          <span className="text-gray-500 text-xs">Profile URL:</span>
          <span className="text-sm">{profile!.url}</span>
        </div>
        <div className="flex flex-row">
          <input
            placeholder="Search Elements"
            className="h-8 w-full border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 p-2.5"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <span className="flex-grow" />
          <button
            className="text-gray-500 w-32 text-xs rounded py-1 px-2 transition hover:text-gray-700"
            onClick={() => setExpandedNodes([])}
          >
            Collapse All
          </button>
          <button
            className="text-gray-500 w-32 text-xs rounded py-1 px-2 transition hover:text-gray-700"
            onClick={() =>
              setExpandedNodes(profileTree!.map((node) => node.dataPath))
            }
          >
            Open All
          </button>
          <button
            className="text-red-500 w-20 transition hover:text-red-700 text-xs rounded py-1 px-2"
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
      <div className="flex flex-col grow overflow-scroll px-4">
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
      <div className="flex flex-row shrink-0 items-center w-full h-16 pb-4">
        <div className="flex flex-col w-1/2">
          <label className="text-gray-500 text-xs">Add to Bundle</label>
          <Select
            options={bundleFolderOptions}
            onChange={(e) => {
              setAddToBundleId(e?.value);
            }}
            placeholder="Select Bundle"
            menuPlacement="top"
            className="w-full"
          />
        </div>
        <span className="grow" />
        <AddResourceButton
          setPathsWithInvalidCardinality={setPathsWithInvalidCardinality}
          addToBundleId={addToBundleId}
        />
      </div>
    </div>
  );
};

export default ProfileTreeComponent;
