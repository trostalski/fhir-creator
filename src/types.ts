export interface OptionType {
  label: string;
  value: string;
}

export interface ProfileBundle {
  resourceType: string;
  id: string;
  meta: Meta;
  type: string;
  entry: Entry[];
}

export interface Entry {
  fullUrl: string;
  resource: StructureDefinition;
}

export interface StructureDefinition {
  resourceType: string;
  id: string;
  meta: Meta;
  text: Text;
  url: string;
  version: string;
  name: string;
  status: string;
  experimental: boolean;
  date: string;
  publisher: string;
  contact: Contact[];
  description: string;
  kind?: string;
  software?: Software;
  fhirVersion?: string;
  format?: string[];
  rest?: REST[];
  code?: string;
  search?: boolean;
  resource?: Array<ResourceResourceClass | string>;
  extension?: ElementExtension[];
  title?: string;
  affectsState?: boolean;
  comment?: string;
  system?: boolean;
  type?: boolean | string;
  instance?: boolean;
  parameter?: Parameter[];
  mapping?: ResourceMapping[];
  abstract?: boolean;
  snapshot?: Elements;
  differential?: Elements;
  baseDefinition?: string;
  derivation?: string;
  purpose?: string;
}

export interface Contact {
  telecom: Telecom[];
}

export interface Telecom {
  system: string;
  value: string;
}

export interface Elements {
  element: Element[];
}

export interface Element {
  id: string;
  path: string;
  short: string;
  definition: string;
  min: number;
  max: string;
  mustSupport?: boolean;
  isModifier: boolean;
  mapping?: ElementMapping[];
  comment?: string;
  type?: TypeElement[];
  isSummary?: boolean;
  isModifierReason?: string;
  binding?: ElementBinding;
  alias?: string[];
  extension?: ElementExtension[];
  constraint?: Constraint[];
  requirements?: string;
  condition?: string[];
  meaningWhenMissing?: string;
  orderMeaning?: string;
  contentReference?: string;
  slicing?: Slicing;
  example?: Example[];
  base?: Base;
  representation?: string[];
}

export interface Base {
  path: string;
  min: number;
  max: string;
}

export interface ElementBinding {
  extension: ElementExtension[];
  strength: string;
  description?: string;
  valueSet?: string;
}

export interface ElementExtension {
  url: string;
  valueCanonical?: string;
  valueString?: string;
  valueBoolean?: boolean;
  valueCode?: string;
  valueInteger?: number;
}

export interface Constraint {
  key: string;
  severity: string;
  human: string;
  expression: string;
  xpath: string;
  source: string;
  extension?: ConstraintExtension[];
  requirements?: string;
}

export interface ConstraintExtension {
  url: string;
  valueBoolean?: boolean;
  valueMarkdown?: string;
}

export interface Example {
  label: string;
  valueDateTime?: string;
  valueId?: string;
  valueUnsignedInt?: number;
  valueString?: string;
  valueCode?: string;
  valueBoolean?: boolean;
}

export interface ElementMapping {
  identity: string;
  map: string;
}

export interface Slicing {
  discriminator: Discriminator[];
  description: string;
  rules: string;
}

export interface Discriminator {
  type: string;
  path: string;
}

export interface TypeElement {
  extension?: TypeExtension[];
  code: string;
  targetProfile?: string[];
  profile?: string[];
}

export interface TypeExtension {
  url: string;
  valueUrl?: string;
  valueBoolean?: boolean;
}

export interface ResourceMapping {
  identity: string;
  uri: string;
  name: string;
}

export interface Meta {
  lastUpdated: string;
}

export interface Parameter {
  name: string;
  use: string;
  min: number;
  max: string;
  documentation?: string;
  type?: string;
  searchType?: string;
  targetProfile?: string[];
  part?: Part[];
  binding?: ParameterBinding;
}

export interface ParameterBinding {
  extension: PurpleExtension[];
  strength: string;
  valueSet: string;
}

export interface PurpleExtension {
  url: string;
  valueString: string;
}

export interface Part {
  name: string;
  use: string;
  min: number;
  max: string;
  documentation: string;
  type?: string;
  extension?: PartExtension[];
  part?: Part[];
}

export interface PartExtension {
  url: string;
  valueUri: string;
}

export interface ResourceResourceClass {
  code: string;
  param?: string[];
}

export interface REST {
  mode: string;
  documentation: string;
  security: Security;
  resource?: RESTResource[];
  interaction?: Interaction[];
  searchParam?: SearchParam[];
  operation?: Operation[];
}

export interface Interaction {
  code: string;
  documentation: string;
}

export interface Operation {
  name: string;
  definition: string;
}

export interface RESTResource {
  type: string;
  profile: string;
  interaction: Interaction[];
  conditionalCreate: boolean;
  conditionalUpdate: boolean;
  conditionalDelete: string;
  referencePolicy: string[];
  searchInclude?: string[];
  searchRevInclude?: string[];
  searchParam?: SearchParam[];
}

export interface SearchParam {
  name: string;
  definition: string;
  type: string;
  documentation: string;
}

export interface Security {
  cors: boolean;
  service: Service[];
  description: string;
}

export interface Service {
  coding: Coding[];
  text: string;
}

export interface Coding {
  system: string;
  code: string;
  display: string;
}

export interface Software {
  name: string;
}

export interface Text {
  status: string;
  div: string;
}
