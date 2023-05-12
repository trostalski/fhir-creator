import {
  addResourcPathRepr,
  addResource,
  updateResource,
  updateResourcePathRepr,
} from "@/db/utils";
import { toastError, toastSuccess } from "@/toasts";
import { InputData } from "@/types";
import { ProfileTree } from "@/utils/buildTree";
import { Modes } from "@/utils/constants";
import { removeNPathPartsFromStart } from "@/utils/path_utils";
import {
  checkCardinalities,
  createJsonFromPathArray,
  extractInputDataFromProfileTree,
  formatInputDataForResource,
} from "@/utils/utils";
import React from "react";

interface AddResourceButtonProps {
  mode: Modes;
  profileTree: ProfileTree;
  setPathsWithInvalidCardinality: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  resourceType?: string;
}

const AddResourceButton = (props: AddResourceButtonProps) => {
  const addResourceTypeToInputData = (inputData: InputData[]) => {
    return [
      ...inputData,
      {
        path: "resourceType",
        value: props.resourceType!,
      },
    ];
  };

  if (props.mode == Modes.CREATE) {
    return (
      <button
        className="bg-green-600 max-h-8 hover:bg-green-800 text-white text-xxs font-bold py-2 px-4 rounded"
        onClick={() => {
          if (props.profileTree.length === 0) {
            return;
          }
          props.setPathsWithInvalidCardinality([]);
          const inputData = extractInputDataFromProfileTree(props.profileTree);
          const checkCardinalityResponse = checkCardinalities(
            props.profileTree,
            inputData
          );
          if (!checkCardinalityResponse.isValid) {
            toastError(
              `Cardinalities error: ${checkCardinalityResponse.pathsWithInvalidCardinality
                .map((p) => removeNPathPartsFromStart(p, 1))
                .join(", ")}`
            );
            props.setPathsWithInvalidCardinality(
              checkCardinalityResponse.pathsWithInvalidCardinality
            );
            return;
          }
          let formattedInputData = formatInputDataForResource(inputData);
          formattedInputData = addResourceTypeToInputData(formattedInputData);
          const resource = createJsonFromPathArray(formattedInputData);
          addResource(resource);
          addResourcPathRepr(formattedInputData);
          toastSuccess("Resource added");
        }}
      >
        Save Resource
      </button>
    );
  } else if (props.mode == Modes.EDIT) {
    return (
      <button
        className="bg-green-600 max-h-8 hover:bg-green-800 text-white text-xs font-bold py-2 px-4 rounded"
        onClick={() => {
          let inputData = extractInputDataFromProfileTree(props.profileTree);
          inputData = formatInputDataForResource(inputData);
          const resource = createJsonFromPathArray(inputData);
          updateResource(resource);
          updateResourcePathRepr(inputData);
          toastSuccess("Resource updated");
        }}
      >
        Save Changes
      </button>
    );
  } else {
    return null;
  }
};

export default AddResourceButton;
