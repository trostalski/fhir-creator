export interface InputData {
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
