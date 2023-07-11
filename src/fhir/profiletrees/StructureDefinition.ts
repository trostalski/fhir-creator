const data = [
  {
    element: {
      id: "StructureDefinition.meta",
      path: "StructureDefinition.meta",
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
    baseId: "StructureDefinition.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.implicitRules",
      path: "StructureDefinition.implicitRules",
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
    baseId: "StructureDefinition.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.language",
      path: "StructureDefinition.language",
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
    baseId: "StructureDefinition.language",
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
      id: "StructureDefinition.contained",
      path: "StructureDefinition.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
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
    baseId: "StructureDefinition.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.url",
      path: "StructureDefinition.url",
      short:
        "Canonical identifier for this structure definition, represented as a URI (globally unique)",
      definition:
        "An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this structure definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the structure definition is stored on different servers.",
      comment:
        "Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.\n\nThe determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). \n\nIn some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.",
      requirements:
        "Allows the structure definition to be referenced by a single globally unique identifier.",
      alias: ["url", "authoritative-url", "destination", "identity"],
      min: 1,
      max: "1",
      base: { path: "StructureDefinition.url", min: 1, max: "1" },
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
    baseId: "StructureDefinition.url",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.version",
      path: "StructureDefinition.version",
      short: "Business version of the structure definition",
      definition:
        "The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.",
      comment:
        "There may be different structure definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure definition with the format [url]|[version].",
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.version", min: 0, max: "1" },
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
        { identity: "iso11179", map: "Version" },
      ],
    },
    dataPath: "root.version",
    parentDataPath: "root",
    basePath: "root.version",
    baseId: "StructureDefinition.version",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.name",
      path: "StructureDefinition.name",
      short: "Name for this structure definition (computer friendly)",
      definition:
        "A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.",
      comment:
        "The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.Some Examples: \n\n* O2SatObservation\n* PresentationReport\n* Immunization2\n* AcmeAdmissionRecordOld.",
      requirements: "Support human navigation and code generation.",
      min: 1,
      max: "1",
      base: { path: "StructureDefinition.name", min: 1, max: "1" },
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
    },
    dataPath: "root.name",
    parentDataPath: "root",
    basePath: "root.name",
    baseId: "StructureDefinition.name",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.title",
      path: "StructureDefinition.title",
      short: "Name for this structure definition (human friendly)",
      definition:
        "A short, descriptive, user-friendly title for the structure definition.",
      comment:
        "This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.Applications don't have to use this name but can always fall back to it. The title also corresponds to the label for the root element.",
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.title", min: 0, max: "1" },
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
    baseId: "StructureDefinition.title",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.status",
      path: "StructureDefinition.status",
      short: "draft | active | retired | unknown",
      definition:
        "The status of this structure definition. Enables tracking the life-cycle of the content.",
      comment:
        "Allows filtering of structure definitions that are appropriate for use versus not.",
      min: 1,
      max: "1",
      base: { path: "StructureDefinition.status", min: 1, max: "1" },
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
        { identity: "iso11179", map: "Registration status" },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "StructureDefinition.status",
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
      id: "StructureDefinition.experimental",
      path: "StructureDefinition.experimental",
      short: "For testing purposes, not real usage",
      definition:
        "A Boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.",
      comment:
        "Allows filtering of structure definitions that are appropriate for use versus not.",
      requirements:
        "Enables experimental content to be developed following the same lifecycle that would be used for a production-level structure definition.",
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.experimental", min: 0, max: "1" },
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
        { identity: "iso11179", map: "Registration status" },
      ],
    },
    dataPath: "root.experimental",
    parentDataPath: "root",
    basePath: "root.experimental",
    baseId: "StructureDefinition.experimental",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.date",
      path: "StructureDefinition.date",
      short: "Date last changed",
      definition:
        "The date  (and optionally time) when the structure definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.",
      comment:
        "Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.",
      alias: ["Revision Date"],
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.date", min: 0, max: "1" },
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
    baseId: "StructureDefinition.date",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.publisher",
      path: "StructureDefinition.publisher",
      short: "Name of the publisher (organization or individual)",
      definition:
        "The name of the organization or individual that published the structure definition.",
      comment:
        "Usually an organization but may be an individual. The publisher (or steward) of the structure definition is the organization or individual primarily responsible for the maintenance and upkeep of the structure definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure definition. This item SHOULD be populated unless the information is available from context.",
      requirements:
        'Helps establish the "authority/credibility" of the structure definition.  May also allow for contact.',
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.publisher", min: 0, max: "1" },
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
        { identity: "iso11179", map: "Registration Authority" },
      ],
    },
    dataPath: "root.publisher",
    parentDataPath: "root",
    basePath: "root.publisher",
    baseId: "StructureDefinition.publisher",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.description",
      path: "StructureDefinition.description",
      short: "Natural language description of the structure definition",
      definition:
        "A free text natural language description of the structure definition from a consumer's perspective.",
      comment:
        "This description can be used to capture details such as why the structure definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure definition is presumed to be the predominant language in the place the structure definition was created).",
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.description", min: 0, max: "1" },
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
    baseId: "StructureDefinition.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.jurisdiction",
      path: "StructureDefinition.jurisdiction",
      short: "Intended jurisdiction for structure definition (if applicable)",
      definition:
        "A legal or geographic region in which the structure definition is intended to be used.",
      comment:
        "It may be possible for the structure definition to be used in jurisdictions other than those for which it was originally designed or intended.",
      min: 0,
      max: "*",
      base: { path: "StructureDefinition.jurisdiction", min: 0, max: "*" },
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
        description:
          "Countries and regions within which this artifact is targeted for use.",
        valueSet: "http://hl7.org/fhir/ValueSet/jurisdiction",
      },
      mapping: [{ identity: "workflow", map: "Definition.jurisdiction" }],
    },
    dataPath: "root.jurisdiction[0]",
    parentDataPath: "root",
    basePath: "root.jurisdiction",
    baseId: "StructureDefinition.jurisdiction",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.purpose",
      path: "StructureDefinition.purpose",
      short: "Why this structure definition is defined",
      definition:
        "Explanation of why this structure definition is needed and why it has been designed as it has.",
      comment:
        "This element does not describe the usage of the structure definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure definition.",
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.purpose", min: 0, max: "1" },
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
    baseId: "StructureDefinition.purpose",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.copyright",
      path: "StructureDefinition.copyright",
      short: "Use and/or publishing restrictions",
      definition:
        "A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.",
      requirements:
        "Consumers must be able to determine any legal restrictions on the use of the structure definition and/or its content.",
      alias: ["License", "Restrictions"],
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.copyright", min: 0, max: "1" },
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
        { identity: "workflow", map: "Definition.copyright" },
        { identity: "objimpl", map: "no-gen-base" },
      ],
    },
    dataPath: "root.copyright",
    parentDataPath: "root",
    basePath: "root.copyright",
    baseId: "StructureDefinition.copyright",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.keyword",
      path: "StructureDefinition.keyword",
      short: "Assist with indexing and finding",
      definition:
        "A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates nby describing the use of this structure definition, or the content it describes.",
      requirements: "Assist in searching for appropriate StructureDefinitions.",
      min: 0,
      max: "*",
      base: { path: "StructureDefinition.keyword", min: 0, max: "*" },
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
            valueString: "StructureDefinitionKeyword",
          },
        ],
        strength: "extensible",
        description:
          "Codes for the meaning of the defined structure (SNOMED CT and LOINC codes, as an example).",
        valueSet: "http://hl7.org/fhir/ValueSet/definition-use",
      },
      mapping: [{ identity: "iso11179", map: "keywords" }],
    },
    dataPath: "root.keyword[0]",
    parentDataPath: "root",
    basePath: "root.keyword",
    baseId: "StructureDefinition.keyword",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/definition-use",
        code: "fhir-structure",
        display: "FHIR Structure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/definition-use",
        code: "custom-resource",
        display: "Custom Resource",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/definition-use",
        code: "dam",
        display: "Domain Analysis Model",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/definition-use",
        code: "wire-format",
        display: "Wire Format",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/definition-use",
        code: "archetype",
        display: "Domain Analysis Model",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/definition-use",
        code: "template",
        display: "Template",
      },
    ],
  },
  {
    element: {
      id: "StructureDefinition.fhirVersion",
      path: "StructureDefinition.fhirVersion",
      short: "FHIR Version this StructureDefinition targets",
      definition:
        "The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.3.0 for this version.",
      comment:
        "A StructureDefinition does not need to specify the target it applies to as StructureDefinitions will often be valid across multiple versions of FHIR. FHIR tooling can determine whether a StructureDefinition is consistent with a particular StructureDefinition if desired.",
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.fhirVersion", min: 0, max: "1" },
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
            valueString: "FHIRVersion",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "required",
        description: "All published FHIR Versions.",
        valueSet: "http://hl7.org/fhir/ValueSet/FHIR-version|4.3.0",
      },
    },
    dataPath: "root.fhirVersion",
    parentDataPath: "root",
    basePath: "root.fhirVersion",
    baseId: "StructureDefinition.fhirVersion",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "0.01",
        display: "0.01",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "0.05",
        display: "0.05",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "0.06",
        display: "0.06",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "0.11",
        display: "0.11",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "0.0.80",
        display: "0.0.80",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "0.0.81",
        display: "0.0.81",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "0.0.82",
        display: "0.0.82",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "0.4.0",
        display: "0.4.0",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "0.5.0",
        display: "0.5.0",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "1.0.0",
        display: "1.0.0",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "1.0.1",
        display: "1.0.1",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "1.0.2",
        display: "1.0.2",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "1.1.0",
        display: "1.1.0",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "1.4.0",
        display: "1.4.0",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "1.6.0",
        display: "1.6.0",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "1.8.0",
        display: "1.8.0",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "3.0.0",
        display: "3.0.0",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "3.0.1",
        display: "3.0.1",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "3.0.2",
        display: "3.0.2",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "3.3.0",
        display: "3.3.0",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "3.5.0",
        display: "3.5.0",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "4.0.0",
        display: "4.0.0",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "4.0.1",
        display: "4.0.1",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "4.1.0",
        display: "4.1.0",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "4.3.0-cibuild",
        display: "4.3.0-cibuild",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "4.3.0-snapshot1",
        display: "4.3.0-snapshot1",
      },
      {
        system: "http://hl7.org/fhir/FHIR-version",
        code: "4.3.0",
        display: "4.3.0",
      },
    ],
  },
  {
    element: {
      id: "StructureDefinition.mapping",
      path: "StructureDefinition.mapping",
      short: "External specification that the content is mapped to",
      definition: "An external specification that the content is mapped to.",
      min: 0,
      max: "*",
      base: { path: "StructureDefinition.mapping", min: 0, max: "*" },
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
          key: "sdf-2",
          severity: "error",
          human: "Must have at least a name or a uri (or both)",
          expression: "name.exists() or uri.exists()",
          xpath: "exists(f:uri) or exists(f:name)",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
    },
    dataPath: "root.mapping[0]",
    parentDataPath: "root",
    basePath: "root.mapping",
    baseId: "StructureDefinition.mapping",
    isPrimitive: false,
    childPaths: [
      "root.mapping.identity",
      "root.mapping.uri",
      "root.mapping.name",
      "root.mapping.comment",
    ],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.mapping.identity",
      path: "StructureDefinition.mapping.identity",
      short: "Internal id when this mapping is used",
      definition:
        "An Internal id that is used to identify this mapping set when specific mappings are made.",
      comment:
        "The specification is described once, with general comments, and then specific mappings are made that reference this declaration.",
      min: 1,
      max: "1",
      base: { path: "StructureDefinition.mapping.identity", min: 1, max: "1" },
      type: [{ code: "id" }],
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
    dataPath: "root.mapping.identity",
    parentDataPath: "root.mapping[0]",
    basePath: "root.identity",
    baseId: "StructureDefinition.mapping.identity",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.mapping.uri",
      path: "StructureDefinition.mapping.uri",
      short: "Identifies what this mapping refers to",
      definition:
        "An absolute URI that identifies the specification that this mapping is expressed to.",
      comment:
        "A formal identity for the specification being mapped to helps with identifying maps consistently.",
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.mapping.uri", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["sdf-2"],
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
    dataPath: "root.mapping.uri",
    parentDataPath: "root.mapping[0]",
    basePath: "root.uri",
    baseId: "StructureDefinition.mapping.uri",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.mapping.name",
      path: "StructureDefinition.mapping.name",
      short: "Names what this mapping refers to",
      definition: "A name for the specification that is being mapped to.",
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.mapping.name", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["sdf-2"],
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
    dataPath: "root.mapping.name",
    parentDataPath: "root.mapping[0]",
    basePath: "root.name",
    baseId: "StructureDefinition.mapping.name",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.mapping.comment",
      path: "StructureDefinition.mapping.comment",
      short: "Versions, Issues, Scope limitations etc.",
      definition:
        "Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.",
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.mapping.comment", min: 0, max: "1" },
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
    dataPath: "root.mapping.comment",
    parentDataPath: "root.mapping[0]",
    basePath: "root.comment",
    baseId: "StructureDefinition.mapping.comment",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.kind",
      path: "StructureDefinition.kind",
      short: "primitive-type | complex-type | resource | logical",
      definition:
        "Defines the kind of structure that this definition is describing.",
      min: 1,
      max: "1",
      base: { path: "StructureDefinition.kind", min: 1, max: "1" },
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
            valueString: "StructureDefinitionKind",
          },
        ],
        strength: "required",
        description:
          "Defines the type of structure that a definition is describing.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/structure-definition-kind|4.3.0",
      },
    },
    dataPath: "root.kind",
    parentDataPath: "root",
    basePath: "root.kind",
    baseId: "StructureDefinition.kind",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/structure-definition-kind",
        code: "primitive-type",
        display: "Primitive Data Type",
      },
      {
        system: "http://hl7.org/fhir/structure-definition-kind",
        code: "complex-type",
        display: "Complex Data Type",
      },
      {
        system: "http://hl7.org/fhir/structure-definition-kind",
        code: "resource",
        display: "Resource",
      },
      {
        system: "http://hl7.org/fhir/structure-definition-kind",
        code: "logical",
        display: "Logical",
      },
    ],
  },
  {
    element: {
      id: "StructureDefinition.abstract",
      path: "StructureDefinition.abstract",
      short: "Whether the structure is abstract",
      definition:
        "Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems.",
      comment:
        'Abstract Resources cannot be instantiated - a concrete sub-type must be used. Abstract datatypes and extensions cannot be used in an instance. For logical models, the exact implication of "abstract" will rest with the author, depending how the logical model is used. Flagging a constraint structure as abstract conveys design intent but makes no difference to how the structure definition is handled. Note that inline declared elements that are given the type "Element" in the StructureDefinition, but have children described, are anonymous concrete types that specialize Element.',
      min: 1,
      max: "1",
      base: { path: "StructureDefinition.abstract", min: 1, max: "1" },
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
    },
    dataPath: "root.abstract",
    parentDataPath: "root",
    basePath: "root.abstract",
    baseId: "StructureDefinition.abstract",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.context",
      path: "StructureDefinition.context",
      short: "If an extension, where it can be used in instances",
      definition:
        "Identifies the types of resource or data type elements to which the extension can be applied.",
      min: 0,
      max: "*",
      base: { path: "StructureDefinition.context", min: 0, max: "*" },
      type: [{ code: "BackboneElement" }],
      condition: ["sdf-5"],
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
    dataPath: "root.context[0]",
    parentDataPath: "root",
    basePath: "root.context",
    baseId: "StructureDefinition.context",
    isPrimitive: false,
    childPaths: ["root.context.type", "root.context.expression"],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.context.type",
      path: "StructureDefinition.context.type",
      short: "fhirpath | element | extension",
      definition:
        "Defines how to interpret the expression that defines what the context of the extension is.",
      min: 1,
      max: "1",
      base: { path: "StructureDefinition.context.type", min: 1, max: "1" },
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
            valueString: "ExtensionContextType",
          },
        ],
        strength: "required",
        description: "How an extension context is interpreted.",
        valueSet: "http://hl7.org/fhir/ValueSet/extension-context-type|4.3.0",
      },
    },
    dataPath: "root.context.type",
    parentDataPath: "root.context[0]",
    basePath: "root.type",
    baseId: "StructureDefinition.context.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/extension-context-type",
        code: "fhirpath",
        display: "FHIRPath",
      },
      {
        system: "http://hl7.org/fhir/extension-context-type",
        code: "element",
        display: "Element ID",
      },
      {
        system: "http://hl7.org/fhir/extension-context-type",
        code: "extension",
        display: "Extension URL",
      },
    ],
  },
  {
    element: {
      id: "StructureDefinition.context.expression",
      path: "StructureDefinition.context.expression",
      short: "Where the extension can be used in instances",
      definition:
        "An expression that defines where an extension can be used in resources.",
      min: 1,
      max: "1",
      base: {
        path: "StructureDefinition.context.expression",
        min: 1,
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
      isSummary: true,
    },
    dataPath: "root.context.expression",
    parentDataPath: "root.context[0]",
    basePath: "root.expression",
    baseId: "StructureDefinition.context.expression",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.contextInvariant",
      path: "StructureDefinition.contextInvariant",
      short: "FHIRPath invariants - when the extension can be used",
      definition:
        "A set of rules as FHIRPath Invariants about when the extension can be used (e.g. co-occurrence variants for the extension). All the rules must be true.",
      comment:
        "The rules are only evaluated when the extension is present. When evaluating the invariant, the FHIRPath focus is the element that holds the extension, and %extension refers to the extension itself.",
      min: 0,
      max: "*",
      base: { path: "StructureDefinition.contextInvariant", min: 0, max: "*" },
      type: [{ code: "string" }],
      condition: ["sdf-18"],
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
    dataPath: "root.contextInvariant[0]",
    parentDataPath: "root",
    basePath: "root.contextInvariant",
    baseId: "StructureDefinition.contextInvariant",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.type",
      path: "StructureDefinition.type",
      short: "Type defined or constrained by this structure",
      definition:
        "The type this structure describes. If the derivation kind is 'specialization' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).  References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. \"string\" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.",
      comment:
        "Note that in the case of constraints, the type could be determined by chasing through the baseDefinition references until a concrete structure (derivation = specialization) is reached, or by looking at the path of the first element in the snapshot - if present - but providing the type directly makes for simpler tooling and indexing. \n\nThe type must match the elements defined in the differential and the snapshot. For all FHIR defined types, the path name of the element will start with the type name. For logical models, where the type is a URL, the type name SHOULD start with the tail of the type URL where required.",
      min: 1,
      max: "1",
      base: { path: "StructureDefinition.type", min: 1, max: "1" },
      type: [{ code: "uri" }],
      condition: ["sdf-11"],
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
            valueString: "FHIRDefinedTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        description:
          "Either a resource or a data type, including logical model types.",
        valueSet: "http://hl7.org/fhir/ValueSet/defined-types",
      },
    },
    dataPath: "root.type",
    parentDataPath: "root",
    basePath: "root.type",
    baseId: "StructureDefinition.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Address",
        display: "Address",
      },
      { system: "http://hl7.org/fhir/data-types", code: "Age", display: "Age" },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Annotation",
        display: "Annotation",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Attachment",
        display: "Attachment",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "BackboneElement",
        display: "BackboneElement",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "CodeableConcept",
        display: "CodeableConcept",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "CodeableReference",
        display: "CodeableReference",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Coding",
        display: "Coding",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "ContactDetail",
        display: "ContactDetail",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "ContactPoint",
        display: "ContactPoint",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Contributor",
        display: "Contributor",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Count",
        display: "Count",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "DataRequirement",
        display: "DataRequirement",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Distance",
        display: "Distance",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Dosage",
        display: "Dosage",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Duration",
        display: "Duration",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Element",
        display: "Element",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "ElementDefinition",
        display: "ElementDefinition",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Expression",
        display: "Expression",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Extension",
        display: "Extension",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "HumanName",
        display: "HumanName",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Identifier",
        display: "Identifier",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "MarketingStatus",
        display: "MarketingStatus",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Meta",
        display: "Meta",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Money",
        display: "Money",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "MoneyQuantity",
        display: "MoneyQuantity",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Narrative",
        display: "Narrative",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "ParameterDefinition",
        display: "ParameterDefinition",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Period",
        display: "Period",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Population",
        display: "Population",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "ProdCharacteristic",
        display: "ProdCharacteristic",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "ProductShelfLife",
        display: "ProductShelfLife",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Quantity",
        display: "Quantity",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Range",
        display: "Range",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Ratio",
        display: "Ratio",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "RatioRange",
        display: "RatioRange",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Reference",
        display: "Reference",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "RelatedArtifact",
        display: "RelatedArtifact",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "SampledData",
        display: "SampledData",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Signature",
        display: "Signature",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "SimpleQuantity",
        display: "SimpleQuantity",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "Timing",
        display: "Timing",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "TriggerDefinition",
        display: "TriggerDefinition",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "UsageContext",
        display: "UsageContext",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "base64Binary",
        display: "base64Binary",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "boolean",
        display: "boolean",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "canonical",
        display: "canonical",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "code",
        display: "code",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "date",
        display: "date",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "dateTime",
        display: "dateTime",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "decimal",
        display: "decimal",
      },
      { system: "http://hl7.org/fhir/data-types", code: "id", display: "id" },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "instant",
        display: "instant",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "integer",
        display: "integer",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "markdown",
        display: "markdown",
      },
      { system: "http://hl7.org/fhir/data-types", code: "oid", display: "oid" },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "positiveInt",
        display: "positiveInt",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "string",
        display: "string",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "time",
        display: "time",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "unsignedInt",
        display: "unsignedInt",
      },
      { system: "http://hl7.org/fhir/data-types", code: "uri", display: "uri" },
      { system: "http://hl7.org/fhir/data-types", code: "url", display: "url" },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "uuid",
        display: "uuid",
      },
      {
        system: "http://hl7.org/fhir/data-types",
        code: "xhtml",
        display: "XHTML",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Resource",
        display: "Resource",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Binary",
        display: "Binary",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Bundle",
        display: "Bundle",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "DomainResource",
        display: "DomainResource",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Account",
        display: "Account",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ActivityDefinition",
        display: "ActivityDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "AdministrableProductDefinition",
        display: "AdministrableProductDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "AdverseEvent",
        display: "AdverseEvent",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "AllergyIntolerance",
        display: "AllergyIntolerance",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Appointment",
        display: "Appointment",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "AppointmentResponse",
        display: "AppointmentResponse",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "AuditEvent",
        display: "AuditEvent",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Basic",
        display: "Basic",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "BiologicallyDerivedProduct",
        display: "BiologicallyDerivedProduct",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "BodyStructure",
        display: "BodyStructure",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "CapabilityStatement",
        display: "CapabilityStatement",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "CarePlan",
        display: "CarePlan",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "CareTeam",
        display: "CareTeam",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "CatalogEntry",
        display: "CatalogEntry",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ChargeItem",
        display: "ChargeItem",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ChargeItemDefinition",
        display: "ChargeItemDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Citation",
        display: "Citation",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Claim",
        display: "Claim",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ClaimResponse",
        display: "ClaimResponse",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ClinicalImpression",
        display: "ClinicalImpression",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ClinicalUseDefinition",
        display: "ClinicalUseDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "CodeSystem",
        display: "CodeSystem",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Communication",
        display: "Communication",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "CommunicationRequest",
        display: "CommunicationRequest",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "CompartmentDefinition",
        display: "CompartmentDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Composition",
        display: "Composition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ConceptMap",
        display: "ConceptMap",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Condition",
        display: "Condition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Consent",
        display: "Consent",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Contract",
        display: "Contract",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Coverage",
        display: "Coverage",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "CoverageEligibilityRequest",
        display: "CoverageEligibilityRequest",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "CoverageEligibilityResponse",
        display: "CoverageEligibilityResponse",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "DetectedIssue",
        display: "DetectedIssue",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Device",
        display: "Device",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "DeviceDefinition",
        display: "DeviceDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "DeviceMetric",
        display: "DeviceMetric",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "DeviceRequest",
        display: "DeviceRequest",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "DeviceUseStatement",
        display: "DeviceUseStatement",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "DiagnosticReport",
        display: "DiagnosticReport",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "DocumentManifest",
        display: "DocumentManifest",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "DocumentReference",
        display: "DocumentReference",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Encounter",
        display: "Encounter",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Endpoint",
        display: "Endpoint",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "EnrollmentRequest",
        display: "EnrollmentRequest",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "EnrollmentResponse",
        display: "EnrollmentResponse",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "EpisodeOfCare",
        display: "EpisodeOfCare",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "EventDefinition",
        display: "EventDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Evidence",
        display: "Evidence",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "EvidenceReport",
        display: "EvidenceReport",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "EvidenceVariable",
        display: "EvidenceVariable",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ExampleScenario",
        display: "ExampleScenario",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ExplanationOfBenefit",
        display: "ExplanationOfBenefit",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "FamilyMemberHistory",
        display: "FamilyMemberHistory",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Flag",
        display: "Flag",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Goal",
        display: "Goal",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "GraphDefinition",
        display: "GraphDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Group",
        display: "Group",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "GuidanceResponse",
        display: "GuidanceResponse",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "HealthcareService",
        display: "HealthcareService",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ImagingStudy",
        display: "ImagingStudy",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Immunization",
        display: "Immunization",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ImmunizationEvaluation",
        display: "ImmunizationEvaluation",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ImmunizationRecommendation",
        display: "ImmunizationRecommendation",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ImplementationGuide",
        display: "ImplementationGuide",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Ingredient",
        display: "Ingredient",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "InsurancePlan",
        display: "InsurancePlan",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Invoice",
        display: "Invoice",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Library",
        display: "Library",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Linkage",
        display: "Linkage",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "List",
        display: "List",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Location",
        display: "Location",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ManufacturedItemDefinition",
        display: "ManufacturedItemDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Measure",
        display: "Measure",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "MeasureReport",
        display: "MeasureReport",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Media",
        display: "Media",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Medication",
        display: "Medication",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "MedicationAdministration",
        display: "MedicationAdministration",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "MedicationDispense",
        display: "MedicationDispense",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "MedicationKnowledge",
        display: "MedicationKnowledge",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "MedicationRequest",
        display: "MedicationRequest",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "MedicationStatement",
        display: "MedicationStatement",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "MedicinalProductDefinition",
        display: "MedicinalProductDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "MessageDefinition",
        display: "MessageDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "MessageHeader",
        display: "MessageHeader",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "MolecularSequence",
        display: "MolecularSequence",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "NamingSystem",
        display: "NamingSystem",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "NutritionOrder",
        display: "NutritionOrder",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "NutritionProduct",
        display: "NutritionProduct",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Observation",
        display: "Observation",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ObservationDefinition",
        display: "ObservationDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "OperationDefinition",
        display: "OperationDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "OperationOutcome",
        display: "OperationOutcome",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Organization",
        display: "Organization",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "OrganizationAffiliation",
        display: "OrganizationAffiliation",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "PackagedProductDefinition",
        display: "PackagedProductDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Patient",
        display: "Patient",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "PaymentNotice",
        display: "PaymentNotice",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "PaymentReconciliation",
        display: "PaymentReconciliation",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Person",
        display: "Person",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "PlanDefinition",
        display: "PlanDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Practitioner",
        display: "Practitioner",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "PractitionerRole",
        display: "PractitionerRole",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Procedure",
        display: "Procedure",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Provenance",
        display: "Provenance",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Questionnaire",
        display: "Questionnaire",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "QuestionnaireResponse",
        display: "QuestionnaireResponse",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "RegulatedAuthorization",
        display: "RegulatedAuthorization",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "RelatedPerson",
        display: "RelatedPerson",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "RequestGroup",
        display: "RequestGroup",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ResearchDefinition",
        display: "ResearchDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ResearchElementDefinition",
        display: "ResearchElementDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ResearchStudy",
        display: "ResearchStudy",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ResearchSubject",
        display: "ResearchSubject",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "RiskAssessment",
        display: "RiskAssessment",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Schedule",
        display: "Schedule",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "SearchParameter",
        display: "SearchParameter",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ServiceRequest",
        display: "ServiceRequest",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Slot",
        display: "Slot",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Specimen",
        display: "Specimen",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "SpecimenDefinition",
        display: "SpecimenDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "StructureDefinition",
        display: "StructureDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "StructureMap",
        display: "StructureMap",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Subscription",
        display: "Subscription",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "SubscriptionStatus",
        display: "SubscriptionStatus",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "SubscriptionTopic",
        display: "SubscriptionTopic",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Substance",
        display: "Substance",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "SubstanceDefinition",
        display: "SubstanceDefinition",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "SupplyDelivery",
        display: "SupplyDelivery",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "SupplyRequest",
        display: "SupplyRequest",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Task",
        display: "Task",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "TerminologyCapabilities",
        display: "TerminologyCapabilities",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "TestReport",
        display: "TestReport",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "TestScript",
        display: "TestScript",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "ValueSet",
        display: "ValueSet",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "VerificationResult",
        display: "VerificationResult",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "VisionPrescription",
        display: "VisionPrescription",
      },
      {
        system: "http://hl7.org/fhir/resource-types",
        code: "Parameters",
        display: "Parameters",
      },
    ],
  },
  {
    element: {
      id: "StructureDefinition.baseDefinition",
      path: "StructureDefinition.baseDefinition",
      short: "Definition that this type is constrained/specialized from",
      definition:
        "An absolute URI that is the base structure from which this type is derived, either by specialization or constraint.",
      comment:
        'If differential constraints are specified in this structure, they are applied to the base in a "differential" fashion. If there is no base, then the differential constraints cannot be provided (snapshot only). Differential structures are useful for the editing perspective, and snapshot structures are suitable for operational use. The FHIR Project provides a number of tools/services to populate snapshots from differential constraints. Logical Models have a base of "Element" or another logical model.',
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.baseDefinition", min: 0, max: "1" },
      type: [
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-hierarchy",
              valueBoolean: true,
            },
          ],
          code: "canonical",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
          ],
        },
      ],
      condition: ["sdf-4"],
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
    dataPath: "root.baseDefinition",
    parentDataPath: "root",
    basePath: "root.baseDefinition",
    baseId: "StructureDefinition.baseDefinition",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.derivation",
      path: "StructureDefinition.derivation",
      short: "specialization | constraint - How relates to base definition",
      definition: "How the type relates to the baseDefinition.",
      comment:
        "If the definition is a specialization, then it adds new elements in the differential, and the snapshot includes the inherited elements.  If the definition is a constraint, then it cannot define new elements, it can only make new rules about existing content (see [Profiling Resources](profiling.html#resources)).",
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.derivation", min: 0, max: "1" },
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
            valueString: "TypeDerivationRule",
          },
        ],
        strength: "required",
        description: "How a type relates to its baseDefinition.",
        valueSet: "http://hl7.org/fhir/ValueSet/type-derivation-rule|4.3.0",
      },
    },
    dataPath: "root.derivation",
    parentDataPath: "root",
    basePath: "root.derivation",
    baseId: "StructureDefinition.derivation",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/type-derivation-rule",
        code: "specialization",
        display: "Specialization",
      },
      {
        system: "http://hl7.org/fhir/type-derivation-rule",
        code: "constraint",
        display: "Constraint",
      },
    ],
  },
  {
    element: {
      id: "StructureDefinition.snapshot",
      path: "StructureDefinition.snapshot",
      short: "Snapshot view of the structure",
      definition:
        "A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition.",
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.snapshot", min: 0, max: "1" },
      type: [{ code: "BackboneElement" }],
      condition: ["sdf-6"],
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
          key: "sdf-3",
          severity: "error",
          human:
            "Each element definition in a snapshot must have a formal definition and cardinalities",
          expression:
            "element.all(definition.exists() and min.exists() and max.exists())",
          xpath:
            "count(f:element) = count(f:element[exists(f:definition) and exists(f:min) and exists(f:max)])",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-8",
          severity: "error",
          human:
            "All snapshot elements must start with the StructureDefinition's specified type for non-logical models, or with the same type name for logical models",
          expression:
            "(%resource.kind = 'logical' or element.first().path = %resource.type) and element.tail().all(path.startsWith(%resource.snapshot.element.first().path&'.'))",
          xpath:
            "f:element[1]/f:path/@value=parent::f:StructureDefinition/f:type/@value and count(f:element[position()!=1])=count(f:element[position()!=1][starts-with(f:path/@value, concat(ancestor::f:StructureDefinition/f:type/@value, '.'))])",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-24",
          severity: "error",
          human:
            "For CodeableReference elements, target profiles must be listed on the CodeableReference, not the CodeableReference.reference",
          expression:
            "element.where(type.code='Reference' and id.endsWith('.reference') and type.targetProfile.exists() and id.substring(0,$this.length()-10) in %context.element.where(type.code='CodeableReference').id).exists().not()",
          xpath:
            "not(exists(for $cr in f:element[f:type/f:code/@value='CodeableReference'] return $cr/following-sibling::f:element[@id=concat($cr/@id, '.reference') and f:type/f:code/@value='Reference' and exists(f:type/f:targetProfile)]))",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-25",
          severity: "error",
          human:
            "For CodeableReference elements, bindings must be listed on the CodeableReference, not the CodeableReference.concept",
          expression:
            "element.where(type.code='CodeableConcept' and id.endsWith('.concept') and binding.exists() and id.substring(0,$this.length()-8) in %context.element.where(type.code='CodeableReference').id).exists().not()",
          xpath:
            "not(exists(for $cr in f:element[f:type/f:code/@value='CodeableReference'] return $cr/following-sibling::f:element[@id=concat($cr/@id, '.concept') and f:type/f:code/@value='CodeableConcept' and exists(f:binding)]))",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-8b",
          severity: "error",
          human: "All snapshot elements must have a base definition",
          expression: "element.all(base.exists())",
          xpath: "count(f:element) = count(f:element/f:base)",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
    },
    dataPath: "root.snapshot",
    parentDataPath: "root",
    basePath: "root.snapshot",
    baseId: "StructureDefinition.snapshot",
    isPrimitive: false,
    childPaths: ["root.snapshot.element[0]"],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition.differential",
      path: "StructureDefinition.differential",
      short: "Differential view of the structure",
      definition:
        "A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.",
      min: 0,
      max: "1",
      base: { path: "StructureDefinition.differential", min: 0, max: "1" },
      type: [{ code: "BackboneElement" }],
      condition: ["sdf-6"],
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
          key: "sdf-20",
          requirements: "no slicing on root",
          severity: "error",
          human: "No slicing on the root element",
          expression: "element.where(path.contains('.').not()).slicing.empty()",
          xpath:
            "not(exists(f:element[not(contains(f:path/@value,'.'))]/f:slicing))",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-8a",
          severity: "error",
          human:
            "In any differential, all the elements must start with the StructureDefinition's specified type for non-logical models, or with the same type name for logical models",
          expression:
            "(%resource.kind = 'logical' or element.first().path.startsWith(%resource.type)) and (element.tail().empty() or element.tail().all(path.startsWith(%resource.differential.element.first().path.replaceMatches('\\\\..*','')&'.')))",
          xpath:
            "count(f:element)=count(f:element[f:path/@value=ancestor::f:StructureDefinition/f:type/@value or starts-with(f:path/@value, concat(ancestor::f:StructureDefinition/f:type/@value, '.'))])",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
    },
    dataPath: "root.differential",
    parentDataPath: "root",
    basePath: "root.differential",
    baseId: "StructureDefinition.differential",
    isPrimitive: false,
    childPaths: ["root.differential.element[0]"],
    value: "",
  },
  {
    element: {
      id: "StructureDefinition",
      path: "StructureDefinition",
      short: "Structural Definition",
      definition:
        "A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.",
      alias: ["Template", "Profile"],
      min: 0,
      max: "*",
      base: { path: "StructureDefinition", min: 0, max: "*" },
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
          key: "sdf-0",
          severity: "warning",
          human:
            "Name should be usable as an identifier for the module by machine processing applications such as code generation",
          expression:
            "name.exists() implies name.matches('[A-Z]([A-Za-z0-9_]){0,254}')",
          xpath:
            "not(exists(f:name/@value)) or matches(f:name/@value, '[A-Z]([A-Za-z0-9_]){0,254}')",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-1",
          severity: "error",
          human:
            "Element paths must be unique unless the structure is a constraint",
          expression:
            "derivation = 'constraint' or snapshot.element.select(path).isDistinct()",
          xpath:
            "(f:derivation/@value = 'constraint') or (count(f:snapshot/f:element) = count(distinct-values(f:snapshot/f:element/f:path/@value)))",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-15a",
          requirements: "No Type on the root element (differential)",
          severity: "error",
          human:
            'If the first element in a differential has no "." in the path and it\'s not a logical model, it has no type',
          expression:
            "(kind!='logical'  and differential.element.first().path.contains('.').not()) implies differential.element.first().type.empty()",
          xpath:
            "f:kind/@value='logical' or not(f:differential/f:element[1][not(contains(f:path/@value, '.'))]/f:type)",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-4",
          requirements: "Ensure that the base types are abstract",
          severity: "error",
          human:
            "If the structure is not abstract, then there SHALL be a baseDefinition",
          expression: "abstract = true or baseDefinition.exists()",
          xpath: "(f:abstract/@value=true()) or exists(f:baseDefinition)",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-5",
          severity: "error",
          human:
            "If the structure defines an extension then the structure must have context information",
          expression:
            "type != 'Extension' or derivation = 'specialization' or (context.exists())",
          xpath:
            "not(f:type/@value = 'extension') or (f:derivation/@value = 'specialization') or (exists(f:context))",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-6",
          severity: "error",
          human:
            "A structure must have either a differential, or a snapshot (or both)",
          expression: "snapshot.exists() or differential.exists()",
          xpath: "exists(f:snapshot) or exists(f:differential)",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-9",
          requirements:
            "Because these 3 fields seem to be have overlapping meaning with the ones in the root of StructureDefinition",
          severity: "error",
          human:
            'In any snapshot or differential, no label, code or requirements on an element without a "." in the path (e.g. the first element)',
          expression:
            "children().element.where(path.contains('.').not()).label.empty() and children().element.where(path.contains('.').not()).code.empty() and children().element.where(path.contains('.').not()).requirements.empty()",
          xpath:
            "not(exists(f:snapshot/f:element[not(contains(f:path/@value, '.')) and (f:label or f:code or f:requirements)])) and not(exists(f:differential/f:element[not(contains(f:path/@value, '.')) and (f:label or f:code or f:requirements)]))",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-11",
          requirements:
            "Ensure that the type is not inconsistent with the other information in the structure",
          severity: "error",
          human:
            "If there's a type, its content must match the path name in the first element of a snapshot",
          expression:
            "kind != 'logical' implies snapshot.empty() or snapshot.element.first().path = type",
          xpath:
            "(f:kind/@value = 'logical') or not(exists(f:snapshot)) or (f:type/@value = f:snapshot/f:element[1]/f:path/@value)",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-14",
          requirements: "elements have id",
          severity: "error",
          human: "All element definitions must have an id",
          expression:
            "snapshot.element.all(id.exists()) and differential.element.all(id.exists())",
          xpath: "count(*/f:element)=count(*/f:element/@id)",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-15",
          requirements: "No Type on the root element (snapshot)",
          severity: "error",
          human:
            "The first element in a snapshot has no type unless model is a logical model.",
          expression:
            "kind!='logical' implies snapshot.element.first().type.empty()",
          xpath:
            "f:kind/@value='logical' or not(f:snapshot/f:element[1]/f:type)",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-16",
          requirements: "element ids need to be unique",
          severity: "error",
          human: "All element definitions must have unique ids (snapshot)",
          expression:
            "snapshot.element.all(id.exists()) and snapshot.element.id.trace('ids').isDistinct()",
          xpath:
            "count(f:snapshot/f:element)=count(f:snapshot/f:element/@id) and (count(f:snapshot/f:element)=count(distinct-values(f:snapshot/f:element/@id)))",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-17",
          requirements: "element ids need to be unique",
          severity: "error",
          human: "All element definitions must have unique ids (diff)",
          expression:
            "differential.element.all(id.exists()) and differential.element.id.trace('ids').isDistinct()",
          xpath:
            "count(f:differential/f:element)=count(f:differential/f:element/@id) and (count(f:differential/f:element)=count(distinct-values(f:differential/f:element/@id)))",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-18",
          requirements: "contextInvariant",
          severity: "error",
          human: "Context Invariants can only be used for extensions",
          expression: "contextInvariant.exists() implies type = 'Extension'",
          xpath:
            "not(exists(f:contextInvariant)) or (f:type/@value = 'Extension')",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-19",
          requirements: "custom types only in logical models",
          severity: "error",
          human: "FHIR Specification models only use FHIR defined types",
          expression:
            "url.startsWith('http://hl7.org/fhir/StructureDefinition') implies (differential.element.type.code.all(matches('^[a-zA-Z0-9]+$') or matches('^http:\\\\/\\\\/hl7\\\\.org\\\\/fhirpath\\\\/System\\\\.[A-Z][A-Za-z]+$')) and snapshot.element.type.code.all(matches('^[a-zA-Z0-9\\\\.]+$') or matches('^http:\\\\/\\\\/hl7\\\\.org\\\\/fhirpath\\\\/System\\\\.[A-Z][A-Za-z]+$')))",
          xpath:
            "not(starts-with(f:url/@value, 'http://hl7.org/fhir/StructureDefinition')) or count(f:differential/f:element/f:type/f:code[@value and not(matches(string(@value), '^[a-zA-Z0-9\\.]+$'))]|f:snapshot/f:element/f:type/f:code[@value and not(matches(string(@value), '^[a-zA-Z0-9]+$\\.'))]) =0",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-21",
          requirements: "no default values on data types or resources",
          severity: "error",
          human: "Default values can only be specified on specializations",
          expression:
            "differential.element.defaultValue.exists() implies (derivation = 'specialization')",
          xpath:
            "not(exists(f:differential/f:element/*[starts-with(local-name(), 'defaultValue')])) or (f:derivation/@value = 'specialization')",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-22",
          requirements: "no default values on data types or resources",
          severity: "error",
          human: "FHIR Specification models never have default values",
          expression:
            "url.startsWith('http://hl7.org/fhir/StructureDefinition') implies (snapshot.element.defaultValue.empty() and differential.element.defaultValue.empty())",
          xpath:
            "not(starts-with(f:url/@value, 'http://hl7.org/fhir/StructureDefinition')) or (not(exists(f:snapshot/f:element/*[starts-with(local-name(), 'defaultValue')])) and not(exists(f:differential/f:element/*[starts-with(local-name(), 'defaultValue')])))",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
        {
          key: "sdf-23",
          requirements: "no sliceName on root",
          severity: "error",
          human: "No slice name on root",
          expression:
            "(snapshot | differential).element.all(path.contains('.').not() implies sliceName.empty())",
          xpath:
            "count(*[self::snapshot or self::differential]/f:element[not(contains(f:path/@value, '.')) and f:sliceName])=0",
          source: "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "rim", map: "Entity. Role, or Act" },
        { identity: "rim", map: "n/a" },
        { identity: "w5", map: "conformance.content" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "StructureDefinition",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
