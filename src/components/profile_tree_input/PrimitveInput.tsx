import { ProfileTreeNode } from "@/utils/buildTree";
import { getDisplayPath } from "@/utils/path_utils";
import React from "react";
import BindingCodeInput from "./BindingCodeInput";
import { useStore } from "@/stores/useStore";
import InputWrapper from "./InputWrapper";

interface InputFromTypeProps {
  type: string;
  node: ProfileTreeNode;
}

const InputFromType = (props: InputFromTypeProps) => {
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
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          value={props.node.value}
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
          value={props.node.value}
        />
      );
    case "dateTime":
    case "instant":
      return (
        <input
          type="datetime-local"
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.node.value}
          onChange={handleChange}
        />
      );
    case "date":
      return (
        <input
          type="date"
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.node.value}
          onChange={handleChange}
        />
      );
    case "time":
      return (
        <input
          type="time"
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.node.value}
          onChange={handleChange}
        />
      );
    default:
      return (
        <input
          type="text"
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
