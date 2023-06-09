import {
  CategoricalStringReqParam,
  CodedConceptReqParam,
  CodedNumericalReqParam,
  CsvExportReqParam,
  NumericalReqParam,
  PatSimFeature,
  PathItem,
} from "@/types";
import { Bundle, Resource, StructureDefinition } from "fhir/r4";
import {
  _categoricalString,
  _codedConcept,
  _codedNumerical,
  _numerical,
  availablePatSimTypes,
  detaSpaceUrl,
} from "./constants";

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

export const pingBackend = async () => {
  const pingResponse = await fetch(`${detaSpaceUrl}/api/v1/ping/`);
  if (!pingResponse.ok) {
    throw new Error("Error fetching profile tree");
  }
  const pingJson = await pingResponse.json();
  return pingJson;
};

export const fetchPatSimData = async (
  data: Resource[],
  inputFeatures: {
    categorical_features: CategoricalStringReqParam[];
    numerical_features: NumericalReqParam[];
    coded_concept_features: CodedConceptReqParam[];
    coded_numerical_features: CodedNumericalReqParam[];
  }
) => {
  const body = {
    data: data,
    categorical_features: inputFeatures.categorical_features || [],
    numerical_features: inputFeatures.numerical_features || [],
    coded_concept_features: inputFeatures.coded_concept_features || [],
    coded_numerical_features: inputFeatures.coded_numerical_features || [],
  };
  const patSimResponse = await fetch("api/patsim/", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return patSimResponse;
};

export const fetchCsvExportData = async (
  data: Resource[],
  inputFeatures: CsvExportReqParam[]
) => {
  const body = {
    data: data,
    features: inputFeatures,
  };

  const csvExportResponse = await fetch(`api/csv-export/`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!csvExportResponse.ok) {
    throw new Error("Error fetching patient similarity results.");
  }
  return csvExportResponse;
};
