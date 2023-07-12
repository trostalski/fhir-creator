const data = [
  {
    element: {
      id: "RiskAssessment.meta",
      path: "RiskAssessment.meta",
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
    baseId: "RiskAssessment.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.implicitRules",
      path: "RiskAssessment.implicitRules",
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
    baseId: "RiskAssessment.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.language",
      path: "RiskAssessment.language",
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
    baseId: "RiskAssessment.language",
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
      id: "RiskAssessment.contained",
      path: "RiskAssessment.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/RiskAssessment",
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
    baseId: "RiskAssessment.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.basedOn",
      path: "RiskAssessment.basedOn",
      short: "Request fulfilled by this assessment",
      definition:
        "A reference to the request that is fulfilled by this risk assessment.",
      min: 0,
      max: "1",
      base: { path: "RiskAssessment.basedOn", min: 0, max: "1" },
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
      mapping: [{ identity: "workflow", map: "Event.basedOn" }],
    },
    dataPath: "root.basedOn",
    parentDataPath: "root",
    basePath: "root.basedOn",
    baseId: "RiskAssessment.basedOn",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.status",
      path: "RiskAssessment.status",
      short: "registered | preliminary | final | amended +",
      definition:
        "The status of the RiskAssessment, using the same statuses as an Observation.",
      min: 1,
      max: "1",
      base: { path: "RiskAssessment.status", min: 1, max: "1" },
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
            valueString: "RiskAssessmentStatus",
          },
        ],
        strength: "required",
        description:
          "The status of the risk assessment; e.g. preliminary, final, amended, etc.",
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
    baseId: "RiskAssessment.status",
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
      id: "RiskAssessment.code",
      path: "RiskAssessment.code",
      short: "Type of assessment",
      definition: "The type of the risk assessment performed.",
      min: 0,
      max: "1",
      base: { path: "RiskAssessment.code", min: 0, max: "1" },
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
      mapping: [
        { identity: "workflow", map: "Event.code" },
        { identity: "w5", map: "FiveWs.what[x]" },
      ],
    },
    dataPath: "root.code",
    parentDataPath: "root",
    basePath: "root.code",
    baseId: "RiskAssessment.code",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.encounter",
      path: "RiskAssessment.encounter",
      short: "Where was assessment performed?",
      definition: "The encounter where the assessment was performed.",
      min: 0,
      max: "1",
      base: { path: "RiskAssessment.encounter", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
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
        { identity: "workflow", map: "Event.encounter" },
        { identity: "w5", map: "FiveWs.context" },
        {
          identity: "rim",
          map: ".inboundRelationship[typeCode=COMP].source[classCode=ENC, moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.encounter",
    parentDataPath: "root",
    basePath: "root.encounter",
    baseId: "RiskAssessment.encounter",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.condition",
      path: "RiskAssessment.condition",
      short: "Condition assessed",
      definition:
        "For assessments or prognosis specific to a particular condition, indicates the condition being assessed.",
      min: 0,
      max: "1",
      base: { path: "RiskAssessment.condition", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Condition"],
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
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=SUBJ].target[classCode=OBS, moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.condition",
    parentDataPath: "root",
    basePath: "root.condition",
    baseId: "RiskAssessment.condition",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.reasonCode",
      path: "RiskAssessment.reasonCode",
      short: "Why the assessment was necessary?",
      definition: "The reason the risk assessment was performed.",
      min: 0,
      max: "*",
      base: { path: "RiskAssessment.reasonCode", min: 0, max: "*" },
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
      mapping: [
        { identity: "workflow", map: "Event.reasonCode" },
        { identity: "w5", map: "FiveWs.why[x]" },
      ],
    },
    dataPath: "root.reasonCode[0]",
    parentDataPath: "root",
    basePath: "root.reasonCode",
    baseId: "RiskAssessment.reasonCode",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.basis",
      path: "RiskAssessment.basis",
      short: "Information used in assessment",
      definition:
        "Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).",
      min: 0,
      max: "*",
      base: { path: "RiskAssessment.basis", min: 0, max: "*" },
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
      mapping: [
        { identity: "rim", map: ".outboundRelationship[typeCode=DRIV].target" },
        { identity: "openehr", map: "Risk Factor; Link to Evidence" },
      ],
    },
    dataPath: "root.basis[0]",
    parentDataPath: "root",
    basePath: "root.basis",
    baseId: "RiskAssessment.basis",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.prediction",
      path: "RiskAssessment.prediction",
      short: "Outcome predicted",
      definition: "Describes the expected outcome for the subject.",
      comment:
        "Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.",
      min: 0,
      max: "*",
      base: { path: "RiskAssessment.prediction", min: 0, max: "*" },
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
        {
          key: "ras-2",
          severity: "error",
          human: "Must be <= 100",
          expression:
            "probability.exists($this is decimal) implies (probability as decimal) <= 100",
          xpath:
            "not(f:probabilityDecimal) or f:probabilityDecimal/@value <= 100",
          source: "http://hl7.org/fhir/StructureDefinition/RiskAssessment",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=VALUE].target[classCod=OBS, moodCode=RISK]",
        },
      ],
    },
    dataPath: "root.prediction[0]",
    parentDataPath: "root",
    basePath: "root.prediction",
    baseId: "RiskAssessment.prediction",
    isPrimitive: false,
    childPaths: [
      "root.prediction.outcome",
      "root.prediction.probability[x]",
      "root.prediction.qualitativeRisk",
      "root.prediction.relativeRisk",
      "root.prediction.when[x]",
      "root.prediction.rationale",
    ],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.prediction.probability[x]",
      path: "RiskAssessment.prediction.probability[x]",
      short: "Likelihood of specified outcome",
      definition:
        "Indicates how likely the outcome is (in the specified timeframe).",
      comment:
        "If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).",
      min: 0,
      max: "1",
      base: {
        path: "RiskAssessment.prediction.probability[x]",
        min: 0,
        max: "1",
      },
      type: [{ code: "decimal" }, { code: "Range" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
        {
          key: "ras-1",
          severity: "error",
          human: "low and high must be percentages, if present",
          expression:
            "(low.empty() or ((low.code = '%') and (low.system = %ucum))) and (high.empty() or ((high.code = '%') and (high.system = %ucum)))",
          xpath:
            "(not(f:low) or f:low[f:code/@value='%' and f:system/@value='http://unitsofmeasure.org']) and (not(f:high) or f:high[f:code/@value='%' and f:system/@value='http://unitsofmeasure.org'])",
          source: "http://hl7.org/fhir/StructureDefinition/RiskAssessment",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        {
          identity: "rim",
          map: '.inboundRelationship[typeCode=SUBJ].source[classCode=OBS, moodCode=EVN, code="probability"].value',
        },
        { identity: "openehr", map: "Category" },
      ],
    },
    dataPath: "root.prediction.probability[x]",
    parentDataPath: "root.prediction[0]",
    basePath: "root.probability[x]",
    baseId: "RiskAssessment.prediction.probability[x]",
    isPrimitive: false,
    childPaths: [],
    multiTypeType: "decimal",
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.prediction.qualitativeRisk",
      path: "RiskAssessment.prediction.qualitativeRisk",
      short: "Likelihood of specified outcome as a qualitative value",
      definition:
        "Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).",
      min: 0,
      max: "1",
      base: {
        path: "RiskAssessment.prediction.qualitativeRisk",
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
            valueString: "RiskAssessmentProbability",
          },
        ],
        strength: "example",
        description: "The likelihood of the occurrence of a specified outcome.",
        valueSet: "http://hl7.org/fhir/ValueSet/risk-probability",
      },
    },
    dataPath: "root.prediction.qualitativeRisk",
    parentDataPath: "root.prediction[0]",
    basePath: "root.qualitativeRisk",
    baseId: "RiskAssessment.prediction.qualitativeRisk",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/risk-probability",
        code: "negligible",
        display: "Negligible likelihood",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/risk-probability",
        code: "low",
        display: "Low likelihood",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/risk-probability",
        code: "moderate",
        display: "Moderate likelihood",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/risk-probability",
        code: "high",
        display: "High likelihood",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/risk-probability",
        code: "certain",
        display: "Certain",
      },
    ],
  },
  {
    element: {
      id: "RiskAssessment.prediction.relativeRisk",
      path: "RiskAssessment.prediction.relativeRisk",
      short: "Relative likelihood",
      definition:
        "Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).",
      requirements: "Absolute risk is less meaningful than relative risk.",
      min: 0,
      max: "1",
      base: {
        path: "RiskAssessment.prediction.relativeRisk",
        min: 0,
        max: "1",
      },
      type: [{ code: "decimal" }],
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
          map: '.inboundRelationship[typeCode=SUBJ].source[classCode=OBS, moodCode=EVN, code="relative risk"].value',
        },
      ],
    },
    dataPath: "root.prediction.relativeRisk",
    parentDataPath: "root.prediction[0]",
    basePath: "root.relativeRisk",
    baseId: "RiskAssessment.prediction.relativeRisk",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.prediction.rationale",
      path: "RiskAssessment.prediction.rationale",
      short: "Explanation of prediction",
      definition:
        "Additional information explaining the basis for the prediction.",
      min: 0,
      max: "1",
      base: { path: "RiskAssessment.prediction.rationale", min: 0, max: "1" },
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
        { identity: "rim", map: ".reasonCode.text" },
        { identity: "openehr", map: "Rationale" },
      ],
    },
    dataPath: "root.prediction.rationale",
    parentDataPath: "root.prediction[0]",
    basePath: "root.rationale",
    baseId: "RiskAssessment.prediction.rationale",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment.mitigation",
      path: "RiskAssessment.mitigation",
      short: "How to reduce risk",
      definition:
        "A description of the steps that might be taken to reduce the identified risk(s).",
      requirements:
        "One of the main reasons for assessing risks is to identify whether interventional steps are needed to reduce risk.",
      min: 0,
      max: "1",
      base: { path: "RiskAssessment.mitigation", min: 0, max: "1" },
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
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=MTGT].target[classCode=ACT, moodCode=EVN].text",
        },
      ],
    },
    dataPath: "root.mitigation",
    parentDataPath: "root",
    basePath: "root.mitigation",
    baseId: "RiskAssessment.mitigation",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RiskAssessment",
      path: "RiskAssessment",
      short: "Potential outcomes for a subject with likelihood",
      definition:
        "An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.",
      alias: ["Prognosis"],
      min: 0,
      max: "*",
      base: { path: "RiskAssessment", min: 0, max: "*" },
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
        { identity: "v2", map: "N/A" },
        {
          identity: "rim",
          map: 'Observation[classCode=OBS, moodCode=EVN, code="Risk Assessment"]',
        },
        { identity: "openehr", map: "OpenEHR-EHR-EVALUATION.risk.v1" },
        { identity: "w5", map: "clinical.general" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "RiskAssessment",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
