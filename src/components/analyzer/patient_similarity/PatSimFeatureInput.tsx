import { PatSimFeature } from "@/types";
import { availablePatSimTypes, resourceOptions } from "@/utils/constants";
import React from "react";
import { MdClear } from "react-icons/md";
import Select from "react-select";

interface PatSimFeatureInputProps {
  featureId: number;
  inputFeature: PatSimFeature;
  setInputFeatures: React.Dispatch<React.SetStateAction<PatSimFeature[]>>;
}

const PatSimFeatureInput = (props: PatSimFeatureInputProps) => {
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
        className="w-min-64 grow"
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
        options={availablePatSimTypes.map((t) => ({
          label: t,
          value: t,
        }))}
        className="w-64"
        onChange={(value) => {
          props.setInputFeatures((prev) => {
            prev.find((f) => f.id === props.featureId)!.type = value!.value;
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
      <input
        type="text"
        placeholder="Target Paths"
        className="h-12 w-52 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
        value={props.inputFeature.targetPath}
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
