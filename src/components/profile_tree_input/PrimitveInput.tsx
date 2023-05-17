import { ProfileTree, ProfileTreeNode } from "@/utils/buildTree";
import { getDisplayPath } from "@/utils/path_utils";
import React from "react";
import CodeableConceptInput from "./CodeableConceptInput";

interface PrimitveInputProps {
  node: ProfileTreeNode;
  profileTreeNode: ProfileTreeNode;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
  pathsWithInvalidCardinality: string[];
}

interface InputFromTypeProps {
  type: string;
  profileTreeNode: ProfileTreeNode;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
}

const InputFromType = (props: InputFromTypeProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setProfileTree((prevProfileTree) => {
      const newProfileTree = [...prevProfileTree];
      const nodeIndex = newProfileTree.findIndex(
        (node) => node.dataPath === props.profileTreeNode.dataPath
      );
      newProfileTree[nodeIndex].value = e.target.value;
      return newProfileTree;
    });
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.setProfileTree((prevProfileTree) => {
      const newProfileTree = [...prevProfileTree];
      const nodeIndex = newProfileTree.findIndex(
        (node) => node.dataPath === props.profileTreeNode.dataPath
      );
      newProfileTree[nodeIndex].value = e.target.value;
      return newProfileTree;
    });
  };
  switch (props.type) {
    //for each primitve type return its own component
    case "boolean":
      return (
        // boolean select with yes and no options
        <select
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleSelectChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      );
    case "date":
      return (
        <input
          type="date"
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.profileTreeNode.value}
          onChange={handleInputChange}
        />
      );
    case "time":
      return (
        <input
          type="time"
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.profileTreeNode.value}
          onChange={handleInputChange}
        />
      );
    case "CodeableConcept":
      return (
        <CodeableConceptInput
          node={props.profileTreeNode}
          setProfileTree={props.setProfileTree}
        />
      );
    default:
      return (
        <input
          type="text"
          className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={props.profileTreeNode.value}
          onChange={handleInputChange}
        />
      );
  }
};

const PrimitveInput = (props: PrimitveInputProps) => {
  return (
    <div
      className={`
    ${
      props.pathsWithInvalidCardinality.includes(props.profileTreeNode.dataPath)
        ? "border-solid border-2 border-red-600"
        : ""
    }
    `}
    >
      <label
        className={`block w-full text-xs font-bold dark:text-gray-200 ${
          props.node.element.min! > 0
            ? "after:text-red-600 after:content-['*']"
            : ""
        }`}
      >
        {getDisplayPath(props.node)}
        <span className="text-gray-400 font-normal text-md">
          {props.node.element.type
            ? " (" + props.node.element.type[0].code + ")"
            : null}
        </span>{" "}
      </label>
      <InputFromType
        type={props.node.element.type![0].code}
        profileTreeNode={props.profileTreeNode}
        setProfileTree={props.setProfileTree}
      />
    </div>
  );
};

export default PrimitveInput;
