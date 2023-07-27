import { useStore } from "@/stores/useStore";
import { ProfileTreeNode } from "@/utils/buildTree";
import { GUIConstraintResolver } from "@/utils/constraint_utils";
import { tooltipStyles } from "@/utils/styles";
import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { ConstraintComponent } from "./ConstraintComponent";

interface InputWrapperProps {
  title: string;
  helpText?: string;
  type?: string;
  node: ProfileTreeNode;
  pathsWithInvalidCardinality: string[];
  children: React.ReactNode;
}

const InputWrapper = (props: InputWrapperProps) => {
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

  const elementType = props.type || props.node.element.type?.[0].code;

  return (
    <div
      className={`w-full
${
  props.pathsWithInvalidCardinality.includes(props.node.dataPath)
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
          <span>{props.title}</span>
          <span className="text-gray-400 font-normal text-md">
            {props.node.element.type ? " (" + elementType + ")" : null}
          </span>{" "}
          <ConstraintComponent resolver={guiConstraintResolver} />
        </div>
        {props.helpText && (
          <>
            <div
              data-tooltip-id={props.node.dataPath}
              data-tooltip-content={props.helpText}
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
      {props.children}
    </div>
  );
};

export default InputWrapper;
