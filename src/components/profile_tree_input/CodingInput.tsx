import React from "react";
import InputWrapper from "./InputWrapper";
import { CodingChildren, OptionType } from "@/types";
import AsyncSelect from "react-select/async";
import { fetchSnomedFts } from "@/utils/api";
import { useStore } from "@/stores/useStore";
import { ProfileTreeNode } from "@/utils/buildTree";

interface CodingInputProps {
  pathsWithInvalidCardinality: string[];
  codingChildren: CodingChildren;
}

const CodingInput = (props: CodingInputProps) => {
  const [systemName, setSystemName] = React.useState<string>("Custom");
  const { profileTree, updateProfileTree } = useStore((state) => {
    return {
      setProfileTree: state.setProfileTree,
      profileTree: state.activeProfileTree,
      updateProfileTree: state.updateProfileTree,
    };
  });
  const [selectDisplayValue, setSelectDisplayValue] =
    React.useState<OptionType | null>(null);

  const { systemNode, codeNode, displayNode, userSelectedNode, versionNode } =
    props.codingChildren;
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

  const isCustomSystem = () => systemName === "Custom";

  const loadFTSOptions: any = async (
    input: string,
    callback: (input: OptionType[]) => void
  ) => {
    input = input.trim().replace(" ", " <-> ");
    if (input.length < 3) {
      callback([]);
      return;
    }
    const data = await fetchSnomedFts(input, 20);
    const dataOptions = data.coded_terms.map((item) => {
      return {
        value: item.term + "," + item.code,
        label: item.term + " | " + item.code,
      };
    });

    callback(dataOptions);
  };

  const handleChange = (value: string, nodeIn: ProfileTreeNode) => {
    const newProfileTree = [...profileTree!];
    const nodeIndex = newProfileTree!.findIndex(
      (node: ProfileTreeNode) => node.dataPath === nodeIn.dataPath
    );
    newProfileTree[nodeIndex].value = value;
    updateProfileTree(newProfileTree);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-row w-full gap-4">
        <InputWrapper
          node={userSelectedNode}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
          title="Code System"
          helpText="What System is this code from?"
          type="string"
        >
          <select
            className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              const systemName = e.target.value;
              setSystemName(systemName);
              const system = availableSystems.find(
                (system) => system.name === systemName
              )?.value;
              handleChange(system!, systemNode);
            }}
          >
            {availableSystems.map((system) => (
              <option key={system.name} value={system.name}>
                {system.name}
              </option>
            ))}
          </select>
        </InputWrapper>
        <InputWrapper
          node={systemNode}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
          title="System Name"
          helpText="System value within the FHIR resource."
          type="string"
        >
          <input
            type="select"
            value={systemNode.value}
            className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              handleChange(e.target.value, systemNode);
            }}
          ></input>
        </InputWrapper>
      </div>
      <div className="w-full flex flex-col gap-2">
        <InputWrapper
          node={displayNode}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
          title="Concept Name"
          helpText={displayNode.element.short}
          type="string"
        >
          {isCustomSystem() ? (
            <input
              type="text"
              value={displayNode.value}
              className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setSelectDisplayValue(null);
                handleChange(e.target.value, displayNode);
              }}
            />
          ) : (
            <div className="flex flex-row w-full gap-4">
              <AsyncSelect
                placeholder="Start Typing 3 Characters..."
                value={{
                  label: selectDisplayValue || "Start Typing 3 Characters...",
                  value: null,
                }}
                className="grow"
                isClearable={true}
                loadOptions={loadFTSOptions}
                onChange={async (e: any) => {
                  // string has form "display | code"
                  const [display, code] = e.value.split(",");
                  setSelectDisplayValue(e.value.replace(",", " | "));
                  handleChange(display, displayNode);
                  handleChange(code, codeNode);
                }}
              />
              <button className="text-blue-600 p-2">Search</button>
            </div>
          )}
        </InputWrapper>
        {isCustomSystem() ? (
          <InputWrapper
            node={codeNode}
            pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
            title="Concept Code"
            helpText={codeNode.element.short}
            type="string"
          >
            <input
              type="text"
              value={codeNode.value}
              className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                handleChange(e.target.value, codeNode);
                setSelectDisplayValue(null);
              }}
            />
          </InputWrapper>
        ) : null}
      </div>
    </div>
  );
};

export default CodingInput;
