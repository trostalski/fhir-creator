import { ProfileTreeNode } from "@/utils/buildTree";
import React from "react";
import InputWrapper from "./InputWrapper";

interface CodingInputProps {
  node: ProfileTreeNode;
  pathsWithInvalidCardinality: string[];
}

const CodingInput = (props: CodingInputProps) => {
  const [isCustom, setIsCustom] = React.useState<boolean>(false);
  const availableSystems = [
    {
      name: "Custom",
      value: "",
    },
    {
      name: "SNOMED CT",
      value: "http://snomed.info/sct",
    },
  ];

  switch (props.node.element.id) {
    case "Coding.userSelected":
      return (
        <div className="w-full">
          <div className="flex flex-row w-full gap-4">
            <InputWrapper
              node={props.node}
              pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
              title="Code System"
              helpText="What System is this code from?"
              type="string"
            >
              <select className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {availableSystems.map((system) => (
                  <option key={system.name} value={system.value}>
                    {system.name}
                  </option>
                ))}
              </select>
            </InputWrapper>
            <InputWrapper
              node={props.node}
              pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
              title="System Name"
              helpText="What System is this code from?"
              type="string"
            >
              <input
                type="select"
                className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </InputWrapper>
          </div>
        </div>
      );
    case "Coding.system":
      return null;
    case "Coding.display":
      return null;
  }
};

export default CodingInput;
