import {
  CategoricalStringFeature,
  CategoricalStringReqParam,
  CodedConceptFeature,
  CodedConceptReqParam,
  CodedNumericalReqParam,
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

export function parseFeaturesForRequest(patSimFeatures: PatSimFeature[]) {
  let codedNumericalFeatures: CodedNumericalReqParam[] = [];
  let categoricalStringFeatures: CategoricalStringReqParam[] = [];
  let numericalFeatures: NumericalReqParam[] = [];
  let codedConceptFeatures: CodedConceptReqParam[] = [];

  const pathsSeparator = ",";

  for (const feature of patSimFeatures) {
    if (feature.type === _categoricalString) {
      const feat = feature as CategoricalStringFeature;
      categoricalStringFeatures.push({
        feature_name: feat.name,
        target_resource_types: feat.targetResources,
        target_paths: feat
          .targetPath!.split(pathsSeparator)
          .map((path) => path.trim()),
      });
    } else if (feature.type === _numerical) {
      const feat = feature as NumericalFeature;
      numericalFeatures.push({
        feature_name: feat.name,
        target_resource_types: feat.targetResources,
        target_paths: feat
          .targetPath!.split(pathsSeparator)
          .map((path) => path.trim()),
      });
    } else if (feature.type === _codedConcept) {
      const feat = feature as CodedConceptFeature;
      codedConceptFeatures.push({
        feature_name: feat.name,
        target_resource_types: feat.targetResources,
        code_paths: feat
          .codePath!.split(pathsSeparator)
          .map((path) => path.trim()),
        system_paths: feat
          .systemPath!.split(pathsSeparator)
          .map((path) => path.trim()),
      });
    } else if (feature.type === _codedNumerical) {
      const feat = feature as CodedConceptFeature;
      codedNumericalFeatures.push({
        feature_name: feat.name,
        target_resource_types: feat.targetResources,
        code_paths: feat
          .codePath!.split(pathsSeparator)
          .map((path) => path.trim()),
        system_paths: feat
          .systemPath!.split(pathsSeparator)
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
