const data = [
  {
    element: {
      id: "Encounter.meta",
      path: "Encounter.meta",
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
    baseId: "Encounter.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Encounter.implicitRules",
      path: "Encounter.implicitRules",
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
    baseId: "Encounter.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Encounter.language",
      path: "Encounter.language",
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
    baseId: "Encounter.language",
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
      id: "Encounter.contained",
      path: "Encounter.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/Encounter",
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
    baseId: "Encounter.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Encounter.status",
      path: "Encounter.status",
      short:
        "planned | arrived | triaged | in-progress | onleave | finished | cancelled +",
      definition:
        "planned | arrived | triaged | in-progress | onleave | finished | cancelled +.",
      comment:
        "Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).",
      min: 1,
      max: "1",
      base: { path: "Encounter.status", min: 1, max: "1" },
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
            valueString: "EncounterStatus",
          },
        ],
        strength: "required",
        description: "Current state of the encounter.",
        valueSet: "http://hl7.org/fhir/ValueSet/encounter-status|4.3.0",
      },
      mapping: [
        { identity: "workflow", map: "Event.status" },
        { identity: "w5", map: "FiveWs.status" },
        {
          identity: "v2",
          map: "No clear equivalent in HL7 v2; active/finished could be inferred from PV1-44, PV1-45, PV2-24; inactive could be inferred from PV2-16",
        },
        { identity: "rim", map: ".statusCode" },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "Encounter.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "planned",
        display: "Planned",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "arrived",
        display: "Arrived",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "triaged",
        display: "Triaged",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "in-progress",
        display: "In Progress",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "onleave",
        display: "On Leave",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "finished",
        display: "Finished",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "cancelled",
        display: "Cancelled",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "entered-in-error",
        display: "Entered in Error",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "unknown",
        display: "Unknown",
      },
    ],
  },
  {
    element: {
      id: "Encounter.statusHistory",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
          valueString: "StatusHistory",
        },
      ],
      path: "Encounter.statusHistory",
      short: "List of past encounter statuses",
      definition:
        "The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.",
      comment:
        "The current status is always found in the current version of the resource, not the status history.",
      min: 0,
      max: "*",
      base: { path: "Encounter.statusHistory", min: 0, max: "*" },
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
      mapping: [{ identity: "rim", map: "n/a" }],
    },
    dataPath: "root.statusHistory[0]",
    parentDataPath: "root",
    basePath: "root.statusHistory",
    baseId: "Encounter.statusHistory",
    isPrimitive: false,
    childPaths: ["root.statusHistory.status", "root.statusHistory.period"],
    value: "",
  },
  {
    element: {
      id: "Encounter.statusHistory.status",
      path: "Encounter.statusHistory.status",
      short:
        "planned | arrived | triaged | in-progress | onleave | finished | cancelled +",
      definition:
        "planned | arrived | triaged | in-progress | onleave | finished | cancelled +.",
      min: 1,
      max: "1",
      base: { path: "Encounter.statusHistory.status", min: 1, max: "1" },
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
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "EncounterStatus",
          },
        ],
        strength: "required",
        description: "Current state of the encounter.",
        valueSet: "http://hl7.org/fhir/ValueSet/encounter-status|4.3.0",
      },
      mapping: [{ identity: "rim", map: "n/a" }],
    },
    dataPath: "root.statusHistory.status",
    parentDataPath: "root.statusHistory[0]",
    basePath: "root.status",
    baseId: "Encounter.statusHistory.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "planned",
        display: "Planned",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "arrived",
        display: "Arrived",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "triaged",
        display: "Triaged",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "in-progress",
        display: "In Progress",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "onleave",
        display: "On Leave",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "finished",
        display: "Finished",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "cancelled",
        display: "Cancelled",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "entered-in-error",
        display: "Entered in Error",
      },
      {
        system: "http://hl7.org/fhir/encounter-status",
        code: "unknown",
        display: "Unknown",
      },
    ],
  },
  {
    element: {
      id: "Encounter.class",
      path: "Encounter.class",
      short: "Classification of patient encounter",
      definition:
        "Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.",
      min: 1,
      max: "1",
      base: { path: "Encounter.class", min: 1, max: "1" },
      type: [{ code: "Coding" }],
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
            valueString: "EncounterClass",
          },
        ],
        strength: "extensible",
        description: "Classification of the encounter.",
        valueSet: "http://terminology.hl7.org/ValueSet/v3-ActEncounterCode",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.class" },
        { identity: "v2", map: "PV1-2" },
        {
          identity: "rim",
          map: ".inboundRelationship[typeCode=SUBJ].source[classCode=LIST].code",
        },
      ],
    },
    dataPath: "root.class",
    parentDataPath: "root",
    basePath: "root.class",
    baseId: "Encounter.class",
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
      id: "Encounter.classHistory",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
          valueString: "ClassHistory",
        },
      ],
      path: "Encounter.classHistory",
      short: "List of past encounter classes",
      definition:
        "The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.",
      min: 0,
      max: "*",
      base: { path: "Encounter.classHistory", min: 0, max: "*" },
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
      mapping: [{ identity: "rim", map: "n/a" }],
    },
    dataPath: "root.classHistory[0]",
    parentDataPath: "root",
    basePath: "root.classHistory",
    baseId: "Encounter.classHistory",
    isPrimitive: false,
    childPaths: ["root.classHistory.class", "root.classHistory.period"],
    value: "",
  },
  {
    element: {
      id: "Encounter.classHistory.class",
      path: "Encounter.classHistory.class",
      short: "inpatient | outpatient | ambulatory | emergency +",
      definition: "inpatient | outpatient | ambulatory | emergency +.",
      min: 1,
      max: "1",
      base: { path: "Encounter.classHistory.class", min: 1, max: "1" },
      type: [{ code: "Coding" }],
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
            valueString: "EncounterClass",
          },
        ],
        strength: "extensible",
        description: "Classification of the encounter.",
        valueSet: "http://terminology.hl7.org/ValueSet/v3-ActEncounterCode",
      },
      mapping: [{ identity: "rim", map: "n/a" }],
    },
    dataPath: "root.classHistory.class",
    parentDataPath: "root.classHistory[0]",
    basePath: "root.class",
    baseId: "Encounter.classHistory.class",
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
      id: "Encounter.type",
      path: "Encounter.type",
      short: "Specific type of encounter",
      definition:
        "Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).",
      comment:
        "Since there are many ways to further classify encounters, this element is 0..*.",
      min: 0,
      max: "*",
      base: { path: "Encounter.type", min: 0, max: "*" },
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
            valueString: "EncounterType",
          },
        ],
        strength: "example",
        description: "A specific code indicating type of service provided",
        valueSet: "http://hl7.org/fhir/ValueSet/encounter-type",
      },
      mapping: [
        { identity: "workflow", map: "Event.code" },
        { identity: "w5", map: "FiveWs.class" },
        { identity: "v2", map: "PV1-4 / PV1-18" },
        { identity: "rim", map: ".code" },
      ],
    },
    dataPath: "root.type[0]",
    parentDataPath: "root",
    basePath: "root.type",
    baseId: "Encounter.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/encounter-type",
        code: "ADMS",
        display: "Annual diabetes mellitus screening",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/encounter-type",
        code: "BD/BM-clin",
        display: "Bone drilling/bone marrow punction in clinic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/encounter-type",
        code: "CCS60",
        display: "Infant colon screening - 60 minutes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/encounter-type",
        code: "OKI",
        display: "Outpatient Kenacort injection",
      },
    ],
  },
  {
    element: {
      id: "Encounter.serviceType",
      path: "Encounter.serviceType",
      short: "Specific type of service",
      definition:
        "Broad categorization of the service that is to be provided (e.g. cardiology).",
      min: 0,
      max: "1",
      base: { path: "Encounter.serviceType", min: 0, max: "1" },
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
            valueString: "EncounterServiceType",
          },
        ],
        strength: "example",
        description:
          "Broad categorization of the service that is to be provided.",
        valueSet: "http://hl7.org/fhir/ValueSet/service-type",
      },
      mapping: [
        { identity: "workflow", map: "Event.code" },
        { identity: "v2", map: "PV1-10" },
        { identity: "rim", map: "n/a" },
      ],
    },
    dataPath: "root.serviceType",
    parentDataPath: "root",
    basePath: "root.serviceType",
    baseId: "Encounter.serviceType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "1",
        display: "Adoption/Permanent Care Info/Support",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "2",
        display: "Aged Care Assessment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "3",
        display: "Aged Care Information/Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "4",
        display: "Aged Residential Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "5",
        display: "Case Management for Older Persons",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "6",
        display: "Delivered Meals (Meals On Wheels)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "7",
        display: "Friendly Visiting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "8",
        display: "Home Care/Housekeeping Assistance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "9",
        display: "Home Maintenance and Repair",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "10",
        display: "Personal Alarms/Alerts",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "11",
        display: "Personal Care for Older Persons",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "12",
        display: "Planned Activity Groups",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "13",
        display: "Acupuncture",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "14",
        display: "Alexander Technique Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "15",
        display: "Aromatherapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "16",
        display: "Biorhythm Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "17",
        display: "Bowen Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "18",
        display: "Chinese Herbal Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "19",
        display: "Feldenkrais",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "20",
        display: "Homoeopathy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "21",
        display: "Hydrotherapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "22",
        display: "Hypnotherapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "23",
        display: "Kinesiology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "24",
        display: "Magnetic Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "25",
        display: "Massage Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "26",
        display: "Meditation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "27",
        display: "Myotherapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "28",
        display: "Naturopathy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "29",
        display: "Reflexology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "30",
        display: "Reiki",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "31",
        display: "Relaxation Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "32",
        display: "Shiatsu",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "33",
        display: "Western Herbal Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "34",
        display: "Family Day care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "35",
        display: "Holiday Programs",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "36",
        display: "Kindergarten Inclusion Support",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "37",
        display: "Kindergarten/Preschool",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "38",
        display: "Long Day Child Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "39",
        display: "Occasional Child Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "40",
        display: "Outside School Hours Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "41",
        display: "Children's Play Programs",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "42",
        display: "Parenting/Family Support/Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "43",
        display: "Playgroup",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "44",
        display: "School Nursing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "45",
        display: "Toy Library",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "46",
        display: "Child Protection/Child Abuse Report",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "47",
        display: "Foster Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "48",
        display: "Residential/Out-of-Home Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "49",
        display: "Support - Young People Leaving Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "50",
        display: "Audiology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "51",
        display: "Blood Donation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "52",
        display: "Chiropractic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "53",
        display: "Dietetics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "54",
        display: "Family Planning",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "55",
        display: "Health Advocacy/Liaison Service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "56",
        display: "Health Information/Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "57",
        display: "Immunization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "58",
        display: "Maternal & Child Health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "59",
        display: "Nursing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "60",
        display: "Nutrition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "61",
        display: "Occupational Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "62",
        display: "Optometry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "63",
        display: "Osteopathy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "64",
        display: "Pharmacy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "65",
        display: "Physiotherapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "66",
        display: "Podiatry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "67",
        display: "Sexual Health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "68",
        display: "Speech Pathology/Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "69",
        display: "Bereavement Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "70",
        display: "Crisis Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "71",
        display: "Family Counselling/Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "72",
        display: "Family Violence Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "73",
        display: "Financial Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "74",
        display: "Generalist Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "75",
        display: "Genetic Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "76",
        display: "Health Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "77",
        display: "Mediation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "78",
        display: "Problem Gambling Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "79",
        display: "Relationship Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "80",
        display: "Sexual Assault Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "81",
        display: "Trauma Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "82",
        display: "Victims of Crime Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "83",
        display: "Cemetery Operation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "84",
        display: "Cremation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "85",
        display: "Death Service Information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "86",
        display: "Funeral Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "87",
        display: "Endodontic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "88",
        display: "General Dental",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "89",
        display: "Oral Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "90",
        display: "Oral Surgery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "91",
        display: "Orthodontic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "92",
        display: "Paediatric Dentistry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "93",
        display: "Periodontic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "94",
        display: "Prosthodontic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "95",
        display: "Acquired Brain Injury Info/Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "96",
        display: "Disability Advocacy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "97",
        display: "Disability Aids & Equipment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "98",
        display: "Disability Case Management",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "99",
        display: "Disability Day Programs/Activities",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "100",
        display: "Disability Information/Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "101",
        display: "Disability Support Packages",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "102",
        display: "Disability Supported Accommodation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "103",
        display: "Early Childhood Intervention",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "104",
        display: "Hearing Aids & Equipment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "105",
        display: "Drug and/or Alcohol Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "106",
        display: "Drug/Alcohol Information/Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "107",
        display: "Needle & Syringe Exchange",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "108",
        display: "Non-resid. Alcohol/Drug Treatment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "109",
        display: "Pharmacotherapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "110",
        display: "Quit Program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "111",
        display: "Residential Alcohol/Drug Treatment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "112",
        display: "Adult/Community Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "113",
        display: "Higher Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "114",
        display: "Primary Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "115",
        display: "Secondary Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "116",
        display: "Training & Vocational Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "117",
        display: "Emergency Medical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "118",
        display: "Employment Placement and/or Support",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "119",
        display: "Vocational Rehabilitation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "120",
        display: "Work Safety/Accident Prevention",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "121",
        display: "Financial Assistance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "122",
        display: "Financial Information/Advice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "123",
        display: "Material Aid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "124",
        display: "General Practice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "125",
        display: "Accommodation Placement/Support",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "126",
        display: "Crisis/Emergency Accommodation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "127",
        display: "Homelessness Support",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "128",
        display: "Housing Information/Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "129",
        display: "Public Rental Housing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "130",
        display: "Interpreting/Multilingual Service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "131",
        display: "Juvenile Justice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "132",
        display: "Legal Advocacy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "133",
        display: "Legal Information/Advice/Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "134",
        display: "Mental Health Advocacy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "135",
        display: "Mental Health Assess/Triage/Crisis Response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "136",
        display: "Mental Health Case Management",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "137",
        display: "Mental Health Information/Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "138",
        display: "Mental Health Inpatient Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "139",
        display: "Mental Health Non-residential Rehab",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "140",
        display: "Mental Health Residential Rehab/CCU",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "141",
        display: "Psychiatry (Requires Referral)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "142",
        display: "Psychology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "143",
        display: "Martial Arts",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "144",
        display: "Personal Fitness Training",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "145",
        display: "Physical Activity Group",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "146",
        display: "Physical Activity Programs",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "147",
        display: "Physical Fitness Testing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "148",
        display: "Pilates",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "149",
        display: "Self-Defence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "150",
        display: "Sporting Club",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "151",
        display: "Yoga",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "152",
        display: "Food Safety",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "153",
        display: "Health Regulatory /Inspection /Cert.",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "154",
        display: "Work Health/Safety Inspection/Cert.",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "155",
        display: "Carer Support",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "156",
        display: "Respite Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "157",
        display: "Anatomical Pathology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "158",
        display: "Pathology - Clinical Chemistry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "159",
        display: "Pathology - General",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "160",
        display: "Pathology - Genetics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "161",
        display: "Pathology - Haematology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "162",
        display: "Pathology - Immunology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "163",
        display: "Pathology - Microbiology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "164",
        display: "Anaesthesiology - Pain Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "165",
        display: "Cardiology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "166",
        display: "Clinical Genetics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "167",
        display: "Clinical Pharmacology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "168",
        display: "Dermatology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "169",
        display: "Endocrinology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "170",
        display: "Gastroenterology & Hepatology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "171",
        display: "Geriatric Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "172",
        display: "Immunology & Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "173",
        display: "Infectious Diseases",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "174",
        display: "Intensive Care Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "175",
        display: "Medical Oncology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "176",
        display: "Nephrology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "177",
        display: "Neurology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "178",
        display: "Occupational Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "179",
        display: "Palliative Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "180",
        display: "Public Health Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "181",
        display: "Rehabilitation Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "182",
        display: "Rheumatology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "183",
        display: "Sleep Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "184",
        display: "Thoracic Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "185",
        display: "Gynaecological Oncology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "186",
        display: "Obstetrics & Gynaecology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "187",
        display: "Reproductive Endocrinology/Infertility",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "188",
        display: "Urogynaecology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "189",
        display: "Neonatology & Perinatology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "190",
        display: "Paediatric Cardiology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "191",
        display: "Paediatric Clinical Genetics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "192",
        display: "Paediatric Clinical Pharmacology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "193",
        display: "Paediatric Endocrinology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "194",
        display: "Paed. Gastroenterology/Hepatology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "195",
        display: "Paediatric Haematology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "196",
        display: "Paediatric Immunology & Allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "197",
        display: "Paediatric Infectious Diseases",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "198",
        display: "Paediatric Intensive Care Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "199",
        display: "Paediatric Medical Oncology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "200",
        display: "Paediatric Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "201",
        display: "Paediatric Nephrology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "202",
        display: "Paediatric Neurology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "203",
        display: "Paediatric Nuclear Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "204",
        display: "Paediatric Rehabilitation Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "205",
        display: "Paediatric Rheumatology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "206",
        display: "Paediatric Sleep Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "207",
        display: "Paediatric Surgery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "208",
        display: "Paediatric Thoracic Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "209",
        display: "Diag. Radiology /Xray /CT /Fluoroscopy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "210",
        display: "Diagnostic Ultrasound",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "211",
        display: "Magnetic Resonance Imaging (MRI)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "212",
        display: "Nuclear Medicine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "213",
        display: "Obstetric/Gynaecological Ultrasound",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "214",
        display: "Radiation Oncology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "215",
        display: "Cardiothoracic Surgery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "216",
        display: "Neurosurgery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "217",
        display: "Ophthalmology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "218",
        display: "Orthopaedic Surgery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "219",
        display: "Otolaryngology/Head & Neck Surgery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "220",
        display: "Plastic & Reconstructive Surgery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "221",
        display: "Surgery - General",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "222",
        display: "Urology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "223",
        display: "Vascular Surgery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "224",
        display: "Support Groups",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "225",
        display: "Air ambulance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "226",
        display: "Ambulance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "227",
        display: "Blood Transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "228",
        display: "Community Bus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "229",
        display: "Flying Doctor Service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "230",
        display: "Patient Transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "231",
        display: "A&E",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "232",
        display: "A&EP",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "233",
        display: "Abuse",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "234",
        display: "ACAS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "235",
        display: "Access",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "236",
        display: "Accident",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "237",
        display: "Acute Inpatient Serv",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "238",
        display: "Adult Day Programs",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "239",
        display: "Adult Mental Health Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "240",
        display: "Advice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "241",
        display: "Advocacy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "242",
        display: "Aged Persons Mental",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "243",
        display: "Aged Persons Mental",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "244",
        display: "Aged Persons Mental",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "245",
        display: "Aids",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "246",
        display: "Al-Anon",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "247",
        display: "Alcohol",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "248",
        display: "Al-Teen",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "249",
        display: "Antenatal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "250",
        display: "Anxiety",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "251",
        display: "Arthritis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "252",
        display: "Assessment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "253",
        display: "Assistance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "254",
        display: "Asthma",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "255",
        display: "ATSS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "256",
        display: "Attendant Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "257",
        display: "Babies",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "258",
        display: "Bathroom Modificatio",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "259",
        display: "Behavior",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "260",
        display: "Behavior Interventi",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "261",
        display: "Bereavement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "262",
        display: "Bipolar",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "263",
        display: "Birth",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "264",
        display: "Birth Control",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "265",
        display: "Birthing Options",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "266",
        display: "BIST",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "267",
        display: "Blood",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "268",
        display: "Bone",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "269",
        display: "Bowel",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "270",
        display: "Brain",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "271",
        display: "Breast Feeding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "272",
        display: "Breast Screen",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "273",
        display: "Brokerage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "274",
        display: "Cancer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "275",
        display: "Cancer Support",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "276",
        display: "Cardiovascular Disea",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "277",
        display: "Care Packages",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "278",
        display: "Carer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "279",
        display: "Case Management",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "280",
        display: "Casualty",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "281",
        display: "Centrelink",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "282",
        display: "Chemists",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "283",
        display: "Child And Adolescent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "284",
        display: "Child Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "285",
        display: "Child Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "286",
        display: "Children",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "287",
        display: "Children's Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "288",
        display: "Cholesterol",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "289",
        display: "Clothing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "290",
        display: "Community Based Acco",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "291",
        display: "Community Care Unit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "292",
        display: "Community Child And",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "293",
        display: "Community Health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "294",
        display: "Community Residentia",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "295",
        display: "Community Transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "296",
        display: "Companion Visiting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "297",
        display: "Companionship",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "298",
        display: "Consumer Advice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "299",
        display: "Consumer Issues",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "300",
        display: "Continuing Care Serv",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "301",
        display: "Contraception Inform",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "302",
        display: "Coordinating Bodies",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "303",
        display: "Correctional Service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "304",
        display: "Council Environmenta",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "305",
        display: "Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "306",
        display: "Criminal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "307",
        display: "Crises",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "308",
        display: "Crisis Assessment An",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "309",
        display: "Crisis Assistance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "310",
        display: "Crisis Refuge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "311",
        display: "Day Program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "312",
        display: "Deaf",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "313",
        display: "Dental Hygiene",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "314",
        display: "Dentistry",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "315",
        display: "Dentures",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "316",
        display: "Depression",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "317",
        display: "Detoxification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "318",
        display: "Diabetes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "319",
        display: "Diaphragm Fitting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "320",
        display: "Dieticians",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "321",
        display: "Disabled Parking",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "322",
        display: "District Nursing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "323",
        display: "Divorce",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "324",
        display: "Doctors",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "325",
        display: "Drink-Drive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "326",
        display: "Dual Diagnosis Servi",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "327",
        display: "Early Choice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "328",
        display: "Eating Disorder",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "330",
        display: "Emergency Relief",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "331",
        display: "Employment And Train",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "332",
        display: "Environment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "333",
        display: "Equipment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "334",
        display: "Exercise",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "335",
        display: "Facility",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "336",
        display: "Family Choice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "337",
        display: "Family Law",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "338",
        display: "Family Options",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "339",
        display: "Family Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "340",
        display: "FFYA",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "341",
        display: "Financial Aid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "342",
        display: "Fitness",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "343",
        display: "Flexible Care Packag",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "344",
        display: "Food",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "345",
        display: "Food Vouchers",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "346",
        display: "Forensic Mental Heal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "347",
        display: "Futures",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "348",
        display: "Futures For Young Ad",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "349",
        display: "General Practitioner",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "350",
        display: "Grants",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "351",
        display: "Grief",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "352",
        display: "Grief Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "353",
        display: "HACC",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "354",
        display: "Heart Disease",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "355",
        display: "Help",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "356",
        display: "High Blood Pressure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "357",
        display: "Home Help",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "358",
        display: "Home Nursing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "359",
        display: "Homefirst",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "360",
        display: "Hospice Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "361",
        display: "Hospital Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "362",
        display: "Hospital To Home",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "364",
        display: "Hostel",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "365",
        display: "Hostel Accommodation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "366",
        display: "Household Items",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "367",
        display: "Hypertension",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "368",
        display: "Illness",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "369",
        display: "Independent Living",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "370",
        display: "Information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "371",
        display: "Injury",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "372",
        display: "Intake",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "373",
        display: "Intensive Mobile You",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "374",
        display: "Intervention",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "375",
        display: "Job Searching",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "376",
        display: "Justice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "377",
        display: "Leisure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "378",
        display: "Loans",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "379",
        display: "Low Income Earners",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "380",
        display: "Lung",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "381",
        display: "Making A Difference",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "382",
        display: "Medical Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "383",
        display: "Medical Specialists",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "384",
        display: "Medication Administr",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "385",
        display: "Menstrual Informatio",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "386",
        display: "Methadone",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "387",
        display: "Mobile Support And T",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "388",
        display: "Motor Neurone",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "389",
        display: "Multiple Sclerosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "390",
        display: "Neighbourhood House",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "391",
        display: "Nursing Home",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "392",
        display: "Nursing Mothers",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "393",
        display: "Obesity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "394",
        display: "Occupational Health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "395",
        display: "Optometrist",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "396",
        display: "Oral Hygiene",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "397",
        display: "Outpatients",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "398",
        display: "Outreach Service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "399",
        display: "PADP",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "400",
        display: "Pain",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "401",
        display: "Pap Smear",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "402",
        display: "Parenting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "403",
        display: "Peak Organizations",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "404",
        display: "Personal Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "405",
        display: "Pharmacies",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "406",
        display: "Phobias",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "407",
        display: "Physical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "408",
        display: "Physical Activity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "409",
        display: "Postnatal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "410",
        display: "Pregnancy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "411",
        display: "Pregnancy Tests",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "412",
        display: "Preschool",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "413",
        display: "Prescriptions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "414",
        display: "Primary Mental Healt",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "415",
        display: "Property Maintenance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "416",
        display: "Prostate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "417",
        display: "Psychiatric",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "418",
        display: "Psychiatric Disabili",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "419",
        display: "Psychiatric Disabili",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "420",
        display: "Psychiatric Disabili",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "421",
        display: "Psychiatric Disabili",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "422",
        display: "Psychiatric Disabili",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "423",
        display: "Psychiatric Support",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "424",
        display: "Recreation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "425",
        display: "Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "426",
        display: "Refuge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "427",
        display: "Rent Assistance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "428",
        display: "Residential Faciliti",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "429",
        display: "Residential Respite",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "430",
        display: "Respiratory",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "431",
        display: "Response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "432",
        display: "Rooming Houses",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "433",
        display: "Safe Sex",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "434",
        display: "Secure Extended Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "435",
        display: "Self Help",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "436",
        display: "Separation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "437",
        display: "Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "438",
        display: "Sex Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "439",
        display: "Sexual Abuse",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "440",
        display: "Sexual Issues",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "441",
        display: "Sexually Transmitted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "442",
        display: "SIDS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "443",
        display: "Social Support",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "444",
        display: "Socialisation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "445",
        display: "Special Needs",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "446",
        display: "Speech Therapist",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "447",
        display: "Splinting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "448",
        display: "Sport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "449",
        display: "Statewide And Specia",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "450",
        display: "STD",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "451",
        display: "STI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "452",
        display: "Stillbirth",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "453",
        display: "Stomal Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "454",
        display: "Stroke",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "455",
        display: "Substance Abuse",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "456",
        display: "Support",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "457",
        display: "Syringes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "458",
        display: "Teeth",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "459",
        display: "Tenancy Advice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "460",
        display: "Terminal Illness",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "461",
        display: "Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "462",
        display: "Transcription",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "463",
        display: "Translating Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "464",
        display: "Translator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "465",
        display: "Transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "466",
        display: "Vertebrae",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "467",
        display: "Violence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "468",
        display: "Vocational Guidance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "469",
        display: "Weight",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "470",
        display: "Welfare Assistance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "471",
        display: "Welfare Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "472",
        display: "Wheelchairs",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "473",
        display: "Wound Management",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "474",
        display: "Young People At Risk",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "475",
        display: "Further Desc. - Community Health Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "476",
        display: "Library",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "477",
        display: "Community Hours",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "478",
        display: "Further Desc. - Specialist Medical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "479",
        display: "Hepatology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "480",
        display: "Gastroenterology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "481",
        display: "Gynaecology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "482",
        display: "Obstetrics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "483",
        display: "Further Desc. - Specialist Surgical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "484",
        display: "Placement Protection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "485",
        display: "Family Violence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "486",
        display: "Integrated Family Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "488",
        display: "Diabetes Educator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "489",
        display: "Kinship Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "490",
        display: "General Mental Health Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "491",
        display: "Exercise Physiology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "492",
        display: "Medical Research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "493",
        display: "Youth",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "494",
        display: "Youth Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "495",
        display: "Youth Health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "496",
        display: "Child and Family Ser",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "497",
        display: "Home Visits",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "498",
        display: "Mobile Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "500",
        display: "Before and/or After",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "501",
        display: "Cancer Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "502",
        display: "Integrated Cancer Se",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "503",
        display: "Multidisciplinary Se",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "504",
        display: "Multidisciplinary Ca",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "505",
        display: "Meetings",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "506",
        display: "Blood pressure monit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "507",
        display: "Dose administration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "508",
        display: "Medical Equipment Hi",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "509",
        display: "Parenting/Family Support/Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "510",
        display: "Deputising Service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "513",
        display: "Cancer Support Groups",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "514",
        display: "Community Cancer Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "530",
        display: "Disability Care Transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "531",
        display: "Aged Care Transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "532",
        display: "Diabetes Education s",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "533",
        display: "Cardiac Rehabilitati",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "534",
        display: "Young Adult Diabetes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "535",
        display: "Pulmonary Rehabilita",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "536",
        display: "Art therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "537",
        display: "Medication Reviews",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "538",
        display: "Telephone Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "539",
        display: "Telephone Help Line",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "540",
        display: "Online Service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "541",
        display: "Crisis - Mental Health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "542",
        display: "Youth Crisis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "543",
        display: "Sexual Assault",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "544",
        display: "GPAH Other",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "545",
        display: "Paediatric Dermatology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "546",
        display: "Veterans Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "547",
        display: "Veterans",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "548",
        display: "Food Relief/Food/Meals",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "550",
        display: "Dementia Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "551",
        display: "Alzheimer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "552",
        display: "Drug and/or Alcohol Support Groups",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "553",
        display: "1-on-1 Support /Mentoring /Coaching",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "554",
        display: "Chronic Disease Management",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "555",
        display: "Liaison Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "556",
        display: "Walk-in Centre /Non-Emergency",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "557",
        display: "Inpatients",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "558",
        display: "Spiritual Counselling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "559",
        display: "Women's Health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "560",
        display: "Men's Health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "561",
        display: "Health Education/Awareness Program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "562",
        display: "Test Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "563",
        display: "Remedial Massage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "564",
        display: "Adolescent Mental Health Services",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "565",
        display: "Youth Drop In/Assistance/Support",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "566",
        display: "Aboriginal Health Worker",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "567",
        display: "Women's Health Clinic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "568",
        display: "Men's Health Clinic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "569",
        display: "Migrant Health Clinic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "570",
        display: "Refugee Health Clinic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "571",
        display: "Aboriginal Health Clinic",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "572",
        display: "Nurse Practitioner Lead Clinic/s",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "573",
        display: "Nurse Lead Clinic/s",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "574",
        display: "Culturally Tailored Support Groups",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "575",
        display: "Culturally Tailored Health Promotion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "576",
        display: "Rehabilitation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "577",
        display: "Education Information/Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "580",
        display: "Social Work",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "581",
        display: "Haematology",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "582",
        display: "Maternity Shared Car",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "583",
        display: "Rehabilitation Servi",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "584",
        display: "Cranio-sacral Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "585",
        display: "Prosthetics & Orthotics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "589",
        display: "Home Medicine Review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "590",
        display: "GPAH - Medical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "591",
        display: "Music Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "593",
        display: "Falls Prevention",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "599",
        display: "Accommodation/Tenancy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "600",
        display: "Assess-Skill, Ability, Needs",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "601",
        display: "Assist Access/Maintain Employ",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "602",
        display: "Assist Prod-Pers Care/Safety",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "603",
        display: "Assist-Integrate School/Ed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "604",
        display: "Assist-Life Stage, Transition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "605",
        display: "Assist-Personal Activities",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "606",
        display: "Assist-Travel/Transport",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "607",
        display: "Assistive Equip-General Tasks",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "608",
        display: "Assistive Equip-Recreation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "609",
        display: "Assistive Prod-Household Task",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "610",
        display: "Behavior Support",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "611",
        display: "Comms & Info Equipment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "612",
        display: "Community Nursing Care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "613",
        display: "Daily Tasks/Shared Living",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "614",
        display: "Development-Life Skills",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "615",
        display: "Early Childhood Supports",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "616",
        display: "Equipment Special Assess Setup",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "617",
        display: "Hearing Equipment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "618",
        display: "Home Modification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "619",
        display: "Household Tasks",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "620",
        display: "Interpret/Translate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "621",
        display: "Other Innovative Supports",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "622",
        display: "Participate Community",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "623",
        display: "Personal Mobility Equipment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "624",
        display: "Physical Wellbeing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "625",
        display: "Plan Management",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "626",
        display: "Therapeutic Supports",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "627",
        display: "Training-Travel Independence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "628",
        display: "Vehicle modifications",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/service-type",
        code: "629",
        display: "Vision Equipment",
      },
    ],
  },
  {
    element: {
      id: "Encounter.priority",
      path: "Encounter.priority",
      short: "Indicates the urgency of the encounter",
      definition: "Indicates the urgency of the encounter.",
      min: 0,
      max: "1",
      base: { path: "Encounter.priority", min: 0, max: "1" },
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
            valueString: "Priority",
          },
        ],
        strength: "example",
        description: "Indicates the urgency of the encounter.",
        valueSet: "http://terminology.hl7.org/ValueSet/v3-ActPriority",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.grade" },
        { identity: "v2", map: "PV2-25" },
        { identity: "rim", map: ".priorityCode" },
      ],
    },
    dataPath: "root.priority",
    parentDataPath: "root",
    basePath: "root.priority",
    baseId: "Encounter.priority",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      { code: "A" },
      { code: "CR" },
      { code: "EL" },
      { code: "EM" },
      { code: "P" },
      { code: "PRN" },
      { code: "R" },
      { code: "RR" },
      { code: "S" },
      { code: "T" },
      { code: "UD" },
      { code: "UR" },
    ],
  },
  {
    element: {
      id: "Encounter.episodeOfCare",
      path: "Encounter.episodeOfCare",
      short:
        "Episode(s) of care that this encounter should be recorded against",
      definition:
        "Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).",
      min: 0,
      max: "*",
      base: { path: "Encounter.episodeOfCare", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
          ],
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
        { identity: "workflow", map: "Event.context" },
        { identity: "w5", map: "FiveWs.context" },
        { identity: "v2", map: "PV1-54, PV1-53" },
        { identity: "rim", map: "n/a" },
      ],
    },
    dataPath: "root.episodeOfCare[0]",
    parentDataPath: "root",
    basePath: "root.episodeOfCare",
    baseId: "Encounter.episodeOfCare",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Encounter.participant",
      path: "Encounter.participant",
      short: "List of participants involved in the encounter",
      definition: "The list of people responsible for providing the service.",
      min: 0,
      max: "*",
      base: { path: "Encounter.participant", min: 0, max: "*" },
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
      isSummary: true,
      mapping: [
        { identity: "workflow", map: "Event.performer" },
        { identity: "v2", map: "ROL" },
        { identity: "rim", map: ".participation[typeCode=PFM]" },
      ],
    },
    dataPath: "root.participant[0]",
    parentDataPath: "root",
    basePath: "root.participant",
    baseId: "Encounter.participant",
    isPrimitive: false,
    childPaths: [
      "root.participant.type[0]",
      "root.participant.period",
      "root.participant.individual",
    ],
    value: "",
  },
  {
    element: {
      id: "Encounter.participant.type",
      path: "Encounter.participant.type",
      short: "Role of participant in encounter",
      definition: "Role of participant in encounter.",
      comment:
        "The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.",
      min: 0,
      max: "*",
      base: { path: "Encounter.participant.type", min: 0, max: "*" },
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
            valueString: "ParticipantType",
          },
        ],
        strength: "extensible",
        description: "Role of participant in encounter.",
        valueSet: "http://hl7.org/fhir/ValueSet/encounter-participant-type",
      },
      mapping: [
        { identity: "workflow", map: "Event.performer.function" },
        { identity: "v2", map: "ROL-3 (or maybe PRT-4)" },
        { identity: "rim", map: ".functionCode" },
      ],
    },
    dataPath: "root.participant.type[0]",
    parentDataPath: "root.participant[0]",
    basePath: "root.type",
    baseId: "Encounter.participant.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PART",
        display: "Participation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "_ParticipationAncillary",
        display: "ParticipationAncillary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ADM",
        display: "admitter",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ATND",
        display: "attender",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "CALLBCK",
        display: "callback contact",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "CON",
        display: "consultant",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "DIS",
        display: "discharger",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ESC",
        display: "escort",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "REF",
        display: "referrer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "_ParticipationInformationGenerator",
        display: "ParticipationInformationGenerator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "AUT",
        display: "author (originator)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "INF",
        display: "informant",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "TRANS",
        display: "Transcriber",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ENT",
        display: "data entry person",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "WIT",
        display: "witness",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "NOTARY",
        display: "notary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "CST",
        display: "custodian",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "DIR",
        display: "direct target",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ALY",
        display: "analyte",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "BBY",
        display: "baby",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "CAT",
        display: "catalyst",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "CSM",
        display: "consumable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "TPA",
        display: "therapeutic agent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "DEV",
        display: "device",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "NRD",
        display: "non-reuseable device",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "RDV",
        display: "reusable device",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "DON",
        display: "donor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "EXPAGNT",
        display: "ExposureAgent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "EXPART",
        display: "ExposureParticipation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "EXPTRGT",
        display: "ExposureTarget",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "EXSRC",
        display: "ExposureSource",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PRD",
        display: "product",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "SBJ",
        display: "subject",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "SPC",
        display: "specimen",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "IND",
        display: "indirect target",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "BEN",
        display: "beneficiary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "CAGNT",
        display: "causative agent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "COV",
        display: "coverage target",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "GUAR",
        display: "guarantor party",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "HLD",
        display: "holder",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "RCT",
        display: "record target",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "RCV",
        display: "receiver",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "IRCP",
        display: "information recipient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "NOT",
        display: "ugent notification contact",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PRCP",
        display: "primary information recipient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "REFB",
        display: "Referred By",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "REFT",
        display: "Referred to",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "TRC",
        display: "tracker",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "LOC",
        display: "location",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "DST",
        display: "destination",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ELOC",
        display: "entry location",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ORG",
        display: "origin",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "RML",
        display: "remote",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "VIA",
        display: "via",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PRF",
        display: "performer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "DIST",
        display: "distributor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PPRF",
        display: "primary performer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "SPRF",
        display: "secondary performer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "RESP",
        display: "responsible party",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "VRF",
        display: "verifier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "AUTHEN",
        display: "authenticator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "LA",
        display: "legal authenticator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "SPRF",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PPRF",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PART",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/participant-type",
        code: "translator",
        display: "Translator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/participant-type",
        code: "emergency",
        display: "Emergency",
      },
    ],
  },
  {
    element: {
      id: "Encounter.participant.individual",
      path: "Encounter.participant.individual",
      short: "Persons involved in the encounter other than the patient",
      definition: "Persons involved in the encounter other than the patient.",
      min: 0,
      max: "1",
      base: { path: "Encounter.participant.individual", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Practitioner",
            "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
            "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          ],
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
        { identity: "workflow", map: "Event.performer.actor" },
        { identity: "w5", map: "FiveWs.who" },
        { identity: "v2", map: "ROL-4" },
        { identity: "rim", map: ".role" },
      ],
    },
    dataPath: "root.participant.individual",
    parentDataPath: "root.participant[0]",
    basePath: "root.individual",
    baseId: "Encounter.participant.individual",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Encounter.period",
      path: "Encounter.period",
      short: "The start and end time of the encounter",
      definition: "The start and end time of the encounter.",
      comment: "If not (yet) known, the end of the Period may be omitted.",
      min: 0,
      max: "1",
      base: { path: "Encounter.period", min: 0, max: "1" },
      type: [{ code: "Period" }],
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
        { identity: "workflow", map: "Event.occurrence[x]" },
        { identity: "w5", map: "FiveWs.done[x]" },
        { identity: "v2", map: "PV1-44, PV1-45" },
        { identity: "rim", map: ".effectiveTime (low & high)" },
      ],
    },
    dataPath: "root.period",
    parentDataPath: "root",
    basePath: "root.period",
    baseId: "Encounter.period",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Encounter.reasonCode",
      path: "Encounter.reasonCode",
      short: "Coded reason the encounter takes place",
      definition:
        "Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.",
      comment:
        "For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).",
      alias: ["Indication", "Admission diagnosis"],
      min: 0,
      max: "*",
      base: { path: "Encounter.reasonCode", min: 0, max: "*" },
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
            valueString: "EncounterReason",
          },
        ],
        strength: "preferred",
        description: "Reason why the encounter takes place.",
        valueSet: "http://hl7.org/fhir/ValueSet/encounter-reason",
      },
      mapping: [
        { identity: "workflow", map: "Event.reasonCode" },
        { identity: "w5", map: "FiveWs.why[x]" },
        {
          identity: "v2",
          map: "EVN-4 / PV2-3 (note: PV2-3 is nominally constrained to inpatient admissions; HL7 v2 makes no vocabulary suggestions for PV2-3; would not expect PV2 segment or PV2-3 to be in use in all implementations )",
        },
        { identity: "rim", map: ".reasonCode" },
      ],
    },
    dataPath: "root.reasonCode[0]",
    parentDataPath: "root",
    basePath: "root.reasonCode",
    baseId: "Encounter.reasonCode",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Encounter.diagnosis",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
          valueString: "Diagnosis",
        },
      ],
      path: "Encounter.diagnosis",
      short: "The list of diagnosis relevant to this encounter",
      definition: "The list of diagnosis relevant to this encounter.",
      min: 0,
      max: "*",
      base: { path: "Encounter.diagnosis", min: 0, max: "*" },
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
      isSummary: true,
      mapping: [
        { identity: "rim", map: ".outboundRelationship[typeCode=RSON]" },
      ],
    },
    dataPath: "root.diagnosis[0]",
    parentDataPath: "root",
    basePath: "root.diagnosis",
    baseId: "Encounter.diagnosis",
    isPrimitive: false,
    childPaths: [
      "root.diagnosis.condition",
      "root.diagnosis.use",
      "root.diagnosis.rank",
    ],
    value: "",
  },
  {
    element: {
      id: "Encounter.diagnosis.use",
      path: "Encounter.diagnosis.use",
      short:
        "Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …)",
      definition:
        "Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).",
      min: 0,
      max: "1",
      base: { path: "Encounter.diagnosis.use", min: 0, max: "1" },
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
            valueString: "DiagnosisRole",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "preferred",
        description: "The type of diagnosis this condition represents.",
        valueSet: "http://hl7.org/fhir/ValueSet/diagnosis-role",
      },
      mapping: [{ identity: "rim", map: "n/a" }],
    },
    dataPath: "root.diagnosis.use",
    parentDataPath: "root.diagnosis[0]",
    basePath: "root.use",
    baseId: "Encounter.diagnosis.use",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
        code: "AD",
        display: "Admission diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
        code: "DD",
        display: "Discharge diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
        code: "CC",
        display: "Chief complaint",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
        code: "CM",
        display: "Comorbidity diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
        code: "pre-op",
        display: "pre-op diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
        code: "post-op",
        display: "post-op diagnosis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
        code: "billing",
        display: "Billing",
      },
    ],
  },
  {
    element: {
      id: "Encounter.diagnosis.rank",
      path: "Encounter.diagnosis.rank",
      short: "Ranking of the diagnosis (for each role type)",
      definition: "Ranking of the diagnosis (for each role type).",
      min: 0,
      max: "1",
      base: { path: "Encounter.diagnosis.rank", min: 0, max: "1" },
      type: [{ code: "positiveInt" }],
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
          map: ".outboundRelationship[typeCode=RSON].priority",
        },
      ],
    },
    dataPath: "root.diagnosis.rank",
    parentDataPath: "root.diagnosis[0]",
    basePath: "root.rank",
    baseId: "Encounter.diagnosis.rank",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Encounter.hospitalization",
      path: "Encounter.hospitalization",
      short: "Details about the admission to a healthcare service",
      definition: "Details about the admission to a healthcare service.",
      comment:
        "An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.\r\rThe duration recorded in the period of this encounter covers the entire scope of this hospitalization record.",
      min: 0,
      max: "1",
      base: { path: "Encounter.hospitalization", min: 0, max: "1" },
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
          map: ".outboundRelationship[typeCode=COMP].target[classCode=ENC, moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.hospitalization",
    parentDataPath: "root",
    basePath: "root.hospitalization",
    baseId: "Encounter.hospitalization",
    isPrimitive: false,
    childPaths: [
      "root.hospitalization.preAdmissionIdentifier",
      "root.hospitalization.origin",
      "root.hospitalization.admitSource",
      "root.hospitalization.reAdmission",
      "root.hospitalization.dietPreference[0]",
      "root.hospitalization.specialCourtesy[0]",
      "root.hospitalization.specialArrangement[0]",
      "root.hospitalization.destination",
      "root.hospitalization.dischargeDisposition",
    ],
    value: "",
  },
  {
    element: {
      id: "Encounter.hospitalization.origin",
      path: "Encounter.hospitalization.origin",
      short:
        "The location/organization from which the patient came before admission",
      definition:
        "The location/organization from which the patient came before admission.",
      min: 0,
      max: "1",
      base: { path: "Encounter.hospitalization.origin", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Location",
            "http://hl7.org/fhir/StructureDefinition/Organization",
          ],
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
      mapping: [{ identity: "rim", map: ".participation[typeCode=ORG].role" }],
    },
    dataPath: "root.hospitalization.origin",
    parentDataPath: "root.hospitalization",
    basePath: "root.origin",
    baseId: "Encounter.hospitalization.origin",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Encounter.hospitalization.admitSource",
      path: "Encounter.hospitalization.admitSource",
      short: "From where patient was admitted (physician referral, transfer)",
      definition:
        "From where patient was admitted (physician referral, transfer).",
      min: 0,
      max: "1",
      base: { path: "Encounter.hospitalization.admitSource", min: 0, max: "1" },
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
            valueString: "AdmitSource",
          },
        ],
        strength: "preferred",
        description: "From where the patient was admitted.",
        valueSet: "http://hl7.org/fhir/ValueSet/encounter-admit-source",
      },
      mapping: [
        { identity: "v2", map: "PV1-14" },
        { identity: "rim", map: ".admissionReferralSourceCode" },
      ],
    },
    dataPath: "root.hospitalization.admitSource",
    parentDataPath: "root.hospitalization",
    basePath: "root.admitSource",
    baseId: "Encounter.hospitalization.admitSource",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/admit-source",
        code: "hosp-trans",
        display: "Transferred from other hospital",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/admit-source",
        code: "emd",
        display: "From accident/emergency department",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/admit-source",
        code: "outp",
        display: "From outpatient department",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/admit-source",
        code: "born",
        display: "Born in hospital",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/admit-source",
        code: "gp",
        display: "General Practitioner referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/admit-source",
        code: "mp",
        display: "Medical Practitioner/physician referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/admit-source",
        code: "nursing",
        display: "From nursing home",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/admit-source",
        code: "psych",
        display: "From psychiatric hospital",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/admit-source",
        code: "rehab",
        display: "From rehabilitation facility",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/admit-source",
        code: "other",
        display: "Other",
      },
    ],
  },
  {
    element: {
      id: "Encounter.hospitalization.reAdmission",
      path: "Encounter.hospitalization.reAdmission",
      short:
        "The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission",
      definition:
        "Whether this hospitalization is a readmission and why if known.",
      min: 0,
      max: "1",
      base: { path: "Encounter.hospitalization.reAdmission", min: 0, max: "1" },
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
            valueString: "ReAdmissionType",
          },
        ],
        strength: "example",
        description:
          "The reason for re-admission of this hospitalization encounter.",
        valueSet: "http://terminology.hl7.org/ValueSet/v2-0092",
      },
      mapping: [
        { identity: "v2", map: "PV1-13" },
        { identity: "rim", map: "n/a" },
      ],
    },
    dataPath: "root.hospitalization.reAdmission",
    parentDataPath: "root.hospitalization",
    basePath: "root.reAdmission",
    baseId: "Encounter.hospitalization.reAdmission",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0092",
        code: "R",
        display: "Re-admission",
      },
    ],
  },
  {
    element: {
      id: "Encounter.hospitalization.dietPreference",
      path: "Encounter.hospitalization.dietPreference",
      short: "Diet preferences reported by the patient",
      definition: "Diet preferences reported by the patient.",
      comment:
        "For example, a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).",
      requirements:
        "Used to track patient's diet restrictions and/or preference. For a complete description of the nutrition needs of a patient during their stay, one should use the nutritionOrder resource which links to Encounter.",
      min: 0,
      max: "*",
      base: {
        path: "Encounter.hospitalization.dietPreference",
        min: 0,
        max: "*",
      },
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
            valueString: "PatientDiet",
          },
        ],
        strength: "example",
        description:
          "Medical, cultural or ethical food preferences to help with catering requirements.",
        valueSet: "http://hl7.org/fhir/ValueSet/encounter-diet",
      },
      mapping: [
        { identity: "v2", map: "PV1-38" },
        {
          identity: "rim",
          map: '.outboundRelationship[typeCode=COMP].target[classCode=SBADM, moodCode=EVN, code="diet"]',
        },
      ],
    },
    dataPath: "root.hospitalization.dietPreference[0]",
    parentDataPath: "root.hospitalization",
    basePath: "root.dietPreference",
    baseId: "Encounter.hospitalization.dietPreference",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/diet",
        code: "vegetarian",
        display: "Vegetarian",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/diet",
        code: "dairy-free",
        display: "Dairy Free",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/diet",
        code: "nut-free",
        display: "Nut Free",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/diet",
        code: "gluten-free",
        display: "Gluten Free",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/diet",
        code: "vegan",
        display: "Vegan",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/diet",
        code: "halal",
        display: "Halal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/diet",
        code: "kosher",
        display: "Kosher",
      },
    ],
  },
  {
    element: {
      id: "Encounter.hospitalization.specialCourtesy",
      path: "Encounter.hospitalization.specialCourtesy",
      short: "Special courtesies (VIP, board member)",
      definition: "Special courtesies (VIP, board member).",
      min: 0,
      max: "*",
      base: {
        path: "Encounter.hospitalization.specialCourtesy",
        min: 0,
        max: "*",
      },
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
            valueString: "Courtesies",
          },
        ],
        strength: "preferred",
        description: "Special courtesies.",
        valueSet: "http://hl7.org/fhir/ValueSet/encounter-special-courtesy",
      },
      mapping: [
        { identity: "v2", map: "PV1-16" },
        { identity: "rim", map: ".specialCourtesiesCode" },
      ],
    },
    dataPath: "root.hospitalization.specialCourtesy[0]",
    parentDataPath: "root.hospitalization",
    basePath: "root.specialCourtesy",
    baseId: "Encounter.hospitalization.specialCourtesy",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      { code: "EXT" },
      { code: "NRM" },
      { code: "PRF" },
      { code: "STF" },
      { code: "VIP" },
      { code: "UNK" },
    ],
  },
  {
    element: {
      id: "Encounter.hospitalization.specialArrangement",
      path: "Encounter.hospitalization.specialArrangement",
      short: "Wheelchair, translator, stretcher, etc.",
      definition:
        "Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.",
      min: 0,
      max: "*",
      base: {
        path: "Encounter.hospitalization.specialArrangement",
        min: 0,
        max: "*",
      },
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
            valueString: "Arrangements",
          },
        ],
        strength: "preferred",
        description: "Special arrangements.",
        valueSet: "http://hl7.org/fhir/ValueSet/encounter-special-arrangements",
      },
      mapping: [
        { identity: "v2", map: "PV1-15 / OBR-30 / OBR-43" },
        { identity: "rim", map: ".specialArrangementCode" },
      ],
    },
    dataPath: "root.hospitalization.specialArrangement[0]",
    parentDataPath: "root.hospitalization",
    basePath: "root.specialArrangement",
    baseId: "Encounter.hospitalization.specialArrangement",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
        code: "wheel",
        display: "Wheelchair",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
        code: "add-bed",
        display: "Additional bedding",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
        code: "int",
        display: "Interpreter",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
        code: "att",
        display: "Attendant",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
        code: "dog",
        display: "Guide dog",
      },
    ],
  },
  {
    element: {
      id: "Encounter.hospitalization.dischargeDisposition",
      path: "Encounter.hospitalization.dischargeDisposition",
      short: "Category or kind of location after discharge",
      definition: "Category or kind of location after discharge.",
      min: 0,
      max: "1",
      base: {
        path: "Encounter.hospitalization.dischargeDisposition",
        min: 0,
        max: "1",
      },
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
            valueString: "DischargeDisp",
          },
        ],
        strength: "example",
        description: "Discharge Disposition.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/encounter-discharge-disposition",
      },
      mapping: [
        { identity: "v2", map: "PV1-36" },
        { identity: "rim", map: ".dischargeDispositionCode" },
      ],
    },
    dataPath: "root.hospitalization.dischargeDisposition",
    parentDataPath: "root.hospitalization",
    basePath: "root.dischargeDisposition",
    baseId: "Encounter.hospitalization.dischargeDisposition",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
        code: "home",
        display: "Home",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
        code: "alt-home",
        display: "Alternative home",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
        code: "other-hcf",
        display: "Other healthcare facility",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
        code: "hosp",
        display: "Hospice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
        code: "long",
        display: "Long-term care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
        code: "aadvice",
        display: "Left against advice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
        code: "exp",
        display: "Expired",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
        code: "psy",
        display: "Psychiatric hospital",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
        code: "rehab",
        display: "Rehabilitation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
        code: "snf",
        display: "Skilled nursing facility",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
        code: "oth",
        display: "Other",
      },
    ],
  },
  {
    element: {
      id: "Encounter.location",
      path: "Encounter.location",
      short: "List of locations where the patient has been",
      definition:
        "List of locations where  the patient has been during this encounter.",
      comment:
        'Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client\'s home" and an encounter.class = "virtual".',
      min: 0,
      max: "*",
      base: { path: "Encounter.location", min: 0, max: "*" },
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
      mapping: [{ identity: "rim", map: ".participation[typeCode=LOC]" }],
    },
    dataPath: "root.location[0]",
    parentDataPath: "root",
    basePath: "root.location",
    baseId: "Encounter.location",
    isPrimitive: false,
    childPaths: [
      "root.location.location",
      "root.location.status",
      "root.location.physicalType",
      "root.location.period",
    ],
    value: "",
  },
  {
    element: {
      id: "Encounter.location.status",
      path: "Encounter.location.status",
      short: "planned | active | reserved | completed",
      definition:
        "The status of the participants' presence at the specified location during the period specified. If the participant is no longer at the location, then the period will have an end date/time.",
      comment:
        "When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.",
      min: 0,
      max: "1",
      base: { path: "Encounter.location.status", min: 0, max: "1" },
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
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "EncounterLocationStatus",
          },
        ],
        strength: "required",
        description: "The status of the location.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/encounter-location-status|4.3.0",
      },
      mapping: [{ identity: "rim", map: ".role.statusCode" }],
    },
    dataPath: "root.location.status",
    parentDataPath: "root.location[0]",
    basePath: "root.status",
    baseId: "Encounter.location.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/encounter-location-status",
        code: "planned",
        display: "Planned",
      },
      {
        system: "http://hl7.org/fhir/encounter-location-status",
        code: "active",
        display: "Active",
      },
      {
        system: "http://hl7.org/fhir/encounter-location-status",
        code: "reserved",
        display: "Reserved",
      },
      {
        system: "http://hl7.org/fhir/encounter-location-status",
        code: "completed",
        display: "Completed",
      },
    ],
  },
  {
    element: {
      id: "Encounter.location.physicalType",
      path: "Encounter.location.physicalType",
      short:
        "The physical type of the location (usually the level in the location hierachy - bed room ward etc.)",
      definition:
        "This will be used to specify the required levels (bed/ward/room/etc.) desired to be recorded to simplify either messaging or query.",
      comment:
        "This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query.\n\nThere may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.",
      min: 0,
      max: "1",
      base: { path: "Encounter.location.physicalType", min: 0, max: "1" },
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
            valueString: "PhysicalType",
          },
        ],
        strength: "example",
        description: "Physical form of the location.",
        valueSet: "http://hl7.org/fhir/ValueSet/location-physical-type",
      },
    },
    dataPath: "root.location.physicalType",
    parentDataPath: "root.location[0]",
    basePath: "root.physicalType",
    baseId: "Encounter.location.physicalType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "si",
        display: "Site",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "bu",
        display: "Building",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "wi",
        display: "Wing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "wa",
        display: "Ward",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "lvl",
        display: "Level",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "co",
        display: "Corridor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "ro",
        display: "Room",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "bd",
        display: "Bed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "ve",
        display: "Vehicle",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "ho",
        display: "House",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "ca",
        display: "Cabinet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "rd",
        display: "Road",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "area",
        display: "Area",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "jdn",
        display: "Jurisdiction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type",
        code: "vi",
        display: "Virtual",
      },
    ],
  },
  {
    element: {
      id: "Encounter.serviceProvider",
      path: "Encounter.serviceProvider",
      short: "The organization (facility) responsible for this encounter",
      definition:
        "The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.",
      min: 0,
      max: "1",
      base: { path: "Encounter.serviceProvider", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Organization",
          ],
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
      mapping: [
        { identity: "workflow", map: "Event.performer.actor" },
        { identity: "v2", map: "PL.6  & PL.1" },
        { identity: "rim", map: ".particiaption[typeCode=PFM].role" },
      ],
    },
    dataPath: "root.serviceProvider",
    parentDataPath: "root",
    basePath: "root.serviceProvider",
    baseId: "Encounter.serviceProvider",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Encounter",
      path: "Encounter",
      short: "An interaction during which services are provided to the patient",
      definition:
        "An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.",
      alias: ["Visit"],
      min: 0,
      max: "*",
      base: { path: "Encounter", min: 0, max: "*" },
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
        { identity: "rim", map: "Encounter[@moodCode='EVN']" },
        { identity: "w5", map: "workflow.encounter" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "Encounter",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
