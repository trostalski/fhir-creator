import React from "react";
import InputWrapper from "./InputWrapper";
import { CodingChildren, OptionType } from "@/types";
import AsyncSelect from "react-select/async";
import { useStore } from "@/stores/useStore";
import { ProfileTreeNode } from "@/utils/buildTree";
import {
  icd10TerminologySystem,
  icd9TerminologySystem,
  loincTerminologySystem,
  snomedTerminologySystem,
} from "@/utils/constants";
import { fetchTermFts } from "@/utils/api";
import { selectInputStyle, textInputStyle } from "@/styles/inputStyles";
import { reactSelectStyles } from "@/styles/reactSelectStyles";

interface CodingInputProps {
  pathsWithInvalidCardinality: string[];
  codingChildren: CodingChildren;
}

const CodingInput = (props: CodingInputProps) => {
  const { profileTree, updateProfileTree } = useStore((state) => {
    return {
      setProfileTree: state.setProfileTree,
      profileTree: state.activeProfileTree,
      updateProfileTree: state.updateProfileTree,
    };
  });
  const { systemNode, codeNode, displayNode, userSelectedNode, versionNode } =
    props.codingChildren;
  const [selectDisplayValue, setSelectDisplayValue] =
    React.useState<OptionType | null>(
      displayNode.value && codeNode.value
        ? {
            value: displayNode.value + "," + codeNode.value,
            label: displayNode.value + " | " + codeNode.value,
          }
        : null
    );
  const availableSystems = [
    {
      name: "Custom",
      value: "",
    },
    {
      name: "SNOMED CT",
      value: snomedTerminologySystem,
    },
    { name: "LOINC", value: loincTerminologySystem },
    { name: "ICD-10", value: icd10TerminologySystem },
    { name: "ICD-9", value: icd9TerminologySystem },
  ];

  const [systemName, setSystemName] = React.useState<string>(
    systemNode.value
      ? availableSystems.find((item) => item.value === systemNode.value)!.name
      : "Custom"
  );

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
    console.log(systemNode.value);
    const data = await fetchTermFts(systemNode.value, input, 20);
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
    <div className="w-full flex flex-col">
      <div className="flex flex-row w-full gap-2">
        <InputWrapper
          node={userSelectedNode}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
          title="Code System"
          helpText="What System is this code from?"
          type="string"
        >
          <select
            className={selectInputStyle + " w-full"}
            value={systemName}
            onChange={(e) => {
              const systemName = e.target.value;
              setSystemName(systemName);
              const system = availableSystems.find(
                (system) => system.name === systemName
              )?.value;
              handleChange(system!, systemNode);
              handleChange("", codeNode);
              handleChange("", displayNode);
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
            className={textInputStyle}
            onChange={(e) => {
              handleChange(e.target.value, systemNode);
            }}
          ></input>
        </InputWrapper>
      </div>
      <div className="w-full flex flex-col">
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
              className={textInputStyle}
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
                  label: displayNode.value || "Start Typing...",
                  value: null,
                }}
                className="grow"
                isClearable={true}
                loadOptions={loadFTSOptions}
                onChange={async (e: any) => {
                  const [display, code] = e.value.split(",");
                  setSelectDisplayValue(e.value.replace(",", " | "));
                  handleChange(display, displayNode);
                  handleChange(code, codeNode);
                }}
                styles={reactSelectStyles}
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
              className={textInputStyle}
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
