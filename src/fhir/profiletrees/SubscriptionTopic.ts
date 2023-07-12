const data = [
  {
    element: {
      id: "SubscriptionTopic.meta",
      path: "SubscriptionTopic.meta",
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
    baseId: "SubscriptionTopic.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.implicitRules",
      path: "SubscriptionTopic.implicitRules",
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
    baseId: "SubscriptionTopic.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.language",
      path: "SubscriptionTopic.language",
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
    baseId: "SubscriptionTopic.language",
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
      id: "SubscriptionTopic.contained",
      path: "SubscriptionTopic.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/SubscriptionTopic",
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
    baseId: "SubscriptionTopic.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.url",
      path: "SubscriptionTopic.url",
      short:
        "Canonical identifier for this subscription topic definition, represented as a URI (globally unique)",
      definition:
        "An absolute URI that is used to identify this subscription topic when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this subscription topic is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the subscription topic is stored on different servers.",
      comment:
        "Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.\n\nThe determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). \n\nIn some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.",
      requirements:
        "Allows the subscription topic to be referenced by a single globally unique identifier.",
      min: 1,
      max: "1",
      base: { path: "SubscriptionTopic.url", min: 1, max: "1" },
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
        { identity: "rim", map: ".identifier" },
      ],
    },
    dataPath: "root.url",
    parentDataPath: "root",
    basePath: "root.url",
    baseId: "SubscriptionTopic.url",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.version",
      path: "SubscriptionTopic.version",
      short: "Business version of the subscription topic",
      definition:
        "The identifier that is used to identify this version of the subscription topic when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Topic author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions are orderable.",
      comment:
        "There may be multiple different instances of a subscription topic that have the same identifier but different versions.",
      min: 0,
      max: "1",
      base: { path: "SubscriptionTopic.version", min: 0, max: "1" },
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
        { identity: "rim", map: "N/A (to add?)" },
      ],
    },
    dataPath: "root.version",
    parentDataPath: "root",
    basePath: "root.version",
    baseId: "SubscriptionTopic.version",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.title",
      path: "SubscriptionTopic.title",
      short: "Name for this subscription topic (Human friendly)",
      definition:
        'A short, descriptive, user-friendly title for the SubscriptionTopic, for example, "admission".',
      alias: ["Name", "SubscriptionTopic Name"],
      min: 0,
      max: "1",
      base: { path: "SubscriptionTopic.title", min: 0, max: "1" },
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
        { identity: "workflow", map: "Definition.title" },
        { identity: "rim", map: ".title" },
      ],
    },
    dataPath: "root.title",
    parentDataPath: "root",
    basePath: "root.title",
    baseId: "SubscriptionTopic.title",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.derivedFrom",
      path: "SubscriptionTopic.derivedFrom",
      short: "Based on FHIR protocol or definition",
      definition:
        "The canonical URL pointing to another FHIR-defined SubscriptionTopic that is adhered to in whole or in part by this SubscriptionTopic.",
      requirements:
        "SubscriptionTopics may be refinements of more generic topics.",
      min: 0,
      max: "*",
      base: { path: "SubscriptionTopic.derivedFrom", min: 0, max: "*" },
      type: [
        {
          code: "canonical",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/SubscriptionTopic",
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
        { identity: "workflow", map: "Definition.derivedFromCanonical" },
        { identity: "v2", map: "Varies by domain" },
        { identity: "rim", map: ".outboundRelationship[typeCode=DEFN].target" },
      ],
    },
    dataPath: "root.derivedFrom[0]",
    parentDataPath: "root",
    basePath: "root.derivedFrom",
    baseId: "SubscriptionTopic.derivedFrom",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.status",
      path: "SubscriptionTopic.status",
      short: "draft | active | retired | unknown",
      definition: "The current state of the SubscriptionTopic.",
      comment:
        'A nominal state-transition diagram can be found in the [[definition.html#statemachine | Definition pattern]] documentation\n\nUnknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.',
      min: 1,
      max: "1",
      base: { path: "SubscriptionTopic.status", min: 1, max: "1" },
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
        'This is labeled as "Is Modifier" because applications should not use a retired SubscriptionTopic without due consideration',
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
        { identity: "rim", map: ".status" },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "SubscriptionTopic.status",
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
      id: "SubscriptionTopic.experimental",
      path: "SubscriptionTopic.experimental",
      short: "If for testing purposes, not real usage",
      definition:
        "A flag to indicate that this TopSubscriptionTopicic is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.",
      comment:
        "Allows filtering of SubscriptionTopic that are appropriate for use vs. not.",
      requirements:
        "Enables experimental content to be developed following the same life-cycle as a production-level SubscriptionTopic would.",
      min: 0,
      max: "1",
      base: { path: "SubscriptionTopic.experimental", min: 0, max: "1" },
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
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because applications should not use an experimental SubscriptionTopic in production.',
      isSummary: true,
      mapping: [
        { identity: "workflow", map: "Definition.experimental" },
        { identity: "w5", map: "FiveWs.class" },
        { identity: "rim", map: "N/A (to add?)" },
      ],
    },
    dataPath: "root.experimental",
    parentDataPath: "root",
    basePath: "root.experimental",
    baseId: "SubscriptionTopic.experimental",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.date",
      path: "SubscriptionTopic.date",
      short: "Date status first applied",
      definition:
        "For draft definitions, indicates the date of initial creation.  For active definitions, represents the date of activation.  For withdrawn definitions, indicates the date of withdrawal.",
      alias: ["created"],
      min: 0,
      max: "1",
      base: { path: "SubscriptionTopic.date", min: 0, max: "1" },
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
        { identity: "rim", map: ".participation[typeCode=AUT].time" },
      ],
    },
    dataPath: "root.date",
    parentDataPath: "root",
    basePath: "root.date",
    baseId: "SubscriptionTopic.date",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.publisher",
      path: "SubscriptionTopic.publisher",
      short:
        "The name of the individual or organization that published the SubscriptionTopic",
      definition:
        'Helps establish the "authority/credibility" of the SubscriptionTopic.  May also allow for contact.',
      requirements:
        "Usually an organization, but may be an individual. The publisher (or steward) of the SubscriptionTopic is the organization or individual primarily responsible for the maintenance and upkeep of the Topic. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the Topic. This item SHOULD be populated unless the information is available from context.",
      alias: ["author"],
      min: 0,
      max: "1",
      base: { path: "SubscriptionTopic.publisher", min: 0, max: "1" },
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
        {
          identity: "workflow",
          map: "Definition.publisher {as string instead of CodeableConcept}",
        },
        { identity: "w5", map: "FiveWs.author" },
        { identity: "rim", map: ".participation[typeCode=AUT].role" },
      ],
    },
    dataPath: "root.publisher",
    parentDataPath: "root",
    basePath: "root.publisher",
    baseId: "SubscriptionTopic.publisher",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.description",
      path: "SubscriptionTopic.description",
      short: "Natural language description of the SubscriptionTopic",
      definition:
        "A free text natural language description of the Topic from the consumer's perspective.",
      comment:
        "This description can be used to capture details such as why the Topic was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the module as conveyed in the text field of the resource itself. This item SHOULD be populated unless the information is available from context.",
      min: 0,
      max: "1",
      base: { path: "SubscriptionTopic.description", min: 0, max: "1" },
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
        { identity: "workflow", map: "Definition.description" },
        { identity: "rim", map: ".text" },
      ],
    },
    dataPath: "root.description",
    parentDataPath: "root",
    basePath: "root.description",
    baseId: "SubscriptionTopic.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.jurisdiction",
      path: "SubscriptionTopic.jurisdiction",
      short: "Intended jurisdiction of the SubscriptionTopic (if applicable)",
      definition: "A jurisdiction in which the Topic is intended to be used.",
      min: 0,
      max: "*",
      base: { path: "SubscriptionTopic.jurisdiction", min: 0, max: "*" },
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
      mapping: [
        { identity: "workflow", map: "Definition.jurisdiction" },
        { identity: "rim", map: "N/A (to add?)" },
      ],
    },
    dataPath: "root.jurisdiction[0]",
    parentDataPath: "root",
    basePath: "root.jurisdiction",
    baseId: "SubscriptionTopic.jurisdiction",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.purpose",
      path: "SubscriptionTopic.purpose",
      short: "Why this SubscriptionTopic is defined",
      definition:
        "Explains why this Topic is needed and why it has been designed as it has.",
      comment:
        "This element does not describe the usage of the Topic.  Rather it is for traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this Topic.",
      min: 0,
      max: "1",
      base: { path: "SubscriptionTopic.purpose", min: 0, max: "1" },
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
        { identity: "rim", map: ".reasonCode.text" },
      ],
    },
    dataPath: "root.purpose",
    parentDataPath: "root",
    basePath: "root.purpose",
    baseId: "SubscriptionTopic.purpose",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.copyright",
      path: "SubscriptionTopic.copyright",
      short: "Use and/or publishing restrictions",
      definition:
        "A copyright statement relating to the SubscriptionTopic and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the SubscriptionTopic.",
      requirements:
        "Consumers of the TSubscriptionTopicopic must be able to determine any legal restrictions on the use of the artifact and/or its content.",
      alias: ["License", "Restrictions"],
      min: 0,
      max: "1",
      base: { path: "SubscriptionTopic.copyright", min: 0, max: "1" },
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
        { identity: "rim", map: "N/A (to add?)" },
      ],
    },
    dataPath: "root.copyright",
    parentDataPath: "root",
    basePath: "root.copyright",
    baseId: "SubscriptionTopic.copyright",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.approvalDate",
      path: "SubscriptionTopic.approvalDate",
      short: "When SubscriptionTopic is/was approved by publisher",
      definition:
        "The date on which the asset content was approved by the publisher. Approval happens once when the content is officially approved for usage.",
      comment:
        "The date may be more recent than the approval date because of minor changes / editorial corrections.",
      min: 0,
      max: "1",
      base: { path: "SubscriptionTopic.approvalDate", min: 0, max: "1" },
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
        {
          identity: "rim",
          map: '.outboundRelationship[typeCode="SUBJ"].act[classCode=CACT;moodCode=EVN;code="approval"].effectiveTime',
        },
      ],
    },
    dataPath: "root.approvalDate",
    parentDataPath: "root",
    basePath: "root.approvalDate",
    baseId: "SubscriptionTopic.approvalDate",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.lastReviewDate",
      path: "SubscriptionTopic.lastReviewDate",
      short: "Date the Subscription Topic was last reviewed by the publisher",
      definition:
        "The date on which the asset content was last reviewed. Review happens periodically after that, but doesn't change the original approval date.",
      comment: "If specified, this is usually after the approval date.",
      min: 0,
      max: "1",
      base: { path: "SubscriptionTopic.lastReviewDate", min: 0, max: "1" },
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
        {
          identity: "rim",
          map: '.outboundRelationship[typeCode="SUBJ"; subsetCode="RECENT"].act[classCode=CACT;moodCode=EVN;code="review"].effectiveTime',
        },
      ],
    },
    dataPath: "root.lastReviewDate",
    parentDataPath: "root",
    basePath: "root.lastReviewDate",
    baseId: "SubscriptionTopic.lastReviewDate",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.resourceTrigger",
      path: "SubscriptionTopic.resourceTrigger",
      short:
        "Definition of a resource-based trigger for the subscription topic",
      definition:
        "A definition of a resource-based event that triggers a notification based on the SubscriptionTopic. The criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression. Multiple triggers are considered OR joined (e.g., a resource update matching ANY of the definitions will trigger a notification).",
      min: 0,
      max: "*",
      base: { path: "SubscriptionTopic.resourceTrigger", min: 0, max: "*" },
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
      mapping: [{ identity: "rim", map: "N/A (to add?)" }],
    },
    dataPath: "root.resourceTrigger[0]",
    parentDataPath: "root",
    basePath: "root.resourceTrigger",
    baseId: "SubscriptionTopic.resourceTrigger",
    isPrimitive: false,
    childPaths: [
      "root.resourceTrigger.description",
      "root.resourceTrigger.resource",
      "root.resourceTrigger.supportedInteraction[0]",
      "root.resourceTrigger.queryCriteria",
      "root.resourceTrigger.fhirPathCriteria",
    ],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.resourceTrigger.description",
      path: "SubscriptionTopic.resourceTrigger.description",
      short: "Text representation of the resource trigger",
      definition:
        "The human readable description of this resource trigger for the SubscriptionTopic -  for example, \"An Encounter enters the 'in-progress' state\".",
      comment:
        "Implementation of particular subscription topics might not use a computable definition and instead base their design on the definition.",
      min: 0,
      max: "1",
      base: {
        path: "SubscriptionTopic.resourceTrigger.description",
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
      isSummary: true,
    },
    dataPath: "root.resourceTrigger.description",
    parentDataPath: "root.resourceTrigger[0]",
    basePath: "root.description",
    baseId: "SubscriptionTopic.resourceTrigger.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.resourceTrigger.resource",
      path: "SubscriptionTopic.resourceTrigger.resource",
      short:
        "Data Type or Resource (reference to definition) for this trigger definition",
      definition:
        'URL of the Resource that is the type used in this resource trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see <a href="elementdefinition-definitions.html#ElementDefinition.type.code">ElementDefinition.type.code</a>.',
      min: 1,
      max: "1",
      base: {
        path: "SubscriptionTopic.resourceTrigger.resource",
        min: 1,
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
    dataPath: "root.resourceTrigger.resource",
    parentDataPath: "root.resourceTrigger[0]",
    basePath: "root.resource",
    baseId: "SubscriptionTopic.resourceTrigger.resource",
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
      id: "SubscriptionTopic.resourceTrigger.supportedInteraction",
      path: "SubscriptionTopic.resourceTrigger.supportedInteraction",
      short: "create | update | delete",
      definition:
        "The FHIR RESTful interaction which can be used to trigger a notification for the SubscriptionTopic. Multiple values are considered OR joined (e.g., CREATE or UPDATE).",
      min: 0,
      max: "*",
      base: {
        path: "SubscriptionTopic.resourceTrigger.supportedInteraction",
        min: 0,
        max: "*",
      },
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
            valueString: "MethodCode",
          },
        ],
        strength: "required",
        description:
          "FHIR RESTful interaction used to filter a resource-based SubscriptionTopic trigger.",
        valueSet: "http://hl7.org/fhir/ValueSet/interaction-trigger|4.3.0",
      },
    },
    dataPath: "root.resourceTrigger.supportedInteraction[0]",
    parentDataPath: "root.resourceTrigger[0]",
    basePath: "root.supportedInteraction",
    baseId: "SubscriptionTopic.resourceTrigger.supportedInteraction",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [{ code: "create" }, { code: "update" }, { code: "delete" }],
  },
  {
    element: {
      id: "SubscriptionTopic.resourceTrigger.queryCriteria",
      path: "SubscriptionTopic.resourceTrigger.queryCriteria",
      short: "Query based trigger rule",
      definition:
        "The FHIR query based rules that the server should use to determine when to trigger a notification for this subscription topic.",
      min: 0,
      max: "1",
      base: {
        path: "SubscriptionTopic.resourceTrigger.queryCriteria",
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
      isSummary: true,
    },
    dataPath: "root.resourceTrigger.queryCriteria",
    parentDataPath: "root.resourceTrigger[0]",
    basePath: "root.queryCriteria",
    baseId: "SubscriptionTopic.resourceTrigger.queryCriteria",
    isPrimitive: false,
    childPaths: [
      "root.resourceTrigger.queryCriteria.previous",
      "root.resourceTrigger.queryCriteria.resultForCreate",
      "root.resourceTrigger.queryCriteria.current",
      "root.resourceTrigger.queryCriteria.resultForDelete",
      "root.resourceTrigger.queryCriteria.requireBoth",
    ],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.resourceTrigger.queryCriteria.previous",
      path: "SubscriptionTopic.resourceTrigger.queryCriteria.previous",
      short: "Rule applied to previous resource state",
      definition:
        "The FHIR query based rules are applied to the previous resource state (e.g., state before an update).",
      comment:
        'The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".',
      min: 0,
      max: "1",
      base: {
        path: "SubscriptionTopic.resourceTrigger.queryCriteria.previous",
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
      isSummary: true,
    },
    dataPath: "root.resourceTrigger.queryCriteria.previous",
    parentDataPath: "root.resourceTrigger.queryCriteria",
    basePath: "root.previous",
    baseId: "SubscriptionTopic.resourceTrigger.queryCriteria.previous",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.resourceTrigger.queryCriteria.resultForCreate",
      path: "SubscriptionTopic.resourceTrigger.queryCriteria.resultForCreate",
      short: "test-passes | test-fails",
      definition:
        'For "create" interactions, should the "previous" criteria count as an automatic pass or an automatic fail.',
      min: 0,
      max: "1",
      base: {
        path: "SubscriptionTopic.resourceTrigger.queryCriteria.resultForCreate",
        min: 0,
        max: "1",
      },
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
            valueString: "CriteriaNotExistsBehavior",
          },
        ],
        strength: "required",
        description:
          "Behavior a server can exhibit when a criteria state does not exist (e.g., state prior to a create or after a delete).",
        valueSet:
          "http://hl7.org/fhir/ValueSet/subscriptiontopic-cr-behavior|4.3.0",
      },
    },
    dataPath: "root.resourceTrigger.queryCriteria.resultForCreate",
    parentDataPath: "root.resourceTrigger.queryCriteria",
    basePath: "root.resultForCreate",
    baseId: "SubscriptionTopic.resourceTrigger.queryCriteria.resultForCreate",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/subscriptiontopic-cr-behavior",
        code: "test-passes",
        display: "test passes",
      },
      {
        system: "http://hl7.org/fhir/subscriptiontopic-cr-behavior",
        code: "test-fails",
        display: "test fails",
      },
    ],
  },
  {
    element: {
      id: "SubscriptionTopic.resourceTrigger.queryCriteria.current",
      path: "SubscriptionTopic.resourceTrigger.queryCriteria.current",
      short: "Rule applied to current resource state",
      definition:
        "The FHIR query based rules are applied to the current resource state (e.g., state after an update).",
      comment:
        'The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".',
      min: 0,
      max: "1",
      base: {
        path: "SubscriptionTopic.resourceTrigger.queryCriteria.current",
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
      isSummary: true,
    },
    dataPath: "root.resourceTrigger.queryCriteria.current",
    parentDataPath: "root.resourceTrigger.queryCriteria",
    basePath: "root.current",
    baseId: "SubscriptionTopic.resourceTrigger.queryCriteria.current",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.resourceTrigger.queryCriteria.resultForDelete",
      path: "SubscriptionTopic.resourceTrigger.queryCriteria.resultForDelete",
      short: "test-passes | test-fails",
      definition:
        'For "delete" interactions, should the "current" criteria count as an automatic pass or an automatic fail.',
      min: 0,
      max: "1",
      base: {
        path: "SubscriptionTopic.resourceTrigger.queryCriteria.resultForDelete",
        min: 0,
        max: "1",
      },
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
            valueString: "CriteriaNotExistsBehavior",
          },
        ],
        strength: "required",
        description:
          "Behavior a server can exhibit when a criteria state does not exist (e.g., state prior to a create or after a delete).",
        valueSet:
          "http://hl7.org/fhir/ValueSet/subscriptiontopic-cr-behavior|4.3.0",
      },
    },
    dataPath: "root.resourceTrigger.queryCriteria.resultForDelete",
    parentDataPath: "root.resourceTrigger.queryCriteria",
    basePath: "root.resultForDelete",
    baseId: "SubscriptionTopic.resourceTrigger.queryCriteria.resultForDelete",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/subscriptiontopic-cr-behavior",
        code: "test-passes",
        display: "test passes",
      },
      {
        system: "http://hl7.org/fhir/subscriptiontopic-cr-behavior",
        code: "test-fails",
        display: "test fails",
      },
    ],
  },
  {
    element: {
      id: "SubscriptionTopic.resourceTrigger.queryCriteria.requireBoth",
      path: "SubscriptionTopic.resourceTrigger.queryCriteria.requireBoth",
      short: "Both must be true flag",
      definition:
        "If set to true, both current and previous criteria must evaluate true to  trigger a notification for this topic.  Otherwise a notification for this topic will be triggered if either one evaluates to true.",
      min: 0,
      max: "1",
      base: {
        path: "SubscriptionTopic.resourceTrigger.queryCriteria.requireBoth",
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
      isSummary: true,
    },
    dataPath: "root.resourceTrigger.queryCriteria.requireBoth",
    parentDataPath: "root.resourceTrigger.queryCriteria",
    basePath: "root.requireBoth",
    baseId: "SubscriptionTopic.resourceTrigger.queryCriteria.requireBoth",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.resourceTrigger.fhirPathCriteria",
      path: "SubscriptionTopic.resourceTrigger.fhirPathCriteria",
      short: "FHIRPath based trigger rule",
      definition:
        "The FHIRPath based rules that the server should use to determine when to trigger a notification for this topic.",
      comment: "FHIRPath expression with %previous and %current vars.",
      min: 0,
      max: "1",
      base: {
        path: "SubscriptionTopic.resourceTrigger.fhirPathCriteria",
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
      isSummary: true,
    },
    dataPath: "root.resourceTrigger.fhirPathCriteria",
    parentDataPath: "root.resourceTrigger[0]",
    basePath: "root.fhirPathCriteria",
    baseId: "SubscriptionTopic.resourceTrigger.fhirPathCriteria",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.eventTrigger",
      path: "SubscriptionTopic.eventTrigger",
      short: "Event definitions the SubscriptionTopic",
      definition:
        "Event definition which can be used to trigger the SubscriptionTopic.",
      min: 0,
      max: "*",
      base: { path: "SubscriptionTopic.eventTrigger", min: 0, max: "*" },
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
      mapping: [{ identity: "rim", map: "N/A (to add?)" }],
    },
    dataPath: "root.eventTrigger[0]",
    parentDataPath: "root",
    basePath: "root.eventTrigger",
    baseId: "SubscriptionTopic.eventTrigger",
    isPrimitive: false,
    childPaths: [
      "root.eventTrigger.description",
      "root.eventTrigger.event",
      "root.eventTrigger.resource",
    ],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.eventTrigger.description",
      path: "SubscriptionTopic.eventTrigger.description",
      short: "Text representation of the event trigger",
      definition:
        'The human readable description of an event to trigger a notification for the SubscriptionTopic - for example, "Patient Admission, as defined in HL7v2 via message ADT^A01". Multiple values are considered OR joined (e.g., matching any single event listed).',
      comment:
        "Implementation of particular subscription topics might not use a computable definition and instead base their design on the definition.",
      min: 0,
      max: "1",
      base: {
        path: "SubscriptionTopic.eventTrigger.description",
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
      isSummary: true,
    },
    dataPath: "root.eventTrigger.description",
    parentDataPath: "root.eventTrigger[0]",
    basePath: "root.description",
    baseId: "SubscriptionTopic.eventTrigger.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.eventTrigger.event",
      path: "SubscriptionTopic.eventTrigger.event",
      short:
        "Event which can trigger a notification from the SubscriptionTopic",
      definition:
        "A well-defined event which can be used to trigger notifications from the SubscriptionTopic.",
      min: 1,
      max: "1",
      base: { path: "SubscriptionTopic.eventTrigger.event", min: 1, max: "1" },
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
            valueString: "SubscriptionTopicEventTrigger",
          },
        ],
        strength: "example",
        description:
          "FHIR Value set/code system definition for HL7 v2 table 0003 (EVENT TYPE CODE).",
        valueSet: "http://terminology.hl7.org/ValueSet/v2-0003",
      },
    },
    dataPath: "root.eventTrigger.event",
    parentDataPath: "root.eventTrigger[0]",
    basePath: "root.event",
    baseId: "SubscriptionTopic.eventTrigger.event",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "X01",
        display: "PEX - Product experience",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A01",
        display: "ADT/ACK - Admit/visit notification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A02",
        display: "ADT/ACK - Transfer a patient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A03",
        display: "ADT/ACK -  Discharge/end visit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A04",
        display: "ADT/ACK -  Register a patient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A05",
        display: "ADT/ACK -  Pre-admit a patient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A06",
        display: "ADT/ACK -  Change an outpatient to an inpatient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A07",
        display: "ADT/ACK -  Change an inpatient to an outpatient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A08",
        display: "ADT/ACK -  Update patient information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A09",
        display: "ADT/ACK -  Patient departing - tracking",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A10",
        display: "ADT/ACK -  Patient arriving - tracking",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A11",
        display: "ADT/ACK -  Cancel admit/visit notification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A12",
        display: "ADT/ACK -  Cancel transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A13",
        display: "ADT/ACK -  Cancel discharge/end visit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A14",
        display: "ADT/ACK -  Pending admit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A15",
        display: "ADT/ACK -  Pending transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A16",
        display: "ADT/ACK -  Pending discharge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A17",
        display: "ADT/ACK -  Swap patients",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A18",
        display: "ADT/ACK -  Merge patient information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A19",
        display: "QRY/ADR -  Patient query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A20",
        display: "ADT/ACK -  Bed status update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A21",
        display: 'ADT/ACK -  Patient goes on a "leave of absence"',
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A22",
        display: 'ADT/ACK -  Patient returns from a "leave of absence"',
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A23",
        display: "ADT/ACK -  Delete a patient record",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A24",
        display: "ADT/ACK -  Link patient information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A25",
        display: "ADT/ACK -  Cancel pending discharge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A26",
        display: "ADT/ACK -  Cancel pending transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A27",
        display: "ADT/ACK -  Cancel pending admit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A28",
        display: "ADT/ACK -  Add person information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A29",
        display: "ADT/ACK -  Delete person information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A30",
        display: "ADT/ACK -  Merge person information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A31",
        display: "ADT/ACK -  Update person information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A32",
        display: "ADT/ACK -  Cancel patient arriving - tracking",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A33",
        display: "ADT/ACK -  Cancel patient departing - tracking",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A34",
        display: "ADT/ACK -  Merge patient information - patient ID only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A35",
        display: "ADT/ACK -  Merge patient information - account number only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A36",
        display:
          "ADT/ACK -  Merge patient information - patient ID and account number",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A37",
        display: "ADT/ACK -  Unlink patient information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A38",
        display: "ADT/ACK - Cancel pre-admit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A39",
        display: "ADT/ACK - Merge person - patient ID",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A40",
        display: "ADT/ACK - Merge patient - patient identifier list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A41",
        display: "ADT/ACK - Merge account - patient account number",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A42",
        display: "ADT/ACK - Merge visit - visit number",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A43",
        display: "ADT/ACK - Move patient information - patient identifier list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A44",
        display: "ADT/ACK - Move account information - patient account number",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A45",
        display: "ADT/ACK - Move visit information - visit number",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A46",
        display: "ADT/ACK - Change patient ID",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A47",
        display: "ADT/ACK - Change patient identifier list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A48",
        display: "ADT/ACK - Change alternate patient ID",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A49",
        display: "ADT/ACK - Change patient account number",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A50",
        display: "ADT/ACK - Change visit number",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A51",
        display: "ADT/ACK - Change alternate visit ID",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A52",
        display: "ADT/ACK - Cancel leave of absence for a patient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A53",
        display: "ADT/ACK - Cancel patient returns from a leave of absence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A54",
        display: "ADT/ACK - Change attending doctor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A55",
        display: "ADT/ACK - Cancel change attending doctor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A60",
        display: "ADT/ACK - Update allergy information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A61",
        display: "ADT/ACK - Change consulting doctor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "A62",
        display: "ADT/ACK - Cancel change consulting doctor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "B01",
        display: "PMU/ACK - Add personnel record",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "B02",
        display: "PMU/ACK - Update personnel record",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "B03",
        display: "PMU/ACK - Delete personnel re cord",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "B04",
        display: "PMU/ACK - Active practicing person",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "B05",
        display: "PMU/ACK - Deactivate practicing person",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "B06",
        display: "PMU/ACK - Terminate practicing person",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "B07",
        display: "PMU/ACK - Grant Certificate/Permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "B08",
        display: "PMU/ACK - Revoke Certificate/Permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "C01",
        display: "CRM - Register a patient on a clinical trial",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "C02",
        display:
          "CRM - Cancel a patient registration on clinical trial (for clerical mistakes only)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "C03",
        display: "CRM - Correct/update registration information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "C04",
        display: "CRM - Patient has gone off a clinical trial",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "C05",
        display: "CRM - Patient enters phase of clinical trial",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "C06",
        display: "CRM - Cancel patient entering a phase (clerical mistake)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "C07",
        display: "CRM - Correct/update phase information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "C08",
        display: "CRM - Patient has gone off phase of clinical trial",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "C09",
        display: "CSU - Automated time intervals for reporting, like monthly",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "C10",
        display: "CSU - Patient completes the clinical trial",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "C11",
        display: "CSU - Patient completes a phase of the clinical trial",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "C12",
        display: "CSU - Update/correction of patient order/result information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "CNQ",
        display: "Cancel Query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E01",
        display: "Submit HealthCare Services Invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E02",
        display: "Cancel HealthCare Services Invoice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E03",
        display: "HealthCare Services Invoice Status",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "varies",
        display:
          "MFQ/MFR - Master files query (use event same as asking for e.g., M05 - location)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E04",
        display: "Re-Assess HealthCare Services Invoice Request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E10",
        display: "Edit/Adjudication Results",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E12",
        display: "Request Additional Information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E13",
        display: "Additional Information Response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E15",
        display: "Payment/Remittance Advice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E20",
        display: "Submit Authorization Request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E21",
        display: "Cancel Authorization Request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E22",
        display: "Authorization Request Status",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E24",
        display: "Authorization Response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E30",
        display: "Submit Health Document related to Authorization Request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "E31",
        display: "Cancel Health Document related to Authorization Request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I01",
        display: "RQI/RPI - Request for insurance information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I02",
        display: "RQI/RPL - Request/receipt of patient selection display list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I03",
        display: "RQI/RPR - Request/receipt of patient selection list",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I04",
        display: "RQD/RPI - Request for patient demographic data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I05",
        display: "RQC/RCI - Request for patient clinical information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I06",
        display: "RQC/RCL - Request/receipt of clinical data listing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I07",
        display: "PIN/ACK - Unsolicited insurance information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I08",
        display: "RQA/RPA - Request for treatment authorization information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I09",
        display: "RQA/RPA - Request for modification to an authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I10",
        display: "RQA/RPA - Request for resubmission of an authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I11",
        display: "RQA/RPA - Request for cancellation of an authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I12",
        display: "REF/RRI - Patient referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I13",
        display: "REF/RRI - Modify patient referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I14",
        display: "REF/RRI - Cancel patient referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I15",
        display: "REF/RRI - Request patient referral status",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I16",
        display: "Collaborative Care Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I17",
        display: "Modify Collaborative Care Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I18",
        display: "Cancel Collaborative Care Referral",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I19",
        display: "Collaborative Care Query/Collaborative Care Query Update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I20",
        display: "Asynchronous Collaborative Care Update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I21",
        display: "Collaborative Care Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "I22",
        display: "Collaborative Care Fetch / Collaborative Care Information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "J01",
        display: "QCN/ACK - Cancel query/acknowledge message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "J02",
        display: "QSX/ACK - Cancel subscription/acknowledge message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "K11",
        display: "RSP - Segment pattern response in response to QBP^Q11",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "K13",
        display: "RTB - Tabular response in response to QBP^Q13",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "K15",
        display: "RDY - Display response in response to QBP^Q15",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "K21",
        display: "RSP - Get person demographics response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "K22",
        display: "RSP - Find candidates response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "K23",
        display: "RSP - Get corresponding identifiers response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "K24",
        display: "RSP - Allocate identifiers response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "K25",
        display: "RSP - Personnel Information by Segment Response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "K31",
        display: "RSP -Dispense History Response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "K32",
        display: "Find Candidates including Visit Information Response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "K33",
        display: "Get Donor Record Candidates Response Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "K34",
        display: "Segment Pattern Response Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M01",
        display: "MFN/MFK - Master file not otherwise specified",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M02",
        display: "MFN/MFK - Master file - staff practitioner",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M03",
        display: "MFN/MFK - Master file - test/observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M04",
        display: "MFN/MFK - Master files charge description",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M05",
        display: "MFN/MFK - Patient location master file",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M06",
        display:
          "MFN/MFK - Clinical study with phases and schedules master file",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M07",
        display:
          "MFN/MFK - Clinical study without phases but with schedules master file",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M08",
        display: "MFN/MFK - Test/observation (numeric) master file",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M09",
        display: "MFN/MFK - Test/observation (categorical) master file",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M10",
        display: "MFN/MFK - Test /observation batteries master file",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M11",
        display: "MFN/MFK - Test/calculated observations master file",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M12",
        display: "MFN/MFK - Master file notification message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M13",
        display: "MFN/MFK - Master file notification - general",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M14",
        display: "MFN/MFK - Master file notification - site defined",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M15",
        display: "MFN/MFK - Inventory item master file notification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R0R",
        display: "R0R - Pharmacy prescription order query response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M16",
        display: "MFN/MFK - Master File Notification Inventory Item Enhanced",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M17",
        display: "DRG Master File Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "M18",
        display:
          "MFN/MFK - Master file notification - Test/Observation (Payer)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "N01",
        display: "NMQ/NMR - Application management query message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "N02",
        display: "NMD/ACK - Application management data message (unsolicited)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O01",
        display: "ORM - Order message (also RDE, RDS, RGV, RAS)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O02",
        display: "ORR - Order response (also RRE, RRD, RRG, RRA)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O03",
        display: "OMD - Diet order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O04",
        display: "ORD - Diet order acknowledgment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O05",
        display: "OMS - Stock requisition order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O06",
        display: "ORS - Stock requisition acknowledgment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O07",
        display: "OMN - Non-stock requisition order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O08",
        display: "ORN - Non-stock requisition acknowledgment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O09",
        display: "OMP - Pharmacy/treatment order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O10",
        display: "ORP - Pharmacy/treatment order acknowledgment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O11",
        display: "RDE - Pharmacy/treatment encoded order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O12",
        display: "RRE - Pharmacy/treatment encoded order acknowledgment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O13",
        display: "RDS - Pharmacy/treatment dispense",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O14",
        display: "RRD - Pharmacy/treatment dispense acknowledgment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O15",
        display: "RGV - Pharmacy/treatment give",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O16",
        display: "RRG - Pharmacy/treatment give acknowledgment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O17",
        display: "RAS - Pharmacy/treatment administration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O18",
        display: "RRA - Pharmacy/treatment administration acknowledgment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O19",
        display: "OMG - General clinical order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O20",
        display: "ORG/ORL - General clinical order response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O21",
        display: "OML - Laboratory order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O22",
        display: "ORL - General laboratory order response message to any OML",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O23",
        display: "OMI - Imaging order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O24",
        display: "ORI - Imaging order response message to any OMI",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O25",
        display: "RDE - Pharmacy/treatment refill authorization request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O26",
        display:
          "RRE - Pharmacy/Treatment Refill Authorization Acknowledgement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O27",
        display: "OMB - Blood product order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O28",
        display: "ORB - Blood product order acknowledgment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O29",
        display: "BPS - Blood product dispense status",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O30",
        display: "BRP - Blood product dispense status acknowledgment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O31",
        display: "BTS - Blood product transfusion/disposition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O32",
        display: "BRT - Blood product transfusion/disposition acknowledgment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O33",
        display:
          "OML - Laboratory order for multiple orders related to a single specimen",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O34",
        display:
          "ORL - Laboratory order response message to a multiple order related to single specimen OML",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O35",
        display:
          "OML - Laboratory order for multiple orders related to a single container of a specimen",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R05",
        display: "QRY/DSR - query for display results (See Q01)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O36",
        display:
          "ORL - Laboratory order response message to a single container of a specimen OML",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R06",
        display: "UDM - unsolicited update/display results (See Q05)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O37",
        display: "OPL - Population/Location-Based Laboratory Order Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O38",
        display:
          "OPR - Population/Location-Based Laboratory Order Acknowledgment Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O39",
        display: "Specimen shipment centric laboratory order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O40",
        display:
          "Specimen Shipment Centric Laboratory Order Acknowledgment Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O41",
        display: "DBC - Create Donor Record Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O42",
        display: "DBU - Update Donor Record Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "RAR",
        display: "RAR - Pharmacy administration information query response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O43",
        display:
          "General Order Message with Document Payload Acknowledgement Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "RDR",
        display: "RDR - Pharmacy dispense information query response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q04",
        display: "EQQ - Embedded query language query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O44",
        display: "Donor Registration - Minimal Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "RER",
        display: "RER - Pharmacy encoded order information query response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O45",
        display: "Donor Eligibility Observations Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "RGR",
        display: "RGR - Pharmacy dose information query response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O46",
        display: "Donor Eligiblity Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q07",
        display: "VQQ - Virtual table query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O47",
        display: "Donor Request to Collect Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q08",
        display: "SPQ - Stored procedure request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O48",
        display: "Donation Procedure Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q09",
        display: "RQQ - event replay query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O49",
        display: "Pharmacy/Treatment Dispense Request Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O50",
        display: "Pharmacy/Treatment Encoded Order Acknowledgment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O51",
        display: "OSU – Order Status Update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O52",
        display: "OSU – Order Status Update Acknowledgement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O53",
        display:
          "ORL - General Laboratory Order Acknowledgment Message (Patient Optional)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O54",
        display:
          "ORL - Laboratory Order Acknowledgment Message  – Multiple Order Per Specimen (Patient Optional)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O55",
        display:
          "ORL - Laboratory Order Acknowledgment Message  – Multiple Order Per Container of Specimen (Patient Optional)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O56",
        display:
          "ORL - Specimen Shipment Centric Laboratory Order Acknowledgment Message (Patient Optional)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O57",
        display: "OMQ- General Order Message with Document Payload",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O58",
        display:
          "ORX - General Order Message with Document Payload Acknowledgement Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "O59",
        display: "OML - Laboratory order for additional work up",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "P01",
        display: "BAR/ACK - Add patient accounts",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "P02",
        display: "BAR/ACK - Purge patient accounts",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "P03",
        display: "DFT/ACK - Post detail financial transaction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "P04",
        display: "QRY/DSP - Generate bill and A/R statements",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "P05",
        display: "BAR/ACK - Update account",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "P06",
        display: "BAR/ACK - End account",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "P07",
        display:
          "PEX - Unsolicited initial individual product experience report",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R03",
        display:
          "QRY/DSR Display-oriented results, query/unsol. update (for backward compatibility only) (Replaced by Q05)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "P08",
        display:
          "PEX - Unsolicited update individual product experience report",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "P09",
        display: "SUR - Summary product experience report",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "P10",
        display: "BAR/ACK -Transmit Ambulatory Payment  Classification(APC)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R07",
        display: "EDR - Enhanced Display Response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "P11",
        display: "DFT/ACK - Post Detail Financial Transactions - New",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R08",
        display: "TBR - Tabular Data Response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "P12",
        display: "BAR/ACK - Update Diagnosis/Procedure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PC1",
        display: "PPR - PC/ problem add",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R09",
        display: "ERP - Event Replay Response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PC2",
        display: "PPR - PC/ problem update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PC3",
        display: "PPR - PC/ problem delete",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PC4",
        display: "QRY - PC/ problem query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PC5",
        display: "PRR - PC/ problem response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PC6",
        display: "PGL - PC/ goal add",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PC7",
        display: "PGL - PC/ goal update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PC8",
        display: "PGL - PC/ goal delete",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PC9",
        display: "QRY - PC/ goal query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PCA",
        display: "PPV - PC/ goal response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PCB",
        display: "PPP - PC/ pathway (problem-oriented) add",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PCC",
        display: "PPP - PC/ pathway (problem-oriented) update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PCD",
        display: "PPP - PC/ pathway (problem-oriented) delete",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PCE",
        display: "QRY - PC/ pathway (problem-oriented) query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PCF",
        display: "PTR - PC/ pathway (problem-oriented) query response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PCG",
        display: "PPG - PC/ pathway (goal-oriented) add",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PCH",
        display: "PPG - PC/ pathway (goal-oriented) update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PCJ",
        display: "PPG - PC/ pathway (goal-oriented) delete",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PCK",
        display: "QRY - PC/ pathway (goal-oriented) query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "PCL",
        display: "PPT - PC/ pathway (goal-oriented) query response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q01",
        display: "QRY/DSR - Query sent for immediate response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q02",
        display: "QRY/QCK - Query sent for deferred response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q03",
        display: "DSR/ACK - Deferred response to a query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q05",
        display: "UDM/ACK - Unsolicited display update message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q06",
        display: "OSQ/OSR - Query for order status",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q11",
        display:
          "QBP - Query by parameter requesting an RSP segment pattern response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q13",
        display:
          "QBP - Query by parameter requesting an  RTB - tabular response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q15",
        display: "QBP - Query by parameter requesting an RDY display response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q16",
        display: "QSB - Create subscription",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q17",
        display: "QVR - Query for previous events",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q21",
        display: "QBP - Get person demographics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q22",
        display: "QBP - Find candidates",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q23",
        display: "QBP - Get corresponding identifiers",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q24",
        display: "QBP - Allocate identifiers",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q25",
        display: "QBP - Personnel Information by Segment Query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q26",
        display: "ROR - Pharmacy/treatment order response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q27",
        display: "RAR - Pharmacy/treatment administration information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q28",
        display: "RDR - Pharmacy/treatment dispense information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q29",
        display: "RER - Pharmacy/treatment encoded order information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q30",
        display: "RGR - Pharmacy/treatment dose information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q31",
        display: "QBP Query Dispense history",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q32",
        display: "Find Candidates including Visit Information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q33",
        display: "QBP - Get Donor Record Candidates",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Q34",
        display: "QBP - Get Donor Record",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R01",
        display: "ORU/ACK - Unsolicited transmission of an observation message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R02",
        display: "QRY - Query for results of observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R04",
        display:
          "ORF - Response to query; transmission of requested observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R21",
        display: "OUL - Unsolicited laboratory observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R22",
        display: "OUL - Unsolicited Specimen Oriented Observation Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R23",
        display:
          "OUL - Unsolicited Specimen Container Oriented Observation Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R24",
        display: "OUL - Unsolicited Order Oriented Observation Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R25",
        display:
          "OPU - Unsolicited Population/Location-Based Laboratory Observation Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R26",
        display: "OSM - Unsolicited Specimen Shipment Manifest Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R30",
        display:
          "ORU - Unsolicited Point-Of-Care Observation Message Without Existing Order - Place An Order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R31",
        display:
          "ORU - Unsolicited New Point-Of-Care Observation Message - Search For An Order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R32",
        display: "ORU - Unsolicited Pre-Ordered Point-Of-Care Observation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R33",
        display: "ORA - Observation Report Acknowledgement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R40",
        display: "ORU - Unsolicited Report Alarm",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R41",
        display: "Observation Report Alert Acknowledgement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R42",
        display: "ORU – Unsolicited Device Event Observation Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "R43",
        display:
          "ORU – Unsolicited Patient-Device Association Observation Message",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "ROR",
        display: "ROR - Pharmacy prescription order query response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S01",
        display: "SRM/SRR - Request new appointment booking",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S02",
        display: "SRM/SRR - Request appointment rescheduling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S03",
        display: "SRM/SRR - Request appointment modification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S04",
        display: "SRM/SRR - Request appointment cancellation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S05",
        display: "SRM/SRR - Request appointment discontinuation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S06",
        display: "SRM/SRR - Request appointment deletion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S07",
        display:
          "SRM/SRR - Request addition of service/resource on appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S08",
        display:
          "SRM/SRR - Request modification of service/resource on appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S09",
        display:
          "SRM/SRR - Request cancellation of service/resource on appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S10",
        display:
          "SRM/SRR - Request discontinuation of service/resource on appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S11",
        display:
          "SRM/SRR - Request deletion of service/resource on appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S12",
        display: "SIU/ACK - Notification of new appointment booking",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S13",
        display: "SIU/ACK - Notification of appointment rescheduling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S14",
        display: "SIU/ACK - Notification of appointment modification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S15",
        display: "SIU/ACK - Notification of appointment cancellation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S16",
        display: "SIU/ACK - Notification of appointment discontinuation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S17",
        display: "SIU/ACK - Notification of appointment deletion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S18",
        display:
          "SIU/ACK - Notification of addition of service/resource on appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S19",
        display:
          "SIU/ACK - Notification of modification of service/resource on appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S20",
        display:
          "SIU/ACK - Notification of cancellation of service/resource on appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S21",
        display:
          "SIU/ACK - Notification of discontinuation of service/resource on appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S22",
        display:
          "SIU/ACK - Notification of deletion of service/resource on appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S23",
        display: "SIU/ACK - Notification of blocked schedule time slot(s)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S24",
        display:
          'SIU/ACK - Notification of opened ("unblocked") schedule time slot(s)',
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S25",
        display: "SQM/SQR - Schedule query message and response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S26",
        display:
          "SIU/ACK Notification that patient did not show up for schedule appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S27",
        display: "SIU/ACK - Broadcast Notification of Scheduled Appointments",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S28",
        display: "SLR/SLS - Request new sterilization lot",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S29",
        display: "SLR/SLS - Request Sterilization lot deletion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S30",
        display: "STI/STS - Request item",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S31",
        display: "SDR/SDS - Request anti-microbial device data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S32",
        display: "SMD/SMS - Request anti-microbial device cycle data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S33",
        display: "STC/ACK - Notification of sterilization configuration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S34",
        display: "SLN/ACK - Notification of sterilization lot",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S35",
        display: "SLN/ACK - Notification of sterilization lot deletion",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S36",
        display: "SDN/ACK - Notification of anti-microbial device data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S37",
        display: "SCN/ACK - Notification of anti-microbial device cycle data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S38",
        display: "Containers Prepared for Specimen Collection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S39",
        display: "Specimen Collection Successful",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S40",
        display: "Specimen Collection Unsuccessful",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S41",
        display: "Specimen Departed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S42",
        display: "Specimen Arrived",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S43",
        display: "Specimen Accepted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S44",
        display: "Specimen Rejected",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S45",
        display: "Specimen Re-identified",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S46",
        display: "Specimen De-identified",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S47",
        display: "Specimen Sent to Archive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S48",
        display: "Specimen Retrieved from Archive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S49",
        display: "Specimen Disposed of",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S50",
        display:
          "Specimen Procedure Step Successful , with Derived Specimen(s)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S51",
        display: "Specimen Procedure Step Successful, no Derived Specimen(s)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "S52",
        display: "Specimen Procedure Step Unsuccessful",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "T01",
        display: "MDM/ACK - Original document notification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "T02",
        display: "MDM/ACK - Original document notification and content",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "T03",
        display: "MDM/ACK - Document status change notification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "T04",
        display: "MDM/ACK - Document status change notification and content",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "T05",
        display: "MDM/ACK - Document addendum notification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "T06",
        display: "MDM/ACK - Document addendum notification and content",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "T07",
        display: "MDM/ACK - Document edit notification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "T08",
        display: "MDM/ACK - Document edit notification and content",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "T09",
        display: "MDM/ACK - Document replacement notification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "T10",
        display: "MDM/ACK - Document replacement notification and content",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "T11",
        display: "MDM/ACK - Document cancel notification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "T12",
        display: "QRY/DOC - Document query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U01",
        display: "ESU/ACK - Automated equipment status update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U02",
        display: "ESR/ACK - Automated equipment status request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U03",
        display: "SSU/ACK - Specimen status update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U04",
        display: "SSR/ACK - specimen status request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U05",
        display: "INU/ACK  - Automated equipment inventory update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U06",
        display: "INR/ACK - Automated equipment inventory request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U07",
        display: "EAC/ACK - Automated equipment command",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U08",
        display: "EAR/ACK - Automated equipment response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U09",
        display: "EAN/ACK - Automated equipment notification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U10",
        display: "TCU/ACK - Automated equipment test code settings update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U11",
        display: "TCR/ACK - Automated equipment test code settings request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U12",
        display: "LSU/ACK - Automated equipment log/service update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U13",
        display: "LSR/ACK - Automated equipment log/service request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "U14",
        display: "INR/ACK – Automated Equipment Inventory Request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "V01",
        display: "VXQ - Query for vaccination record",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "V02",
        display:
          "VXX - Response to vaccination query returning multiple PID matches",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "V03",
        display: "VXR - Vaccination record response",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "V04",
        display: "VXU - Unsolicited vaccination record update",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "Varies",
        display:
          "MFQ/MFR - Master files query (use event same as asking for e.g., M05 - location)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "W01",
        display:
          "ORU - Waveform result, unsolicited transmission of requested information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0003",
        code: "W02",
        display: "QRF - Waveform result, response to query",
      },
    ],
  },
  {
    element: {
      id: "SubscriptionTopic.eventTrigger.resource",
      path: "SubscriptionTopic.eventTrigger.resource",
      short:
        "Data Type or Resource (reference to definition) for this trigger definition",
      definition:
        'URL of the Resource that is the focus type used in this event trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see <a href="elementdefinition-definitions.html#ElementDefinition.type.code">ElementDefinition.type.code</a>.',
      min: 1,
      max: "1",
      base: {
        path: "SubscriptionTopic.eventTrigger.resource",
        min: 1,
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
    dataPath: "root.eventTrigger.resource",
    parentDataPath: "root.eventTrigger[0]",
    basePath: "root.resource",
    baseId: "SubscriptionTopic.eventTrigger.resource",
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
      id: "SubscriptionTopic.canFilterBy",
      path: "SubscriptionTopic.canFilterBy",
      short:
        "Properties by which a Subscription can filter notifications from the SubscriptionTopic",
      definition:
        "List of properties by which Subscriptions on the SubscriptionTopic can be filtered. May be defined Search Parameters (e.g., Encounter.patient) or parameters defined within this SubscriptionTopic context (e.g., hub.event).",
      min: 0,
      max: "*",
      base: { path: "SubscriptionTopic.canFilterBy", min: 0, max: "*" },
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
    dataPath: "root.canFilterBy[0]",
    parentDataPath: "root",
    basePath: "root.canFilterBy",
    baseId: "SubscriptionTopic.canFilterBy",
    isPrimitive: false,
    childPaths: [
      "root.canFilterBy.description",
      "root.canFilterBy.resource",
      "root.canFilterBy.filterParameter",
      "root.canFilterBy.filterDefinition",
      "root.canFilterBy.modifier[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.canFilterBy.description",
      path: "SubscriptionTopic.canFilterBy.description",
      short: "Description of this filter parameter",
      definition:
        "Description of how this filtering parameter is intended to be used.",
      min: 0,
      max: "1",
      base: {
        path: "SubscriptionTopic.canFilterBy.description",
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
      isSummary: true,
    },
    dataPath: "root.canFilterBy.description",
    parentDataPath: "root.canFilterBy[0]",
    basePath: "root.description",
    baseId: "SubscriptionTopic.canFilterBy.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.canFilterBy.resource",
      path: "SubscriptionTopic.canFilterBy.resource",
      short: "URL of the triggering Resource that this filter applies to",
      definition:
        'URL of the Resource that is the type used in this filter. This is the "focus" of the topic (or one of them if there are more than one). It will be the same, a generality, or a specificity of SubscriptionTopic.resourceTrigger.resource or SubscriptionTopic.eventTrigger.resource when they are present.',
      comment:
        'URL of the Resource that is the type used in this filter. Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient. For more information, see <a href="elementdefinition-definitions.html#ElementDefinition.type.code">ElementDefinition.type.code</a>.',
      min: 0,
      max: "1",
      base: {
        path: "SubscriptionTopic.canFilterBy.resource",
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
    dataPath: "root.canFilterBy.resource",
    parentDataPath: "root.canFilterBy[0]",
    basePath: "root.resource",
    baseId: "SubscriptionTopic.canFilterBy.resource",
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
      id: "SubscriptionTopic.canFilterBy.filterParameter",
      path: "SubscriptionTopic.canFilterBy.filterParameter",
      short:
        "Human-readable and computation-friendly name for a filter parameter usable by subscriptions on this topic, via Subscription.filterBy.filterParameter",
      definition:
        'Either the canonical URL to a search parameter (like "http://hl7.org/fhir/SearchParameter/encounter-patient") or topic-defined parameter (like "hub.event") which is a label for the filter.',
      comment:
        'Chained parameters are allowed (like "patient.gender") - but can not use colons or modifiers.',
      min: 1,
      max: "1",
      base: {
        path: "SubscriptionTopic.canFilterBy.filterParameter",
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
    dataPath: "root.canFilterBy.filterParameter",
    parentDataPath: "root.canFilterBy[0]",
    basePath: "root.filterParameter",
    baseId: "SubscriptionTopic.canFilterBy.filterParameter",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.canFilterBy.filterDefinition",
      path: "SubscriptionTopic.canFilterBy.filterDefinition",
      short: "Canonical URL for a filterParameter definition",
      definition:
        'Either the canonical URL to a search parameter (like "http://hl7.org/fhir/SearchParameter/encounter-patient") or the officially-defined URI for a shared filter concept (like "http://example.org/concepts/shared-common-event").',
      comment:
        'Chained parameters are allowed (like "patient.gender") - but can not use colons or modifiers.',
      min: 0,
      max: "1",
      base: {
        path: "SubscriptionTopic.canFilterBy.filterDefinition",
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
      isSummary: true,
    },
    dataPath: "root.canFilterBy.filterDefinition",
    parentDataPath: "root.canFilterBy[0]",
    basePath: "root.filterDefinition",
    baseId: "SubscriptionTopic.canFilterBy.filterDefinition",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.canFilterBy.modifier",
      path: "SubscriptionTopic.canFilterBy.modifier",
      short:
        "= | eq | ne | gt | lt | ge | le | sa | eb | ap | above | below | in | not-in | of-type",
      definition:
        "Allowable operators to apply when determining matches (Search Modifiers).  If the filterParameter is a SearchParameter, this list of modifiers SHALL be a strict subset of the modifiers defined on that SearchParameter.",
      min: 0,
      max: "*",
      base: {
        path: "SubscriptionTopic.canFilterBy.modifier",
        min: 0,
        max: "*",
      },
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
            valueString: "SubscriptionTopicFilterBySearchModifier",
          },
        ],
        strength: "required",
        description: "Operator to apply to filter label.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/subscription-search-modifier|4.3.0",
      },
      mapping: [{ identity: "rim", map: "N/A (to add?)" }],
    },
    dataPath: "root.canFilterBy.modifier[0]",
    parentDataPath: "root.canFilterBy[0]",
    basePath: "root.modifier",
    baseId: "SubscriptionTopic.canFilterBy.modifier",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "=",
        display: "=",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "eq",
        display: "Equal",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "ne",
        display: "Not Equal",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "gt",
        display: "Greater Than",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "lt",
        display: "Less Than",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "ge",
        display: "Greater Than or Equal",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "le",
        display: "Less Than or Equal",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "sa",
        display: "Starts After",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "eb",
        display: "Ends Before",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "ap",
        display: "Approximately",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "above",
        display: "Above",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "below",
        display: "Below",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "in",
        display: "In",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "not-in",
        display: "Not In",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/subscription-search-modifier",
        code: "of-type",
        display: "Of Type",
      },
    ],
  },
  {
    element: {
      id: "SubscriptionTopic.notificationShape",
      path: "SubscriptionTopic.notificationShape",
      short:
        "Properties for describing the shape of notifications generated by this topic",
      definition:
        "List of properties to describe the shape (e.g., resources) included in notifications from this Subscription Topic.",
      min: 0,
      max: "*",
      base: { path: "SubscriptionTopic.notificationShape", min: 0, max: "*" },
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
      mapping: [{ identity: "rim", map: "N/A (to add?)" }],
    },
    dataPath: "root.notificationShape[0]",
    parentDataPath: "root",
    basePath: "root.notificationShape",
    baseId: "SubscriptionTopic.notificationShape",
    isPrimitive: false,
    childPaths: [
      "root.notificationShape.resource",
      "root.notificationShape.include[0]",
      "root.notificationShape.revInclude[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.notificationShape.resource",
      path: "SubscriptionTopic.notificationShape.resource",
      short:
        "URL of the Resource that is the focus (main) resource in a notification shape",
      definition:
        'URL of the Resource that is the type used in this shape. This is the "focus" of the topic (or one of them if there are more than one) and the root resource for this shape definition. It will be the same, a generality, or a specificity of SubscriptionTopic.resourceTrigger.resource or SubscriptionTopic.eventTrigger.resource when they are present.',
      comment:
        'URL of the Resource that is the type used in this shape. Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient. For more information, see <a href="elementdefinition-definitions.html#ElementDefinition.type.code">ElementDefinition.type.code</a>.',
      min: 1,
      max: "1",
      base: {
        path: "SubscriptionTopic.notificationShape.resource",
        min: 1,
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
      mapping: [{ identity: "rim", map: "N/A (to add?)" }],
    },
    dataPath: "root.notificationShape.resource",
    parentDataPath: "root.notificationShape[0]",
    basePath: "root.resource",
    baseId: "SubscriptionTopic.notificationShape.resource",
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
      id: "SubscriptionTopic.notificationShape.include",
      path: "SubscriptionTopic.notificationShape.include",
      short: "Include directives, rooted in the resource for this shape",
      definition:
        "Search-style _include directives, rooted in the resource for this shape. Servers SHOULD include resources listed here, if they exist and the user is authorized to receive them.  Clients SHOULD be prepared to receive these additional resources, but SHALL function properly without them.",
      min: 0,
      max: "*",
      base: {
        path: "SubscriptionTopic.notificationShape.include",
        min: 0,
        max: "*",
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
      mapping: [{ identity: "rim", map: "N/A (to add?)" }],
    },
    dataPath: "root.notificationShape.include[0]",
    parentDataPath: "root.notificationShape[0]",
    basePath: "root.include",
    baseId: "SubscriptionTopic.notificationShape.include",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic.notificationShape.revInclude",
      path: "SubscriptionTopic.notificationShape.revInclude",
      short:
        "Reverse include directives, rooted in the resource for this shape",
      definition:
        "Search-style _revinclude directives, rooted in the resource for this shape. Servers SHOULD include resources listed here, if they exist and the user is authorized to receive them.  Clients SHOULD be prepared to receive these additional resources, but SHALL function properly without them.",
      min: 0,
      max: "*",
      base: {
        path: "SubscriptionTopic.notificationShape.revInclude",
        min: 0,
        max: "*",
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
      mapping: [{ identity: "rim", map: "N/A (to add?)" }],
    },
    dataPath: "root.notificationShape.revInclude[0]",
    parentDataPath: "root.notificationShape[0]",
    basePath: "root.revInclude",
    baseId: "SubscriptionTopic.notificationShape.revInclude",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "SubscriptionTopic",
      path: "SubscriptionTopic",
      short:
        "The definition of a specific topic for triggering events within the Subscriptions framework",
      definition:
        "Describes a stream of resource state changes or events and annotated with labels useful to filter projections from this topic.",
      min: 0,
      max: "*",
      base: { path: "SubscriptionTopic", min: 0, max: "*" },
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
        { identity: "workflow", map: "Definition" },
        { identity: "rim", map: "Act[moodCode<=DEFN]" },
        { identity: "w5", map: "infrastructure.exchange" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "SubscriptionTopic",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
