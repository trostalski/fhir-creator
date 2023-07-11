import {
  CategoricalStringFeature,
  CodedConceptFeature,
  CodedNumericalFeature,
  NumericalFeature,
  PatSimFeature,
} from "@/types";
import {
  _categoricalString,
  _codedConcept,
  _codedNumerical,
  _numerical,
  availablePatSimOptions,
  availablePatSimTypes,
  defaultCategoricalStringInput,
  defaultCodedConceptInput,
  defaultCodedNumericalInput,
  defaultNumericalInput,
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

function getDefaultFeatureInputForType(
  type: (typeof availablePatSimTypes)[number]
) {
  if (type === _categoricalString) {
    return { ...defaultCategoricalStringInput };
  } else if (type === _codedConcept) {
    return { ...defaultCodedConceptInput };
  } else if (type === _codedNumerical) {
    return { ...defaultCodedNumericalInput };
  } else if (type === _numerical) {
    return { ...defaultNumericalInput };
  }
}

const PatSimFeatureInput = (props: PatSimFeatureInputProps) => {
  const getPathInputForType = (type: string) => {
    if (type === _categoricalString || type === _numerical) {
      return (
        <>
          <input
            type="text"
            placeholder="Target Paths"
            className="grow h-12 w-52 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            value={(props.inputFeature as CategoricalStringFeature).targetPath}
            onChange={(e) => {
              props.setInputFeatures((prev) => {
                (prev.find((f) => f.id === props.featureId) as
                  | CategoricalStringFeature
                  | NumericalFeature)!.targetPath = e.target.value;
                return [...prev];
              });
            }}
          />
        </>
      );
    } else if (type === _codedConcept) {
      return (
        <>
          <input
            type="text"
            placeholder="Code Paths"
            className="grow h-12 w-52 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            value={(props.inputFeature as CodedConceptFeature).codePath}
            onChange={(e) => {
              props.setInputFeatures((prev) => {
                (prev.find(
                  (f) => f.id === props.featureId
                ) as CodedConceptFeature)!.codePath = e.target.value;
                return [...prev];
              });
            }}
          />
          <input
            type="text"
            placeholder="System Paths"
            className="grow h-12 w-52 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            value={(props.inputFeature as CodedConceptFeature).systemPath}
            onChange={(e) => {
              props.setInputFeatures((prev) => {
                (prev.find(
                  (f) => f.id === props.featureId
                ) as CodedConceptFeature)!.systemPath = e.target.value;
                return [...prev];
              });
            }}
          />
        </>
      );
    } else if (type === _codedNumerical) {
      return (
        <>
          <input
            type="text"
            placeholder="Code Paths"
            className="grow h-12 w-52 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            value={(props.inputFeature as CodedNumericalFeature).codePath}
            onChange={(e) => {
              props.setInputFeatures((prev) => {
                (prev.find(
                  (f) => f.id === props.featureId
                ) as CodedNumericalFeature)!.codePath = e.target.value;
                return [...prev];
              });
            }}
          />
          <input
            type="text"
            placeholder="Value Paths"
            className="grow h-12 w-52 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
            value={(props.inputFeature as CodedNumericalFeature).valuePath}
            onChange={(e) => {
              props.setInputFeatures((prev) => {
                (prev.find(
                  (f) => f.id === props.featureId
                ) as CodedNumericalFeature)!.valuePath = e.target.value;
                return [...prev];
              });
            }}
          />
        </>
      );
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
        options={availablePatSimOptions}
        value={availablePatSimOptions.find(
          (o) => o.value === props.inputFeature.type
        )}
        className="w-64"
        placeholder="Feature Type"
        onChange={(option) => {
          if (!option || option.value === props.inputFeature.type) return;
          props.setInputFeatures((prev) => {
            const oldFeature = prev.find((f) => f.id === props.featureId)!;
            const newFeature = getDefaultFeatureInputForType(option.value)!;
            newFeature.type = option.value;
            newFeature.id = oldFeature.id;
            newFeature.name = oldFeature.name;
            newFeature.targetResources = oldFeature.targetResources;
            prev[prev.indexOf(oldFeature)] = newFeature;
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
