import { Colors } from "react-select";
import { ProfileTreeNode } from "./utils/buildTree";
import { resourceTypeList } from "./utils/constants";

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
  targetResources: (typeof resourceTypeList)[number][];
}

export interface CategoricalStringFeature extends BaseFeature {
  targetPath?: string;
  type: string;
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
  type: string;
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
  type: string;
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
  type: string;
  codePath?: string;
  conditionalValuePath?: string;
  conditionalCodePath?: string;
}

export interface CodedNumericalReqParam {
  feature_name: string;
  target_resource_types: string[];
  code_paths?: string[];
  value_paths?: string[];
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

export interface CsvExportReqParam {
  feature_name: string;
  target_resource_types: string[];
  target_paths?: string[];
  conditional_target_paths?: string[];
}
export interface ConstraintItem {
  key: string;
  expression: string;
  human: string;
  severity: string;
  source: string;
  xpath: string;
}

export interface CodingChildren {
  systemNode: ProfileTreeNode;
  codeNode: ProfileTreeNode;
  displayNode: ProfileTreeNode;
  versionNode: ProfileTreeNode;
  userSelectedNode: ProfileTreeNode;
}

export interface ReferenceChildren {
  referenceNode: ProfileTreeNode;
  typeNode: ProfileTreeNode;
  displayNode: ProfileTreeNode;
}

export interface CodedTerm {
  term: string;
  code: string;
}

export interface FTSResponse {
  coded_terms: CodedTerm[];
}

export interface IndexSection {
  key: string;
  startIndex: number;
  endIndex: number;
  askedFor: boolean;
  text?: string;
}

export interface LMMSections {
  sectionsAskedFor: Record<string, string[]>;
  sectionsInferred: Record<string, string[]>;
}

export interface TextDisplayProps {
  text: string;
  outline?: Outline;
  setText: (text: string) => void;
  setOutline: (outline: Outline) => void;
  activeResourceType?: OptionType;
  colors: ColorStore;
  selectedEntity?: OutlineItem;
}

// enum with three states: "askedFor", "inferred", "notAllocated"
export enum SectionState {
  askedFor,
  inferred,
  notAllocated,
}

export enum StructurerModes {
  inputText,
  labelText,
  segmentText,
}

export interface StructurerProps {
  text: string;
  setText: (text: string) => void;
  setMode: (mode: StructurerModes) => void;
  llmResponse?: string;
  setLlmResponse: (llmResponse: string) => void;
}

export interface StructurerTextProps extends StructurerProps {
  mode: StructurerModes;
}

export interface structureTextWithTemplateAndInferResponse {
  sections_asked_for: {
    [key: string]: string[];
  };
  sections_inferred: {
    [key: string]: string[];
  };
  text: string;
}

export interface CategorySelectorProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  onSelectCategory: (category: string) => void;
  placeholder: string;
  InputComponent: React.FC<InputTextProps | InputSelectionProps>;
  fetchCategories?: () => Promise<string[]>;
  DisplayComponent: React.FC<DisplayCategoriesProps>;
  colors?: ColorStore;
  focusedCategory?: string;
  setFocusedCategory?: (category: string) => void;
  getColor?: () => string;
  setColors?: (colors: ColorStore) => void;
}

export interface DisplayCategoriesProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  colors?: ColorStore;
  setColors?: (colors: ColorStore) => void;
  getColor?: () => string;
  focusedCategory?: string;
  setFocusedCategory?: (category: string) => void;
}

export interface StructurerTextDisplayProps extends StructurerTextProps {}

export interface StructurerWorkBenchProps extends StructurerTextProps {}

export interface StructurerWorkBenchTextInputProps
  extends StructurerWorkBenchProps {}

export interface StructurerWorkBenchSegmenterProps
  extends StructurerWorkBenchProps {}

export interface StructurerWorkBenchLabelerProps
  extends StructurerWorkBenchProps {}

export interface StructurerTextInputProps extends StructurerProps {}

export enum CategorySelectorInputTypes {
  text,
  selection,
}

export interface InputProps {
  onSelect: (category: string) => void;
  placeholder: string;
}

export interface InputSelectionProps extends InputProps {
  fetchCategories?: () => Promise<string[]>;
}

export interface InputTextProps extends InputProps {}

export interface Section {
  id: number;
  heading: string;
  text: string;
  state: SectionState;
  children: React.ReactNode;
}

export interface SectionComponentProps {
  section: Section;
  children: React.ReactNode;
}

export interface SectionTextProps {
  children: React.ReactNode;
}

// export interface StructurerOutlineProps {

export interface TextInputProps {
  text: string;
  setText: (text: string) => void;
  setOutline: (outline: Outline) => void;
}

export interface ValueState {
  start: number;
  end: number;
  tag: string;
}

export interface OutlineItem {
  item: string;
  matches?: [number, number][];
}

export interface Outline {
  [key: string]: OutlineItem[];
}

export interface OldOutline {
  [key: string]: string[];
}

export interface OutlineArrayItem extends OutlineItem {
  resourceType: string;
}

export interface ColorStore {
  [key: string]: string;
}

export interface Color {
  resourceType: string;
  color: string;
}

export interface InputDict {
  resource_type: string;
  medical_term: string;
  context: string;
}
