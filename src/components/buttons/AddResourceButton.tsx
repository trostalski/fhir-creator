import {
  addResourcPathRepr,
  addResource,
  updateResource,
  updateResourcePathRepr,
} from "@/db/utils";
import { useStore } from "@/stores/useStore";
import { toastError, toastSuccess } from "@/toasts";
import { PathItem } from "@/types";
import { Modes } from "@/utils/constants";
import { ConstraintResolver, createConstraintTree } from "@/utils/constraint_utils";
import { removeNPathPartsFromStart } from "@/utils/path_utils";
import {
  checkCardinalities,
  createJsonFromPathArray,
  extractPathValuePairs,
  formatInputDataForResource,
} from "@/utils/utils";
import React from "react";

interface AddResourceButtonProps {
  setPathsWithInvalidCardinality: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

const AddResourceButton = (props: AddResourceButtonProps) => {
  const { mode, resourceType, profileTree } = useStore((state) => {
    return {
      mode: state.mode,
      resourceType: state.activeResourceType,
      profileTree: state.activeProfileTree,
    };
  });

  if (!profileTree) {
    return null;
  }

  const addResourceTypeToInputData = (inputData: PathItem[]) => {
    return [
      ...inputData,
      {
        path: "resourceType",
        value: resourceType!,
      },
    ];
  };

  if (mode == Modes.CREATE) {
    return (
      <button
        disabled={profileTree.length === 0}
        className={`bg-green-600 w-36  text-white py-1 px-4 rounded  ${
          profileTree.length === 0
            ? "bg-opacity-50 cursor-not-allowed"
            : "hover:bg-green-800"
        }}`}
        onClick={() => {
          // DEBUG
          console.log(profileTree);
          // DEBUG
          if (profileTree.length === 0) {
            return;
          }
          props.setPathsWithInvalidCardinality([]);
          const inputData = extractPathValuePairs(profileTree);
          const checkCardinalityResponse = checkCardinalities(
            profileTree,
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
          // DEVELOP
          const constraintResolver = new ConstraintResolver(profileTree);
          // DEVELOP
          let formattedInputData = formatInputDataForResource(inputData);
          formattedInputData = addResourceTypeToInputData(formattedInputData);
          const resource = createJsonFromPathArray(formattedInputData);
          constraintResolver.setResource(resource);
          constraintResolver.evaluate();
          addResource(resource);
          addResourcPathRepr(formattedInputData);
          toastSuccess("Resource added");
        }}
      >
        Save Resource
      </button>
    );
  } else if (mode == Modes.EDIT) {
    return (
      <button
        className={`bg-green-600 w-36  text-white py-1 px-4 rounded  ${
          profileTree.length === 0
            ? "bg-opacity-50 cursor-not-allowed"
            : "hover:bg-green-800"
        }}`}
        onClick={() => {
          let inputPathValuePairs = extractPathValuePairs(profileTree);
          if (!inputPathValuePairs.find((p) => p.path == "root.resourceType")) {
            inputPathValuePairs = [
              ...inputPathValuePairs,
              {
                path: "root.resourceType",
                value: resourceType!,
              },
            ];
          }
          console.log(inputPathValuePairs);
          inputPathValuePairs = formatInputDataForResource(inputPathValuePairs);
          const resource = createJsonFromPathArray(inputPathValuePairs);
          updateResource(resource);
          updateResourcePathRepr(inputPathValuePairs);
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
