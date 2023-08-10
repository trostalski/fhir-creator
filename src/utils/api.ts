import {
  CategoricalStringReqParam,
  CodedConceptReqParam,
  CodedNumericalReqParam,
  CsvExportReqParam,
  NumericalReqParam,
  PathItem,
  FTSResponse,
} from "@/types";
import { Resource, StructureDefinition } from "fhir/r4";
import {
  _categoricalString,
  _codedConcept,
  _codedNumerical,
  _numerical,
  detaSpaceUrl,
  icd10TerminologySystem,
  icd9TerminologySystem,
  loincTerminologySystem,
  snomedTerminologySystem,
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
    console.log("Error fetching profile tree");
    return false;
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

export const fetchTermFts = async (
  terminologySystem: string,
  searchTerm: string,
  limit = 10
) => {
  let searchSystem;

  if (terminologySystem === snomedTerminologySystem) {
    searchSystem = "snomed";
  } else if (terminologySystem === loincTerminologySystem) {
    searchSystem = "loinc";
  } else if (terminologySystem === icd10TerminologySystem) {
    searchSystem = "icd10";
  } else if (terminologySystem === icd9TerminologySystem) {
    searchSystem = "icd9";
  }

  const response = await fetch(
    `api/terminology/?terminology_system=${searchSystem}&search_term=${searchTerm}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = (await response.json()) as FTSResponse;
  return data;
};
