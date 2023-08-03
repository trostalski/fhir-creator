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
import { ConstraintResolver } from "@/utils/constraint_utils";
import { removeNPathPartsFromStart } from "@/utils/path_utils";
import {
  checkCardinalities,
  createJsonFromPathArray,
  createPathArrayFromJson,
  extractPathValuePairs,
  formatInputDataForResource,
} from "@/utils/utils";
import React from "react";
import { isEqual } from "lodash";

interface AddResourceButtonProps {
  setPathsWithInvalidCardinality: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

const AddResourceButton = (props: AddResourceButtonProps) => {
  const { mode, resourceType, profileTree, setOrderedConstraintResults } =
    useStore((state) => {
      return {
        mode: state.mode,
        resourceType: state.activeResourceType,
        profileTree: state.activeProfileTree,
        setOrderedConstraintResults: state.setOrderedConstraintResults,
      };
    });

  if (!profileTree) {
    return (
      <button
        disabled
        className="bg-green-600 flex-shrink-0 w-36  text-white py-1 px-4 rounded bg-opacity-50 cursor-not-allowed"
      >
        Save Resource
      </button>
    );
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
        className={`bg-green-600 flex-shrink-0 w-36  text-white py-1 px-4 rounded  ${
          profileTree.length === 0
            ? "bg-opacity-50 cursor-not-allowed"
            : "hover:bg-green-800"
        }}`}
        onClick={() => {
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
          let formattedInputData = formatInputDataForResource(inputData);
          formattedInputData = addResourceTypeToInputData(formattedInputData);
          const resource = createJsonFromPathArray(formattedInputData);
          // Constraint check
          const constraintResolver = new ConstraintResolver(
            profileTree,
            resource
          );
          const orderedConstraintResults =
            constraintResolver.getEvaluationResult();
          setOrderedConstraintResults(orderedConstraintResults);
          if (orderedConstraintResults.warnings.length > 0) {
            const confirm = window.confirm(
              "There are constraint warnings in this document. By clicking ok you chose to ignore them and proceed anyway."
            );
            if (!confirm) {
              return;
            }
          } else if (orderedConstraintResults.errors.length > 0) {
            toastError("Constraint error. Inspect the form for more details");
            return;
          }
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
