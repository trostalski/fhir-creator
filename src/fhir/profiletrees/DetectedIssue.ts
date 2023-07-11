const data = [
  {
    element: {
      id: "DetectedIssue.meta",
      path: "DetectedIssue.meta",
      short: "Metadata about the resource",
      definition:
        "The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
      min: 0,
      max: "1",
      base: { path: "Resource.meta", min: 0, max: "1" },
      type: [{ code: "Meta" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.meta",
    parentDataPath: "root",
    basePath: "root.meta",
    baseId: "DetectedIssue.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "DetectedIssue.implicitRules",
      path: "DetectedIssue.implicitRules",
      short: "A set of rules under which this content was created",
      definition:
        "A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.",
      comment:
        "Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.",
      min: 0,
      max: "1",
      base: { path: "Resource.implicitRules", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: true,
      isModifierReason:
        "This element is labeled as a modifier because the implicit rules may provide additional knowledge about the resource that modifies it's meaning or interpretation",
      isSummary: true,
    },
    dataPath: "root.implicitRules",
    parentDataPath: "root",
    basePath: "root.implicitRules",
    baseId: "DetectedIssue.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "DetectedIssue.language",
      path: "DetectedIssue.language",
      short: "Language of the resource content",
      definition: "The base language in which the resource is written.",
      comment:
        "Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).",
      min: 0,
      max: "1",
      base: { path: "Resource.language", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet",
            valueCanonical: "http://hl7.org/fhir/ValueSet/all-languages",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "Language",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "preferred",
        description: "IETF language tag",
        valueSet: "http://hl7.org/fhir/ValueSet/languages",
      },
    },
    dataPath: "root.language",
    parentDataPath: "root",
    basePath: "root.language",
    baseId: "DetectedIssue.language",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      { code: "ar", display: "Arabic" },
      { code: "bn", display: "Bengali" },
      { code: "cs", display: "Czech" },
      { code: "da", display: "Danish" },
      { code: "de", display: "German" },
      { code: "de-AT", display: "German (Austria)" },
      { code: "de-CH", display: "German (Switzerland)" },
      { code: "de-DE", display: "German (Germany)" },
      { code: "el", display: "Greek" },
      { code: "en", display: "English" },
      { code: "en-AU", display: "English (Australia)" },
      { code: "en-CA", display: "English (Canada)" },
      { code: "en-GB", display: "English (Great Britain)" },
      { code: "en-IN", display: "English (India)" },
      { code: "en-NZ", display: "English (New Zeland)" },
      { code: "en-SG", display: "English (Singapore)" },
      { code: "en-US", display: "English (United States)" },
      { code: "es", display: "Spanish" },
      { code: "es-AR", display: "Spanish (Argentina)" },
      { code: "es-ES", display: "Spanish (Spain)" },
      { code: "es-UY", display: "Spanish (Uruguay)" },
      { code: "fi", display: "Finnish" },
      { code: "fr", display: "French" },
      { code: "fr-BE", display: "French (Belgium)" },
      { code: "fr-CH", display: "French (Switzerland)" },
      { code: "fr-FR", display: "French (France)" },
      { code: "fy", display: "Frysian" },
      { code: "fy-NL", display: "Frysian (Netherlands)" },
      { code: "hi", display: "Hindi" },
      { code: "hr", display: "Croatian" },
      { code: "it", display: "Italian" },
      { code: "it-CH", display: "Italian (Switzerland)" },
      { code: "it-IT", display: "Italian (Italy)" },
      { code: "ja", display: "Japanese" },
      { code: "ko", display: "Korean" },
      { code: "nl", display: "Dutch" },
      { code: "nl-BE", display: "Dutch (Belgium)" },
      { code: "nl-NL", display: "Dutch (Netherlands)" },
      { code: "no", display: "Norwegian" },
      { code: "no-NO", display: "Norwegian (Norway)" },
      { code: "pa", display: "Punjabi" },
      { code: "pl", display: "Polish" },
      { code: "pt", display: "Portuguese" },
      { code: "pt-BR", display: "Portuguese (Brazil)" },
      { code: "ru", display: "Russian" },
      { code: "ru-RU", display: "Russian (Russia)" },
      { code: "sr", display: "Serbian" },
      { code: "sr-RS", display: "Serbian (Serbia)" },
      { code: "sv", display: "Swedish" },
      { code: "sv-SE", display: "Swedish (Sweden)" },
      { code: "te", display: "Telegu" },
      { code: "zh", display: "Chinese" },
      { code: "zh-CN", display: "Chinese (China)" },
      { code: "zh-HK", display: "Chinese (Hong Kong)" },
      { code: "zh-SG", display: "Chinese (Singapore)" },
      { code: "zh-TW", display: "Chinese (Taiwan)" },
    ],
  },
  {
    element: {
      id: "DetectedIssue.contained",
      path: "DetectedIssue.contained",
      short: "Contained, inline Resources",
      definition:
        "These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.",
      comment:
        "This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.",
      alias: ["inline resources", "anonymous resources", "contained resources"],
      min: 0,
      max: "*",
      base: { path: "DomainResource.contained", min: 0, max: "*" },
      type: [{ code: "Resource" }],
      constraint: [
        {
          key: "dom-r4b",
          severity: "warning",
          human:
            "Containing new R4B resources within R4 resources may cause interoperability issues if instances are shared with R4 systems",
          expression:
            "($this is Citation or $this is Evidence or $this is EvidenceReport or $this is EvidenceVariable or $this is MedicinalProductDefinition or $this is PackagedProductDefinition or $this is AdministrableProductDefinition or $this is Ingredient or $this is ClinicalUseDefinition or $this is RegulatedAuthorization or $this is SubstanceDefinition or $this is SubscriptionStatus or $this is SubscriptionTopic) implies (%resource is Citation or %resource is Evidence or %resource is EvidenceReport or %resource is EvidenceVariable or %resource is MedicinalProductDefinition or %resource is PackagedProductDefinition or %resource is AdministrableProductDefinition or %resource is Ingredient or %resource is ClinicalUseDefinition or %resource is RegulatedAuthorization or %resource is SubstanceDefinition or %resource is SubscriptionStatus or %resource is SubscriptionTopic)",
          xpath:
            "not(f:Citation|f:Evidence|f:EvidenceReport|f:EvidenceVariable|f:MedicinalProductDefinition|f:PackagedProductDefinition|f:AdministrableProductDefinition|f:Ingredient|f:ClinicalUseDefinition|f:RegulatedAuthorization|f:SubstanceDefinition|f:SubscriptionStatus|f:SubscriptionTopic) or not(parent::f:Citation|parent::f:Evidence|parent::f:EvidenceReport|parent::f:EvidenceVariable|parent::f:MedicinalProductDefinition|parent::f:PackagedProductDefinition|parent::f:AdministrableProductDefinition|parent::f:Ingredient|parent::f:ClinicalUseDefinition|parent::f:RegulatedAuthorization|parent::f:SubstanceDefinition|f:SubscriptionStatus|f:SubscriptionTopic)",
          source: "http://hl7.org/fhir/StructureDefinition/DetectedIssue",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.contained[0]",
    parentDataPath: "root",
    basePath: "root.contained",
    baseId: "DetectedIssue.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "DetectedIssue.status",
      path: "DetectedIssue.status",
      short: "registered | preliminary | final | amended +",
      definition: "Indicates the status of the detected issue.",
      comment:
        "This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.",
      alias: ["status"],
      min: 1,
      max: "1",
      base: { path: "DetectedIssue.status", min: 1, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: true,
      isModifierReason:
        "This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DetectedIssueStatus",
          },
        ],
        strength: "required",
        description: "Indicates the status of the identified issue.",
        valueSet: "http://hl7.org/fhir/ValueSet/observation-status|4.3.0",
      },
      mapping: [
        { identity: "workflow", map: "Event.status" },
        { identity: "w5", map: "FiveWs.status" },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "DetectedIssue.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "registered",
        display: "Registered",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "preliminary",
        display: "Preliminary",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "final",
        display: "Final",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "amended",
        display: "Amended",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "corrected",
        display: "Corrected",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "cancelled",
        display: "Cancelled",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "entered-in-error",
        display: "Entered in Error",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "unknown",
        display: "Unknown",
      },
    ],
  },
  {
    element: {
      id: "DetectedIssue.code",
      path: "DetectedIssue.code",
      short: "Issue Category, e.g. drug-drug, duplicate therapy, etc.",
      definition: "Identifies the general type of issue identified.",
      alias: ["type"],
      min: 0,
      max: "1",
      base: { path: "DetectedIssue.code", min: 0, max: "1" },
      type: [{ code: "CodeableConcept" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DetectedIssueCategory",
          },
        ],
        strength: "preferred",
        description:
          "Codes identifying the general type of detected issue; e.g. Drug-drug interaction, Timing issue, Duplicate therapy, etc.",
        valueSet: "http://hl7.org/fhir/ValueSet/detectedissue-category",
      },
      mapping: [
        { identity: "workflow", map: "Event.code" },
        { identity: "w5", map: "FiveWs.class" },
        { identity: "v2", map: "AL1-2 / IAM-9" },
        { identity: "rim", map: ".code" },
      ],
    },
    dataPath: "root.code",
    parentDataPath: "root",
    basePath: "root.code",
    baseId: "DetectedIssue.code",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAccountCode",
        display: "ActAccountCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationCode",
        display: "ActAdjudicationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationResultActionCode",
        display: "ActAdjudicationResultActionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillableModifierCode",
        display: "ActBillableModifierCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillingArrangementCode",
        display: "ActBillingArrangementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBoundedROICode",
        display: "ActBoundedROICode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCareProvisionCode",
        display: "act care provision",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActClaimAttachmentCategoryCode",
        display: "ActClaimAttachmentCategoryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActConsentType",
        display: "ActConsentType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActContainerRegistrationCode",
        display: "ActContainerRegistrationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActControlVariable",
        display: "ActControlVariable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageConfirmationCode",
        display: "ActCoverageConfirmationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageLimitCode",
        display: "ActCoverageLimitCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageTypeCode",
        display: "ActCoverageTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActDetectedIssueManagementCode",
        display: "ActDetectedIssueManagementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActExposureCode",
        display: "ActExposureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActFinancialTransactionCode",
        display: "ActFinancialTransactionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActIncidentCode",
        display: "ActIncidentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationAccessCode",
        display: "ActInformationAccessCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationAccessContextCode",
        display: "ActInformationAccessContextCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationCategoryCode",
        display: "ActInformationCategoryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceElementCode",
        display: "ActInvoiceElementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceElementSummaryCode",
        display: "ActInvoiceElementSummaryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceOverrideCode",
        display: "ActInvoiceOverrideCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActListCode",
        display: "ActListCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMonitoringProtocolCode",
        display: "ActMonitoringProtocolCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActNonObservationIndicationCode",
        display: "ActNonObservationIndicationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActObservationVerificationType",
        display: "act observation verification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPaymentCode",
        display: "ActPaymentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPharmacySupplyType",
        display: "ActPharmacySupplyType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPolicyType",
        display: "ActPolicyType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProductAcquisitionCode",
        display: "ActProductAcquisitionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSpecimenTransportCode",
        display: "ActSpecimenTransportCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSpecimenTreatmentCode",
        display: "ActSpecimenTreatmentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSubstanceAdministrationCode",
        display: "ActSubstanceAdministrationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActTaskCode",
        display: "ActTaskCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActTransportationModeCode",
        display: "ActTransportationModeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationType",
        display: "ObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ROIOverlayShape",
        display: "ROIOverlayShape",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "C",
        display: "corrected",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIET",
        display: "Diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUGPRG",
        display: "drug program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "F",
        display: "final",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRLMN",
        display: "preliminary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECOBS",
        display: "SecurityObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSIDFFS",
        display: "subsidized fee for service program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WRKCOMP",
        display: "(workers compensation program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationInformationCode",
        display: "ActAdjudicationInformationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillableTreatmentPlanCode",
        display: "ActBillableTreatmentPlanCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCognitiveProfessionalServiceCode",
        display: "ActCognitiveProfessionalServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActIdentityDocumentCode",
        display: "ActIdentityDocumentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActOrderCode",
        display: "ActOrderCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivilegeCategorization",
        display: "ActPrivilegeCategorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProcedureCode",
        display: "ActProcedureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActRegistryCode",
        display: "ActRegistryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSecurityObjectCode",
        display: "ActSecurityObjectCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AdvanceBeneficiaryNoticeType",
        display: "AdvanceBeneficiaryNoticeType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CPT4",
        display: "CPT4",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ExternallyDefinedActCodes",
        display: "ExternallyDefinedActCodes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HL7DefinedActCodes",
        display: "HL7DefinedActCodes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_IndividualCaseSafetyReportCriteria",
        display: "IndividualCaseSafetyReportCriteria",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_IndividualCaseSafetyReportProductCharacteristic",
        display: "IndividualCaseSafetyReportProductCharacteristic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationActAgeGroupType",
        display: "ObservationActAgeGroupType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPAY",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEDUCT",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEIND",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRA",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STORE",
        display: "Storage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACCTRECEIVABLE",
        display: "account receivable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CASH",
        display: "Cash",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CC",
        display: "credit card",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PBILLACCT",
        display: "patient billing account",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CreditCard",
        display: "CreditCard",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationGroupCode",
        display: "ActAdjudicationGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AA",
        display: "adjudicated with adjustments",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AR",
        display: "adjudicated as refused",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AS",
        display: "adjudicated as submitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONT",
        display: "contract",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DAY",
        display: "day",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LOC",
        display: "location",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MONTH",
        display: "month",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERIOD",
        display: "period",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROV",
        display: "provider",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WEEK",
        display: "week",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "YEAR",
        display: "year",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISPLAY",
        display: "Display",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FORM",
        display: "Print on Form",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NAT",
        display: "Insufficient authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUPPRESSED",
        display: "record suppressed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VALIDAT",
        display: "validation issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeAuthorizationDetectedIssueCode",
        display: "ActAdministrativeAuthorizationDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeRuleDetectedIssueCode",
        display: "ActAdministrativeRuleDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AuthorizationIssueManagementCode",
        display: "Authorization Issue Management Code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY204",
        display: "Unknown key identifier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY205",
        display: "Duplicate key identifier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY206",
        display: "non-matching identification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSOLETE",
        display: "obsolete record returned",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPTM",
        display: "CPT modifier codes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HCPCSA",
        display: "HCPCS Level II and Carrier-assigned",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMedicalBillableServiceCode",
        display: "ActMedicalBillableServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActNonMedicalBillableServiceCode",
        display: "ActNonMedicalBillableServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BLK",
        display: "block funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAP",
        display: "capitation funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONTF",
        display: "contract funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FINBILL",
        display: "financial",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ROST",
        display: "roster funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SESS",
        display: "sessional funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFS",
        display: "fee for service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ROIFS",
        display: "fully specified ROI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ROIPS",
        display: "partially specified ROI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCredentialedCareCode",
        display: "act credentialed care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActEncounterCode",
        display: "ActEncounterCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMedicalServiceCode",
        display: "ActMedicalServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTOATTCH",
        display: "auto attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOCUMENT",
        display: "document",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HEALTHREC",
        display: "health record",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMG",
        display: "image attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABRESULTS",
        display: "lab results",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MODEL",
        display: "model",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WIATTCH",
        display: "work injury report attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "XRAY",
        display: "x-ray",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActDecision",
        display: "_ActDecision",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivacyConsentDirective",
        display: "_ActPrivacyConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMRGONLY",
        display: "emergency only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GRANTORCHOICE",
        display: "grantor choice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMPLIED",
        display: "implied consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMPLIEDD",
        display: "implied consent with opportunity to dissent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOCONSENT",
        display: "no consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPP",
        display: "notice of privacy practices",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTIN",
        display: "opt-in",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTINR",
        display: "opt-in with restrictions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTOUT",
        display: "op-out",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTOUTE",
        display: "opt-out with exceptions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ICOL",
        display: "information collection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IDSCL",
        display: "information disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFA",
        display: "information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IRDSCL",
        display: "information redisclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RESEARCH",
        display: "research information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ID",
        display: "Identified",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IP",
        display: "In Position",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "L",
        display: "Left Equipment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "M",
        display: "Missing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "O",
        display: "In Process",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "R",
        display: "Process Completed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "X",
        display: "Container Unavailable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTO",
        display: "auto-repeat permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENDC",
        display: "endogenous content",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REFLEX",
        display: "reflex permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGControlVariable",
        display: "ECGControlVariable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTH",
        display: "Authorized",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NAUTH",
        display: "Not Authorized",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageAuthorizationConfirmationCode",
        display: "ActCoverageAuthorizationConfirmationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageEligibilityConfirmationCode",
        display: "ActCoverageEligibilityConfirmationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ELG",
        display: "Eligible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NELG",
        display: "Not Eligible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageQuantityLimitCode",
        display: "ActCoverageQuantityLimitCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVMX",
        display: "coverage maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoveredPartyLimitCode",
        display: "ActCoveredPartyLimitCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVPRD",
        display: "coverage period",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LFEMX",
        display: "life time maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NETAMT",
        display: "Net Amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRDMX",
        display: "period maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNITPRICE",
        display: "Unit Price",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNITQTY",
        display: "Unit Quantity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInsurancePolicyCode",
        display: "ActInsurancePolicyCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInsuranceTypeCode",
        display: "ActInsuranceTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProgramTypeCode",
        display: "ActProgramTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoveragePartyLimitGroupCode",
        display: "ActCoveragePartyLimitGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCredentialedCareProvisionPersonCode",
        display: "act credentialed care provision peron",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCredentialedCareProvisionProgramCode",
        display: "act credentialed care provision program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CACC",
        display: "certified anatomic pathology and clinical pathology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAIC",
        display: "certified allergy and immunology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAMC",
        display: "certified aerospace medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CANC",
        display: "certified anesthesiology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAPC",
        display: "certified anatomic pathology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CBGC",
        display: "certified clinical biochemical genetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCCC",
        display: "certified clinical cytogenetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCGC",
        display: "certified clinical genetics (M.D.) care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCPC",
        display: "certified clinical pathology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCSC",
        display: "certified colon and rectal surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDEC",
        display: "certified dermatology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDRC",
        display: "certified diagnostic radiology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CEMC",
        display: "certified emergency medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CFPC",
        display: "certified family practice care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CIMC",
        display: "certified internal medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMGC",
        display: "certified clinical molecular genetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNEC",
        display: "certified neurology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNMC",
        display: "certified nuclear medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNQC",
        display:
          "certified neurology with special qualifications in child neurology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNSC",
        display: "certified neurological surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COGC",
        display: "certified obstetrics and gynecology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COMC",
        display: "certified occupational medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPC",
        display: "certified ophthalmology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COSC",
        display: "certified orthopaedic surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COTC",
        display: "certified otolaryngology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPEC",
        display: "certified pediatrics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPGC",
        display: "certified Ph.D. medical genetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPHC",
        display: "certified public health and general preventive medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPRC",
        display: "certified physical medicine and rehabilitation care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPSC",
        display: "certified plastic surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPYC",
        display: "certified psychiatry care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CROC",
        display: "certified radiation oncology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRPC",
        display: "certified radiological physics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSUC",
        display: "certified surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTSC",
        display: "certified thoracic surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CURC",
        display: "certified urology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CVSC",
        display: "certified vascular surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LGPC",
        display: "licensed general physician care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AALC",
        display: "accredited assisted living care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AAMC",
        display: "accredited ambulatory care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ABHC",
        display: "accredited behavioral health care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACAC",
        display: "accredited critical access hospital care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACHC",
        display: "accredited hospital care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AHOC",
        display: "accredited home care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALTC",
        display: "accredited long term care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AOSC",
        display: "accredited office-based surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CACS",
        display: "certified acute coronary syndrome care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAMI",
        display: "certified acute myocardial infarction care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAST",
        display: "certified asthma care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CBAR",
        display: "certified bariatric surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCAD",
        display: "certified coronary artery disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCAR",
        display: "certified cardiac care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDEP",
        display: "certified depression care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDGD",
        display: "certified digestive/gastrointestinal disorders care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDIA",
        display: "certified diabetes care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CEPI",
        display: "certified epilepsy care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CFEL",
        display: "certified frail elderly care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHFC",
        display: "certified heart failure care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHRO",
        display: "certified high risk obstetrics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHYP",
        display: "certified hyperlipidemia care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMIH",
        display: "certified migraine headache care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMSC",
        display: "certified multiple sclerosis care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COJR",
        display: "certified orthopedic joint replacement care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONC",
        display: "certified oncology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPD",
        display: "certified chronic obstructive pulmonary disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CORT",
        display: "certified organ transplant care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPAD",
        display: "certified parkinsons disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPND",
        display: "certified pneumonia disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPST",
        display: "certified primary stroke center care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSDM",
        display: "certified stroke disease management care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSIC",
        display: "certified sickle cell care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSLD",
        display: "certified sleep disorders care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSPT",
        display: "certified spine treatment care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTBU",
        display: "certified trauma/burn center care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CVDC",
        display: "certified vascular diseases care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CWMA",
        display: "certified wound management care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CWOH",
        display: "certified women's health care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeDetectedIssueManagementCode",
        display: "ActAdministrativeDetectedIssueManagementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "1",
        display: "Therapy Appropriate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "14",
        display: "Supply Appropriate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "8",
        display: "Other Action Taken",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActFinancialDetectedIssueManagementCode",
        display: "ActFinancialDetectedIssueManagementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HL7AccommodationCode",
        display: "HL7AccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HCPCSAccommodationCode",
        display: "HCPCSAccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
        display: "ambulatory",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMER",
        display: "emergency",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FLD",
        display: "field",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HH",
        display: "home health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMP",
        display: "inpatient encounter",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSENC",
        display: "observation encounter",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRENC",
        display: "pre-admission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SS",
        display: "short stay",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VR",
        display: "virtual",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHLDCARE",
        display: "Day care - Child care Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONVEYNC",
        display: "Common Conveyance Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HLTHCARE",
        display: "Health Care Interaction - Not Patient Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOMECARE",
        display: "Care Giver Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOSPPTNT",
        display: "Hospital Patient Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOSPVSTR",
        display: "Hospital Visitor Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOUSEHLD",
        display: "Household Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INMATE",
        display: "Inmate Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTIMATE",
        display: "Intimate Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LTRMCARE",
        display: "Long Term Care Facility Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLACE",
        display: "Common Space Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PTNTCARE",
        display: "Health Care Interaction - Patient Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHOOL2",
        display: "School Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SOCIAL2",
        display: "Social/Extended Family Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSTNCE",
        display: "Common Substance Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRAVINT",
        display: "Common Travel Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WORK2",
        display: "Work Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHRG",
        display: "Standard Charge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REV",
        display: "Standard Charge Reversal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDPRCD",
        display: "GDPR Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDPRResearchCD",
        display: "GDPR Research Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDPRCONSENT",
        display: "GDPR Consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OIC",
        display:
          "opt-in to personal information or effect collection in a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OIS",
        display:
          "opt-in to personal information or effect sharing via a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOC",
        display:
          "opt-out of personal information or effect collection in a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOS",
        display:
          "opt-out of personal information or effect sharing via a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENTAL",
        display: "dental care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISEASE",
        display: "disease specific policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUGPOL",
        display: "drug policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EHCPOL",
        display: "extended healthcare",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIP",
        display: "health insurance plan policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HSAPOL",
        display: "health spending account",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LTC",
        display: "long term care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MCPOL",
        display: "managed care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MENTPOL",
        display: "mental health policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "POS",
        display: "point of service policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBPOL",
        display: "substance use policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VISPOL",
        display: "vision care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MVA",
        display: "Motor vehicle accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHOOL",
        display: "School Accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPT",
        display: "Sporting Accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WPA",
        display: "Workplace accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPatientSafetyIncidentCode",
        display: "ActPatientSafetyIncidentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACADR",
        display: "adverse drug reaction access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACALL",
        display: "all access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACALLG",
        display: "allergy access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACCONS",
        display: "informational consent access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACDEMO",
        display: "demographics access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACDI",
        display: "diagnostic imaging access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACIMMUN",
        display: "immunization access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACLAB",
        display: "lab test result access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACMED",
        display: "medication access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACMEDC",
        display: "medical condition access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACMEN",
        display: "mental health access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACOBS",
        display: "common observations access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACPOLPRG",
        display: "policy or program information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACPROV",
        display: "provider information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACPSERV",
        display: "professional service access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACSUBSTAB",
        display: "substance abuse access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFAUT",
        display: "authorized information transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFCRT",
        display: "only on court order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFDNG",
        display: "only if danger to others",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFEMER",
        display: "only in an emergency",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFPWR",
        display: "only if public welfare risk",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFREG",
        display: "regulatory information transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOACCESS",
        display: "access information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOCOLLECT",
        display: "collect information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFODEIDENTIFIY",
        display: "deidentify information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFODISCLOSE",
        display: "disclose information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOMASK",
        display: "mask information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREADONLY",
        display: "read only information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREDACT",
        display: "redact information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREDISCLOSE",
        display: "redisclose information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREIDENTIFY",
        display: "reidentify information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOUSE",
        display: "use information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLCAT",
        display: "all categories",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLGCAT",
        display: "allergy category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ARCAT",
        display: "adverse drug reaction category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COBSCAT",
        display: "common observation category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEMOCAT",
        display: "demographics category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DICAT",
        display: "diagnostic image category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMUCAT",
        display: "immunization category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABCAT",
        display: "lab test category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDCCAT",
        display: "medical condition category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MENCAT",
        display: "mental health category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSVCCAT",
        display: "professional service category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXCAT",
        display: "medication category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisIP",
        display: "jurisdictional information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgIP",
        display: "organizational information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersIP",
        display: "personal information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ETH",
        display: "substance abuse information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDIS",
        display: "genetic disease information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIV",
        display: "HIV/AIDS information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MST",
        display: "military sexual trauma information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREGNANT",
        display: "pregnancy information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCA",
        display: "sickle cell anemia information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SDV",
        display:
          "sexual assault, abuse, or domestic violence information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SEX",
        display: "sexuality and reproductive health information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPI",
        display: "specially protected information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STD",
        display: "sexually transmitted disease information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TBOO",
        display: "taboo",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VIO",
        display: "violence information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IDS",
        display: "Identifier Sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SICKLE",
        display: "sickle cell",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTOPOL",
        display: "automobile",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PUBLICPOL",
        display: "public healthcare",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WCBPOL",
        display: "worker's compensation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActHealthInsuranceTypeCode",
        display: "ActHealthInsuranceTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIS",
        display: "disability insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EWB",
        display: "employee welfare benefit plan policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FLEXP",
        display: "flexible benefit plan policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LIFE",
        display: "life insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PNC",
        display: "property and casualty insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REI",
        display: "reinsurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SURPL",
        display: "surplus line insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UMBRL",
        display: "umbrella liability insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceAdjudicationPaymentGroupCode",
        display: "ActInvoiceAdjudicationPaymentGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoicePaymentCode",
        display: "ActInvoiceAdjudicationPaymentGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceAdjudicationPaymentSummaryCode",
        display: "ActInvoiceAdjudicationPaymentSummaryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALEC",
        display: "alternate electronic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BONUS",
        display: "bonus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CFWD",
        display: "carry forward adjusment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EDU",
        display: "education fees",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EPYMT",
        display: "early payment fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GARN",
        display: "garnishee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INVOICE",
        display: "submitted invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PINV",
        display: "paper invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PPRD",
        display: "prior period adjustment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROA",
        display: "professional association deduction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RECOV",
        display: "recovery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RETRO",
        display: "retro adjustment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRAN",
        display: "transaction fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INVTYPE",
        display: "invoice type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAYEE",
        display: "payee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAYOR",
        display: "payor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SENDAPP",
        display: "sending application",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNSPSC",
        display: "United Nations Standard Products and Services Classification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CPT5",
        display: "CPT5",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HCPCS",
        display: "HCPCS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ICD10PCS",
        display: "ICD10PCS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ICD9PCS",
        display: "ICD9PCS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailClinicalProductCode",
        display: "ActInvoiceDetailClinicalProductCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailDrugProductCode",
        display: "ActInvoiceDetailDrugProductCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericCode",
        display: "ActInvoiceDetailGenericCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailPreferredAccommodationCode",
        display: "ActInvoiceDetailPreferredAccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailClinicalServiceCode",
        display: "ActInvoiceDetailClinicalServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailOralHealthProcedureCode",
        display: "ActInvoiceDetailOralHealthProcedureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GTIN",
        display: "Global Trade Item Number",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UPC",
        display: "Universal Product Code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COIN",
        display: "coinsurance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPAYMENT",
        display: "patient co-pay",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEDUCTIBLE",
        display: "deductible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAY",
        display: "payment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPEND",
        display: "spend down",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COINS",
        display: "co-insurance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericAdjudicatorCode",
        display: "ActInvoiceDetailGenericAdjudicatorCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericModifierCode",
        display: "ActInvoiceDetailGenericModifierCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericProviderCode",
        display: "ActInvoiceDetailGenericProviderCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailTaxCode",
        display: "ActInvoiceDetailTaxCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AFTHRS",
        display: "non-normal hours",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ISOL",
        display: "isolation allowance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOO",
        display: "out of office",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CANCAPT",
        display: "cancelled appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DSC",
        display: "discount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ESA",
        display: "extraordinary service assessment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFSTOP",
        display: "fee for service top off",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FNLFEE",
        display: "final fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FRSTFEE",
        display: "first fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MARKUP",
        display: "markup or up-charge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MISSAPT",
        display: "missed appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERFEE",
        display: "periodic fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERMBNS",
        display: "performance bonus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RESTOCK",
        display: "restocking fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRAVEL",
        display: "travel",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "URGENT",
        display: "urgent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActEncounterAccommodationCode",
        display: "ActEncounterAccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FST",
        display: "federal sales tax",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HST",
        display: "harmonized sales Tax",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PST",
        display: "provincial/state sales tax",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceAdjudicationPaymentCode",
        display: "ActInvoiceAdjudicationPaymentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailCode",
        display: "ActInvoiceDetailCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceGroupCode",
        display: "ActInvoiceGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InvoiceElementAdjudicated",
        display: "InvoiceElementAdjudicated",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InvoiceElementPaid",
        display: "InvoiceElementPaid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InvoiceElementSubmitted",
        display: "InvoiceElementSubmitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceInterGroupCode",
        display: "ActInvoiceInterGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceRootGroupCode",
        display: "ActInvoiceRootGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPNDDRGING",
        display: "compound drug invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPNDINDING",
        display: "compound ingredient invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPNDSUPING",
        display: "compound supply invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUGING",
        display: "drug invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FRAMEING",
        display: "frame invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LENSING",
        display: "lens invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRDING",
        display: "product invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVGE",
        display: "coverage problem",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EFORM",
        display: "electronic form to follow",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FAX",
        display: "fax to follow",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GFTH",
        display: "good faith indicator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LATE",
        display: "late invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MANUAL",
        display: "manual review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOJ",
        display: "out of jurisdiction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ORTHO",
        display: "orthodontic service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAPER",
        display: "paper documentation to follow",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PIE",
        display: "public insurance exhausted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PYRDELAY",
        display: "delayed by a previous payor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REFNR",
        display: "referral not required",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REPSERV",
        display: "repeated service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNRELAT",
        display: "unrelated service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VERBAUTH",
        display: "verbal authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPINV",
        display: "clinical product invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CP",
        display: "clinical product invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSINV",
        display: "clinical service invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CS",
        display: "clinical service invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSPINV",
        display: "clinical service and product",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FININV",
        display: "financial invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OHSINV",
        display: "oral health service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAINV",
        display: "preferred accommodation invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PA",
        display: "preferred accommodation invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXCINV",
        display: "Rx compound invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXC",
        display: "Rx compound invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXDINV",
        display: "Rx dispense invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXD",
        display: "Rx dispense invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBFINV",
        display: "sessional or block fee invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VRXINV",
        display: "vision dispense invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActObservationList",
        display: "ActObservationList",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActTherapyDurationWorkingListCode",
        display: "ActTherapyDurationWorkingListCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDLIST",
        display: "medication list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProcedureCategoryList",
        display: "ActProcedureCategoryList",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALC",
        display: "Alternative Level of Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CARD",
        display: "Cardiology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHR",
        display: "Chronic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DNTL",
        display: "Dental",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRGRHB",
        display: "Drug Rehab",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GENRL",
        display: "General",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MED",
        display: "Medical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBS",
        display: "Obstetrics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ONC",
        display: "Oncology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PALL",
        display: "Palliative",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PED",
        display: "Pediatrics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PHAR",
        display: "Pharmaceutical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PHYRHB",
        display: "Physical Rehab",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSYCH",
        display: "Psychiatric",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SURG",
        display: "Surgical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACU",
        display: "short term/acute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHRON",
        display: "continuous/chronic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ONET",
        display: "one time",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRN",
        display: "as needed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTLSUB",
        display: "Controlled Substance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INV",
        display: "investigational",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LU",
        display: "limited use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OTC",
        display: "non prescription medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RX",
        display: "prescription only medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SA",
        display: "special authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SAC",
        display: "special access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND01",
        display: "imaging study requiring contrast",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND02",
        display: "colonoscopy prep",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND03",
        display: "prophylaxis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND04",
        display: "surgical prophylaxis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND05",
        display: "pregnancy prophylaxis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CARELIST",
        display: "care plan",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONDLIST",
        display: "condition list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GOALLIST",
        display: "goal list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VFPAPER",
        display: "verify paper",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VRFPAPER",
        display: "verify paper",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNDI",
        display: "diagnostic image note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNGEN",
        display: "general note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNIMM",
        display: "immunization note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNLAB",
        display: "laboratory note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNMED",
        display: "medication note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AFOOT",
        display: "pedestrian transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OnFoot",
        display: "pedestrian transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBT",
        display: "ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "Ambulance",
        display: "ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LAWENF",
        display: "law enforcement transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LawEnforcementVehicle",
        display: "law enforcement transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRVTRN",
        display: "private transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PrivateTransport",
        display: "private transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PUBTRN",
        display: "public transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PublicTransport",
        display: "public transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACH",
        display: "Automated Clearing House",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHK",
        display: "Cheque",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DDP",
        display: "Direct Deposit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NON",
        display: "Non-Payment Data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DF",
        display: "Daily Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EM",
        display: "Emergency Supply",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FF",
        display: "First Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FS",
        display: "Floor stock",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MS",
        display: "Manufacturer Sample",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RF",
        display: "Refill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UD",
        display: "Unit Dose",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UDE",
        display: "unit dose equivalent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActConsent",
        display: "_ActConsent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationActionPolicy",
        display: "_ActInformationActionPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationPolicy",
        display: "_ActInformationPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivacyPolicy",
        display: "ActPrivacyPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ActTrustPolicyType",
        display: "trust policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVPOL",
        display: "benefit policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SecurityPolicy",
        display: "security policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActGDPRConsentDirective",
        display: "_ActGDPRConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActGenericConsentDirective",
        display: "_ActGenericConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActUSPrivacyConsentDirective",
        display: "_ActUSPrivacyConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActGDPRPrivacyLaw",
        display: "General Data Protection Regulation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActUSPrivacyLaw",
        display: "_ActUSPrivacyLaw",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActConsentDirective",
        display: "ActConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivacyLaw",
        display: "ActPrivacyLaw",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InformationSensitivityPolicy",
        display: "InformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COMPT",
        display: "compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillableServiceCode",
        display: "ActBillableServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActOralHealthProcedureCode",
        display: "ActOralHealthProcedureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LOAN",
        display: "Loan",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRANSFER",
        display: "Transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHAR",
        display: "charity program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRIME",
        display: "crime victim program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EAP",
        display: "employee assistance program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GOVEMP",
        display: "government employee health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIRISK",
        display: "high risk pool program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND",
        display: "indigenous peoples health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MILITARY",
        display: "military health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RETIRE",
        display: "retiree health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SOCIAL",
        display: "social service program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VET",
        display: "veteran health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SREC",
        display: "specimen received",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SSTOR",
        display: "specimen in storage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STRAN",
        display: "specimen in transit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACID",
        display: "Acidification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALK",
        display: "Alkalization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEFB",
        display: "Defibrination",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FILT",
        display: "Filtration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LDLP",
        display: "LDL Precipitation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NEUT",
        display: "Neutralization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RECA",
        display: "Recalcification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UFIL",
        display: "Ultrafiltration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ARTBLD",
        display: "ActSpecObsArtBldCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DILUTION",
        display: "ActSpecObsDilutionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EVNFCTS",
        display: "ActSpecObsEvntfctsCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTFR",
        display: "ActSpecObsInterferenceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VOLUME",
        display: "ActSpecObsVolumeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUG",
        display: "Drug therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FD",
        display: "food",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMUNIZ",
        display: "Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AdministrationDetectedIssueCode",
        display: "AdministrationDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_SupplyDetectedIssueCode",
        display: "SupplyDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HISTORIC",
        display: "record recorded as historical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATPREF",
        display: "violates stated preferences",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OE",
        display: "order entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATDOC",
        display: "patient documentation task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATINFO",
        display: "patient information review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMedicationTherapyDurationWorkingListCode",
        display: "act medication therapy duration working list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPatientTransportationModeCode",
        display: "ActPatientTransportationModeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "42CFRPart2CD",
        display: "42 CFR Part 2 consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CompoundResearchCD",
        display:
          "Compound HIPAA Research Authorization and Informed Consent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAAuthCD",
        display: "HIPAA Authorization Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAConsentCD",
        display: "HIPAA Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAResearchAuthCD",
        display:
          "HIPAA Authorization for Disclosure for Research Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAROAD",
        display: "HIPAA Right of Access Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDHHS-5515",
        display:
          "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "42CFRPart2",
        display: "42 CFR Part2",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CommonRule",
        display: "Common Rule",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAAuth",
        display: "HIPAA Authorization for Disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAConsent",
        display: "HIPAA Consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAANOPP",
        display: "HIPAA notice of privacy practices",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAPsyNotes",
        display: "HIPAA psychotherapy notes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAROA",
        display: "HIPAA Right of Access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAASelfPay",
        display: "HIPAA self-pay",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "Title38Section7332",
        display: "Title 38 Section 7332",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "a) HIPAAConsent",
        display: "HIPAA Consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USResearchInformedAssent",
        display: "Informed Assent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USResearchInformedConsent",
        display: "Informed Consent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USBroadResearchConsent",
        display: "Broad Consent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AppropriatenessDetectedIssueCode",
        display: "AppropriatenessDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COMPLY",
        display: "Compliance Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DACT",
        display: "drug action detected issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSE",
        display: "Dosage problem",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPY",
        display: "Duplicate Therapy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIME",
        display: "timing detected issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_DrugActionDetectedIssueCode",
        display: "DrugActionDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_TimingDetectedIssueCode",
        display: "TimingDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPatientAnnotationType",
        display: "ActPatientAnnotationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGAnnotationType",
        display: "ECGAnnotationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InteractionDetectedIssueCode",
        display: "InteractionDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSA",
        display: "Observation Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREVINEF",
        display: "previously ineffective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMAUTH",
        display: "emergency authorization override",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AIRTRNS",
        display: "airborne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANANTRNS",
        display: "animal to animal transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANHUMTRNS",
        display: "animal to human transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BDYFLDTRNS",
        display: "body fluid contact transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BLDTRNS",
        display: "blood borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DERMTRNS",
        display: "transdermal transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENVTRNS",
        display: "environmental exposure transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FECTRNS",
        display: "fecal-oral transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FOMTRNS",
        display: "fomite transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FOODTRNS",
        display: "food-borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HUMHUMTRNS",
        display: "human to human transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INDTRNS",
        display: "indeterminate disease transmission mode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LACTTRNS",
        display: "lactation transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOSTRNS",
        display: "nosocomial transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PARTRNS",
        display: "parenteral transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLACTRNS",
        display: "transplacental transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SEXTRNS",
        display: "sexual transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRNSFTRNS",
        display: "transfusion transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VECTRNS",
        display: "vector-borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WATTRNS",
        display: "water-borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REPRESENTATIVE_BEAT",
        display: "ECG representative beat waveforms",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RHYTHM",
        display: "ECG rhythm waveforms",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEMO",
        display: "all demographic information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOB",
        display: "date of birth information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GENDER",
        display: "gender and sexual orientation information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LIVARG",
        display: "living arrangement information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MARST",
        display: "marital status information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATLOC",
        display: "patient location",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RACE",
        display: "race information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REL",
        display: "religion information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDACOATING",
        display: "coating",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDACOLOR",
        display: "color",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDAIMPRINTCD",
        display: "imprint code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDALOGO",
        display: "logo",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDASCORING",
        display: "scoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDASHAPE",
        display: "shape",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDASIZE",
        display: "size",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GENE",
        display: "gene",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "I",
        display: "Isolation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "P",
        display: "Private",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "S",
        display: "Suite",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SP",
        display: "Semi-private",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "W",
        display: "Ward",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActDetectedIssueCode",
        display: "ActDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HL7TriggerEventCode",
        display: "HL7TriggerEventCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_SubstanceAdministrationActCode",
        display: "SubstanceAdministrationActCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSANTC",
        display: "antigen count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSANTV",
        display: "antigen validity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAT_ADV_EVNT",
        display: "patient adverse event",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VAC_PROBLEM",
        display: "vaccine product problem",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationSensitivityPolicy",
        display: "ActInformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_EntitySensitivityPolicyType",
        display: "EntityInformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_RoleInformationSensitivityPolicy",
        display: "RoleInformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADOL",
        display: "adolescent information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CEL",
        display: "celebrity information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VIP",
        display: "celebrity information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIA",
        display: "diagnosis information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRGIS",
        display: "drug information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMP",
        display: "employee information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDS",
        display: "patient default information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PHY",
        display: "physician requested information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRS",
        display: "patient requested information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FOOD",
        display: "Food Interaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TPROD",
        display: "Therapeutic Product Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPELAT",
        display: "adjud. nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPELAT",
        display: "adjud. nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPELCT",
        display: "adjud. nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPELCT",
        display: "adjud. nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPMNAT",
        display: "adjud. nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPMNAT",
        display: "adjud. nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPMNCT",
        display: "adjud. nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPMNCT",
        display: "adjud. nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPELAT",
        display: "adjud. nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPELAT",
        display: "adjud. nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPELCT",
        display: "adjud. nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPELCT",
        display: "adjud. nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPMNAT",
        display: "adjud. nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPMNAT",
        display: "adjud. nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPMNCT",
        display: "adjud. nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPMNCT",
        display: "adjud. nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPELAT",
        display: "adjud. non-payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPELCT",
        display: "adjud. non-payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPMNAT",
        display: "adjud. non-payee payable prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPMNCT",
        display: "adjud. non-payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPELAT",
        display: "adjud. non-payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPELCT",
        display: "adjud. non-payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPMNAT",
        display: "adjud. non-payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPMNCT",
        display: "adjud. non-payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPELAT",
        display: "adjud. payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPELCT",
        display: "adjud. payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPMNAT",
        display: "adjud. payee payable prior-period manual amout",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPMNCT",
        display: "adjud. payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPELAT",
        display: "adjud. payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPELCT",
        display: "adjud. payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPMNAT",
        display: "adjud. payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPMNCT",
        display: "adjud. payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPELAT",
        display: "adjud. refused prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPELCT",
        display: "adjud. refused prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPMNAT",
        display: "adjud. refused prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPMNCT",
        display: "adjud. refused prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPELAT",
        display: "adjud. refused same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPELCT",
        display: "adjud. refused same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPMNAT",
        display: "adjud. refused same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPMNCT",
        display: "adjud. refused same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPELAT",
        display: "paid nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPELAT",
        display: "paid nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPELCT",
        display: "paid nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPELCT",
        display: "paid nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPMNAT",
        display: "paid nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPMNAT",
        display: "paid nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPMNCT",
        display: "paid nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPMNCT",
        display: "paid nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPELAT",
        display: "paid nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPELAT",
        display: "paid nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPELCT",
        display: "paid nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPELCT",
        display: "paid nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPMNAT",
        display: "paid nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPMNAT",
        display: "paid nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPMNCT",
        display: "paid nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPMNCT",
        display: "paid nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPELAT",
        display: "paid non-payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPELCT",
        display: "paid non-payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPMNAT",
        display: "paid non-payee payable prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPMNCT",
        display: "paid non-payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPELAT",
        display: "paid non-payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPELCT",
        display: "paid non-payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPMNAT",
        display: "paid non-payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPMNCT",
        display: "paid non-payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPELAT",
        display: "paid payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPELCT",
        display: "paid payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPMNAT",
        display: "paid payee payable prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPMNCT",
        display: "paid payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPELAT",
        display: "paid payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPELCT",
        display: "paid payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPMNAT",
        display: "paid payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPMNCT",
        display: "paid payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLELAT",
        display: "submitted billed electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLAT",
        display: "submitted billed electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLELCT",
        display: "submitted billed electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLCT",
        display: "submitted billed electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBNFELAT",
        display: "submitted nullified electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBCNAT",
        display: "submitted nullified electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBNFELCT",
        display: "submitted cancelled electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBCNCT",
        display: "submitted cancelled electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDELAT",
        display: "submitted pending electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDAT",
        display: "submitted pending electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDELCT",
        display: "submitted pending electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDCT",
        display: "submitted pending electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "21611-9",
        display: "age patient qn est",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "21612-7",
        display: "age patient qn reported",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "29553-5",
        display: "age patient qn calc",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "30525-0",
        display: "age patient qn definition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "30972-4",
        display: "age at onset of adverse event",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REP_HALF_LIFE",
        display: "representative half-life",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLCOATING",
        display: "coating",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLCOLOR",
        display: "color",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLIMAGE",
        display: "image",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLIMPRINT",
        display: "imprint",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSCORING",
        display: "scoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSHAPE",
        display: "shape",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSIZE",
        display: "size",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSYMBOL",
        display: "symbol",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADMDX",
        display: "admitting diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISDX",
        display: "discharge diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTDX",
        display: "intermediate diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOI",
        display: "nature of injury",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CaseTransmissionMode",
        display: "case transmission mode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AGGREGATE",
        display: "aggregate measure observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMPMSRMTH",
        display: "composite measure method",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMPMSRSCRWGHT",
        display: "component measure scoring weight",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPY",
        display: "copyright",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRS",
        display: "clinical recommendation statement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEF",
        display: "definition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISC",
        display: "disclaimer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FINALDT",
        display: "finalized date/time",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GUIDE",
        display: "guidance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IDUR",
        display: "improvement notation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ITMCNT",
        display: "items counted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY",
        display: "keyword",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDT",
        display: "measurement end date",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSD",
        display: "measurement start date",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRADJ",
        display: "risk adjustment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRAGG",
        display: "rate aggregation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRIMPROV",
        display: "health quality measure improvement notation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRJUR",
        display: "jurisdiction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRRPTR",
        display: "reporter type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRRPTTIME",
        display: "timeframe for reporting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRSCORE",
        display: "measure scoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRSET",
        display: "health quality measure care setting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRTOPIC",
        display: "health quality measure topic type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRTP",
        display: "measurement period",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRTYPE",
        display: "measure type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RAT",
        display: "rationale",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REF",
        display: "reference",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SDE",
        display: "supplemental data elements",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STRAT",
        display: "stratification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRANF",
        display: "transmission format",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USE",
        display: "notice of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIME_ABSOLUTE",
        display: "absolute time sequence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIME_RELATIVE",
        display: "relative time sequence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGObservationSequenceType",
        display: "ECGObservationSequenceType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGObservationSeriesType",
        display: "ECGObservationSeriesType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSpecObsCode",
        display: "ActSpecObsCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AnnotationType",
        display: "AnnotationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_GeneticObservationType",
        display: "GeneticObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ImmunizationObservationType",
        display: "ImmunizationObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_IndividualCaseSafetyReportType",
        display: "Individual Case Safety Report Type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_LOINCObservationActContextAgeType",
        display: "LOINCObservationActContextAgeType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_MedicationObservationType",
        display: "MedicationObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationIssueTriggerCodedObservationType",
        display: "ObservationIssueTriggerCodedObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationQualityMeasureAttribute",
        display: "ObservationQualityMeasureAttribute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationSequenceType",
        display: "ObservationSequenceType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationSeriesType",
        display: "ObservationSeriesType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PatientImmunizationRelatedObservationType",
        display: "PatientImmunizationRelatedObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PopulationInclusionObservationType",
        display: "PopulationInclusionObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PreferenceObservationType",
        display: "_PreferenceObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADVERSE_REACTION",
        display: "Adverse Reaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ASSERTION",
        display: "Assertion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CASESER",
        display: "case seriousness criteria",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDIO",
        display: "case disease imported observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRIT",
        display: "criticality",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTMO",
        display: "case transmission mode observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DX",
        display: "ObservationDiagnosisTypes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationDiagnosisTypes",
        display: "ObservationDiagnosisTypes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GISTIER",
        display: "GIS tier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HHOBS",
        display: "household situation observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ISSUE",
        display: "detected issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KSUBJ",
        display: "knowledge subject",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KSUBT",
        display: "knowledge subtopic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OINT",
        display: "intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SEV",
        display: "Severity Observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivilegeCategorizationType",
        display: "ActPrivilegeCategorizationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AdverseSubstanceAdministrationEventActionTakenType",
        display: "AdverseSubstanceAdministrationEventActionTakenType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CommonClinicalObservationType",
        display: "CommonClinicalObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_FDALabelData",
        display: "FDALabelData",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationAllergyTestCode",
        display: "observation allergy test",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationAllergyTestType",
        display: "ObservationAllergyTestType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationCausalityAssessmentType",
        display: "observation causality assessment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationDosageDefinitionPreconditionType",
        display: "observation dosage definition precondition type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationGenomicFamilyHistoryType",
        display: "ObservationGenomicFamilyHistoryType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationIndicationType",
        display: "ObservationIndicationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationIssueTriggerMeasuredObservationType",
        display: "ObservationIssueTriggerMeasuredObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationQueryMatchType",
        display: "ObservationQueryMatchType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationVisionPrescriptionType",
        display: "ObservationVisionPrescriptionType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PatientCharacteristicObservationType",
        display: "PatientCharacteristicObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_SimpleMeasurableClinicalObservationType",
        display: "SimpleMeasurableClinicalObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CLSSRM",
        display: "classroom",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GRADE",
        display: "grade",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHL",
        display: "school",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHLDIV",
        display: "school division",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TEACHER",
        display: "teacher",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENEX",
        display: "denominator exclusions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENEXCEP",
        display: "denominator exceptions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENOM",
        display: "denominator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IPOP",
        display: "initial population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSROBS",
        display: "measure observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRPOPL",
        display: "measure population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRPOPLEX",
        display: "measure population exclusions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NUMER",
        display: "numerator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NUMEX",
        display: "numerator exclusions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREFSTRENGTH",
        display: "preference strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CIRCLE",
        display: "circle",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ELLIPSE",
        display: "ellipse",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "POINT",
        display: "point",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "POLY",
        display: "polyline",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "B",
        display: "business information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMPL",
        display: "employer information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LOCIS",
        display: "location information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SSP",
        display: "sensitive service provider information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLDONE",
        display: "already performed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FULFIL",
        display: "fulfillment alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HELD",
        display: "held/suspended alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TOOLATE",
        display: "Refill Too Late Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TOOSOON",
        display: "Refill Too Soon Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENDLATE",
        display: "End Too Late Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STRTLATE",
        display: "Start Too Late Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "19",
        display: "Consulted Supplier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "2",
        display: "Assessed Patient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "22",
        display: "appropriate indication or diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "23",
        display: "prior therapy documented",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "3",
        display: "Patient Explanation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "4",
        display: "Consulted Other Source",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "5",
        display: "Consulted Prescriber",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "7",
        display: "Interacting Therapy No Longer Active/Planned",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "15",
        display: "Replacement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "16",
        display: "Vacation Supply",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "17",
        display: "Weekend Supply",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "18",
        display: "Leave of Absence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "20",
        display: "additional quantity on separate dispense",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "6",
        display: "Prescriber Declined Change",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "10",
        display: "Provided Patient Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "11",
        display: "Added Concurrent Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "12",
        display: "Temporarily Suspended Concurrent Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "13",
        display: "Stopped Concurrent Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "9",
        display: "Instituted Ongoing Monitoring Program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANF",
        display: "adjudicated with adjustments and no financial impact",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTACCRD",
        display: "trust accreditation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTAGRE",
        display: "trust agreement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTASSUR",
        display: "trust assurance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTCERT",
        display: "trust certificate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTFWK",
        display: "trust framework",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTMEC",
        display: "trust mechanism",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADALRT",
        display: "adult alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHINDA",
        display: "High Dose for Age Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELINDA",
        display: "Low Dose for Age Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GEALRT",
        display: "geriatric alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PEALRT",
        display: "pediatric alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DALG",
        display: "Drug Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EALG",
        display: "Environmental Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FALG",
        display: "Food Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBAIR",
        display: "fixed-wing ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "Fixed-wingAmbulance",
        display: "fixed-wing ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBGRND",
        display: "ground ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GroundAmbulance",
        display: "ground ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBHELO",
        display: "helicopter ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HelicopterAmbulance",
        display: "helicopter ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACCESSCONSCHEME",
        display: "access control scheme",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COL",
        display: "collision coverage policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNINSMOT",
        display: "uninsured motorist policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COGN",
        display: "cognitive disability information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DVD",
        display: "developmental disability information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMOTDIS",
        display: "emotional disturbance information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AE",
        display: "American Express",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DN",
        display: "Diner's Club",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DV",
        display: "Discover Card",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MC",
        display: "Master Card",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "V",
        display: "Visa",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIAGLISTE",
        display: "diagnosis list entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCHINSTE",
        display: "discharge instruction entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCHSUME",
        display: "discharge summary entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATEDUE",
        display: "patient education entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATREPE",
        display: "pathology report entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROBLISTE",
        display: "problem list entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RADREPE",
        display: "radiology report entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCHSUMREV",
        display: "discharge summary review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CODE_DEPREC",
        display: "code has been deprecated",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ABUSE",
        display: "commonly abused/misused alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FRAUD",
        display: "potential fraud",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLYDOC",
        display: "Poly-orderer Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLYPHRM",
        display: "Poly-supplier Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACOCOMPT",
        display: "accountable care organization compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDSSCOMPT",
        display: "CDS system compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTCOMPT",
        display: "care team compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FMCOMPT",
        display: "financial management compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HRCOMPT",
        display: "human resource compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LRCOMPT",
        display: "legitimate relationship compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PACOMPT",
        display: "patient administration compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RESCOMPT",
        display: "research project compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RMGTCOMPT",
        display: "records management compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HGHT",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LACT",
        display: "Lactation Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREG",
        display: "Pregnancy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WGHT",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTOLIST",
        display: "intolerance list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROBLIST",
        display: "problem list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RISKLIST",
        display: "risk factors",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONTROLLED",
        display: "CONTROLLED",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUI",
        display: "CUI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIHLTH",
        display: "CUI//HLTH",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIHLTHP",
        display: "(CUI//HLTH)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIP",
        display: "(CUI)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIPRVCY",
        display: "CUI//PRVCY",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIPRVCYP",
        display: "(CUI//PRVCY)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-HLTH",
        display: "CUI//SP-HLTH",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-HLTHP",
        display: "(CUI//SP-HLTH)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-PRVCY",
        display: "CUI//SP-PRVCY",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-PRVCYP",
        display: "(CUI//SP-PRVCY)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UUI",
        display: "(U)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYCC",
        display: "comply with confidentiality code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYCD",
        display: "comply with consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYCUI",
        display: "comply with controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYJPP",
        display: "comply with jurisdictional privacy policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYJSP",
        display: "comply with jurisdictional security policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYOPP",
        display: "comply with organizational privacy policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYOSP",
        display: "comply with organizational security policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_DEADrugSchedule",
        display: "DEADrugSchedule",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BR",
        display: "breikost (GE)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DM",
        display: "diabetes mellitus diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FAST",
        display: "fasting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FORMULA",
        display: "formula diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GF",
        display: "gluten free",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LF",
        display: "low fat",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LP",
        display: "low protein",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LQ",
        display: "liquid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LS",
        display: "low sodium",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "N",
        display: "normal diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NF",
        display: "no fat",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAF",
        display: "phenylalanine free",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAR",
        display: "parenteral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RD",
        display: "reduction diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCH",
        display: "schonkost (GE)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUPPLEMENT",
        display: "nutritional supplement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "T",
        display: "tea only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VLI",
        display: "low valin, leucin, isoleucin",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTO-HIGH",
        display: "Auto-High Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTO-LOW",
        display: "Auto-Low Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRE",
        display: "Pre-Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RERUN",
        display: "Rerun Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DNAINT",
        display: "Drug Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CANPRG",
        display: "women's cancer detection program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENDRENAL",
        display: "end renal program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIVAIDS",
        display: "HIV-AIDS program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSECOND",
        display: "dosage-condition alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDUR",
        display: "Dose-Duration Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEH",
        display: "High Dose Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEIVL",
        display: "Dose-Interval Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEL",
        display: "Low Dose Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDOSE",
        display: "maximum dosage reached",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURH",
        display: "Dose-Duration High Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURL",
        display: "Dose-Duration Low Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURHIND",
        display: "Dose-Duration High for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURLIND",
        display: "Dose-Duration Low for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHIND",
        display: "High Dose for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHINDSA",
        display: "High Dose for Height/Surface Area Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHINDW",
        display: "High Dose for Weight Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEIVLIND",
        display: "Dose-Interval for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELIND",
        display: "Low Dose for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELINDSA",
        display: "Low Dose for Height/Surface Area Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELINDW",
        display: "Low Dose for Weight Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPCLS",
        display: "duplicate therapeutic alass alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPGEN",
        display: "duplicate generic alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENAINT",
        display: "Environmental Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SO",
        display: "Script Owing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "21",
        display: "authorization confirmed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPTR",
        display: "encrypt at rest",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPTT",
        display: "encrypt in transit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPTU",
        display: "encrypt in use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFC",
        display: "First Fill - Complete",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFP",
        display: "First Fill - Part Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFPS",
        display: "first fill, part fill, partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFSS",
        display: "first fill, partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TF",
        display: "Trial Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFCS",
        display: "first fill complete, partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TFS",
        display: "trial fill partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FNAINT",
        display: "Food Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTACTN",
        display: "no longer actionable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTEQUIV",
        display: "not equivalent alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIMING",
        display: "event timing incorrect alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BOOSTER",
        display: "Booster Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INITIMMUNIZ",
        display: "Initial Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACUTE",
        display: "inpatient acute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NONAC",
        display: "inpatient non-acute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFAO",
        display: "access only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFASO",
        display: "access and save only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFCON",
        display: "after explicit consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FIBRIN",
        display: "Fibrin",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HEMOLYSIS",
        display: "Hemolysis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ICTERUS",
        display: "Icterus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LIPEMIA",
        display: "Lipemia",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IPPOP",
        display: "initial patient population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeDetectedIssueCode",
        display: "ActAdministrativeDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSuppliedItemDetectedIssueCode",
        display: "ActSuppliedItemDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActFinancialDetectedIssueCode",
        display: "ActFinancialDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ClinicalActionDetectedIssueCode",
        display: "ClinicalActionDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAREGAP",
        display: "Caregap",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CODINGGAP",
        display: "Codinggap",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisCUI",
        display: "jurisdictional controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisDEID",
        display: "jurisdictional de-identified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisLDS",
        display: "jurisdictional limited data set",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisNSI",
        display: "jurisdictional non-sensitive information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisPI",
        display: "jurisdictional public information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisSP-CUI",
        display:
          "jurisdictional specified controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisUUI",
        display: "jurisdictional uncontrolled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LEN_LONG",
        display: "length is too long",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LEN_SHORT",
        display: "length is too short",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNU",
        display: "annuity policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TLIFE",
        display: "term life insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ULIFE",
        display: "universal life insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RENT",
        display: "Rent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HMO",
        display: "health maintenance organization policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PPO",
        display: "preferred provider organization policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDHHS-5515MMHC",
        display:
          "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-Michigan Mental Health Code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDHHS-5515Part2",
        display:
          "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-US 42 CFR Part 2",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CURMEDLIST",
        display: "current medication list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCMEDLIST",
        display: "discharge medication list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HISTMEDLIST",
        display: "medication history",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MICROORGRREV",
        display: "microbiology organisms results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MICROSENSRREV",
        display: "microbiology sensitivity test results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MARWLREV",
        display: "medication administration record work list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTEQUIVGEN",
        display: "not generically equivalent alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTEQUIVTHER",
        display: "not therapeutically equivalent alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANONY",
        display: "anonymize",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AOD",
        display: "accounting of disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUDIT",
        display: "audit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUDTR",
        display: "audit trail",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYPOL",
        display: "comply with policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DECLASSIFYLABEL",
        display: "declassify security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEID",
        display: "deidentify",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DELAU",
        display: "delete after use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOWNGRDLABEL",
        display: "downgrade security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRIVLABEL",
        display: "derive security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPT",
        display: "encrypt",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HUAPRV",
        display: "human approval",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABEL",
        display: "assign security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MASK",
        display: "mask",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MINEC",
        display: "minimum necessary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERSISTLABEL",
        display: "persist security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRIVMARK",
        display: "privacy mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSEUD",
        display: "pseudonymize",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REDACT",
        display: "redact",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UPGRDLABEL",
        display: "upgrade security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROCESSINLINELABEL",
        display: "process inline security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AGE",
        display: "Age Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COND",
        display: "Condition Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CREACT",
        display: "common reaction alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GEN",
        display: "Genetic Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GEND",
        display: "Gender Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LAB",
        display: "Lab Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REACT",
        display: "Reaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RREACT",
        display: "Related Reaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABOE",
        display: "laboratory test order entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDOE",
        display: "medication order entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALG",
        display: "Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DINT",
        display: "Drug Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EINT",
        display: "Environmental Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FINT",
        display: "Food Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NAINT",
        display: "Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgCUI",
        display:
          "organizational basic controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgDEID",
        display: "organizational de-identified informati)on policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgLDS",
        display: "organizational limited data set information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgNSI",
        display: "organizational non-sensitive information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgPI",
        display: "organizational public information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgSP-CUI",
        display:
          "organizational specified controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgUUI",
        display: "organizational uncontrolled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLERLREV",
        display: "allergy list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CLINNOTEE",
        display: "clinical note entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMLREV",
        display: "immunization list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REMLREV",
        display: "reminder list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLERLE",
        display: "allergy list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDSREV",
        display: "clinical decision support intervention review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CLINNOTEREV",
        display: "clinical note review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIAGLISTREV",
        display: "diagnosis list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMLE",
        display: "immunization list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABRREV",
        display: "laboratory results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MICRORREV",
        display: "microbiology results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MLREV",
        display: "medication list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OREV",
        display: "orders review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATREPREV",
        display: "pathology report review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROBLISTREV",
        display: "problem list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RADREPREV",
        display: "radiology report review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REMLE",
        display: "reminder list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RISKASSESS",
        display: "risk assessment instrument task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATPREFALT",
        display: "violates stated preferences, alternate available",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersDEID",
        display: "personal de-identified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersLDS",
        display: "personal limited data set information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersNSI",
        display: "personal non-sensitive information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersPI",
        display: "personal public information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ControlledUnclassifiedInformation",
        display: "ControlledUnclassifiedInformation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SecurityLabelMark",
        display: "Security Label Mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIMark",
        display: "CUI Mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENTPRG",
        display: "dental program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISEASEPRG",
        display: "public health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MANDPOL",
        display: "mandatory health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MENTPRG",
        display: "mental health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SAFNET",
        display: "safety net clinic program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBPRG",
        display: "substance use program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSIDIZ",
        display: "subsidized health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALGY",
        display: "Allergy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INT",
        display: "Intolerance Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOAUTH",
        display: "no disclosure without subject authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOCOLLECT",
        display: "no collection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NODSCLCD",
        display: "no disclosure without consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NODSCLCDS",
        display:
          "no disclosure without information subject's consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOINTEGRATE",
        display: "no integration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOLIST",
        display: "no unlisted entity disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOMOU",
        display: "no disclosure without MOU",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOORGPOL",
        display: "no disclosure without organizational authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPAT",
        display:
          "no disclosure to patient, family or caregivers without attending provider's authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPERSISTP",
        display: "no collection beyond purpose of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSCLCD",
        display: "no redisclosure without consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSLCD",
        display: "no redisclosure without consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSCLCDS",
        display:
          "no redisclosure without information subject's consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSCLW",
        display: "no disclosure without jurisdictional authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORELINK",
        display: "no relinking",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOREUSE",
        display: "no reuse beyond purpose of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOVIP",
        display: "no unauthorized VIP disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ORCON",
        display: "no disclosure without originator authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WELLREMLE",
        display: "wellness reminder list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WELLREMLREV",
        display: "wellness reminder list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MAXOCCURS",
        display: "repetitions above maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MINOCCURS",
        display: "repetitions below minimum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RSDID",
        display: "de-identified information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RSREID",
        display: "re-identifiable information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFC",
        display: "Refill - Complete",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFF",
        display: "Refill (First fill this facility)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFS",
        display: "refill partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TB",
        display: "Trial Balance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFCS",
        display: "refill complete partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFFS",
        display: "refill partial strength (first fill this facility)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFPS",
        display: "refill part fill partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FALLRISK",
        display: "falls risk assessment instrument task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RALG",
        display: "Related Allergy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RAR",
        display: "Related Prior Reaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RINT",
        display: "Related Intolerance Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECALTINTOBS",
        display: "security alteration integrity observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECDATINTOBS",
        display: "security data integrity observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTCONOBS",
        display: "security integrity confidence observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTPRVOBS",
        display: "security integrity provenance observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTSTOBS",
        display: "security integrity status observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTPRVABOBS",
        display: "security integrity provenance asserted by observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTPRVRBOBS",
        display: "security integrity provenance reported by observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECCATOBS",
        display: "security category observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECCLASSOBS",
        display: "security classification observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECCONOBS",
        display: "security control observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTOBS",
        display: "security integrity observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECTRSTOBS",
        display: "SECTRSTOBS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTACCRDOBS",
        display: "trust accreditation observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTAGREOBS",
        display: "trust agreement observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTCERTOBS",
        display: "trust certificate observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTFWKOBS",
        display: "trust framework observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTLOAOBS",
        display: "trust assurance observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTMECOBS",
        display: "trust mechanism observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ConfidentialMark",
        display: "confidential mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPYMark",
        display: "copy of original mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DeliverToAddresseeOnlyMark",
        display: "deliver only to addressee mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RedisclosureProhibitionMark",
        display: "prohibition against redisclosure mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RestrictedConfidentialityMark",
        display: "restricted confidentiality mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRAFTMark",
        display: "Draft Mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTHPOL",
        display: "authorization policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DELEPOL",
        display: "delegation policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ObligationPolicy",
        display: "obligation policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PrivacyMark",
        display: "privacy mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RefrainPolicy",
        display: "refrain policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BH",
        display: "behavioral health information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MH",
        display: "mental health information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSY",
        display: "psychiatry disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSYTHPN",
        display: "psychotherapy note information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUD",
        display: "substance use disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSIDMC",
        display: "subsidized managed care program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSUPP",
        display: "subsidized supplemental health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ETHUD",
        display: "alcohol use disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPIOIDUD",
        display: "opioid use disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TBS",
        display: "trial balance partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALRTENDLATE",
        display: "end too late alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALRTSTRTLATE",
        display: "start too late alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTERVAL",
        display: "outside requested time",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MINFREQ",
        display: "too soon within frequency based on the usage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRG",
        display: "Drug Interaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NHP",
        display: "Natural Health Product Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NONRX",
        display: "Non-Prescription Interaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SALE",
        display: "Sale",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BUS",
        display: "business constraint violation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CODE_INVAL",
        display: "code is not valid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FORMAT",
        display: "invalid format",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ILLEGAL",
        display: "illegal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LEN_RANGE",
        display: "length out of range",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MISSCOND",
        display: "conditional element missing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MISSMAND",
        display: "mandatory element missing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NODUPS",
        display: "duplicate values are not permitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPERSIST",
        display: "element will not be persisted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REP_RANGE",
        display: "repetitions out of range",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AVAILABLE",
        display: "Available Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONSUMPTION",
        display: "Consumption Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CURRENT",
        display: "Current Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INITIAL",
        display: "Initial Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAccountCode",
        display: "ActAccountCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationCode",
        display: "ActAdjudicationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationResultActionCode",
        display: "ActAdjudicationResultActionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillableModifierCode",
        display: "ActBillableModifierCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillingArrangementCode",
        display: "ActBillingArrangementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBoundedROICode",
        display: "ActBoundedROICode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCareProvisionCode",
        display: "act care provision",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActClaimAttachmentCategoryCode",
        display: "ActClaimAttachmentCategoryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActConsentType",
        display: "ActConsentType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActContainerRegistrationCode",
        display: "ActContainerRegistrationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActControlVariable",
        display: "ActControlVariable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageConfirmationCode",
        display: "ActCoverageConfirmationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageLimitCode",
        display: "ActCoverageLimitCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageTypeCode",
        display: "ActCoverageTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActDetectedIssueManagementCode",
        display: "ActDetectedIssueManagementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActExposureCode",
        display: "ActExposureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActFinancialTransactionCode",
        display: "ActFinancialTransactionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActIncidentCode",
        display: "ActIncidentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationAccessCode",
        display: "ActInformationAccessCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationAccessContextCode",
        display: "ActInformationAccessContextCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationCategoryCode",
        display: "ActInformationCategoryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceElementCode",
        display: "ActInvoiceElementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceElementSummaryCode",
        display: "ActInvoiceElementSummaryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceOverrideCode",
        display: "ActInvoiceOverrideCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActListCode",
        display: "ActListCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMonitoringProtocolCode",
        display: "ActMonitoringProtocolCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActNonObservationIndicationCode",
        display: "ActNonObservationIndicationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActObservationVerificationType",
        display: "act observation verification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPaymentCode",
        display: "ActPaymentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPharmacySupplyType",
        display: "ActPharmacySupplyType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPolicyType",
        display: "ActPolicyType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProductAcquisitionCode",
        display: "ActProductAcquisitionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSpecimenTransportCode",
        display: "ActSpecimenTransportCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSpecimenTreatmentCode",
        display: "ActSpecimenTreatmentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSubstanceAdministrationCode",
        display: "ActSubstanceAdministrationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActTaskCode",
        display: "ActTaskCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActTransportationModeCode",
        display: "ActTransportationModeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationType",
        display: "ObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ROIOverlayShape",
        display: "ROIOverlayShape",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "C",
        display: "corrected",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIET",
        display: "Diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUGPRG",
        display: "drug program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "F",
        display: "final",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRLMN",
        display: "preliminary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECOBS",
        display: "SecurityObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSIDFFS",
        display: "subsidized fee for service program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WRKCOMP",
        display: "(workers compensation program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationInformationCode",
        display: "ActAdjudicationInformationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillableTreatmentPlanCode",
        display: "ActBillableTreatmentPlanCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCognitiveProfessionalServiceCode",
        display: "ActCognitiveProfessionalServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActIdentityDocumentCode",
        display: "ActIdentityDocumentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActOrderCode",
        display: "ActOrderCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivilegeCategorization",
        display: "ActPrivilegeCategorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProcedureCode",
        display: "ActProcedureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActRegistryCode",
        display: "ActRegistryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSecurityObjectCode",
        display: "ActSecurityObjectCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AdvanceBeneficiaryNoticeType",
        display: "AdvanceBeneficiaryNoticeType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CPT4",
        display: "CPT4",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ExternallyDefinedActCodes",
        display: "ExternallyDefinedActCodes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HL7DefinedActCodes",
        display: "HL7DefinedActCodes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_IndividualCaseSafetyReportCriteria",
        display: "IndividualCaseSafetyReportCriteria",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_IndividualCaseSafetyReportProductCharacteristic",
        display: "IndividualCaseSafetyReportProductCharacteristic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationActAgeGroupType",
        display: "ObservationActAgeGroupType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPAY",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEDUCT",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEIND",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRA",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STORE",
        display: "Storage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACCTRECEIVABLE",
        display: "account receivable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CASH",
        display: "Cash",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CC",
        display: "credit card",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PBILLACCT",
        display: "patient billing account",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CreditCard",
        display: "CreditCard",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationGroupCode",
        display: "ActAdjudicationGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AA",
        display: "adjudicated with adjustments",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AR",
        display: "adjudicated as refused",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AS",
        display: "adjudicated as submitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONT",
        display: "contract",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DAY",
        display: "day",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LOC",
        display: "location",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MONTH",
        display: "month",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERIOD",
        display: "period",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROV",
        display: "provider",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WEEK",
        display: "week",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "YEAR",
        display: "year",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISPLAY",
        display: "Display",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FORM",
        display: "Print on Form",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NAT",
        display: "Insufficient authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUPPRESSED",
        display: "record suppressed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VALIDAT",
        display: "validation issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeAuthorizationDetectedIssueCode",
        display: "ActAdministrativeAuthorizationDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeRuleDetectedIssueCode",
        display: "ActAdministrativeRuleDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AuthorizationIssueManagementCode",
        display: "Authorization Issue Management Code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY204",
        display: "Unknown key identifier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY205",
        display: "Duplicate key identifier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY206",
        display: "non-matching identification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSOLETE",
        display: "obsolete record returned",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPTM",
        display: "CPT modifier codes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HCPCSA",
        display: "HCPCS Level II and Carrier-assigned",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMedicalBillableServiceCode",
        display: "ActMedicalBillableServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActNonMedicalBillableServiceCode",
        display: "ActNonMedicalBillableServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BLK",
        display: "block funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAP",
        display: "capitation funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONTF",
        display: "contract funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FINBILL",
        display: "financial",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ROST",
        display: "roster funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SESS",
        display: "sessional funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFS",
        display: "fee for service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ROIFS",
        display: "fully specified ROI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ROIPS",
        display: "partially specified ROI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCredentialedCareCode",
        display: "act credentialed care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActEncounterCode",
        display: "ActEncounterCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMedicalServiceCode",
        display: "ActMedicalServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTOATTCH",
        display: "auto attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOCUMENT",
        display: "document",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HEALTHREC",
        display: "health record",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMG",
        display: "image attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABRESULTS",
        display: "lab results",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MODEL",
        display: "model",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WIATTCH",
        display: "work injury report attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "XRAY",
        display: "x-ray",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActDecision",
        display: "_ActDecision",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivacyConsentDirective",
        display: "_ActPrivacyConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMRGONLY",
        display: "emergency only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GRANTORCHOICE",
        display: "grantor choice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMPLIED",
        display: "implied consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMPLIEDD",
        display: "implied consent with opportunity to dissent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOCONSENT",
        display: "no consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPP",
        display: "notice of privacy practices",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTIN",
        display: "opt-in",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTINR",
        display: "opt-in with restrictions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTOUT",
        display: "op-out",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTOUTE",
        display: "opt-out with exceptions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ICOL",
        display: "information collection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IDSCL",
        display: "information disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFA",
        display: "information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IRDSCL",
        display: "information redisclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RESEARCH",
        display: "research information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ID",
        display: "Identified",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IP",
        display: "In Position",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "L",
        display: "Left Equipment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "M",
        display: "Missing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "O",
        display: "In Process",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "R",
        display: "Process Completed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "X",
        display: "Container Unavailable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTO",
        display: "auto-repeat permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENDC",
        display: "endogenous content",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REFLEX",
        display: "reflex permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGControlVariable",
        display: "ECGControlVariable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTH",
        display: "Authorized",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NAUTH",
        display: "Not Authorized",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageAuthorizationConfirmationCode",
        display: "ActCoverageAuthorizationConfirmationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageEligibilityConfirmationCode",
        display: "ActCoverageEligibilityConfirmationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ELG",
        display: "Eligible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NELG",
        display: "Not Eligible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageQuantityLimitCode",
        display: "ActCoverageQuantityLimitCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVMX",
        display: "coverage maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoveredPartyLimitCode",
        display: "ActCoveredPartyLimitCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVPRD",
        display: "coverage period",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LFEMX",
        display: "life time maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NETAMT",
        display: "Net Amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRDMX",
        display: "period maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNITPRICE",
        display: "Unit Price",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNITQTY",
        display: "Unit Quantity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInsurancePolicyCode",
        display: "ActInsurancePolicyCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInsuranceTypeCode",
        display: "ActInsuranceTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProgramTypeCode",
        display: "ActProgramTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoveragePartyLimitGroupCode",
        display: "ActCoveragePartyLimitGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCredentialedCareProvisionPersonCode",
        display: "act credentialed care provision peron",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCredentialedCareProvisionProgramCode",
        display: "act credentialed care provision program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CACC",
        display: "certified anatomic pathology and clinical pathology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAIC",
        display: "certified allergy and immunology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAMC",
        display: "certified aerospace medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CANC",
        display: "certified anesthesiology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAPC",
        display: "certified anatomic pathology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CBGC",
        display: "certified clinical biochemical genetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCCC",
        display: "certified clinical cytogenetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCGC",
        display: "certified clinical genetics (M.D.) care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCPC",
        display: "certified clinical pathology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCSC",
        display: "certified colon and rectal surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDEC",
        display: "certified dermatology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDRC",
        display: "certified diagnostic radiology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CEMC",
        display: "certified emergency medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CFPC",
        display: "certified family practice care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CIMC",
        display: "certified internal medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMGC",
        display: "certified clinical molecular genetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNEC",
        display: "certified neurology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNMC",
        display: "certified nuclear medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNQC",
        display:
          "certified neurology with special qualifications in child neurology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNSC",
        display: "certified neurological surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COGC",
        display: "certified obstetrics and gynecology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COMC",
        display: "certified occupational medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPC",
        display: "certified ophthalmology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COSC",
        display: "certified orthopaedic surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COTC",
        display: "certified otolaryngology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPEC",
        display: "certified pediatrics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPGC",
        display: "certified Ph.D. medical genetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPHC",
        display: "certified public health and general preventive medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPRC",
        display: "certified physical medicine and rehabilitation care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPSC",
        display: "certified plastic surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPYC",
        display: "certified psychiatry care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CROC",
        display: "certified radiation oncology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRPC",
        display: "certified radiological physics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSUC",
        display: "certified surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTSC",
        display: "certified thoracic surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CURC",
        display: "certified urology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CVSC",
        display: "certified vascular surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LGPC",
        display: "licensed general physician care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AALC",
        display: "accredited assisted living care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AAMC",
        display: "accredited ambulatory care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ABHC",
        display: "accredited behavioral health care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACAC",
        display: "accredited critical access hospital care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACHC",
        display: "accredited hospital care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AHOC",
        display: "accredited home care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALTC",
        display: "accredited long term care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AOSC",
        display: "accredited office-based surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CACS",
        display: "certified acute coronary syndrome care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAMI",
        display: "certified acute myocardial infarction care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAST",
        display: "certified asthma care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CBAR",
        display: "certified bariatric surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCAD",
        display: "certified coronary artery disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCAR",
        display: "certified cardiac care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDEP",
        display: "certified depression care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDGD",
        display: "certified digestive/gastrointestinal disorders care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDIA",
        display: "certified diabetes care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CEPI",
        display: "certified epilepsy care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CFEL",
        display: "certified frail elderly care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHFC",
        display: "certified heart failure care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHRO",
        display: "certified high risk obstetrics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHYP",
        display: "certified hyperlipidemia care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMIH",
        display: "certified migraine headache care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMSC",
        display: "certified multiple sclerosis care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COJR",
        display: "certified orthopedic joint replacement care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONC",
        display: "certified oncology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPD",
        display: "certified chronic obstructive pulmonary disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CORT",
        display: "certified organ transplant care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPAD",
        display: "certified parkinsons disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPND",
        display: "certified pneumonia disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPST",
        display: "certified primary stroke center care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSDM",
        display: "certified stroke disease management care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSIC",
        display: "certified sickle cell care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSLD",
        display: "certified sleep disorders care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSPT",
        display: "certified spine treatment care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTBU",
        display: "certified trauma/burn center care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CVDC",
        display: "certified vascular diseases care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CWMA",
        display: "certified wound management care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CWOH",
        display: "certified women's health care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeDetectedIssueManagementCode",
        display: "ActAdministrativeDetectedIssueManagementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "1",
        display: "Therapy Appropriate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "14",
        display: "Supply Appropriate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "8",
        display: "Other Action Taken",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActFinancialDetectedIssueManagementCode",
        display: "ActFinancialDetectedIssueManagementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HL7AccommodationCode",
        display: "HL7AccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HCPCSAccommodationCode",
        display: "HCPCSAccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
        display: "ambulatory",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMER",
        display: "emergency",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FLD",
        display: "field",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HH",
        display: "home health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMP",
        display: "inpatient encounter",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSENC",
        display: "observation encounter",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRENC",
        display: "pre-admission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SS",
        display: "short stay",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VR",
        display: "virtual",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHLDCARE",
        display: "Day care - Child care Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONVEYNC",
        display: "Common Conveyance Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HLTHCARE",
        display: "Health Care Interaction - Not Patient Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOMECARE",
        display: "Care Giver Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOSPPTNT",
        display: "Hospital Patient Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOSPVSTR",
        display: "Hospital Visitor Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOUSEHLD",
        display: "Household Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INMATE",
        display: "Inmate Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTIMATE",
        display: "Intimate Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LTRMCARE",
        display: "Long Term Care Facility Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLACE",
        display: "Common Space Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PTNTCARE",
        display: "Health Care Interaction - Patient Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHOOL2",
        display: "School Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SOCIAL2",
        display: "Social/Extended Family Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSTNCE",
        display: "Common Substance Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRAVINT",
        display: "Common Travel Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WORK2",
        display: "Work Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHRG",
        display: "Standard Charge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REV",
        display: "Standard Charge Reversal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDPRCD",
        display: "GDPR Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDPRResearchCD",
        display: "GDPR Research Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDPRCONSENT",
        display: "GDPR Consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OIC",
        display:
          "opt-in to personal information or effect collection in a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OIS",
        display:
          "opt-in to personal information or effect sharing via a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOC",
        display:
          "opt-out of personal information or effect collection in a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOS",
        display:
          "opt-out of personal information or effect sharing via a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENTAL",
        display: "dental care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISEASE",
        display: "disease specific policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUGPOL",
        display: "drug policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EHCPOL",
        display: "extended healthcare",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIP",
        display: "health insurance plan policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HSAPOL",
        display: "health spending account",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LTC",
        display: "long term care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MCPOL",
        display: "managed care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MENTPOL",
        display: "mental health policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "POS",
        display: "point of service policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBPOL",
        display: "substance use policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VISPOL",
        display: "vision care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MVA",
        display: "Motor vehicle accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHOOL",
        display: "School Accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPT",
        display: "Sporting Accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WPA",
        display: "Workplace accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPatientSafetyIncidentCode",
        display: "ActPatientSafetyIncidentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACADR",
        display: "adverse drug reaction access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACALL",
        display: "all access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACALLG",
        display: "allergy access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACCONS",
        display: "informational consent access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACDEMO",
        display: "demographics access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACDI",
        display: "diagnostic imaging access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACIMMUN",
        display: "immunization access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACLAB",
        display: "lab test result access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACMED",
        display: "medication access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACMEDC",
        display: "medical condition access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACMEN",
        display: "mental health access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACOBS",
        display: "common observations access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACPOLPRG",
        display: "policy or program information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACPROV",
        display: "provider information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACPSERV",
        display: "professional service access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACSUBSTAB",
        display: "substance abuse access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFAUT",
        display: "authorized information transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFCRT",
        display: "only on court order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFDNG",
        display: "only if danger to others",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFEMER",
        display: "only in an emergency",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFPWR",
        display: "only if public welfare risk",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFREG",
        display: "regulatory information transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOACCESS",
        display: "access information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOCOLLECT",
        display: "collect information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFODEIDENTIFIY",
        display: "deidentify information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFODISCLOSE",
        display: "disclose information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOMASK",
        display: "mask information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREADONLY",
        display: "read only information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREDACT",
        display: "redact information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREDISCLOSE",
        display: "redisclose information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREIDENTIFY",
        display: "reidentify information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOUSE",
        display: "use information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLCAT",
        display: "all categories",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLGCAT",
        display: "allergy category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ARCAT",
        display: "adverse drug reaction category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COBSCAT",
        display: "common observation category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEMOCAT",
        display: "demographics category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DICAT",
        display: "diagnostic image category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMUCAT",
        display: "immunization category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABCAT",
        display: "lab test category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDCCAT",
        display: "medical condition category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MENCAT",
        display: "mental health category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSVCCAT",
        display: "professional service category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXCAT",
        display: "medication category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisIP",
        display: "jurisdictional information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgIP",
        display: "organizational information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersIP",
        display: "personal information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ETH",
        display: "substance abuse information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDIS",
        display: "genetic disease information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIV",
        display: "HIV/AIDS information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MST",
        display: "military sexual trauma information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREGNANT",
        display: "pregnancy information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCA",
        display: "sickle cell anemia information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SDV",
        display:
          "sexual assault, abuse, or domestic violence information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SEX",
        display: "sexuality and reproductive health information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPI",
        display: "specially protected information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STD",
        display: "sexually transmitted disease information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TBOO",
        display: "taboo",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VIO",
        display: "violence information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IDS",
        display: "Identifier Sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SICKLE",
        display: "sickle cell",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTOPOL",
        display: "automobile",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PUBLICPOL",
        display: "public healthcare",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WCBPOL",
        display: "worker's compensation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActHealthInsuranceTypeCode",
        display: "ActHealthInsuranceTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIS",
        display: "disability insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EWB",
        display: "employee welfare benefit plan policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FLEXP",
        display: "flexible benefit plan policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LIFE",
        display: "life insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PNC",
        display: "property and casualty insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REI",
        display: "reinsurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SURPL",
        display: "surplus line insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UMBRL",
        display: "umbrella liability insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceAdjudicationPaymentGroupCode",
        display: "ActInvoiceAdjudicationPaymentGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoicePaymentCode",
        display: "ActInvoiceAdjudicationPaymentGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceAdjudicationPaymentSummaryCode",
        display: "ActInvoiceAdjudicationPaymentSummaryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALEC",
        display: "alternate electronic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BONUS",
        display: "bonus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CFWD",
        display: "carry forward adjusment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EDU",
        display: "education fees",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EPYMT",
        display: "early payment fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GARN",
        display: "garnishee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INVOICE",
        display: "submitted invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PINV",
        display: "paper invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PPRD",
        display: "prior period adjustment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROA",
        display: "professional association deduction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RECOV",
        display: "recovery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RETRO",
        display: "retro adjustment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRAN",
        display: "transaction fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INVTYPE",
        display: "invoice type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAYEE",
        display: "payee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAYOR",
        display: "payor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SENDAPP",
        display: "sending application",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNSPSC",
        display: "United Nations Standard Products and Services Classification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CPT5",
        display: "CPT5",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HCPCS",
        display: "HCPCS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ICD10PCS",
        display: "ICD10PCS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ICD9PCS",
        display: "ICD9PCS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailClinicalProductCode",
        display: "ActInvoiceDetailClinicalProductCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailDrugProductCode",
        display: "ActInvoiceDetailDrugProductCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericCode",
        display: "ActInvoiceDetailGenericCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailPreferredAccommodationCode",
        display: "ActInvoiceDetailPreferredAccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailClinicalServiceCode",
        display: "ActInvoiceDetailClinicalServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailOralHealthProcedureCode",
        display: "ActInvoiceDetailOralHealthProcedureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GTIN",
        display: "Global Trade Item Number",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UPC",
        display: "Universal Product Code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COIN",
        display: "coinsurance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPAYMENT",
        display: "patient co-pay",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEDUCTIBLE",
        display: "deductible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAY",
        display: "payment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPEND",
        display: "spend down",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COINS",
        display: "co-insurance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericAdjudicatorCode",
        display: "ActInvoiceDetailGenericAdjudicatorCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericModifierCode",
        display: "ActInvoiceDetailGenericModifierCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericProviderCode",
        display: "ActInvoiceDetailGenericProviderCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailTaxCode",
        display: "ActInvoiceDetailTaxCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AFTHRS",
        display: "non-normal hours",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ISOL",
        display: "isolation allowance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOO",
        display: "out of office",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CANCAPT",
        display: "cancelled appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DSC",
        display: "discount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ESA",
        display: "extraordinary service assessment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFSTOP",
        display: "fee for service top off",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FNLFEE",
        display: "final fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FRSTFEE",
        display: "first fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MARKUP",
        display: "markup or up-charge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MISSAPT",
        display: "missed appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERFEE",
        display: "periodic fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERMBNS",
        display: "performance bonus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RESTOCK",
        display: "restocking fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRAVEL",
        display: "travel",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "URGENT",
        display: "urgent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActEncounterAccommodationCode",
        display: "ActEncounterAccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FST",
        display: "federal sales tax",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HST",
        display: "harmonized sales Tax",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PST",
        display: "provincial/state sales tax",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceAdjudicationPaymentCode",
        display: "ActInvoiceAdjudicationPaymentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailCode",
        display: "ActInvoiceDetailCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceGroupCode",
        display: "ActInvoiceGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InvoiceElementAdjudicated",
        display: "InvoiceElementAdjudicated",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InvoiceElementPaid",
        display: "InvoiceElementPaid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InvoiceElementSubmitted",
        display: "InvoiceElementSubmitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceInterGroupCode",
        display: "ActInvoiceInterGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceRootGroupCode",
        display: "ActInvoiceRootGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPNDDRGING",
        display: "compound drug invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPNDINDING",
        display: "compound ingredient invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPNDSUPING",
        display: "compound supply invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUGING",
        display: "drug invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FRAMEING",
        display: "frame invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LENSING",
        display: "lens invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRDING",
        display: "product invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVGE",
        display: "coverage problem",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EFORM",
        display: "electronic form to follow",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FAX",
        display: "fax to follow",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GFTH",
        display: "good faith indicator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LATE",
        display: "late invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MANUAL",
        display: "manual review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOJ",
        display: "out of jurisdiction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ORTHO",
        display: "orthodontic service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAPER",
        display: "paper documentation to follow",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PIE",
        display: "public insurance exhausted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PYRDELAY",
        display: "delayed by a previous payor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REFNR",
        display: "referral not required",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REPSERV",
        display: "repeated service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNRELAT",
        display: "unrelated service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VERBAUTH",
        display: "verbal authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPINV",
        display: "clinical product invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CP",
        display: "clinical product invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSINV",
        display: "clinical service invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CS",
        display: "clinical service invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSPINV",
        display: "clinical service and product",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FININV",
        display: "financial invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OHSINV",
        display: "oral health service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAINV",
        display: "preferred accommodation invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PA",
        display: "preferred accommodation invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXCINV",
        display: "Rx compound invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXC",
        display: "Rx compound invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXDINV",
        display: "Rx dispense invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXD",
        display: "Rx dispense invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBFINV",
        display: "sessional or block fee invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VRXINV",
        display: "vision dispense invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActObservationList",
        display: "ActObservationList",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActTherapyDurationWorkingListCode",
        display: "ActTherapyDurationWorkingListCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDLIST",
        display: "medication list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProcedureCategoryList",
        display: "ActProcedureCategoryList",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALC",
        display: "Alternative Level of Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CARD",
        display: "Cardiology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHR",
        display: "Chronic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DNTL",
        display: "Dental",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRGRHB",
        display: "Drug Rehab",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GENRL",
        display: "General",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MED",
        display: "Medical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBS",
        display: "Obstetrics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ONC",
        display: "Oncology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PALL",
        display: "Palliative",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PED",
        display: "Pediatrics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PHAR",
        display: "Pharmaceutical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PHYRHB",
        display: "Physical Rehab",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSYCH",
        display: "Psychiatric",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SURG",
        display: "Surgical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACU",
        display: "short term/acute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHRON",
        display: "continuous/chronic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ONET",
        display: "one time",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRN",
        display: "as needed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTLSUB",
        display: "Controlled Substance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INV",
        display: "investigational",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LU",
        display: "limited use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OTC",
        display: "non prescription medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RX",
        display: "prescription only medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SA",
        display: "special authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SAC",
        display: "special access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND01",
        display: "imaging study requiring contrast",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND02",
        display: "colonoscopy prep",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND03",
        display: "prophylaxis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND04",
        display: "surgical prophylaxis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND05",
        display: "pregnancy prophylaxis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CARELIST",
        display: "care plan",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONDLIST",
        display: "condition list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GOALLIST",
        display: "goal list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VFPAPER",
        display: "verify paper",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VRFPAPER",
        display: "verify paper",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNDI",
        display: "diagnostic image note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNGEN",
        display: "general note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNIMM",
        display: "immunization note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNLAB",
        display: "laboratory note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNMED",
        display: "medication note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AFOOT",
        display: "pedestrian transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OnFoot",
        display: "pedestrian transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBT",
        display: "ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "Ambulance",
        display: "ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LAWENF",
        display: "law enforcement transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LawEnforcementVehicle",
        display: "law enforcement transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRVTRN",
        display: "private transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PrivateTransport",
        display: "private transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PUBTRN",
        display: "public transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PublicTransport",
        display: "public transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACH",
        display: "Automated Clearing House",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHK",
        display: "Cheque",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DDP",
        display: "Direct Deposit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NON",
        display: "Non-Payment Data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DF",
        display: "Daily Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EM",
        display: "Emergency Supply",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FF",
        display: "First Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FS",
        display: "Floor stock",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MS",
        display: "Manufacturer Sample",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RF",
        display: "Refill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UD",
        display: "Unit Dose",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UDE",
        display: "unit dose equivalent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActConsent",
        display: "_ActConsent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationActionPolicy",
        display: "_ActInformationActionPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationPolicy",
        display: "_ActInformationPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivacyPolicy",
        display: "ActPrivacyPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ActTrustPolicyType",
        display: "trust policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVPOL",
        display: "benefit policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SecurityPolicy",
        display: "security policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActGDPRConsentDirective",
        display: "_ActGDPRConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActGenericConsentDirective",
        display: "_ActGenericConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActUSPrivacyConsentDirective",
        display: "_ActUSPrivacyConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActGDPRPrivacyLaw",
        display: "General Data Protection Regulation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActUSPrivacyLaw",
        display: "_ActUSPrivacyLaw",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActConsentDirective",
        display: "ActConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivacyLaw",
        display: "ActPrivacyLaw",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InformationSensitivityPolicy",
        display: "InformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COMPT",
        display: "compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillableServiceCode",
        display: "ActBillableServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActOralHealthProcedureCode",
        display: "ActOralHealthProcedureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LOAN",
        display: "Loan",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRANSFER",
        display: "Transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHAR",
        display: "charity program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRIME",
        display: "crime victim program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EAP",
        display: "employee assistance program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GOVEMP",
        display: "government employee health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIRISK",
        display: "high risk pool program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND",
        display: "indigenous peoples health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MILITARY",
        display: "military health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RETIRE",
        display: "retiree health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SOCIAL",
        display: "social service program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VET",
        display: "veteran health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SREC",
        display: "specimen received",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SSTOR",
        display: "specimen in storage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STRAN",
        display: "specimen in transit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACID",
        display: "Acidification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALK",
        display: "Alkalization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEFB",
        display: "Defibrination",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FILT",
        display: "Filtration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LDLP",
        display: "LDL Precipitation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NEUT",
        display: "Neutralization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RECA",
        display: "Recalcification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UFIL",
        display: "Ultrafiltration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ARTBLD",
        display: "ActSpecObsArtBldCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DILUTION",
        display: "ActSpecObsDilutionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EVNFCTS",
        display: "ActSpecObsEvntfctsCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTFR",
        display: "ActSpecObsInterferenceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VOLUME",
        display: "ActSpecObsVolumeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUG",
        display: "Drug therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FD",
        display: "food",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMUNIZ",
        display: "Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AdministrationDetectedIssueCode",
        display: "AdministrationDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_SupplyDetectedIssueCode",
        display: "SupplyDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HISTORIC",
        display: "record recorded as historical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATPREF",
        display: "violates stated preferences",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OE",
        display: "order entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATDOC",
        display: "patient documentation task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATINFO",
        display: "patient information review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMedicationTherapyDurationWorkingListCode",
        display: "act medication therapy duration working list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPatientTransportationModeCode",
        display: "ActPatientTransportationModeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "42CFRPart2CD",
        display: "42 CFR Part 2 consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CompoundResearchCD",
        display:
          "Compound HIPAA Research Authorization and Informed Consent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAAuthCD",
        display: "HIPAA Authorization Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAConsentCD",
        display: "HIPAA Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAResearchAuthCD",
        display:
          "HIPAA Authorization for Disclosure for Research Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAROAD",
        display: "HIPAA Right of Access Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDHHS-5515",
        display:
          "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "42CFRPart2",
        display: "42 CFR Part2",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CommonRule",
        display: "Common Rule",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAAuth",
        display: "HIPAA Authorization for Disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAConsent",
        display: "HIPAA Consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAANOPP",
        display: "HIPAA notice of privacy practices",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAPsyNotes",
        display: "HIPAA psychotherapy notes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAROA",
        display: "HIPAA Right of Access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAASelfPay",
        display: "HIPAA self-pay",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "Title38Section7332",
        display: "Title 38 Section 7332",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "a) HIPAAConsent",
        display: "HIPAA Consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USResearchInformedAssent",
        display: "Informed Assent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USResearchInformedConsent",
        display: "Informed Consent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USBroadResearchConsent",
        display: "Broad Consent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AppropriatenessDetectedIssueCode",
        display: "AppropriatenessDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COMPLY",
        display: "Compliance Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DACT",
        display: "drug action detected issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSE",
        display: "Dosage problem",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPY",
        display: "Duplicate Therapy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIME",
        display: "timing detected issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_DrugActionDetectedIssueCode",
        display: "DrugActionDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_TimingDetectedIssueCode",
        display: "TimingDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPatientAnnotationType",
        display: "ActPatientAnnotationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGAnnotationType",
        display: "ECGAnnotationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InteractionDetectedIssueCode",
        display: "InteractionDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSA",
        display: "Observation Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREVINEF",
        display: "previously ineffective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMAUTH",
        display: "emergency authorization override",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AIRTRNS",
        display: "airborne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANANTRNS",
        display: "animal to animal transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANHUMTRNS",
        display: "animal to human transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BDYFLDTRNS",
        display: "body fluid contact transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BLDTRNS",
        display: "blood borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DERMTRNS",
        display: "transdermal transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENVTRNS",
        display: "environmental exposure transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FECTRNS",
        display: "fecal-oral transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FOMTRNS",
        display: "fomite transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FOODTRNS",
        display: "food-borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HUMHUMTRNS",
        display: "human to human transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INDTRNS",
        display: "indeterminate disease transmission mode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LACTTRNS",
        display: "lactation transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOSTRNS",
        display: "nosocomial transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PARTRNS",
        display: "parenteral transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLACTRNS",
        display: "transplacental transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SEXTRNS",
        display: "sexual transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRNSFTRNS",
        display: "transfusion transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VECTRNS",
        display: "vector-borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WATTRNS",
        display: "water-borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REPRESENTATIVE_BEAT",
        display: "ECG representative beat waveforms",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RHYTHM",
        display: "ECG rhythm waveforms",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEMO",
        display: "all demographic information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOB",
        display: "date of birth information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GENDER",
        display: "gender and sexual orientation information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LIVARG",
        display: "living arrangement information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MARST",
        display: "marital status information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATLOC",
        display: "patient location",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RACE",
        display: "race information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REL",
        display: "religion information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDACOATING",
        display: "coating",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDACOLOR",
        display: "color",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDAIMPRINTCD",
        display: "imprint code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDALOGO",
        display: "logo",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDASCORING",
        display: "scoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDASHAPE",
        display: "shape",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDASIZE",
        display: "size",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GENE",
        display: "gene",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "I",
        display: "Isolation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "P",
        display: "Private",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "S",
        display: "Suite",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SP",
        display: "Semi-private",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "W",
        display: "Ward",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActDetectedIssueCode",
        display: "ActDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HL7TriggerEventCode",
        display: "HL7TriggerEventCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_SubstanceAdministrationActCode",
        display: "SubstanceAdministrationActCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSANTC",
        display: "antigen count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSANTV",
        display: "antigen validity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAT_ADV_EVNT",
        display: "patient adverse event",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VAC_PROBLEM",
        display: "vaccine product problem",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationSensitivityPolicy",
        display: "ActInformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_EntitySensitivityPolicyType",
        display: "EntityInformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_RoleInformationSensitivityPolicy",
        display: "RoleInformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADOL",
        display: "adolescent information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CEL",
        display: "celebrity information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VIP",
        display: "celebrity information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIA",
        display: "diagnosis information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRGIS",
        display: "drug information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMP",
        display: "employee information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDS",
        display: "patient default information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PHY",
        display: "physician requested information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRS",
        display: "patient requested information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FOOD",
        display: "Food Interaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TPROD",
        display: "Therapeutic Product Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPELAT",
        display: "adjud. nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPELAT",
        display: "adjud. nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPELCT",
        display: "adjud. nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPELCT",
        display: "adjud. nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPMNAT",
        display: "adjud. nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPMNAT",
        display: "adjud. nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPMNCT",
        display: "adjud. nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPMNCT",
        display: "adjud. nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPELAT",
        display: "adjud. nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPELAT",
        display: "adjud. nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPELCT",
        display: "adjud. nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPELCT",
        display: "adjud. nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPMNAT",
        display: "adjud. nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPMNAT",
        display: "adjud. nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPMNCT",
        display: "adjud. nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPMNCT",
        display: "adjud. nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPELAT",
        display: "adjud. non-payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPELCT",
        display: "adjud. non-payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPMNAT",
        display: "adjud. non-payee payable prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPMNCT",
        display: "adjud. non-payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPELAT",
        display: "adjud. non-payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPELCT",
        display: "adjud. non-payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPMNAT",
        display: "adjud. non-payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPMNCT",
        display: "adjud. non-payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPELAT",
        display: "adjud. payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPELCT",
        display: "adjud. payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPMNAT",
        display: "adjud. payee payable prior-period manual amout",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPMNCT",
        display: "adjud. payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPELAT",
        display: "adjud. payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPELCT",
        display: "adjud. payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPMNAT",
        display: "adjud. payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPMNCT",
        display: "adjud. payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPELAT",
        display: "adjud. refused prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPELCT",
        display: "adjud. refused prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPMNAT",
        display: "adjud. refused prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPMNCT",
        display: "adjud. refused prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPELAT",
        display: "adjud. refused same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPELCT",
        display: "adjud. refused same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPMNAT",
        display: "adjud. refused same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPMNCT",
        display: "adjud. refused same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPELAT",
        display: "paid nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPELAT",
        display: "paid nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPELCT",
        display: "paid nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPELCT",
        display: "paid nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPMNAT",
        display: "paid nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPMNAT",
        display: "paid nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPMNCT",
        display: "paid nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPMNCT",
        display: "paid nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPELAT",
        display: "paid nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPELAT",
        display: "paid nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPELCT",
        display: "paid nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPELCT",
        display: "paid nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPMNAT",
        display: "paid nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPMNAT",
        display: "paid nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPMNCT",
        display: "paid nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPMNCT",
        display: "paid nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPELAT",
        display: "paid non-payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPELCT",
        display: "paid non-payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPMNAT",
        display: "paid non-payee payable prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPMNCT",
        display: "paid non-payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPELAT",
        display: "paid non-payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPELCT",
        display: "paid non-payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPMNAT",
        display: "paid non-payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPMNCT",
        display: "paid non-payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPELAT",
        display: "paid payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPELCT",
        display: "paid payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPMNAT",
        display: "paid payee payable prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPMNCT",
        display: "paid payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPELAT",
        display: "paid payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPELCT",
        display: "paid payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPMNAT",
        display: "paid payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPMNCT",
        display: "paid payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLELAT",
        display: "submitted billed electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLAT",
        display: "submitted billed electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLELCT",
        display: "submitted billed electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLCT",
        display: "submitted billed electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBNFELAT",
        display: "submitted nullified electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBCNAT",
        display: "submitted nullified electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBNFELCT",
        display: "submitted cancelled electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBCNCT",
        display: "submitted cancelled electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDELAT",
        display: "submitted pending electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDAT",
        display: "submitted pending electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDELCT",
        display: "submitted pending electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDCT",
        display: "submitted pending electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "21611-9",
        display: "age patient qn est",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "21612-7",
        display: "age patient qn reported",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "29553-5",
        display: "age patient qn calc",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "30525-0",
        display: "age patient qn definition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "30972-4",
        display: "age at onset of adverse event",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REP_HALF_LIFE",
        display: "representative half-life",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLCOATING",
        display: "coating",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLCOLOR",
        display: "color",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLIMAGE",
        display: "image",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLIMPRINT",
        display: "imprint",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSCORING",
        display: "scoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSHAPE",
        display: "shape",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSIZE",
        display: "size",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSYMBOL",
        display: "symbol",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADMDX",
        display: "admitting diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISDX",
        display: "discharge diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTDX",
        display: "intermediate diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOI",
        display: "nature of injury",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CaseTransmissionMode",
        display: "case transmission mode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AGGREGATE",
        display: "aggregate measure observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMPMSRMTH",
        display: "composite measure method",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMPMSRSCRWGHT",
        display: "component measure scoring weight",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPY",
        display: "copyright",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRS",
        display: "clinical recommendation statement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEF",
        display: "definition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISC",
        display: "disclaimer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FINALDT",
        display: "finalized date/time",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GUIDE",
        display: "guidance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IDUR",
        display: "improvement notation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ITMCNT",
        display: "items counted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY",
        display: "keyword",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDT",
        display: "measurement end date",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSD",
        display: "measurement start date",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRADJ",
        display: "risk adjustment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRAGG",
        display: "rate aggregation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRIMPROV",
        display: "health quality measure improvement notation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRJUR",
        display: "jurisdiction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRRPTR",
        display: "reporter type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRRPTTIME",
        display: "timeframe for reporting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRSCORE",
        display: "measure scoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRSET",
        display: "health quality measure care setting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRTOPIC",
        display: "health quality measure topic type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRTP",
        display: "measurement period",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRTYPE",
        display: "measure type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RAT",
        display: "rationale",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REF",
        display: "reference",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SDE",
        display: "supplemental data elements",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STRAT",
        display: "stratification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRANF",
        display: "transmission format",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USE",
        display: "notice of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIME_ABSOLUTE",
        display: "absolute time sequence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIME_RELATIVE",
        display: "relative time sequence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGObservationSequenceType",
        display: "ECGObservationSequenceType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGObservationSeriesType",
        display: "ECGObservationSeriesType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSpecObsCode",
        display: "ActSpecObsCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AnnotationType",
        display: "AnnotationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_GeneticObservationType",
        display: "GeneticObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ImmunizationObservationType",
        display: "ImmunizationObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_IndividualCaseSafetyReportType",
        display: "Individual Case Safety Report Type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_LOINCObservationActContextAgeType",
        display: "LOINCObservationActContextAgeType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_MedicationObservationType",
        display: "MedicationObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationIssueTriggerCodedObservationType",
        display: "ObservationIssueTriggerCodedObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationQualityMeasureAttribute",
        display: "ObservationQualityMeasureAttribute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationSequenceType",
        display: "ObservationSequenceType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationSeriesType",
        display: "ObservationSeriesType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PatientImmunizationRelatedObservationType",
        display: "PatientImmunizationRelatedObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PopulationInclusionObservationType",
        display: "PopulationInclusionObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PreferenceObservationType",
        display: "_PreferenceObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADVERSE_REACTION",
        display: "Adverse Reaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ASSERTION",
        display: "Assertion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CASESER",
        display: "case seriousness criteria",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDIO",
        display: "case disease imported observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRIT",
        display: "criticality",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTMO",
        display: "case transmission mode observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DX",
        display: "ObservationDiagnosisTypes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationDiagnosisTypes",
        display: "ObservationDiagnosisTypes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GISTIER",
        display: "GIS tier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HHOBS",
        display: "household situation observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ISSUE",
        display: "detected issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KSUBJ",
        display: "knowledge subject",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KSUBT",
        display: "knowledge subtopic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OINT",
        display: "intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SEV",
        display: "Severity Observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivilegeCategorizationType",
        display: "ActPrivilegeCategorizationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AdverseSubstanceAdministrationEventActionTakenType",
        display: "AdverseSubstanceAdministrationEventActionTakenType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CommonClinicalObservationType",
        display: "CommonClinicalObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_FDALabelData",
        display: "FDALabelData",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationAllergyTestCode",
        display: "observation allergy test",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationAllergyTestType",
        display: "ObservationAllergyTestType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationCausalityAssessmentType",
        display: "observation causality assessment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationDosageDefinitionPreconditionType",
        display: "observation dosage definition precondition type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationGenomicFamilyHistoryType",
        display: "ObservationGenomicFamilyHistoryType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationIndicationType",
        display: "ObservationIndicationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationIssueTriggerMeasuredObservationType",
        display: "ObservationIssueTriggerMeasuredObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationQueryMatchType",
        display: "ObservationQueryMatchType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationVisionPrescriptionType",
        display: "ObservationVisionPrescriptionType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PatientCharacteristicObservationType",
        display: "PatientCharacteristicObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_SimpleMeasurableClinicalObservationType",
        display: "SimpleMeasurableClinicalObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CLSSRM",
        display: "classroom",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GRADE",
        display: "grade",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHL",
        display: "school",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHLDIV",
        display: "school division",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TEACHER",
        display: "teacher",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENEX",
        display: "denominator exclusions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENEXCEP",
        display: "denominator exceptions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENOM",
        display: "denominator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IPOP",
        display: "initial population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSROBS",
        display: "measure observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRPOPL",
        display: "measure population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRPOPLEX",
        display: "measure population exclusions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NUMER",
        display: "numerator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NUMEX",
        display: "numerator exclusions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREFSTRENGTH",
        display: "preference strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CIRCLE",
        display: "circle",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ELLIPSE",
        display: "ellipse",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "POINT",
        display: "point",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "POLY",
        display: "polyline",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "B",
        display: "business information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMPL",
        display: "employer information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LOCIS",
        display: "location information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SSP",
        display: "sensitive service provider information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLDONE",
        display: "already performed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FULFIL",
        display: "fulfillment alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HELD",
        display: "held/suspended alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TOOLATE",
        display: "Refill Too Late Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TOOSOON",
        display: "Refill Too Soon Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENDLATE",
        display: "End Too Late Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STRTLATE",
        display: "Start Too Late Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "19",
        display: "Consulted Supplier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "2",
        display: "Assessed Patient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "22",
        display: "appropriate indication or diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "23",
        display: "prior therapy documented",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "3",
        display: "Patient Explanation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "4",
        display: "Consulted Other Source",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "5",
        display: "Consulted Prescriber",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "7",
        display: "Interacting Therapy No Longer Active/Planned",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "15",
        display: "Replacement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "16",
        display: "Vacation Supply",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "17",
        display: "Weekend Supply",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "18",
        display: "Leave of Absence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "20",
        display: "additional quantity on separate dispense",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "6",
        display: "Prescriber Declined Change",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "10",
        display: "Provided Patient Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "11",
        display: "Added Concurrent Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "12",
        display: "Temporarily Suspended Concurrent Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "13",
        display: "Stopped Concurrent Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "9",
        display: "Instituted Ongoing Monitoring Program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANF",
        display: "adjudicated with adjustments and no financial impact",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTACCRD",
        display: "trust accreditation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTAGRE",
        display: "trust agreement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTASSUR",
        display: "trust assurance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTCERT",
        display: "trust certificate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTFWK",
        display: "trust framework",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTMEC",
        display: "trust mechanism",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADALRT",
        display: "adult alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHINDA",
        display: "High Dose for Age Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELINDA",
        display: "Low Dose for Age Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GEALRT",
        display: "geriatric alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PEALRT",
        display: "pediatric alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DALG",
        display: "Drug Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EALG",
        display: "Environmental Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FALG",
        display: "Food Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBAIR",
        display: "fixed-wing ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "Fixed-wingAmbulance",
        display: "fixed-wing ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBGRND",
        display: "ground ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GroundAmbulance",
        display: "ground ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBHELO",
        display: "helicopter ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HelicopterAmbulance",
        display: "helicopter ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACCESSCONSCHEME",
        display: "access control scheme",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COL",
        display: "collision coverage policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNINSMOT",
        display: "uninsured motorist policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COGN",
        display: "cognitive disability information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DVD",
        display: "developmental disability information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMOTDIS",
        display: "emotional disturbance information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AE",
        display: "American Express",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DN",
        display: "Diner's Club",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DV",
        display: "Discover Card",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MC",
        display: "Master Card",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "V",
        display: "Visa",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIAGLISTE",
        display: "diagnosis list entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCHINSTE",
        display: "discharge instruction entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCHSUME",
        display: "discharge summary entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATEDUE",
        display: "patient education entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATREPE",
        display: "pathology report entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROBLISTE",
        display: "problem list entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RADREPE",
        display: "radiology report entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCHSUMREV",
        display: "discharge summary review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CODE_DEPREC",
        display: "code has been deprecated",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ABUSE",
        display: "commonly abused/misused alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FRAUD",
        display: "potential fraud",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLYDOC",
        display: "Poly-orderer Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLYPHRM",
        display: "Poly-supplier Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACOCOMPT",
        display: "accountable care organization compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDSSCOMPT",
        display: "CDS system compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTCOMPT",
        display: "care team compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FMCOMPT",
        display: "financial management compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HRCOMPT",
        display: "human resource compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LRCOMPT",
        display: "legitimate relationship compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PACOMPT",
        display: "patient administration compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RESCOMPT",
        display: "research project compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RMGTCOMPT",
        display: "records management compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HGHT",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LACT",
        display: "Lactation Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREG",
        display: "Pregnancy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WGHT",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTOLIST",
        display: "intolerance list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROBLIST",
        display: "problem list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RISKLIST",
        display: "risk factors",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONTROLLED",
        display: "CONTROLLED",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUI",
        display: "CUI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIHLTH",
        display: "CUI//HLTH",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIHLTHP",
        display: "(CUI//HLTH)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIP",
        display: "(CUI)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIPRVCY",
        display: "CUI//PRVCY",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIPRVCYP",
        display: "(CUI//PRVCY)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-HLTH",
        display: "CUI//SP-HLTH",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-HLTHP",
        display: "(CUI//SP-HLTH)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-PRVCY",
        display: "CUI//SP-PRVCY",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-PRVCYP",
        display: "(CUI//SP-PRVCY)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UUI",
        display: "(U)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYCC",
        display: "comply with confidentiality code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYCD",
        display: "comply with consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYCUI",
        display: "comply with controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYJPP",
        display: "comply with jurisdictional privacy policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYJSP",
        display: "comply with jurisdictional security policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYOPP",
        display: "comply with organizational privacy policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYOSP",
        display: "comply with organizational security policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_DEADrugSchedule",
        display: "DEADrugSchedule",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BR",
        display: "breikost (GE)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DM",
        display: "diabetes mellitus diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FAST",
        display: "fasting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FORMULA",
        display: "formula diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GF",
        display: "gluten free",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LF",
        display: "low fat",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LP",
        display: "low protein",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LQ",
        display: "liquid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LS",
        display: "low sodium",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "N",
        display: "normal diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NF",
        display: "no fat",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAF",
        display: "phenylalanine free",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAR",
        display: "parenteral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RD",
        display: "reduction diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCH",
        display: "schonkost (GE)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUPPLEMENT",
        display: "nutritional supplement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "T",
        display: "tea only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VLI",
        display: "low valin, leucin, isoleucin",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTO-HIGH",
        display: "Auto-High Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTO-LOW",
        display: "Auto-Low Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRE",
        display: "Pre-Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RERUN",
        display: "Rerun Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DNAINT",
        display: "Drug Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CANPRG",
        display: "women's cancer detection program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENDRENAL",
        display: "end renal program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIVAIDS",
        display: "HIV-AIDS program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSECOND",
        display: "dosage-condition alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDUR",
        display: "Dose-Duration Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEH",
        display: "High Dose Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEIVL",
        display: "Dose-Interval Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEL",
        display: "Low Dose Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDOSE",
        display: "maximum dosage reached",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURH",
        display: "Dose-Duration High Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURL",
        display: "Dose-Duration Low Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURHIND",
        display: "Dose-Duration High for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURLIND",
        display: "Dose-Duration Low for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHIND",
        display: "High Dose for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHINDSA",
        display: "High Dose for Height/Surface Area Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHINDW",
        display: "High Dose for Weight Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEIVLIND",
        display: "Dose-Interval for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELIND",
        display: "Low Dose for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELINDSA",
        display: "Low Dose for Height/Surface Area Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELINDW",
        display: "Low Dose for Weight Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPCLS",
        display: "duplicate therapeutic alass alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPGEN",
        display: "duplicate generic alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENAINT",
        display: "Environmental Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SO",
        display: "Script Owing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "21",
        display: "authorization confirmed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPTR",
        display: "encrypt at rest",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPTT",
        display: "encrypt in transit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPTU",
        display: "encrypt in use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFC",
        display: "First Fill - Complete",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFP",
        display: "First Fill - Part Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFPS",
        display: "first fill, part fill, partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFSS",
        display: "first fill, partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TF",
        display: "Trial Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFCS",
        display: "first fill complete, partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TFS",
        display: "trial fill partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FNAINT",
        display: "Food Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTACTN",
        display: "no longer actionable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTEQUIV",
        display: "not equivalent alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIMING",
        display: "event timing incorrect alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BOOSTER",
        display: "Booster Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INITIMMUNIZ",
        display: "Initial Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACUTE",
        display: "inpatient acute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NONAC",
        display: "inpatient non-acute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFAO",
        display: "access only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFASO",
        display: "access and save only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFCON",
        display: "after explicit consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FIBRIN",
        display: "Fibrin",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HEMOLYSIS",
        display: "Hemolysis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ICTERUS",
        display: "Icterus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LIPEMIA",
        display: "Lipemia",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IPPOP",
        display: "initial patient population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeDetectedIssueCode",
        display: "ActAdministrativeDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSuppliedItemDetectedIssueCode",
        display: "ActSuppliedItemDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActFinancialDetectedIssueCode",
        display: "ActFinancialDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ClinicalActionDetectedIssueCode",
        display: "ClinicalActionDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAREGAP",
        display: "Caregap",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CODINGGAP",
        display: "Codinggap",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisCUI",
        display: "jurisdictional controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisDEID",
        display: "jurisdictional de-identified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisLDS",
        display: "jurisdictional limited data set",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisNSI",
        display: "jurisdictional non-sensitive information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisPI",
        display: "jurisdictional public information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisSP-CUI",
        display:
          "jurisdictional specified controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisUUI",
        display: "jurisdictional uncontrolled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LEN_LONG",
        display: "length is too long",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LEN_SHORT",
        display: "length is too short",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNU",
        display: "annuity policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TLIFE",
        display: "term life insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ULIFE",
        display: "universal life insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RENT",
        display: "Rent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HMO",
        display: "health maintenance organization policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PPO",
        display: "preferred provider organization policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDHHS-5515MMHC",
        display:
          "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-Michigan Mental Health Code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDHHS-5515Part2",
        display:
          "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-US 42 CFR Part 2",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CURMEDLIST",
        display: "current medication list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCMEDLIST",
        display: "discharge medication list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HISTMEDLIST",
        display: "medication history",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MICROORGRREV",
        display: "microbiology organisms results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MICROSENSRREV",
        display: "microbiology sensitivity test results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MARWLREV",
        display: "medication administration record work list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTEQUIVGEN",
        display: "not generically equivalent alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTEQUIVTHER",
        display: "not therapeutically equivalent alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANONY",
        display: "anonymize",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AOD",
        display: "accounting of disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUDIT",
        display: "audit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUDTR",
        display: "audit trail",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYPOL",
        display: "comply with policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DECLASSIFYLABEL",
        display: "declassify security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEID",
        display: "deidentify",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DELAU",
        display: "delete after use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOWNGRDLABEL",
        display: "downgrade security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRIVLABEL",
        display: "derive security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPT",
        display: "encrypt",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HUAPRV",
        display: "human approval",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABEL",
        display: "assign security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MASK",
        display: "mask",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MINEC",
        display: "minimum necessary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERSISTLABEL",
        display: "persist security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRIVMARK",
        display: "privacy mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSEUD",
        display: "pseudonymize",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REDACT",
        display: "redact",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UPGRDLABEL",
        display: "upgrade security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROCESSINLINELABEL",
        display: "process inline security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AGE",
        display: "Age Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COND",
        display: "Condition Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CREACT",
        display: "common reaction alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GEN",
        display: "Genetic Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GEND",
        display: "Gender Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LAB",
        display: "Lab Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REACT",
        display: "Reaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RREACT",
        display: "Related Reaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABOE",
        display: "laboratory test order entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDOE",
        display: "medication order entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALG",
        display: "Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DINT",
        display: "Drug Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EINT",
        display: "Environmental Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FINT",
        display: "Food Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NAINT",
        display: "Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgCUI",
        display:
          "organizational basic controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgDEID",
        display: "organizational de-identified informati)on policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgLDS",
        display: "organizational limited data set information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgNSI",
        display: "organizational non-sensitive information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgPI",
        display: "organizational public information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgSP-CUI",
        display:
          "organizational specified controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgUUI",
        display: "organizational uncontrolled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLERLREV",
        display: "allergy list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CLINNOTEE",
        display: "clinical note entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMLREV",
        display: "immunization list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REMLREV",
        display: "reminder list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLERLE",
        display: "allergy list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDSREV",
        display: "clinical decision support intervention review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CLINNOTEREV",
        display: "clinical note review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIAGLISTREV",
        display: "diagnosis list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMLE",
        display: "immunization list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABRREV",
        display: "laboratory results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MICRORREV",
        display: "microbiology results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MLREV",
        display: "medication list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OREV",
        display: "orders review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATREPREV",
        display: "pathology report review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROBLISTREV",
        display: "problem list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RADREPREV",
        display: "radiology report review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REMLE",
        display: "reminder list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RISKASSESS",
        display: "risk assessment instrument task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATPREFALT",
        display: "violates stated preferences, alternate available",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersDEID",
        display: "personal de-identified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersLDS",
        display: "personal limited data set information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersNSI",
        display: "personal non-sensitive information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersPI",
        display: "personal public information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ControlledUnclassifiedInformation",
        display: "ControlledUnclassifiedInformation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SecurityLabelMark",
        display: "Security Label Mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIMark",
        display: "CUI Mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENTPRG",
        display: "dental program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISEASEPRG",
        display: "public health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MANDPOL",
        display: "mandatory health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MENTPRG",
        display: "mental health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SAFNET",
        display: "safety net clinic program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBPRG",
        display: "substance use program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSIDIZ",
        display: "subsidized health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALGY",
        display: "Allergy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INT",
        display: "Intolerance Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOAUTH",
        display: "no disclosure without subject authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOCOLLECT",
        display: "no collection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NODSCLCD",
        display: "no disclosure without consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NODSCLCDS",
        display:
          "no disclosure without information subject's consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOINTEGRATE",
        display: "no integration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOLIST",
        display: "no unlisted entity disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOMOU",
        display: "no disclosure without MOU",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOORGPOL",
        display: "no disclosure without organizational authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPAT",
        display:
          "no disclosure to patient, family or caregivers without attending provider's authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPERSISTP",
        display: "no collection beyond purpose of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSCLCD",
        display: "no redisclosure without consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSLCD",
        display: "no redisclosure without consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSCLCDS",
        display:
          "no redisclosure without information subject's consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSCLW",
        display: "no disclosure without jurisdictional authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORELINK",
        display: "no relinking",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOREUSE",
        display: "no reuse beyond purpose of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOVIP",
        display: "no unauthorized VIP disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ORCON",
        display: "no disclosure without originator authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WELLREMLE",
        display: "wellness reminder list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WELLREMLREV",
        display: "wellness reminder list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MAXOCCURS",
        display: "repetitions above maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MINOCCURS",
        display: "repetitions below minimum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RSDID",
        display: "de-identified information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RSREID",
        display: "re-identifiable information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFC",
        display: "Refill - Complete",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFF",
        display: "Refill (First fill this facility)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFS",
        display: "refill partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TB",
        display: "Trial Balance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFCS",
        display: "refill complete partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFFS",
        display: "refill partial strength (first fill this facility)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFPS",
        display: "refill part fill partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FALLRISK",
        display: "falls risk assessment instrument task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RALG",
        display: "Related Allergy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RAR",
        display: "Related Prior Reaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RINT",
        display: "Related Intolerance Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECALTINTOBS",
        display: "security alteration integrity observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECDATINTOBS",
        display: "security data integrity observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTCONOBS",
        display: "security integrity confidence observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTPRVOBS",
        display: "security integrity provenance observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTSTOBS",
        display: "security integrity status observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTPRVABOBS",
        display: "security integrity provenance asserted by observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTPRVRBOBS",
        display: "security integrity provenance reported by observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECCATOBS",
        display: "security category observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECCLASSOBS",
        display: "security classification observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECCONOBS",
        display: "security control observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTOBS",
        display: "security integrity observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECTRSTOBS",
        display: "SECTRSTOBS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTACCRDOBS",
        display: "trust accreditation observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTAGREOBS",
        display: "trust agreement observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTCERTOBS",
        display: "trust certificate observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTFWKOBS",
        display: "trust framework observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTLOAOBS",
        display: "trust assurance observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTMECOBS",
        display: "trust mechanism observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ConfidentialMark",
        display: "confidential mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPYMark",
        display: "copy of original mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DeliverToAddresseeOnlyMark",
        display: "deliver only to addressee mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RedisclosureProhibitionMark",
        display: "prohibition against redisclosure mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RestrictedConfidentialityMark",
        display: "restricted confidentiality mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRAFTMark",
        display: "Draft Mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTHPOL",
        display: "authorization policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DELEPOL",
        display: "delegation policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ObligationPolicy",
        display: "obligation policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PrivacyMark",
        display: "privacy mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RefrainPolicy",
        display: "refrain policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BH",
        display: "behavioral health information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MH",
        display: "mental health information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSY",
        display: "psychiatry disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSYTHPN",
        display: "psychotherapy note information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUD",
        display: "substance use disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSIDMC",
        display: "subsidized managed care program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSUPP",
        display: "subsidized supplemental health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ETHUD",
        display: "alcohol use disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPIOIDUD",
        display: "opioid use disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TBS",
        display: "trial balance partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALRTENDLATE",
        display: "end too late alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALRTSTRTLATE",
        display: "start too late alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTERVAL",
        display: "outside requested time",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MINFREQ",
        display: "too soon within frequency based on the usage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRG",
        display: "Drug Interaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NHP",
        display: "Natural Health Product Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NONRX",
        display: "Non-Prescription Interaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SALE",
        display: "Sale",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BUS",
        display: "business constraint violation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CODE_INVAL",
        display: "code is not valid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FORMAT",
        display: "invalid format",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ILLEGAL",
        display: "illegal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LEN_RANGE",
        display: "length out of range",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MISSCOND",
        display: "conditional element missing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MISSMAND",
        display: "mandatory element missing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NODUPS",
        display: "duplicate values are not permitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPERSIST",
        display: "element will not be persisted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REP_RANGE",
        display: "repetitions out of range",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AVAILABLE",
        display: "Available Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONSUMPTION",
        display: "Consumption Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CURRENT",
        display: "Current Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INITIAL",
        display: "Initial Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAccountCode",
        display: "ActAccountCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationCode",
        display: "ActAdjudicationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationResultActionCode",
        display: "ActAdjudicationResultActionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillableModifierCode",
        display: "ActBillableModifierCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillingArrangementCode",
        display: "ActBillingArrangementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBoundedROICode",
        display: "ActBoundedROICode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCareProvisionCode",
        display: "act care provision",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActClaimAttachmentCategoryCode",
        display: "ActClaimAttachmentCategoryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActConsentType",
        display: "ActConsentType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActContainerRegistrationCode",
        display: "ActContainerRegistrationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActControlVariable",
        display: "ActControlVariable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageConfirmationCode",
        display: "ActCoverageConfirmationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageLimitCode",
        display: "ActCoverageLimitCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageTypeCode",
        display: "ActCoverageTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActDetectedIssueManagementCode",
        display: "ActDetectedIssueManagementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActExposureCode",
        display: "ActExposureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActFinancialTransactionCode",
        display: "ActFinancialTransactionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActIncidentCode",
        display: "ActIncidentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationAccessCode",
        display: "ActInformationAccessCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationAccessContextCode",
        display: "ActInformationAccessContextCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationCategoryCode",
        display: "ActInformationCategoryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceElementCode",
        display: "ActInvoiceElementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceElementSummaryCode",
        display: "ActInvoiceElementSummaryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceOverrideCode",
        display: "ActInvoiceOverrideCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActListCode",
        display: "ActListCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMonitoringProtocolCode",
        display: "ActMonitoringProtocolCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActNonObservationIndicationCode",
        display: "ActNonObservationIndicationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActObservationVerificationType",
        display: "act observation verification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPaymentCode",
        display: "ActPaymentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPharmacySupplyType",
        display: "ActPharmacySupplyType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPolicyType",
        display: "ActPolicyType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProductAcquisitionCode",
        display: "ActProductAcquisitionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSpecimenTransportCode",
        display: "ActSpecimenTransportCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSpecimenTreatmentCode",
        display: "ActSpecimenTreatmentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSubstanceAdministrationCode",
        display: "ActSubstanceAdministrationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActTaskCode",
        display: "ActTaskCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActTransportationModeCode",
        display: "ActTransportationModeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationType",
        display: "ObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ROIOverlayShape",
        display: "ROIOverlayShape",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "C",
        display: "corrected",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIET",
        display: "Diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUGPRG",
        display: "drug program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "F",
        display: "final",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRLMN",
        display: "preliminary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECOBS",
        display: "SecurityObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSIDFFS",
        display: "subsidized fee for service program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WRKCOMP",
        display: "(workers compensation program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationInformationCode",
        display: "ActAdjudicationInformationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillableTreatmentPlanCode",
        display: "ActBillableTreatmentPlanCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCognitiveProfessionalServiceCode",
        display: "ActCognitiveProfessionalServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActIdentityDocumentCode",
        display: "ActIdentityDocumentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActOrderCode",
        display: "ActOrderCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivilegeCategorization",
        display: "ActPrivilegeCategorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProcedureCode",
        display: "ActProcedureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActRegistryCode",
        display: "ActRegistryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSecurityObjectCode",
        display: "ActSecurityObjectCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AdvanceBeneficiaryNoticeType",
        display: "AdvanceBeneficiaryNoticeType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CPT4",
        display: "CPT4",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ExternallyDefinedActCodes",
        display: "ExternallyDefinedActCodes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HL7DefinedActCodes",
        display: "HL7DefinedActCodes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_IndividualCaseSafetyReportCriteria",
        display: "IndividualCaseSafetyReportCriteria",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_IndividualCaseSafetyReportProductCharacteristic",
        display: "IndividualCaseSafetyReportProductCharacteristic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationActAgeGroupType",
        display: "ObservationActAgeGroupType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPAY",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEDUCT",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEIND",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRA",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STORE",
        display: "Storage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACCTRECEIVABLE",
        display: "account receivable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CASH",
        display: "Cash",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CC",
        display: "credit card",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PBILLACCT",
        display: "patient billing account",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CreditCard",
        display: "CreditCard",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationGroupCode",
        display: "ActAdjudicationGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AA",
        display: "adjudicated with adjustments",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AR",
        display: "adjudicated as refused",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AS",
        display: "adjudicated as submitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONT",
        display: "contract",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DAY",
        display: "day",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LOC",
        display: "location",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MONTH",
        display: "month",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERIOD",
        display: "period",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROV",
        display: "provider",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WEEK",
        display: "week",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "YEAR",
        display: "year",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISPLAY",
        display: "Display",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FORM",
        display: "Print on Form",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NAT",
        display: "Insufficient authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUPPRESSED",
        display: "record suppressed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VALIDAT",
        display: "validation issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeAuthorizationDetectedIssueCode",
        display: "ActAdministrativeAuthorizationDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeRuleDetectedIssueCode",
        display: "ActAdministrativeRuleDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AuthorizationIssueManagementCode",
        display: "Authorization Issue Management Code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY204",
        display: "Unknown key identifier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY205",
        display: "Duplicate key identifier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY206",
        display: "non-matching identification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSOLETE",
        display: "obsolete record returned",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPTM",
        display: "CPT modifier codes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HCPCSA",
        display: "HCPCS Level II and Carrier-assigned",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMedicalBillableServiceCode",
        display: "ActMedicalBillableServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActNonMedicalBillableServiceCode",
        display: "ActNonMedicalBillableServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BLK",
        display: "block funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAP",
        display: "capitation funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONTF",
        display: "contract funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FINBILL",
        display: "financial",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ROST",
        display: "roster funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SESS",
        display: "sessional funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFS",
        display: "fee for service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ROIFS",
        display: "fully specified ROI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ROIPS",
        display: "partially specified ROI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCredentialedCareCode",
        display: "act credentialed care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActEncounterCode",
        display: "ActEncounterCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMedicalServiceCode",
        display: "ActMedicalServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTOATTCH",
        display: "auto attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOCUMENT",
        display: "document",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HEALTHREC",
        display: "health record",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMG",
        display: "image attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABRESULTS",
        display: "lab results",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MODEL",
        display: "model",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WIATTCH",
        display: "work injury report attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "XRAY",
        display: "x-ray",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActDecision",
        display: "_ActDecision",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivacyConsentDirective",
        display: "_ActPrivacyConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMRGONLY",
        display: "emergency only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GRANTORCHOICE",
        display: "grantor choice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMPLIED",
        display: "implied consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMPLIEDD",
        display: "implied consent with opportunity to dissent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOCONSENT",
        display: "no consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPP",
        display: "notice of privacy practices",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTIN",
        display: "opt-in",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTINR",
        display: "opt-in with restrictions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTOUT",
        display: "op-out",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTOUTE",
        display: "opt-out with exceptions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ICOL",
        display: "information collection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IDSCL",
        display: "information disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFA",
        display: "information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IRDSCL",
        display: "information redisclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RESEARCH",
        display: "research information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ID",
        display: "Identified",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IP",
        display: "In Position",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "L",
        display: "Left Equipment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "M",
        display: "Missing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "O",
        display: "In Process",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "R",
        display: "Process Completed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "X",
        display: "Container Unavailable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTO",
        display: "auto-repeat permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENDC",
        display: "endogenous content",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REFLEX",
        display: "reflex permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGControlVariable",
        display: "ECGControlVariable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTH",
        display: "Authorized",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NAUTH",
        display: "Not Authorized",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageAuthorizationConfirmationCode",
        display: "ActCoverageAuthorizationConfirmationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageEligibilityConfirmationCode",
        display: "ActCoverageEligibilityConfirmationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ELG",
        display: "Eligible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NELG",
        display: "Not Eligible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageQuantityLimitCode",
        display: "ActCoverageQuantityLimitCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVMX",
        display: "coverage maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoveredPartyLimitCode",
        display: "ActCoveredPartyLimitCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVPRD",
        display: "coverage period",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LFEMX",
        display: "life time maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NETAMT",
        display: "Net Amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRDMX",
        display: "period maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNITPRICE",
        display: "Unit Price",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNITQTY",
        display: "Unit Quantity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInsurancePolicyCode",
        display: "ActInsurancePolicyCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInsuranceTypeCode",
        display: "ActInsuranceTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProgramTypeCode",
        display: "ActProgramTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoveragePartyLimitGroupCode",
        display: "ActCoveragePartyLimitGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCredentialedCareProvisionPersonCode",
        display: "act credentialed care provision peron",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCredentialedCareProvisionProgramCode",
        display: "act credentialed care provision program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CACC",
        display: "certified anatomic pathology and clinical pathology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAIC",
        display: "certified allergy and immunology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAMC",
        display: "certified aerospace medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CANC",
        display: "certified anesthesiology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAPC",
        display: "certified anatomic pathology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CBGC",
        display: "certified clinical biochemical genetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCCC",
        display: "certified clinical cytogenetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCGC",
        display: "certified clinical genetics (M.D.) care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCPC",
        display: "certified clinical pathology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCSC",
        display: "certified colon and rectal surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDEC",
        display: "certified dermatology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDRC",
        display: "certified diagnostic radiology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CEMC",
        display: "certified emergency medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CFPC",
        display: "certified family practice care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CIMC",
        display: "certified internal medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMGC",
        display: "certified clinical molecular genetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNEC",
        display: "certified neurology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNMC",
        display: "certified nuclear medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNQC",
        display:
          "certified neurology with special qualifications in child neurology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNSC",
        display: "certified neurological surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COGC",
        display: "certified obstetrics and gynecology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COMC",
        display: "certified occupational medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPC",
        display: "certified ophthalmology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COSC",
        display: "certified orthopaedic surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COTC",
        display: "certified otolaryngology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPEC",
        display: "certified pediatrics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPGC",
        display: "certified Ph.D. medical genetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPHC",
        display: "certified public health and general preventive medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPRC",
        display: "certified physical medicine and rehabilitation care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPSC",
        display: "certified plastic surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPYC",
        display: "certified psychiatry care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CROC",
        display: "certified radiation oncology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRPC",
        display: "certified radiological physics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSUC",
        display: "certified surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTSC",
        display: "certified thoracic surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CURC",
        display: "certified urology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CVSC",
        display: "certified vascular surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LGPC",
        display: "licensed general physician care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AALC",
        display: "accredited assisted living care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AAMC",
        display: "accredited ambulatory care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ABHC",
        display: "accredited behavioral health care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACAC",
        display: "accredited critical access hospital care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACHC",
        display: "accredited hospital care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AHOC",
        display: "accredited home care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALTC",
        display: "accredited long term care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AOSC",
        display: "accredited office-based surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CACS",
        display: "certified acute coronary syndrome care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAMI",
        display: "certified acute myocardial infarction care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAST",
        display: "certified asthma care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CBAR",
        display: "certified bariatric surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCAD",
        display: "certified coronary artery disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCAR",
        display: "certified cardiac care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDEP",
        display: "certified depression care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDGD",
        display: "certified digestive/gastrointestinal disorders care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDIA",
        display: "certified diabetes care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CEPI",
        display: "certified epilepsy care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CFEL",
        display: "certified frail elderly care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHFC",
        display: "certified heart failure care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHRO",
        display: "certified high risk obstetrics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHYP",
        display: "certified hyperlipidemia care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMIH",
        display: "certified migraine headache care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMSC",
        display: "certified multiple sclerosis care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COJR",
        display: "certified orthopedic joint replacement care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONC",
        display: "certified oncology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPD",
        display: "certified chronic obstructive pulmonary disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CORT",
        display: "certified organ transplant care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPAD",
        display: "certified parkinsons disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPND",
        display: "certified pneumonia disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPST",
        display: "certified primary stroke center care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSDM",
        display: "certified stroke disease management care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSIC",
        display: "certified sickle cell care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSLD",
        display: "certified sleep disorders care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSPT",
        display: "certified spine treatment care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTBU",
        display: "certified trauma/burn center care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CVDC",
        display: "certified vascular diseases care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CWMA",
        display: "certified wound management care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CWOH",
        display: "certified women's health care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeDetectedIssueManagementCode",
        display: "ActAdministrativeDetectedIssueManagementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "1",
        display: "Therapy Appropriate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "14",
        display: "Supply Appropriate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "8",
        display: "Other Action Taken",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActFinancialDetectedIssueManagementCode",
        display: "ActFinancialDetectedIssueManagementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HL7AccommodationCode",
        display: "HL7AccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HCPCSAccommodationCode",
        display: "HCPCSAccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
        display: "ambulatory",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMER",
        display: "emergency",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FLD",
        display: "field",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HH",
        display: "home health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMP",
        display: "inpatient encounter",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSENC",
        display: "observation encounter",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRENC",
        display: "pre-admission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SS",
        display: "short stay",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VR",
        display: "virtual",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHLDCARE",
        display: "Day care - Child care Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONVEYNC",
        display: "Common Conveyance Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HLTHCARE",
        display: "Health Care Interaction - Not Patient Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOMECARE",
        display: "Care Giver Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOSPPTNT",
        display: "Hospital Patient Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOSPVSTR",
        display: "Hospital Visitor Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOUSEHLD",
        display: "Household Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INMATE",
        display: "Inmate Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTIMATE",
        display: "Intimate Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LTRMCARE",
        display: "Long Term Care Facility Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLACE",
        display: "Common Space Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PTNTCARE",
        display: "Health Care Interaction - Patient Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHOOL2",
        display: "School Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SOCIAL2",
        display: "Social/Extended Family Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSTNCE",
        display: "Common Substance Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRAVINT",
        display: "Common Travel Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WORK2",
        display: "Work Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHRG",
        display: "Standard Charge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REV",
        display: "Standard Charge Reversal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDPRCD",
        display: "GDPR Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDPRResearchCD",
        display: "GDPR Research Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDPRCONSENT",
        display: "GDPR Consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OIC",
        display:
          "opt-in to personal information or effect collection in a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OIS",
        display:
          "opt-in to personal information or effect sharing via a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOC",
        display:
          "opt-out of personal information or effect collection in a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOS",
        display:
          "opt-out of personal information or effect sharing via a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENTAL",
        display: "dental care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISEASE",
        display: "disease specific policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUGPOL",
        display: "drug policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EHCPOL",
        display: "extended healthcare",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIP",
        display: "health insurance plan policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HSAPOL",
        display: "health spending account",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LTC",
        display: "long term care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MCPOL",
        display: "managed care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MENTPOL",
        display: "mental health policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "POS",
        display: "point of service policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBPOL",
        display: "substance use policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VISPOL",
        display: "vision care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MVA",
        display: "Motor vehicle accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHOOL",
        display: "School Accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPT",
        display: "Sporting Accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WPA",
        display: "Workplace accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPatientSafetyIncidentCode",
        display: "ActPatientSafetyIncidentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACADR",
        display: "adverse drug reaction access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACALL",
        display: "all access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACALLG",
        display: "allergy access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACCONS",
        display: "informational consent access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACDEMO",
        display: "demographics access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACDI",
        display: "diagnostic imaging access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACIMMUN",
        display: "immunization access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACLAB",
        display: "lab test result access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACMED",
        display: "medication access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACMEDC",
        display: "medical condition access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACMEN",
        display: "mental health access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACOBS",
        display: "common observations access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACPOLPRG",
        display: "policy or program information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACPROV",
        display: "provider information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACPSERV",
        display: "professional service access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACSUBSTAB",
        display: "substance abuse access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFAUT",
        display: "authorized information transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFCRT",
        display: "only on court order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFDNG",
        display: "only if danger to others",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFEMER",
        display: "only in an emergency",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFPWR",
        display: "only if public welfare risk",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFREG",
        display: "regulatory information transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOACCESS",
        display: "access information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOCOLLECT",
        display: "collect information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFODEIDENTIFIY",
        display: "deidentify information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFODISCLOSE",
        display: "disclose information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOMASK",
        display: "mask information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREADONLY",
        display: "read only information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREDACT",
        display: "redact information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREDISCLOSE",
        display: "redisclose information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREIDENTIFY",
        display: "reidentify information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOUSE",
        display: "use information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLCAT",
        display: "all categories",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLGCAT",
        display: "allergy category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ARCAT",
        display: "adverse drug reaction category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COBSCAT",
        display: "common observation category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEMOCAT",
        display: "demographics category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DICAT",
        display: "diagnostic image category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMUCAT",
        display: "immunization category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABCAT",
        display: "lab test category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDCCAT",
        display: "medical condition category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MENCAT",
        display: "mental health category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSVCCAT",
        display: "professional service category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXCAT",
        display: "medication category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisIP",
        display: "jurisdictional information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgIP",
        display: "organizational information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersIP",
        display: "personal information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ETH",
        display: "substance abuse information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDIS",
        display: "genetic disease information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIV",
        display: "HIV/AIDS information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MST",
        display: "military sexual trauma information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREGNANT",
        display: "pregnancy information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCA",
        display: "sickle cell anemia information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SDV",
        display:
          "sexual assault, abuse, or domestic violence information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SEX",
        display: "sexuality and reproductive health information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPI",
        display: "specially protected information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STD",
        display: "sexually transmitted disease information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TBOO",
        display: "taboo",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VIO",
        display: "violence information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IDS",
        display: "Identifier Sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SICKLE",
        display: "sickle cell",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTOPOL",
        display: "automobile",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PUBLICPOL",
        display: "public healthcare",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WCBPOL",
        display: "worker's compensation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActHealthInsuranceTypeCode",
        display: "ActHealthInsuranceTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIS",
        display: "disability insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EWB",
        display: "employee welfare benefit plan policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FLEXP",
        display: "flexible benefit plan policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LIFE",
        display: "life insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PNC",
        display: "property and casualty insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REI",
        display: "reinsurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SURPL",
        display: "surplus line insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UMBRL",
        display: "umbrella liability insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceAdjudicationPaymentGroupCode",
        display: "ActInvoiceAdjudicationPaymentGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoicePaymentCode",
        display: "ActInvoiceAdjudicationPaymentGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceAdjudicationPaymentSummaryCode",
        display: "ActInvoiceAdjudicationPaymentSummaryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALEC",
        display: "alternate electronic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BONUS",
        display: "bonus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CFWD",
        display: "carry forward adjusment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EDU",
        display: "education fees",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EPYMT",
        display: "early payment fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GARN",
        display: "garnishee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INVOICE",
        display: "submitted invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PINV",
        display: "paper invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PPRD",
        display: "prior period adjustment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROA",
        display: "professional association deduction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RECOV",
        display: "recovery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RETRO",
        display: "retro adjustment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRAN",
        display: "transaction fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INVTYPE",
        display: "invoice type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAYEE",
        display: "payee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAYOR",
        display: "payor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SENDAPP",
        display: "sending application",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNSPSC",
        display: "United Nations Standard Products and Services Classification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CPT5",
        display: "CPT5",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HCPCS",
        display: "HCPCS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ICD10PCS",
        display: "ICD10PCS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ICD9PCS",
        display: "ICD9PCS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailClinicalProductCode",
        display: "ActInvoiceDetailClinicalProductCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailDrugProductCode",
        display: "ActInvoiceDetailDrugProductCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericCode",
        display: "ActInvoiceDetailGenericCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailPreferredAccommodationCode",
        display: "ActInvoiceDetailPreferredAccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailClinicalServiceCode",
        display: "ActInvoiceDetailClinicalServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailOralHealthProcedureCode",
        display: "ActInvoiceDetailOralHealthProcedureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GTIN",
        display: "Global Trade Item Number",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UPC",
        display: "Universal Product Code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COIN",
        display: "coinsurance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPAYMENT",
        display: "patient co-pay",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEDUCTIBLE",
        display: "deductible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAY",
        display: "payment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPEND",
        display: "spend down",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COINS",
        display: "co-insurance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericAdjudicatorCode",
        display: "ActInvoiceDetailGenericAdjudicatorCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericModifierCode",
        display: "ActInvoiceDetailGenericModifierCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericProviderCode",
        display: "ActInvoiceDetailGenericProviderCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailTaxCode",
        display: "ActInvoiceDetailTaxCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AFTHRS",
        display: "non-normal hours",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ISOL",
        display: "isolation allowance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOO",
        display: "out of office",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CANCAPT",
        display: "cancelled appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DSC",
        display: "discount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ESA",
        display: "extraordinary service assessment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFSTOP",
        display: "fee for service top off",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FNLFEE",
        display: "final fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FRSTFEE",
        display: "first fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MARKUP",
        display: "markup or up-charge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MISSAPT",
        display: "missed appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERFEE",
        display: "periodic fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERMBNS",
        display: "performance bonus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RESTOCK",
        display: "restocking fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRAVEL",
        display: "travel",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "URGENT",
        display: "urgent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActEncounterAccommodationCode",
        display: "ActEncounterAccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FST",
        display: "federal sales tax",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HST",
        display: "harmonized sales Tax",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PST",
        display: "provincial/state sales tax",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceAdjudicationPaymentCode",
        display: "ActInvoiceAdjudicationPaymentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailCode",
        display: "ActInvoiceDetailCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceGroupCode",
        display: "ActInvoiceGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InvoiceElementAdjudicated",
        display: "InvoiceElementAdjudicated",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InvoiceElementPaid",
        display: "InvoiceElementPaid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InvoiceElementSubmitted",
        display: "InvoiceElementSubmitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceInterGroupCode",
        display: "ActInvoiceInterGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceRootGroupCode",
        display: "ActInvoiceRootGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPNDDRGING",
        display: "compound drug invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPNDINDING",
        display: "compound ingredient invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPNDSUPING",
        display: "compound supply invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUGING",
        display: "drug invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FRAMEING",
        display: "frame invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LENSING",
        display: "lens invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRDING",
        display: "product invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVGE",
        display: "coverage problem",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EFORM",
        display: "electronic form to follow",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FAX",
        display: "fax to follow",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GFTH",
        display: "good faith indicator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LATE",
        display: "late invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MANUAL",
        display: "manual review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOJ",
        display: "out of jurisdiction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ORTHO",
        display: "orthodontic service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAPER",
        display: "paper documentation to follow",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PIE",
        display: "public insurance exhausted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PYRDELAY",
        display: "delayed by a previous payor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REFNR",
        display: "referral not required",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REPSERV",
        display: "repeated service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNRELAT",
        display: "unrelated service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VERBAUTH",
        display: "verbal authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPINV",
        display: "clinical product invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CP",
        display: "clinical product invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSINV",
        display: "clinical service invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CS",
        display: "clinical service invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSPINV",
        display: "clinical service and product",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FININV",
        display: "financial invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OHSINV",
        display: "oral health service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAINV",
        display: "preferred accommodation invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PA",
        display: "preferred accommodation invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXCINV",
        display: "Rx compound invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXC",
        display: "Rx compound invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXDINV",
        display: "Rx dispense invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXD",
        display: "Rx dispense invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBFINV",
        display: "sessional or block fee invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VRXINV",
        display: "vision dispense invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActObservationList",
        display: "ActObservationList",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActTherapyDurationWorkingListCode",
        display: "ActTherapyDurationWorkingListCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDLIST",
        display: "medication list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProcedureCategoryList",
        display: "ActProcedureCategoryList",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALC",
        display: "Alternative Level of Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CARD",
        display: "Cardiology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHR",
        display: "Chronic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DNTL",
        display: "Dental",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRGRHB",
        display: "Drug Rehab",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GENRL",
        display: "General",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MED",
        display: "Medical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBS",
        display: "Obstetrics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ONC",
        display: "Oncology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PALL",
        display: "Palliative",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PED",
        display: "Pediatrics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PHAR",
        display: "Pharmaceutical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PHYRHB",
        display: "Physical Rehab",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSYCH",
        display: "Psychiatric",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SURG",
        display: "Surgical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACU",
        display: "short term/acute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHRON",
        display: "continuous/chronic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ONET",
        display: "one time",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRN",
        display: "as needed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTLSUB",
        display: "Controlled Substance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INV",
        display: "investigational",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LU",
        display: "limited use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OTC",
        display: "non prescription medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RX",
        display: "prescription only medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SA",
        display: "special authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SAC",
        display: "special access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND01",
        display: "imaging study requiring contrast",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND02",
        display: "colonoscopy prep",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND03",
        display: "prophylaxis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND04",
        display: "surgical prophylaxis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND05",
        display: "pregnancy prophylaxis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CARELIST",
        display: "care plan",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONDLIST",
        display: "condition list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GOALLIST",
        display: "goal list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VFPAPER",
        display: "verify paper",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VRFPAPER",
        display: "verify paper",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNDI",
        display: "diagnostic image note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNGEN",
        display: "general note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNIMM",
        display: "immunization note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNLAB",
        display: "laboratory note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNMED",
        display: "medication note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AFOOT",
        display: "pedestrian transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OnFoot",
        display: "pedestrian transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBT",
        display: "ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "Ambulance",
        display: "ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LAWENF",
        display: "law enforcement transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LawEnforcementVehicle",
        display: "law enforcement transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRVTRN",
        display: "private transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PrivateTransport",
        display: "private transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PUBTRN",
        display: "public transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PublicTransport",
        display: "public transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACH",
        display: "Automated Clearing House",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHK",
        display: "Cheque",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DDP",
        display: "Direct Deposit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NON",
        display: "Non-Payment Data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DF",
        display: "Daily Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EM",
        display: "Emergency Supply",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FF",
        display: "First Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FS",
        display: "Floor stock",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MS",
        display: "Manufacturer Sample",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RF",
        display: "Refill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UD",
        display: "Unit Dose",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UDE",
        display: "unit dose equivalent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActConsent",
        display: "_ActConsent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationActionPolicy",
        display: "_ActInformationActionPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationPolicy",
        display: "_ActInformationPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivacyPolicy",
        display: "ActPrivacyPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ActTrustPolicyType",
        display: "trust policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVPOL",
        display: "benefit policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SecurityPolicy",
        display: "security policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActGDPRConsentDirective",
        display: "_ActGDPRConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActGenericConsentDirective",
        display: "_ActGenericConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActUSPrivacyConsentDirective",
        display: "_ActUSPrivacyConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActGDPRPrivacyLaw",
        display: "General Data Protection Regulation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActUSPrivacyLaw",
        display: "_ActUSPrivacyLaw",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActConsentDirective",
        display: "ActConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivacyLaw",
        display: "ActPrivacyLaw",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InformationSensitivityPolicy",
        display: "InformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COMPT",
        display: "compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillableServiceCode",
        display: "ActBillableServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActOralHealthProcedureCode",
        display: "ActOralHealthProcedureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LOAN",
        display: "Loan",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRANSFER",
        display: "Transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHAR",
        display: "charity program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRIME",
        display: "crime victim program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EAP",
        display: "employee assistance program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GOVEMP",
        display: "government employee health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIRISK",
        display: "high risk pool program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND",
        display: "indigenous peoples health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MILITARY",
        display: "military health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RETIRE",
        display: "retiree health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SOCIAL",
        display: "social service program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VET",
        display: "veteran health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SREC",
        display: "specimen received",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SSTOR",
        display: "specimen in storage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STRAN",
        display: "specimen in transit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACID",
        display: "Acidification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALK",
        display: "Alkalization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEFB",
        display: "Defibrination",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FILT",
        display: "Filtration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LDLP",
        display: "LDL Precipitation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NEUT",
        display: "Neutralization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RECA",
        display: "Recalcification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UFIL",
        display: "Ultrafiltration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ARTBLD",
        display: "ActSpecObsArtBldCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DILUTION",
        display: "ActSpecObsDilutionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EVNFCTS",
        display: "ActSpecObsEvntfctsCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTFR",
        display: "ActSpecObsInterferenceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VOLUME",
        display: "ActSpecObsVolumeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUG",
        display: "Drug therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FD",
        display: "food",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMUNIZ",
        display: "Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AdministrationDetectedIssueCode",
        display: "AdministrationDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_SupplyDetectedIssueCode",
        display: "SupplyDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HISTORIC",
        display: "record recorded as historical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATPREF",
        display: "violates stated preferences",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OE",
        display: "order entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATDOC",
        display: "patient documentation task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATINFO",
        display: "patient information review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMedicationTherapyDurationWorkingListCode",
        display: "act medication therapy duration working list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPatientTransportationModeCode",
        display: "ActPatientTransportationModeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "42CFRPart2CD",
        display: "42 CFR Part 2 consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CompoundResearchCD",
        display:
          "Compound HIPAA Research Authorization and Informed Consent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAAuthCD",
        display: "HIPAA Authorization Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAConsentCD",
        display: "HIPAA Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAResearchAuthCD",
        display:
          "HIPAA Authorization for Disclosure for Research Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAROAD",
        display: "HIPAA Right of Access Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDHHS-5515",
        display:
          "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "42CFRPart2",
        display: "42 CFR Part2",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CommonRule",
        display: "Common Rule",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAAuth",
        display: "HIPAA Authorization for Disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAConsent",
        display: "HIPAA Consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAANOPP",
        display: "HIPAA notice of privacy practices",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAPsyNotes",
        display: "HIPAA psychotherapy notes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAROA",
        display: "HIPAA Right of Access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAASelfPay",
        display: "HIPAA self-pay",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "Title38Section7332",
        display: "Title 38 Section 7332",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "a) HIPAAConsent",
        display: "HIPAA Consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USResearchInformedAssent",
        display: "Informed Assent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USResearchInformedConsent",
        display: "Informed Consent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USBroadResearchConsent",
        display: "Broad Consent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AppropriatenessDetectedIssueCode",
        display: "AppropriatenessDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COMPLY",
        display: "Compliance Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DACT",
        display: "drug action detected issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSE",
        display: "Dosage problem",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPY",
        display: "Duplicate Therapy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIME",
        display: "timing detected issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_DrugActionDetectedIssueCode",
        display: "DrugActionDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_TimingDetectedIssueCode",
        display: "TimingDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPatientAnnotationType",
        display: "ActPatientAnnotationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGAnnotationType",
        display: "ECGAnnotationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InteractionDetectedIssueCode",
        display: "InteractionDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSA",
        display: "Observation Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREVINEF",
        display: "previously ineffective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMAUTH",
        display: "emergency authorization override",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AIRTRNS",
        display: "airborne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANANTRNS",
        display: "animal to animal transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANHUMTRNS",
        display: "animal to human transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BDYFLDTRNS",
        display: "body fluid contact transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BLDTRNS",
        display: "blood borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DERMTRNS",
        display: "transdermal transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENVTRNS",
        display: "environmental exposure transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FECTRNS",
        display: "fecal-oral transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FOMTRNS",
        display: "fomite transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FOODTRNS",
        display: "food-borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HUMHUMTRNS",
        display: "human to human transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INDTRNS",
        display: "indeterminate disease transmission mode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LACTTRNS",
        display: "lactation transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOSTRNS",
        display: "nosocomial transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PARTRNS",
        display: "parenteral transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLACTRNS",
        display: "transplacental transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SEXTRNS",
        display: "sexual transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRNSFTRNS",
        display: "transfusion transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VECTRNS",
        display: "vector-borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WATTRNS",
        display: "water-borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REPRESENTATIVE_BEAT",
        display: "ECG representative beat waveforms",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RHYTHM",
        display: "ECG rhythm waveforms",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEMO",
        display: "all demographic information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOB",
        display: "date of birth information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GENDER",
        display: "gender and sexual orientation information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LIVARG",
        display: "living arrangement information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MARST",
        display: "marital status information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATLOC",
        display: "patient location",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RACE",
        display: "race information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REL",
        display: "religion information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDACOATING",
        display: "coating",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDACOLOR",
        display: "color",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDAIMPRINTCD",
        display: "imprint code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDALOGO",
        display: "logo",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDASCORING",
        display: "scoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDASHAPE",
        display: "shape",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDASIZE",
        display: "size",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GENE",
        display: "gene",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "I",
        display: "Isolation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "P",
        display: "Private",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "S",
        display: "Suite",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SP",
        display: "Semi-private",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "W",
        display: "Ward",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActDetectedIssueCode",
        display: "ActDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HL7TriggerEventCode",
        display: "HL7TriggerEventCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_SubstanceAdministrationActCode",
        display: "SubstanceAdministrationActCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSANTC",
        display: "antigen count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSANTV",
        display: "antigen validity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAT_ADV_EVNT",
        display: "patient adverse event",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VAC_PROBLEM",
        display: "vaccine product problem",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationSensitivityPolicy",
        display: "ActInformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_EntitySensitivityPolicyType",
        display: "EntityInformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_RoleInformationSensitivityPolicy",
        display: "RoleInformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADOL",
        display: "adolescent information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CEL",
        display: "celebrity information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VIP",
        display: "celebrity information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIA",
        display: "diagnosis information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRGIS",
        display: "drug information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMP",
        display: "employee information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDS",
        display: "patient default information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PHY",
        display: "physician requested information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRS",
        display: "patient requested information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FOOD",
        display: "Food Interaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TPROD",
        display: "Therapeutic Product Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPELAT",
        display: "adjud. nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPELAT",
        display: "adjud. nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPELCT",
        display: "adjud. nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPELCT",
        display: "adjud. nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPMNAT",
        display: "adjud. nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPMNAT",
        display: "adjud. nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPMNCT",
        display: "adjud. nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPMNCT",
        display: "adjud. nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPELAT",
        display: "adjud. nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPELAT",
        display: "adjud. nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPELCT",
        display: "adjud. nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPELCT",
        display: "adjud. nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPMNAT",
        display: "adjud. nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPMNAT",
        display: "adjud. nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPMNCT",
        display: "adjud. nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPMNCT",
        display: "adjud. nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPELAT",
        display: "adjud. non-payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPELCT",
        display: "adjud. non-payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPMNAT",
        display: "adjud. non-payee payable prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPMNCT",
        display: "adjud. non-payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPELAT",
        display: "adjud. non-payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPELCT",
        display: "adjud. non-payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPMNAT",
        display: "adjud. non-payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPMNCT",
        display: "adjud. non-payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPELAT",
        display: "adjud. payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPELCT",
        display: "adjud. payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPMNAT",
        display: "adjud. payee payable prior-period manual amout",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPMNCT",
        display: "adjud. payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPELAT",
        display: "adjud. payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPELCT",
        display: "adjud. payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPMNAT",
        display: "adjud. payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPMNCT",
        display: "adjud. payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPELAT",
        display: "adjud. refused prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPELCT",
        display: "adjud. refused prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPMNAT",
        display: "adjud. refused prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPMNCT",
        display: "adjud. refused prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPELAT",
        display: "adjud. refused same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPELCT",
        display: "adjud. refused same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPMNAT",
        display: "adjud. refused same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPMNCT",
        display: "adjud. refused same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPELAT",
        display: "paid nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPELAT",
        display: "paid nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPELCT",
        display: "paid nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPELCT",
        display: "paid nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPMNAT",
        display: "paid nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPMNAT",
        display: "paid nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPMNCT",
        display: "paid nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPMNCT",
        display: "paid nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPELAT",
        display: "paid nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPELAT",
        display: "paid nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPELCT",
        display: "paid nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPELCT",
        display: "paid nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPMNAT",
        display: "paid nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPMNAT",
        display: "paid nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPMNCT",
        display: "paid nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPMNCT",
        display: "paid nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPELAT",
        display: "paid non-payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPELCT",
        display: "paid non-payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPMNAT",
        display: "paid non-payee payable prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPMNCT",
        display: "paid non-payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPELAT",
        display: "paid non-payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPELCT",
        display: "paid non-payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPMNAT",
        display: "paid non-payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPMNCT",
        display: "paid non-payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPELAT",
        display: "paid payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPELCT",
        display: "paid payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPMNAT",
        display: "paid payee payable prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPMNCT",
        display: "paid payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPELAT",
        display: "paid payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPELCT",
        display: "paid payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPMNAT",
        display: "paid payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPMNCT",
        display: "paid payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLELAT",
        display: "submitted billed electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLAT",
        display: "submitted billed electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLELCT",
        display: "submitted billed electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLCT",
        display: "submitted billed electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBNFELAT",
        display: "submitted nullified electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBCNAT",
        display: "submitted nullified electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBNFELCT",
        display: "submitted cancelled electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBCNCT",
        display: "submitted cancelled electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDELAT",
        display: "submitted pending electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDAT",
        display: "submitted pending electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDELCT",
        display: "submitted pending electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDCT",
        display: "submitted pending electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "21611-9",
        display: "age patient qn est",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "21612-7",
        display: "age patient qn reported",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "29553-5",
        display: "age patient qn calc",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "30525-0",
        display: "age patient qn definition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "30972-4",
        display: "age at onset of adverse event",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REP_HALF_LIFE",
        display: "representative half-life",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLCOATING",
        display: "coating",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLCOLOR",
        display: "color",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLIMAGE",
        display: "image",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLIMPRINT",
        display: "imprint",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSCORING",
        display: "scoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSHAPE",
        display: "shape",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSIZE",
        display: "size",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSYMBOL",
        display: "symbol",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADMDX",
        display: "admitting diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISDX",
        display: "discharge diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTDX",
        display: "intermediate diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOI",
        display: "nature of injury",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CaseTransmissionMode",
        display: "case transmission mode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AGGREGATE",
        display: "aggregate measure observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMPMSRMTH",
        display: "composite measure method",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMPMSRSCRWGHT",
        display: "component measure scoring weight",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPY",
        display: "copyright",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRS",
        display: "clinical recommendation statement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEF",
        display: "definition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISC",
        display: "disclaimer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FINALDT",
        display: "finalized date/time",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GUIDE",
        display: "guidance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IDUR",
        display: "improvement notation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ITMCNT",
        display: "items counted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY",
        display: "keyword",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDT",
        display: "measurement end date",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSD",
        display: "measurement start date",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRADJ",
        display: "risk adjustment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRAGG",
        display: "rate aggregation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRIMPROV",
        display: "health quality measure improvement notation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRJUR",
        display: "jurisdiction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRRPTR",
        display: "reporter type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRRPTTIME",
        display: "timeframe for reporting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRSCORE",
        display: "measure scoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRSET",
        display: "health quality measure care setting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRTOPIC",
        display: "health quality measure topic type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRTP",
        display: "measurement period",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRTYPE",
        display: "measure type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RAT",
        display: "rationale",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REF",
        display: "reference",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SDE",
        display: "supplemental data elements",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STRAT",
        display: "stratification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRANF",
        display: "transmission format",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USE",
        display: "notice of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIME_ABSOLUTE",
        display: "absolute time sequence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIME_RELATIVE",
        display: "relative time sequence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGObservationSequenceType",
        display: "ECGObservationSequenceType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGObservationSeriesType",
        display: "ECGObservationSeriesType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSpecObsCode",
        display: "ActSpecObsCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AnnotationType",
        display: "AnnotationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_GeneticObservationType",
        display: "GeneticObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ImmunizationObservationType",
        display: "ImmunizationObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_IndividualCaseSafetyReportType",
        display: "Individual Case Safety Report Type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_LOINCObservationActContextAgeType",
        display: "LOINCObservationActContextAgeType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_MedicationObservationType",
        display: "MedicationObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationIssueTriggerCodedObservationType",
        display: "ObservationIssueTriggerCodedObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationQualityMeasureAttribute",
        display: "ObservationQualityMeasureAttribute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationSequenceType",
        display: "ObservationSequenceType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationSeriesType",
        display: "ObservationSeriesType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PatientImmunizationRelatedObservationType",
        display: "PatientImmunizationRelatedObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PopulationInclusionObservationType",
        display: "PopulationInclusionObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PreferenceObservationType",
        display: "_PreferenceObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADVERSE_REACTION",
        display: "Adverse Reaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ASSERTION",
        display: "Assertion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CASESER",
        display: "case seriousness criteria",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDIO",
        display: "case disease imported observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRIT",
        display: "criticality",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTMO",
        display: "case transmission mode observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DX",
        display: "ObservationDiagnosisTypes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationDiagnosisTypes",
        display: "ObservationDiagnosisTypes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GISTIER",
        display: "GIS tier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HHOBS",
        display: "household situation observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ISSUE",
        display: "detected issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KSUBJ",
        display: "knowledge subject",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KSUBT",
        display: "knowledge subtopic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OINT",
        display: "intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SEV",
        display: "Severity Observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivilegeCategorizationType",
        display: "ActPrivilegeCategorizationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AdverseSubstanceAdministrationEventActionTakenType",
        display: "AdverseSubstanceAdministrationEventActionTakenType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CommonClinicalObservationType",
        display: "CommonClinicalObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_FDALabelData",
        display: "FDALabelData",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationAllergyTestCode",
        display: "observation allergy test",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationAllergyTestType",
        display: "ObservationAllergyTestType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationCausalityAssessmentType",
        display: "observation causality assessment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationDosageDefinitionPreconditionType",
        display: "observation dosage definition precondition type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationGenomicFamilyHistoryType",
        display: "ObservationGenomicFamilyHistoryType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationIndicationType",
        display: "ObservationIndicationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationIssueTriggerMeasuredObservationType",
        display: "ObservationIssueTriggerMeasuredObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationQueryMatchType",
        display: "ObservationQueryMatchType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationVisionPrescriptionType",
        display: "ObservationVisionPrescriptionType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PatientCharacteristicObservationType",
        display: "PatientCharacteristicObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_SimpleMeasurableClinicalObservationType",
        display: "SimpleMeasurableClinicalObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CLSSRM",
        display: "classroom",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GRADE",
        display: "grade",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHL",
        display: "school",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHLDIV",
        display: "school division",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TEACHER",
        display: "teacher",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENEX",
        display: "denominator exclusions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENEXCEP",
        display: "denominator exceptions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENOM",
        display: "denominator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IPOP",
        display: "initial population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSROBS",
        display: "measure observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRPOPL",
        display: "measure population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRPOPLEX",
        display: "measure population exclusions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NUMER",
        display: "numerator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NUMEX",
        display: "numerator exclusions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREFSTRENGTH",
        display: "preference strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CIRCLE",
        display: "circle",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ELLIPSE",
        display: "ellipse",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "POINT",
        display: "point",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "POLY",
        display: "polyline",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "B",
        display: "business information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMPL",
        display: "employer information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LOCIS",
        display: "location information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SSP",
        display: "sensitive service provider information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLDONE",
        display: "already performed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FULFIL",
        display: "fulfillment alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HELD",
        display: "held/suspended alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TOOLATE",
        display: "Refill Too Late Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TOOSOON",
        display: "Refill Too Soon Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENDLATE",
        display: "End Too Late Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STRTLATE",
        display: "Start Too Late Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "19",
        display: "Consulted Supplier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "2",
        display: "Assessed Patient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "22",
        display: "appropriate indication or diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "23",
        display: "prior therapy documented",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "3",
        display: "Patient Explanation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "4",
        display: "Consulted Other Source",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "5",
        display: "Consulted Prescriber",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "7",
        display: "Interacting Therapy No Longer Active/Planned",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "15",
        display: "Replacement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "16",
        display: "Vacation Supply",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "17",
        display: "Weekend Supply",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "18",
        display: "Leave of Absence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "20",
        display: "additional quantity on separate dispense",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "6",
        display: "Prescriber Declined Change",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "10",
        display: "Provided Patient Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "11",
        display: "Added Concurrent Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "12",
        display: "Temporarily Suspended Concurrent Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "13",
        display: "Stopped Concurrent Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "9",
        display: "Instituted Ongoing Monitoring Program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANF",
        display: "adjudicated with adjustments and no financial impact",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTACCRD",
        display: "trust accreditation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTAGRE",
        display: "trust agreement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTASSUR",
        display: "trust assurance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTCERT",
        display: "trust certificate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTFWK",
        display: "trust framework",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTMEC",
        display: "trust mechanism",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADALRT",
        display: "adult alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHINDA",
        display: "High Dose for Age Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELINDA",
        display: "Low Dose for Age Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GEALRT",
        display: "geriatric alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PEALRT",
        display: "pediatric alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DALG",
        display: "Drug Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EALG",
        display: "Environmental Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FALG",
        display: "Food Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBAIR",
        display: "fixed-wing ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "Fixed-wingAmbulance",
        display: "fixed-wing ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBGRND",
        display: "ground ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GroundAmbulance",
        display: "ground ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBHELO",
        display: "helicopter ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HelicopterAmbulance",
        display: "helicopter ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACCESSCONSCHEME",
        display: "access control scheme",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COL",
        display: "collision coverage policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNINSMOT",
        display: "uninsured motorist policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COGN",
        display: "cognitive disability information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DVD",
        display: "developmental disability information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMOTDIS",
        display: "emotional disturbance information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AE",
        display: "American Express",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DN",
        display: "Diner's Club",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DV",
        display: "Discover Card",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MC",
        display: "Master Card",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "V",
        display: "Visa",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIAGLISTE",
        display: "diagnosis list entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCHINSTE",
        display: "discharge instruction entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCHSUME",
        display: "discharge summary entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATEDUE",
        display: "patient education entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATREPE",
        display: "pathology report entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROBLISTE",
        display: "problem list entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RADREPE",
        display: "radiology report entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCHSUMREV",
        display: "discharge summary review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CODE_DEPREC",
        display: "code has been deprecated",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ABUSE",
        display: "commonly abused/misused alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FRAUD",
        display: "potential fraud",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLYDOC",
        display: "Poly-orderer Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLYPHRM",
        display: "Poly-supplier Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACOCOMPT",
        display: "accountable care organization compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDSSCOMPT",
        display: "CDS system compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTCOMPT",
        display: "care team compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FMCOMPT",
        display: "financial management compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HRCOMPT",
        display: "human resource compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LRCOMPT",
        display: "legitimate relationship compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PACOMPT",
        display: "patient administration compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RESCOMPT",
        display: "research project compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RMGTCOMPT",
        display: "records management compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HGHT",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LACT",
        display: "Lactation Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREG",
        display: "Pregnancy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WGHT",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTOLIST",
        display: "intolerance list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROBLIST",
        display: "problem list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RISKLIST",
        display: "risk factors",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONTROLLED",
        display: "CONTROLLED",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUI",
        display: "CUI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIHLTH",
        display: "CUI//HLTH",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIHLTHP",
        display: "(CUI//HLTH)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIP",
        display: "(CUI)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIPRVCY",
        display: "CUI//PRVCY",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIPRVCYP",
        display: "(CUI//PRVCY)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-HLTH",
        display: "CUI//SP-HLTH",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-HLTHP",
        display: "(CUI//SP-HLTH)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-PRVCY",
        display: "CUI//SP-PRVCY",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-PRVCYP",
        display: "(CUI//SP-PRVCY)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UUI",
        display: "(U)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYCC",
        display: "comply with confidentiality code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYCD",
        display: "comply with consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYCUI",
        display: "comply with controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYJPP",
        display: "comply with jurisdictional privacy policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYJSP",
        display: "comply with jurisdictional security policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYOPP",
        display: "comply with organizational privacy policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYOSP",
        display: "comply with organizational security policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_DEADrugSchedule",
        display: "DEADrugSchedule",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BR",
        display: "breikost (GE)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DM",
        display: "diabetes mellitus diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FAST",
        display: "fasting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FORMULA",
        display: "formula diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GF",
        display: "gluten free",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LF",
        display: "low fat",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LP",
        display: "low protein",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LQ",
        display: "liquid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LS",
        display: "low sodium",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "N",
        display: "normal diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NF",
        display: "no fat",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAF",
        display: "phenylalanine free",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAR",
        display: "parenteral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RD",
        display: "reduction diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCH",
        display: "schonkost (GE)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUPPLEMENT",
        display: "nutritional supplement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "T",
        display: "tea only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VLI",
        display: "low valin, leucin, isoleucin",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTO-HIGH",
        display: "Auto-High Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTO-LOW",
        display: "Auto-Low Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRE",
        display: "Pre-Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RERUN",
        display: "Rerun Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DNAINT",
        display: "Drug Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CANPRG",
        display: "women's cancer detection program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENDRENAL",
        display: "end renal program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIVAIDS",
        display: "HIV-AIDS program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSECOND",
        display: "dosage-condition alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDUR",
        display: "Dose-Duration Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEH",
        display: "High Dose Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEIVL",
        display: "Dose-Interval Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEL",
        display: "Low Dose Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDOSE",
        display: "maximum dosage reached",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURH",
        display: "Dose-Duration High Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURL",
        display: "Dose-Duration Low Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURHIND",
        display: "Dose-Duration High for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURLIND",
        display: "Dose-Duration Low for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHIND",
        display: "High Dose for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHINDSA",
        display: "High Dose for Height/Surface Area Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHINDW",
        display: "High Dose for Weight Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEIVLIND",
        display: "Dose-Interval for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELIND",
        display: "Low Dose for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELINDSA",
        display: "Low Dose for Height/Surface Area Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELINDW",
        display: "Low Dose for Weight Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPCLS",
        display: "duplicate therapeutic alass alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPGEN",
        display: "duplicate generic alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENAINT",
        display: "Environmental Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SO",
        display: "Script Owing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "21",
        display: "authorization confirmed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPTR",
        display: "encrypt at rest",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPTT",
        display: "encrypt in transit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPTU",
        display: "encrypt in use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFC",
        display: "First Fill - Complete",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFP",
        display: "First Fill - Part Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFPS",
        display: "first fill, part fill, partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFSS",
        display: "first fill, partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TF",
        display: "Trial Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFCS",
        display: "first fill complete, partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TFS",
        display: "trial fill partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FNAINT",
        display: "Food Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTACTN",
        display: "no longer actionable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTEQUIV",
        display: "not equivalent alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIMING",
        display: "event timing incorrect alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BOOSTER",
        display: "Booster Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INITIMMUNIZ",
        display: "Initial Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACUTE",
        display: "inpatient acute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NONAC",
        display: "inpatient non-acute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFAO",
        display: "access only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFASO",
        display: "access and save only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFCON",
        display: "after explicit consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FIBRIN",
        display: "Fibrin",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HEMOLYSIS",
        display: "Hemolysis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ICTERUS",
        display: "Icterus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LIPEMIA",
        display: "Lipemia",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IPPOP",
        display: "initial patient population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeDetectedIssueCode",
        display: "ActAdministrativeDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSuppliedItemDetectedIssueCode",
        display: "ActSuppliedItemDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActFinancialDetectedIssueCode",
        display: "ActFinancialDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ClinicalActionDetectedIssueCode",
        display: "ClinicalActionDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAREGAP",
        display: "Caregap",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CODINGGAP",
        display: "Codinggap",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisCUI",
        display: "jurisdictional controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisDEID",
        display: "jurisdictional de-identified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisLDS",
        display: "jurisdictional limited data set",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisNSI",
        display: "jurisdictional non-sensitive information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisPI",
        display: "jurisdictional public information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisSP-CUI",
        display:
          "jurisdictional specified controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisUUI",
        display: "jurisdictional uncontrolled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LEN_LONG",
        display: "length is too long",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LEN_SHORT",
        display: "length is too short",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNU",
        display: "annuity policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TLIFE",
        display: "term life insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ULIFE",
        display: "universal life insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RENT",
        display: "Rent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HMO",
        display: "health maintenance organization policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PPO",
        display: "preferred provider organization policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDHHS-5515MMHC",
        display:
          "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-Michigan Mental Health Code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDHHS-5515Part2",
        display:
          "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-US 42 CFR Part 2",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CURMEDLIST",
        display: "current medication list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCMEDLIST",
        display: "discharge medication list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HISTMEDLIST",
        display: "medication history",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MICROORGRREV",
        display: "microbiology organisms results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MICROSENSRREV",
        display: "microbiology sensitivity test results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MARWLREV",
        display: "medication administration record work list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTEQUIVGEN",
        display: "not generically equivalent alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTEQUIVTHER",
        display: "not therapeutically equivalent alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANONY",
        display: "anonymize",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AOD",
        display: "accounting of disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUDIT",
        display: "audit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUDTR",
        display: "audit trail",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYPOL",
        display: "comply with policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DECLASSIFYLABEL",
        display: "declassify security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEID",
        display: "deidentify",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DELAU",
        display: "delete after use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOWNGRDLABEL",
        display: "downgrade security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRIVLABEL",
        display: "derive security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPT",
        display: "encrypt",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HUAPRV",
        display: "human approval",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABEL",
        display: "assign security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MASK",
        display: "mask",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MINEC",
        display: "minimum necessary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERSISTLABEL",
        display: "persist security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRIVMARK",
        display: "privacy mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSEUD",
        display: "pseudonymize",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REDACT",
        display: "redact",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UPGRDLABEL",
        display: "upgrade security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROCESSINLINELABEL",
        display: "process inline security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AGE",
        display: "Age Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COND",
        display: "Condition Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CREACT",
        display: "common reaction alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GEN",
        display: "Genetic Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GEND",
        display: "Gender Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LAB",
        display: "Lab Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REACT",
        display: "Reaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RREACT",
        display: "Related Reaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABOE",
        display: "laboratory test order entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDOE",
        display: "medication order entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALG",
        display: "Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DINT",
        display: "Drug Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EINT",
        display: "Environmental Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FINT",
        display: "Food Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NAINT",
        display: "Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgCUI",
        display:
          "organizational basic controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgDEID",
        display: "organizational de-identified informati)on policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgLDS",
        display: "organizational limited data set information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgNSI",
        display: "organizational non-sensitive information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgPI",
        display: "organizational public information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgSP-CUI",
        display:
          "organizational specified controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgUUI",
        display: "organizational uncontrolled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLERLREV",
        display: "allergy list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CLINNOTEE",
        display: "clinical note entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMLREV",
        display: "immunization list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REMLREV",
        display: "reminder list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLERLE",
        display: "allergy list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDSREV",
        display: "clinical decision support intervention review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CLINNOTEREV",
        display: "clinical note review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIAGLISTREV",
        display: "diagnosis list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMLE",
        display: "immunization list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABRREV",
        display: "laboratory results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MICRORREV",
        display: "microbiology results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MLREV",
        display: "medication list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OREV",
        display: "orders review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATREPREV",
        display: "pathology report review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROBLISTREV",
        display: "problem list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RADREPREV",
        display: "radiology report review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REMLE",
        display: "reminder list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RISKASSESS",
        display: "risk assessment instrument task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATPREFALT",
        display: "violates stated preferences, alternate available",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersDEID",
        display: "personal de-identified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersLDS",
        display: "personal limited data set information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersNSI",
        display: "personal non-sensitive information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersPI",
        display: "personal public information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ControlledUnclassifiedInformation",
        display: "ControlledUnclassifiedInformation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SecurityLabelMark",
        display: "Security Label Mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIMark",
        display: "CUI Mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENTPRG",
        display: "dental program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISEASEPRG",
        display: "public health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MANDPOL",
        display: "mandatory health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MENTPRG",
        display: "mental health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SAFNET",
        display: "safety net clinic program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBPRG",
        display: "substance use program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSIDIZ",
        display: "subsidized health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALGY",
        display: "Allergy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INT",
        display: "Intolerance Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOAUTH",
        display: "no disclosure without subject authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOCOLLECT",
        display: "no collection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NODSCLCD",
        display: "no disclosure without consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NODSCLCDS",
        display:
          "no disclosure without information subject's consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOINTEGRATE",
        display: "no integration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOLIST",
        display: "no unlisted entity disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOMOU",
        display: "no disclosure without MOU",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOORGPOL",
        display: "no disclosure without organizational authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPAT",
        display:
          "no disclosure to patient, family or caregivers without attending provider's authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPERSISTP",
        display: "no collection beyond purpose of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSCLCD",
        display: "no redisclosure without consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSLCD",
        display: "no redisclosure without consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSCLCDS",
        display:
          "no redisclosure without information subject's consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSCLW",
        display: "no disclosure without jurisdictional authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORELINK",
        display: "no relinking",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOREUSE",
        display: "no reuse beyond purpose of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOVIP",
        display: "no unauthorized VIP disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ORCON",
        display: "no disclosure without originator authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WELLREMLE",
        display: "wellness reminder list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WELLREMLREV",
        display: "wellness reminder list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MAXOCCURS",
        display: "repetitions above maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MINOCCURS",
        display: "repetitions below minimum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RSDID",
        display: "de-identified information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RSREID",
        display: "re-identifiable information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFC",
        display: "Refill - Complete",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFF",
        display: "Refill (First fill this facility)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFS",
        display: "refill partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TB",
        display: "Trial Balance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFCS",
        display: "refill complete partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFFS",
        display: "refill partial strength (first fill this facility)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFPS",
        display: "refill part fill partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FALLRISK",
        display: "falls risk assessment instrument task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RALG",
        display: "Related Allergy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RAR",
        display: "Related Prior Reaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RINT",
        display: "Related Intolerance Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECALTINTOBS",
        display: "security alteration integrity observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECDATINTOBS",
        display: "security data integrity observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTCONOBS",
        display: "security integrity confidence observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTPRVOBS",
        display: "security integrity provenance observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTSTOBS",
        display: "security integrity status observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTPRVABOBS",
        display: "security integrity provenance asserted by observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTPRVRBOBS",
        display: "security integrity provenance reported by observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECCATOBS",
        display: "security category observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECCLASSOBS",
        display: "security classification observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECCONOBS",
        display: "security control observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTOBS",
        display: "security integrity observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECTRSTOBS",
        display: "SECTRSTOBS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTACCRDOBS",
        display: "trust accreditation observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTAGREOBS",
        display: "trust agreement observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTCERTOBS",
        display: "trust certificate observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTFWKOBS",
        display: "trust framework observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTLOAOBS",
        display: "trust assurance observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTMECOBS",
        display: "trust mechanism observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ConfidentialMark",
        display: "confidential mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPYMark",
        display: "copy of original mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DeliverToAddresseeOnlyMark",
        display: "deliver only to addressee mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RedisclosureProhibitionMark",
        display: "prohibition against redisclosure mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RestrictedConfidentialityMark",
        display: "restricted confidentiality mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRAFTMark",
        display: "Draft Mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTHPOL",
        display: "authorization policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DELEPOL",
        display: "delegation policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ObligationPolicy",
        display: "obligation policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PrivacyMark",
        display: "privacy mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RefrainPolicy",
        display: "refrain policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BH",
        display: "behavioral health information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MH",
        display: "mental health information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSY",
        display: "psychiatry disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSYTHPN",
        display: "psychotherapy note information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUD",
        display: "substance use disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSIDMC",
        display: "subsidized managed care program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSUPP",
        display: "subsidized supplemental health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ETHUD",
        display: "alcohol use disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPIOIDUD",
        display: "opioid use disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TBS",
        display: "trial balance partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALRTENDLATE",
        display: "end too late alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALRTSTRTLATE",
        display: "start too late alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTERVAL",
        display: "outside requested time",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MINFREQ",
        display: "too soon within frequency based on the usage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRG",
        display: "Drug Interaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NHP",
        display: "Natural Health Product Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NONRX",
        display: "Non-Prescription Interaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SALE",
        display: "Sale",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BUS",
        display: "business constraint violation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CODE_INVAL",
        display: "code is not valid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FORMAT",
        display: "invalid format",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ILLEGAL",
        display: "illegal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LEN_RANGE",
        display: "length out of range",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MISSCOND",
        display: "conditional element missing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MISSMAND",
        display: "mandatory element missing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NODUPS",
        display: "duplicate values are not permitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPERSIST",
        display: "element will not be persisted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REP_RANGE",
        display: "repetitions out of range",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AVAILABLE",
        display: "Available Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONSUMPTION",
        display: "Consumption Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CURRENT",
        display: "Current Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INITIAL",
        display: "Initial Volume",
      },
    ],
  },
  {
    element: {
      id: "DetectedIssue.severity",
      path: "DetectedIssue.severity",
      short: "high | moderate | low",
      definition:
        "Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.",
      alias: ["severity"],
      min: 0,
      max: "1",
      base: { path: "DetectedIssue.severity", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DetectedIssueSeverity",
          },
        ],
        strength: "required",
        description:
          "Indicates the potential degree of impact of the identified issue on the patient.",
        valueSet: "http://hl7.org/fhir/ValueSet/detectedissue-severity|4.3.0",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.grade" },
        { identity: "v2", map: "AL1-4/ IAR-2" },
        {
          identity: "rim",
          map: ".inboundRelationship[typeCode=SUBJ].source[classCode=OBS, moodCode=EVN, code=SEV].value",
        },
      ],
    },
    dataPath: "root.severity",
    parentDataPath: "root",
    basePath: "root.severity",
    baseId: "DetectedIssue.severity",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/detectedissue-severity",
        code: "high",
        display: "High",
      },
      {
        system: "http://hl7.org/fhir/detectedissue-severity",
        code: "moderate",
        display: "Moderate",
      },
      {
        system: "http://hl7.org/fhir/detectedissue-severity",
        code: "low",
        display: "Low",
      },
    ],
  },
  {
    element: {
      id: "DetectedIssue.identified[x]",
      path: "DetectedIssue.identified[x]",
      short: "When identified",
      definition:
        "The date or period when the detected issue was initially identified.",
      requirements:
        "No-one can be responsible for mitigation prior to the issue being identified.",
      min: 0,
      max: "1",
      base: { path: "DetectedIssue.identified[x]", min: 0, max: "1" },
      type: [{ code: "dateTime" }, { code: "Period" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "workflow", map: "Event.occurrence[x]" },
        { identity: "w5", map: "FiveWs.recorded" },
        { identity: "v2", map: "ALI-6 / IAM-11" },
        { identity: "rim", map: ".effectiveTime" },
      ],
    },
    dataPath: "root.identified[x]",
    parentDataPath: "root",
    basePath: "root.identified[x]",
    baseId: "DetectedIssue.identified[x]",
    isPrimitive: false,
    childPaths: [],
    multiTypeType: "dateTime",
    value: "",
  },
  {
    element: {
      id: "DetectedIssue.implicated",
      path: "DetectedIssue.implicated",
      short: "Problem resource",
      definition:
        "Indicates the resource representing the current activity or proposed activity that is potentially problematic.",
      comment:
        "There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.",
      alias: ["cause"],
      min: 0,
      max: "*",
      base: { path: "DetectedIssue.implicated", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
        },
      ],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "workflow", map: "Event.reasonReference" },
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=SUBJ].target[moodCode=EVN, INT]",
        },
      ],
    },
    dataPath: "root.implicated[0]",
    parentDataPath: "root",
    basePath: "root.implicated",
    baseId: "DetectedIssue.implicated",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "DetectedIssue.evidence",
      path: "DetectedIssue.evidence",
      short: "Supporting evidence",
      definition:
        "Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.",
      min: 0,
      max: "*",
      base: { path: "DetectedIssue.evidence", min: 0, max: "*" },
      type: [{ code: "BackboneElement" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human:
            "All FHIR elements must have a @value or children unless an empty Parameters resource",
          expression:
            "hasValue() or (children().count() > id.count()) or $this is Parameters",
          xpath: "@value|f:*|h:div|self::f:Parameters",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [{ identity: "w5", map: "FiveWs.why[x]" }],
    },
    dataPath: "root.evidence[0]",
    parentDataPath: "root",
    basePath: "root.evidence",
    baseId: "DetectedIssue.evidence",
    isPrimitive: false,
    childPaths: ["root.evidence.code[0]", "root.evidence.detail[0]"],
    value: "",
  },
  {
    element: {
      id: "DetectedIssue.evidence.detail",
      path: "DetectedIssue.evidence.detail",
      short: "Supporting information",
      definition:
        "Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.",
      min: 0,
      max: "*",
      base: { path: "DetectedIssue.evidence.detail", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
        },
      ],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [{ identity: "w5", map: "FiveWs.why[x]" }],
    },
    dataPath: "root.evidence.detail[0]",
    parentDataPath: "root.evidence[0]",
    basePath: "root.detail",
    baseId: "DetectedIssue.evidence.detail",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "DetectedIssue.detail",
      path: "DetectedIssue.detail",
      short: "Description and context",
      definition: "A textual explanation of the detected issue.",
      comment:
        "Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.",
      min: 0,
      max: "1",
      base: { path: "DetectedIssue.detail", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "workflow", map: "Event.note" },
        { identity: "v2", map: "AL1-5 / IAM-8" },
        { identity: "rim", map: ".text" },
      ],
    },
    dataPath: "root.detail",
    parentDataPath: "root",
    basePath: "root.detail",
    baseId: "DetectedIssue.detail",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "DetectedIssue.reference",
      path: "DetectedIssue.reference",
      short: "Authority for issue",
      definition:
        "The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.",
      min: 0,
      max: "1",
      base: { path: "DetectedIssue.reference", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=INST].target[classCode=ALRT, moodCode=DEFN].text.uri",
        },
      ],
    },
    dataPath: "root.reference",
    parentDataPath: "root",
    basePath: "root.reference",
    baseId: "DetectedIssue.reference",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "DetectedIssue.mitigation",
      path: "DetectedIssue.mitigation",
      short: "Step taken to address",
      definition:
        "Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.",
      min: 0,
      max: "*",
      base: { path: "DetectedIssue.mitigation", min: 0, max: "*" },
      type: [{ code: "BackboneElement" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human:
            "All FHIR elements must have a @value or children unless an empty Parameters resource",
          expression:
            "hasValue() or (children().count() > id.count()) or $this is Parameters",
          xpath: "@value|f:*|h:div|self::f:Parameters",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=MITG].target[classCode=ACT, moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.mitigation[0]",
    parentDataPath: "root",
    basePath: "root.mitigation",
    baseId: "DetectedIssue.mitigation",
    isPrimitive: false,
    childPaths: [
      "root.mitigation.action",
      "root.mitigation.date",
      "root.mitigation.author",
    ],
    value: "",
  },
  {
    element: {
      id: "DetectedIssue.mitigation.action",
      path: "DetectedIssue.mitigation.action",
      short: "What mitigation?",
      definition:
        "Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.",
      comment:
        'The "text" component can be used for detail or when no appropriate code exists.',
      min: 1,
      max: "1",
      base: { path: "DetectedIssue.mitigation.action", min: 1, max: "1" },
      type: [{ code: "CodeableConcept" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DetectedIssueMitigationAction",
          },
        ],
        strength: "preferred",
        description:
          "Codes describing steps taken to resolve the issue or other circumstances that mitigate the risk associated with the issue; e.g. 'added concurrent therapy', 'prior therapy documented', etc.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/detectedissue-mitigation-action",
      },
      mapping: [{ identity: "rim", map: ".code" }],
    },
    dataPath: "root.mitigation.action",
    parentDataPath: "root.mitigation[0]",
    basePath: "root.action",
    baseId: "DetectedIssue.mitigation.action",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAccountCode",
        display: "ActAccountCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationCode",
        display: "ActAdjudicationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationResultActionCode",
        display: "ActAdjudicationResultActionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillableModifierCode",
        display: "ActBillableModifierCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillingArrangementCode",
        display: "ActBillingArrangementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBoundedROICode",
        display: "ActBoundedROICode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCareProvisionCode",
        display: "act care provision",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActClaimAttachmentCategoryCode",
        display: "ActClaimAttachmentCategoryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActConsentType",
        display: "ActConsentType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActContainerRegistrationCode",
        display: "ActContainerRegistrationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActControlVariable",
        display: "ActControlVariable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageConfirmationCode",
        display: "ActCoverageConfirmationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageLimitCode",
        display: "ActCoverageLimitCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageTypeCode",
        display: "ActCoverageTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActDetectedIssueManagementCode",
        display: "ActDetectedIssueManagementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActExposureCode",
        display: "ActExposureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActFinancialTransactionCode",
        display: "ActFinancialTransactionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActIncidentCode",
        display: "ActIncidentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationAccessCode",
        display: "ActInformationAccessCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationAccessContextCode",
        display: "ActInformationAccessContextCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationCategoryCode",
        display: "ActInformationCategoryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceElementCode",
        display: "ActInvoiceElementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceElementSummaryCode",
        display: "ActInvoiceElementSummaryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceOverrideCode",
        display: "ActInvoiceOverrideCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActListCode",
        display: "ActListCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMonitoringProtocolCode",
        display: "ActMonitoringProtocolCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActNonObservationIndicationCode",
        display: "ActNonObservationIndicationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActObservationVerificationType",
        display: "act observation verification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPaymentCode",
        display: "ActPaymentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPharmacySupplyType",
        display: "ActPharmacySupplyType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPolicyType",
        display: "ActPolicyType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProductAcquisitionCode",
        display: "ActProductAcquisitionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSpecimenTransportCode",
        display: "ActSpecimenTransportCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSpecimenTreatmentCode",
        display: "ActSpecimenTreatmentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSubstanceAdministrationCode",
        display: "ActSubstanceAdministrationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActTaskCode",
        display: "ActTaskCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActTransportationModeCode",
        display: "ActTransportationModeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationType",
        display: "ObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ROIOverlayShape",
        display: "ROIOverlayShape",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "C",
        display: "corrected",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIET",
        display: "Diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUGPRG",
        display: "drug program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "F",
        display: "final",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRLMN",
        display: "preliminary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECOBS",
        display: "SecurityObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSIDFFS",
        display: "subsidized fee for service program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WRKCOMP",
        display: "(workers compensation program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationInformationCode",
        display: "ActAdjudicationInformationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillableTreatmentPlanCode",
        display: "ActBillableTreatmentPlanCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCognitiveProfessionalServiceCode",
        display: "ActCognitiveProfessionalServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActIdentityDocumentCode",
        display: "ActIdentityDocumentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActOrderCode",
        display: "ActOrderCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivilegeCategorization",
        display: "ActPrivilegeCategorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProcedureCode",
        display: "ActProcedureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActRegistryCode",
        display: "ActRegistryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSecurityObjectCode",
        display: "ActSecurityObjectCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AdvanceBeneficiaryNoticeType",
        display: "AdvanceBeneficiaryNoticeType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CPT4",
        display: "CPT4",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ExternallyDefinedActCodes",
        display: "ExternallyDefinedActCodes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HL7DefinedActCodes",
        display: "HL7DefinedActCodes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_IndividualCaseSafetyReportCriteria",
        display: "IndividualCaseSafetyReportCriteria",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_IndividualCaseSafetyReportProductCharacteristic",
        display: "IndividualCaseSafetyReportProductCharacteristic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationActAgeGroupType",
        display: "ObservationActAgeGroupType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPAY",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEDUCT",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEIND",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRA",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STORE",
        display: "Storage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACCTRECEIVABLE",
        display: "account receivable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CASH",
        display: "Cash",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CC",
        display: "credit card",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PBILLACCT",
        display: "patient billing account",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CreditCard",
        display: "CreditCard",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdjudicationGroupCode",
        display: "ActAdjudicationGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AA",
        display: "adjudicated with adjustments",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AR",
        display: "adjudicated as refused",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AS",
        display: "adjudicated as submitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONT",
        display: "contract",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DAY",
        display: "day",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LOC",
        display: "location",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MONTH",
        display: "month",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERIOD",
        display: "period",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROV",
        display: "provider",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WEEK",
        display: "week",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "YEAR",
        display: "year",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISPLAY",
        display: "Display",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FORM",
        display: "Print on Form",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NAT",
        display: "Insufficient authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUPPRESSED",
        display: "record suppressed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VALIDAT",
        display: "validation issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeAuthorizationDetectedIssueCode",
        display: "ActAdministrativeAuthorizationDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeRuleDetectedIssueCode",
        display: "ActAdministrativeRuleDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AuthorizationIssueManagementCode",
        display: "Authorization Issue Management Code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY204",
        display: "Unknown key identifier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY205",
        display: "Duplicate key identifier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY206",
        display: "non-matching identification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSOLETE",
        display: "obsolete record returned",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPTM",
        display: "CPT modifier codes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HCPCSA",
        display: "HCPCS Level II and Carrier-assigned",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMedicalBillableServiceCode",
        display: "ActMedicalBillableServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActNonMedicalBillableServiceCode",
        display: "ActNonMedicalBillableServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BLK",
        display: "block funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAP",
        display: "capitation funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONTF",
        display: "contract funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FINBILL",
        display: "financial",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ROST",
        display: "roster funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SESS",
        display: "sessional funding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFS",
        display: "fee for service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ROIFS",
        display: "fully specified ROI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ROIPS",
        display: "partially specified ROI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCredentialedCareCode",
        display: "act credentialed care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActEncounterCode",
        display: "ActEncounterCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMedicalServiceCode",
        display: "ActMedicalServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTOATTCH",
        display: "auto attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOCUMENT",
        display: "document",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HEALTHREC",
        display: "health record",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMG",
        display: "image attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABRESULTS",
        display: "lab results",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MODEL",
        display: "model",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WIATTCH",
        display: "work injury report attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "XRAY",
        display: "x-ray",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActDecision",
        display: "_ActDecision",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivacyConsentDirective",
        display: "_ActPrivacyConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMRGONLY",
        display: "emergency only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GRANTORCHOICE",
        display: "grantor choice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMPLIED",
        display: "implied consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMPLIEDD",
        display: "implied consent with opportunity to dissent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOCONSENT",
        display: "no consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPP",
        display: "notice of privacy practices",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTIN",
        display: "opt-in",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTINR",
        display: "opt-in with restrictions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTOUT",
        display: "op-out",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTOUTE",
        display: "opt-out with exceptions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ICOL",
        display: "information collection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IDSCL",
        display: "information disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFA",
        display: "information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IRDSCL",
        display: "information redisclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RESEARCH",
        display: "research information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ID",
        display: "Identified",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IP",
        display: "In Position",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "L",
        display: "Left Equipment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "M",
        display: "Missing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "O",
        display: "In Process",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "R",
        display: "Process Completed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "X",
        display: "Container Unavailable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTO",
        display: "auto-repeat permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENDC",
        display: "endogenous content",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REFLEX",
        display: "reflex permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGControlVariable",
        display: "ECGControlVariable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTH",
        display: "Authorized",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NAUTH",
        display: "Not Authorized",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageAuthorizationConfirmationCode",
        display: "ActCoverageAuthorizationConfirmationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageEligibilityConfirmationCode",
        display: "ActCoverageEligibilityConfirmationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ELG",
        display: "Eligible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NELG",
        display: "Not Eligible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoverageQuantityLimitCode",
        display: "ActCoverageQuantityLimitCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVMX",
        display: "coverage maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoveredPartyLimitCode",
        display: "ActCoveredPartyLimitCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVPRD",
        display: "coverage period",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LFEMX",
        display: "life time maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NETAMT",
        display: "Net Amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRDMX",
        display: "period maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNITPRICE",
        display: "Unit Price",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNITQTY",
        display: "Unit Quantity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInsurancePolicyCode",
        display: "ActInsurancePolicyCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInsuranceTypeCode",
        display: "ActInsuranceTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProgramTypeCode",
        display: "ActProgramTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCoveragePartyLimitGroupCode",
        display: "ActCoveragePartyLimitGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCredentialedCareProvisionPersonCode",
        display: "act credentialed care provision peron",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActCredentialedCareProvisionProgramCode",
        display: "act credentialed care provision program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CACC",
        display: "certified anatomic pathology and clinical pathology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAIC",
        display: "certified allergy and immunology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAMC",
        display: "certified aerospace medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CANC",
        display: "certified anesthesiology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAPC",
        display: "certified anatomic pathology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CBGC",
        display: "certified clinical biochemical genetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCCC",
        display: "certified clinical cytogenetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCGC",
        display: "certified clinical genetics (M.D.) care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCPC",
        display: "certified clinical pathology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCSC",
        display: "certified colon and rectal surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDEC",
        display: "certified dermatology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDRC",
        display: "certified diagnostic radiology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CEMC",
        display: "certified emergency medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CFPC",
        display: "certified family practice care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CIMC",
        display: "certified internal medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMGC",
        display: "certified clinical molecular genetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNEC",
        display: "certified neurology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNMC",
        display: "certified nuclear medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNQC",
        display:
          "certified neurology with special qualifications in child neurology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CNSC",
        display: "certified neurological surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COGC",
        display: "certified obstetrics and gynecology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COMC",
        display: "certified occupational medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPC",
        display: "certified ophthalmology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COSC",
        display: "certified orthopaedic surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COTC",
        display: "certified otolaryngology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPEC",
        display: "certified pediatrics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPGC",
        display: "certified Ph.D. medical genetics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPHC",
        display: "certified public health and general preventive medicine care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPRC",
        display: "certified physical medicine and rehabilitation care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPSC",
        display: "certified plastic surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPYC",
        display: "certified psychiatry care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CROC",
        display: "certified radiation oncology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRPC",
        display: "certified radiological physics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSUC",
        display: "certified surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTSC",
        display: "certified thoracic surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CURC",
        display: "certified urology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CVSC",
        display: "certified vascular surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LGPC",
        display: "licensed general physician care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AALC",
        display: "accredited assisted living care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AAMC",
        display: "accredited ambulatory care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ABHC",
        display: "accredited behavioral health care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACAC",
        display: "accredited critical access hospital care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACHC",
        display: "accredited hospital care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AHOC",
        display: "accredited home care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALTC",
        display: "accredited long term care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AOSC",
        display: "accredited office-based surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CACS",
        display: "certified acute coronary syndrome care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAMI",
        display: "certified acute myocardial infarction care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAST",
        display: "certified asthma care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CBAR",
        display: "certified bariatric surgery care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCAD",
        display: "certified coronary artery disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CCAR",
        display: "certified cardiac care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDEP",
        display: "certified depression care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDGD",
        display: "certified digestive/gastrointestinal disorders care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDIA",
        display: "certified diabetes care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CEPI",
        display: "certified epilepsy care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CFEL",
        display: "certified frail elderly care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHFC",
        display: "certified heart failure care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHRO",
        display: "certified high risk obstetrics care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHYP",
        display: "certified hyperlipidemia care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMIH",
        display: "certified migraine headache care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMSC",
        display: "certified multiple sclerosis care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COJR",
        display: "certified orthopedic joint replacement care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONC",
        display: "certified oncology care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPD",
        display: "certified chronic obstructive pulmonary disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CORT",
        display: "certified organ transplant care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPAD",
        display: "certified parkinsons disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPND",
        display: "certified pneumonia disease care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPST",
        display: "certified primary stroke center care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSDM",
        display: "certified stroke disease management care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSIC",
        display: "certified sickle cell care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSLD",
        display: "certified sleep disorders care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSPT",
        display: "certified spine treatment care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTBU",
        display: "certified trauma/burn center care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CVDC",
        display: "certified vascular diseases care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CWMA",
        display: "certified wound management care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CWOH",
        display: "certified women's health care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeDetectedIssueManagementCode",
        display: "ActAdministrativeDetectedIssueManagementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "1",
        display: "Therapy Appropriate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "14",
        display: "Supply Appropriate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "8",
        display: "Other Action Taken",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActFinancialDetectedIssueManagementCode",
        display: "ActFinancialDetectedIssueManagementCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HL7AccommodationCode",
        display: "HL7AccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HCPCSAccommodationCode",
        display: "HCPCSAccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMB",
        display: "ambulatory",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMER",
        display: "emergency",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FLD",
        display: "field",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HH",
        display: "home health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMP",
        display: "inpatient encounter",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSENC",
        display: "observation encounter",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRENC",
        display: "pre-admission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SS",
        display: "short stay",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VR",
        display: "virtual",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHLDCARE",
        display: "Day care - Child care Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONVEYNC",
        display: "Common Conveyance Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HLTHCARE",
        display: "Health Care Interaction - Not Patient Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOMECARE",
        display: "Care Giver Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOSPPTNT",
        display: "Hospital Patient Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOSPVSTR",
        display: "Hospital Visitor Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HOUSEHLD",
        display: "Household Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INMATE",
        display: "Inmate Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTIMATE",
        display: "Intimate Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LTRMCARE",
        display: "Long Term Care Facility Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLACE",
        display: "Common Space Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PTNTCARE",
        display: "Health Care Interaction - Patient Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHOOL2",
        display: "School Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SOCIAL2",
        display: "Social/Extended Family Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSTNCE",
        display: "Common Substance Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRAVINT",
        display: "Common Travel Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WORK2",
        display: "Work Interaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHRG",
        display: "Standard Charge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REV",
        display: "Standard Charge Reversal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDPRCD",
        display: "GDPR Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDPRResearchCD",
        display: "GDPR Research Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDPRCONSENT",
        display: "GDPR Consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OIC",
        display:
          "opt-in to personal information or effect collection in a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OIS",
        display:
          "opt-in to personal information or effect sharing via a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOC",
        display:
          "opt-out of personal information or effect collection in a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOS",
        display:
          "opt-out of personal information or effect sharing via a registry or repository",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENTAL",
        display: "dental care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISEASE",
        display: "disease specific policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUGPOL",
        display: "drug policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EHCPOL",
        display: "extended healthcare",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIP",
        display: "health insurance plan policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HSAPOL",
        display: "health spending account",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LTC",
        display: "long term care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MCPOL",
        display: "managed care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MENTPOL",
        display: "mental health policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "POS",
        display: "point of service policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBPOL",
        display: "substance use policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VISPOL",
        display: "vision care policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MVA",
        display: "Motor vehicle accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHOOL",
        display: "School Accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPT",
        display: "Sporting Accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WPA",
        display: "Workplace accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPatientSafetyIncidentCode",
        display: "ActPatientSafetyIncidentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACADR",
        display: "adverse drug reaction access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACALL",
        display: "all access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACALLG",
        display: "allergy access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACCONS",
        display: "informational consent access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACDEMO",
        display: "demographics access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACDI",
        display: "diagnostic imaging access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACIMMUN",
        display: "immunization access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACLAB",
        display: "lab test result access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACMED",
        display: "medication access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACMEDC",
        display: "medical condition access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACMEN",
        display: "mental health access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACOBS",
        display: "common observations access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACPOLPRG",
        display: "policy or program information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACPROV",
        display: "provider information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACPSERV",
        display: "professional service access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACSUBSTAB",
        display: "substance abuse access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFAUT",
        display: "authorized information transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFCRT",
        display: "only on court order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFDNG",
        display: "only if danger to others",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFEMER",
        display: "only in an emergency",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFPWR",
        display: "only if public welfare risk",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFREG",
        display: "regulatory information transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOACCESS",
        display: "access information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOCOLLECT",
        display: "collect information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFODEIDENTIFIY",
        display: "deidentify information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFODISCLOSE",
        display: "disclose information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOMASK",
        display: "mask information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREADONLY",
        display: "read only information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREDACT",
        display: "redact information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREDISCLOSE",
        display: "redisclose information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOREIDENTIFY",
        display: "reidentify information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFOUSE",
        display: "use information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLCAT",
        display: "all categories",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLGCAT",
        display: "allergy category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ARCAT",
        display: "adverse drug reaction category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COBSCAT",
        display: "common observation category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEMOCAT",
        display: "demographics category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DICAT",
        display: "diagnostic image category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMUCAT",
        display: "immunization category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABCAT",
        display: "lab test category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDCCAT",
        display: "medical condition category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MENCAT",
        display: "mental health category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSVCCAT",
        display: "professional service category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXCAT",
        display: "medication category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisIP",
        display: "jurisdictional information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgIP",
        display: "organizational information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersIP",
        display: "personal information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ETH",
        display: "substance abuse information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GDIS",
        display: "genetic disease information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIV",
        display: "HIV/AIDS information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MST",
        display: "military sexual trauma information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREGNANT",
        display: "pregnancy information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCA",
        display: "sickle cell anemia information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SDV",
        display:
          "sexual assault, abuse, or domestic violence information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SEX",
        display: "sexuality and reproductive health information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPI",
        display: "specially protected information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STD",
        display: "sexually transmitted disease information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TBOO",
        display: "taboo",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VIO",
        display: "violence information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IDS",
        display: "Identifier Sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SICKLE",
        display: "sickle cell",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTOPOL",
        display: "automobile",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PUBLICPOL",
        display: "public healthcare",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WCBPOL",
        display: "worker's compensation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActHealthInsuranceTypeCode",
        display: "ActHealthInsuranceTypeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIS",
        display: "disability insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EWB",
        display: "employee welfare benefit plan policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FLEXP",
        display: "flexible benefit plan policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LIFE",
        display: "life insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PNC",
        display: "property and casualty insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REI",
        display: "reinsurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SURPL",
        display: "surplus line insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UMBRL",
        display: "umbrella liability insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceAdjudicationPaymentGroupCode",
        display: "ActInvoiceAdjudicationPaymentGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoicePaymentCode",
        display: "ActInvoiceAdjudicationPaymentGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceAdjudicationPaymentSummaryCode",
        display: "ActInvoiceAdjudicationPaymentSummaryCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALEC",
        display: "alternate electronic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BONUS",
        display: "bonus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CFWD",
        display: "carry forward adjusment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EDU",
        display: "education fees",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EPYMT",
        display: "early payment fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GARN",
        display: "garnishee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INVOICE",
        display: "submitted invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PINV",
        display: "paper invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PPRD",
        display: "prior period adjustment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROA",
        display: "professional association deduction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RECOV",
        display: "recovery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RETRO",
        display: "retro adjustment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRAN",
        display: "transaction fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INVTYPE",
        display: "invoice type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAYEE",
        display: "payee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAYOR",
        display: "payor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SENDAPP",
        display: "sending application",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNSPSC",
        display: "United Nations Standard Products and Services Classification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CPT5",
        display: "CPT5",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HCPCS",
        display: "HCPCS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ICD10PCS",
        display: "ICD10PCS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ICD9PCS",
        display: "ICD9PCS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailClinicalProductCode",
        display: "ActInvoiceDetailClinicalProductCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailDrugProductCode",
        display: "ActInvoiceDetailDrugProductCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericCode",
        display: "ActInvoiceDetailGenericCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailPreferredAccommodationCode",
        display: "ActInvoiceDetailPreferredAccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailClinicalServiceCode",
        display: "ActInvoiceDetailClinicalServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailOralHealthProcedureCode",
        display: "ActInvoiceDetailOralHealthProcedureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GTIN",
        display: "Global Trade Item Number",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UPC",
        display: "Universal Product Code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COIN",
        display: "coinsurance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPAYMENT",
        display: "patient co-pay",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEDUCTIBLE",
        display: "deductible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAY",
        display: "payment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPEND",
        display: "spend down",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COINS",
        display: "co-insurance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericAdjudicatorCode",
        display: "ActInvoiceDetailGenericAdjudicatorCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericModifierCode",
        display: "ActInvoiceDetailGenericModifierCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailGenericProviderCode",
        display: "ActInvoiceDetailGenericProviderCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailTaxCode",
        display: "ActInvoiceDetailTaxCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AFTHRS",
        display: "non-normal hours",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ISOL",
        display: "isolation allowance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOO",
        display: "out of office",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CANCAPT",
        display: "cancelled appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DSC",
        display: "discount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ESA",
        display: "extraordinary service assessment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFSTOP",
        display: "fee for service top off",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FNLFEE",
        display: "final fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FRSTFEE",
        display: "first fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MARKUP",
        display: "markup or up-charge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MISSAPT",
        display: "missed appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERFEE",
        display: "periodic fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERMBNS",
        display: "performance bonus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RESTOCK",
        display: "restocking fee",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRAVEL",
        display: "travel",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "URGENT",
        display: "urgent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActEncounterAccommodationCode",
        display: "ActEncounterAccommodationCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FST",
        display: "federal sales tax",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HST",
        display: "harmonized sales Tax",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PST",
        display: "provincial/state sales tax",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceAdjudicationPaymentCode",
        display: "ActInvoiceAdjudicationPaymentCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceDetailCode",
        display: "ActInvoiceDetailCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceGroupCode",
        display: "ActInvoiceGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InvoiceElementAdjudicated",
        display: "InvoiceElementAdjudicated",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InvoiceElementPaid",
        display: "InvoiceElementPaid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InvoiceElementSubmitted",
        display: "InvoiceElementSubmitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceInterGroupCode",
        display: "ActInvoiceInterGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInvoiceRootGroupCode",
        display: "ActInvoiceRootGroupCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPNDDRGING",
        display: "compound drug invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPNDINDING",
        display: "compound ingredient invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPNDSUPING",
        display: "compound supply invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUGING",
        display: "drug invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FRAMEING",
        display: "frame invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LENSING",
        display: "lens invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRDING",
        display: "product invoice group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVGE",
        display: "coverage problem",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EFORM",
        display: "electronic form to follow",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FAX",
        display: "fax to follow",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GFTH",
        display: "good faith indicator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LATE",
        display: "late invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MANUAL",
        display: "manual review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OOJ",
        display: "out of jurisdiction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ORTHO",
        display: "orthodontic service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAPER",
        display: "paper documentation to follow",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PIE",
        display: "public insurance exhausted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PYRDELAY",
        display: "delayed by a previous payor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REFNR",
        display: "referral not required",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REPSERV",
        display: "repeated service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNRELAT",
        display: "unrelated service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VERBAUTH",
        display: "verbal authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPINV",
        display: "clinical product invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CP",
        display: "clinical product invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSINV",
        display: "clinical service invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CS",
        display: "clinical service invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CSPINV",
        display: "clinical service and product",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FININV",
        display: "financial invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OHSINV",
        display: "oral health service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAINV",
        display: "preferred accommodation invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PA",
        display: "preferred accommodation invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXCINV",
        display: "Rx compound invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXC",
        display: "Rx compound invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXDINV",
        display: "Rx dispense invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RXD",
        display: "Rx dispense invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBFINV",
        display: "sessional or block fee invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VRXINV",
        display: "vision dispense invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActObservationList",
        display: "ActObservationList",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActTherapyDurationWorkingListCode",
        display: "ActTherapyDurationWorkingListCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDLIST",
        display: "medication list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActProcedureCategoryList",
        display: "ActProcedureCategoryList",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALC",
        display: "Alternative Level of Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CARD",
        display: "Cardiology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHR",
        display: "Chronic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DNTL",
        display: "Dental",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRGRHB",
        display: "Drug Rehab",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GENRL",
        display: "General",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MED",
        display: "Medical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBS",
        display: "Obstetrics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ONC",
        display: "Oncology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PALL",
        display: "Palliative",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PED",
        display: "Pediatrics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PHAR",
        display: "Pharmaceutical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PHYRHB",
        display: "Physical Rehab",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSYCH",
        display: "Psychiatric",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SURG",
        display: "Surgical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACU",
        display: "short term/acute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHRON",
        display: "continuous/chronic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ONET",
        display: "one time",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRN",
        display: "as needed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTLSUB",
        display: "Controlled Substance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INV",
        display: "investigational",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LU",
        display: "limited use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OTC",
        display: "non prescription medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RX",
        display: "prescription only medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SA",
        display: "special authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SAC",
        display: "special access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND01",
        display: "imaging study requiring contrast",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND02",
        display: "colonoscopy prep",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND03",
        display: "prophylaxis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND04",
        display: "surgical prophylaxis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND05",
        display: "pregnancy prophylaxis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CARELIST",
        display: "care plan",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONDLIST",
        display: "condition list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GOALLIST",
        display: "goal list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VFPAPER",
        display: "verify paper",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VRFPAPER",
        display: "verify paper",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNDI",
        display: "diagnostic image note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNGEN",
        display: "general note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNIMM",
        display: "immunization note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNLAB",
        display: "laboratory note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNMED",
        display: "medication note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AFOOT",
        display: "pedestrian transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OnFoot",
        display: "pedestrian transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBT",
        display: "ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "Ambulance",
        display: "ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LAWENF",
        display: "law enforcement transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LawEnforcementVehicle",
        display: "law enforcement transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRVTRN",
        display: "private transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PrivateTransport",
        display: "private transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PUBTRN",
        display: "public transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PublicTransport",
        display: "public transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACH",
        display: "Automated Clearing House",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHK",
        display: "Cheque",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DDP",
        display: "Direct Deposit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NON",
        display: "Non-Payment Data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DF",
        display: "Daily Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EM",
        display: "Emergency Supply",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FF",
        display: "First Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FS",
        display: "Floor stock",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MS",
        display: "Manufacturer Sample",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RF",
        display: "Refill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UD",
        display: "Unit Dose",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UDE",
        display: "unit dose equivalent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActConsent",
        display: "_ActConsent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationActionPolicy",
        display: "_ActInformationActionPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationPolicy",
        display: "_ActInformationPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivacyPolicy",
        display: "ActPrivacyPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ActTrustPolicyType",
        display: "trust policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COVPOL",
        display: "benefit policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SecurityPolicy",
        display: "security policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActGDPRConsentDirective",
        display: "_ActGDPRConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActGenericConsentDirective",
        display: "_ActGenericConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActUSPrivacyConsentDirective",
        display: "_ActUSPrivacyConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActGDPRPrivacyLaw",
        display: "General Data Protection Regulation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActUSPrivacyLaw",
        display: "_ActUSPrivacyLaw",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActConsentDirective",
        display: "ActConsentDirective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivacyLaw",
        display: "ActPrivacyLaw",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InformationSensitivityPolicy",
        display: "InformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COMPT",
        display: "compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActBillableServiceCode",
        display: "ActBillableServiceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActOralHealthProcedureCode",
        display: "ActOralHealthProcedureCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LOAN",
        display: "Loan",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRANSFER",
        display: "Transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CHAR",
        display: "charity program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRIME",
        display: "crime victim program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EAP",
        display: "employee assistance program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GOVEMP",
        display: "government employee health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIRISK",
        display: "high risk pool program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IND",
        display: "indigenous peoples health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MILITARY",
        display: "military health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RETIRE",
        display: "retiree health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SOCIAL",
        display: "social service program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VET",
        display: "veteran health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SREC",
        display: "specimen received",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SSTOR",
        display: "specimen in storage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STRAN",
        display: "specimen in transit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACID",
        display: "Acidification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALK",
        display: "Alkalization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEFB",
        display: "Defibrination",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FILT",
        display: "Filtration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LDLP",
        display: "LDL Precipitation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NEUT",
        display: "Neutralization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RECA",
        display: "Recalcification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UFIL",
        display: "Ultrafiltration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ARTBLD",
        display: "ActSpecObsArtBldCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DILUTION",
        display: "ActSpecObsDilutionCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EVNFCTS",
        display: "ActSpecObsEvntfctsCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTFR",
        display: "ActSpecObsInterferenceCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VOLUME",
        display: "ActSpecObsVolumeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRUG",
        display: "Drug therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FD",
        display: "food",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMUNIZ",
        display: "Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AdministrationDetectedIssueCode",
        display: "AdministrationDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_SupplyDetectedIssueCode",
        display: "SupplyDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HISTORIC",
        display: "record recorded as historical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATPREF",
        display: "violates stated preferences",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OE",
        display: "order entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATDOC",
        display: "patient documentation task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATINFO",
        display: "patient information review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActMedicationTherapyDurationWorkingListCode",
        display: "act medication therapy duration working list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPatientTransportationModeCode",
        display: "ActPatientTransportationModeCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "42CFRPart2CD",
        display: "42 CFR Part 2 consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CompoundResearchCD",
        display:
          "Compound HIPAA Research Authorization and Informed Consent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAAuthCD",
        display: "HIPAA Authorization Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAConsentCD",
        display: "HIPAA Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAResearchAuthCD",
        display:
          "HIPAA Authorization for Disclosure for Research Consent Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAROAD",
        display: "HIPAA Right of Access Directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDHHS-5515",
        display:
          "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "42CFRPart2",
        display: "42 CFR Part2",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CommonRule",
        display: "Common Rule",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAAuth",
        display: "HIPAA Authorization for Disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAConsent",
        display: "HIPAA Consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAANOPP",
        display: "HIPAA notice of privacy practices",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAPsyNotes",
        display: "HIPAA psychotherapy notes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAAROA",
        display: "HIPAA Right of Access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIPAASelfPay",
        display: "HIPAA self-pay",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "Title38Section7332",
        display: "Title 38 Section 7332",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "a) HIPAAConsent",
        display: "HIPAA Consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USResearchInformedAssent",
        display: "Informed Assent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USResearchInformedConsent",
        display: "Informed Consent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USBroadResearchConsent",
        display: "Broad Consent for Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AppropriatenessDetectedIssueCode",
        display: "AppropriatenessDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COMPLY",
        display: "Compliance Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DACT",
        display: "drug action detected issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSE",
        display: "Dosage problem",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPY",
        display: "Duplicate Therapy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIME",
        display: "timing detected issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_DrugActionDetectedIssueCode",
        display: "DrugActionDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_TimingDetectedIssueCode",
        display: "TimingDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPatientAnnotationType",
        display: "ActPatientAnnotationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGAnnotationType",
        display: "ECGAnnotationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_InteractionDetectedIssueCode",
        display: "InteractionDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSA",
        display: "Observation Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREVINEF",
        display: "previously ineffective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMAUTH",
        display: "emergency authorization override",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AIRTRNS",
        display: "airborne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANANTRNS",
        display: "animal to animal transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANHUMTRNS",
        display: "animal to human transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BDYFLDTRNS",
        display: "body fluid contact transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BLDTRNS",
        display: "blood borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DERMTRNS",
        display: "transdermal transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENVTRNS",
        display: "environmental exposure transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FECTRNS",
        display: "fecal-oral transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FOMTRNS",
        display: "fomite transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FOODTRNS",
        display: "food-borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HUMHUMTRNS",
        display: "human to human transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INDTRNS",
        display: "indeterminate disease transmission mode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LACTTRNS",
        display: "lactation transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOSTRNS",
        display: "nosocomial transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PARTRNS",
        display: "parenteral transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLACTRNS",
        display: "transplacental transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SEXTRNS",
        display: "sexual transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRNSFTRNS",
        display: "transfusion transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VECTRNS",
        display: "vector-borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WATTRNS",
        display: "water-borne transmission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REPRESENTATIVE_BEAT",
        display: "ECG representative beat waveforms",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RHYTHM",
        display: "ECG rhythm waveforms",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEMO",
        display: "all demographic information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOB",
        display: "date of birth information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GENDER",
        display: "gender and sexual orientation information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LIVARG",
        display: "living arrangement information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MARST",
        display: "marital status information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATLOC",
        display: "patient location",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RACE",
        display: "race information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REL",
        display: "religion information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDACOATING",
        display: "coating",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDACOLOR",
        display: "color",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDAIMPRINTCD",
        display: "imprint code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDALOGO",
        display: "logo",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDASCORING",
        display: "scoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDASHAPE",
        display: "shape",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FDASIZE",
        display: "size",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GENE",
        display: "gene",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "I",
        display: "Isolation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "P",
        display: "Private",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "S",
        display: "Suite",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SP",
        display: "Semi-private",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "W",
        display: "Ward",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActDetectedIssueCode",
        display: "ActDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_HL7TriggerEventCode",
        display: "HL7TriggerEventCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_SubstanceAdministrationActCode",
        display: "SubstanceAdministrationActCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSANTC",
        display: "antigen count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OBSANTV",
        display: "antigen validity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAT_ADV_EVNT",
        display: "patient adverse event",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VAC_PROBLEM",
        display: "vaccine product problem",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActInformationSensitivityPolicy",
        display: "ActInformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_EntitySensitivityPolicyType",
        display: "EntityInformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_RoleInformationSensitivityPolicy",
        display: "RoleInformationSensitivityPolicy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADOL",
        display: "adolescent information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CEL",
        display: "celebrity information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VIP",
        display: "celebrity information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIA",
        display: "diagnosis information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRGIS",
        display: "drug information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMP",
        display: "employee information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDS",
        display: "patient default information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PHY",
        display: "physician requested information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRS",
        display: "patient requested information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FOOD",
        display: "Food Interaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TPROD",
        display: "Therapeutic Product Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPELAT",
        display: "adjud. nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPELAT",
        display: "adjud. nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPELCT",
        display: "adjud. nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPELCT",
        display: "adjud. nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPMNAT",
        display: "adjud. nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPMNAT",
        display: "adjud. nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFPPMNCT",
        display: "adjud. nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNPPMNCT",
        display: "adjud. nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPELAT",
        display: "adjud. nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPELAT",
        display: "adjud. nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPELCT",
        display: "adjud. nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPELCT",
        display: "adjud. nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPMNAT",
        display: "adjud. nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPMNAT",
        display: "adjud. nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNFSPMNCT",
        display: "adjud. nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADCNSPMNCT",
        display: "adjud. nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPELAT",
        display: "adjud. non-payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPELCT",
        display: "adjud. non-payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPMNAT",
        display: "adjud. non-payee payable prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPPPMNCT",
        display: "adjud. non-payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPELAT",
        display: "adjud. non-payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPELCT",
        display: "adjud. non-payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPMNAT",
        display: "adjud. non-payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADNPSPMNCT",
        display: "adjud. non-payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPELAT",
        display: "adjud. payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPELCT",
        display: "adjud. payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPMNAT",
        display: "adjud. payee payable prior-period manual amout",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPPPMNCT",
        display: "adjud. payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPELAT",
        display: "adjud. payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPELCT",
        display: "adjud. payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPMNAT",
        display: "adjud. payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADPPSPMNCT",
        display: "adjud. payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPELAT",
        display: "adjud. refused prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPELCT",
        display: "adjud. refused prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPMNAT",
        display: "adjud. refused prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFPPMNCT",
        display: "adjud. refused prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPELAT",
        display: "adjud. refused same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPELCT",
        display: "adjud. refused same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPMNAT",
        display: "adjud. refused same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADRFSPMNCT",
        display: "adjud. refused same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPELAT",
        display: "paid nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPELAT",
        display: "paid nullified prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPELCT",
        display: "paid nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPELCT",
        display: "paid nullified prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPMNAT",
        display: "paid nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPMNAT",
        display: "paid nullified prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFPPMNCT",
        display: "paid nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNPPMNCT",
        display: "paid nullified prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPELAT",
        display: "paid nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPELAT",
        display: "paid nullified same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPELCT",
        display: "paid nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPELCT",
        display: "paid nullified same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPMNAT",
        display: "paid nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPMNAT",
        display: "paid nullified same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNFSPMNCT",
        display: "paid nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDCNSPMNCT",
        display: "paid nullified same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPELAT",
        display: "paid non-payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPELCT",
        display: "paid non-payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPMNAT",
        display: "paid non-payee payable prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPPPMNCT",
        display: "paid non-payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPELAT",
        display: "paid non-payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPELCT",
        display: "paid non-payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPMNAT",
        display: "paid non-payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDNPSPMNCT",
        display: "paid non-payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPELAT",
        display: "paid payee payable prior-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPELCT",
        display: "paid payee payable prior-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPMNAT",
        display: "paid payee payable prior-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPPPMNCT",
        display: "paid payee payable prior-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPELAT",
        display: "paid payee payable same-period electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPELCT",
        display: "paid payee payable same-period electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPMNAT",
        display: "paid payee payable same-period manual amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PDPPSPMNCT",
        display: "paid payee payable same-period manual count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLELAT",
        display: "submitted billed electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLAT",
        display: "submitted billed electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLELCT",
        display: "submitted billed electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBBLCT",
        display: "submitted billed electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBNFELAT",
        display: "submitted nullified electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBCNAT",
        display: "submitted nullified electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBNFELCT",
        display: "submitted cancelled electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBCNCT",
        display: "submitted cancelled electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDELAT",
        display: "submitted pending electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDAT",
        display: "submitted pending electronic amount",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDELCT",
        display: "submitted pending electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SBPDCT",
        display: "submitted pending electronic count",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "21611-9",
        display: "age patient qn est",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "21612-7",
        display: "age patient qn reported",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "29553-5",
        display: "age patient qn calc",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "30525-0",
        display: "age patient qn definition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "30972-4",
        display: "age at onset of adverse event",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REP_HALF_LIFE",
        display: "representative half-life",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLCOATING",
        display: "coating",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLCOLOR",
        display: "color",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLIMAGE",
        display: "image",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLIMPRINT",
        display: "imprint",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSCORING",
        display: "scoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSHAPE",
        display: "shape",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSIZE",
        display: "size",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SPLSYMBOL",
        display: "symbol",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADMDX",
        display: "admitting diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISDX",
        display: "discharge diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTDX",
        display: "intermediate diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOI",
        display: "nature of injury",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CaseTransmissionMode",
        display: "case transmission mode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AGGREGATE",
        display: "aggregate measure observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMPMSRMTH",
        display: "composite measure method",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CMPMSRSCRWGHT",
        display: "component measure scoring weight",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPY",
        display: "copyright",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRS",
        display: "clinical recommendation statement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEF",
        display: "definition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISC",
        display: "disclaimer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FINALDT",
        display: "finalized date/time",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GUIDE",
        display: "guidance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IDUR",
        display: "improvement notation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ITMCNT",
        display: "items counted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KEY",
        display: "keyword",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDT",
        display: "measurement end date",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSD",
        display: "measurement start date",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRADJ",
        display: "risk adjustment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRAGG",
        display: "rate aggregation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRIMPROV",
        display: "health quality measure improvement notation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRJUR",
        display: "jurisdiction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRRPTR",
        display: "reporter type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRRPTTIME",
        display: "timeframe for reporting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRSCORE",
        display: "measure scoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRSET",
        display: "health quality measure care setting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRTOPIC",
        display: "health quality measure topic type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRTP",
        display: "measurement period",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRTYPE",
        display: "measure type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RAT",
        display: "rationale",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REF",
        display: "reference",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SDE",
        display: "supplemental data elements",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STRAT",
        display: "stratification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRANF",
        display: "transmission format",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "USE",
        display: "notice of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIME_ABSOLUTE",
        display: "absolute time sequence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIME_RELATIVE",
        display: "relative time sequence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGObservationSequenceType",
        display: "ECGObservationSequenceType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ECGObservationSeriesType",
        display: "ECGObservationSeriesType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSpecObsCode",
        display: "ActSpecObsCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AnnotationType",
        display: "AnnotationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_GeneticObservationType",
        display: "GeneticObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ImmunizationObservationType",
        display: "ImmunizationObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_IndividualCaseSafetyReportType",
        display: "Individual Case Safety Report Type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_LOINCObservationActContextAgeType",
        display: "LOINCObservationActContextAgeType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_MedicationObservationType",
        display: "MedicationObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationIssueTriggerCodedObservationType",
        display: "ObservationIssueTriggerCodedObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationQualityMeasureAttribute",
        display: "ObservationQualityMeasureAttribute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationSequenceType",
        display: "ObservationSequenceType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationSeriesType",
        display: "ObservationSeriesType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PatientImmunizationRelatedObservationType",
        display: "PatientImmunizationRelatedObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PopulationInclusionObservationType",
        display: "PopulationInclusionObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PreferenceObservationType",
        display: "_PreferenceObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADVERSE_REACTION",
        display: "Adverse Reaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ASSERTION",
        display: "Assertion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CASESER",
        display: "case seriousness criteria",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDIO",
        display: "case disease imported observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CRIT",
        display: "criticality",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTMO",
        display: "case transmission mode observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DX",
        display: "ObservationDiagnosisTypes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationDiagnosisTypes",
        display: "ObservationDiagnosisTypes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GISTIER",
        display: "GIS tier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HHOBS",
        display: "household situation observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ISSUE",
        display: "detected issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KSUBJ",
        display: "knowledge subject",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "KSUBT",
        display: "knowledge subtopic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OINT",
        display: "intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SEV",
        display: "Severity Observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActPrivilegeCategorizationType",
        display: "ActPrivilegeCategorizationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_AdverseSubstanceAdministrationEventActionTakenType",
        display: "AdverseSubstanceAdministrationEventActionTakenType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_CommonClinicalObservationType",
        display: "CommonClinicalObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_FDALabelData",
        display: "FDALabelData",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationAllergyTestCode",
        display: "observation allergy test",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationAllergyTestType",
        display: "ObservationAllergyTestType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationCausalityAssessmentType",
        display: "observation causality assessment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationDosageDefinitionPreconditionType",
        display: "observation dosage definition precondition type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationGenomicFamilyHistoryType",
        display: "ObservationGenomicFamilyHistoryType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationIndicationType",
        display: "ObservationIndicationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationIssueTriggerMeasuredObservationType",
        display: "ObservationIssueTriggerMeasuredObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationQueryMatchType",
        display: "ObservationQueryMatchType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ObservationVisionPrescriptionType",
        display: "ObservationVisionPrescriptionType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_PatientCharacteristicObservationType",
        display: "PatientCharacteristicObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_SimpleMeasurableClinicalObservationType",
        display: "SimpleMeasurableClinicalObservationType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CLSSRM",
        display: "classroom",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GRADE",
        display: "grade",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHL",
        display: "school",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCHLDIV",
        display: "school division",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TEACHER",
        display: "teacher",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENEX",
        display: "denominator exclusions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENEXCEP",
        display: "denominator exceptions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENOM",
        display: "denominator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IPOP",
        display: "initial population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSROBS",
        display: "measure observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRPOPL",
        display: "measure population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MSRPOPLEX",
        display: "measure population exclusions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NUMER",
        display: "numerator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NUMEX",
        display: "numerator exclusions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREFSTRENGTH",
        display: "preference strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CIRCLE",
        display: "circle",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ELLIPSE",
        display: "ellipse",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "POINT",
        display: "point",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "POLY",
        display: "polyline",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "B",
        display: "business information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMPL",
        display: "employer information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LOCIS",
        display: "location information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SSP",
        display: "sensitive service provider information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLDONE",
        display: "already performed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FULFIL",
        display: "fulfillment alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HELD",
        display: "held/suspended alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TOOLATE",
        display: "Refill Too Late Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TOOSOON",
        display: "Refill Too Soon Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENDLATE",
        display: "End Too Late Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "STRTLATE",
        display: "Start Too Late Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "19",
        display: "Consulted Supplier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "2",
        display: "Assessed Patient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "22",
        display: "appropriate indication or diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "23",
        display: "prior therapy documented",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "3",
        display: "Patient Explanation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "4",
        display: "Consulted Other Source",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "5",
        display: "Consulted Prescriber",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "7",
        display: "Interacting Therapy No Longer Active/Planned",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "15",
        display: "Replacement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "16",
        display: "Vacation Supply",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "17",
        display: "Weekend Supply",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "18",
        display: "Leave of Absence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "20",
        display: "additional quantity on separate dispense",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "6",
        display: "Prescriber Declined Change",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "10",
        display: "Provided Patient Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "11",
        display: "Added Concurrent Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "12",
        display: "Temporarily Suspended Concurrent Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "13",
        display: "Stopped Concurrent Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "9",
        display: "Instituted Ongoing Monitoring Program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANF",
        display: "adjudicated with adjustments and no financial impact",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTACCRD",
        display: "trust accreditation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTAGRE",
        display: "trust agreement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTASSUR",
        display: "trust assurance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTCERT",
        display: "trust certificate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTFWK",
        display: "trust framework",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTMEC",
        display: "trust mechanism",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ADALRT",
        display: "adult alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHINDA",
        display: "High Dose for Age Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELINDA",
        display: "Low Dose for Age Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GEALRT",
        display: "geriatric alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PEALRT",
        display: "pediatric alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DALG",
        display: "Drug Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EALG",
        display: "Environmental Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FALG",
        display: "Food Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBAIR",
        display: "fixed-wing ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "Fixed-wingAmbulance",
        display: "fixed-wing ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBGRND",
        display: "ground ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GroundAmbulance",
        display: "ground ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AMBHELO",
        display: "helicopter ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HelicopterAmbulance",
        display: "helicopter ambulance transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACCESSCONSCHEME",
        display: "access control scheme",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COL",
        display: "collision coverage policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UNINSMOT",
        display: "uninsured motorist policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COGN",
        display: "cognitive disability information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DVD",
        display: "developmental disability information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EMOTDIS",
        display: "emotional disturbance information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AE",
        display: "American Express",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DN",
        display: "Diner's Club",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DV",
        display: "Discover Card",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MC",
        display: "Master Card",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "V",
        display: "Visa",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIAGLISTE",
        display: "diagnosis list entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCHINSTE",
        display: "discharge instruction entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCHSUME",
        display: "discharge summary entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATEDUE",
        display: "patient education entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATREPE",
        display: "pathology report entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROBLISTE",
        display: "problem list entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RADREPE",
        display: "radiology report entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCHSUMREV",
        display: "discharge summary review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CODE_DEPREC",
        display: "code has been deprecated",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ABUSE",
        display: "commonly abused/misused alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FRAUD",
        display: "potential fraud",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLYDOC",
        display: "Poly-orderer Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PLYPHRM",
        display: "Poly-supplier Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACOCOMPT",
        display: "accountable care organization compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDSSCOMPT",
        display: "CDS system compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CTCOMPT",
        display: "care team compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FMCOMPT",
        display: "financial management compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HRCOMPT",
        display: "human resource compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LRCOMPT",
        display: "legitimate relationship compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PACOMPT",
        display: "patient administration compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RESCOMPT",
        display: "research project compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RMGTCOMPT",
        display: "records management compartment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HGHT",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LACT",
        display: "Lactation Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PREG",
        display: "Pregnancy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WGHT",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTOLIST",
        display: "intolerance list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROBLIST",
        display: "problem list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RISKLIST",
        display: "risk factors",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONTROLLED",
        display: "CONTROLLED",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUI",
        display: "CUI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIHLTH",
        display: "CUI//HLTH",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIHLTHP",
        display: "(CUI//HLTH)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIP",
        display: "(CUI)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIPRVCY",
        display: "CUI//PRVCY",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIPRVCYP",
        display: "(CUI//PRVCY)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-HLTH",
        display: "CUI//SP-HLTH",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-HLTHP",
        display: "(CUI//SP-HLTH)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-PRVCY",
        display: "CUI//SP-PRVCY",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUISP-PRVCYP",
        display: "(CUI//SP-PRVCY)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UUI",
        display: "(U)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYCC",
        display: "comply with confidentiality code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYCD",
        display: "comply with consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYCUI",
        display: "comply with controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYJPP",
        display: "comply with jurisdictional privacy policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYJSP",
        display: "comply with jurisdictional security policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYOPP",
        display: "comply with organizational privacy policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYOSP",
        display: "comply with organizational security policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_DEADrugSchedule",
        display: "DEADrugSchedule",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BR",
        display: "breikost (GE)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DM",
        display: "diabetes mellitus diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FAST",
        display: "fasting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FORMULA",
        display: "formula diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GF",
        display: "gluten free",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LF",
        display: "low fat",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LP",
        display: "low protein",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LQ",
        display: "liquid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LS",
        display: "low sodium",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "N",
        display: "normal diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NF",
        display: "no fat",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAF",
        display: "phenylalanine free",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PAR",
        display: "parenteral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RD",
        display: "reduction diet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SCH",
        display: "schonkost (GE)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUPPLEMENT",
        display: "nutritional supplement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "T",
        display: "tea only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "VLI",
        display: "low valin, leucin, isoleucin",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTO-HIGH",
        display: "Auto-High Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTO-LOW",
        display: "Auto-Low Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRE",
        display: "Pre-Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RERUN",
        display: "Rerun Dilution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DNAINT",
        display: "Drug Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CANPRG",
        display: "women's cancer detection program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENDRENAL",
        display: "end renal program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HIVAIDS",
        display: "HIV-AIDS program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSECOND",
        display: "dosage-condition alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDUR",
        display: "Dose-Duration Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEH",
        display: "High Dose Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEIVL",
        display: "Dose-Interval Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEL",
        display: "Low Dose Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDOSE",
        display: "maximum dosage reached",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURH",
        display: "Dose-Duration High Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURL",
        display: "Dose-Duration Low Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURHIND",
        display: "Dose-Duration High for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEDURLIND",
        display: "Dose-Duration Low for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHIND",
        display: "High Dose for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHINDSA",
        display: "High Dose for Height/Surface Area Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEHINDW",
        display: "High Dose for Weight Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSEIVLIND",
        display: "Dose-Interval for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELIND",
        display: "Low Dose for Indication Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELINDSA",
        display: "Low Dose for Height/Surface Area Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOSELINDW",
        display: "Low Dose for Weight Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPCLS",
        display: "duplicate therapeutic alass alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DUPTHPGEN",
        display: "duplicate generic alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENAINT",
        display: "Environmental Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SO",
        display: "Script Owing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "21",
        display: "authorization confirmed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPTR",
        display: "encrypt at rest",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPTT",
        display: "encrypt in transit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPTU",
        display: "encrypt in use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFC",
        display: "First Fill - Complete",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFP",
        display: "First Fill - Part Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFPS",
        display: "first fill, part fill, partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFSS",
        display: "first fill, partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TF",
        display: "Trial Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FFCS",
        display: "first fill complete, partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TFS",
        display: "trial fill partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FNAINT",
        display: "Food Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTACTN",
        display: "no longer actionable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTEQUIV",
        display: "not equivalent alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TIMING",
        display: "event timing incorrect alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BOOSTER",
        display: "Booster Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INITIMMUNIZ",
        display: "Initial Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ACUTE",
        display: "inpatient acute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NONAC",
        display: "inpatient non-acute",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFAO",
        display: "access only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFASO",
        display: "access and save only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INFCON",
        display: "after explicit consent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FIBRIN",
        display: "Fibrin",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HEMOLYSIS",
        display: "Hemolysis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ICTERUS",
        display: "Icterus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LIPEMIA",
        display: "Lipemia",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IPPOP",
        display: "initial patient population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActAdministrativeDetectedIssueCode",
        display: "ActAdministrativeDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActSuppliedItemDetectedIssueCode",
        display: "ActSuppliedItemDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ActFinancialDetectedIssueCode",
        display: "ActFinancialDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "_ClinicalActionDetectedIssueCode",
        display: "ClinicalActionDetectedIssueCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CAREGAP",
        display: "Caregap",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CODINGGAP",
        display: "Codinggap",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisCUI",
        display: "jurisdictional controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisDEID",
        display: "jurisdictional de-identified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisLDS",
        display: "jurisdictional limited data set",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisNSI",
        display: "jurisdictional non-sensitive information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisPI",
        display: "jurisdictional public information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisSP-CUI",
        display:
          "jurisdictional specified controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "JurisUUI",
        display: "jurisdictional uncontrolled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LEN_LONG",
        display: "length is too long",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LEN_SHORT",
        display: "length is too short",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANNU",
        display: "annuity policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TLIFE",
        display: "term life insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ULIFE",
        display: "universal life insurance policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RENT",
        display: "Rent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HMO",
        display: "health maintenance organization policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PPO",
        display: "preferred provider organization policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDHHS-5515MMHC",
        display:
          "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-Michigan Mental Health Code",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MDHHS-5515Part2",
        display:
          "Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-US 42 CFR Part 2",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CURMEDLIST",
        display: "current medication list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISCMEDLIST",
        display: "discharge medication list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HISTMEDLIST",
        display: "medication history",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MICROORGRREV",
        display: "microbiology organisms results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MICROSENSRREV",
        display: "microbiology sensitivity test results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MARWLREV",
        display: "medication administration record work list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTEQUIVGEN",
        display: "not generically equivalent alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOTEQUIVTHER",
        display: "not therapeutically equivalent alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ANONY",
        display: "anonymize",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AOD",
        display: "accounting of disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUDIT",
        display: "audit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUDTR",
        display: "audit trail",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CPLYPOL",
        display: "comply with policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DECLASSIFYLABEL",
        display: "declassify security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DEID",
        display: "deidentify",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DELAU",
        display: "delete after use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DOWNGRDLABEL",
        display: "downgrade security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRIVLABEL",
        display: "derive security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ENCRYPT",
        display: "encrypt",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "HUAPRV",
        display: "human approval",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABEL",
        display: "assign security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MASK",
        display: "mask",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MINEC",
        display: "minimum necessary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PERSISTLABEL",
        display: "persist security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PRIVMARK",
        display: "privacy mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSEUD",
        display: "pseudonymize",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REDACT",
        display: "redact",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "UPGRDLABEL",
        display: "upgrade security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROCESSINLINELABEL",
        display: "process inline security label",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AGE",
        display: "Age Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COND",
        display: "Condition Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CREACT",
        display: "common reaction alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GEN",
        display: "Genetic Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "GEND",
        display: "Gender Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LAB",
        display: "Lab Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REACT",
        display: "Reaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RREACT",
        display: "Related Reaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABOE",
        display: "laboratory test order entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MEDOE",
        display: "medication order entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALG",
        display: "Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DINT",
        display: "Drug Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EINT",
        display: "Environmental Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FINT",
        display: "Food Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NAINT",
        display: "Non-Allergy Intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgCUI",
        display:
          "organizational basic controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgDEID",
        display: "organizational de-identified informati)on policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgLDS",
        display: "organizational limited data set information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgNSI",
        display: "organizational non-sensitive information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgPI",
        display: "organizational public information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgSP-CUI",
        display:
          "organizational specified controlled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OrgUUI",
        display: "organizational uncontrolled unclassified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLERLREV",
        display: "allergy list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CLINNOTEE",
        display: "clinical note entry task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMLREV",
        display: "immunization list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REMLREV",
        display: "reminder list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALLERLE",
        display: "allergy list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CDSREV",
        display: "clinical decision support intervention review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CLINNOTEREV",
        display: "clinical note review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DIAGLISTREV",
        display: "diagnosis list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "IMMLE",
        display: "immunization list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LABRREV",
        display: "laboratory results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MICRORREV",
        display: "microbiology results review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MLREV",
        display: "medication list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OREV",
        display: "orders review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATREPREV",
        display: "pathology report review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PROBLISTREV",
        display: "problem list review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RADREPREV",
        display: "radiology report review task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REMLE",
        display: "reminder list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RISKASSESS",
        display: "risk assessment instrument task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PATPREFALT",
        display: "violates stated preferences, alternate available",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersDEID",
        display: "personal de-identified information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersLDS",
        display: "personal limited data set information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersNSI",
        display: "personal non-sensitive information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PersPI",
        display: "personal public information policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ControlledUnclassifiedInformation",
        display: "ControlledUnclassifiedInformation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SecurityLabelMark",
        display: "Security Label Mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CUIMark",
        display: "CUI Mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DENTPRG",
        display: "dental program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DISEASEPRG",
        display: "public health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MANDPOL",
        display: "mandatory health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MENTPRG",
        display: "mental health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SAFNET",
        display: "safety net clinic program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBPRG",
        display: "substance use program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSIDIZ",
        display: "subsidized health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALGY",
        display: "Allergy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INT",
        display: "Intolerance Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOAUTH",
        display: "no disclosure without subject authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOCOLLECT",
        display: "no collection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NODSCLCD",
        display: "no disclosure without consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NODSCLCDS",
        display:
          "no disclosure without information subject's consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOINTEGRATE",
        display: "no integration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOLIST",
        display: "no unlisted entity disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOMOU",
        display: "no disclosure without MOU",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOORGPOL",
        display: "no disclosure without organizational authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPAT",
        display:
          "no disclosure to patient, family or caregivers without attending provider's authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPERSISTP",
        display: "no collection beyond purpose of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSCLCD",
        display: "no redisclosure without consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSLCD",
        display: "no redisclosure without consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSCLCDS",
        display:
          "no redisclosure without information subject's consent directive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORDSCLW",
        display: "no disclosure without jurisdictional authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NORELINK",
        display: "no relinking",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOREUSE",
        display: "no reuse beyond purpose of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOVIP",
        display: "no unauthorized VIP disclosure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ORCON",
        display: "no disclosure without originator authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WELLREMLE",
        display: "wellness reminder list entry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "WELLREMLREV",
        display: "wellness reminder list review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MAXOCCURS",
        display: "repetitions above maximum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MINOCCURS",
        display: "repetitions below minimum",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RSDID",
        display: "de-identified information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RSREID",
        display: "re-identifiable information access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFC",
        display: "Refill - Complete",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFF",
        display: "Refill (First fill this facility)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFP",
        display: "Refill - Part Fill",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFS",
        display: "refill partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TB",
        display: "Trial Balance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFCS",
        display: "refill complete partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFFS",
        display: "refill partial strength (first fill this facility)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RFPS",
        display: "refill part fill partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FALLRISK",
        display: "falls risk assessment instrument task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RALG",
        display: "Related Allergy Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RAR",
        display: "Related Prior Reaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RINT",
        display: "Related Intolerance Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECALTINTOBS",
        display: "security alteration integrity observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECDATINTOBS",
        display: "security data integrity observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTCONOBS",
        display: "security integrity confidence observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTPRVOBS",
        display: "security integrity provenance observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTSTOBS",
        display: "security integrity status observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTPRVABOBS",
        display: "security integrity provenance asserted by observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTPRVRBOBS",
        display: "security integrity provenance reported by observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECCATOBS",
        display: "security category observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECCLASSOBS",
        display: "security classification observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECCONOBS",
        display: "security control observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECINTOBS",
        display: "security integrity observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SECTRSTOBS",
        display: "SECTRSTOBS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTACCRDOBS",
        display: "trust accreditation observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTAGREOBS",
        display: "trust agreement observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTCERTOBS",
        display: "trust certificate observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTFWKOBS",
        display: "trust framework observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTLOAOBS",
        display: "trust assurance observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TRSTMECOBS",
        display: "trust mechanism observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ConfidentialMark",
        display: "confidential mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "COPYMark",
        display: "copy of original mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DeliverToAddresseeOnlyMark",
        display: "deliver only to addressee mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RedisclosureProhibitionMark",
        display: "prohibition against redisclosure mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RestrictedConfidentialityMark",
        display: "restricted confidentiality mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRAFTMark",
        display: "Draft Mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AUTHPOL",
        display: "authorization policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DELEPOL",
        display: "delegation policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ObligationPolicy",
        display: "obligation policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PrivacyMark",
        display: "privacy mark",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "RefrainPolicy",
        display: "refrain policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BH",
        display: "behavioral health information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MH",
        display: "mental health information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSY",
        display: "psychiatry disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "PSYTHPN",
        display: "psychotherapy note information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUD",
        display: "substance use disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSIDMC",
        display: "subsidized managed care program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SUBSUPP",
        display: "subsidized supplemental health program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ETHUD",
        display: "alcohol use disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPIOIDUD",
        display: "opioid use disorder information sensitivity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TBS",
        display: "trial balance partial strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALRTENDLATE",
        display: "end too late alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ALRTSTRTLATE",
        display: "start too late alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INTERVAL",
        display: "outside requested time",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MINFREQ",
        display: "too soon within frequency based on the usage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "DRG",
        display: "Drug Interaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NHP",
        display: "Natural Health Product Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NONRX",
        display: "Non-Prescription Interaction Alert",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "SALE",
        display: "Sale",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "BUS",
        display: "business constraint violation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CODE_INVAL",
        display: "code is not valid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "FORMAT",
        display: "invalid format",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "ILLEGAL",
        display: "illegal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "LEN_RANGE",
        display: "length out of range",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MISSCOND",
        display: "conditional element missing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "MISSMAND",
        display: "mandatory element missing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NODUPS",
        display: "duplicate values are not permitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "NOPERSIST",
        display: "element will not be persisted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "REP_RANGE",
        display: "repetitions out of range",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "AVAILABLE",
        display: "Available Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CONSUMPTION",
        display: "Consumption Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "CURRENT",
        display: "Current Volume",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "INITIAL",
        display: "Initial Volume",
      },
    ],
  },
  {
    element: {
      id: "DetectedIssue.mitigation.date",
      path: "DetectedIssue.mitigation.date",
      short: "Date committed",
      definition: "Indicates when the mitigating action was documented.",
      comment:
        "This might not be the same as when the mitigating step was actually taken.",
      min: 0,
      max: "1",
      base: { path: "DetectedIssue.mitigation.date", min: 0, max: "1" },
      type: [{ code: "dateTime" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [{ identity: "rim", map: ".effectiveTime" }],
    },
    dataPath: "root.mitigation.date",
    parentDataPath: "root.mitigation[0]",
    basePath: "root.date",
    baseId: "DetectedIssue.mitigation.date",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "DetectedIssue",
      path: "DetectedIssue",
      short: "Clinical issue with action",
      definition:
        "Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.",
      alias: ["DDI", "drug-drug interaction", "Contraindication", "Alert"],
      min: 0,
      max: "*",
      base: { path: "DetectedIssue", min: 0, max: "*" },
      constraint: [
        {
          key: "dom-2",
          severity: "error",
          human:
            "If the resource is contained in another resource, it SHALL NOT contain nested Resources",
          expression: "contained.contained.empty()",
          xpath: "not(parent::f:contained and f:contained)",
          source: "http://hl7.org/fhir/StructureDefinition/DomainResource",
        },
        {
          key: "dom-3",
          severity: "error",
          human:
            "If the resource is contained in another resource, it SHALL be referred to from elsewhere in the resource or SHALL refer to the containing resource",
          expression:
            "contained.where(((id.exists() and ('#'+id in (%resource.descendants().reference | %resource.descendants().as(canonical) | %resource.descendants().as(uri) | %resource.descendants().as(url)))) or descendants().where(reference = '#').exists() or descendants().where(as(canonical) = '#').exists() or descendants().where(as(uri) = '#').exists()).not()).trace('unmatched', id).empty()",
          xpath:
            "not(exists(for $contained in f:contained return $contained[not(exists(parent::*/descendant::f:reference/@value=concat('#', $contained/*/f:id/@value)) or exists(descendant::f:reference[@value='#']))]))",
          source: "http://hl7.org/fhir/StructureDefinition/DomainResource",
        },
        {
          key: "dom-4",
          severity: "error",
          human:
            "If a resource is contained in another resource, it SHALL NOT have a meta.versionId or a meta.lastUpdated",
          expression:
            "contained.meta.versionId.empty() and contained.meta.lastUpdated.empty()",
          xpath:
            "not(exists(f:contained/*/f:meta/f:versionId)) and not(exists(f:contained/*/f:meta/f:lastUpdated))",
          source: "http://hl7.org/fhir/StructureDefinition/DomainResource",
        },
        {
          key: "dom-5",
          severity: "error",
          human:
            "If a resource is contained in another resource, it SHALL NOT have a security label",
          expression: "contained.meta.security.empty()",
          xpath: "not(exists(f:contained/*/f:meta/f:security))",
          source: "http://hl7.org/fhir/StructureDefinition/DomainResource",
        },
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice",
              valueBoolean: true,
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice-explanation",
              valueMarkdown:
                "When a resource has no narrative, only systems that fully understand the data can display the resource to a human safely. Including a human readable representation in the resource makes for a much more robust eco-system and cheaper handling of resources by intermediary systems. Some ecosystems restrict distribution of resources to only those systems that do fully understand the resources, and as a consequence implementers may believe that the narrative is superfluous. However experience shows that such eco-systems often open up to new participants over time.",
            },
          ],
          key: "dom-6",
          severity: "warning",
          human: "A resource should have narrative for robust management",
          expression: "text.`div`.exists()",
          xpath: "exists(f:text/h:div)",
          source: "http://hl7.org/fhir/StructureDefinition/DomainResource",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "rim", map: "Entity. Role, or Act" },
        { identity: "workflow", map: "Event" },
        {
          identity: "v2",
          map: "Partial mapping from messages containing the AL1 or IAM segment, such as the ADT^A01, ADT^A08, and ADT^A60.",
        },
        { identity: "rim", map: "Observation[classCode=ALRT, moodCode=EVN)" },
        { identity: "w5", map: "clinical.general" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "DetectedIssue",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
