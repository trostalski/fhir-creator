import { ProfileTreeNode } from "@/utils/buildTree";
import { getDisplayPath } from "@/utils/path_utils";
import React from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import PrimitveInput from "./PrimitveInput";
import { useStore } from "@/stores/useStore";
import { get } from "lodash";
import { getExpansionBgColour } from "@/utils/tree_utils";

interface RootPrimitiveProps {
  node: ProfileTreeNode;
  toggleNodeExpansion: (nodePath: string) => void;
  expandedNodes: string[];
  pathsWithInvalidCardinality: string[];
}

const RootPrimitive = (props: RootPrimitiveProps) => {
  const { setProfileTree } = useStore((state) => {
    return {
      setProfileTree: state.setProfileTree,
    };
  });
  console.log("invalid cardinality: ", props.pathsWithInvalidCardinality);
  return (
    <div className="w-full rounded-md border-gray-200">
      <div className="flex flex-row">
        <div
          className={`flex text-xs rounded-md hover:bg-blue-100 transition-colors duration-300 ease-in-out cursor-pointer ${getExpansionBgColour(
            props.pathsWithInvalidCardinality,
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
          </div>
          {props.expandedNodes.includes(props.node.dataPath) && (
            <div key={props.node.dataPath} className="flex-grow py-2  pl-40">
              <PrimitveInput
                node={props.node}
                profileTreeNode={props.node}
                pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
              />
            </div>
          )}
        </div>
      </div>
      <hr className="mb-2 mt-4" />
    </div>
  );
};

export default RootPrimitive;
