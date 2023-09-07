import {
  CategoricalStringFeature,
  CodedConceptFeature,
  CodedNumericalFeature,
  CsvExportFeature,
  NumericalFeature,
  OptionType,
} from "../types";

export const detaSpaceUrl = isProd()
  ? process.env.NEXT_PUBLIC_DETA_URL
  : process.env.NEXT_PUBLIC_DETA_URL;

export const awsUrl = isProd()
  ? process.env.NEXT_PUBLIC_AWS_URL
  : "http://localhost:8000";

import { ElementDefinitionConstraint } from "fhir/r4";
import { ProfileTreeNode } from "./buildTree";
import {
  ConstraintEvaluationResult,
  OrderedConstraintResults,
} from "./constraint_utils";
import { isProd } from "./utils";

export const rootName = "root";
export const pathDelimiter = ".";
export const multiTypeString = "[x]";
export const sliceDelimiter = ":";

export const snomedTerminologySystem = "http://snomed.info/sct";
export const loincTerminologySystem = "http://loinc.org";
export const icd10TerminologySystem = "http://hl7.org/fhir/sid/icd-10";
export const icd9TerminologySystem = "http://hl7.org/fhir/sid/icd-9-cm";

export enum Modes {
  EDIT = "edit",
  CREATE = "create",
}

export const notImportantIdSuffices = [
  "meta",
  "implicitRules",
  "language",
  // "text",
  "contained",
  "extension",
  "modifierExtension",
  "modifier",
  "identifier",
  "stage",
  "evidence",
  "entry",
];

export const validFhirTypes = [
  "Address",
  "Age",
  "Annotation",
  "Attachment",
  "BackboneElement",
  "CodeableConcept",
  "CodeableReference",
  "Coding",
  "ContactDetail",
  "ContactPoint",
  "Contributor",
  "Count",
  "DataRequirement",
  "Distance",
  "Dosage",
  "Duration",
  "Element",
  "ElementDefinition",
  "Expression",
  "Extension",
  "HumanName",
  "Identifier",
  "MarketingStatus",
  "Meta",
  "Money",
  "MoneyQuantity",
  "Narrative",
  "ParameterDefinition",
  "Period",
  "Population",
  "ProdCharacteristic",
  "ProductShelfLife",
  "Quantity",
  "Range",
  "Ratio",
  "RatioRange",
  "Reference",
  "RelatedArtifact",
  "SampledData",
  "Signature",
  "SimpleQuantity",
  "Timing",
  "TriggerDefinition",
  "UsageContext",
  "base64Binary",
  "boolean",
  "canonical",
  "code",
  "date",
  "dateTime",
  "decimal",
  "id",
  "instant",
  "integer",
  "markdown",
  "oid",
  "positiveInt",
  "string",
  "time",
  "unsignedInt",
  "uri",
  "url",
  "uuid",
  "xhtml",
];

export const primitiveTypes = [
  "base64Binary",
  "boolean",
  "canonical",
  "code",
  "date",
  "dateTime",
  "decimal",
  "Extension", // TODO: handle this
  "id",
  "instant",
  "integer",
  "integer64",
  "markdown",
  "oid",
  "positiveInt",
  "string",
  "time",
  "unsignedInt",
  "uri",
  "url",
  "uuid",
];

export const csvExportMethod = "CSV Export";
export const patSimMethod = "Patient Similarity";
export const availableAnalyzerMethods = [csvExportMethod, patSimMethod];

export const _categoricalString = "categorical_string";
export const _numerical = "numerical";
export const _codedConcept = "coded_concept";
export const _codedNumerical = "coded_numerical";
export const _csvExport = "csv_export";

export const defaultCsvExportFeature: CsvExportFeature = {
  id: 0,
  name: "",
  targetResources: [],
  condition: "",
  targetPath: "",
};

export const defaultCategoricalStringInput: CategoricalStringFeature = {
  id: 0,
  name: "",
  type: _categoricalString,
  targetResources: [],
  targetPath: "",
  conditionalTargetPath: "",
};

export const defaultNumericalInput: NumericalFeature = {
  id: 0,
  name: "",
  type: _numerical,
  targetResources: [],
  targetPath: "",
  conditionalTargetPath: "",
};

export const defaultCodedConceptInput: CodedConceptFeature = {
  id: 0,
  name: "",
  type: _codedConcept,
  targetResources: [],
  codePath: "",
  systemPath: "",
  conditionalCodePath: "",
  conditionalSystemPath: "",
};

export const defaultCodedNumericalInput: CodedNumericalFeature = {
  id: 0,
  name: "",
  type: _codedNumerical,
  targetResources: [],
  codePath: "",
  valuePath: "",
  conditionalCodePath: "",
  conditionalValuePath: "",
};

export const availablePatSimTypes = [
  _categoricalString,
  _numerical,
  _codedConcept,
  _codedNumerical,
];

export const availablePatSimOptions: OptionType[] = [
  { value: _categoricalString, label: "Categorical String" },
  { value: _numerical, label: "Numerical" },
  { value: _codedConcept, label: "Coded Concept" },
  { value: _codedNumerical, label: "Coded Numerical" },
];

