const data = [
  {
    element: {
      id: "Citation.meta",
      path: "Citation.meta",
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
    baseId: "Citation.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.implicitRules",
      path: "Citation.implicitRules",
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
    baseId: "Citation.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.language",
      path: "Citation.language",
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
    baseId: "Citation.language",
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
      id: "Citation.contained",
      path: "Citation.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/Citation",
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
    baseId: "Citation.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.url",
      path: "Citation.url",
      short:
        "Canonical identifier for this citation, represented as a globally unique URI",
      definition:
        "An absolute URI that is used to identify this citation when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this summary is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the summary is stored on different servers.",
      comment:
        "Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.",
      requirements:
        "Allows the citation to be referenced by a single globally unique identifier.",
      min: 0,
      max: "1",
      base: { path: "Citation.url", min: 0, max: "1" },
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
    baseId: "Citation.url",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.version",
      path: "Citation.version",
      short: "Business version of the citation",
      definition:
        "The identifier that is used to identify this version of the citation when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the citation author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.",
      comment:
        "There may be different citation instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the citation with the format [url]|[version].",
      min: 0,
      max: "1",
      base: { path: "Citation.version", min: 0, max: "1" },
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
        { identity: "workflow", map: "Definition.version" },
        { identity: "w5", map: "FiveWs.version" },
      ],
    },
    dataPath: "root.version",
    parentDataPath: "root",
    basePath: "root.version",
    baseId: "Citation.version",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.name",
      path: "Citation.name",
      short: "Name for this citation (computer friendly)",
      definition:
        "A natural language name identifying the citation. This name should be usable as an identifier for the module by machine processing applications such as code generation.",
      comment:
        "The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.",
      requirements: "Support human navigation and code generation.",
      min: 0,
      max: "1",
      base: { path: "Citation.name", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["cnl-0"],
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
    dataPath: "root.name",
    parentDataPath: "root",
    basePath: "root.name",
    baseId: "Citation.name",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.title",
      path: "Citation.title",
      short: "Name for this citation (human friendly)",
      definition: "A short, descriptive, user-friendly title for the citation.",
      comment:
        "This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.",
      min: 0,
      max: "1",
      base: { path: "Citation.title", min: 0, max: "1" },
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
      mapping: [{ identity: "workflow", map: "Definition.title" }],
    },
    dataPath: "root.title",
    parentDataPath: "root",
    basePath: "root.title",
    baseId: "Citation.title",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.status",
      path: "Citation.status",
      short: "draft | active | retired | unknown",
      definition:
        "The status of this summary. Enables tracking the life-cycle of the content.",
      comment:
        "Allows filtering of summarys s that are appropriate for use versus not.",
      requirements:
        "Allows filtering of citations that are appropriate for use versus not.",
      min: 1,
      max: "1",
      base: { path: "Citation.status", min: 1, max: "1" },
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
        valueSet: "http://hl7.org/fhir/ValueSet/publication-status|4.3.0",
      },
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "Citation.status",
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
      id: "Citation.experimental",
      path: "Citation.experimental",
      short: "For testing purposes, not real usage",
      definition:
        "A Boolean value to indicate that this citation is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.",
      comment:
        "Allows filtering of citations that are appropriate for use versus not.",
      requirements:
        "Enables experimental content to be developed following the same lifecycle that would be used for a production-level citation.",
      min: 0,
      max: "1",
      base: { path: "Citation.experimental", min: 0, max: "1" },
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
      isSummary: true,
      mapping: [
        { identity: "workflow", map: "Definition.experimental" },
        { identity: "w5", map: "FiveWs.class" },
      ],
    },
    dataPath: "root.experimental",
    parentDataPath: "root",
    basePath: "root.experimental",
    baseId: "Citation.experimental",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.date",
      path: "Citation.date",
      short: "Date last changed",
      definition:
        "The date  (and optionally time) when the citation was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the citation changes.",
      comment:
        "Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the citation. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.",
      alias: ["Revision Date"],
      min: 0,
      max: "1",
      base: { path: "Citation.date", min: 0, max: "1" },
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
        { identity: "workflow", map: "Definition.date" },
        { identity: "w5", map: "FiveWs.recorded" },
      ],
    },
    dataPath: "root.date",
    parentDataPath: "root",
    basePath: "root.date",
    baseId: "Citation.date",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.publisher",
      path: "Citation.publisher",
      short:
        "The publisher of the Citation, not the publisher of the article or artifact being cited",
      definition:
        "The name of the organization or individual that published the citation.",
      comment:
        "Usually an organization but may be an individual. The publisher (or steward) of the citation is the organization or individual primarily responsible for the maintenance and upkeep of the citation. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the citation. This item SHOULD be populated unless the information is available from context.",
      requirements:
        'Helps establish the "authority/credibility" of the citation.  May also allow for contact.',
      min: 0,
      max: "1",
      base: { path: "Citation.publisher", min: 0, max: "1" },
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
    baseId: "Citation.publisher",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.description",
      path: "Citation.description",
      short: "Natural language description of the citation",
      definition:
        "A free text natural language description of the citation from a consumer's perspective.",
      comment:
        "This description can be used to capture details such as why the citation was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the citation as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the citation is presumed to be the predominant language in the place the citation was created).",
      min: 0,
      max: "1",
      base: { path: "Citation.description", min: 0, max: "1" },
      type: [{ code: "markdown" }],
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
      mapping: [{ identity: "workflow", map: "Definition.description" }],
    },
    dataPath: "root.description",
    parentDataPath: "root",
    basePath: "root.description",
    baseId: "Citation.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.jurisdiction",
      path: "Citation.jurisdiction",
      short: "Intended jurisdiction for citation (if applicable)",
      definition:
        "A legal or geographic region in which the citation is intended to be used.",
      comment:
        "It may be possible for the citation to be used in jurisdictions other than those for which it was originally designed or intended.",
      min: 0,
      max: "*",
      base: { path: "Citation.jurisdiction", min: 0, max: "*" },
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
            valueString: "Jurisdiction",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/jurisdiction",
      },
    },
    dataPath: "root.jurisdiction[0]",
    parentDataPath: "root",
    basePath: "root.jurisdiction",
    baseId: "Citation.jurisdiction",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.purpose",
      path: "Citation.purpose",
      short: "Why this citation is defined",
      definition:
        "Explanation of why this citation is needed and why it has been designed as it has.",
      comment:
        "This element does not describe the usage of the citation. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this citation.",
      min: 0,
      max: "1",
      base: { path: "Citation.purpose", min: 0, max: "1" },
      type: [{ code: "markdown" }],
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
        { identity: "workflow", map: "Definition.purpose" },
        { identity: "w5", map: "FiveWs.why[x]" },
        { identity: "objimpl", map: "no-gen-base" },
      ],
    },
    dataPath: "root.purpose",
    parentDataPath: "root",
    basePath: "root.purpose",
    baseId: "Citation.purpose",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.copyright",
      path: "Citation.copyright",
      short:
        "Use and/or publishing restrictions for the Citation, not for the cited artifact",
      definition:
        "Use and/or publishing restrictions for the Citation, not for the cited artifact.",
      min: 0,
      max: "1",
      base: { path: "Citation.copyright", min: 0, max: "1" },
      type: [{ code: "markdown" }],
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
    dataPath: "root.copyright",
    parentDataPath: "root",
    basePath: "root.copyright",
    baseId: "Citation.copyright",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.approvalDate",
      path: "Citation.approvalDate",
      short: "When the citation was approved by publisher",
      definition:
        "The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.",
      comment:
        "The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.",
      min: 0,
      max: "1",
      base: { path: "Citation.approvalDate", min: 0, max: "1" },
      type: [{ code: "date" }],
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
        { identity: "workflow", map: "Definition.approvalDate" },
        { identity: "objimpl", map: "no-gen-base" },
      ],
    },
    dataPath: "root.approvalDate",
    parentDataPath: "root",
    basePath: "root.approvalDate",
    baseId: "Citation.approvalDate",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.lastReviewDate",
      path: "Citation.lastReviewDate",
      short: "When the citation was last reviewed",
      definition:
        "The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.",
      comment: "If specified, this date follows the original approval date.",
      requirements:
        'Gives a sense of how "current" the content is.  Resources that have not been reviewed in a long time may have a risk of being less appropriate/relevant.',
      min: 0,
      max: "1",
      base: { path: "Citation.lastReviewDate", min: 0, max: "1" },
      type: [{ code: "date" }],
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
        { identity: "workflow", map: "Definition.lastReviewDate" },
        { identity: "objimpl", map: "no-gen-base" },
      ],
    },
    dataPath: "root.lastReviewDate",
    parentDataPath: "root",
    basePath: "root.lastReviewDate",
    baseId: "Citation.lastReviewDate",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.author",
      path: "Citation.author",
      short: "Who authored the Citation",
      definition: "Who authored the Citation.",
      min: 0,
      max: "*",
      base: { path: "Citation.author", min: 0, max: "*" },
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
    dataPath: "root.author[0]",
    parentDataPath: "root",
    basePath: "root.author",
    baseId: "Citation.author",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.reviewer",
      path: "Citation.reviewer",
      short: "Who reviewed the Citation",
      definition: "Who reviewed the Citation.",
      min: 0,
      max: "*",
      base: { path: "Citation.reviewer", min: 0, max: "*" },
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
    baseId: "Citation.reviewer",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.summary",
      path: "Citation.summary",
      short: "A human-readable display of the citation",
      definition: "A human-readable display of the citation.",
      min: 0,
      max: "*",
      base: { path: "Citation.summary", min: 0, max: "*" },
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
    dataPath: "root.summary[0]",
    parentDataPath: "root",
    basePath: "root.summary",
    baseId: "Citation.summary",
    isPrimitive: false,
    childPaths: ["root.summary.style", "root.summary.text"],
    value: "",
  },
  {
    element: {
      id: "Citation.summary.style",
      path: "Citation.summary.style",
      short: "Format for display of the citation",
      definition: "Format for display of the citation.",
      min: 0,
      max: "1",
      base: { path: "Citation.summary.style", min: 0, max: "1" },
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
            valueString: "CitationSummaryStyle",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/citation-summary-style",
      },
    },
    dataPath: "root.summary.style",
    parentDataPath: "root.summary[0]",
    basePath: "root.style",
    baseId: "Citation.summary.style",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "vancouver",
        display: "Vancouver style",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "ama11",
        display: "American Medical Association 11th edition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "apa7",
        display: "American Psychological Association 7th edition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "apa6",
        display: "American Psychological Association 6th edition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "asa6",
        display: "American Sociological Association 6th edition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "mla8",
        display: "Modern Language Association 8th edition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "cochrane",
        display: "Cochrane Style",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "elsevier-harvard",
        display: "Elsevier-Harvard Style",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "nature",
        display: "Nature Referencing style",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "acs",
        display: "American Chemical Society",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "chicago-a-17",
        display: "Chicago Style Version 17 Author Date",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "chicago-b-17",
        display: "Chicago Style Version 17 Full note",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "ieee",
        display: "Institute of Electrical and Electronics Engineers",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-summary-style",
        code: "comppub",
        display: "Computable Publishing",
      },
    ],
  },
  {
    element: {
      id: "Citation.summary.text",
      path: "Citation.summary.text",
      short: "The human-readable display of the citation",
      definition: "The human-readable display of the citation.",
      min: 1,
      max: "1",
      base: { path: "Citation.summary.text", min: 1, max: "1" },
      type: [{ code: "markdown" }],
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
    dataPath: "root.summary.text",
    parentDataPath: "root.summary[0]",
    basePath: "root.text",
    baseId: "Citation.summary.text",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.classification",
      path: "Citation.classification",
      short: "The assignment to an organizing scheme",
      definition: "The assignment to an organizing scheme.",
      min: 0,
      max: "*",
      base: { path: "Citation.classification", min: 0, max: "*" },
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
    dataPath: "root.classification[0]",
    parentDataPath: "root",
    basePath: "root.classification",
    baseId: "Citation.classification",
    isPrimitive: false,
    childPaths: [
      "root.classification.type",
      "root.classification.classifier[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.classification.type",
      path: "Citation.classification.type",
      short: "The kind of classifier (e.g. publication type, keyword)",
      definition: "The kind of classifier (e.g. publication type, keyword).",
      min: 0,
      max: "1",
      base: { path: "Citation.classification.type", min: 0, max: "1" },
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
            valueString: "CitationClassificationType",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/citation-classification-type",
      },
    },
    dataPath: "root.classification.type",
    parentDataPath: "root.classification[0]",
    basePath: "root.type",
    baseId: "Citation.classification.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-classification-type",
        code: "citation-source",
        display: "Citation Source",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-classification-type",
        code: "medline-owner",
        display: "MEDLINE Citation Owner",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-classification-type",
        code: "fevir-platform-use",
        display: "FEvIR Platform Use",
      },
    ],
  },
  {
    element: {
      id: "Citation.classification.classifier",
      path: "Citation.classification.classifier",
      short: "The specific classification value",
      definition: "The specific classification value.",
      min: 0,
      max: "*",
      base: { path: "Citation.classification.classifier", min: 0, max: "*" },
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
            valueString: "CitationArtifactClassifier",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/citation-artifact-classifier",
      },
    },
    dataPath: "root.classification.classifier[0]",
    parentDataPath: "root.classification[0]",
    basePath: "root.classifier",
    baseId: "Citation.classification.classifier",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "webpage",
        display: "Webpage",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016428",
        display: "Journal Article",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016422",
        display: "Letter",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016420",
        display: "Comment",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016425",
        display: "Published Erratum",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "executable-app",
        display: "Executable app",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D000076942",
        display: "Preprint",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D019991",
        display: "Database",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D001877",
        display: "Book",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D064886",
        display: "Dataset",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "68059040",
        display: "Video-Audio Media",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "audio",
        display: "Audio file",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "image",
        display: "Image file",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "machine-code",
        display: "Machine code",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "protocol",
        display: "Protocol",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "fhir-resource",
        display: "FHIR Resource",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Print",
        display: "Print",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Print-Electronic",
        display: "Print Electronic",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Electronic",
        display: "Electronic",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Electronic-Print",
        display: "Electronic-Print",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Electronic-eCollection",
        display: "Electronic-eCollection",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "medline-base",
        display: "Medline Base",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "common-share",
        display: "Common Share",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "project-specific",
        display: "Project Specific",
      },
    ],
  },
  {
    element: {
      id: "Citation.currentState",
      path: "Citation.currentState",
      short: "The status of the citation",
      definition: "The status of the citation.",
      min: 0,
      max: "*",
      base: { path: "Citation.currentState", min: 0, max: "*" },
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
            valueString: "CitationStatusType",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/citation-status-type",
      },
    },
    dataPath: "root.currentState[0]",
    parentDataPath: "root",
    basePath: "root.currentState",
    baseId: "Citation.currentState",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-received",
        display: "PubMed Pubstatus of Received",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-accepted",
        display: "PubMed Pubstatus of Accepted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-epublish",
        display: "PubMed Pubstatus of Epublish",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-ppublish",
        display: "PubMed Pubstatus of Ppublish",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-revised",
        display: "PubMed Pubstatus of Revised",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-aheadofprint",
        display: "PubMed Pubstatus of aheadofprint",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-retracted",
        display: "PubMed Pubstatus of Retracted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-ecollection",
        display: "PubMed Pubstatus of Ecollection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-pmc",
        display: "PubMed Pubstatus of PMC",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-pmcr",
        display: "PubMed Pubstatus of PMCr",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-pubmed",
        display: "PubMed Pubstatus of PubMed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-pubmedr",
        display: "PubMed Pubstatus of PubMedr",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-premedline",
        display: "PubMed Pubstatus of Premedline",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-medline",
        display: "PubMed Pubstatus of Medline",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-medliner",
        display: "PubMed Pubstatus of Medliner",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-entrez",
        display: "PubMed Pubstatus of Entrez",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-pmc-release",
        display: "PubMed Pubstatus of PMC release",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-completed",
        display: "Medline Citation Status of Completed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-in-process",
        display: "Medline Citation Status of In-Process",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-pubmed-not-medline",
        display: "Medline Citation Status of PubMed-not-MEDLINE",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-in-data-review",
        display: "Medline Citation Status of In-Data-Review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-publisher",
        display: "Medline Citation Status of Publisher",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-medline",
        display: "Medline Citation Status of MEDLINE",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-oldmedline",
        display: "Medline Citation Status of OLDMEDLINE",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-publication-status-ppublish",
        display: "PubMed PublicationStatus of ppublish",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-publication-status-epublish",
        display: "PubMed PublicationStatus of epublish",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-publication-status-aheadofprint",
        display: "PubMed PublicationStatus of aheadofprint",
      },
    ],
  },
  {
    element: {
      id: "Citation.statusDate",
      path: "Citation.statusDate",
      short: "An effective date or period for a status of the citation",
      definition: "An effective date or period for a status of the citation.",
      min: 0,
      max: "*",
      base: { path: "Citation.statusDate", min: 0, max: "*" },
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
    dataPath: "root.statusDate[0]",
    parentDataPath: "root",
    basePath: "root.statusDate",
    baseId: "Citation.statusDate",
    isPrimitive: false,
    childPaths: [
      "root.statusDate.activity",
      "root.statusDate.actual",
      "root.statusDate.period",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.statusDate.activity",
      path: "Citation.statusDate.activity",
      short: "Classification of the status",
      definition: "Classification of the status.",
      min: 1,
      max: "1",
      base: { path: "Citation.statusDate.activity", min: 1, max: "1" },
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
            valueString: "CitationStatusType",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/citation-status-type",
      },
    },
    dataPath: "root.statusDate.activity",
    parentDataPath: "root.statusDate[0]",
    basePath: "root.activity",
    baseId: "Citation.statusDate.activity",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-received",
        display: "PubMed Pubstatus of Received",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-accepted",
        display: "PubMed Pubstatus of Accepted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-epublish",
        display: "PubMed Pubstatus of Epublish",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-ppublish",
        display: "PubMed Pubstatus of Ppublish",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-revised",
        display: "PubMed Pubstatus of Revised",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-aheadofprint",
        display: "PubMed Pubstatus of aheadofprint",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-retracted",
        display: "PubMed Pubstatus of Retracted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-ecollection",
        display: "PubMed Pubstatus of Ecollection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-pmc",
        display: "PubMed Pubstatus of PMC",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-pmcr",
        display: "PubMed Pubstatus of PMCr",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-pubmed",
        display: "PubMed Pubstatus of PubMed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-pubmedr",
        display: "PubMed Pubstatus of PubMedr",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-premedline",
        display: "PubMed Pubstatus of Premedline",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-medline",
        display: "PubMed Pubstatus of Medline",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-medliner",
        display: "PubMed Pubstatus of Medliner",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-entrez",
        display: "PubMed Pubstatus of Entrez",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-pubstatus-pmc-release",
        display: "PubMed Pubstatus of PMC release",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-completed",
        display: "Medline Citation Status of Completed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-in-process",
        display: "Medline Citation Status of In-Process",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-pubmed-not-medline",
        display: "Medline Citation Status of PubMed-not-MEDLINE",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-in-data-review",
        display: "Medline Citation Status of In-Data-Review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-publisher",
        display: "Medline Citation Status of Publisher",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-medline",
        display: "Medline Citation Status of MEDLINE",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "medline-oldmedline",
        display: "Medline Citation Status of OLDMEDLINE",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-publication-status-ppublish",
        display: "PubMed PublicationStatus of ppublish",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-publication-status-epublish",
        display: "PubMed PublicationStatus of epublish",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/citation-status-type",
        code: "pubmed-publication-status-aheadofprint",
        display: "PubMed PublicationStatus of aheadofprint",
      },
    ],
  },
  {
    element: {
      id: "Citation.statusDate.actual",
      path: "Citation.statusDate.actual",
      short: "Either occurred or expected",
      definition: "Either occurred or expected.",
      min: 0,
      max: "1",
      base: { path: "Citation.statusDate.actual", min: 0, max: "1" },
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
    dataPath: "root.statusDate.actual",
    parentDataPath: "root.statusDate[0]",
    basePath: "root.actual",
    baseId: "Citation.statusDate.actual",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.relatesTo",
      path: "Citation.relatesTo",
      short: "Artifact related to the Citation Resource",
      definition: "Artifact related to the Citation Resource.",
      min: 0,
      max: "*",
      base: { path: "Citation.relatesTo", min: 0, max: "*" },
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
    baseId: "Citation.relatesTo",
    isPrimitive: false,
    childPaths: [
      "root.relatesTo.relationshipType",
      "root.relatesTo.targetClassifier[0]",
      "root.relatesTo.target[x]",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.relatesTo.relationshipType",
      path: "Citation.relatesTo.relationshipType",
      short: "How the Citation resource relates to the target artifact",
      definition: "How the Citation resource relates to the target artifact.",
      min: 1,
      max: "1",
      base: { path: "Citation.relatesTo.relationshipType", min: 1, max: "1" },
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
            valueString: "ArtifactRelationshipType",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/artifact-relationship-type",
      },
    },
    dataPath: "root.relatesTo.relationshipType",
    parentDataPath: "root.relatesTo[0]",
    basePath: "root.relationshipType",
    baseId: "Citation.relatesTo.relationshipType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "replaces",
        display: "Replaces",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "amends",
        display: "Amends",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "appends",
        display: "Appends",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "transforms",
        display: "Transforms",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "replaced-with",
        display: "Replaced with",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "amended-with",
        display: "Amended with",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "appended-with",
        display: "Appended with",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "transformed-with",
        display: "Transformed with",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "derived-from",
        display: "Derived from",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "transformed-into",
        display: "Transformed into",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "composed-of",
        display: "Composed of",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "part-of",
        display: "Part of",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "supports",
        display: "Supports",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "supported-with",
        display: "Supported with",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "depends-on",
        display: "Depends on",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "similar-to",
        display: "Similar to",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "cites",
        display: "Cites",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "cited-by",
        display: "Cited by",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "retracts",
        display: "Retracts",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "retracted-by",
        display: "Retracted by",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "comments-on",
        display: "Comments On",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "comment-in",
        display: "Comment In",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "corrects",
        display: "Corrects",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "correction-in",
        display: "Correction In",
      },
    ],
  },
  {
    element: {
      id: "Citation.relatesTo.targetClassifier",
      path: "Citation.relatesTo.targetClassifier",
      short: "The clasification of the related artifact",
      definition: "The clasification of the related artifact.",
      min: 0,
      max: "*",
      base: { path: "Citation.relatesTo.targetClassifier", min: 0, max: "*" },
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
            valueString: "CitationArtifactClassifier",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/citation-artifact-classifier",
      },
    },
    dataPath: "root.relatesTo.targetClassifier[0]",
    parentDataPath: "root.relatesTo[0]",
    basePath: "root.targetClassifier",
    baseId: "Citation.relatesTo.targetClassifier",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "webpage",
        display: "Webpage",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016428",
        display: "Journal Article",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016422",
        display: "Letter",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016420",
        display: "Comment",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016425",
        display: "Published Erratum",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "executable-app",
        display: "Executable app",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D000076942",
        display: "Preprint",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D019991",
        display: "Database",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D001877",
        display: "Book",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D064886",
        display: "Dataset",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "68059040",
        display: "Video-Audio Media",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "audio",
        display: "Audio file",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "image",
        display: "Image file",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "machine-code",
        display: "Machine code",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "protocol",
        display: "Protocol",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "fhir-resource",
        display: "FHIR Resource",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Print",
        display: "Print",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Print-Electronic",
        display: "Print Electronic",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Electronic",
        display: "Electronic",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Electronic-Print",
        display: "Electronic-Print",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Electronic-eCollection",
        display: "Electronic-eCollection",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "medline-base",
        display: "Medline Base",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "common-share",
        display: "Common Share",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "project-specific",
        display: "Project Specific",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact",
      path: "Citation.citedArtifact",
      short: "The article or artifact being described",
      definition: "The article or artifact being described.",
      min: 0,
      max: "1",
      base: { path: "Citation.citedArtifact", min: 0, max: "1" },
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
    dataPath: "root.citedArtifact",
    parentDataPath: "root",
    basePath: "root.citedArtifact",
    baseId: "Citation.citedArtifact",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.identifier[0]",
      "root.citedArtifact.relatedIdentifier[0]",
      "root.citedArtifact.dateAccessed",
      "root.citedArtifact.version",
      "root.citedArtifact.currentState[0]",
      "root.citedArtifact.statusDate[0]",
      "root.citedArtifact.title[0]",
      "root.citedArtifact.abstract[0]",
      "root.citedArtifact.part",
      "root.citedArtifact.relatesTo[0]",
      "root.citedArtifact.publicationForm[0]",
      "root.citedArtifact.webLocation[0]",
      "root.citedArtifact.classification[0]",
      "root.citedArtifact.contributorship",
      "root.citedArtifact.note[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.relatedIdentifier",
      path: "Citation.citedArtifact.relatedIdentifier",
      short: "May include trial registry identifiers",
      definition:
        "A formal identifier that is used to identify things closely related to this citation.",
      comment:
        "May include trial registry identifiers, e.g. NCT04372602 from clinicaltrials.gov. This identifier can be valid for multiple citation resources.",
      requirements:
        "Allows externally provided and/or usable identifiers to be associated with this citation.",
      min: 0,
      max: "*",
      base: {
        path: "Citation.citedArtifact.relatedIdentifier",
        min: 0,
        max: "*",
      },
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
    },
    dataPath: "root.citedArtifact.relatedIdentifier[0]",
    parentDataPath: "root.citedArtifact",
    basePath: "root.relatedIdentifier",
    baseId: "Citation.citedArtifact.relatedIdentifier",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.dateAccessed",
      path: "Citation.citedArtifact.dateAccessed",
      short: "When the cited artifact was accessed",
      definition: "When the cited artifact was accessed.",
      min: 0,
      max: "1",
      base: { path: "Citation.citedArtifact.dateAccessed", min: 0, max: "1" },
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
    },
    dataPath: "root.citedArtifact.dateAccessed",
    parentDataPath: "root.citedArtifact",
    basePath: "root.dateAccessed",
    baseId: "Citation.citedArtifact.dateAccessed",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.version",
      path: "Citation.citedArtifact.version",
      short: "The defined version of the cited artifact",
      definition: "The defined version of the cited artifact.",
      min: 0,
      max: "1",
      base: { path: "Citation.citedArtifact.version", min: 0, max: "1" },
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
    dataPath: "root.citedArtifact.version",
    parentDataPath: "root.citedArtifact",
    basePath: "root.version",
    baseId: "Citation.citedArtifact.version",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.version.value",
      "root.citedArtifact.version.baseCitation",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.version.value",
      path: "Citation.citedArtifact.version.value",
      short: "The version number or other version identifier",
      definition: "The version number or other version identifier.",
      min: 1,
      max: "1",
      base: { path: "Citation.citedArtifact.version.value", min: 1, max: "1" },
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
    dataPath: "root.citedArtifact.version.value",
    parentDataPath: "root.citedArtifact.version",
    basePath: "root.value",
    baseId: "Citation.citedArtifact.version.value",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.currentState",
      path: "Citation.citedArtifact.currentState",
      short: "The status of the cited artifact",
      definition: "The status of the cited artifact.",
      min: 0,
      max: "*",
      base: { path: "Citation.citedArtifact.currentState", min: 0, max: "*" },
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
            valueString: "CitedArtifactStatusType",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/cited-artifact-status-type",
      },
    },
    dataPath: "root.citedArtifact.currentState[0]",
    parentDataPath: "root.citedArtifact",
    basePath: "root.currentState",
    baseId: "Citation.citedArtifact.currentState",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "created",
        display: "Created",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "submitted",
        display: "Submitted",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "withdrawn",
        display: "Withdrawn",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "pre-review",
        display: "Pre review",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "under-review",
        display: "Under review",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "post-review-pre-published",
        display: "Post review pre published",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "rejected",
        display: "Rejected",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "published-early-form",
        display: "Published early form",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "published-final-form",
        display: "Published final form",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "accepted",
        display: "Accepted",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "archived",
        display: "Archived",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "retracted",
        display: "Retracted",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "draft",
        display: "Draft",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "active",
        display: "Active",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "approved",
        display: "Approved",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.statusDate",
      path: "Citation.citedArtifact.statusDate",
      short: "An effective date or period for a status of the cited artifact",
      definition:
        "An effective date or period for a status of the cited artifact.",
      min: 0,
      max: "*",
      base: { path: "Citation.citedArtifact.statusDate", min: 0, max: "*" },
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
    dataPath: "root.citedArtifact.statusDate[0]",
    parentDataPath: "root.citedArtifact",
    basePath: "root.statusDate",
    baseId: "Citation.citedArtifact.statusDate",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.statusDate.activity",
      "root.citedArtifact.statusDate.actual",
      "root.citedArtifact.statusDate.period",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.statusDate.activity",
      path: "Citation.citedArtifact.statusDate.activity",
      short: "Classification of the status",
      definition: "Classification of the status.",
      min: 1,
      max: "1",
      base: {
        path: "Citation.citedArtifact.statusDate.activity",
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
            valueString: "CitedArtifactStatusType",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/cited-artifact-status-type",
      },
    },
    dataPath: "root.citedArtifact.statusDate.activity",
    parentDataPath: "root.citedArtifact.statusDate[0]",
    basePath: "root.activity",
    baseId: "Citation.citedArtifact.statusDate.activity",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "created",
        display: "Created",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "submitted",
        display: "Submitted",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "withdrawn",
        display: "Withdrawn",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "pre-review",
        display: "Pre review",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "under-review",
        display: "Under review",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "post-review-pre-published",
        display: "Post review pre published",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "rejected",
        display: "Rejected",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "published-early-form",
        display: "Published early form",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "published-final-form",
        display: "Published final form",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "accepted",
        display: "Accepted",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "archived",
        display: "Archived",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "retracted",
        display: "Retracted",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "draft",
        display: "Draft",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "active",
        display: "Active",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
        code: "approved",
        display: "Approved",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.statusDate.actual",
      path: "Citation.citedArtifact.statusDate.actual",
      short: "Either occurred or expected",
      definition: "Either occurred or expected.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.statusDate.actual",
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
    dataPath: "root.citedArtifact.statusDate.actual",
    parentDataPath: "root.citedArtifact.statusDate[0]",
    basePath: "root.actual",
    baseId: "Citation.citedArtifact.statusDate.actual",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.title",
      path: "Citation.citedArtifact.title",
      short: "The title details of the article or artifact",
      definition: "The title details of the article or artifact.",
      min: 0,
      max: "*",
      base: { path: "Citation.citedArtifact.title", min: 0, max: "*" },
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
    dataPath: "root.citedArtifact.title[0]",
    parentDataPath: "root.citedArtifact",
    basePath: "root.title",
    baseId: "Citation.citedArtifact.title",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.title.type[0]",
      "root.citedArtifact.title.language",
      "root.citedArtifact.title.text",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.title.type",
      path: "Citation.citedArtifact.title.type",
      short: "The kind of title",
      definition:
        "Used to express the reason or specific aspect for the title.",
      min: 0,
      max: "*",
      base: { path: "Citation.citedArtifact.title.type", min: 0, max: "*" },
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
            valueString: "TitleType",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/title-type",
      },
    },
    dataPath: "root.citedArtifact.title.type[0]",
    parentDataPath: "root.citedArtifact.title[0]",
    basePath: "root.type",
    baseId: "Citation.citedArtifact.title.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "primary",
        display: "Primary title",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "official",
        display: "Official title",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "scientific",
        display: "Scientific title",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "plain-language",
        display: "Plain language title",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "subtitle",
        display: "Subtitle",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "short-title",
        display: "Short title",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "acronym",
        display: "Acronym",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "earlier-title",
        display: "Different text in an earlier version",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "language",
        display: "Different language",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "autotranslated",
        display: "Different language derived from autotranslation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "human-use",
        display: "Human use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "machine-use",
        display: "Machine use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/title-type",
        code: "duplicate-uid",
        display:
          "Different text for the same object with a different identifier",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.title.language",
      path: "Citation.citedArtifact.title.language",
      short: "Used to express the specific language",
      definition: "Used to express the specific language.",
      min: 0,
      max: "1",
      base: { path: "Citation.citedArtifact.title.language", min: 0, max: "1" },
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
            valueString: "Language",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "preferred",
        valueSet: "http://hl7.org/fhir/ValueSet/languages",
      },
    },
    dataPath: "root.citedArtifact.title.language",
    parentDataPath: "root.citedArtifact.title[0]",
    basePath: "root.language",
    baseId: "Citation.citedArtifact.title.language",
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
      id: "Citation.citedArtifact.title.text",
      path: "Citation.citedArtifact.title.text",
      short: "The title of the article or artifact",
      definition: "The title of the article or artifact.",
      min: 1,
      max: "1",
      base: { path: "Citation.citedArtifact.title.text", min: 1, max: "1" },
      type: [{ code: "markdown" }],
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
    dataPath: "root.citedArtifact.title.text",
    parentDataPath: "root.citedArtifact.title[0]",
    basePath: "root.text",
    baseId: "Citation.citedArtifact.title.text",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.abstract",
      path: "Citation.citedArtifact.abstract",
      short: "Summary of the article or artifact",
      definition: "Summary of the article or artifact.",
      min: 0,
      max: "*",
      base: { path: "Citation.citedArtifact.abstract", min: 0, max: "*" },
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
    dataPath: "root.citedArtifact.abstract[0]",
    parentDataPath: "root.citedArtifact",
    basePath: "root.abstract",
    baseId: "Citation.citedArtifact.abstract",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.abstract.type",
      "root.citedArtifact.abstract.language",
      "root.citedArtifact.abstract.text",
      "root.citedArtifact.abstract.copyright",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.abstract.type",
      path: "Citation.citedArtifact.abstract.type",
      short: "The kind of abstract",
      definition:
        "Used to express the reason or specific aspect for the abstract.",
      min: 0,
      max: "1",
      base: { path: "Citation.citedArtifact.abstract.type", min: 0, max: "1" },
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
            valueString: "CitedArtifactAbstractType",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/cited-artifact-abstract-type",
      },
    },
    dataPath: "root.citedArtifact.abstract.type",
    parentDataPath: "root.citedArtifact.abstract[0]",
    basePath: "root.type",
    baseId: "Citation.citedArtifact.abstract.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-abstract-type",
        code: "primary-human-use",
        display: "Primary human use",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-abstract-type",
        code: "primary-machine-use",
        display: "Primary machine use",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-abstract-type",
        code: "truncated",
        display: "Truncated",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-abstract-type",
        code: "short-abstract",
        display: "Short abstract",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-abstract-type",
        code: "long-abstract",
        display: "Long abstract",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-abstract-type",
        code: "plain-language",
        display: "Plain language",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-abstract-type",
        code: "different-publisher",
        display: "Different publisher for abstract",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-abstract-type",
        code: "language",
        display: "Different language",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-abstract-type",
        code: "autotranslated",
        display: "Different language derived from autotranslation",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-abstract-type",
        code: "duplicate-pmid",
        display: "Different text in additional Medline entry",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-abstract-type",
        code: "earlier-abstract",
        display: "Different text in an earlier version",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.abstract.language",
      path: "Citation.citedArtifact.abstract.language",
      short: "Used to express the specific language",
      definition: "Used to express the specific language.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.abstract.language",
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
            valueString: "Language",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "preferred",
        valueSet: "http://hl7.org/fhir/ValueSet/languages",
      },
    },
    dataPath: "root.citedArtifact.abstract.language",
    parentDataPath: "root.citedArtifact.abstract[0]",
    basePath: "root.language",
    baseId: "Citation.citedArtifact.abstract.language",
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
      id: "Citation.citedArtifact.abstract.text",
      path: "Citation.citedArtifact.abstract.text",
      short: "Abstract content",
      definition: "Abstract content.",
      min: 1,
      max: "1",
      base: { path: "Citation.citedArtifact.abstract.text", min: 1, max: "1" },
      type: [{ code: "markdown" }],
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
    dataPath: "root.citedArtifact.abstract.text",
    parentDataPath: "root.citedArtifact.abstract[0]",
    basePath: "root.text",
    baseId: "Citation.citedArtifact.abstract.text",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.abstract.copyright",
      path: "Citation.citedArtifact.abstract.copyright",
      short: "Copyright notice for the abstract",
      definition: "Copyright notice for the abstract.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.abstract.copyright",
        min: 0,
        max: "1",
      },
      type: [{ code: "markdown" }],
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
    dataPath: "root.citedArtifact.abstract.copyright",
    parentDataPath: "root.citedArtifact.abstract[0]",
    basePath: "root.copyright",
    baseId: "Citation.citedArtifact.abstract.copyright",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.part",
      path: "Citation.citedArtifact.part",
      short: "The component of the article or artifact",
      definition: "The component of the article or artifact.",
      min: 0,
      max: "1",
      base: { path: "Citation.citedArtifact.part", min: 0, max: "1" },
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
    dataPath: "root.citedArtifact.part",
    parentDataPath: "root.citedArtifact",
    basePath: "root.part",
    baseId: "Citation.citedArtifact.part",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.part.type",
      "root.citedArtifact.part.value",
      "root.citedArtifact.part.baseCitation",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.part.type",
      path: "Citation.citedArtifact.part.type",
      short: "The kind of component",
      definition: "The kind of component.",
      min: 0,
      max: "1",
      base: { path: "Citation.citedArtifact.part.type", min: 0, max: "1" },
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
            valueString: "CitedArtifactPartType",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/cited-artifact-part-type",
      },
    },
    dataPath: "root.citedArtifact.part.type",
    parentDataPath: "root.citedArtifact.part",
    basePath: "root.type",
    baseId: "Citation.citedArtifact.part.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-part-type",
        code: "pages",
        display: "pages",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-part-type",
        code: "sections",
        display: "sections",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-part-type",
        code: "paragraphs",
        display: "paragraphs",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-part-type",
        code: "lines",
        display: "lines",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-part-type",
        code: "tables",
        display: "tables",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-part-type",
        code: "figures",
        display: "figures",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-part-type",
        code: "supplement",
        display: "Supplement or Appendix",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-part-type",
        code: "supplement-subpart",
        display: "Supplement or Appendix Subpart",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-part-type",
        code: "article-set",
        display: "Part of an article set",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.part.value",
      path: "Citation.citedArtifact.part.value",
      short: "The specification of the component",
      definition: "The specification of the component.",
      min: 0,
      max: "1",
      base: { path: "Citation.citedArtifact.part.value", min: 0, max: "1" },
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
    dataPath: "root.citedArtifact.part.value",
    parentDataPath: "root.citedArtifact.part",
    basePath: "root.value",
    baseId: "Citation.citedArtifact.part.value",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.relatesTo",
      path: "Citation.citedArtifact.relatesTo",
      short: "The artifact related to the cited artifact",
      definition: "The artifact related to the cited artifact.",
      min: 0,
      max: "*",
      base: { path: "Citation.citedArtifact.relatesTo", min: 0, max: "*" },
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
    dataPath: "root.citedArtifact.relatesTo[0]",
    parentDataPath: "root.citedArtifact",
    basePath: "root.relatesTo",
    baseId: "Citation.citedArtifact.relatesTo",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.relatesTo.relationshipType",
      "root.citedArtifact.relatesTo.targetClassifier[0]",
      "root.citedArtifact.relatesTo.target[x]",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.relatesTo.relationshipType",
      path: "Citation.citedArtifact.relatesTo.relationshipType",
      short: "How the cited artifact relates to the target artifact",
      definition: "How the cited artifact relates to the target artifact.",
      min: 1,
      max: "1",
      base: {
        path: "Citation.citedArtifact.relatesTo.relationshipType",
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
            valueString: "ArtifactRelationshipType",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/artifact-relationship-type",
      },
    },
    dataPath: "root.citedArtifact.relatesTo.relationshipType",
    parentDataPath: "root.citedArtifact.relatesTo[0]",
    basePath: "root.relationshipType",
    baseId: "Citation.citedArtifact.relatesTo.relationshipType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "replaces",
        display: "Replaces",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "amends",
        display: "Amends",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "appends",
        display: "Appends",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "transforms",
        display: "Transforms",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "replaced-with",
        display: "Replaced with",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "amended-with",
        display: "Amended with",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "appended-with",
        display: "Appended with",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "transformed-with",
        display: "Transformed with",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "derived-from",
        display: "Derived from",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "transformed-into",
        display: "Transformed into",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "composed-of",
        display: "Composed of",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "part-of",
        display: "Part of",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "supports",
        display: "Supports",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "supported-with",
        display: "Supported with",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "depends-on",
        display: "Depends on",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "similar-to",
        display: "Similar to",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "cites",
        display: "Cites",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "cited-by",
        display: "Cited by",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "retracts",
        display: "Retracts",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "retracted-by",
        display: "Retracted by",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "comments-on",
        display: "Comments On",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "comment-in",
        display: "Comment In",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "corrects",
        display: "Corrects",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
        code: "correction-in",
        display: "Correction In",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.relatesTo.targetClassifier",
      path: "Citation.citedArtifact.relatesTo.targetClassifier",
      short: "The clasification of the related artifact",
      definition: "The clasification of the related artifact.",
      min: 0,
      max: "*",
      base: {
        path: "Citation.citedArtifact.relatesTo.targetClassifier",
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
            valueString: "CitationArtifactClassifier",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/citation-artifact-classifier",
      },
    },
    dataPath: "root.citedArtifact.relatesTo.targetClassifier[0]",
    parentDataPath: "root.citedArtifact.relatesTo[0]",
    basePath: "root.targetClassifier",
    baseId: "Citation.citedArtifact.relatesTo.targetClassifier",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "webpage",
        display: "Webpage",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016428",
        display: "Journal Article",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016422",
        display: "Letter",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016420",
        display: "Comment",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016425",
        display: "Published Erratum",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "executable-app",
        display: "Executable app",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D000076942",
        display: "Preprint",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D019991",
        display: "Database",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D001877",
        display: "Book",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D064886",
        display: "Dataset",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "68059040",
        display: "Video-Audio Media",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "audio",
        display: "Audio file",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "image",
        display: "Image file",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "machine-code",
        display: "Machine code",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "protocol",
        display: "Protocol",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "fhir-resource",
        display: "FHIR Resource",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Print",
        display: "Print",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Print-Electronic",
        display: "Print Electronic",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Electronic",
        display: "Electronic",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Electronic-Print",
        display: "Electronic-Print",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Electronic-eCollection",
        display: "Electronic-eCollection",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "medline-base",
        display: "Medline Base",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "common-share",
        display: "Common Share",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "project-specific",
        display: "Project Specific",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm",
      path: "Citation.citedArtifact.publicationForm",
      short:
        "If multiple, used to represent alternative forms of the article that are not separate citations",
      definition:
        "If multiple, used to represent alternative forms of the article that are not separate citations.",
      comment:
        "A common use is a journal article with a publication date and pagination for a print version and a different publication date for the online version of the same article.",
      min: 0,
      max: "*",
      base: {
        path: "Citation.citedArtifact.publicationForm",
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
    },
    dataPath: "root.citedArtifact.publicationForm[0]",
    parentDataPath: "root.citedArtifact",
    basePath: "root.publicationForm",
    baseId: "Citation.citedArtifact.publicationForm",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.publicationForm.publishedIn",
      "root.citedArtifact.publicationForm.periodicRelease",
      "root.citedArtifact.publicationForm.articleDate",
      "root.citedArtifact.publicationForm.lastRevisionDate",
      "root.citedArtifact.publicationForm.language[0]",
      "root.citedArtifact.publicationForm.accessionNumber",
      "root.citedArtifact.publicationForm.pageString",
      "root.citedArtifact.publicationForm.firstPage",
      "root.citedArtifact.publicationForm.lastPage",
      "root.citedArtifact.publicationForm.pageCount",
      "root.citedArtifact.publicationForm.copyright",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.publishedIn",
      path: "Citation.citedArtifact.publicationForm.publishedIn",
      short: "The collection the cited article or artifact is published in",
      definition:
        "The collection the cited article or artifact is published in.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.publishedIn",
        min: 0,
        max: "1",
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
    },
    dataPath: "root.citedArtifact.publicationForm.publishedIn",
    parentDataPath: "root.citedArtifact.publicationForm[0]",
    basePath: "root.publishedIn",
    baseId: "Citation.citedArtifact.publicationForm.publishedIn",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.publicationForm.publishedIn.type",
      "root.citedArtifact.publicationForm.publishedIn.identifier[0]",
      "root.citedArtifact.publicationForm.publishedIn.title",
      "root.citedArtifact.publicationForm.publishedIn.publisher",
      "root.citedArtifact.publicationForm.publishedIn.publisherLocation",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.publishedIn.type",
      path: "Citation.citedArtifact.publicationForm.publishedIn.type",
      short: "Kind of container (e.g. Periodical, database, or book)",
      definition: "Kind of container (e.g. Periodical, database, or book).",
      comment: "Journals and newspapers are coded as Periodical.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.publishedIn.type",
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
            valueString: "PublishedInType",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/published-in-type",
      },
    },
    dataPath: "root.citedArtifact.publicationForm.publishedIn.type",
    parentDataPath: "root.citedArtifact.publicationForm.publishedIn",
    basePath: "root.type",
    baseId: "Citation.citedArtifact.publicationForm.publishedIn.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/published-in-type",
        code: "D020492",
        display: "Periodical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/published-in-type",
        code: "D019991",
        display: "Database",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/published-in-type",
        code: "D001877",
        display: "Book",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/published-in-type",
        code: "D064886",
        display: "Dataset",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.publishedIn.title",
      path: "Citation.citedArtifact.publicationForm.publishedIn.title",
      short: "Name of the database or title of the book or journal",
      definition: "Name of the database or title of the book or journal.",
      comment: "ClinicalTrials.gov is a name of a database.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.publishedIn.title",
        min: 0,
        max: "1",
      },
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
    dataPath: "root.citedArtifact.publicationForm.publishedIn.title",
    parentDataPath: "root.citedArtifact.publicationForm.publishedIn",
    basePath: "root.title",
    baseId: "Citation.citedArtifact.publicationForm.publishedIn.title",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.publishedIn.publisherLocation",
      path: "Citation.citedArtifact.publicationForm.publishedIn.publisherLocation",
      short: "Geographic location of the publisher",
      definition: "Geographic location of the publisher.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.publishedIn.publisherLocation",
        min: 0,
        max: "1",
      },
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
    dataPath:
      "root.citedArtifact.publicationForm.publishedIn.publisherLocation",
    parentDataPath: "root.citedArtifact.publicationForm.publishedIn",
    basePath: "root.publisherLocation",
    baseId:
      "Citation.citedArtifact.publicationForm.publishedIn.publisherLocation",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.periodicRelease",
      path: "Citation.citedArtifact.publicationForm.periodicRelease",
      short: "The specific issue in which the cited article resides",
      definition: "The specific issue in which the cited article resides.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.periodicRelease",
        min: 0,
        max: "1",
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
    },
    dataPath: "root.citedArtifact.publicationForm.periodicRelease",
    parentDataPath: "root.citedArtifact.publicationForm[0]",
    basePath: "root.periodicRelease",
    baseId: "Citation.citedArtifact.publicationForm.periodicRelease",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.publicationForm.periodicRelease.citedMedium",
      "root.citedArtifact.publicationForm.periodicRelease.volume",
      "root.citedArtifact.publicationForm.periodicRelease.issue",
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.periodicRelease.citedMedium",
      path: "Citation.citedArtifact.publicationForm.periodicRelease.citedMedium",
      short: "Internet or Print",
      definition:
        'Describes the form of the medium cited. Common codes are "Internet" or "Print".',
      comment:
        'National Library of Medicine uses the codes "Internet" or "Print".',
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.periodicRelease.citedMedium",
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
            valueString: "CitedMedium",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/cited-medium",
      },
    },
    dataPath: "root.citedArtifact.publicationForm.periodicRelease.citedMedium",
    parentDataPath: "root.citedArtifact.publicationForm.periodicRelease",
    basePath: "root.citedMedium",
    baseId:
      "Citation.citedArtifact.publicationForm.periodicRelease.citedMedium",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/cited-medium",
        code: "internet",
        display: "Internet",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/cited-medium",
        code: "print",
        display: "Print",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/cited-medium",
        code: "offline-digital-storage",
        display: "Offline Digital Storage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/cited-medium",
        code: "internet-without-issue",
        display: "Internet without issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/cited-medium",
        code: "print-without-issue",
        display: "Print without issue",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/cited-medium",
        code: "offline-digital-storage-without-issue",
        display: "Offline Digital Storage without issue",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.periodicRelease.volume",
      path: "Citation.citedArtifact.publicationForm.periodicRelease.volume",
      short: "Volume number of journal in which the article is published",
      definition: "Volume number of journal in which the article is published.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.periodicRelease.volume",
        min: 0,
        max: "1",
      },
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
    dataPath: "root.citedArtifact.publicationForm.periodicRelease.volume",
    parentDataPath: "root.citedArtifact.publicationForm.periodicRelease",
    basePath: "root.volume",
    baseId: "Citation.citedArtifact.publicationForm.periodicRelease.volume",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.periodicRelease.issue",
      path: "Citation.citedArtifact.publicationForm.periodicRelease.issue",
      short:
        "Issue, part or supplement of journal in which the article is published",
      definition:
        "Issue, part or supplement of journal in which the article is published.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.periodicRelease.issue",
        min: 0,
        max: "1",
      },
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
    dataPath: "root.citedArtifact.publicationForm.periodicRelease.issue",
    parentDataPath: "root.citedArtifact.publicationForm.periodicRelease",
    basePath: "root.issue",
    baseId: "Citation.citedArtifact.publicationForm.periodicRelease.issue",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication",
      path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication",
      short:
        "Defining the date on which the issue of the journal was published",
      definition:
        "Defining the date on which the issue of the journal was published.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication",
        min: 0,
        max: "1",
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
    },
    dataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication",
    parentDataPath: "root.citedArtifact.publicationForm.periodicRelease",
    basePath: "root.dateOfPublication",
    baseId:
      "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication.date",
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication.year",
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication.month",
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication.day",
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication.season",
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication.text",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.date",
      path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.date",
      short: "Date on which the issue of the journal was published",
      definition: "Date on which the issue of the journal was published.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.date",
        min: 0,
        max: "1",
      },
      type: [{ code: "date" }],
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
    dataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication.date",
    parentDataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication",
    basePath: "root.date",
    baseId:
      "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.date",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.year",
      path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.year",
      short: "Year on which the issue of the journal was published",
      definition: "Year on which the issue of the journal was published.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.year",
        min: 0,
        max: "1",
      },
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
    dataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication.year",
    parentDataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication",
    basePath: "root.year",
    baseId:
      "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.year",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.month",
      path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.month",
      short: "Month on which the issue of the journal was published",
      definition: "Month on which the issue of the journal was published.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.month",
        min: 0,
        max: "1",
      },
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
    dataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication.month",
    parentDataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication",
    basePath: "root.month",
    baseId:
      "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.month",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.day",
      path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.day",
      short: "Day on which the issue of the journal was published",
      definition: "Day on which the issue of the journal was published.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.day",
        min: 0,
        max: "1",
      },
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
    dataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication.day",
    parentDataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication",
    basePath: "root.day",
    baseId:
      "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.day",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.season",
      path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.season",
      short: "Season on which the issue of the journal was published",
      definition: "Spring, Summer, Fall/Autumn, Winter.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.season",
        min: 0,
        max: "1",
      },
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
    dataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication.season",
    parentDataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication",
    basePath: "root.season",
    baseId:
      "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.season",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.text",
      path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.text",
      short:
        "Text representation of the date of which the issue of the journal was published",
      definition:
        "Text representation of the date of which the issue of the journal was published.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.text",
        min: 0,
        max: "1",
      },
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
    dataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication.text",
    parentDataPath:
      "root.citedArtifact.publicationForm.periodicRelease.dateOfPublication",
    basePath: "root.text",
    baseId:
      "Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.text",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.articleDate",
      path: "Citation.citedArtifact.publicationForm.articleDate",
      short:
        "The date the article was added to the database, or the date the article was released",
      definition:
        "The date the article was added to the database, or the date the article was released (which may differ from the journal issue publication date).",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.articleDate",
        min: 0,
        max: "1",
      },
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
    },
    dataPath: "root.citedArtifact.publicationForm.articleDate",
    parentDataPath: "root.citedArtifact.publicationForm[0]",
    basePath: "root.articleDate",
    baseId: "Citation.citedArtifact.publicationForm.articleDate",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.lastRevisionDate",
      path: "Citation.citedArtifact.publicationForm.lastRevisionDate",
      short: "The date the article was last revised or updated in the database",
      definition:
        "The date the article was last revised or updated in the database.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.lastRevisionDate",
        min: 0,
        max: "1",
      },
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
    },
    dataPath: "root.citedArtifact.publicationForm.lastRevisionDate",
    parentDataPath: "root.citedArtifact.publicationForm[0]",
    basePath: "root.lastRevisionDate",
    baseId: "Citation.citedArtifact.publicationForm.lastRevisionDate",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.language",
      path: "Citation.citedArtifact.publicationForm.language",
      short: "Language in which this form of the article is published",
      definition: "Language in which this form of the article is published.",
      comment:
        "Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).",
      min: 0,
      max: "*",
      base: {
        path: "Citation.citedArtifact.publicationForm.language",
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
            valueString: "Language",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "preferred",
        valueSet: "http://hl7.org/fhir/ValueSet/languages",
      },
    },
    dataPath: "root.citedArtifact.publicationForm.language[0]",
    parentDataPath: "root.citedArtifact.publicationForm[0]",
    basePath: "root.language",
    baseId: "Citation.citedArtifact.publicationForm.language",
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
      id: "Citation.citedArtifact.publicationForm.accessionNumber",
      path: "Citation.citedArtifact.publicationForm.accessionNumber",
      short: "Entry number or identifier for inclusion in a database",
      definition: "Entry number or identifier for inclusion in a database.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.accessionNumber",
        min: 0,
        max: "1",
      },
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
    dataPath: "root.citedArtifact.publicationForm.accessionNumber",
    parentDataPath: "root.citedArtifact.publicationForm[0]",
    basePath: "root.accessionNumber",
    baseId: "Citation.citedArtifact.publicationForm.accessionNumber",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.pageString",
      path: "Citation.citedArtifact.publicationForm.pageString",
      short: "Used for full display of pagination",
      definition: "Used for full display of pagination.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.pageString",
        min: 0,
        max: "1",
      },
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
    dataPath: "root.citedArtifact.publicationForm.pageString",
    parentDataPath: "root.citedArtifact.publicationForm[0]",
    basePath: "root.pageString",
    baseId: "Citation.citedArtifact.publicationForm.pageString",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.firstPage",
      path: "Citation.citedArtifact.publicationForm.firstPage",
      short: "Used for isolated representation of first page",
      definition: "Used for isolated representation of first page.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.firstPage",
        min: 0,
        max: "1",
      },
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
    dataPath: "root.citedArtifact.publicationForm.firstPage",
    parentDataPath: "root.citedArtifact.publicationForm[0]",
    basePath: "root.firstPage",
    baseId: "Citation.citedArtifact.publicationForm.firstPage",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.lastPage",
      path: "Citation.citedArtifact.publicationForm.lastPage",
      short: "Used for isolated representation of last page",
      definition: "Used for isolated representation of last page.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.lastPage",
        min: 0,
        max: "1",
      },
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
    dataPath: "root.citedArtifact.publicationForm.lastPage",
    parentDataPath: "root.citedArtifact.publicationForm[0]",
    basePath: "root.lastPage",
    baseId: "Citation.citedArtifact.publicationForm.lastPage",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.pageCount",
      path: "Citation.citedArtifact.publicationForm.pageCount",
      short: "Number of pages or screens",
      definition: "Actual or approximate number of pages or screens.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.pageCount",
        min: 0,
        max: "1",
      },
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
    dataPath: "root.citedArtifact.publicationForm.pageCount",
    parentDataPath: "root.citedArtifact.publicationForm[0]",
    basePath: "root.pageCount",
    baseId: "Citation.citedArtifact.publicationForm.pageCount",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.publicationForm.copyright",
      path: "Citation.citedArtifact.publicationForm.copyright",
      short: "Copyright notice for the full article or artifact",
      definition: "Copyright notice for the full article or artifact.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.publicationForm.copyright",
        min: 0,
        max: "1",
      },
      type: [{ code: "markdown" }],
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
    dataPath: "root.citedArtifact.publicationForm.copyright",
    parentDataPath: "root.citedArtifact.publicationForm[0]",
    basePath: "root.copyright",
    baseId: "Citation.citedArtifact.publicationForm.copyright",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.webLocation",
      path: "Citation.citedArtifact.webLocation",
      short: "Used for any URL for the article or artifact cited",
      definition: "Used for any URL for the article or artifact cited.",
      min: 0,
      max: "*",
      base: { path: "Citation.citedArtifact.webLocation", min: 0, max: "*" },
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
    dataPath: "root.citedArtifact.webLocation[0]",
    parentDataPath: "root.citedArtifact",
    basePath: "root.webLocation",
    baseId: "Citation.citedArtifact.webLocation",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.webLocation.type",
      "root.citedArtifact.webLocation.url",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.webLocation.type",
      path: "Citation.citedArtifact.webLocation.type",
      short: "Code the reason for different URLs, e.g. abstract and full-text",
      definition:
        "Code the reason for different URLs, e.g. abstract and full-text.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.webLocation.type",
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
            valueString: "ArticleUrlType",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/article-url-type",
      },
    },
    dataPath: "root.citedArtifact.webLocation.type",
    parentDataPath: "root.citedArtifact.webLocation[0]",
    basePath: "root.type",
    baseId: "Citation.citedArtifact.webLocation.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "abstract",
        display: "Abstract",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "abstract-version",
        display: "Abstract Version",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "doi-based",
        display: "DOI Based",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "full-text",
        display: "Full-Text",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "full-text-version",
        display: "Full-Text Version",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "pdf",
        display: "PDF",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "pdf-version",
        display: "PDF Version",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "webpage",
        display: "Webpage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "not-specified",
        display: "Not Specified",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "json",
        display: "JSON",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "json-version",
        display: "JSON Version",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "xml",
        display: "XML",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "xml-version",
        display: "XML",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "supplement",
        display: "Supplement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "supplementary-file-directory",
        display: "Supplementary file directory",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/article-url-type",
        code: "compressed-file",
        display: "Compressed file",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.webLocation.url",
      path: "Citation.citedArtifact.webLocation.url",
      short: "The specific URL",
      definition: "The specific URL.",
      comment: "Persistent URLs, like doi, are preferred.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.webLocation.url",
        min: 0,
        max: "1",
      },
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
    },
    dataPath: "root.citedArtifact.webLocation.url",
    parentDataPath: "root.citedArtifact.webLocation[0]",
    basePath: "root.url",
    baseId: "Citation.citedArtifact.webLocation.url",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.classification",
      path: "Citation.citedArtifact.classification",
      short: "The assignment to an organizing scheme",
      definition: "The assignment to an organizing scheme.",
      min: 0,
      max: "*",
      base: { path: "Citation.citedArtifact.classification", min: 0, max: "*" },
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
    dataPath: "root.citedArtifact.classification[0]",
    parentDataPath: "root.citedArtifact",
    basePath: "root.classification",
    baseId: "Citation.citedArtifact.classification",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.classification.type",
      "root.citedArtifact.classification.classifier[0]",
      "root.citedArtifact.classification.whoClassified",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.classification.type",
      path: "Citation.citedArtifact.classification.type",
      short: "The kind of classifier (e.g. publication type, keyword)",
      definition: "The kind of classifier (e.g. publication type, keyword).",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.classification.type",
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
            valueString: "CitedArtifactClassificationType",
          },
        ],
        strength: "extensible",
        valueSet:
          "http://hl7.org/fhir/ValueSet/cited-artifact-classification-type",
      },
    },
    dataPath: "root.citedArtifact.classification.type",
    parentDataPath: "root.citedArtifact.classification[0]",
    basePath: "root.type",
    baseId: "Citation.citedArtifact.classification.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-classification-type",
        code: "publication-type",
        display: "Publication type",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-classification-type",
        code: "mesh-heading",
        display: "MeSH heading",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-classification-type",
        code: "supplemental-mesh-protocol",
        display: "Supplemental MeSH for Protocol",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-classification-type",
        code: "supplemental-mesh-disease",
        display: "Supplemental MeSH for Disease",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-classification-type",
        code: "supplemental-mesh-organism",
        display: "Supplemental MeSH for Organism",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-classification-type",
        code: "keyword",
        display: "Keyword",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-classification-type",
        code: "citation-subset",
        display: "Citation subset",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-classification-type",
        code: "chemical",
        display: "Chemical",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-classification-type",
        code: "publishing-model",
        display: "Publishing Model",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-classification-type",
        code: "knowledge-artifact-type",
        display: "Knowledge Artifact Type",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/cited-artifact-classification-type",
        code: "coverage",
        display: "Coverage",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.classification.classifier",
      path: "Citation.citedArtifact.classification.classifier",
      short: "The specific classification value",
      definition: "The specific classification value.",
      min: 0,
      max: "*",
      base: {
        path: "Citation.citedArtifact.classification.classifier",
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
            valueString: "CitationArtifactClassifier",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/citation-artifact-classifier",
      },
    },
    dataPath: "root.citedArtifact.classification.classifier[0]",
    parentDataPath: "root.citedArtifact.classification[0]",
    basePath: "root.classifier",
    baseId: "Citation.citedArtifact.classification.classifier",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "webpage",
        display: "Webpage",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016428",
        display: "Journal Article",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016422",
        display: "Letter",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016420",
        display: "Comment",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D016425",
        display: "Published Erratum",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "executable-app",
        display: "Executable app",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D000076942",
        display: "Preprint",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D019991",
        display: "Database",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D001877",
        display: "Book",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "D064886",
        display: "Dataset",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "68059040",
        display: "Video-Audio Media",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "audio",
        display: "Audio file",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "image",
        display: "Image file",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "machine-code",
        display: "Machine code",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "protocol",
        display: "Protocol",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "fhir-resource",
        display: "FHIR Resource",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Print",
        display: "Print",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Print-Electronic",
        display: "Print Electronic",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Electronic",
        display: "Electronic",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Electronic-Print",
        display: "Electronic-Print",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "Electronic-eCollection",
        display: "Electronic-eCollection",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "medline-base",
        display: "Medline Base",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "common-share",
        display: "Common Share",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
        code: "project-specific",
        display: "Project Specific",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.classification.whoClassified",
      path: "Citation.citedArtifact.classification.whoClassified",
      short: "Provenance and copyright of classification",
      definition: "Provenance and copyright of classification.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.classification.whoClassified",
        min: 0,
        max: "1",
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
    },
    dataPath: "root.citedArtifact.classification.whoClassified",
    parentDataPath: "root.citedArtifact.classification[0]",
    basePath: "root.whoClassified",
    baseId: "Citation.citedArtifact.classification.whoClassified",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.classification.whoClassified.person",
      "root.citedArtifact.classification.whoClassified.organization",
      "root.citedArtifact.classification.whoClassified.publisher",
      "root.citedArtifact.classification.whoClassified.classifierCopyright",
      "root.citedArtifact.classification.whoClassified.freeToShare",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.classification.whoClassified.organization",
      path: "Citation.citedArtifact.classification.whoClassified.organization",
      short: "Organization who created the classification",
      definition: "Organization who created the classification.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.classification.whoClassified.organization",
        min: 0,
        max: "1",
      },
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
    },
    dataPath: "root.citedArtifact.classification.whoClassified.organization",
    parentDataPath: "root.citedArtifact.classification.whoClassified",
    basePath: "root.organization",
    baseId: "Citation.citedArtifact.classification.whoClassified.organization",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.classification.whoClassified.classifierCopyright",
      path: "Citation.citedArtifact.classification.whoClassified.classifierCopyright",
      short: "Rights management statement for the classification",
      definition: "Rights management statement for the classification.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.classification.whoClassified.classifierCopyright",
        min: 0,
        max: "1",
      },
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
    dataPath:
      "root.citedArtifact.classification.whoClassified.classifierCopyright",
    parentDataPath: "root.citedArtifact.classification.whoClassified",
    basePath: "root.classifierCopyright",
    baseId:
      "Citation.citedArtifact.classification.whoClassified.classifierCopyright",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.classification.whoClassified.freeToShare",
      path: "Citation.citedArtifact.classification.whoClassified.freeToShare",
      short: "Acceptable to re-use the classification",
      definition: "Acceptable to re-use the classification.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.classification.whoClassified.freeToShare",
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
    dataPath: "root.citedArtifact.classification.whoClassified.freeToShare",
    parentDataPath: "root.citedArtifact.classification.whoClassified",
    basePath: "root.freeToShare",
    baseId: "Citation.citedArtifact.classification.whoClassified.freeToShare",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship",
      path: "Citation.citedArtifact.contributorship",
      short: "Attribution of authors and other contributors",
      definition:
        "This element is used to list authors and other contributors, their contact information, specific contributions, and summary statements.",
      requirements:
        "Need to support individualized and collective attribution of authorship and contributorship to people and groups.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship",
        min: 0,
        max: "1",
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
    },
    dataPath: "root.citedArtifact.contributorship",
    parentDataPath: "root.citedArtifact",
    basePath: "root.contributorship",
    baseId: "Citation.citedArtifact.contributorship",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.contributorship.complete",
      "root.citedArtifact.contributorship.entry[0]",
      "root.citedArtifact.contributorship.summary[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.complete",
      path: "Citation.citedArtifact.contributorship.complete",
      short: "Indicates if the list includes all authors and/or contributors",
      definition:
        "Indicates if the list includes all authors and/or contributors.",
      comment:
        'If list is incomplete "et al" can be appended to Contributorship.summary.value for display purposes.',
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.complete",
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
    dataPath: "root.citedArtifact.contributorship.complete",
    parentDataPath: "root.citedArtifact.contributorship",
    basePath: "root.complete",
    baseId: "Citation.citedArtifact.contributorship.complete",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry",
      path: "Citation.citedArtifact.contributorship.entry",
      short: "An individual entity named in the list",
      definition:
        "An individual entity named in the author list or contributor list.",
      comment: "Used to report contributorship in individualized ways.",
      min: 0,
      max: "*",
      base: {
        path: "Citation.citedArtifact.contributorship.entry",
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
    },
    dataPath: "root.citedArtifact.contributorship.entry[0]",
    parentDataPath: "root.citedArtifact.contributorship",
    basePath: "root.entry",
    baseId: "Citation.citedArtifact.contributorship.entry",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.contributorship.entry.name",
      "root.citedArtifact.contributorship.entry.initials",
      "root.citedArtifact.contributorship.entry.collectiveName",
      "root.citedArtifact.contributorship.entry.identifier[0]",
      "root.citedArtifact.contributorship.entry.affiliationInfo[0]",
      "root.citedArtifact.contributorship.entry.address[0]",
      "root.citedArtifact.contributorship.entry.telecom[0]",
      "root.citedArtifact.contributorship.entry.contributionType[0]",
      "root.citedArtifact.contributorship.entry.role",
      "root.citedArtifact.contributorship.entry.contributionInstance[0]",
      "root.citedArtifact.contributorship.entry.correspondingContact",
      "root.citedArtifact.contributorship.entry.listOrder",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.initials",
      path: "Citation.citedArtifact.contributorship.entry.initials",
      short: "Initials for forename",
      definition: "Initials for forename.",
      comment:
        "This element is used in Medline based citations, but not supported fully by FHIR HumanName datatype.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.initials",
        min: 0,
        max: "1",
      },
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
    dataPath: "root.citedArtifact.contributorship.entry.initials",
    parentDataPath: "root.citedArtifact.contributorship.entry[0]",
    basePath: "root.initials",
    baseId: "Citation.citedArtifact.contributorship.entry.initials",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.collectiveName",
      path: "Citation.citedArtifact.contributorship.entry.collectiveName",
      short: "Used for collective or corporate name as an author",
      definition: "Used for collective or corporate name as an author.",
      comment:
        "This element is used in Medline based citations, but not supported fully by FHIR HumanName datatype.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.collectiveName",
        min: 0,
        max: "1",
      },
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
    dataPath: "root.citedArtifact.contributorship.entry.collectiveName",
    parentDataPath: "root.citedArtifact.contributorship.entry[0]",
    basePath: "root.collectiveName",
    baseId: "Citation.citedArtifact.contributorship.entry.collectiveName",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.affiliationInfo",
      path: "Citation.citedArtifact.contributorship.entry.affiliationInfo",
      short: "Organizational affiliation",
      definition: "Organization affiliated with the entity.",
      min: 0,
      max: "*",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.affiliationInfo",
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
    },
    dataPath: "root.citedArtifact.contributorship.entry.affiliationInfo[0]",
    parentDataPath: "root.citedArtifact.contributorship.entry[0]",
    basePath: "root.affiliationInfo",
    baseId: "Citation.citedArtifact.contributorship.entry.affiliationInfo",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.contributorship.entry.affiliationInfo.affiliation",
      "root.citedArtifact.contributorship.entry.affiliationInfo.role",
      "root.citedArtifact.contributorship.entry.affiliationInfo.identifier[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.affiliationInfo.affiliation",
      path: "Citation.citedArtifact.contributorship.entry.affiliationInfo.affiliation",
      short: "Display for the organization",
      definition: "Display for the organization.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.affiliationInfo.affiliation",
        min: 0,
        max: "1",
      },
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
    dataPath:
      "root.citedArtifact.contributorship.entry.affiliationInfo.affiliation",
    parentDataPath:
      "root.citedArtifact.contributorship.entry.affiliationInfo[0]",
    basePath: "root.affiliation",
    baseId:
      "Citation.citedArtifact.contributorship.entry.affiliationInfo.affiliation",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.affiliationInfo.role",
      path: "Citation.citedArtifact.contributorship.entry.affiliationInfo.role",
      short: "Role within the organization, such as professional title",
      definition: "Role within the organization, such as professional title.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.affiliationInfo.role",
        min: 0,
        max: "1",
      },
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
    dataPath: "root.citedArtifact.contributorship.entry.affiliationInfo.role",
    parentDataPath:
      "root.citedArtifact.contributorship.entry.affiliationInfo[0]",
    basePath: "root.role",
    baseId: "Citation.citedArtifact.contributorship.entry.affiliationInfo.role",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.address",
      path: "Citation.citedArtifact.contributorship.entry.address",
      short: "Physical mailing address",
      definition: "Physical mailing address for the author or contributor.",
      min: 0,
      max: "*",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.address",
        min: 0,
        max: "*",
      },
      type: [{ code: "Address" }],
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
    dataPath: "root.citedArtifact.contributorship.entry.address[0]",
    parentDataPath: "root.citedArtifact.contributorship.entry[0]",
    basePath: "root.address",
    baseId: "Citation.citedArtifact.contributorship.entry.address",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.contributionType",
      path: "Citation.citedArtifact.contributorship.entry.contributionType",
      short: "The specific contribution",
      definition:
        "This element identifies the specific nature of an individual’s contribution with respect to the cited work.",
      comment:
        "The CreDiT taxonomy provides a way to encode contribution information inside article XML files. The purpose of CRediT is to provide transparency in contributions to scholarly published work, to enable improved systems of attribution, credit, and accountability.",
      min: 0,
      max: "*",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.contributionType",
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
            valueString: "ArtifactContributionType",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/artifact-contribution-type",
      },
    },
    dataPath: "root.citedArtifact.contributorship.entry.contributionType[0]",
    parentDataPath: "root.citedArtifact.contributorship.entry[0]",
    basePath: "root.contributionType",
    baseId: "Citation.citedArtifact.contributorship.entry.contributionType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "conceptualization",
        display: "Conceptualization",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "data-curation",
        display: "Data curation",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "formal-analysis",
        display: "Formal analysis",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "funding-acquisition",
        display: "Funding acquisition",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "investigation",
        display: "Investigation",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "methodology",
        display: "Methodology",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "project-administration",
        display: "Project administration",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "resources",
        display: "Resources",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "software",
        display: "Software",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "supervision",
        display: "Supervision",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "validation",
        display: "Validation",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "visualization",
        display: "Visualization",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "writing-original-draft",
        display: "Writing - original draft",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-type",
        code: "writing-review-editing",
        display: "Writing - review & editing",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.role",
      path: "Citation.citedArtifact.contributorship.entry.role",
      short: "The role of the contributor (e.g. author, editor, reviewer)",
      definition:
        "The role of the contributor (e.g. author, editor, reviewer).",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.role",
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
            valueString: "ContributorRole",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/contributor-role",
      },
    },
    dataPath: "root.citedArtifact.contributorship.entry.role",
    parentDataPath: "root.citedArtifact.contributorship.entry[0]",
    basePath: "root.role",
    baseId: "Citation.citedArtifact.contributorship.entry.role",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/contributor-role",
        code: "publisher",
        display: "Publisher",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/contributor-role",
        code: "author",
        display: "Author/Creator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/contributor-role",
        code: "reviewer",
        display: "Reviewer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/contributor-role",
        code: "endorser",
        display: "Endorser",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/contributor-role",
        code: "editor",
        display: "Editor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/contributor-role",
        code: "informant",
        display: "Informant",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/contributor-role",
        code: "funder",
        display: "Funder",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.contributionInstance",
      path: "Citation.citedArtifact.contributorship.entry.contributionInstance",
      short: "Contributions with accounting for time or number",
      definition: "Contributions with accounting for time or number.",
      min: 0,
      max: "*",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.contributionInstance",
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
    },
    dataPath:
      "root.citedArtifact.contributorship.entry.contributionInstance[0]",
    parentDataPath: "root.citedArtifact.contributorship.entry[0]",
    basePath: "root.contributionInstance",
    baseId: "Citation.citedArtifact.contributorship.entry.contributionInstance",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.contributorship.entry.contributionInstance.type",
      "root.citedArtifact.contributorship.entry.contributionInstance.time",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.contributionInstance.type",
      path: "Citation.citedArtifact.contributorship.entry.contributionInstance.type",
      short: "The specific contribution",
      definition: "The specific contribution.",
      min: 1,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.contributionInstance.type",
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
            valueString: "ArtifactContributionInstanceType",
          },
        ],
        strength: "extensible",
        valueSet:
          "http://hl7.org/fhir/ValueSet/artifact-contribution-instance-type",
      },
    },
    dataPath:
      "root.citedArtifact.contributorship.entry.contributionInstance.type",
    parentDataPath:
      "root.citedArtifact.contributorship.entry.contributionInstance[0]",
    basePath: "root.type",
    baseId:
      "Citation.citedArtifact.contributorship.entry.contributionInstance.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-instance-type",
        code: "reviewed",
        display: "Reviewed",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-instance-type",
        code: "approved",
        display: "Approved",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/artifact-contribution-instance-type",
        code: "edited",
        display: "Edited",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.contributionInstance.time",
      path: "Citation.citedArtifact.contributorship.entry.contributionInstance.time",
      short: "The time that the contribution was made",
      definition: "The time that the contribution was made.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.contributionInstance.time",
        min: 0,
        max: "1",
      },
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
    },
    dataPath:
      "root.citedArtifact.contributorship.entry.contributionInstance.time",
    parentDataPath:
      "root.citedArtifact.contributorship.entry.contributionInstance[0]",
    basePath: "root.time",
    baseId:
      "Citation.citedArtifact.contributorship.entry.contributionInstance.time",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.correspondingContact",
      path: "Citation.citedArtifact.contributorship.entry.correspondingContact",
      short:
        "Indication of which contributor is the corresponding contributor for the role",
      definition:
        "Indication of which contributor is the corresponding contributor for the role.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.correspondingContact",
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
    dataPath: "root.citedArtifact.contributorship.entry.correspondingContact",
    parentDataPath: "root.citedArtifact.contributorship.entry[0]",
    basePath: "root.correspondingContact",
    baseId: "Citation.citedArtifact.contributorship.entry.correspondingContact",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.entry.listOrder",
      path: "Citation.citedArtifact.contributorship.entry.listOrder",
      short: "Used to code order of authors",
      definition: "Used to code order of authors.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.entry.listOrder",
        min: 0,
        max: "1",
      },
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
    },
    dataPath: "root.citedArtifact.contributorship.entry.listOrder",
    parentDataPath: "root.citedArtifact.contributorship.entry[0]",
    basePath: "root.listOrder",
    baseId: "Citation.citedArtifact.contributorship.entry.listOrder",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.summary",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
          valueString: "ContributorshipSummary",
        },
      ],
      path: "Citation.citedArtifact.contributorship.summary",
      short:
        "Used to record a display of the author/contributor list without separate coding for each list member",
      definition:
        "Used to record a display of the author/contributor list without separate coding for each list member.",
      min: 0,
      max: "*",
      base: {
        path: "Citation.citedArtifact.contributorship.summary",
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
    },
    dataPath: "root.citedArtifact.contributorship.summary[0]",
    parentDataPath: "root.citedArtifact.contributorship",
    basePath: "root.summary",
    baseId: "Citation.citedArtifact.contributorship.summary",
    isPrimitive: false,
    childPaths: [
      "root.citedArtifact.contributorship.summary.type",
      "root.citedArtifact.contributorship.summary.style",
      "root.citedArtifact.contributorship.summary.source",
      "root.citedArtifact.contributorship.summary.value",
    ],
    value: "",
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.summary.type",
      path: "Citation.citedArtifact.contributorship.summary.type",
      short: "Either authorList or contributorshipStatement",
      definition:
        "Used most commonly to express an author list or a contributorship statement.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.summary.type",
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
            valueString: "ContributorSummaryType",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/contributor-summary-type",
      },
    },
    dataPath: "root.citedArtifact.contributorship.summary.type",
    parentDataPath: "root.citedArtifact.contributorship.summary[0]",
    basePath: "root.type",
    baseId: "Citation.citedArtifact.contributorship.summary.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-type",
        code: "author-string",
        display: "Author string",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-type",
        code: "contributorship-list",
        display: "Contributorship list",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-type",
        code: "contributorship-statement",
        display: "Contributorship statement",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-type",
        code: "acknowledgement-list",
        display: "Acknowledgment list",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-type",
        code: "acknowledgment-statement",
        display: "Acknowledgment statement",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-type",
        code: "funding-statement",
        display: "Funding statement",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-type",
        code: "competing-interests-statement",
        display: "Competing interests statement",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.summary.style",
      path: "Citation.citedArtifact.contributorship.summary.style",
      short: "The format for the display string",
      definition: "The format for the display string.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.summary.style",
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
            valueString: "ContributorSummaryStyle",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/contributor-summary-style",
      },
    },
    dataPath: "root.citedArtifact.contributorship.summary.style",
    parentDataPath: "root.citedArtifact.contributorship.summary[0]",
    basePath: "root.style",
    baseId: "Citation.citedArtifact.contributorship.summary.style",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "a1full",
        display: "First author (full name) et al",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "a1init",
        display: "First author (last name first initials) et al",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "a3full",
        display: "First 3 authors (full name) et al",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "a3init",
        display: "First 3 authors (last name first initials) et al",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "a6full",
        display: "First 6 authors (full name) et al",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "a6init",
        display: "First 6 authors (last name first initials) et al",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "aallfull",
        display: "All authors (full name)",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "aallfullwithand",
        display: "All authors (full name) with and before last author",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "aallfullwithampersand",
        display: "All authors (full name) with an ampersand before last author",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "aallinit",
        display: "All authors (last name first initials)",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "aallinitwithand",
        display:
          "All authors (last name first initials) with and before last author",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "aallinitwithampersand",
        display:
          "All authors (last name first initials) with an ampersand before last author",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "contr-full-by-person",
        display: "Contributorship statement listed by person with full names",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "contr-init-by-person",
        display: "Contributorship statement listed by person with initials",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "contr-full-by-contr",
        display:
          "Contributorship statement listed by contribution with full names",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-style",
        code: "contr-init-by-contr",
        display:
          "Contributorship statement listed by contribution with initials",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.summary.source",
      path: "Citation.citedArtifact.contributorship.summary.source",
      short:
        "Used to code the producer or rule for creating the display string",
      definition:
        "Used to code the producer or rule for creating the display string.",
      min: 0,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.summary.source",
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
            valueString: "ContributorSummarySource",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/contributor-summary-source",
      },
    },
    dataPath: "root.citedArtifact.contributorship.summary.source",
    parentDataPath: "root.citedArtifact.contributorship.summary[0]",
    basePath: "root.source",
    baseId: "Citation.citedArtifact.contributorship.summary.source",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-source",
        code: "publisher-data",
        display: "Publisher provided",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-source",
        code: "article-copy",
        display: "Copied from article",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-source",
        code: "citation-manager",
        display: "Reported by citation manager",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contributor-summary-source",
        code: "custom",
        display: "custom format",
      },
    ],
  },
  {
    element: {
      id: "Citation.citedArtifact.contributorship.summary.value",
      path: "Citation.citedArtifact.contributorship.summary.value",
      short:
        "The display string for the author list, contributor list, or contributorship statement",
      definition:
        "The display string for the author list, contributor list, or contributorship statement.",
      min: 1,
      max: "1",
      base: {
        path: "Citation.citedArtifact.contributorship.summary.value",
        min: 1,
        max: "1",
      },
      type: [{ code: "markdown" }],
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
    dataPath: "root.citedArtifact.contributorship.summary.value",
    parentDataPath: "root.citedArtifact.contributorship.summary[0]",
    basePath: "root.value",
    baseId: "Citation.citedArtifact.contributorship.summary.value",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Citation",
      path: "Citation",
      short:
        "A description of identification, location, or contributorship of a publication (article or artifact)",
      definition:
        "The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.",
      min: 0,
      max: "*",
      base: { path: "Citation", min: 0, max: "*" },
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
          source: "http://hl7.org/fhir/StructureDefinition/Citation",
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
    baseId: "Citation",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
