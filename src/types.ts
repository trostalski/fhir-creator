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
  targetResources: (typeof resourceList)[number][];
  targetPath: string;
  condition?: string;
}

export type PatSimFeature = BaseFeature & {
  type: (typeof availablePatSimTypes)[number];
};

export type CsvExportFeature = BaseFeature;
