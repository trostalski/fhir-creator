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

export interface BaseFeature {
  id: number;
  name: string;
  type: string;
  targetResources: (typeof resourceList)[number][];
}

export interface CategoricalStringFeature extends BaseFeature {
  targetPath?: string;
  conditionalTargetPath?: string;
}

export interface CategoricalStringReqParam {
  feature_name: string;
  target_resource_types: string[];
  target_paths?: string[];
  conditional_paths?: string[];
}

export interface NumericalFeature extends BaseFeature {
  targetPath?: string;
  conditionalTargetPath?: string;
}

export interface NumericalReqParam {
  feature_name: string;
  target_resource_types: string[];
  target_paths?: string[];
  conditional_paths?: string[];
}

export interface CodedConceptFeature extends BaseFeature {
  codePath?: string;
  systemPath?: string;
  conditionalCodePath?: string;
  conditionalSystemPath?: string;
}

export interface CodedConceptReqParam {
  feature_name: string;
  target_resource_types: string[];
  code_paths?: string[];
  system_paths?: string[];
  conditional_code_paths?: string[];
  conditional_system_paths?: string[];
}

export interface CodedNumericalFeature extends BaseFeature {
  valuePath?: string;
  codePath?: string;
  conditionalValuePath?: string;
  conditionalCodePath?: string;
}

export interface CodedNumericalReqParam {
  feature_name: string;
  target_resource_types: string[];
  code_paths?: string[];
  system_paths?: string[];
  conditional_code_paths?: string[];
  conditional_system_paths?: string[];
}

export type PatSimFeature =
  | CategoricalStringFeature
  | NumericalFeature
  | CodedConceptFeature
  | CodedNumericalFeature;

export interface CsvExportFeature extends BaseFeature {
  targetPath?: string;
  condition?: string;
}
