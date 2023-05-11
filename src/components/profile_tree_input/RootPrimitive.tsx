import { ProfileTree, ProfileTreeNode } from "@/utils/buildTree";
import { getDisplayPath } from "@/utils/path_utils";
import React from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import PrimitveInput from "./PrimitveInput";

interface RootPrimitiveProps {
  node: ProfileTreeNode;
  isExpanded: boolean;
  toggleNodeExpansion: (nodePath: string) => void;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
  pathsWithInvalidCardinality: string[];
}

const RootPrimitive = (props: RootPrimitiveProps) => {
  return (
    <div
      className={`w-full p-1 border-[1px] border-dotted rounded-sm border-gray-200 ${
        props.node.element.sliceName ? "border-violet-400" : ""
      }`}
      key={props.node.dataPath}
    >
      <div className="flex flex-row items-center">
        <button
          className="flex flex-row items-center"
          onClick={() => props.toggleNodeExpansion(props.node.dataPath)}
        >
          {props.isExpanded ? (
            <MdExpandLess size={24} />
          ) : (
            <MdExpandMore size={24} />
          )}
          <h2
            className={`font-light text-md ${
              props.node.element.min! > 0
                ? "after:text-red-600 after:content-['*']"
                : ""
            } `}
          >
            {getDisplayPath(props.node)}
          </h2>
        </button>
      </div>
      {props.isExpanded && (
        <div key={props.node.dataPath} className="flex-grow pb-2 pl-32">
          <PrimitveInput
            node={props.node}
            profileTreeNode={props.node}
            setProfileTree={props.setProfileTree}
            pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
          />
        </div>
      )}
    </div>
  );
};

export default RootPrimitive;
