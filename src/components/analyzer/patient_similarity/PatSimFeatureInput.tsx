import {
  CategoricalStringFeatureInput,
  NumericalFeatureInput,
  PatSimFeature,
} from "@/types";
import {
  _categoricalString,
  _codedConcept,
  _codedNumerical,
  _numerical,
  availablePatSimTypes,
  resourceOptions,
} from "@/utils/constants";
import React from "react";
import { MdClear } from "react-icons/md";
import Select from "react-select";

interface PatSimFeatureInputProps {
  featureId: number;
  inputFeature: PatSimFeature;
  setInputFeatures: React.Dispatch<React.SetStateAction<PatSimFeature[]>>;
}

const UncodedInput = () => {};

const PatSimFeatureInput = (props: PatSimFeatureInputProps) => {
  const getPathInputForType = (type: string) => {
    if (type === _categoricalString || type === _numerical) {

      const inputFeature = props.inputFeature as
        | CategoricalStringFeatureInput
        | NumericalFeatureInput;

      return (
        <>
          <input
            type="text"
            placeholder="Target Paths"
            className="h-12 w-52 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            value={inputFeature.targetPath}
            onChange={(e) => {
              props.setInputFeatures((prev) => {
                prev.find((f) => f.id === props.featureId)!.targetPath =
                  e.target.value;
                return [...prev];
              });
            }}
          />
          <input
            type="text"
            placeholder="Condition"
            className="h-12 w-52 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            value={props.inputFeature.condition}
            onChange={(e) => {
              props.setInputFeatures((prev) => {
                prev.find((f) => f.id === props.featureId)!.condition =
                  e.target.value;
                return [...prev];
              });
            }}
          />
        </>
      );
    } else if (type === _codedConcept || type === _codedNumerical) {
    }
  };

  return (
    <div className="flex flex-row w-full gap-4 p-4 items-center">
      <input
        type="text"
        placeholder="Name"
        className="h-12 w-44 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        value={props.inputFeature.name}
        onChange={(e) => {
          props.setInputFeatures((prev) => {
            prev.find((f) => f.id === props.featureId)!.name = e.target.value;
            return [...prev];
          });
        }}
      />
      <Select
        instanceId={"targetResourceTypes-select"}
        options={resourceOptions}
        className="w-64"
        isMulti={true}
        placeholder="Resource Types"
        onChange={(selectedOption, triggeredAction) => {
          props.setInputFeatures((prev) => {
            prev.find((f) => f.id === props.featureId)!.targetResources =
              selectedOption.map((o) => o.value);
            return [...prev];
          });
        }}
        value={resourceOptions.filter((o) =>
          props.inputFeature.targetResources.includes(o.value)
        )}
        styles={{
          control: (provided) => ({
            ...provided,
            height: "3rem",
          }),
        }}
      />
      <Select
        instanceId={"featureType-select"}
        options={availablePatSimTypes}
        className="w-64"
        placeholder="Feature Type"
        onChange={(selectedOption, triggeredAction) => {
          props.setInputFeatures((prev) => {
            prev.find((f) => f.id === props.featureId)!.type = selectedOption!;
            return [...prev];
          });
        }}
        styles={{
          control: (provided) => ({
            ...provided,
            height: "3rem",
          }),
        }}
      />
      {getPathInputForType(props.inputFeature.type)}
      <MdClear
        size={24}
        className="cursor-pointer"
        onClick={() => {
          props.setInputFeatures((prev) => {
            return prev.filter((f) => f.id !== props.featureId);
          });
        }}
      />
    </div>
  );
};

export default PatSimFeatureInput;
