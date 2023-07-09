import {
  CategoricalStringFeature,
  CategoricalStringReqParam,
  CodedConceptFeature,
  CodedConceptReqParam,
  CodedNumericalFeature,
  CodedNumericalReqParam,
  CsvExportFeature,
  CsvExportReqParam,
  NumericalFeature,
  NumericalReqParam,
  PatSimFeature,
} from "@/types";
import {
  _categoricalString,
  _codedConcept,
  _codedNumerical,
  _numerical,
} from "./constants";

export function parseCsvFeaturesForRequest(csvFeatures: CsvExportFeature[]) {
  let parsedFeatures: CsvExportReqParam[] = [];

  const pathSeparator = ",";

  for (const feature of csvFeatures) {
    parsedFeatures.push({
      feature_name: feature.name,
      target_resource_types: feature.targetResources,
      target_paths: feature
        .targetPath!.split(pathSeparator)
        .map((path) => path.trim()),
    });
  }
  return parsedFeatures;
}

export function parsePatSimFeaturesForRequest(patSimFeatures: PatSimFeature[]) {
  let codedNumericalFeatures: CodedNumericalReqParam[] = [];
  let categoricalStringFeatures: CategoricalStringReqParam[] = [];
  let numericalFeatures: NumericalReqParam[] = [];
  let codedConceptFeatures: CodedConceptReqParam[] = [];

  const pathSeparator = ",";

  for (const feature of patSimFeatures) {
    if (feature.type === _categoricalString) {
      const feat = feature as CategoricalStringFeature;
      categoricalStringFeatures.push({
        feature_name: feat.name,
        target_resource_types: feat.targetResources,
        target_paths: feat
          .targetPath!.split(pathSeparator)
          .map((path) => path.trim()),
      });
    } else if (feature.type === _numerical) {
      const feat = feature as NumericalFeature;
      numericalFeatures.push({
        feature_name: feat.name,
        target_resource_types: feat.targetResources,
        target_paths: feat
          .targetPath!.split(pathSeparator)
          .map((path) => path.trim()),
      });
    } else if (feature.type === _codedConcept) {
      const feat = feature as CodedConceptFeature;
      codedConceptFeatures.push({
        feature_name: feat.name,
        target_resource_types: feat.targetResources,
        code_paths: feat
          .codePath!.split(pathSeparator)
          .map((path) => path.trim()),
        system_paths: feat
          .systemPath!.split(pathSeparator)
          .map((path) => path.trim()),
      });
    } else if (feature.type === _codedNumerical) {
      const feat = feature as CodedNumericalFeature;
      codedNumericalFeatures.push({
        feature_name: feat.name,
        target_resource_types: feat.targetResources,
        code_paths: feat
          .codePath!.split(pathSeparator)
          .map((path) => path.trim()),
        value_paths: feat
          .valuePath!.split(pathSeparator)
          .map((path) => path.trim()),
      });
    } else {
      throw new Error("Invalid feature type");
    }
  }

  return {
    categorical_features: categoricalStringFeatures,
    numerical_features: numericalFeatures,
    coded_concept_features: codedConceptFeatures,
    coded_numerical_features: codedNumericalFeatures,
  };
}

export async function downloadFileFromResponse(
  responseObj: Response,
  fileName: string
) {
  const blob = await responseObj.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
