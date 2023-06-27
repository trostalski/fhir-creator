import { PatientSimilarityFeature } from "@/pages/analyzer";
import { toastError } from "@/toasts";
import { availablePatSimTypes, resourceOptions } from "@/utils/constants";
import React from "react";
import { MdClear } from "react-icons/md";
import Select from "react-select";

interface PatSimFeatureInputProps {
  featureId: number;
  inputFeatures: PatientSimilarityFeature[];
  setInputFeatures: React.Dispatch<
    React.SetStateAction<PatientSimilarityFeature[]>
  >;
}

const PatSimFeatureInput = (props: PatSimFeatureInputProps) => {
  return (
    <div className="flex flex-row w-full gap-4 p-4 items-center">
      <input
        type="text"
        placeholder="Name"
        className="h-12 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={props.inputFeatures.find((f) => f.id === props.featureId)!.name}
        onChange={(e) => {
          props.setInputFeatures((prev) => {
            prev.find((f) => f.id === props.featureId)!.name = e.target.value;
            return [...prev];
          });
        }}
      />
      <select
        className="h-12 w-64 border-gray-300 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={props.inputFeatures.find((f) => f.id === props.featureId)!.type}
        onChange={(e) => {
          props.setInputFeatures((prev) => {
            prev.find((f) => f.id === props.featureId)!.type = e.target.value;
            return [...prev];
          });
        }}
      >
        {availablePatSimTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <Select
        instanceId={"baseprofile-select"}
        options={resourceOptions}
        className="grow"
        isMulti={true}
        placeholder="Target Resource Type"
        onChange={(e) => {}}
        styles={{
          control: (provided) => ({
            ...provided,
            height: "3rem",
          }),
        }}
      ></Select>
      <input
        type="text"
        placeholder="Target Paths"
        className="h-12 w-64 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={
          props.inputFeatures.find((f) => f.id === props.featureId)!.targetPaths
        }
        onChange={(e) => {
          props.setInputFeatures((prev) => {
            prev.find((f) => f.id === props.featureId)!.targetPaths =
              e.target.value;
            return [...prev];
          });
        }}
      />
      {/* <input
        type="text"
        placeholder="Conditional Paths"
        className="h-12 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={
          props.inputFeatures.find((f) => f.id === props.featureId)!
            .conditionalPaths
        }
        onChange={(e) => {
          props.setInputFeatures((prev) => {
            prev.find((f) => f.id === props.featureId)!.conditionalPaths =
              e.target.value;
            return [...prev];
          });
        }}
      /> */}
      <MdClear
        size={24}
        className="cursor-pointer"
        onClick={() => {
          if (props.inputFeatures.length === 1) {
            toastError("At least one feature is required");
            return;
          }
          props.setInputFeatures((prev) => {
            return prev.filter((f) => f.id !== props.featureId);
          });
        }}
      />
    </div>
  );
};

export default PatSimFeatureInput;
