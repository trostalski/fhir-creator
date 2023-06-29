import { ProfileTreeNode } from "@/utils/buildTree";
import { getDisplayPath } from "@/utils/path_utils";
import React from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import PrimitveInput from "./PrimitveInput";
import { useStore, useValResultStore } from "@/stores/useStore";
import { GUIConstraintResolver } from "@/utils/constraint_utils";
import { WarningComponent } from "./WarningComponent";

interface RootPrimitiveProps {
  node: ProfileTreeNode;
  toggleNodeExpansion: (nodePath: string) => void;
  expandedNodes: string[];
  pathsWithInvalidCardinality: string[];
}

const RootPrimitive = (props: RootPrimitiveProps) => {
  const { orderedConstraintResults } = useValResultStore((set) =>{
    return{
      orderedConstraintResults: set.orderedConstraintResults
    };
  })
  let guiConstraintResolver = new GUIConstraintResolver();
  if(orderedConstraintResults){
    let guiConstraintResolver = new GUIConstraintResolver({node: props.node, orderedConstraintResults});
  }

  const { setProfileTree } = useStore((state) => {
    return {
      setProfileTree: state.setProfileTree,
    };
  });
  return (
    <div className="w-full rounded-md border-gray-200">
      <div className="flex flex-row">
        <div
          className={`flex text-xs rounded-md hover:bg-blue-100 transition-colors duration-300 ease-in-out cursor-pointer ${
            props.pathsWithInvalidCardinality.includes(props.node.dataPath)
              ? "bg-red-400"
              : !guiConstraintResolver.hasWarning()
              ? "bg-red-400"
              : props.node.element.sliceName
              ? "bg-violet-300"
              : "bg-blue-300 "
          }`}
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
            <WarningComponent
              node={props.node}
            />
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