export const resourceTypeList = [
  "Account",
  "ActivityDefinition",
  "ActorDefinition",
  "AdministrableProductDefinition",
  "AdverseEvent",
  "AllergyIntolerance",
  "Appointment",
  "AppointmentResponse",
  "ArtifactAssessment",
  "AuditEvent",
  "Basic",
  "Binary",
  "BiologicallyDerivedProduct",
  "BiologicallyDerivedProductDispense",
  "BodyStructure",
  "Bundle",
  "CapabilityStatement",
  "CarePlan",
  "CareTeam",
  "ChargeItem",
  "ChargeItemDefinition",
  "Citation",
  "Claim",
  "ClaimResponse",
  "ClinicalImpression",
  "ClinicalUseDefinition",
  "CodeSystem",
  "Communication",
  "CommunicationRequest",
  "CompartmentDefinition",
  "Composition",
  "ConceptMap",
  "Condition",
  "ConditionDefinition",
  "Consent",
  "Contract",
  "Coverage",
  "CoverageEligibilityRequest",
  "CoverageEligibilityResponse",
  "DetectedIssue",
  "Device",
  "DeviceAssociation",
  "DeviceDefinition",
  "DeviceDispense",
  "DeviceMetric",
  "DeviceRequest",
  "DeviceUsage",
  "DiagnosticReport",
  "DocumentReference",
  "Encounter",
  "EncounterHistory",
  "Endpoint",
  "EnrollmentRequest",
  "EnrollmentResponse",
  "EpisodeOfCare",
  "EventDefinition",
  "Evidence",
  "EvidenceReport",
  "EvidenceVariable",
  "ExampleScenario",
  "ExplanationOfBenefit",
  "FamilyMemberHistory",
  "Flag",
  "FormularyItem",
  "GenomicStudy",
  "Goal",
  "GraphDefinition",
  "Group",
  "GuidanceResponse",
  "HealthcareService",
  "ImagingSelection",
  "ImagingStudy",
  "Immunization",
  "ImmunizationEvaluation",
  "ImmunizationRecommendation",
  "ImplementationGuide",
  "Ingredient",
  "InsurancePlan",
  "InventoryItem",
  "InventoryReport",
  "Invoice",
  "Library",
  "Linkage",
  "List",
  "Location",
  "ManufacturedItemDefinition",
  "Measure",
  "MeasureReport",
  "Medication",
  "MedicationAdministration",
  "MedicationDispense",
  "MedicationKnowledge",
  "MedicationRequest",
  "MedicationStatement",
  "MedicinalProductDefinition",
  "MessageDefinition",
  "MessageHeader",
  "MolecularSequence",
  "NamingSystem",
  "NutritionIntake",
  "NutritionOrder",
  "NutritionProduct",
  "Observation",
  "ObservationDefinition",
  "OperationDefinition",
  "OperationOutcome",
  "Organization",
  "OrganizationAffiliation",
  "PackagedProductDefinition",
  "Parameters",
  "Patient",
  "PaymentNotice",
  "PaymentReconciliation",
  "Permission",
  "Person",
  "PlanDefinition",
  "Practitioner",
  "PractitionerRole",
  "Procedure",
  "Provenance",
  "Questionnaire",
  "QuestionnaireResponse",
  "RegulatedAuthorization",
  "RelatedPerson",
  "RequestOrchestration",
  "Requirements",
  "ResearchStudy",
  "ResearchSubject",
  "RiskAssessment",
  "Schedule",
  "SearchParameter",
  "ServiceRequest",
  "Slot",
  "Specimen",
  "SpecimenDefinition",
  "StructureDefinition",
  "StructureMap",
  "Subscription",
  "SubscriptionStatus",
  "SubscriptionTopic",
  "Substance",
  "SubstanceDefinition",
  "SubstanceNucleicAcid",
  "SubstancePolymer",
  "SubstanceProtein",
  "SubstanceReferenceInformation",
  "SubstanceSourceMaterial",
  "SupplyDelivery",
  "SupplyRequest",
  "Task",
  "TerminologyCapabilities",
  "TestPlan",
  "TestReport",
  "TestScript",
  "Transport",
  "ValueSet",
  "VerificationResult",
  "VisionPrescription",
];

export const defaultProfileTreeNode: ProfileTreeNode = {
  element: {
    path: "",
  },
  dataPath: "",
  baseId: "",
  parentDataPath: "",
  childPaths: [],
  basePath: "",
  isPrimitive: false,
  value: "",
};

export const defaultConstraintElement: ElementDefinitionConstraint = {
  human: "",
  key: "",
  severity: "error",
};

export const defaultConstraintResults: ConstraintEvaluationResult = {
  node: defaultProfileTreeNode,
  constraints: [],
};

export const defaultOrderedConstraintResults: OrderedConstraintResults = {
  errors: [],
  warnings: [],
  guidelines: [],
};

export const bundlePoolId = "Single_Resources";
export const bundlePoolName = "Single Resources";
