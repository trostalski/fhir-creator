const data = [
  {
    element: {
      id: "List.meta",
      path: "List.meta",
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
    baseId: "List.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "List.implicitRules",
      path: "List.implicitRules",
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
    baseId: "List.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "List.language",
      path: "List.language",
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
    baseId: "List.language",
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
      id: "List.contained",
      path: "List.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/List",
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
    baseId: "List.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "List.status",
      path: "List.status",
      short: "current | retired | entered-in-error",
      definition: "Indicates the current state of this list.",
      comment:
        "This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.",
      min: 1,
      max: "1",
      base: { path: "List.status", min: 1, max: "1" },
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
            valueString: "ListStatus",
          },
        ],
        strength: "required",
        description: "The current state of the list.",
        valueSet: "http://hl7.org/fhir/ValueSet/list-status|4.3.0",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.status" },
        {
          identity: "rim",
          map: ".status[current=active;retired=obsolete;entered-in-error=nullified]",
        },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "List.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/list-status",
        code: "current",
        display: "Current",
      },
      {
        system: "http://hl7.org/fhir/list-status",
        code: "retired",
        display: "Retired",
      },
      {
        system: "http://hl7.org/fhir/list-status",
        code: "entered-in-error",
        display: "Entered In Error",
      },
    ],
  },
  {
    element: {
      id: "List.mode",
      path: "List.mode",
      short: "working | snapshot | changes",
      definition:
        "How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.",
      comment:
        "This element is labeled as a modifier because a change list must not be misunderstood as a complete list.",
      requirements:
        "Lists are used in various ways, and it must be known in what way it is safe to use them.",
      min: 1,
      max: "1",
      base: { path: "List.mode", min: 1, max: "1" },
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
        'If set to "changes", the list is considered incomplete, while the other two codes indicate the list is complete, which changes the understanding of the elements listed',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "ListMode",
          },
        ],
        strength: "required",
        description: "The processing mode that applies to this list.",
        valueSet: "http://hl7.org/fhir/ValueSet/list-mode|4.3.0",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.class" },
        {
          identity: "rim",
          map: '.outBoundRelationship[typeCode=COMP].target[classCode=OBS"].value',
        },
      ],
    },
    dataPath: "root.mode",
    parentDataPath: "root",
    basePath: "root.mode",
    baseId: "List.mode",
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
      id: "List.title",
      path: "List.title",
      short: "Descriptive name for the list",
      definition: "A label for the list assigned by the author.",
      requirements:
        "Allows customization beyond just the code identifying the kind of list.",
      min: 0,
      max: "1",
      base: { path: "List.title", min: 0, max: "1" },
      type: [{ code: "string" }],
      example: [{ label: "General", valueString: "Dr. Jane's Patients" }],
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
      mapping: [{ identity: "rim", map: ".title" }],
    },
    dataPath: "root.title",
    parentDataPath: "root",
    basePath: "root.title",
    baseId: "List.title",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "List.code",
      path: "List.code",
      short: "What the purpose of this list is",
      definition:
        "This code defines the purpose of the list - why it was created.",
      comment:
        "If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.section.code.",
      requirements:
        "Lists often contain subsets of resources rather than an exhaustive list.  The code identifies what type of subset is included.",
      min: 0,
      max: "1",
      base: { path: "List.code", min: 0, max: "1" },
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
            valueString: "ListPurpose",
          },
        ],
        strength: "example",
        description: "What the purpose of a list is.",
        valueSet: "http://hl7.org/fhir/ValueSet/list-example-codes",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.what[x]" },
        { identity: "rim", map: ".code" },
      ],
    },
    dataPath: "root.code",
    parentDataPath: "root",
    basePath: "root.code",
    baseId: "List.code",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
        code: "alerts",
        display: "Alerts",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
        code: "adverserxns",
        display: "Adverse Reactions",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
        code: "allergies",
        display: "Allergies",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
        code: "medications",
        display: "Medication List",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
        code: "problems",
        display: "Problem List",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
        code: "worklist",
        display: "Worklist",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
        code: "waiting",
        display: "Waiting List",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
        code: "protocols",
        display: "Protocols",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
        code: "plans",
        display: "Care Plans",
      },
    ],
  },
  {
    element: {
      id: "List.encounter",
      path: "List.encounter",
      short: "Context in which list created",
      definition:
        "The encounter that is the context in which this list was created.",
      min: 0,
      max: "1",
      base: { path: "List.encounter", min: 0, max: "1" },
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
      isSummary: false,
      mapping: [
        { identity: "w5", map: "FiveWs.context" },
        {
          identity: "rim",
          map: "inboundRelationship[typeCode=COMP].source[classCode=ENC, moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.encounter",
    parentDataPath: "root",
    basePath: "root.encounter",
    baseId: "List.encounter",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "List.date",
      path: "List.date",
      short: "When the list was prepared",
      definition: "The date that the list was prepared.",
      comment:
        "The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that these are current when the preparation occurs.",
      requirements:
        "Identifies how current the list is which affects relevance.",
      min: 0,
      max: "1",
      base: { path: "List.date", min: 0, max: "1" },
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
        { identity: "rim", map: ".participation[typeCode<AUT].time[type=TS]" },
      ],
    },
    dataPath: "root.date",
    parentDataPath: "root",
    basePath: "root.date",
    baseId: "List.date",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "List.orderedBy",
      path: "List.orderedBy",
      short: "What order the list has",
      definition: "What order applies to the items in the list.",
      comment:
        "Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.",
      requirements:
        "Important for presentation and rendering.  Lists may be sorted to place more important information first or to group related entries.",
      min: 0,
      max: "1",
      base: { path: "List.orderedBy", min: 0, max: "1" },
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
            valueString: "ListOrder",
          },
        ],
        strength: "preferred",
        description: "What order applies to the items in a list.",
        valueSet: "http://hl7.org/fhir/ValueSet/list-order",
      },
      mapping: [
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=COMP].sequenceNumber > 1",
        },
      ],
    },
    dataPath: "root.orderedBy",
    parentDataPath: "root",
    basePath: "root.orderedBy",
    baseId: "List.orderedBy",
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
      id: "List.entry",
      path: "List.entry",
      short: "Entries in the list",
      definition: "Entries in this list.",
      comment:
        "If there are no entries in the list, an emptyReason SHOULD be provided.",
      min: 0,
      max: "*",
      base: { path: "List.entry", min: 0, max: "*" },
      type: [{ code: "BackboneElement" }],
      condition: ["lst-1"],
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
          map: ".outboundRelationship[typeCode=COMP] or  .participation[typeCode=SBJ]",
        },
      ],
    },
    dataPath: "root.entry[0]",
    parentDataPath: "root",
    basePath: "root.entry",
    baseId: "List.entry",
    isPrimitive: false,
    childPaths: [
      "root.entry.flag",
      "root.entry.deleted",
      "root.entry.date",
      "root.entry.item",
    ],
    value: "",
  },
  {
    element: {
      id: "List.entry.deleted",
      path: "List.entry.deleted",
      short: "If this item is actually marked as deleted",
      definition: "True if this item is marked as deleted in the list.",
      comment:
        'If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.',
      requirements:
        'The flag element may contain codes that an application processing the list does not understand. However there can be no ambiguity if a list item is actually marked as "deleted".',
      min: 0,
      max: "1",
      base: { path: "List.entry.deleted", min: 0, max: "1" },
      type: [{ code: "boolean" }],
      meaningWhenMissing:
        "List items are generally only treated as deleted when this element explicitly carries a value of true. Systems SHOULD always populate this value when mode is 'changes'",
      condition: ["lst-2"],
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
        "If deleted is true, then the item included in the list isn't actually part of the list anymore",
      isSummary: false,
      mapping: [
        {
          identity: "rim",
          map: 'added: .updateMode=("A","AR")  retained: .updateMode="NC"  updated: .updateMode="R"  deleted: .updateMode="D"',
        },
      ],
    },
    dataPath: "root.entry.deleted",
    parentDataPath: "root.entry[0]",
    basePath: "root.deleted",
    baseId: "List.entry.deleted",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "List.entry.date",
      path: "List.entry.date",
      short: "When item added to list",
      definition: "When this item was added to the list.",
      requirements:
        "The date may be significant for understanding the meaning of items in a working list.",
      min: 0,
      max: "1",
      base: { path: "List.entry.date", min: 0, max: "1" },
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
      mapping: [{ identity: "rim", map: ".availabilityTime" }],
    },
    dataPath: "root.entry.date",
    parentDataPath: "root.entry[0]",
    basePath: "root.date",
    baseId: "List.entry.date",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "List.emptyReason",
      path: "List.emptyReason",
      short: "Why list is empty",
      definition: "If the list is empty, why the list is empty.",
      comment:
        "The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.",
      requirements:
        'Allows capturing things like "none exist" or "not asked" which can be important for most lists.',
      min: 0,
      max: "1",
      base: { path: "List.emptyReason", min: 0, max: "1" },
      type: [{ code: "CodeableConcept" }],
      condition: ["lst-1"],
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
            valueString: "ListEmptyReason",
          },
        ],
        strength: "preferred",
        description: "If a list is empty, why it is empty.",
        valueSet: "http://hl7.org/fhir/ValueSet/list-empty-reason",
      },
      mapping: [
        {
          identity: "rim",
          map: ".inboundRelationship[typeCode=SUBJ,code<ListEmptyReason].value[type=CD]",
        },
      ],
    },
    dataPath: "root.emptyReason",
    parentDataPath: "root",
    basePath: "root.emptyReason",
    baseId: "List.emptyReason",
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
      id: "List",
      path: "List",
      short: "A list is a curated collection of resources",
      definition: "A list is a curated collection of resources.",
      alias: ["Collection", "WorkingList", "Organizer"],
      min: 0,
      max: "*",
      base: { path: "List", min: 0, max: "*" },
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
          key: "lst-1",
          severity: "error",
          human: "A list can only have an emptyReason if it is empty",
          expression: "emptyReason.empty() or entry.empty()",
          xpath: "not(exists(f:emptyReason) and exists(f:entry))",
          source: "http://hl7.org/fhir/StructureDefinition/List",
        },
        {
          key: "lst-2",
          severity: "error",
          human:
            'The deleted flag can only be used if the mode of the list is "changes"',
          expression: "mode = 'changes' or entry.deleted.empty()",
          xpath:
            "(f:mode/@value = 'changes') or not(exists(f:entry/f:deleted))",
          source: "http://hl7.org/fhir/StructureDefinition/List",
        },
        {
          key: "lst-3",
          severity: "error",
          human:
            'An entry date can only be used if the mode of the list is "working"',
          expression: "mode = 'working' or entry.date.empty()",
          xpath: "(f:mode/@value = 'working') or not(exists(f:entry/f:date))",
          source: "http://hl7.org/fhir/StructureDefinition/List",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "rim", map: "Entity. Role, or Act" },
        { identity: "rim", map: "Act[classCode<ORG,moodCode=EVN]" },
        { identity: "w5", map: "infrastructure.documents" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "List",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;