import {
  CategoricalStringFeature,
  CodedConceptFeature,
  CodedNumericalFeature,
  CsvExportFeature,
  NumericalFeature,
  OptionType,
} from "../types";

export const rootName = "root";
export const pathDelimiter = ".";
export const multiTypeString = "[x]";
export const sliceDelimiter = ":";

export enum Modes {
  EDIT = "edit",
  CREATE = "create",
}

export const notImportantIdSuffices = [
  "meta",
  "implicitRules",
  "language",
  "text",
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

export const resourceList = [
  "Account",
  "ActivityDefinition",
  "AdverseEvent",
  "AllergyIntolerance",
  "Appointment",
  "AppointmentResponse",
  "AuditEvent",
  "Basic",
  "Binary",
  "BiologicallyDerivedProduct",
  "BodyStructure",
  "Bundle",
  "CapabilityStatement",
  "CarePlan",
  "CareTeam",
  "CatalogEntry",
  "ChargeItem",
  "ChargeItemDefinition",
  "Claim",
  "ClaimResponse",
  "ClinicalImpression",
  "CodeSystem",
  "Communication",
  "CommunicationRequest",
  "CompartmentDefinition",
  "Composition",
  "ConceptMap",
  "Condition",
  "Consent",
  "Contract",
  "Coverage",
  "CoverageEligibilityRequest",
  "CoverageEligibilityResponse",
  "DetectedIssue",
  "Device",
  "DeviceDefinition",
  "DeviceMetric",
  "DeviceRequest",
  "DeviceUseStatement",
  "DiagnosticReport",
  "DocumentManifest",
  "DocumentReference",
  "EffectEvidenceSynthesis",
  "Encounter",
  "Endpoint",
  "EnrollmentRequest",
  "EnrollmentResponse",
  "EpisodeOfCare",
  "EventDefinition",
  "Evidence",
  "EvidenceVariable",
  "ExampleScenario",
  "ExplanationOfBenefit",
  "FamilyMemberHistory",
  "Flag",
  "Goal",
  "GraphDefinition",
  "Group",
  "GuidanceResponse",
  "HealthcareService",
  "ImagingStudy",
  "Immunization",
  "ImmunizationEvaluation",
  "ImmunizationRecommendation",
  "ImplementationGuide",
  "InsurancePlan",
  "Invoice",
  "Library",
  "Linkage",
  "List",
  "Location",
  "Measure",
  "MeasureReport",
  "Media",
  "Medication",
  "MedicationAdministration",
  "MedicationDispense",
  "MedicationKnowledge",
  "MedicationRequest",
  "MedicationStatement",
  "MedicinalProduct",
  "MedicinalProductAuthorization",
  "MedicinalProductContraindication",
  "MedicinalProductIndication",
  "MedicinalProductIngredient",
  "MedicinalProductInteraction",
  "MedicinalProductManufactured",
  "MedicinalProductPackaged",
  "MedicinalProductPharmaceutical",
  "MedicinalProductUndesirableEffect",
  "MessageDefinition",
  "MessageHeader",
  "MolecularSequence",
  "NamingSystem",
  "NutritionOrder",
  "Observation",
  "ObservationDefinition",
  "OperationDefinition",
  "OperationOutcome",
  "Organization",
  "OrganizationAffiliation",
  "Parameters",
  "Patient",
  "PaymentNotice",
  "PaymentReconciliation",
  "Person",
  "PlanDefinition",
  "Practitioner",
  "PractitionerRole",
  "Procedure",
  "Provenance",
  "Questionnaire",
  "QuestionnaireResponse",
  "RelatedPerson",
  "RequestGroup",
  "ResearchDefinition",
  "ResearchElementDefinition",
  "ResearchStudy",
  "ResearchSubject",
  "RiskAssessment",
  "RiskEvidenceSynthesis",
  "Schedule",
  "SearchParameter",
  "ServiceRequest",
  "Slot",
  "Specimen",
  "SpecimenDefinition",
  "StructureDefinition",
  "StructureMap",
  "Subscription",
  "Substance",
  "SubstanceNucleicAcid",
  "SubstancePolymer",
  "SubstanceProtein",
  "SubstanceReferenceInformation",
  "SubstanceSourceMaterial",
  "SubstanceSpecification",
  "SupplyDelivery",
  "SupplyRequest",
  "Task",
  "TerminologyCapabilities",
  "TestReport",
  "TestScript",
  "ValueSet",
  "VerificationResult",
  "VisionPrescription",
];

export const resourceOptions: OptionType[] = [
  { value: "Account", label: "Account" },
  { value: "ActivityDefinition", label: "ActivityDefinition" },
  { value: "AdverseEvent", label: "AdverseEvent" },
  { value: "AllergyIntolerance", label: "AllergyIntolerance" },
  { value: "Appointment", label: "Appointment" },
  { value: "AppointmentResponse", label: "AppointmentResponse" },
  { value: "AuditEvent", label: "AuditEvent" },
  { value: "Basic", label: "Basic" },
  { value: "Binary", label: "Binary" },
  { value: "BiologicallyDerivedProduct", label: "BiologicallyDerivedProduct" },
  { value: "BodyStructure", label: "BodyStructure" },
  { value: "Bundle", label: "Bundle" },
  { value: "CapabilityStatement", label: "CapabilityStatement" },
  { value: "CarePlan", label: "CarePlan" },
  { value: "CareTeam", label: "CareTeam" },
  { value: "CatalogEntry", label: "CatalogEntry" },
  { value: "ChargeItem", label: "ChargeItem" },
  { value: "ChargeItemDefinition", label: "ChargeItemDefinition" },
  { value: "Claim", label: "Claim" },
  { value: "ClaimResponse", label: "ClaimResponse" },
  { value: "ClinicalImpression", label: "ClinicalImpression" },
  { value: "CodeSystem", label: "CodeSystem" },
  { value: "Communication", label: "Communication" },
  { value: "CommunicationRequest", label: "CommunicationRequest" },
  { value: "CompartmentDefinition", label: "CompartmentDefinition" },
  { value: "Composition", label: "Composition" },
  { value: "ConceptMap", label: "ConceptMap" },
  { value: "Condition", label: "Condition" },
  { value: "Consent", label: "Consent" },
  { value: "Contract", label: "Contract" },
  { value: "Coverage", label: "Coverage" },
  { value: "CoverageEligibilityRequest", label: "CoverageEligibilityRequest" },
  {
    value: "CoverageEligibilityResponse",
    label: "CoverageEligibilityResponse",
  },
  { value: "DetectedIssue", label: "DetectedIssue" },
  { value: "Device", label: "Device" },
  { value: "DeviceDefinition", label: "DeviceDefinition" },
  { value: "DeviceMetric", label: "DeviceMetric" },
  { value: "DeviceRequest", label: "DeviceRequest" },
  { value: "DeviceUseStatement", label: "DeviceUseStatement" },
  { value: "DiagnosticReport", label: "DiagnosticReport" },
  { value: "DocumentManifest", label: "DocumentManifest" },
  { value: "DocumentReference", label: "DocumentReference" },
  { value: "EffectEvidenceSynthesis", label: "EffectEvidenceSynthesis" },
  { value: "Encounter", label: "Encounter" },
  { value: "Endpoint", label: "Endpoint" },
  { value: "EnrollmentRequest", label: "EnrollmentRequest" },
  { value: "EnrollmentResponse", label: "EnrollmentResponse" },
  { value: "EpisodeOfCare", label: "EpisodeOfCare" },
  { value: "EventDefinition", label: "EventDefinition" },
  { value: "Evidence", label: "Evidence" },
  { value: "EvidenceVariable", label: "EvidenceVariable" },
  { value: "ExampleScenario", label: "ExampleScenario" },
  { value: "ExplanationOfBenefit", label: "ExplanationOfBenefit" },
  { value: "FamilyMemberHistory", label: "FamilyMemberHistory" },
  { value: "Flag", label: "Flag" },
  { value: "Goal", label: "Goal" },
  { value: "GraphDefinition", label: "GraphDefinition" },
  { value: "Group", label: "Group" },
  { value: "GuidanceResponse", label: "GuidanceResponse" },
  { value: "HealthcareService", label: "HealthcareService" },
  { value: "ImagingStudy", label: "ImagingStudy" },
  { value: "Immunization", label: "Immunization" },
  { value: "ImmunizationEvaluation", label: "ImmunizationEvaluation" },
  { value: "ImmunizationRecommendation", label: "ImmunizationRecommendation" },
  { value: "ImplementationGuide", label: "ImplementationGuide" },
  { value: "InsurancePlan", label: "InsurancePlan" },
  { value: "Invoice", label: "Invoice" },
  { value: "Library", label: "Library" },
  { value: "Linkage", label: "Linkage" },
  { value: "List", label: "List" },
  { value: "Location", label: "Location" },
  { value: "Measure", label: "Measure" },
  { value: "MeasureReport", label: "MeasureReport" },
  { value: "Media", label: "Media" },
  { value: "Medication", label: "Medication" },
  { value: "MedicationAdministration", label: "MedicationAdministration" },
  { value: "MedicationDispense", label: "MedicationDispense" },
  { value: "MedicationKnowledge", label: "MedicationKnowledge" },
  { value: "MedicationRequest", label: "MedicationRequest" },
  { value: "MedicationStatement", label: "MedicationStatement" },
  { value: "MedicinalProduct", label: "MedicinalProduct" },
  {
    value: "MedicinalProductAuthorization",
    label: "MedicinalProductAuthorization",
  },
  {
    value: "MedicinalProductContraindication",
    label: "MedicinalProductContraindication",
  },
  { value: "MedicinalProductIndication", label: "MedicinalProductIndication" },
  { value: "MedicinalProductIngredient", label: "MedicinalProductIngredient" },
  {
    value: "MedicinalProductInteraction",
    label: "MedicinalProductInteraction",
  },
  {
    value: "MedicinalProductManufactured",
    label: "MedicinalProductManufactured",
  },
  { value: "MedicinalProductPackaged", label: "MedicinalProductPackaged" },
  {
    value: "MedicinalProductPharmaceutical",
    label: "MedicinalProductPharmaceutical",
  },
  {
    value: "MedicinalProductUndesirableEffect",
    label: "MedicinalProductUndesirableEffect",
  },
  { value: "MessageDefinition", label: "MessageDefinition" },
  { value: "MessageHeader", label: "MessageHeader" },
  { value: "MolecularSequence", label: "MolecularSequence" },
  { value: "NamingSystem", label: "NamingSystem" },
  { value: "NutritionOrder", label: "NutritionOrder" },
  { value: "Observation", label: "Observation" },
  { value: "ObservationDefinition", label: "ObservationDefinition" },
  { value: "OperationDefinition", label: "OperationDefinition" },
  { value: "OperationOutcome", label: "OperationOutcome" },
  { value: "Organization", label: "Organization" },
  { value: "OrganizationAffiliation", label: "OrganizationAffiliation" },
  { value: "Parameters", label: "Parameters" },
  { value: "Patient", label: "Patient" },
  { value: "PaymentNotice", label: "PaymentNotice" },
  { value: "PaymentReconciliation", label: "PaymentReconciliation" },
  { value: "Person", label: "Person" },
  { value: "PlanDefinition", label: "PlanDefinition" },
  { value: "Practitioner", label: "Practitioner" },
  { value: "PractitionerRole", label: "PractitionerRole" },
  { value: "Procedure", label: "Procedure" },
  { value: "Provenance", label: "Provenance" },
  { value: "Questionnaire", label: "Questionnaire" },
  { value: "QuestionnaireResponse", label: "QuestionnaireResponse" },
  { value: "RelatedPerson", label: "RelatedPerson" },
  { value: "RequestGroup", label: "RequestGroup" },
  { value: "ResearchDefinition", label: "ResearchDefinition" },
  { value: "ResearchElementDefinition", label: "ResearchElementDefinition" },
  { value: "ResearchStudy", label: "ResearchStudy" },
  { value: "ResearchSubject", label: "ResearchSubject" },
  { value: "RiskAssessment", label: "RiskAssessment" },
  { value: "RiskEvidenceSynthesis", label: "RiskEvidenceSynthesis" },
  { value: "Schedule", label: "Schedule" },
  { value: "SearchParameter", label: "SearchParameter" },
  { value: "ServiceRequest", label: "ServiceRequest" },
  { value: "Slot", label: "Slot" },
  { value: "Specimen", label: "Specimen" },
  { value: "SpecimenDefinition", label: "SpecimenDefinition" },
  { value: "StructureDefinition", label: "StructureDefinition" },
  { value: "StructureMap", label: "StructureMap" },
  { value: "Subscription", label: "Subscription" },
  { value: "Substance", label: "Substance" },
  { value: "SubstanceNucleicAcid", label: "SubstanceNucleicAcid" },
  { value: "SubstancePolymer", label: "SubstancePolymer" },
  { value: "SubstanceProtein", label: "SubstanceProtein" },
  {
    value: "SubstanceReferenceInformation",
    label: "SubstanceReferenceInformation",
  },
  { value: "SubstanceSourceMaterial", label: "SubstanceSourceMaterial" },
  { value: "SubstanceSpecification", label: "SubstanceSpecification" },
  { value: "SupplyDelivery", label: "SupplyDelivery" },
  { value: "SupplyRequest", label: "SupplyRequest" },
  { value: "Task", label: "Task" },
  { value: "TerminologyCapabilities", label: "TerminologyCapabilities" },
  { value: "TestReport", label: "TestReport" },
  { value: "TestScript", label: "TestScript" },
  { value: "ValueSet", label: "ValueSet" },
  { value: "VerificationResult", label: "VerificationResult" },
  { value: "VisionPrescription", label: "VisionPrescription" },
];
