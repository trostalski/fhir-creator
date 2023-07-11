const data = [
  {
    element: {
      id: "MeasureReport.meta",
      path: "MeasureReport.meta",
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
    baseId: "MeasureReport.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.implicitRules",
      path: "MeasureReport.implicitRules",
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
    baseId: "MeasureReport.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.language",
      path: "MeasureReport.language",
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
    baseId: "MeasureReport.language",
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
      id: "MeasureReport.contained",
      path: "MeasureReport.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/MeasureReport",
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
    baseId: "MeasureReport.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.status",
      path: "MeasureReport.status",
      short: "complete | pending | error",
      definition:
        "The MeasureReport status. No data will be available until the MeasureReport status is complete.",
      comment:
        "This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.",
      min: 1,
      max: "1",
      base: { path: "MeasureReport.status", min: 1, max: "1" },
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
        "This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MeasureReportStatus",
          },
        ],
        strength: "required",
        description:
          "The status of the measure report (e.g. complete, pending, or error)",
        valueSet: "http://hl7.org/fhir/ValueSet/measure-report-status|4.3.0",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.status" },
        { identity: "rim", map: "status" },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "MeasureReport.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/measure-report-status",
        code: "complete",
        display: "Complete",
      },
      {
        system: "http://hl7.org/fhir/measure-report-status",
        code: "pending",
        display: "Pending",
      },
      {
        system: "http://hl7.org/fhir/measure-report-status",
        code: "error",
        display: "Error",
      },
    ],
  },
  {
    element: {
      id: "MeasureReport.type",
      path: "MeasureReport.type",
      short: "individual | subject-list | summary | data-collection",
      definition:
        "The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure.",
      comment:
        "Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.",
      min: 1,
      max: "1",
      base: { path: "MeasureReport.type", min: 1, max: "1" },
      type: [{ code: "code" }],
      condition: ["mrp-1"],
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
            valueString: "MeasureReportType",
          },
        ],
        strength: "required",
        description:
          "The type of the measure report: individual, patient listing, or summary",
        valueSet: "http://hl7.org/fhir/ValueSet/measure-report-type|4.3.0",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.class" },
        { identity: "rim", map: "methodCode" },
      ],
    },
    dataPath: "root.type",
    parentDataPath: "root",
    basePath: "root.type",
    baseId: "MeasureReport.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/measure-report-type",
        code: "individual",
        display: "Individual",
      },
      {
        system: "http://hl7.org/fhir/measure-report-type",
        code: "subject-list",
        display: "Subject List",
      },
      {
        system: "http://hl7.org/fhir/measure-report-type",
        code: "summary",
        display: "Summary",
      },
      {
        system: "http://hl7.org/fhir/measure-report-type",
        code: "data-collection",
        display: "Data Collection",
      },
    ],
  },
  {
    element: {
      id: "MeasureReport.measure",
      path: "MeasureReport.measure",
      short: "What measure was calculated",
      definition:
        "A reference to the Measure that was calculated to produce this report.",
      min: 1,
      max: "1",
      base: { path: "MeasureReport.measure", min: 1, max: "1" },
      type: [
        {
          code: "canonical",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Measure"],
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
        { identity: "w5", map: "FiveWs.what[x]" },
        {
          identity: "rim",
          map: "outboundRelationship[typeCode=INST]/target[classCode=OBS, moodCode=DEFN]",
        },
      ],
    },
    dataPath: "root.measure",
    parentDataPath: "root",
    basePath: "root.measure",
    baseId: "MeasureReport.measure",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.date",
      path: "MeasureReport.date",
      short: "When the report was generated",
      definition: "The date this measure report was generated.",
      min: 0,
      max: "1",
      base: { path: "MeasureReport.date", min: 0, max: "1" },
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
      isSummary: true,
      mapping: [
        { identity: "w5", map: "FiveWs.recorded" },
        { identity: "rim", map: "participation[typeCode=AUT].time" },
      ],
    },
    dataPath: "root.date",
    parentDataPath: "root",
    basePath: "root.date",
    baseId: "MeasureReport.date",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.period",
      path: "MeasureReport.period",
      short: "What period the report covers",
      definition: "The reporting period for which the report was calculated.",
      min: 1,
      max: "1",
      base: { path: "MeasureReport.period", min: 1, max: "1" },
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
      isSummary: true,
      mapping: [{ identity: "rim", map: "effectiveTime" }],
    },
    dataPath: "root.period",
    parentDataPath: "root",
    basePath: "root.period",
    baseId: "MeasureReport.period",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.improvementNotation",
      path: "MeasureReport.improvementNotation",
      short: "increase | decrease",
      definition:
        "Whether improvement in the measure is noted by an increase or decrease in the measure score.",
      comment:
        "This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.",
      min: 0,
      max: "1",
      base: { path: "MeasureReport.improvementNotation", min: 0, max: "1" },
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
      isModifier: true,
      isModifierReason:
        "Improvement notation determines how to interpret the measure score (i.e. whether an increase is an improvement)",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MeasureImprovementNotation",
          },
        ],
        strength: "required",
        description:
          "The improvement notation of the measure report (e.g. increase or decrease)",
        valueSet:
          "http://hl7.org/fhir/ValueSet/measure-improvement-notation|4.3.0",
      },
      mapping: [{ identity: "rim", map: "interpretationCode" }],
    },
    dataPath: "root.improvementNotation",
    parentDataPath: "root",
    basePath: "root.improvementNotation",
    baseId: "MeasureReport.improvementNotation",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measure-improvement-notation",
        code: "increase",
        display: "Increased score indicates improvement",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measure-improvement-notation",
        code: "decrease",
        display: "Decreased score indicates improvement",
      },
    ],
  },
  {
    element: {
      id: "MeasureReport.group",
      path: "MeasureReport.group",
      short: "Measure results for each group",
      definition:
        "The results of the calculation, one for each population group in the measure.",
      min: 0,
      max: "*",
      base: { path: "MeasureReport.group", min: 0, max: "*" },
      type: [{ code: "BackboneElement" }],
      condition: ["mrp-1"],
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
        { identity: "rim", map: "outboundRelationship[typeCode=COMP]" },
      ],
    },
    dataPath: "root.group[0]",
    parentDataPath: "root",
    basePath: "root.group",
    baseId: "MeasureReport.group",
    isPrimitive: false,
    childPaths: [
      "root.group.code",
      "root.group.population[0]",
      "root.group.measureScore",
      "root.group.stratifier[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.group.code",
      path: "MeasureReport.group.code",
      short: "Meaning of the group",
      definition:
        "The meaning of the population group as defined in the measure definition.",
      min: 0,
      max: "1",
      base: { path: "MeasureReport.group.code", min: 0, max: "1" },
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
            valueString: "MeasureGroupExample",
          },
        ],
        strength: "example",
        description: "Example of measure groups.",
        valueSet: "http://hl7.org/fhir/ValueSet/measure-group-example",
      },
      mapping: [{ identity: "rim", map: "code" }],
    },
    dataPath: "root.group.code",
    parentDataPath: "root.group[0]",
    basePath: "root.code",
    baseId: "MeasureReport.group.code",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-group-example",
        code: "primary-rate",
        display: "Primary Rate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-group-example",
        code: "secondary-rate",
        display: "Secondary Rate",
      },
    ],
  },
  {
    element: {
      id: "MeasureReport.group.population",
      path: "MeasureReport.group.population",
      short: "The populations in the group",
      definition:
        "The populations that make up the population group, one for each type of population appropriate for the measure.",
      min: 0,
      max: "*",
      base: { path: "MeasureReport.group.population", min: 0, max: "*" },
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
        { identity: "rim", map: "outboundRelationship[typeCode=COMP]" },
      ],
    },
    dataPath: "root.group.population[0]",
    parentDataPath: "root.group[0]",
    basePath: "root.population",
    baseId: "MeasureReport.group.population",
    isPrimitive: false,
    childPaths: [
      "root.group.population.code",
      "root.group.population.count",
      "root.group.population.subjectResults",
    ],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.group.population.code",
      path: "MeasureReport.group.population.code",
      short:
        "initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation",
      definition: "The type of the population.",
      min: 0,
      max: "1",
      base: { path: "MeasureReport.group.population.code", min: 0, max: "1" },
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
            valueString: "MeasurePopulation",
          },
        ],
        strength: "extensible",
        description:
          "The type of population (e.g. initial, numerator, denominator, etc.).",
        valueSet: "http://hl7.org/fhir/ValueSet/measure-population",
      },
      mapping: [{ identity: "rim", map: "code" }],
    },
    dataPath: "root.group.population.code",
    parentDataPath: "root.group.population[0]",
    basePath: "root.code",
    baseId: "MeasureReport.group.population.code",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "initial-population",
        display: "Initial Population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "numerator",
        display: "Numerator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "numerator-exclusion",
        display: "Numerator Exclusion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "denominator",
        display: "Denominator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "denominator-exclusion",
        display: "Denominator Exclusion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "denominator-exception",
        display: "Denominator Exception",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "measure-population",
        display: "Measure Population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "measure-population-exclusion",
        display: "Measure Population Exclusion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "measure-observation",
        display: "Measure Observation",
      },
    ],
  },
  {
    element: {
      id: "MeasureReport.group.population.count",
      path: "MeasureReport.group.population.count",
      short: "Size of the population",
      definition: "The number of members of the population.",
      min: 0,
      max: "1",
      base: { path: "MeasureReport.group.population.count", min: 0, max: "1" },
      type: [{ code: "integer" }],
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
      mapping: [{ identity: "rim", map: "value" }],
    },
    dataPath: "root.group.population.count",
    parentDataPath: "root.group.population[0]",
    basePath: "root.count",
    baseId: "MeasureReport.group.population.count",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.group.measureScore",
      path: "MeasureReport.group.measureScore",
      short: "What score this group achieved",
      definition:
        "The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.",
      min: 0,
      max: "1",
      base: { path: "MeasureReport.group.measureScore", min: 0, max: "1" },
      type: [{ code: "Quantity" }],
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
      mapping: [{ identity: "rim", map: "value" }],
    },
    dataPath: "root.group.measureScore",
    parentDataPath: "root.group[0]",
    basePath: "root.measureScore",
    baseId: "MeasureReport.group.measureScore",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.group.stratifier",
      path: "MeasureReport.group.stratifier",
      short: "Stratification results",
      definition:
        "When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.",
      min: 0,
      max: "*",
      base: { path: "MeasureReport.group.stratifier", min: 0, max: "*" },
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
        { identity: "rim", map: "outboundRelationship[typeCode=COMP]" },
      ],
    },
    dataPath: "root.group.stratifier[0]",
    parentDataPath: "root.group[0]",
    basePath: "root.stratifier",
    baseId: "MeasureReport.group.stratifier",
    isPrimitive: false,
    childPaths: [
      "root.group.stratifier.code[0]",
      "root.group.stratifier.stratum[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.group.stratifier.code",
      path: "MeasureReport.group.stratifier.code",
      short: "What stratifier of the group",
      definition:
        "The meaning of this stratifier, as defined in the measure definition.",
      min: 0,
      max: "*",
      base: { path: "MeasureReport.group.stratifier.code", min: 0, max: "*" },
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
            valueString: "MeasureStratifierExample",
          },
        ],
        strength: "example",
        description: "Meaning of the stratifier.",
        valueSet: "http://hl7.org/fhir/ValueSet/measure-stratifier-example",
      },
      mapping: [{ identity: "rim", map: "code" }],
    },
    dataPath: "root.group.stratifier.code[0]",
    parentDataPath: "root.group.stratifier[0]",
    basePath: "root.code",
    baseId: "MeasureReport.group.stratifier.code",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measure-stratifier-example",
        code: "age",
        display: "Age",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measure-stratifier-example",
        code: "gender",
        display: "Gender",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measure-stratifier-example",
        code: "region",
        display: "Region",
      },
    ],
  },
  {
    element: {
      id: "MeasureReport.group.stratifier.stratum",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
          valueString: "StratifierGroup",
        },
      ],
      path: "MeasureReport.group.stratifier.stratum",
      short:
        "Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components",
      definition:
        "This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.",
      min: 0,
      max: "*",
      base: {
        path: "MeasureReport.group.stratifier.stratum",
        min: 0,
        max: "*",
      },
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
        { identity: "rim", map: "outboundRelationship[typeCode=COMP]" },
      ],
    },
    dataPath: "root.group.stratifier.stratum[0]",
    parentDataPath: "root.group.stratifier[0]",
    basePath: "root.stratum",
    baseId: "MeasureReport.group.stratifier.stratum",
    isPrimitive: false,
    childPaths: [
      "root.group.stratifier.stratum.value",
      "root.group.stratifier.stratum.component[0]",
      "root.group.stratifier.stratum.population[0]",
      "root.group.stratifier.stratum.measureScore",
    ],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.group.stratifier.stratum.value",
      path: "MeasureReport.group.stratifier.stratum.value",
      short: "The stratum value, e.g. male",
      definition:
        "The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.",
      min: 0,
      max: "1",
      base: {
        path: "MeasureReport.group.stratifier.stratum.value",
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
            valueString: "MeasureReportStratifierValueExample",
          },
        ],
        strength: "example",
        description: "The stratum value.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/measurereport-stratifier-value-example",
      },
      mapping: [{ identity: "rim", map: "value" }],
    },
    dataPath: "root.group.stratifier.stratum.value",
    parentDataPath: "root.group.stratifier.stratum[0]",
    basePath: "root.value",
    baseId: "MeasureReport.group.stratifier.stratum.value",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measurereport-stratifier-value-example",
        code: "northwest",
        display: "Northwest",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measurereport-stratifier-value-example",
        code: "northeast",
        display: "Northeast",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measurereport-stratifier-value-example",
        code: "southwest",
        display: "Soutwest",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measurereport-stratifier-value-example",
        code: "southeast",
        display: "Southeast",
      },
    ],
  },
  {
    element: {
      id: "MeasureReport.group.stratifier.stratum.component",
      path: "MeasureReport.group.stratifier.stratum.component",
      short: "Stratifier component values",
      definition: "A stratifier component value.",
      min: 0,
      max: "*",
      base: {
        path: "MeasureReport.group.stratifier.stratum.component",
        min: 0,
        max: "*",
      },
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
        { identity: "rim", map: "outboundRelationship[typeCode=COMP]" },
      ],
    },
    dataPath: "root.group.stratifier.stratum.component[0]",
    parentDataPath: "root.group.stratifier.stratum[0]",
    basePath: "root.component",
    baseId: "MeasureReport.group.stratifier.stratum.component",
    isPrimitive: false,
    childPaths: [
      "root.group.stratifier.stratum.component.code",
      "root.group.stratifier.stratum.component.value",
    ],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.group.stratifier.stratum.component.code",
      path: "MeasureReport.group.stratifier.stratum.component.code",
      short: "What stratifier component of the group",
      definition: "The code for the stratum component value.",
      min: 1,
      max: "1",
      base: {
        path: "MeasureReport.group.stratifier.stratum.component.code",
        min: 1,
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
            valueString: "MeasureStratifierExample",
          },
        ],
        strength: "example",
        description: "Meaning of the stratifier.",
        valueSet: "http://hl7.org/fhir/ValueSet/measure-stratifier-example",
      },
      mapping: [{ identity: "rim", map: "code" }],
    },
    dataPath: "root.group.stratifier.stratum.component.code",
    parentDataPath: "root.group.stratifier.stratum.component[0]",
    basePath: "root.code",
    baseId: "MeasureReport.group.stratifier.stratum.component.code",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measure-stratifier-example",
        code: "age",
        display: "Age",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measure-stratifier-example",
        code: "gender",
        display: "Gender",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measure-stratifier-example",
        code: "region",
        display: "Region",
      },
    ],
  },
  {
    element: {
      id: "MeasureReport.group.stratifier.stratum.component.value",
      path: "MeasureReport.group.stratifier.stratum.component.value",
      short: "The stratum component value, e.g. male",
      definition: "The stratum component value.",
      min: 1,
      max: "1",
      base: {
        path: "MeasureReport.group.stratifier.stratum.component.value",
        min: 1,
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
            valueString: "MeasureReportStratifierValueExample",
          },
        ],
        strength: "example",
        description: "The stratum value.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/measurereport-stratifier-value-example",
      },
      mapping: [{ identity: "rim", map: "value" }],
    },
    dataPath: "root.group.stratifier.stratum.component.value",
    parentDataPath: "root.group.stratifier.stratum.component[0]",
    basePath: "root.value",
    baseId: "MeasureReport.group.stratifier.stratum.component.value",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measurereport-stratifier-value-example",
        code: "northwest",
        display: "Northwest",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measurereport-stratifier-value-example",
        code: "northeast",
        display: "Northeast",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measurereport-stratifier-value-example",
        code: "southwest",
        display: "Soutwest",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measurereport-stratifier-value-example",
        code: "southeast",
        display: "Southeast",
      },
    ],
  },
  {
    element: {
      id: "MeasureReport.group.stratifier.stratum.population",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
          valueString: "StratifierGroupPopulation",
        },
      ],
      path: "MeasureReport.group.stratifier.stratum.population",
      short: "Population results in this stratum",
      definition:
        "The populations that make up the stratum, one for each type of population appropriate to the measure.",
      min: 0,
      max: "*",
      base: {
        path: "MeasureReport.group.stratifier.stratum.population",
        min: 0,
        max: "*",
      },
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
        { identity: "rim", map: "outboundRelationship[typeCode=COMP]" },
      ],
    },
    dataPath: "root.group.stratifier.stratum.population[0]",
    parentDataPath: "root.group.stratifier.stratum[0]",
    basePath: "root.population",
    baseId: "MeasureReport.group.stratifier.stratum.population",
    isPrimitive: false,
    childPaths: [
      "root.group.stratifier.stratum.population.code",
      "root.group.stratifier.stratum.population.count",
      "root.group.stratifier.stratum.population.subjectResults",
    ],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.group.stratifier.stratum.population.code",
      path: "MeasureReport.group.stratifier.stratum.population.code",
      short:
        "initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation",
      definition: "The type of the population.",
      min: 0,
      max: "1",
      base: {
        path: "MeasureReport.group.stratifier.stratum.population.code",
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
            valueString: "MeasurePopulation",
          },
        ],
        strength: "extensible",
        description:
          "The type of population (e.g. initial, numerator, denominator, etc.).",
        valueSet: "http://hl7.org/fhir/ValueSet/measure-population",
      },
      mapping: [{ identity: "rim", map: "code" }],
    },
    dataPath: "root.group.stratifier.stratum.population.code",
    parentDataPath: "root.group.stratifier.stratum.population[0]",
    basePath: "root.code",
    baseId: "MeasureReport.group.stratifier.stratum.population.code",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "initial-population",
        display: "Initial Population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "numerator",
        display: "Numerator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "numerator-exclusion",
        display: "Numerator Exclusion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "denominator",
        display: "Denominator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "denominator-exclusion",
        display: "Denominator Exclusion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "denominator-exception",
        display: "Denominator Exception",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "measure-population",
        display: "Measure Population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "measure-population-exclusion",
        display: "Measure Population Exclusion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/measure-population",
        code: "measure-observation",
        display: "Measure Observation",
      },
    ],
  },
  {
    element: {
      id: "MeasureReport.group.stratifier.stratum.population.count",
      path: "MeasureReport.group.stratifier.stratum.population.count",
      short: "Size of the population",
      definition: "The number of members of the population in this stratum.",
      min: 0,
      max: "1",
      base: {
        path: "MeasureReport.group.stratifier.stratum.population.count",
        min: 0,
        max: "1",
      },
      type: [{ code: "integer" }],
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
      mapping: [{ identity: "rim", map: "value" }],
    },
    dataPath: "root.group.stratifier.stratum.population.count",
    parentDataPath: "root.group.stratifier.stratum.population[0]",
    basePath: "root.count",
    baseId: "MeasureReport.group.stratifier.stratum.population.count",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MeasureReport.group.stratifier.stratum.measureScore",
      path: "MeasureReport.group.stratifier.stratum.measureScore",
      short: "What score this stratum achieved",
      definition:
        "The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.",
      min: 0,
      max: "1",
      base: {
        path: "MeasureReport.group.stratifier.stratum.measureScore",
        min: 0,
        max: "1",
      },
      type: [{ code: "Quantity" }],
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
      mapping: [{ identity: "rim", map: "value" }],
    },
    dataPath: "root.group.stratifier.stratum.measureScore",
    parentDataPath: "root.group.stratifier.stratum[0]",
    basePath: "root.measureScore",
    baseId: "MeasureReport.group.stratifier.stratum.measureScore",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MeasureReport",
      path: "MeasureReport",
      short: "Results of a measure evaluation",
      definition:
        "The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.",
      min: 0,
      max: "*",
      base: { path: "MeasureReport", min: 0, max: "*" },
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
        {
          key: "mrp-1",
          severity: "error",
          human:
            "Measure Reports used for data collection SHALL NOT communicate group and score information",
          expression: "(type != 'data-collection') or group.exists().not()",
          xpath: "not(f:kind/@value='data-collection') or not(exists(f:group))",
          source: "http://hl7.org/fhir/StructureDefinition/MeasureReport",
        },
        {
          key: "mrp-2",
          severity: "error",
          human:
            "Stratifiers SHALL be either a single criteria or a set of criteria components",
          expression:
            "group.stratifier.stratum.all(value.exists() xor component.exists())",
          xpath: "not(f:kind/@value='data-collection') or not(exists(f:group))",
          source: "http://hl7.org/fhir/StructureDefinition/MeasureReport",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "rim", map: "Entity. Role, or Act" },
        { identity: "rim", map: "Observation[classCode=OBS, moodCode=EVN]" },
        { identity: "w5", map: "clinical.general" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "MeasureReport",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
