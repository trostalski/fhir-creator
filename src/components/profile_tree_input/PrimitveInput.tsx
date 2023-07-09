import { ProfileTreeNode } from "@/utils/buildTree";
import { getDisplayPath } from "@/utils/path_utils";
import React from "react";
import BindingCodeInput from "./CodeableConceptInput";
import { useStore } from "@/stores/useStore";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { tooltipStyles } from "@/utils/styles";
import { ConstraintComponent } from "./ConstraintComponent";
import { GUIConstraintResolver } from "@/utils/constraint_utils";

interface PrimitveInputProps {
  node: ProfileTreeNode;
  profileTreeNode: ProfileTreeNode;
  pathsWithInvalidCardinality: string[];
}

interface InputFromTypeProps {
  type: string;
  profileTreeNode: ProfileTreeNode;
}

const InputFromType = (props: InputFromTypeProps) => {
  const { profileTree, updateProfileTree } = useStore((state) => {
    return {
      setProfileTree: state.setProfileTree,
      profileTree: state.activeProfileTree,
      updateProfileTree: state.updateProfileTree,
    };
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const newProfileTree = [...profileTree!];
    const nodeIndex = newProfileTree!.findIndex(
      (node: ProfileTreeNode) =>
        node.dataPath === props.profileTreeNode.dataPath
    );
    newProfileTree[nodeIndex].value = e.target.value;
    updateProfileTree(newProfileTree);
  };

  if (
    props.profileTreeNode.bindingCodes &&
    props.profileTreeNode.bindingCodes.length > 0
  ) {
    return <BindingCodeInput node={props.profileTreeNode} />;
  }

  switch (props.type) {
    //for each primitve type return its own component
    case "boolean":
      return (
        // boolean select with yes and no options
        <select
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          value={props.profileTreeNode.value}
        >
          <option value={undefined}>{}</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      );
    case "canonical":
    case "code":
    case "Extension":
    case "id":
    case "markdown":
    case "oid":
    case "string":
    case "url":
    case "uri":
    case "uuid":
      return (
        <input
          type="text"
          value={props.profileTreeNode.value}
          onChange={handleChange}
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      );
    case "decimal":
    case "integer":
    case "integer64":
    case "positiveInt":
    case "unsignedInt":
      return (
        <input
          type="number"
          onChange={handleChange}
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.profileTreeNode.value}
        />
      );
    case "dateTime":
    case "instant":
      return (
        <input
          type="datetime-local"
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.profileTreeNode.value}
          onChange={handleChange}
        />
      );
    case "date":
      return (
        <input
          type="date"
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.profileTreeNode.value}
          onChange={handleChange}
        />
      );
    case "time":
      return (
        <input
          type="time"
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.profileTreeNode.value}
          onChange={handleChange}
        />
      );
    default:
      return (
        <input
          type="text"
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.profileTreeNode.value}
          onChange={handleChange}
        />
      );
  }
};

const PrimitveInput = (props: PrimitveInputProps) => {
  const { orderedConstraintResults } = useStore((state) => {
    return {
      orderedConstraintResults: state.orderedConstraintResults,
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
    <div
      className={`
    ${
      props.pathsWithInvalidCardinality.includes(props.profileTreeNode.dataPath)
        ? "border-solid border-2 border-red-600"
        : guiConstraintResolver?.hasConstraintIssue()
        ? "bg-pink-800"
        : ""
    }
    `}
    >
      <div className="flex flex-row w-full gap-2">
        <div
          className={`flex flex-row text-xs font-bold ${
            props.node.element.min! > 0
              ? "after:text-red-600 after:content-['*']"
              : ""
          }`}
        >
          <span>{getDisplayPath(props.node)}</span>
          <span className="text-gray-400 font-normal text-md">
            {props.node.element.type
              ? " (" + props.node.element.type[0].code + ")"
              : null}
          </span>{" "}
          <ConstraintComponent resolver={guiConstraintResolver} />
        </div>
        {props.node.element.short && (
          <>
            <div
              data-tooltip-id={props.node.dataPath}
              data-tooltip-content={props.node.element.short}
            >
              <AiOutlineQuestionCircle />{" "}
            </div>
            <Tooltip
              id={props.node.dataPath}
              place="right"
              style={tooltipStyles}
            />
          </>
        )}
      </div>
      <InputFromType
        type={props.node.element.type![0].code}
        profileTreeNode={props.profileTreeNode}
      />
    </div>
  );
};

export default PrimitveInput;
