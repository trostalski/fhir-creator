const data = [
  {
    element: {
      id: "EvidenceReport.meta",
      path: "EvidenceReport.meta",
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
    baseId: "EvidenceReport.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.implicitRules",
      path: "EvidenceReport.implicitRules",
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
    baseId: "EvidenceReport.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.language",
      path: "EvidenceReport.language",
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
    baseId: "EvidenceReport.language",
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
      id: "EvidenceReport.contained",
      path: "EvidenceReport.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/EvidenceReport",
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
    baseId: "EvidenceReport.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.url",
      path: "EvidenceReport.url",
      short:
        "Canonical identifier for this EvidenceReport, represented as a globally unique URI",
      definition:
        "An absolute URI that is used to identify this EvidenceReport when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this summary is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the summary is stored on different servers.",
      comment:
        "Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.",
      requirements:
        "Allows the EvidenceReport to be referenced by a single globally unique identifier.",
      min: 0,
      max: "1",
      base: { path: "EvidenceReport.url", min: 0, max: "1" },
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
      isSummary: true,
      mapping: [
        { identity: "workflow", map: "Definition.url" },
        { identity: "w5", map: "FiveWs.identifier" },
      ],
    },
    dataPath: "root.url",
    parentDataPath: "root",
    basePath: "root.url",
    baseId: "EvidenceReport.url",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.status",
      path: "EvidenceReport.status",
      short: "draft | active | retired | unknown",
      definition:
        "The status of this summary. Enables tracking the life-cycle of the content.",
      comment:
        "Allows filtering of summaries that are appropriate for use versus not.",
      requirements:
        "Allows filtering of EvidenceReports that are appropriate for use versus not.",
      min: 1,
      max: "1",
      base: { path: "EvidenceReport.status", min: 1, max: "1" },
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
        'This is labeled as "Is Modifier" because applications should not use a retired {{title}} without due consideration',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "PublicationStatus",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "required",
        description: "The lifecycle status of an artifact.",
        valueSet: "http://hl7.org/fhir/ValueSet/publication-status|4.3.0",
      },
      mapping: [
        { identity: "workflow", map: "Definition.status" },
        { identity: "w5", map: "FiveWs.status" },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "EvidenceReport.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/publication-status",
        code: "draft",
        display: "Draft",
      },
      {
        system: "http://hl7.org/fhir/publication-status",
        code: "active",
        display: "Active",
      },
      {
        system: "http://hl7.org/fhir/publication-status",
        code: "retired",
        display: "Retired",
      },
      {
        system: "http://hl7.org/fhir/publication-status",
        code: "unknown",
        display: "Unknown",
      },
    ],
  },
  {
    element: {
      id: "EvidenceReport.identifier",
      path: "EvidenceReport.identifier",
      short: "Unique identifier for the evidence report",
      definition:
        "A formal identifier that is used to identify this EvidenceReport when it is represented in other formats, or referenced in a specification, model, design or an instance.",
      comment:
        "This element will contain unique identifiers that support de-duplication of EvidenceReports. This identifier can be valid for only one EvidenceReport resource.",
      requirements:
        "Allows externally provided and/or usable identifiers to be associated with this EvidenceReport.",
      min: 0,
      max: "*",
      base: { path: "EvidenceReport.identifier", min: 0, max: "*" },
      type: [{ code: "Identifier" }],
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
        { identity: "workflow", map: "Definition.identifier" },
        { identity: "w5", map: "FiveWs.identifier" },
        { identity: "objimpl", map: "no-gen-base" },
      ],
    },
    dataPath: "root.identifier[0]",
    parentDataPath: "root",
    basePath: "root.identifier",
    baseId: "EvidenceReport.identifier",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.citeAs[x]",
      path: "EvidenceReport.citeAs[x]",
      short: "Citation for this report",
      definition:
        "Citation Resource or display of suggested citation for this report.",
      comment:
        "used for reports for which external citation is expected, such as use in support of scholarly publications.",
      min: 0,
      max: "1",
      base: { path: "EvidenceReport.citeAs[x]", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Citation"],
        },
        { code: "markdown" },
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
    },
    dataPath: "root.citeAs[x]",
    parentDataPath: "root",
    basePath: "root.citeAs[x]",
    baseId: "EvidenceReport.citeAs[x]",
    isPrimitive: false,
    childPaths: [],
    multiTypeType: "Reference",
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.type",
      path: "EvidenceReport.type",
      short: "Kind of report",
      definition:
        "Specifies the kind of report, such as grouping of classifiers, search results, or human-compiled expression.",
      requirements: "May be used in searching and filtering.",
      min: 0,
      max: "1",
      base: { path: "EvidenceReport.type", min: 0, max: "1" },
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
            valueString: "EvidenceReportType",
          },
        ],
        strength: "example",
        description:
          "The kind of report, such as grouping of classifiers, search results, or human-compiled expression.",
        valueSet: "http://hl7.org/fhir/ValueSet/evidence-report-type",
      },
    },
    dataPath: "root.type",
    parentDataPath: "root",
    basePath: "root.type",
    baseId: "EvidenceReport.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-type",
        code: "classification",
        display: "Classification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-type",
        code: "search-results",
        display: "Search Results",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-type",
        code: "resources-compiled",
        display: "Resource Compilation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-type",
        code: "text-structured",
        display: "Structured Text",
      },
    ],
  },
  {
    element: {
      id: "EvidenceReport.relatedArtifact",
      path: "EvidenceReport.relatedArtifact",
      short:
        "Link, description or reference to artifact associated with the report",
      definition:
        "Link, description or reference to artifact associated with the report.",
      min: 0,
      max: "*",
      base: { path: "EvidenceReport.relatedArtifact", min: 0, max: "*" },
      type: [{ code: "RelatedArtifact" }],
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
    },
    dataPath: "root.relatedArtifact[0]",
    parentDataPath: "root",
    basePath: "root.relatedArtifact",
    baseId: "EvidenceReport.relatedArtifact",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.subject",
      path: "EvidenceReport.subject",
      short: "Focus of the report",
      definition:
        'Specifies the subject or focus of the report. Answers "What is this report about?".',
      comment:
        "May be used as an expression for search queries and search results",
      min: 1,
      max: "1",
      base: { path: "EvidenceReport.subject", min: 1, max: "1" },
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
    },
    dataPath: "root.subject",
    parentDataPath: "root",
    basePath: "root.subject",
    baseId: "EvidenceReport.subject",
    isPrimitive: false,
    childPaths: ["root.subject.characteristic[0]", "root.subject.note[0]"],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.subject.characteristic",
      path: "EvidenceReport.subject.characteristic",
      short: "Characteristic",
      definition: "Characteristic.",
      min: 0,
      max: "*",
      base: { path: "EvidenceReport.subject.characteristic", min: 0, max: "*" },
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
    },
    dataPath: "root.subject.characteristic[0]",
    parentDataPath: "root.subject",
    basePath: "root.characteristic",
    baseId: "EvidenceReport.subject.characteristic",
    isPrimitive: false,
    childPaths: [
      "root.subject.characteristic.code",
      "root.subject.characteristic.value[x]",
      "root.subject.characteristic.exclude",
      "root.subject.characteristic.period",
    ],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.subject.characteristic.code",
      path: "EvidenceReport.subject.characteristic.code",
      short: "Characteristic code",
      definition: "Characteristic code.",
      comment:
        "Example 1 is a Citation. Example 2 is a type of outcome. Example 3 is a specific outcome.",
      min: 1,
      max: "1",
      base: {
        path: "EvidenceReport.subject.characteristic.code",
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
            valueString: "FocusCharacteristicCode",
          },
        ],
        strength: "extensible",
        description: "Evidence focus characteristic code.",
        valueSet: "http://hl7.org/fhir/ValueSet/focus-characteristic-code",
      },
    },
    dataPath: "root.subject.characteristic.code",
    parentDataPath: "root.subject.characteristic[0]",
    basePath: "root.code",
    baseId: "EvidenceReport.subject.characteristic.code",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/focus-characteristic-code",
        code: "citation",
        display: "Citation",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/focus-characteristic-code",
        code: "clinical-outcomes-observed",
        display: "Observed outcomes are clinical outcomes",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/focus-characteristic-code",
        code: "population",
        display: "Population",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/focus-characteristic-code",
        code: "exposure",
        display: "Exposure",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/focus-characteristic-code",
        code: "comparator",
        display: "Comparator",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/focus-characteristic-code",
        code: "outcome",
        display: "Outcome",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/focus-characteristic-code",
        code: "medication-exposures",
        display: "Medication exposures",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/focus-characteristic-code",
        code: "study-type",
        display: "Study type",
      },
    ],
  },
  {
    element: {
      id: "EvidenceReport.subject.characteristic.exclude",
      path: "EvidenceReport.subject.characteristic.exclude",
      short: "Is used to express not the characteristic",
      definition: "Is used to express not the characteristic.",
      min: 0,
      max: "1",
      base: {
        path: "EvidenceReport.subject.characteristic.exclude",
        min: 0,
        max: "1",
      },
      type: [{ code: "boolean" }],
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
    },
    dataPath: "root.subject.characteristic.exclude",
    parentDataPath: "root.subject.characteristic[0]",
    basePath: "root.exclude",
    baseId: "EvidenceReport.subject.characteristic.exclude",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.subject.note",
      path: "EvidenceReport.subject.note",
      short: "Footnotes and/or explanatory notes",
      definition: "Used for general notes and annotations not coded elsewhere.",
      min: 0,
      max: "*",
      base: { path: "EvidenceReport.subject.note", min: 0, max: "*" },
      type: [{ code: "Annotation" }],
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
    },
    dataPath: "root.subject.note[0]",
    parentDataPath: "root.subject",
    basePath: "root.note",
    baseId: "EvidenceReport.subject.note",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.publisher",
      path: "EvidenceReport.publisher",
      short: "Name of the publisher (organization or individual)",
      definition:
        "The name of the organization or individual that published the evidence report.",
      comment:
        "Usually an organization but may be an individual. The publisher (or steward) of the evidence report is the organization or individual primarily responsible for the maintenance and upkeep of the evidence report. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence report. This item SHOULD be populated unless the information is available from context.",
      requirements:
        'Helps establish the "authority/credibility" of the evidence report. May also allow for contact.',
      min: 0,
      max: "1",
      base: { path: "EvidenceReport.publisher", min: 0, max: "1" },
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
      isSummary: true,
      mapping: [
        { identity: "workflow", map: "Definition.publisher" },
        { identity: "w5", map: "FiveWs.witness" },
      ],
    },
    dataPath: "root.publisher",
    parentDataPath: "root",
    basePath: "root.publisher",
    baseId: "EvidenceReport.publisher",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.author",
      path: "EvidenceReport.author",
      short: "Who authored the content",
      definition:
        "An individiual, organization, or device primarily involved in the creation and maintenance of the content.",
      comment:
        "Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).",
      min: 0,
      max: "*",
      base: { path: "EvidenceReport.author", min: 0, max: "*" },
      type: [{ code: "ContactDetail" }],
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
    dataPath: "root.author[0]",
    parentDataPath: "root",
    basePath: "root.author",
    baseId: "EvidenceReport.author",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.reviewer",
      path: "EvidenceReport.reviewer",
      short: "Who reviewed the content",
      definition:
        "An individiual, organization, or device primarily responsible for review of some aspect of the content.",
      comment:
        "Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).",
      min: 0,
      max: "*",
      base: { path: "EvidenceReport.reviewer", min: 0, max: "*" },
      type: [{ code: "ContactDetail" }],
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
    },
    dataPath: "root.reviewer[0]",
    parentDataPath: "root",
    basePath: "root.reviewer",
    baseId: "EvidenceReport.reviewer",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.relatesTo",
      path: "EvidenceReport.relatesTo",
      short: "Relationships to other compositions/documents",
      definition:
        "Relationships that this composition has with other compositions or documents that already exist.",
      comment: "A document is a version specific composition.",
      min: 0,
      max: "*",
      base: { path: "EvidenceReport.relatesTo", min: 0, max: "*" },
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
    },
    dataPath: "root.relatesTo[0]",
    parentDataPath: "root",
    basePath: "root.relatesTo",
    baseId: "EvidenceReport.relatesTo",
    isPrimitive: false,
    childPaths: ["root.relatesTo.code", "root.relatesTo.target[x]"],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.relatesTo.code",
      path: "EvidenceReport.relatesTo.code",
      short:
        "replaces | amends | appends | transforms | replacedWith | amendedWith | appendedWith | transformedWith",
      definition:
        "The type of relationship that this composition has with anther composition or document.",
      comment:
        "If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.",
      min: 1,
      max: "1",
      base: { path: "EvidenceReport.relatesTo.code", min: 1, max: "1" },
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
            valueString: "ReportRelationshipType",
          },
        ],
        strength: "required",
        description: "The type of relationship between reports.",
        valueSet: "http://hl7.org/fhir/ValueSet/report-relation-type|4.3.0",
      },
    },
    dataPath: "root.relatesTo.code",
    parentDataPath: "root.relatesTo[0]",
    basePath: "root.code",
    baseId: "EvidenceReport.relatesTo.code",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/report-relation-type",
        code: "replaces",
        display: "Replaces",
      },
      {
        system: "http://hl7.org/fhir/report-relation-type",
        code: "amends",
        display: "Amends",
      },
      {
        system: "http://hl7.org/fhir/report-relation-type",
        code: "appends",
        display: "Appends",
      },
      {
        system: "http://hl7.org/fhir/report-relation-type",
        code: "transforms",
        display: "Transforms",
      },
      {
        system: "http://hl7.org/fhir/report-relation-type",
        code: "replacedWith",
        display: "Replaced With",
      },
      {
        system: "http://hl7.org/fhir/report-relation-type",
        code: "amendedWith",
        display: "Amended With",
      },
      {
        system: "http://hl7.org/fhir/report-relation-type",
        code: "appendedWith",
        display: "Appended With",
      },
      {
        system: "http://hl7.org/fhir/report-relation-type",
        code: "transformedWith",
        display: "Transformed With",
      },
    ],
  },
  {
    element: {
      id: "EvidenceReport.section",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
          valueString: "Section",
        },
      ],
      path: "EvidenceReport.section",
      short: "Composition is broken into sections",
      definition: "The root of the sections that make up the composition.",
      min: 0,
      max: "*",
      base: { path: "EvidenceReport.section", min: 0, max: "*" },
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
    },
    dataPath: "root.section[0]",
    parentDataPath: "root",
    basePath: "root.section",
    baseId: "EvidenceReport.section",
    isPrimitive: false,
    childPaths: [
      "root.section.title",
      "root.section.focus",
      "root.section.focusReference",
      "root.section.author[0]",
      "root.section.text",
      "root.section.mode",
      "root.section.orderedBy",
      "root.section.entryClassifier[0]",
      "root.section.entryReference[0]",
      "root.section.entryQuantity[0]",
      "root.section.emptyReason",
      "root.section.section[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.section.title",
      path: "EvidenceReport.section.title",
      short: "Label for section (e.g. for ToC)",
      definition:
        "The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.",
      comment:
        "The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section.",
      requirements:
        "Section headings are often standardized for different types of documents.  They give guidance to humans on how the document is organized.",
      alias: ["header", "label", "caption"],
      min: 0,
      max: "1",
      base: { path: "EvidenceReport.section.title", min: 0, max: "1" },
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
    },
    dataPath: "root.section.title",
    parentDataPath: "root.section[0]",
    basePath: "root.title",
    baseId: "EvidenceReport.section.title",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.section.focus",
      path: "EvidenceReport.section.focus",
      short: "Classification of section (recommended)",
      definition:
        "A code identifying the kind of content contained within the section. This should be consistent with the section title.",
      comment:
        "The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.   \n\nIf the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.",
      requirements:
        "Provides computable standardized labels to sections within the document.",
      min: 0,
      max: "1",
      base: { path: "EvidenceReport.section.focus", min: 0, max: "1" },
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
            valueString: "ReportSectionType",
          },
        ],
        strength: "extensible",
        description: "Evidence Report Section Type.",
        valueSet: "http://hl7.org/fhir/ValueSet/evidence-report-section",
      },
    },
    dataPath: "root.section.focus",
    parentDataPath: "root.section[0]",
    basePath: "root.focus",
    baseId: "EvidenceReport.section.focus",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Evidence",
        display: "Evidence Results",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Intervention-group-alone-Evidence",
        display: "Evidence Results for the intervention exposure only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Intervention-vs-Control-Evidence",
        display: "Evidence Results for comparison of Intervention and Control",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Control-group-alone-Evidence",
        display: "Evidence Results for the control exposure only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "EvidenceVariable",
        display: "Evidence Variables used",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "EvidenceVariable-observed",
        display: "Evidence Variables actually observed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "EvidenceVariable-intended",
        display: "Evidence Variables intended for interpretation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "EvidenceVariable-population",
        display: "Evidence Variable in variable role Population",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "EvidenceVariable-exposure",
        display: "Evidence Variable in variable role Exposure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "EvidenceVariable-outcome",
        display:
          "Evidence Variable in variable role Outcome (MeasuredVariable)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Efficacy-outcomes",
        display: "Efficacy-outcomes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Harms-outcomes",
        display: "Harms outcomes",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "SampleSize",
        display: "Sample Size",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "References",
        display: "References",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Assertion",
        display: "Assertion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Reasons",
        display: "Reasons",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Certainty-of-Evidence",
        display: "Certainty of Evidence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Evidence-Classifier",
        display: "Evidence Classifier section",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Warnings",
        display: "Warnings",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Text-Summary",
        display: "Text Summary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "SummaryOfBodyOfEvidenceFindings",
        display: "Summary of Body of Evidence Findings",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "SummaryOfIndividualStudyFindings",
        display: "Summary of Individual Study Findings",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Header",
        display: "Header",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Tables",
        display: "Tables",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Table",
        display: "Table",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Row-Headers",
        display: "Row Headers",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Column-Header",
        display: "Column Header",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
        code: "Column-Headers",
        display: "Column Headers",
      },
    ],
  },
  {
    element: {
      id: "EvidenceReport.section.author",
      path: "EvidenceReport.section.author",
      short: "Who and/or what authored the section",
      definition:
        "Identifies who is responsible for the information in this section, not necessarily who typed it in.",
      requirements: "Identifies who is responsible for the content.",
      min: 0,
      max: "*",
      base: { path: "EvidenceReport.section.author", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Person",
            "http://hl7.org/fhir/StructureDefinition/Device",
            "http://hl7.org/fhir/StructureDefinition/Group",
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
    },
    dataPath: "root.section.author[0]",
    parentDataPath: "root.section[0]",
    basePath: "root.author",
    baseId: "EvidenceReport.section.author",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.section.mode",
      path: "EvidenceReport.section.mode",
      short: "working | snapshot | changes",
      definition:
        "How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.",
      comment:
        "This element is labeled as a modifier because a change list must not be misunderstood as a complete list.",
      requirements:
        "Sections are used in various ways, and it must be known in what way it is safe to use the entries in them.",
      min: 0,
      max: "1",
      base: { path: "EvidenceReport.section.mode", min: 0, max: "1" },
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
            valueString: "SectionMode",
          },
        ],
        strength: "required",
        description: "The processing mode that applies to this section.",
        valueSet: "http://hl7.org/fhir/ValueSet/list-mode|4.3.0",
      },
    },
    dataPath: "root.section.mode",
    parentDataPath: "root.section[0]",
    basePath: "root.mode",
    baseId: "EvidenceReport.section.mode",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/list-mode",
        code: "working",
        display: "Working List",
      },
      {
        system: "http://hl7.org/fhir/list-mode",
        code: "snapshot",
        display: "Snapshot List",
      },
      {
        system: "http://hl7.org/fhir/list-mode",
        code: "changes",
        display: "Change List",
      },
    ],
  },
  {
    element: {
      id: "EvidenceReport.section.orderedBy",
      path: "EvidenceReport.section.orderedBy",
      short: "Order of section entries",
      definition:
        "Specifies the order applied to the items in the section entries.",
      comment:
        "Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.",
      requirements:
        "Important for presentation and rendering.  Lists may be sorted to place more important information first or to group related entries.",
      min: 0,
      max: "1",
      base: { path: "EvidenceReport.section.orderedBy", min: 0, max: "1" },
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
            valueString: "SectionEntryOrder",
          },
        ],
        strength: "preferred",
        description: "What order applies to the items in the entry.",
        valueSet: "http://hl7.org/fhir/ValueSet/list-order",
      },
    },
    dataPath: "root.section.orderedBy",
    parentDataPath: "root.section[0]",
    basePath: "root.orderedBy",
    baseId: "EvidenceReport.section.orderedBy",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/list-order",
        code: "user",
        display: "Sorted by User",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-order",
        code: "system",
        display: "Sorted by System",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-order",
        code: "event-date",
        display: "Sorted by Event Date",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-order",
        code: "entry-date",
        display: "Sorted by Item Date",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-order",
        code: "priority",
        display: "Sorted by Priority",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-order",
        code: "alphabetic",
        display: "Sorted Alphabetically",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-order",
        code: "category",
        display: "Sorted by Category",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-order",
        code: "patient",
        display: "Sorted by Patient",
      },
    ],
  },
  {
    element: {
      id: "EvidenceReport.section.entryClassifier",
      path: "EvidenceReport.section.entryClassifier",
      short: "Extensible classifiers as content",
      definition:
        "Specifies any type of classification of the evidence report.",
      requirements:
        "May be used in searching and filtering, or may be the key content of the report.",
      min: 0,
      max: "*",
      base: {
        path: "EvidenceReport.section.entryClassifier",
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
            valueString: "EvidenceClassifier",
          },
        ],
        strength: "extensible",
        description: "Commonly used classifiers for evidence sets.",
        valueSet: "http://hl7.org/fhir/ValueSet/evidence-classifier-code",
      },
    },
    dataPath: "root.section.entryClassifier[0]",
    parentDataPath: "root.section[0]",
    basePath: "root.entryClassifier",
    baseId: "EvidenceReport.section.entryClassifier",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "COVID19Specific",
        display: "COVID-19 specific article",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "COVID19Relevant",
        display: "COVID-19 relevant (but not specific) article",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "COVID19HumanResearch",
        display: "COVID-19 human data in population, exposure, or outcome",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "OriginalResearch",
        display: "Article includes original research",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "ResearchSynthesis",
        display: "Article includes synthesis of research",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "Guideline",
        display: "Article includes guideline",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "ResearchProtocol",
        display: "Article provides protocol without results",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "NotResearchNotGuideline",
        display: "Article is neither research nor guideline",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "Treatment",
        display: "Article about treatment",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "PreventionAndControl",
        display: "Article about prevention and control",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "Diagnosis",
        display: "Article about diagnosis",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "PrognosisPrediction",
        display: "Article about prognosis or prediction",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "RatedAsYes",
        display: "Rated as yes, affirmative, positive, present, or include",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "RatedAsNo",
        display: "Rated as no, negative, absent, or exclude",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "NotAssessed",
        display: "Not rated, not assessed",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "RatedAsRCT",
        display: "classified as randomized controlled trial",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "RatedAsControlledTrial",
        display: "classified as nonrandomized controlled trial (experimental)",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "RatedAsComparativeCohort",
        display: "classified as comparative cohort study (observational)",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "RatedAsCaseControl",
        display: "classified as case-control study",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "RatedAsUncontrolledSeries",
        display: "classified as uncontrolled cohort (case series)",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "RatedAsMixedMethods",
        display: "classified as mixed-methods study",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "RatedAsOther",
        display: "classified as other concept (not elsewhere classified)",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "RiskOfBias",
        display: "Risk of bias assessment",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "NoBlinding",
        display: "No blinding",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "AllocConcealNotStated",
        display: "Allocation concealment not stated",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "EarlyTrialTermination",
        display: "Early trial termination",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "NoITT",
        display: "No intention-to-treat analysis",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "Preprint",
        display: "Preprint (not final publication)",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "PreliminaryAnalysis",
        display: "Preliminary analysis",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "BaselineImbalance",
        display: "Baseline imbalances",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/evidence-classifier-code",
        code: "SubgroupAnalysis",
        display: "Subgroup analysis",
      },
    ],
  },
  {
    element: {
      id: "EvidenceReport.section.entryQuantity",
      path: "EvidenceReport.section.entryQuantity",
      short: "Quantity as content",
      definition: "Quantity as content.",
      min: 0,
      max: "*",
      base: { path: "EvidenceReport.section.entryQuantity", min: 0, max: "*" },
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
    },
    dataPath: "root.section.entryQuantity[0]",
    parentDataPath: "root.section[0]",
    basePath: "root.entryQuantity",
    baseId: "EvidenceReport.section.entryQuantity",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "EvidenceReport.section.emptyReason",
      path: "EvidenceReport.section.emptyReason",
      short: "Why the section is empty",
      definition:
        "If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.",
      comment:
        "The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.",
      requirements:
        'Allows capturing things like "none exist" or "not asked" which can be important for most lists.',
      min: 0,
      max: "1",
      base: { path: "EvidenceReport.section.emptyReason", min: 0, max: "1" },
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
            valueString: "SectionEmptyReason",
          },
        ],
        strength: "preferred",
        description: "If a section is empty, why it is empty.",
        valueSet: "http://hl7.org/fhir/ValueSet/list-empty-reason",
      },
    },
    dataPath: "root.section.emptyReason",
    parentDataPath: "root.section[0]",
    basePath: "root.emptyReason",
    baseId: "EvidenceReport.section.emptyReason",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
        code: "nilknown",
        display: "Nil Known",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
        code: "notasked",
        display: "Not Asked",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
        code: "withheld",
        display: "Information Withheld",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
        code: "unavailable",
        display: "Unavailable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
        code: "notstarted",
        display: "Not Started",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
        code: "closed",
        display: "Closed",
      },
    ],
  },
  {
    element: {
      id: "EvidenceReport",
      path: "EvidenceReport",
      short: "A EvidenceReport",
      definition:
        "The EvidenceReport Resource is a specialized container for a collection of resources and codable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.",
      min: 0,
      max: "*",
      base: { path: "EvidenceReport", min: 0, max: "*" },
      constraint: [
        {
          key: "cnl-0",
          severity: "warning",
          human:
            "Name should be usable as an identifier for the module by machine processing applications such as code generation",
          expression:
            "name.exists() implies name.matches('[A-Z]([A-Za-z0-9_]){0,254}')",
          xpath:
            "not(exists(f:name/@value)) or matches(f:name/@value, '[A-Z]([A-Za-z0-9_]){0,254}')",
          source: "http://hl7.org/fhir/StructureDefinition/EvidenceReport",
        },
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
        { identity: "w5", map: "clinical.general" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "EvidenceReport",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
