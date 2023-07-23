import React from "react";
import InputWrapper from "./InputWrapper";
import { CodingChildren, OptionType } from "@/types";
import AsyncSelect from "react-select/async";
import { fetchSnomedFts } from "@/utils/api";

interface CodingInputProps {
  pathsWithInvalidCardinality: string[];
  codingChildren: CodingChildren;
}

const CodingInput = (props: CodingInputProps) => {
  const [systemName, setSystemName] = React.useState<string>("Custom");
  const [systemValue, setSystemValue] = React.useState<string>("");
  const [ftsInput, setFtsInput] = React.useState<string>("");
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

  const [conceptOptions, setConceptOptions] = React.useState<OptionType[]>([]);

  const isCustomSystem = () => systemName === "Custom";

  console.log(isCustomSystem());

  const loadFTSOptions: any = async (
    input: string,
    callback: (input: OptionType[]) => void
  ) => {
    input = input.trim().replace(" ", " <-> ");
    const data = await fetchSnomedFts(input, 20);
    const dataOptions = data.coded_terms.map((item) => {
      return {
        value: item.term + "," + item.code,
        label: item.term + " | " + item.code,
      };
    });

    callback(dataOptions);
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
              console.log(e.target.value);
              setSystemName(e.target.value);
              setSystemValue(
                availableSystems.find(
                  (system) => system.name === e.target.value
                )?.value || ""
              );
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
            value={systemValue}
            className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setSystemValue(e.target.value);
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
              className="w-full h-8 p-1 border border-gray-500 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                codeNode.value = e.target.value;
              }}
            />
          ) : (
            <div className="flex flex-row w-full gap-4">
              <AsyncSelect
                placeholder="Start Typing"
                value={ftsInput}
                className="grow"
                isClearable={true}
                // options={conceptOptions}
                loadOptions={loadFTSOptions}
                onChange={async (e: any) => {}}
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
                codeNode.value = e.target.value;
              }}
            />
          </InputWrapper>
        ) : null}
      </div>
    </div>
  );
};

export default CodingInput;
