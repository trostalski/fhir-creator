import { ProfileTreeNode } from "@/utils/buildTree";
import { getDisplayPath } from "@/utils/path_utils";
import React from "react";
import BindingCodeInput from "./BindingCodeInput";
import { useStore } from "@/stores/useStore";
import InputWrapper from "./InputWrapper";
import { textInputStyle } from "@/styles/inputStyles";

interface InputFromTypeProps {
  type: string;
  node: ProfileTreeNode;
}

export const InputFromType = (props: InputFromTypeProps) => {
  const { profileTree, updateProfileTree } = useStore((state) => {
    return {
      profileTree: state.activeProfileTree,
      updateProfileTree: state.updateProfileTree,
      setMode: state.setMode,
    };
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const newProfileTree = [...profileTree!];
    const nodeIndex = newProfileTree!.findIndex(
      (node: ProfileTreeNode) => node.dataPath === props.node.dataPath
    );
    newProfileTree[nodeIndex].value = e.target.value;
    updateProfileTree(newProfileTree);
  };

  if (props.node.bindingCodes && props.node.bindingCodes.length > 0) {
    return <BindingCodeInput node={props.node} />;
  }

  switch (props.type) {
    case "boolean":
      return (
        <select
          className={textInputStyle}
          placeholder={props.node.element.short}
          onChange={handleChange}
          value={props.node.value}
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
          placeholder={props.node.element.short}
          value={props.node.value}
          onChange={handleChange}
          className={textInputStyle}
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
          placeholder={props.node.element.short}
          onChange={handleChange}
          className={textInputStyle}
          value={props.node.value}
        />
      );
    case "dateTime":
    case "instant":
      return (
        <input
          type="datetime-local"
          placeholder={props.node.element.short}
          className={textInputStyle}
          value={props.node.value}
          onChange={handleChange}
        />
      );
    case "date":
      return (
        <input
          type="date"
          placeholder={props.node.element.short}
          className={textInputStyle}
          value={props.node.value}
          onChange={handleChange}
        />
      );
    case "time":
      return (
        <input
          type="time"
          placeholder={props.node.element.short}
          className={textInputStyle}
          value={props.node.value}
          onChange={handleChange}
        />
      );
    default:
      return (
        <input
          type="text"
          className={textInputStyle}
          value={props.node.value}
          onChange={handleChange}
        />
      );
  }
};

interface PrimitveInputProps {
  node: ProfileTreeNode;
  pathsWithInvalidCardinality: string[];
}

const PrimitveInput = (props: PrimitveInputProps) => {
  return (
    <InputWrapper
      title={getDisplayPath(props.node)}
      helpText={props.node.element.short}
      node={props.node}
      pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
    >
      <InputFromType
        type={props.node.element.type![0].code}
        node={props.node}
      />
    </InputWrapper>
  );
};

export default PrimitveInput;
