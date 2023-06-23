import { PatientSimilarityFeature } from "@/pages/analyzer";
import { resourceOptions } from "@/utils/constants";
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
        onChange={(e) => {
          props.setInputFeatures((prev) => {
            prev.find((f) => f.id === props.featureId)!.name = e.target.value;
            return [...prev];
          });
        }}
      />
      <input
        type="select"
        placeholder="Type"
        className="h-12 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <Select
        instanceId={"baseprofile-select"}
        options={resourceOptions}
        className="grow"
        isMulti={true}
        placeholder="Target Resources"
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
        className="h-12 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Conditional Paths"
        className="h-12 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <MdClear size={24} className="cursor-pointer" />
    </div>
  );
};

export default PatSimFeatureInput;
