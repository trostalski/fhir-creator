import { ProfileTreeNode } from "@/utils/buildTree";
import { getDisplayPath } from "@/utils/path_utils";
import React from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import PrimitveInput, { InputFromType } from "./PrimitveInput";
import { getExpansionBgColour } from "@/utils/tree_utils";
import { useStore } from "@/stores/useStore";
import { ConstraintComponent } from "./ConstraintComponent";
import { GUIConstraintResolver } from "@/utils/constraint_utils";

interface RootPrimitiveProps {
  node: ProfileTreeNode;
  toggleNodeExpansion: (nodePath: string) => void;
  expandedNodes: string[];
  pathsWithInvalidCardinality: string[];
}

const RootPrimitive = (props: RootPrimitiveProps) => {
  const { orderedConstraintResults, profileTree } = useStore((state) => {
    return {
      setProfileTree: state.setProfileTree,
      orderedConstraintResults: state.orderedConstraintResults,
      profileTree: state.activeProfileTree,
    };
  });
  let guiConstraintResolver;
  if (orderedConstraintResults) {
    guiConstraintResolver = new GUIConstraintResolver({
      node: props.node,
      orderedConstraintResults,
    });
  }
  return (
    <div className="w-full rounded-md border-gray-200">
      {/* <div
          className={`flex text-xs rounded-md hover:bg-blue-100 transition-colors duration-300 ease-in-out cursor-pointer ${getExpansionBgColour(
            profileTree!,
            props.pathsWithInvalidCardinality,
            guiConstraintResolver?.hasConstraintIssue() || false,
            props.node
          )}`}
        >
          <button
            className="flex flex-row items-center"
            onClick={() => props.toggleNodeExpansion(props.node.dataPath)}
          >
            {props.expandedNodes.includes(props.node.dataPath) ? (
              <MdExpandLess size={24} />
            ) : (
              <MdExpandMore size={24} />
            )}
          </button>
        </div>
        <div className="flex flex-col pl-2 w-full">
          <div className="flex flex-row items-center gap-2">
            {" "}
            <h2
              className={`text-md font-bold ${
                props.node.element.min! > 0
                  ? "after:text-red-600 after:content-['*']"
                  : ""
              }`}
            >
              {getDisplayPath(props.node)}
            </h2>
            <span className="text-gray-400 text-md">
              {props.node.element.type
                ? "(" + props.node.element.type[0].code + ")"
                : null}
            </span>
            <ConstraintComponent resolver={guiConstraintResolver} />
          </div> */}
      {/* {props.expandedNodes.includes(props.node.dataPath) && ( */}
      <div key={props.node.dataPath} className="flex flex-row w-full">
        <div className="flex flex-row w-32 justify-end">
          <h2
            className={`text-sm font-bold ${
              props.node.element.min! > 0
                ? "after:text-red-600 after:content-['*']"
                : ""
            }`}
          >
            {getDisplayPath(props.node)}
          </h2>
        </div>
        <div className="flex flex-grow">
          <InputFromType
            type={props.node.element.type![0].code}
            node={props.node}
          />
        </div>
        {/* <PrimitveInput
            node={props.node}
            pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
          /> */}
      </div>
      {/* )} */}
      {/* </div> */}
      {/* <hr className="my-1" /> */}
    </div>
  );
};

export default RootPrimitive;
