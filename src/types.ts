import { availablePatSimTypes, resourceList } from "./utils/constants";

export interface PathItem {
  path: string;
  value: string;
}

export interface OptionType {
  label: string;
  value: string;
}

export interface NotMet {
  path: string;
  minIsMet: boolean;
  maxIsMet: boolean;
}

export interface Cardinality {
  min: number;
  max: string;
}

export interface CheckCardinalitiesResult {
  isValid: boolean;
  pathsWithInvalidCardinality: string[];
}

export interface PathCounter {
  path: string;
  count: number;
}

export interface BaseFeatureInput {
  id: number;
  name: string;
  type: string;
  targetResources: (typeof resourceList)[number][];
}

export interface CategoricalStringFeatureInput extends BaseFeatureInput {
  targetPath: string;
  conditionalTargetPath: string;
}

export interface NumericalFeatureInput extends BaseFeatureInput {
  targetPath: string;
  conditionalTargetPath: string;
}

export interface CodedConceptFeatureInput extends BaseFeatureInput {
  codePath: string;
  systemPath: string;
  conditionalCodePath: string;
  conditionalSystemPath: string;
}

export interface CodedNumericalFeatureInput extends BaseFeatureInput {
  valuePath: string;
  codePath: string;
  conditionalValuePath: string;
  conditionalCodePath: string;
}

export type PatSimFeature =
  | CategoricalStringFeatureInput
  | NumericalFeatureInput
  | CodedConceptFeatureInput
  | CodedNumericalFeatureInput;

export interface CsvExportFeature extends BaseFeatureInput {
  targetPath: string;
  condition: string;
}
