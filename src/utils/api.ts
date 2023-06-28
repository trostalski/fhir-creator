import { PatSimFeature, PathItem } from "@/types";
import { Bundle, StructureDefinition } from "fhir/r4";
import { availablePatSimTypes } from "./constants";

export const fetchProfileTree = async (
  profile: StructureDefinition,
  inputData?: PathItem[]
) => {
  const profileTreeResponse = await fetch(`api/profileTrees/`, {
    method: "POST",
    body: JSON.stringify({
      profile: profile,
      inputData: inputData,
    }),
  });
  if (!profileTreeResponse.ok) {
    throw new Error("Error fetching profile tree");
  }
  const profileTreeJson = await profileTreeResponse.json();
  return profileTreeJson;
};

export const fetchPatSim = (features: PatSimFeature[], data: Bundle) => {
  const body = {
    data: data,
    categorical_features: [],
    numerical_features: [],
    coded_concept_features: [],
    coded_numerical_features: [],
  };
  for (const type of availablePatSimTypes) {
    for (const feat of features) {
      if (feat.type === type) {
      }
    }
  }
};
