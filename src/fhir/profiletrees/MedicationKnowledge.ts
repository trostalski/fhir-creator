const data = [
  {
    element: {
      id: "MedicationKnowledge.id",
      path: "MedicationKnowledge.id",
      short: "Logical id of this artifact",
      definition:
        "The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.",
      comment:
        "The only time that a resource does not have an id is when it is being submitted to the server using a create operation.",
      min: 0,
      max: "1",
      base: { path: "Resource.id", min: 0, max: "1" },
      type: [
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
              valueUrl: "id",
            },
          ],
          code: "http://hl7.org/fhirpath/System.String",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.id",
    parentDataPath: "root",
    basePath: "root.id",
    baseId: "MedicationKnowledge.id",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.meta",
      path: "MedicationKnowledge.meta",
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
    baseId: "MedicationKnowledge.meta",
    isPrimitive: false,
    childPaths: [
      "root.meta.versionId",
      "root.meta.lastUpdated",
      "root.meta.source",
      "root.meta.profile[0]",
      "root.meta.security[0]",
      "root.meta.tag[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "Meta.versionId",
      path: "Meta.versionId",
      short: "Version specific identifier",
      definition:
        "The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted.",
      comment:
        "The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.",
      min: 0,
      max: "1",
      base: { path: "Meta.versionId", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.meta.versionId",
    parentDataPath: "root.meta",
    basePath: "root.meta.versionId",
    baseId: "Meta.versionId",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Meta.lastUpdated",
      path: "Meta.lastUpdated",
      short: "When the resource version last changed",
      definition:
        "When the resource last changed - e.g. when the version changed.",
      comment:
        "This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant. This is equivalent to the HTTP Last-Modified and SHOULD have the same value on a [read](http.html#read) interaction.",
      min: 0,
      max: "1",
      base: { path: "Meta.lastUpdated", min: 0, max: "1" },
      type: [{ code: "instant" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.meta.lastUpdated",
    parentDataPath: "root.meta",
    basePath: "root.meta.lastUpdated",
    baseId: "Meta.lastUpdated",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Meta.source",
      path: "Meta.source",
      short: "Identifies where the resource comes from",
      definition:
        "A uri that identifies the source system of the resource. This provides a minimal amount of [Provenance](provenance.html#) information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc.",
      comment:
        "In the provenance resource, this corresponds to Provenance.entity.what[x]. The exact use of the source (and the implied Provenance.entity.role) is left to implementer discretion. Only one nominated source is allowed; for additional provenance details, a full Provenance resource should be used.  This element can be used to indicate where the current master source of a resource that has a canonical URL if the resource is no longer hosted at the canonical URL.",
      min: 0,
      max: "1",
      base: { path: "Meta.source", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.meta.source",
    parentDataPath: "root.meta",
    basePath: "root.meta.source",
    baseId: "Meta.source",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Meta.profile",
      path: "Meta.profile",
      short: "Profiles this resource claims to conform to",
      definition:
        "A list of profiles (references to [StructureDefinition](structuredefinition.html#) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url](structuredefinition-definitions.html#StructureDefinition.url).",
      comment:
        "It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.",
      min: 0,
      max: "*",
      base: { path: "Meta.profile", min: 0, max: "*" },
      type: [
        {
          code: "canonical",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
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
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.meta.profile[0]",
    parentDataPath: "root.meta",
    basePath: "root.meta.profile",
    baseId: "Meta.profile",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Meta.security",
      path: "Meta.security",
      short: "Security Labels applied to this resource",
      definition:
        "Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.",
      comment:
        "The security labels can be updated without changing the stated version of the resource. The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.",
      min: 0,
      max: "*",
      base: { path: "Meta.security", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Security Labels from the Healthcare Privacy and Security Classification System.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "SecurityLabels",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/security-labels",
      },
    },
    dataPath: "root.meta.security[0]",
    parentDataPath: "root.meta",
    basePath: "root.meta.security",
    baseId: "Meta.security",
    isPrimitive: false,
    childPaths: [
      "root.meta.security[0].system",
      "root.meta.security[0].version",
      "root.meta.security[0].code",
      "root.meta.security[0].display",
      "root.meta.security[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.meta.security[0].system",
    parentDataPath: "root.meta.security[0]",
    basePath: "root.meta.security.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.meta.security[0].version",
    parentDataPath: "root.meta.security[0]",
    basePath: "root.meta.security.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.meta.security[0].code",
    parentDataPath: "root.meta.security[0]",
    basePath: "root.meta.security.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.meta.security[0].display",
    parentDataPath: "root.meta.security[0]",
    basePath: "root.meta.security.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.meta.security[0].userSelected",
    parentDataPath: "root.meta.security[0]",
    basePath: "root.meta.security.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Meta.tag",
      path: "Meta.tag",
      short: "Tags applied to this resource",
      definition:
        "Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.",
      comment:
        "The tags can be updated without changing the stated version of the resource. The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.",
      min: 0,
      max: "*",
      base: { path: "Meta.tag", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              'Codes that represent various types of tags, commonly workflow-related; e.g. "Needs review by Dr. Jones".',
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "Tags",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/common-tags",
      },
    },
    dataPath: "root.meta.tag[0]",
    parentDataPath: "root.meta",
    basePath: "root.meta.tag",
    baseId: "Meta.tag",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/common-tags",
        code: "actionable",
        display: "Actionable",
      },
    ],
  },
  {
    element: {
      id: "MedicationKnowledge.implicitRules",
      path: "MedicationKnowledge.implicitRules",
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
    baseId: "MedicationKnowledge.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.language",
      path: "MedicationKnowledge.language",
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
    baseId: "MedicationKnowledge.language",
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
      id: "MedicationKnowledge.text",
      path: "MedicationKnowledge.text",
      short: "Text summary of the resource, for human interpretation",
      definition:
        'A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.',
      comment:
        'Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.',
      alias: ["narrative", "html", "xhtml", "display"],
      min: 0,
      max: "1",
      base: { path: "DomainResource.text", min: 0, max: "1" },
      type: [{ code: "Narrative" }],
      constraint: [
        {
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
      mapping: [{ identity: "rim", map: "Act.text?" }],
    },
    dataPath: "root.text",
    parentDataPath: "root",
    basePath: "root.text",
    baseId: "MedicationKnowledge.text",
    isPrimitive: false,
    childPaths: ["root.text.status", "root.text.div"],
    value: "",
  },
  {
    element: {
      id: "Narrative.status",
      path: "Narrative.status",
      short: "generated | extensions | additional | empty",
      definition:
        "The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.",
      min: 1,
      max: "1",
      base: { path: "Narrative.status", min: 1, max: "1" },
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
      isModifier: false,
      isSummary: false,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString: "The status of a resource narrative.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "NarrativeStatus",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/narrative-status|4.3.0",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.text.status",
    parentDataPath: "root.text",
    basePath: "root.text.status",
    baseId: "Narrative.status",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/narrative-status",
        code: "generated",
        display: "Generated",
      },
      {
        system: "http://hl7.org/fhir/narrative-status",
        code: "extensions",
        display: "Extensions",
      },
      {
        system: "http://hl7.org/fhir/narrative-status",
        code: "additional",
        display: "Additional",
      },
      {
        system: "http://hl7.org/fhir/narrative-status",
        code: "empty",
        display: "Empty",
      },
    ],
  },
  {
    element: {
      id: "Narrative.div",
      path: "Narrative.div",
      short: "Limited xhtml content",
      definition:
        "The actual narrative content, a stripped down version of XHTML.",
      comment:
        "The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.",
      min: 1,
      max: "1",
      base: { path: "Narrative.div", min: 1, max: "1" },
      type: [{ code: "xhtml" }],
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
          key: "txt-1",
          severity: "error",
          human:
            "The narrative SHALL contain only the basic html formatting elements and attributes described in chapters 7-11 (except section 4 of chapter 9) and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained style attributes",
          expression: "htmlChecks()",
          xpath:
            "not(descendant-or-self::*[not(local-name(.)=('a', 'abbr', 'acronym', 'b', 'big', 'blockquote', 'br', 'caption', 'cite', 'code', 'col', 'colgroup', 'dd', 'dfn', 'div', 'dl', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'i', 'img', 'li', 'ol', 'p', 'pre', 'q', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'tt', 'ul', 'var'))]) and not(descendant-or-self::*/@*[not(name(.)=('abbr', 'accesskey', 'align', 'alt', 'axis', 'bgcolor', 'border', 'cellhalign', 'cellpadding', 'cellspacing', 'cellvalign', 'char', 'charoff', 'charset', 'cite', 'class', 'colspan', 'compact', 'coords', 'dir', 'frame', 'headers', 'height', 'href', 'hreflang', 'hspace', 'id', 'lang', 'longdesc', 'name', 'nowrap', 'rel', 'rev', 'rowspan', 'rules', 'scope', 'shape', 'span', 'src', 'start', 'style', 'summary', 'tabindex', 'title', 'type', 'valign', 'value', 'vspace', 'width'))])",
          source: "http://hl7.org/fhir/StructureDefinition/Narrative",
        },
        {
          key: "txt-2",
          severity: "error",
          human: "The narrative SHALL have some non-whitespace content",
          expression: "htmlChecks()",
          xpath:
            "descendant::text()[normalize-space(.)!=''] or descendant::h:img[@src]",
          source: "http://hl7.org/fhir/StructureDefinition/Narrative",
        },
      ],
      isModifier: false,
      isSummary: false,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.text.div",
    parentDataPath: "root.text",
    basePath: "root.text.div",
    baseId: "Narrative.div",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.code",
      path: "MedicationKnowledge.code",
      short: "Code that identifies this medication",
      definition:
        "A code that specifies this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.",
      comment:
        'Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).',
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.code", min: 0, max: "1" },
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
            valueString: "MedicationFormalRepresentation",
          },
        ],
        strength: "example",
        description: "A coded concept that defines the type of a medication.",
        valueSet: "http://hl7.org/fhir/ValueSet/medication-codes",
      },
      mapping: [
        {
          identity: "script10.6",
          map: "coding.code = //element(*,MedicationType)/DrugCoded/ProductCode\r\rcoding.system = //element(*,MedicationType)/DrugCoded/ProductCodeQualifier\r\rcoding.display = //element(*,MedicationType)/DrugDescription",
        },
        { identity: "w5", map: "FiveWs.class" },
        {
          identity: "v2",
          map: "RXO-1.1-Requested Give Code.code / RXE-2.1-Give Code.code / RXD-2.1-Dispense/Give Code.code / RXG-4.1-Give Code.code /RXA-5.1-Administered Code.code / RXC-2.1 Component Code",
        },
        { identity: "rim", map: ".code" },
      ],
    },
    dataPath: "root.code",
    parentDataPath: "root",
    basePath: "root.code",
    baseId: "MedicationKnowledge.code",
    isPrimitive: false,
    childPaths: ["root.code.coding[0]", "root.code.text"],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.code.coding[0]",
    parentDataPath: "root.code",
    basePath: "root.code.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.code.coding[0].system",
      "root.code.coding[0].version",
      "root.code.coding[0].code",
      "root.code.coding[0].display",
      "root.code.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.code.coding[0].system",
    parentDataPath: "root.code.coding[0]",
    basePath: "root.code.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.code.coding[0].version",
    parentDataPath: "root.code.coding[0]",
    basePath: "root.code.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.code.coding[0].code",
    parentDataPath: "root.code.coding[0]",
    basePath: "root.code.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.code.coding[0].display",
    parentDataPath: "root.code.coding[0]",
    basePath: "root.code.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.code.coding[0].userSelected",
    parentDataPath: "root.code.coding[0]",
    basePath: "root.code.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.code.text",
    parentDataPath: "root.code",
    basePath: "root.code.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.status",
      path: "MedicationKnowledge.status",
      short: "active | inactive | entered-in-error",
      definition:
        "A code to indicate if the medication is in active use.  The status refers to the validity about the information of the medication and not to its medicinal properties.",
      comment:
        'This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.',
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.status", min: 0, max: "1" },
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
        "This element changes the interpretation of all descriptive attributes.",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationKnowledgeStatus",
          },
        ],
        strength: "required",
        description:
          "A coded concept defining if the medication is in active use.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/medicationknowledge-status|4.3.0",
      },
      mapping: [{ identity: "rim", map: ".statusCode" }],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "MedicationKnowledge.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-status",
        code: "active",
        display: "Active",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-status",
        code: "inactive",
        display: "Inactive",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-status",
        code: "entered-in-error",
        display: "Entered in Error",
      },
    ],
  },
  {
    element: {
      id: "MedicationKnowledge.manufacturer",
      path: "MedicationKnowledge.manufacturer",
      short: "Manufacturer of the item",
      definition:
        "Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.manufacturer", min: 0, max: "1" },
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
      isSummary: true,
      mapping: [
        { identity: "script10.6", map: "no mapping" },
        { identity: "w5", map: "FiveWs.actor" },
        {
          identity: "v2",
          map: "RXD-20-Substance Manufacturer Name / RXG-21-Substance Manufacturer Name / RXA-17-Substance Manufacturer Name",
        },
        { identity: "rim", map: ".player.scopingRole[typeCode=MANU].scoper" },
      ],
    },
    dataPath: "root.manufacturer",
    parentDataPath: "root",
    basePath: "root.manufacturer",
    baseId: "MedicationKnowledge.manufacturer",
    isPrimitive: false,
    childPaths: [
      "root.manufacturer.reference",
      "root.manufacturer.type",
      "root.manufacturer.display",
    ],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.manufacturer.reference",
    parentDataPath: "root.manufacturer",
    basePath: "root.manufacturer.reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.manufacturer.type",
    parentDataPath: "root.manufacturer",
    basePath: "root.manufacturer.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
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
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.manufacturer.display",
    parentDataPath: "root.manufacturer",
    basePath: "root.manufacturer.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.doseForm",
      path: "MedicationKnowledge.doseForm",
      short: "powder | tablets | capsule +",
      definition: "Describes the form of the item.  Powder; tablets; capsule.",
      comment:
        "When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.doseForm", min: 0, max: "1" },
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
            valueString: "MedicationForm",
          },
        ],
        strength: "example",
        description: "A coded concept defining the form of a medication.",
        valueSet: "http://hl7.org/fhir/ValueSet/medication-form-codes",
      },
      mapping: [
        {
          identity: "script10.6",
          map: "coding.code =  //element(*,DrugCodedType)/FormCode\r\rcoding.system = //element(*,DrugCodedType)/FormSourceCode",
        },
        {
          identity: "v2",
          map: "RXO-5-Requested Dosage Form / RXE-6-Give Dosage Form / RXD-6-Actual Dosage Form / RXG-8-Give Dosage Form / RXA-8-Administered Dosage Form",
        },
        { identity: "rim", map: ".formCode" },
      ],
    },
    dataPath: "root.doseForm",
    parentDataPath: "root",
    basePath: "root.doseForm",
    baseId: "MedicationKnowledge.doseForm",
    isPrimitive: false,
    childPaths: ["root.doseForm.coding[0]", "root.doseForm.text"],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.doseForm.coding[0]",
    parentDataPath: "root.doseForm",
    basePath: "root.doseForm.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.doseForm.coding[0].system",
      "root.doseForm.coding[0].version",
      "root.doseForm.coding[0].code",
      "root.doseForm.coding[0].display",
      "root.doseForm.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.doseForm.coding[0].system",
    parentDataPath: "root.doseForm.coding[0]",
    basePath: "root.doseForm.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.doseForm.coding[0].version",
    parentDataPath: "root.doseForm.coding[0]",
    basePath: "root.doseForm.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.doseForm.coding[0].code",
    parentDataPath: "root.doseForm.coding[0]",
    basePath: "root.doseForm.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.doseForm.coding[0].display",
    parentDataPath: "root.doseForm.coding[0]",
    basePath: "root.doseForm.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.doseForm.coding[0].userSelected",
    parentDataPath: "root.doseForm.coding[0]",
    basePath: "root.doseForm.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.doseForm.text",
    parentDataPath: "root.doseForm",
    basePath: "root.doseForm.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.amount",
      path: "MedicationKnowledge.amount",
      short: "Amount of drug in package",
      definition:
        "Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).",
      comment:
        "This is the quantity of medication in a package.  To specify the strength of the medication, the Ingredient.strength attribute is used.",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.amount", min: 0, max: "1" },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
      mapping: [{ identity: "rim", map: ".quantity" }],
    },
    dataPath: "root.amount",
    parentDataPath: "root",
    basePath: "root.amount",
    baseId: "MedicationKnowledge.amount",
    isPrimitive: false,
    childPaths: [
      "root.amount.value",
      "root.amount.comparator",
      "root.amount.unit",
      "root.amount.system",
      "root.amount.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath: "root.amount.value",
    parentDataPath: "root.amount",
    basePath: "root.amount.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath: "root.amount.comparator",
    parentDataPath: "root.amount",
    basePath: "root.amount.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath: "root.amount.unit",
    parentDataPath: "root.amount",
    basePath: "root.amount.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath: "root.amount.system",
    parentDataPath: "root.amount",
    basePath: "root.amount.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath: "root.amount.code",
    parentDataPath: "root.amount",
    basePath: "root.amount.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.synonym",
      path: "MedicationKnowledge.synonym",
      short: "Additional names for a medication",
      definition:
        "Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.synonym", min: 0, max: "*" },
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
    dataPath: "root.synonym[0]",
    parentDataPath: "root",
    basePath: "root.synonym",
    baseId: "MedicationKnowledge.synonym",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.relatedMedicationKnowledge",
      path: "MedicationKnowledge.relatedMedicationKnowledge",
      short: "Associated or related medication information",
      definition: "Associated or related knowledge about a medication.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.relatedMedicationKnowledge",
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
    dataPath: "root.relatedMedicationKnowledge[0]",
    parentDataPath: "root",
    basePath: "root.relatedMedicationKnowledge",
    baseId: "MedicationKnowledge.relatedMedicationKnowledge",
    isPrimitive: false,
    childPaths: [
      "root.relatedMedicationKnowledge.type",
      "root.relatedMedicationKnowledge.reference[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.relatedMedicationKnowledge.type",
      path: "MedicationKnowledge.relatedMedicationKnowledge.type",
      short: "Category of medicationKnowledge",
      definition:
        "The category of the associated medication knowledge reference.",
      min: 1,
      max: "1",
      base: {
        path: "MedicationKnowledge.relatedMedicationKnowledge.type",
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
    },
    dataPath: "root.relatedMedicationKnowledge.type",
    parentDataPath: "root.relatedMedicationKnowledge[0]",
    basePath: "root.type",
    baseId: "MedicationKnowledge.relatedMedicationKnowledge.type",
    isPrimitive: false,
    childPaths: [
      "root.relatedMedicationKnowledge.type.coding[0]",
      "root.relatedMedicationKnowledge.type.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.relatedMedicationKnowledge.type.coding[0]",
    parentDataPath: "root.relatedMedicationKnowledge.type",
    basePath: "root.type.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.relatedMedicationKnowledge.type.coding[0].system",
      "root.relatedMedicationKnowledge.type.coding[0].version",
      "root.relatedMedicationKnowledge.type.coding[0].code",
      "root.relatedMedicationKnowledge.type.coding[0].display",
      "root.relatedMedicationKnowledge.type.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.relatedMedicationKnowledge.type.coding[0].system",
    parentDataPath: "root.relatedMedicationKnowledge.type.coding[0]",
    basePath: "root.type.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.relatedMedicationKnowledge.type.coding[0].version",
    parentDataPath: "root.relatedMedicationKnowledge.type.coding[0]",
    basePath: "root.type.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.relatedMedicationKnowledge.type.coding[0].code",
    parentDataPath: "root.relatedMedicationKnowledge.type.coding[0]",
    basePath: "root.type.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.relatedMedicationKnowledge.type.coding[0].display",
    parentDataPath: "root.relatedMedicationKnowledge.type.coding[0]",
    basePath: "root.type.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.relatedMedicationKnowledge.type.coding[0].userSelected",
    parentDataPath: "root.relatedMedicationKnowledge.type.coding[0]",
    basePath: "root.type.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.relatedMedicationKnowledge.type.text",
    parentDataPath: "root.relatedMedicationKnowledge.type",
    basePath: "root.type.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.relatedMedicationKnowledge.reference",
      path: "MedicationKnowledge.relatedMedicationKnowledge.reference",
      short:
        "Associated documentation about the associated medication knowledge",
      definition:
        "Associated documentation about the associated medication knowledge.",
      min: 1,
      max: "*",
      base: {
        path: "MedicationKnowledge.relatedMedicationKnowledge.reference",
        min: 1,
        max: "*",
      },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/MedicationKnowledge",
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
    dataPath: "root.relatedMedicationKnowledge.reference[0]",
    parentDataPath: "root.relatedMedicationKnowledge[0]",
    basePath: "root.reference",
    baseId: "MedicationKnowledge.relatedMedicationKnowledge.reference",
    isPrimitive: false,
    childPaths: [
      "root.relatedMedicationKnowledge.reference[0].reference",
      "root.relatedMedicationKnowledge.reference[0].type",
      "root.relatedMedicationKnowledge.reference[0].display",
    ],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.relatedMedicationKnowledge.reference[0].reference",
    parentDataPath: "root.relatedMedicationKnowledge.reference[0]",
    basePath: "root.reference.reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.relatedMedicationKnowledge.reference[0].type",
    parentDataPath: "root.relatedMedicationKnowledge.reference[0]",
    basePath: "root.reference.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
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
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.relatedMedicationKnowledge.reference[0].display",
    parentDataPath: "root.relatedMedicationKnowledge.reference[0]",
    basePath: "root.reference.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.associatedMedication",
      path: "MedicationKnowledge.associatedMedication",
      short: "A medication resource that is associated with this medication",
      definition:
        "Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.associatedMedication",
        min: 0,
        max: "*",
      },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Medication"],
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
    dataPath: "root.associatedMedication[0]",
    parentDataPath: "root",
    basePath: "root.associatedMedication",
    baseId: "MedicationKnowledge.associatedMedication",
    isPrimitive: false,
    childPaths: [
      "root.associatedMedication[0].reference",
      "root.associatedMedication[0].type",
      "root.associatedMedication[0].display",
    ],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.associatedMedication[0].reference",
    parentDataPath: "root.associatedMedication[0]",
    basePath: "root.associatedMedication.reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.associatedMedication[0].type",
    parentDataPath: "root.associatedMedication[0]",
    basePath: "root.associatedMedication.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
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
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.associatedMedication[0].display",
    parentDataPath: "root.associatedMedication[0]",
    basePath: "root.associatedMedication.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.productType",
      path: "MedicationKnowledge.productType",
      short: "Category of the medication or product",
      definition:
        "Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.productType", min: 0, max: "*" },
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
    },
    dataPath: "root.productType[0]",
    parentDataPath: "root",
    basePath: "root.productType",
    baseId: "MedicationKnowledge.productType",
    isPrimitive: false,
    childPaths: ["root.productType[0].coding[0]", "root.productType[0].text"],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.productType[0].coding[0]",
    parentDataPath: "root.productType[0]",
    basePath: "root.productType.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.productType[0].coding[0].system",
      "root.productType[0].coding[0].version",
      "root.productType[0].coding[0].code",
      "root.productType[0].coding[0].display",
      "root.productType[0].coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.productType[0].coding[0].system",
    parentDataPath: "root.productType[0].coding[0]",
    basePath: "root.productType.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.productType[0].coding[0].version",
    parentDataPath: "root.productType[0].coding[0]",
    basePath: "root.productType.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.productType[0].coding[0].code",
    parentDataPath: "root.productType[0].coding[0]",
    basePath: "root.productType.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.productType[0].coding[0].display",
    parentDataPath: "root.productType[0].coding[0]",
    basePath: "root.productType.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.productType[0].coding[0].userSelected",
    parentDataPath: "root.productType[0].coding[0]",
    basePath: "root.productType.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.productType[0].text",
    parentDataPath: "root.productType[0]",
    basePath: "root.productType.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.monograph",
      path: "MedicationKnowledge.monograph",
      short: "Associated documentation about the medication",
      definition: "Associated documentation about the medication.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.monograph", min: 0, max: "*" },
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
    dataPath: "root.monograph[0]",
    parentDataPath: "root",
    basePath: "root.monograph",
    baseId: "MedicationKnowledge.monograph",
    isPrimitive: false,
    childPaths: ["root.monograph.type", "root.monograph.source"],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.monograph.type",
      path: "MedicationKnowledge.monograph.type",
      short: "The category of medication document",
      definition:
        "The category of documentation about the medication. (e.g. professional monograph, patient education monograph).",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.monograph.type", min: 0, max: "1" },
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
    },
    dataPath: "root.monograph.type",
    parentDataPath: "root.monograph[0]",
    basePath: "root.type",
    baseId: "MedicationKnowledge.monograph.type",
    isPrimitive: false,
    childPaths: ["root.monograph.type.coding[0]", "root.monograph.type.text"],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.monograph.type.coding[0]",
    parentDataPath: "root.monograph.type",
    basePath: "root.type.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.monograph.type.coding[0].system",
      "root.monograph.type.coding[0].version",
      "root.monograph.type.coding[0].code",
      "root.monograph.type.coding[0].display",
      "root.monograph.type.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.monograph.type.coding[0].system",
    parentDataPath: "root.monograph.type.coding[0]",
    basePath: "root.type.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.monograph.type.coding[0].version",
    parentDataPath: "root.monograph.type.coding[0]",
    basePath: "root.type.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.monograph.type.coding[0].code",
    parentDataPath: "root.monograph.type.coding[0]",
    basePath: "root.type.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.monograph.type.coding[0].display",
    parentDataPath: "root.monograph.type.coding[0]",
    basePath: "root.type.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.monograph.type.coding[0].userSelected",
    parentDataPath: "root.monograph.type.coding[0]",
    basePath: "root.type.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.monograph.type.text",
    parentDataPath: "root.monograph.type",
    basePath: "root.type.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.monograph.source",
      path: "MedicationKnowledge.monograph.source",
      short: "Associated documentation about the medication",
      definition: "Associated documentation about the medication.",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.monograph.source", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/DocumentReference",
            "http://hl7.org/fhir/StructureDefinition/Media",
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
    dataPath: "root.monograph.source",
    parentDataPath: "root.monograph[0]",
    basePath: "root.source",
    baseId: "MedicationKnowledge.monograph.source",
    isPrimitive: false,
    childPaths: [
      "root.monograph.source.reference",
      "root.monograph.source.type",
      "root.monograph.source.display",
    ],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.monograph.source.reference",
    parentDataPath: "root.monograph.source",
    basePath: "root.source.reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.monograph.source.type",
    parentDataPath: "root.monograph.source",
    basePath: "root.source.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
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
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.monograph.source.display",
    parentDataPath: "root.monograph.source",
    basePath: "root.source.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.ingredient",
      path: "MedicationKnowledge.ingredient",
      short: "Active or inactive ingredient",
      definition:
        "Identifies a particular constituent of interest in the product.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.ingredient", min: 0, max: "*" },
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
    dataPath: "root.ingredient[0]",
    parentDataPath: "root",
    basePath: "root.ingredient",
    baseId: "MedicationKnowledge.ingredient",
    isPrimitive: false,
    childPaths: [
      "root.ingredient.item[x]",
      "root.ingredient.isActive",
      "root.ingredient.strength",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.ingredient.item[x]",
      path: "MedicationKnowledge.ingredient.item[x]",
      short: "Medication(s) or substance(s) contained in the medication",
      definition:
        "The actual ingredient - either a substance (simple ingredient) or another medication.",
      min: 1,
      max: "1",
      base: {
        path: "MedicationKnowledge.ingredient.item[x]",
        min: 1,
        max: "1",
      },
      type: [
        { code: "CodeableConcept" },
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Substance"],
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
        {
          identity: "script10.6",
          map: "coding.code = //element(*,MedicationType)/DrugCoded/ProductCode\r\rcoding.system = //element(*,MedicationType)/DrugCoded/ProductCodeQualifier\r\rcoding.display = //element(*,MedicationType)/DrugDescription",
        },
        {
          identity: "v2",
          map: "RXC-2-Component Code  if medication: RXO-1-Requested Give Code / RXE-2-Give Code / RXD-2-Dispense/Give Code / RXG-4-Give Code / RXA-5-Administered Code",
        },
        { identity: "rim", map: ".player" },
      ],
    },
    dataPath: "root.ingredient.item[x]",
    parentDataPath: "root.ingredient[0]",
    basePath: "root.item[x]",
    baseId: "MedicationKnowledge.ingredient.item[x]",
    isPrimitive: false,
    childPaths: [
      "root.ingredient.itemCodeableConcept.coding[0]",
      "root.ingredient.itemCodeableConcept.text",
      "root.ingredient.itemReference.reference",
      "root.ingredient.itemReference.type",
      "root.ingredient.itemReference.display",
    ],
    multiTypeType: "CodeableConcept",
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.ingredient.itemCodeableConcept.coding[0]",
    parentDataPath: "root.ingredient.item[x]",
    basePath: "root.item[x].coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.ingredient.itemCodeableConcept.coding[0].system",
      "root.ingredient.itemCodeableConcept.coding[0].version",
      "root.ingredient.itemCodeableConcept.coding[0].code",
      "root.ingredient.itemCodeableConcept.coding[0].display",
      "root.ingredient.itemCodeableConcept.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.ingredient.itemCodeableConcept.coding[0].system",
    parentDataPath: "root.ingredient.itemCodeableConcept.coding[0]",
    basePath: "root.item[x].coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.ingredient.itemCodeableConcept.coding[0].version",
    parentDataPath: "root.ingredient.itemCodeableConcept.coding[0]",
    basePath: "root.item[x].coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.ingredient.itemCodeableConcept.coding[0].code",
    parentDataPath: "root.ingredient.itemCodeableConcept.coding[0]",
    basePath: "root.item[x].coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.ingredient.itemCodeableConcept.coding[0].display",
    parentDataPath: "root.ingredient.itemCodeableConcept.coding[0]",
    basePath: "root.item[x].coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.ingredient.itemCodeableConcept.coding[0].userSelected",
    parentDataPath: "root.ingredient.itemCodeableConcept.coding[0]",
    basePath: "root.item[x].coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.ingredient.itemCodeableConcept.text",
    parentDataPath: "root.ingredient.item[x]",
    basePath: "root.item[x].text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.ingredient.itemReference.reference",
    parentDataPath: "root.ingredient.item[x]",
    basePath: "root.item[x].reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.ingredient.itemReference.type",
    parentDataPath: "root.ingredient.item[x]",
    basePath: "root.item[x].type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
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
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.ingredient.itemReference.display",
    parentDataPath: "root.ingredient.item[x]",
    basePath: "root.item[x].display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.ingredient.isActive",
      path: "MedicationKnowledge.ingredient.isActive",
      short: "Active ingredient indicator",
      definition:
        "Indication of whether this ingredient affects the therapeutic action of the drug.",
      requirements:
        "True indicates that the ingredient affects the therapeutic action of the drug (i.e. active). \rFalse indicates that the ingredient does not affect the therapeutic action of the drug (i.e. inactive).",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.ingredient.isActive",
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
      mapping: [{ identity: "rim", map: "NA" }],
    },
    dataPath: "root.ingredient.isActive",
    parentDataPath: "root.ingredient[0]",
    basePath: "root.isActive",
    baseId: "MedicationKnowledge.ingredient.isActive",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.ingredient.strength",
      path: "MedicationKnowledge.ingredient.strength",
      short: "Quantity of ingredient present",
      definition:
        "Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.ingredient.strength",
        min: 0,
        max: "1",
      },
      type: [{ code: "Ratio" }],
      constraint: [
        {
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
        { identity: "script10.6", map: "//element(*,DrugCodedType)/Strength" },
        {
          identity: "v2",
          map: "RXC-3-Component Amount & RXC-4-Component Units  if medication: RXO-2-Requested Give Amount - Minimum & RXO-4-Requested Give Units / RXO-3-Requested Give Amount - Maximum & RXO-4-Requested Give Units / RXO-11-Requested Dispense Amount & RXO-12-Requested Dispense Units / RXE-3-Give Amount - Minimum & RXE-5-Give Units / RXE-4-Give Amount - Maximum & RXE-5-Give Units / RXE-10-Dispense Amount & RXE-10-Dispense Units",
        },
        { identity: "rim", map: ".quantity" },
      ],
    },
    dataPath: "root.ingredient.strength",
    parentDataPath: "root.ingredient[0]",
    basePath: "root.strength",
    baseId: "MedicationKnowledge.ingredient.strength",
    isPrimitive: false,
    childPaths: [
      "root.ingredient.strength.numerator",
      "root.ingredient.strength.denominator",
    ],
    value: "",
  },
  {
    element: {
      id: "Ratio.numerator",
      path: "Ratio.numerator",
      short: "Numerator value",
      definition: "The value of the numerator.",
      min: 0,
      max: "1",
      base: { path: "Ratio.numerator", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: ".numerator" }],
    },
    dataPath: "root.ingredient.strength.numerator",
    parentDataPath: "root.ingredient.strength",
    basePath: "root.strength.numerator",
    baseId: "Ratio.numerator",
    isPrimitive: false,
    childPaths: [
      "root.ingredient.strength.numerator.value",
      "root.ingredient.strength.numerator.comparator",
      "root.ingredient.strength.numerator.unit",
      "root.ingredient.strength.numerator.system",
      "root.ingredient.strength.numerator.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath: "root.ingredient.strength.numerator.value",
    parentDataPath: "root.ingredient.strength.numerator",
    basePath: "root.strength.numerator.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath: "root.ingredient.strength.numerator.comparator",
    parentDataPath: "root.ingredient.strength.numerator",
    basePath: "root.strength.numerator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath: "root.ingredient.strength.numerator.unit",
    parentDataPath: "root.ingredient.strength.numerator",
    basePath: "root.strength.numerator.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath: "root.ingredient.strength.numerator.system",
    parentDataPath: "root.ingredient.strength.numerator",
    basePath: "root.strength.numerator.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath: "root.ingredient.strength.numerator.code",
    parentDataPath: "root.ingredient.strength.numerator",
    basePath: "root.strength.numerator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ratio.denominator",
      path: "Ratio.denominator",
      short: "Denominator value",
      definition: "The value of the denominator.",
      min: 0,
      max: "1",
      base: { path: "Ratio.denominator", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: ".denominator" }],
    },
    dataPath: "root.ingredient.strength.denominator",
    parentDataPath: "root.ingredient.strength",
    basePath: "root.strength.denominator",
    baseId: "Ratio.denominator",
    isPrimitive: false,
    childPaths: [
      "root.ingredient.strength.denominator.value",
      "root.ingredient.strength.denominator.comparator",
      "root.ingredient.strength.denominator.unit",
      "root.ingredient.strength.denominator.system",
      "root.ingredient.strength.denominator.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath: "root.ingredient.strength.denominator.value",
    parentDataPath: "root.ingredient.strength.denominator",
    basePath: "root.strength.denominator.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath: "root.ingredient.strength.denominator.comparator",
    parentDataPath: "root.ingredient.strength.denominator",
    basePath: "root.strength.denominator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath: "root.ingredient.strength.denominator.unit",
    parentDataPath: "root.ingredient.strength.denominator",
    basePath: "root.strength.denominator.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath: "root.ingredient.strength.denominator.system",
    parentDataPath: "root.ingredient.strength.denominator",
    basePath: "root.strength.denominator.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath: "root.ingredient.strength.denominator.code",
    parentDataPath: "root.ingredient.strength.denominator",
    basePath: "root.strength.denominator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.preparationInstruction",
      path: "MedicationKnowledge.preparationInstruction",
      short: "The instructions for preparing the medication",
      definition: "The instructions for preparing the medication.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.preparationInstruction",
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
    dataPath: "root.preparationInstruction",
    parentDataPath: "root",
    basePath: "root.preparationInstruction",
    baseId: "MedicationKnowledge.preparationInstruction",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.intendedRoute",
      path: "MedicationKnowledge.intendedRoute",
      short: "The intended or approved route of administration",
      definition: "The intended or approved route of administration.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.intendedRoute", min: 0, max: "*" },
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
            valueString: "MedicationRoute",
          },
        ],
        strength: "example",
        description:
          "A coded concept defining the intended route of administration.",
        valueSet: "http://hl7.org/fhir/ValueSet/route-codes",
      },
    },
    dataPath: "root.intendedRoute[0]",
    parentDataPath: "root",
    basePath: "root.intendedRoute",
    baseId: "MedicationKnowledge.intendedRoute",
    isPrimitive: false,
    childPaths: [
      "root.intendedRoute[0].coding[0]",
      "root.intendedRoute[0].text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.intendedRoute[0].coding[0]",
    parentDataPath: "root.intendedRoute[0]",
    basePath: "root.intendedRoute.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.intendedRoute[0].coding[0].system",
      "root.intendedRoute[0].coding[0].version",
      "root.intendedRoute[0].coding[0].code",
      "root.intendedRoute[0].coding[0].display",
      "root.intendedRoute[0].coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.intendedRoute[0].coding[0].system",
    parentDataPath: "root.intendedRoute[0].coding[0]",
    basePath: "root.intendedRoute.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.intendedRoute[0].coding[0].version",
    parentDataPath: "root.intendedRoute[0].coding[0]",
    basePath: "root.intendedRoute.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.intendedRoute[0].coding[0].code",
    parentDataPath: "root.intendedRoute[0].coding[0]",
    basePath: "root.intendedRoute.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.intendedRoute[0].coding[0].display",
    parentDataPath: "root.intendedRoute[0].coding[0]",
    basePath: "root.intendedRoute.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.intendedRoute[0].coding[0].userSelected",
    parentDataPath: "root.intendedRoute[0].coding[0]",
    basePath: "root.intendedRoute.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.intendedRoute[0].text",
    parentDataPath: "root.intendedRoute[0]",
    basePath: "root.intendedRoute.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.cost",
      path: "MedicationKnowledge.cost",
      short: "The pricing of the medication",
      definition: "The price of the medication.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.cost", min: 0, max: "*" },
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
    dataPath: "root.cost[0]",
    parentDataPath: "root",
    basePath: "root.cost",
    baseId: "MedicationKnowledge.cost",
    isPrimitive: false,
    childPaths: ["root.cost.type", "root.cost.source", "root.cost.cost"],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.cost.type",
      path: "MedicationKnowledge.cost.type",
      short: "The category of the cost information",
      definition:
        "The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost.",
      min: 1,
      max: "1",
      base: { path: "MedicationKnowledge.cost.type", min: 1, max: "1" },
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
    },
    dataPath: "root.cost.type",
    parentDataPath: "root.cost[0]",
    basePath: "root.type",
    baseId: "MedicationKnowledge.cost.type",
    isPrimitive: false,
    childPaths: ["root.cost.type.coding[0]", "root.cost.type.text"],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.cost.type.coding[0]",
    parentDataPath: "root.cost.type",
    basePath: "root.type.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.cost.type.coding[0].system",
      "root.cost.type.coding[0].version",
      "root.cost.type.coding[0].code",
      "root.cost.type.coding[0].display",
      "root.cost.type.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.cost.type.coding[0].system",
    parentDataPath: "root.cost.type.coding[0]",
    basePath: "root.type.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.cost.type.coding[0].version",
    parentDataPath: "root.cost.type.coding[0]",
    basePath: "root.type.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.cost.type.coding[0].code",
    parentDataPath: "root.cost.type.coding[0]",
    basePath: "root.type.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.cost.type.coding[0].display",
    parentDataPath: "root.cost.type.coding[0]",
    basePath: "root.type.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.cost.type.coding[0].userSelected",
    parentDataPath: "root.cost.type.coding[0]",
    basePath: "root.type.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.cost.type.text",
    parentDataPath: "root.cost.type",
    basePath: "root.type.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.cost.source",
      path: "MedicationKnowledge.cost.source",
      short: "The source or owner for the price information",
      definition:
        "The source or owner that assigns the price to the medication.",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.cost.source", min: 0, max: "1" },
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
    dataPath: "root.cost.source",
    parentDataPath: "root.cost[0]",
    basePath: "root.source",
    baseId: "MedicationKnowledge.cost.source",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.cost.cost",
      path: "MedicationKnowledge.cost.cost",
      short: "The price of the medication",
      definition: "The price of the medication.",
      min: 1,
      max: "1",
      base: { path: "MedicationKnowledge.cost.cost", min: 1, max: "1" },
      type: [{ code: "Money" }],
      constraint: [
        {
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
    dataPath: "root.cost.cost",
    parentDataPath: "root.cost[0]",
    basePath: "root.cost",
    baseId: "MedicationKnowledge.cost.cost",
    isPrimitive: false,
    childPaths: ["root.cost.cost.value", "root.cost.cost.currency"],
    value: "",
  },
  {
    element: {
      id: "Money.value",
      path: "Money.value",
      short: "Numerical value (with implicit precision)",
      definition: "Numerical value (with implicit precision).",
      comment:
        "Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "The amount of the currency. The value includes an implicit precision in the presentation of the value.",
      min: 0,
      max: "1",
      base: { path: "Money.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "v2", map: "MO.Value" }],
    },
    dataPath: "root.cost.cost.value",
    parentDataPath: "root.cost.cost",
    basePath: "root.cost.value",
    baseId: "Money.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Money.currency",
      path: "Money.currency",
      short: "ISO 4217 Currency Code",
      definition: "ISO 4217 Currency Code.",
      requirements: "A code indicating the currency, taken from ISO 4217.",
      min: 0,
      max: "1",
      base: { path: "Money.currency", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString: "A code indicating the currency, taken from ISO 4217.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "CurrencyCode",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/currencies|4.3.0",
      },
      mapping: [{ identity: "v2", map: "MO.Currency" }],
    },
    dataPath: "root.cost.cost.currency",
    parentDataPath: "root.cost.cost",
    basePath: "root.cost.currency",
    baseId: "Money.currency",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.monitoringProgram",
      path: "MedicationKnowledge.monitoringProgram",
      short: "Program under which a medication is reviewed",
      definition: "The program under which the medication is reviewed.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.monitoringProgram", min: 0, max: "*" },
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
    dataPath: "root.monitoringProgram[0]",
    parentDataPath: "root",
    basePath: "root.monitoringProgram",
    baseId: "MedicationKnowledge.monitoringProgram",
    isPrimitive: false,
    childPaths: ["root.monitoringProgram.type", "root.monitoringProgram.name"],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.monitoringProgram.type",
      path: "MedicationKnowledge.monitoringProgram.type",
      short: "Type of program under which the medication is monitored",
      definition: "Type of program under which the medication is monitored.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.monitoringProgram.type",
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
    },
    dataPath: "root.monitoringProgram.type",
    parentDataPath: "root.monitoringProgram[0]",
    basePath: "root.type",
    baseId: "MedicationKnowledge.monitoringProgram.type",
    isPrimitive: false,
    childPaths: [
      "root.monitoringProgram.type.coding[0]",
      "root.monitoringProgram.type.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.monitoringProgram.type.coding[0]",
    parentDataPath: "root.monitoringProgram.type",
    basePath: "root.type.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.monitoringProgram.type.coding[0].system",
      "root.monitoringProgram.type.coding[0].version",
      "root.monitoringProgram.type.coding[0].code",
      "root.monitoringProgram.type.coding[0].display",
      "root.monitoringProgram.type.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.monitoringProgram.type.coding[0].system",
    parentDataPath: "root.monitoringProgram.type.coding[0]",
    basePath: "root.type.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.monitoringProgram.type.coding[0].version",
    parentDataPath: "root.monitoringProgram.type.coding[0]",
    basePath: "root.type.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.monitoringProgram.type.coding[0].code",
    parentDataPath: "root.monitoringProgram.type.coding[0]",
    basePath: "root.type.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.monitoringProgram.type.coding[0].display",
    parentDataPath: "root.monitoringProgram.type.coding[0]",
    basePath: "root.type.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.monitoringProgram.type.coding[0].userSelected",
    parentDataPath: "root.monitoringProgram.type.coding[0]",
    basePath: "root.type.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.monitoringProgram.type.text",
    parentDataPath: "root.monitoringProgram.type",
    basePath: "root.type.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.monitoringProgram.name",
      path: "MedicationKnowledge.monitoringProgram.name",
      short: "Name of the reviewing program",
      definition: "Name of the reviewing program.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.monitoringProgram.name",
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
    dataPath: "root.monitoringProgram.name",
    parentDataPath: "root.monitoringProgram[0]",
    basePath: "root.name",
    baseId: "MedicationKnowledge.monitoringProgram.name",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines",
      path: "MedicationKnowledge.administrationGuidelines",
      short: "Guidelines for administration of the medication",
      definition: "Guidelines for the administration of the medication.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.administrationGuidelines",
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
    dataPath: "root.administrationGuidelines[0]",
    parentDataPath: "root",
    basePath: "root.administrationGuidelines",
    baseId: "MedicationKnowledge.administrationGuidelines",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage[0]",
      "root.administrationGuidelines.indication[x]",
      "root.administrationGuidelines.patientCharacteristics[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines.dosage",
      path: "MedicationKnowledge.administrationGuidelines.dosage",
      short: "Dosage for the medication for the specific guidelines",
      definition: "Dosage for the medication for the specific guidelines.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.administrationGuidelines.dosage",
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
    dataPath: "root.administrationGuidelines.dosage[0]",
    parentDataPath: "root.administrationGuidelines[0]",
    basePath: "root.dosage",
    baseId: "MedicationKnowledge.administrationGuidelines.dosage",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.type",
      "root.administrationGuidelines.dosage.dosage[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines.dosage.type",
      path: "MedicationKnowledge.administrationGuidelines.dosage.type",
      short: "Type of dosage",
      definition:
        "The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).",
      min: 1,
      max: "1",
      base: {
        path: "MedicationKnowledge.administrationGuidelines.dosage.type",
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
    },
    dataPath: "root.administrationGuidelines.dosage.type",
    parentDataPath: "root.administrationGuidelines.dosage[0]",
    basePath: "root.type",
    baseId: "MedicationKnowledge.administrationGuidelines.dosage.type",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.type.coding[0]",
      "root.administrationGuidelines.dosage.type.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.type.coding[0]",
    parentDataPath: "root.administrationGuidelines.dosage.type",
    basePath: "root.type.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.type.coding[0].system",
      "root.administrationGuidelines.dosage.type.coding[0].version",
      "root.administrationGuidelines.dosage.type.coding[0].code",
      "root.administrationGuidelines.dosage.type.coding[0].display",
      "root.administrationGuidelines.dosage.type.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.type.coding[0].system",
    parentDataPath: "root.administrationGuidelines.dosage.type.coding[0]",
    basePath: "root.type.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.type.coding[0].version",
    parentDataPath: "root.administrationGuidelines.dosage.type.coding[0]",
    basePath: "root.type.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.type.coding[0].code",
    parentDataPath: "root.administrationGuidelines.dosage.type.coding[0]",
    basePath: "root.type.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.type.coding[0].display",
    parentDataPath: "root.administrationGuidelines.dosage.type.coding[0]",
    basePath: "root.type.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.type.coding[0].userSelected",
    parentDataPath: "root.administrationGuidelines.dosage.type.coding[0]",
    basePath: "root.type.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.type.text",
    parentDataPath: "root.administrationGuidelines.dosage.type",
    basePath: "root.type.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines.dosage.dosage",
      path: "MedicationKnowledge.administrationGuidelines.dosage.dosage",
      short: "Dosage for the medication for the specific guidelines",
      definition: "Dosage for the medication for the specific guidelines.",
      min: 1,
      max: "*",
      base: {
        path: "MedicationKnowledge.administrationGuidelines.dosage.dosage",
        min: 1,
        max: "*",
      },
      type: [{ code: "Dosage" }],
      constraint: [
        {
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
    dataPath: "root.administrationGuidelines.dosage.dosage[0]",
    parentDataPath: "root.administrationGuidelines.dosage[0]",
    basePath: "root.dosage",
    baseId: "MedicationKnowledge.administrationGuidelines.dosage.dosage",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].sequence",
      "root.administrationGuidelines.dosage.dosage[0].text",
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0]",
      "root.administrationGuidelines.dosage.dosage[0].patientInstruction",
      "root.administrationGuidelines.dosage.dosage[0].timing",
      "root.administrationGuidelines.dosage.dosage[0].asNeeded[x]",
      "root.administrationGuidelines.dosage.dosage[0].site",
      "root.administrationGuidelines.dosage.dosage[0].route",
      "root.administrationGuidelines.dosage.dosage[0].method",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate[0]",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime",
    ],
    value: "",
  },
  {
    element: {
      id: "Dosage.sequence",
      path: "Dosage.sequence",
      short: "The order of the dosage instructions",
      definition:
        "Indicates the order in which the dosage instructions should be applied or interpreted.",
      requirements:
        "If the sequence number of multiple Dosages is the same, then it is implied that the instructions are to be treated as concurrent.  If the sequence number is different, then the Dosages are intended to be sequential.",
      min: 0,
      max: "1",
      base: { path: "Dosage.sequence", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "TQ1-1" },
        { identity: "rim", map: ".text" },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].sequence",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.sequence",
    baseId: "Dosage.sequence",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Dosage.text",
      path: "Dosage.text",
      short: "Free text dosage instructions e.g. SIG",
      definition: "Free text dosage instructions e.g. SIG.",
      requirements:
        "Free text dosage instructions can be used for cases where the instructions are too complex to code.  The content of this attribute does not include the name or description of the medication. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication. It is expected that the text instructions will always be populated.  If the dosage.timing attribute is also populated, then the dosage.text should reflect the same information as the timing.  Additional information about administration or preparation of the medication should be included as text.",
      min: 0,
      max: "1",
      base: { path: "Dosage.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "RXO-6; RXE-21" },
        { identity: "rim", map: ".text" },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].text",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.text",
    baseId: "Dosage.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Dosage.additionalInstruction",
      path: "Dosage.additionalInstruction",
      short:
        'Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness"',
      definition:
        'Supplemental instructions to the patient on how to take the medication  (e.g. "with meals" or"take half to one hour before food") or warnings for the patient about the medication (e.g. "may cause drowsiness" or "avoid exposure of skin to direct sunlight or sunlamps").',
      comment:
        'Information about administration or preparation of the medication (e.g. "infuse as rapidly as possibly via intraperitoneal port" or "immediately following drug x") should be populated in dosage.text.',
      requirements:
        'Additional instruction is intended to be coded, but where no code exists, the element could include text.  For example, "Swallow with plenty of water" which might or might not be coded.',
      min: 0,
      max: "*",
      base: { path: "Dosage.additionalInstruction", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              'A coded concept identifying additional instructions such as "take with water" or "avoid operating heavy machinery".',
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "AdditionalInstruction",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/additional-instruction-codes",
      },
      mapping: [
        { identity: "v2", map: "RXO-7" },
        { identity: "rim", map: ".text" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0]",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.additionalInstruction",
    baseId: "Dosage.additionalInstruction",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0]",
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0]",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0]",
    basePath: "root.dosage.additionalInstruction.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0].system",
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0].version",
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0].code",
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0].display",
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0].system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0]",
    basePath: "root.dosage.additionalInstruction.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0].version",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0]",
    basePath: "root.dosage.additionalInstruction.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0].code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0]",
    basePath: "root.dosage.additionalInstruction.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0].display",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0]",
    basePath: "root.dosage.additionalInstruction.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0].userSelected",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].coding[0]",
    basePath: "root.dosage.additionalInstruction.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0].text",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].additionalInstruction[0]",
    basePath: "root.dosage.additionalInstruction.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Dosage.patientInstruction",
      path: "Dosage.patientInstruction",
      short: "Patient or consumer oriented instructions",
      definition:
        "Instructions in terms that are understood by the patient or consumer.",
      min: 0,
      max: "1",
      base: { path: "Dosage.patientInstruction", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "RXO-7" },
        { identity: "rim", map: ".text" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].patientInstruction",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.patientInstruction",
    baseId: "Dosage.patientInstruction",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Dosage.timing",
      path: "Dosage.timing",
      short: "When medication should be administered",
      definition: "When medication should be administered.",
      comment:
        "This attribute might not always be populated while the Dosage.text is expected to be populated.  If both are populated, then the Dosage.text should reflect the content of the Dosage.timing.",
      requirements:
        'The timing schedule for giving the medication to the patient. This  data type allows many different expressions. For example: "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".  Sometimes, a rate can imply duration when expressed as total volume / duration (e.g.  500mL/2 hours implies a duration of 2 hours).  However, when rate doesn\'t imply duration (e.g. 250mL/hour), then the timing.repeat.duration is needed to convey the infuse over time period.',
      min: 0,
      max: "1",
      base: { path: "Dosage.timing", min: 0, max: "1" },
      type: [{ code: "Timing" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: ".effectiveTime" }],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].timing",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.timing",
    baseId: "Dosage.timing",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].timing.event[0]",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
      "root.administrationGuidelines.dosage.dosage[0].timing.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Timing.event",
      path: "Timing.event",
      short: "When the event occurs",
      definition: "Identifies specific times when the event occurs.",
      requirements:
        "In a Medication Administration Record, for instance, you need to take a general specification, and turn it into a precise specification.",
      min: 0,
      max: "*",
      base: { path: "Timing.event", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "QLIST<TS>" }],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].timing.event[0]",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0].timing",
    basePath: "root.dosage.timing.event",
    baseId: "Timing.event",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Timing.repeat",
      path: "Timing.repeat",
      short: "When the event is to occur",
      definition: "A set of rules that describe when the event is scheduled.",
      requirements:
        "Many timing schedules are determined by regular repetitions.",
      min: 0,
      max: "1",
      base: { path: "Timing.repeat", min: 0, max: "1" },
      type: [{ code: "Element" }],
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
          key: "tim-1",
          severity: "error",
          human: "if there's a duration, there needs to be duration units",
          expression: "duration.empty() or durationUnit.exists()",
          xpath: "not(exists(f:duration)) or exists(f:durationUnit)",
          source: "http://hl7.org/fhir/StructureDefinition/Timing",
        },
        {
          key: "tim-2",
          severity: "error",
          human: "if there's a period, there needs to be period units",
          expression: "period.empty() or periodUnit.exists()",
          xpath: "not(exists(f:period)) or exists(f:periodUnit)",
          source: "http://hl7.org/fhir/StructureDefinition/Timing",
        },
        {
          key: "tim-4",
          severity: "error",
          human: "duration SHALL be a non-negative value",
          expression: "duration.exists() implies duration >= 0",
          xpath: "f:duration/@value >= 0 or not(f:duration/@value)",
          source: "http://hl7.org/fhir/StructureDefinition/Timing",
        },
        {
          key: "tim-5",
          severity: "error",
          human: "period SHALL be a non-negative value",
          expression: "period.exists() implies period >= 0",
          xpath: "f:period/@value >= 0 or not(f:period/@value)",
          source: "http://hl7.org/fhir/StructureDefinition/Timing",
        },
        {
          key: "tim-6",
          severity: "error",
          human: "If there's a periodMax, there must be a period",
          expression: "periodMax.empty() or period.exists()",
          xpath: "not(exists(f:periodMax)) or exists(f:period)",
          source: "http://hl7.org/fhir/StructureDefinition/Timing",
        },
        {
          key: "tim-7",
          severity: "error",
          human: "If there's a durationMax, there must be a duration",
          expression: "durationMax.empty() or duration.exists()",
          xpath: "not(exists(f:durationMax)) or exists(f:duration)",
          source: "http://hl7.org/fhir/StructureDefinition/Timing",
        },
        {
          key: "tim-8",
          severity: "error",
          human: "If there's a countMax, there must be a count",
          expression: "countMax.empty() or count.exists()",
          xpath: "not(exists(f:countMax)) or exists(f:count)",
          source: "http://hl7.org/fhir/StructureDefinition/Timing",
        },
        {
          key: "tim-9",
          severity: "error",
          human:
            "If there's an offset, there must be a when (and not C, CM, CD, CV)",
          expression:
            "offset.empty() or (when.exists() and ((when in ('C' | 'CM' | 'CD' | 'CV')).not()))",
          xpath: "not(exists(f:offset)) or exists(f:when)",
          source: "http://hl7.org/fhir/StructureDefinition/Timing",
        },
        {
          key: "tim-10",
          severity: "error",
          human:
            "If there's a timeOfDay, there cannot be a when, or vice versa",
          expression: "timeOfDay.empty() or when.empty()",
          xpath: "not(exists(f:timeOfDay)) or not(exists(f:when))",
          source: "http://hl7.org/fhir/StructureDefinition/Timing",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "Implies PIVL or EIVL" }],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0].timing",
    basePath: "root.dosage.timing.repeat",
    baseId: "Timing.repeat",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.bounds[x]",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.count",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.countMax",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.duration",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.durationMax",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.durationUnit",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.frequency",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.frequencyMax",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.period",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.periodMax",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.periodUnit",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.dayOfWeek[0]",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.timeOfDay[0]",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.when[0]",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.offset",
    ],
    value: "",
  },
  {
    element: {
      id: "Timing.repeat.bounds[x]",
      path: "Timing.repeat.bounds[x]",
      short: "Length/Range of lengths, or (Start and/or end) limits",
      definition:
        "Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.",
      min: 0,
      max: "1",
      base: { path: "Timing.repeat.bounds[x]", min: 0, max: "1" },
      type: [{ code: "Duration" }, { code: "Range" }, { code: "Period" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "IVL(TS) used in a QSI" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.bounds[x]",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.bounds[x]",
    baseId: "Timing.repeat.bounds[x]",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsDuration.value",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsDuration.comparator",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsDuration.unit",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsDuration.system",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsDuration.code",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsPeriod.start",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsPeriod.end",
    ],
    multiTypeType: "Duration",
    value: "",
  },
  {
    element: {
      id: "Duration.value",
      path: "Duration.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsDuration.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.bounds[x]",
    basePath: "root.dosage.timing.bounds[x].value",
    baseId: "Duration.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Duration.comparator",
      path: "Duration.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsDuration.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.bounds[x]",
    basePath: "root.dosage.timing.bounds[x].comparator",
    baseId: "Duration.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Duration.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Duration.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsDuration.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.bounds[x]",
    basePath: "root.dosage.timing.bounds[x].unit",
    baseId: "Duration.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Duration.system",
      path: "Duration.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsDuration.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.bounds[x]",
    basePath: "root.dosage.timing.bounds[x].system",
    baseId: "Duration.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Duration.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Duration.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsDuration.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.bounds[x]",
    basePath: "root.dosage.timing.bounds[x].code",
    baseId: "Duration.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Range.low",
      path: "Range.low",
      short: "Low limit",
      definition: "The low limit. The boundary is inclusive.",
      comment: "If the low element is missing, the low boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "Range.low", min: 0, max: "1" },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "NR.1" },
        { identity: "rim", map: "./low" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.bounds[x]",
    basePath: "root.dosage.timing.bounds[x].low",
    baseId: "Range.low",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low.value",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low.comparator",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low.unit",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low.system",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low",
    basePath: "root.dosage.timing.bounds[x].low.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low",
    basePath: "root.dosage.timing.bounds[x].low.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low",
    basePath: "root.dosage.timing.bounds[x].low.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low",
    basePath: "root.dosage.timing.bounds[x].low.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.low",
    basePath: "root.dosage.timing.bounds[x].low.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Range.high",
      path: "Range.high",
      short: "High limit",
      definition: "The high limit. The boundary is inclusive.",
      comment:
        "If the high element is missing, the high boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "Range.high", min: 0, max: "1" },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "NR.2" },
        { identity: "rim", map: "./high" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.bounds[x]",
    basePath: "root.dosage.timing.bounds[x].high",
    baseId: "Range.high",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high.value",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high.comparator",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high.unit",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high.system",
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high",
    basePath: "root.dosage.timing.bounds[x].high.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high",
    basePath: "root.dosage.timing.bounds[x].high.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high",
    basePath: "root.dosage.timing.bounds[x].high.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high",
    basePath: "root.dosage.timing.bounds[x].high.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsRange.high",
    basePath: "root.dosage.timing.bounds[x].high.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Period.start",
      path: "Period.start",
      short: "Starting time with inclusive boundary",
      definition: "The start of the period. The boundary is inclusive.",
      comment:
        "If the low element is missing, the meaning is that the low boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "Period.start", min: 0, max: "1" },
      type: [{ code: "dateTime" }],
      condition: ["per-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "DR.1" },
        { identity: "rim", map: "./low" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsPeriod.start",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.bounds[x]",
    basePath: "root.dosage.timing.bounds[x].start",
    baseId: "Period.start",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Period.end",
      path: "Period.end",
      short: "End time with inclusive boundary, if not ongoing",
      definition:
        "The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.",
      comment:
        "The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.",
      min: 0,
      max: "1",
      base: { path: "Period.end", min: 0, max: "1" },
      type: [{ code: "dateTime" }],
      meaningWhenMissing:
        "If the end of the period is missing, it means that the period is ongoing",
      condition: ["per-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "DR.2" },
        { identity: "rim", map: "./high" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.boundsPeriod.end",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.bounds[x]",
    basePath: "root.dosage.timing.bounds[x].end",
    baseId: "Period.end",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Timing.repeat.count",
      path: "Timing.repeat.count",
      short: "Number of times to repeat",
      definition:
        "A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values.",
      comment:
        "If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.",
      requirements:
        "Repetitions may be limited by end time or total occurrences.",
      min: 0,
      max: "1",
      base: { path: "Timing.repeat.count", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "PIVL.count" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.count",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.count",
    baseId: "Timing.repeat.count",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Timing.repeat.countMax",
      path: "Timing.repeat.countMax",
      short: "Maximum number of times to repeat",
      definition:
        "If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.",
      min: 0,
      max: "1",
      base: { path: "Timing.repeat.countMax", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "PIVL.count" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.countMax",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.countMax",
    baseId: "Timing.repeat.countMax",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Timing.repeat.duration",
      path: "Timing.repeat.duration",
      short: "How long when it happens",
      definition:
        "How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration.",
      comment:
        "For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).",
      requirements:
        "Some activities are not instantaneous and need to be maintained for a period of time.",
      min: 0,
      max: "1",
      base: { path: "Timing.repeat.duration", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "PIVL.phase" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.duration",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.duration",
    baseId: "Timing.repeat.duration",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Timing.repeat.durationMax",
      path: "Timing.repeat.durationMax",
      short: "How long when it happens (Max)",
      definition:
        "If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length.",
      comment:
        "For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).",
      requirements:
        "Some activities are not instantaneous and need to be maintained for a period of time.",
      min: 0,
      max: "1",
      base: { path: "Timing.repeat.durationMax", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "PIVL.phase" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.durationMax",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.durationMax",
    baseId: "Timing.repeat.durationMax",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Timing.repeat.durationUnit",
      path: "Timing.repeat.durationUnit",
      short: "s | min | h | d | wk | mo | a - unit of time (UCUM)",
      definition: "The units of time for the duration, in UCUM units.",
      min: 0,
      max: "1",
      base: { path: "Timing.repeat.durationUnit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString: "A unit of time (units from UCUM).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "UnitsOfTime",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/units-of-time|4.3.0",
      },
      mapping: [{ identity: "rim", map: "PIVL.phase.unit" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.durationUnit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.durationUnit",
    baseId: "Timing.repeat.durationUnit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      { code: "s", display: "second" },
      { code: "min", display: "minute" },
      { code: "h", display: "hour" },
      { code: "d", display: "day" },
      { code: "wk", display: "week" },
      { code: "mo", display: "month" },
      { code: "a", display: "year" },
    ],
  },
  {
    element: {
      id: "Timing.repeat.frequency",
      path: "Timing.repeat.frequency",
      short: "Event occurs frequency times per period",
      definition:
        "The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.",
      min: 0,
      max: "1",
      base: { path: "Timing.repeat.frequency", min: 0, max: "1" },
      type: [{ code: "positiveInt" }],
      meaningWhenMissing:
        "If no frequency is stated, the assumption is that the event occurs once per period, but systems SHOULD always be specific about this",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "PIVL.phase" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.frequency",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.frequency",
    baseId: "Timing.repeat.frequency",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Timing.repeat.frequencyMax",
      path: "Timing.repeat.frequencyMax",
      short: "Event occurs up to frequencyMax times per period",
      definition:
        "If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.",
      min: 0,
      max: "1",
      base: { path: "Timing.repeat.frequencyMax", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "PIVL.phase" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.frequencyMax",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.frequencyMax",
    baseId: "Timing.repeat.frequencyMax",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Timing.repeat.period",
      path: "Timing.repeat.period",
      short: "Event occurs frequency times per period",
      definition:
        'Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.',
      min: 0,
      max: "1",
      base: { path: "Timing.repeat.period", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "PIVL.phase" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.period",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.period",
    baseId: "Timing.repeat.period",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Timing.repeat.periodMax",
      path: "Timing.repeat.periodMax",
      short: "Upper limit of period (3-4 hours)",
      definition:
        'If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.',
      min: 0,
      max: "1",
      base: { path: "Timing.repeat.periodMax", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "PIVL.phase" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.periodMax",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.periodMax",
    baseId: "Timing.repeat.periodMax",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Timing.repeat.periodUnit",
      path: "Timing.repeat.periodUnit",
      short: "s | min | h | d | wk | mo | a - unit of time (UCUM)",
      definition: "The units of time for the period in UCUM units.",
      min: 0,
      max: "1",
      base: { path: "Timing.repeat.periodUnit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString: "A unit of time (units from UCUM).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "UnitsOfTime",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/units-of-time|4.3.0",
      },
      mapping: [{ identity: "rim", map: "PIVL.phase.unit" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.periodUnit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.periodUnit",
    baseId: "Timing.repeat.periodUnit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      { code: "s", display: "second" },
      { code: "min", display: "minute" },
      { code: "h", display: "hour" },
      { code: "d", display: "day" },
      { code: "wk", display: "week" },
      { code: "mo", display: "month" },
      { code: "a", display: "year" },
    ],
  },
  {
    element: {
      id: "Timing.repeat.dayOfWeek",
      path: "Timing.repeat.dayOfWeek",
      short: "mon | tue | wed | thu | fri | sat | sun",
      definition:
        "If one or more days of week is provided, then the action happens only on the specified day(s).",
      comment:
        "If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.",
      min: 0,
      max: "*",
      base: { path: "Timing.repeat.dayOfWeek", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DayOfWeek",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/days-of-week|4.3.0",
      },
      mapping: [{ identity: "rim", map: "n/a" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.dayOfWeek[0]",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.dayOfWeek",
    baseId: "Timing.repeat.dayOfWeek",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/days-of-week",
        code: "mon",
        display: "Monday",
      },
      {
        system: "http://hl7.org/fhir/days-of-week",
        code: "tue",
        display: "Tuesday",
      },
      {
        system: "http://hl7.org/fhir/days-of-week",
        code: "wed",
        display: "Wednesday",
      },
      {
        system: "http://hl7.org/fhir/days-of-week",
        code: "thu",
        display: "Thursday",
      },
      {
        system: "http://hl7.org/fhir/days-of-week",
        code: "fri",
        display: "Friday",
      },
      {
        system: "http://hl7.org/fhir/days-of-week",
        code: "sat",
        display: "Saturday",
      },
      {
        system: "http://hl7.org/fhir/days-of-week",
        code: "sun",
        display: "Sunday",
      },
    ],
  },
  {
    element: {
      id: "Timing.repeat.timeOfDay",
      path: "Timing.repeat.timeOfDay",
      short: "Time of day for action",
      definition: "Specified time of day for action to take place.",
      comment:
        "When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.",
      min: 0,
      max: "*",
      base: { path: "Timing.repeat.timeOfDay", min: 0, max: "*" },
      type: [{ code: "time" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "n/a" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.timeOfDay[0]",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.timeOfDay",
    baseId: "Timing.repeat.timeOfDay",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Timing.repeat.when",
      path: "Timing.repeat.when",
      short: "Code for time period of occurrence",
      definition:
        "An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.",
      comment:
        "When more than one event is listed, the event is tied to the union of the specified events.",
      requirements:
        "Timings are frequently determined by occurrences such as waking, eating and sleep.",
      min: 0,
      max: "*",
      base: { path: "Timing.repeat.when", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString: "Real world event relating to the schedule.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "EventTiming",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/event-timing|4.3.0",
      },
      mapping: [{ identity: "rim", map: "EIVL.event" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.when[0]",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.when",
    baseId: "Timing.repeat.when",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/event-timing",
        code: "MORN",
        display: "Morning",
      },
      {
        system: "http://hl7.org/fhir/event-timing",
        code: "MORN.early",
        display: "Early Morning",
      },
      {
        system: "http://hl7.org/fhir/event-timing",
        code: "MORN.late",
        display: "Late Morning",
      },
      {
        system: "http://hl7.org/fhir/event-timing",
        code: "NOON",
        display: "Noon",
      },
      {
        system: "http://hl7.org/fhir/event-timing",
        code: "AFT",
        display: "Afternoon",
      },
      {
        system: "http://hl7.org/fhir/event-timing",
        code: "AFT.early",
        display: "Early Afternoon",
      },
      {
        system: "http://hl7.org/fhir/event-timing",
        code: "AFT.late",
        display: "Late Afternoon",
      },
      {
        system: "http://hl7.org/fhir/event-timing",
        code: "EVE",
        display: "Evening",
      },
      {
        system: "http://hl7.org/fhir/event-timing",
        code: "EVE.early",
        display: "Early Evening",
      },
      {
        system: "http://hl7.org/fhir/event-timing",
        code: "EVE.late",
        display: "Late Evening",
      },
      {
        system: "http://hl7.org/fhir/event-timing",
        code: "NIGHT",
        display: "Night",
      },
      {
        system: "http://hl7.org/fhir/event-timing",
        code: "PHS",
        display: "After Sleep",
      },
      { system: "http://hl7.org/fhir/event-timing", code: "HS" },
      { system: "http://hl7.org/fhir/event-timing", code: "WAKE" },
      { system: "http://hl7.org/fhir/event-timing", code: "C" },
      { system: "http://hl7.org/fhir/event-timing", code: "CM" },
      { system: "http://hl7.org/fhir/event-timing", code: "CD" },
      { system: "http://hl7.org/fhir/event-timing", code: "CV" },
      { system: "http://hl7.org/fhir/event-timing", code: "AC" },
      { system: "http://hl7.org/fhir/event-timing", code: "ACM" },
      { system: "http://hl7.org/fhir/event-timing", code: "ACD" },
      { system: "http://hl7.org/fhir/event-timing", code: "ACV" },
      { system: "http://hl7.org/fhir/event-timing", code: "PC" },
      { system: "http://hl7.org/fhir/event-timing", code: "PCM" },
      { system: "http://hl7.org/fhir/event-timing", code: "PCD" },
      { system: "http://hl7.org/fhir/event-timing", code: "PCV" },
    ],
  },
  {
    element: {
      id: "Timing.repeat.offset",
      path: "Timing.repeat.offset",
      short: "Minutes from event (before or after)",
      definition:
        "The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.",
      min: 0,
      max: "1",
      base: { path: "Timing.repeat.offset", min: 0, max: "1" },
      type: [{ code: "unsignedInt" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "EIVL.offset" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat.offset",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].timing.repeat",
    basePath: "root.dosage.timing.offset",
    baseId: "Timing.repeat.offset",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Timing.code",
      path: "Timing.code",
      short: "BID | TID | QID | AM | PM | QD | QOD | +",
      definition:
        "A code for the timing schedule (or just text in code.text). Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).",
      comment:
        "BID etc. are defined as 'at institutionally specified times'. For example, an institution may choose that BID is \"always at 7am and 6pm\".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or a structured representation should be used (in this case, specifying the two event times).",
      min: 0,
      max: "1",
      base: { path: "Timing.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString: "Code for a known / defined timing pattern.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "TimingAbbreviation",
          },
        ],
        strength: "preferred",
        valueSet: "http://hl7.org/fhir/ValueSet/timing-abbreviation",
      },
      mapping: [{ identity: "rim", map: "QSC.code" }],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].timing.code",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0].timing",
    basePath: "root.dosage.timing.code",
    baseId: "Timing.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      { code: "BID", display: "BID" },
      { code: "TID", display: "TID" },
      { code: "QID", display: "QID" },
      { code: "AM", display: "AM" },
      { code: "PM", display: "PM" },
      { code: "QD", display: "QD" },
      { code: "QOD", display: "QOD" },
      { code: "Q1H", display: "every hour" },
      { code: "Q2H", display: "every 2 hours" },
      { code: "Q3H", display: "every 3 hours" },
      { code: "Q4H", display: "Q4H" },
      { code: "Q6H", display: "Q6H" },
      { code: "Q8H", display: "every 8 hours" },
      { code: "BED", display: "at bedtime" },
      { code: "WK", display: "weekly" },
      { code: "MO", display: "monthly" },
    ],
  },
  {
    element: {
      id: "Dosage.asNeeded[x]",
      path: "Dosage.asNeeded[x]",
      short: 'Take "as needed" (for x)',
      definition:
        "Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).",
      comment:
        'Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".',
      min: 0,
      max: "1",
      base: { path: "Dosage.asNeeded[x]", min: 0, max: "1" },
      type: [{ code: "boolean" }, { code: "CodeableConcept" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              'A coded concept identifying the precondition that should be met or evaluated prior to consuming or administering a medication dose.  For example "pain", "30 minutes prior to sexual intercourse", "on flare-up" etc.',
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationAsNeededReason",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/medication-as-needed-reason",
      },
      mapping: [
        { identity: "v2", map: "TQ1-9" },
        {
          identity: "rim",
          map: '.outboundRelationship[typeCode=PRCN].target[classCode=OBS, moodCode=EVN, code="as needed"].value=boolean or codable concept',
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].asNeeded[x]",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.asNeeded[x]",
    baseId: "Dosage.asNeeded[x]",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].asNeededBoolean.boolean",
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0]",
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.text",
    ],
    multiTypeType: "boolean",
    value: "",
  },
  {
    element: {
      id: "boolean",
      path: "boolean",
      short: "Primitive Type boolean",
      definition: 'Value of "true" or "false"',
      min: 0,
      max: "1",
      base: { path: "boolean", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: false,
      type: [{ code: "boolean" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededBoolean.boolean",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeeded[x]",
    basePath: "root.dosage.asNeeded[x].boolean",
    baseId: "Dosage.asNeeded[x]",
    isPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0]",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeeded[x]",
    basePath: "root.dosage.asNeeded[x].coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0].system",
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0].version",
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0].code",
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0].display",
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0].system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0]",
    basePath: "root.dosage.asNeeded[x].coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0].version",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0]",
    basePath: "root.dosage.asNeeded[x].coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0].code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0]",
    basePath: "root.dosage.asNeeded[x].coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0].display",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0]",
    basePath: "root.dosage.asNeeded[x].coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0].userSelected",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.coding[0]",
    basePath: "root.dosage.asNeeded[x].coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeededCodeableConcept.text",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].asNeeded[x]",
    basePath: "root.dosage.asNeeded[x].text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Dosage.site",
      path: "Dosage.site",
      short: "Body site to administer to",
      definition: "Body site to administer to.",
      comment:
        "If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.",
      requirements:
        "A coded specification of the anatomic site where the medication first enters the body.",
      min: 0,
      max: "1",
      base: { path: "Dosage.site", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "A coded concept describing the site location the medicine enters into or onto the body.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationAdministrationSite",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/approach-site-codes",
      },
      mapping: [
        { identity: "v2", map: "RXR-2" },
        { identity: "rim", map: ".approachSiteCode" },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].site",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.site",
    baseId: "Dosage.site",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0]",
      "root.administrationGuidelines.dosage.dosage[0].site.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].site.coding[0]",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0].site",
    basePath: "root.dosage.site.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0].system",
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0].version",
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0].code",
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0].display",
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0].system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0]",
    basePath: "root.dosage.site.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0].version",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0]",
    basePath: "root.dosage.site.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0].code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0]",
    basePath: "root.dosage.site.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0].display",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0]",
    basePath: "root.dosage.site.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0].userSelected",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].site.coding[0]",
    basePath: "root.dosage.site.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].site.text",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0].site",
    basePath: "root.dosage.site.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Dosage.route",
      path: "Dosage.route",
      short: "How drug should enter body",
      definition: "How drug should enter body.",
      requirements:
        "A code specifying the route or physiological path of administration of a therapeutic agent into or onto a patient's body.",
      min: 0,
      max: "1",
      base: { path: "Dosage.route", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "A coded concept describing the route or physiological path of administration of a therapeutic agent into or onto the body of a subject.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "RouteOfAdministration",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/route-codes",
      },
      mapping: [
        { identity: "v2", map: "RXR-1" },
        { identity: "rim", map: ".routeCode" },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].route",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.route",
    baseId: "Dosage.route",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0]",
      "root.administrationGuidelines.dosage.dosage[0].route.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].route.coding[0]",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0].route",
    basePath: "root.dosage.route.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0].system",
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0].version",
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0].code",
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0].display",
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0].system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0]",
    basePath: "root.dosage.route.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0].version",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0]",
    basePath: "root.dosage.route.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0].code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0]",
    basePath: "root.dosage.route.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0].display",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0]",
    basePath: "root.dosage.route.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0].userSelected",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].route.coding[0]",
    basePath: "root.dosage.route.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].route.text",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0].route",
    basePath: "root.dosage.route.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Dosage.method",
      path: "Dosage.method",
      short: "Technique for administering medication",
      definition: "Technique for administering medication.",
      comment:
        "Terminologies used often pre-coordinate this term with the route and or form of administration.",
      requirements:
        "A coded value indicating the method by which the medication is introduced into or onto the body. Most commonly used for injections.  For examples, Slow Push; Deep IV.",
      min: 0,
      max: "1",
      base: { path: "Dosage.method", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "A coded concept describing the technique by which the medicine is administered.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationAdministrationMethod",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/administration-method-codes",
      },
      mapping: [
        { identity: "v2", map: "RXR-4" },
        { identity: "rim", map: ".doseQuantity" },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].method",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.method",
    baseId: "Dosage.method",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0]",
      "root.administrationGuidelines.dosage.dosage[0].method.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].method.coding[0]",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0].method",
    basePath: "root.dosage.method.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0].system",
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0].version",
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0].code",
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0].display",
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0].system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0]",
    basePath: "root.dosage.method.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0].version",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0]",
    basePath: "root.dosage.method.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0].code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0]",
    basePath: "root.dosage.method.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0].display",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0]",
    basePath: "root.dosage.method.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0].userSelected",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].method.coding[0]",
    basePath: "root.dosage.method.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].method.text",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0].method",
    basePath: "root.dosage.method.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Dosage.doseAndRate",
      path: "Dosage.doseAndRate",
      short: "Amount of medication administered",
      definition: "The amount of medication administered.",
      min: 0,
      max: "*",
      base: { path: "Dosage.doseAndRate", min: 0, max: "*" },
      type: [{ code: "Element" }],
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "v2", map: "TQ1-2" }],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].doseAndRate[0]",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.doseAndRate",
    baseId: "Dosage.doseAndRate",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.type",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.dose[x]",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rate[x]",
    ],
    value: "",
  },
  {
    element: {
      id: "Dosage.doseAndRate.type",
      path: "Dosage.doseAndRate.type",
      short: "The kind of dose or rate specified",
      definition:
        "The kind of dose or rate specified, for example, ordered or calculated.",
      requirements: 'If the type is not populated, assume to be "ordered".',
      min: 0,
      max: "1",
      base: { path: "Dosage.doseAndRate.type", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString: "The kind of dose or rate specified.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DoseAndRateType",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/dose-rate-type",
      },
      mapping: [{ identity: "v2", map: "RXO-21; RXE-23" }],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].doseAndRate.type",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate[0]",
    basePath: "root.dosage.type",
    baseId: "Dosage.doseAndRate.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
        code: "calculated",
        display: "Calculated",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
        code: "ordered",
        display: "Ordered",
      },
    ],
  },
  {
    element: {
      id: "Dosage.doseAndRate.dose[x]",
      path: "Dosage.doseAndRate.dose[x]",
      short: "Amount of medication per dose",
      definition: "Amount of medication per dose.",
      comment:
        "Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.",
      requirements:
        "The amount of therapeutic or other substance given at one administration event.",
      min: 0,
      max: "1",
      base: { path: "Dosage.doseAndRate.dose[x]", min: 0, max: "1" },
      type: [
        { code: "Range" },
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "RXO-2, RXE-3" },
        { identity: "rim", map: ".doseQuantity" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.dose[x]",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate[0]",
    basePath: "root.dosage.dose[x]",
    baseId: "Dosage.doseAndRate.dose[x]",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseQuantity.value",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseQuantity.comparator",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseQuantity.unit",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseQuantity.system",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseQuantity.code",
    ],
    multiTypeType: "Range",
    value: "",
  },
  {
    element: {
      id: "Range.low",
      path: "Range.low",
      short: "Low limit",
      definition: "The low limit. The boundary is inclusive.",
      comment: "If the low element is missing, the low boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "Range.low", min: 0, max: "1" },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "NR.1" },
        { identity: "rim", map: "./low" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.dose[x]",
    basePath: "root.dosage.dose[x].low",
    baseId: "Range.low",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low.value",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low.comparator",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low.unit",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low.system",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low",
    basePath: "root.dosage.dose[x].low.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low",
    basePath: "root.dosage.dose[x].low.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low",
    basePath: "root.dosage.dose[x].low.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low",
    basePath: "root.dosage.dose[x].low.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.low",
    basePath: "root.dosage.dose[x].low.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Range.high",
      path: "Range.high",
      short: "High limit",
      definition: "The high limit. The boundary is inclusive.",
      comment:
        "If the high element is missing, the high boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "Range.high", min: 0, max: "1" },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "NR.2" },
        { identity: "rim", map: "./high" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.dose[x]",
    basePath: "root.dosage.dose[x].high",
    baseId: "Range.high",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high.value",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high.comparator",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high.unit",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high.system",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high",
    basePath: "root.dosage.dose[x].high.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high",
    basePath: "root.dosage.dose[x].high.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high",
    basePath: "root.dosage.dose[x].high.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high",
    basePath: "root.dosage.dose[x].high.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseRange.high",
    basePath: "root.dosage.dose[x].high.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseQuantity.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.dose[x]",
    basePath: "root.dosage.dose[x].value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseQuantity.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.dose[x]",
    basePath: "root.dosage.dose[x].comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseQuantity.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.dose[x]",
    basePath: "root.dosage.dose[x].unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseQuantity.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.dose[x]",
    basePath: "root.dosage.dose[x].system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.doseQuantity.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.dose[x]",
    basePath: "root.dosage.dose[x].code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Dosage.doseAndRate.rate[x]",
      path: "Dosage.doseAndRate.rate[x]",
      short: "Amount of medication per unit of time",
      definition: "Amount of medication per unit of time.",
      comment:
        "It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate. It is possible to specify a rate over time (for example, 100 ml/hour) using either the rateRatio and rateQuantity.  The rateQuantity approach requires systems to have the capability to parse UCUM grammer where ml/hour is included rather than a specific ratio where the time is specified as the denominator.  Where a rate such as 500ml over 2 hours is specified, the use of rateRatio may be more semantically correct than specifying using a rateQuantity of 250 mg/hour.",
      requirements:
        "Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.  Sometimes, a rate can imply duration when expressed as total volume / duration (e.g.  500mL/2 hours implies a duration of 2 hours).  However, when rate doesn't imply duration (e.g. 250mL/hour), then the timing.repeat.duration is needed to convey the infuse over time period.",
      min: 0,
      max: "1",
      base: { path: "Dosage.doseAndRate.rate[x]", min: 0, max: "1" },
      type: [
        { code: "Ratio" },
        { code: "Range" },
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "RXE22, RXE23, RXE-24" },
        { identity: "rim", map: ".rateQuantity" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rate[x]",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate[0]",
    basePath: "root.dosage.rate[x]",
    baseId: "Dosage.doseAndRate.rate[x]",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateQuantity.value",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateQuantity.comparator",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateQuantity.unit",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateQuantity.system",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateQuantity.code",
    ],
    multiTypeType: "Ratio",
    value: "",
  },
  {
    element: {
      id: "Ratio.numerator",
      path: "Ratio.numerator",
      short: "Numerator value",
      definition: "The value of the numerator.",
      min: 0,
      max: "1",
      base: { path: "Ratio.numerator", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: ".numerator" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rate[x]",
    basePath: "root.dosage.rate[x].numerator",
    baseId: "Ratio.numerator",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator.value",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator.comparator",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator.unit",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator.system",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator",
    basePath: "root.dosage.rate[x].numerator.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator",
    basePath: "root.dosage.rate[x].numerator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator",
    basePath: "root.dosage.rate[x].numerator.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator",
    basePath: "root.dosage.rate[x].numerator.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.numerator",
    basePath: "root.dosage.rate[x].numerator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ratio.denominator",
      path: "Ratio.denominator",
      short: "Denominator value",
      definition: "The value of the denominator.",
      min: 0,
      max: "1",
      base: { path: "Ratio.denominator", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: ".denominator" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rate[x]",
    basePath: "root.dosage.rate[x].denominator",
    baseId: "Ratio.denominator",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator.value",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator.comparator",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator.unit",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator.system",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator",
    basePath: "root.dosage.rate[x].denominator.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator",
    basePath: "root.dosage.rate[x].denominator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator",
    basePath: "root.dosage.rate[x].denominator.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator",
    basePath: "root.dosage.rate[x].denominator.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRatio.denominator",
    basePath: "root.dosage.rate[x].denominator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Range.low",
      path: "Range.low",
      short: "Low limit",
      definition: "The low limit. The boundary is inclusive.",
      comment: "If the low element is missing, the low boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "Range.low", min: 0, max: "1" },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "NR.1" },
        { identity: "rim", map: "./low" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rate[x]",
    basePath: "root.dosage.rate[x].low",
    baseId: "Range.low",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low.value",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low.comparator",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low.unit",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low.system",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low",
    basePath: "root.dosage.rate[x].low.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low",
    basePath: "root.dosage.rate[x].low.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low",
    basePath: "root.dosage.rate[x].low.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low",
    basePath: "root.dosage.rate[x].low.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.low",
    basePath: "root.dosage.rate[x].low.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Range.high",
      path: "Range.high",
      short: "High limit",
      definition: "The high limit. The boundary is inclusive.",
      comment:
        "If the high element is missing, the high boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "Range.high", min: 0, max: "1" },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "NR.2" },
        { identity: "rim", map: "./high" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rate[x]",
    basePath: "root.dosage.rate[x].high",
    baseId: "Range.high",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high.value",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high.comparator",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high.unit",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high.system",
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high",
    basePath: "root.dosage.rate[x].high.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high",
    basePath: "root.dosage.rate[x].high.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high",
    basePath: "root.dosage.rate[x].high.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high",
    basePath: "root.dosage.rate[x].high.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateRange.high",
    basePath: "root.dosage.rate[x].high.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateQuantity.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rate[x]",
    basePath: "root.dosage.rate[x].value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateQuantity.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rate[x]",
    basePath: "root.dosage.rate[x].comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateQuantity.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rate[x]",
    basePath: "root.dosage.rate[x].unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateQuantity.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rate[x]",
    basePath: "root.dosage.rate[x].system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rateQuantity.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].doseAndRate.rate[x]",
    basePath: "root.dosage.rate[x].code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Dosage.maxDosePerPeriod",
      path: "Dosage.maxDosePerPeriod",
      short: "Upper limit on medication per unit of time",
      definition: "Upper limit on medication per unit of time.",
      comment:
        'This is intended for use as an adjunct to the dosage when there is an upper cap.  For example "2 tablets every 4 hours to a maximum of 8/day".',
      requirements:
        "The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time.  For example, 1000mg in 24 hours.",
      min: 0,
      max: "1",
      base: { path: "Dosage.maxDosePerPeriod", min: 0, max: "1" },
      type: [{ code: "Ratio" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "RXO-23, RXE-19" },
        { identity: "rim", map: ".maxDoseQuantity" },
      ],
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.maxDosePerPeriod",
    baseId: "Dosage.maxDosePerPeriod",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator",
    ],
    value: "",
  },
  {
    element: {
      id: "Ratio.numerator",
      path: "Ratio.numerator",
      short: "Numerator value",
      definition: "The value of the numerator.",
      min: 0,
      max: "1",
      base: { path: "Ratio.numerator", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: ".numerator" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod",
    basePath: "root.dosage.maxDosePerPeriod.numerator",
    baseId: "Ratio.numerator",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator.value",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator.comparator",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator.unit",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator.system",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator",
    basePath: "root.dosage.maxDosePerPeriod.numerator.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator",
    basePath: "root.dosage.maxDosePerPeriod.numerator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator",
    basePath: "root.dosage.maxDosePerPeriod.numerator.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator",
    basePath: "root.dosage.maxDosePerPeriod.numerator.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.numerator",
    basePath: "root.dosage.maxDosePerPeriod.numerator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ratio.denominator",
      path: "Ratio.denominator",
      short: "Denominator value",
      definition: "The value of the denominator.",
      min: 0,
      max: "1",
      base: { path: "Ratio.denominator", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: ".denominator" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod",
    basePath: "root.dosage.maxDosePerPeriod.denominator",
    baseId: "Ratio.denominator",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator.value",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator.comparator",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator.unit",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator.system",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator",
    basePath: "root.dosage.maxDosePerPeriod.denominator.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator",
    basePath: "root.dosage.maxDosePerPeriod.denominator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator",
    basePath: "root.dosage.maxDosePerPeriod.denominator.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator",
    basePath: "root.dosage.maxDosePerPeriod.denominator.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerPeriod.denominator",
    basePath: "root.dosage.maxDosePerPeriod.denominator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Dosage.maxDosePerAdministration",
      path: "Dosage.maxDosePerAdministration",
      short: "Upper limit on medication per administration",
      definition: "Upper limit on medication per administration.",
      comment:
        "This is intended for use as an adjunct to the dosage when there is an upper cap.  For example, a body surface area related dose with a maximum amount, such as 1.5 mg/m2 (maximum 2 mg) IV over 5 – 10 minutes would have doseQuantity of 1.5 mg/m2 and maxDosePerAdministration of 2 mg.",
      requirements:
        "The maximum total quantity of a therapeutic substance that may be administered to a subject per administration.",
      min: 0,
      max: "1",
      base: { path: "Dosage.maxDosePerAdministration", min: 0, max: "1" },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "not supported" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.maxDosePerAdministration",
    baseId: "Dosage.maxDosePerAdministration",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration.value",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration.comparator",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration.unit",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration.system",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration",
    basePath: "root.dosage.maxDosePerAdministration.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration",
    basePath: "root.dosage.maxDosePerAdministration.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration",
    basePath: "root.dosage.maxDosePerAdministration.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration",
    basePath: "root.dosage.maxDosePerAdministration.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerAdministration",
    basePath: "root.dosage.maxDosePerAdministration.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Dosage.maxDosePerLifetime",
      path: "Dosage.maxDosePerLifetime",
      short: "Upper limit on medication per lifetime of the patient",
      definition: "Upper limit on medication per lifetime of the patient.",
      requirements:
        "The maximum total quantity of a therapeutic substance that may be administered per lifetime of the subject.",
      min: 0,
      max: "1",
      base: { path: "Dosage.maxDosePerLifetime", min: 0, max: "1" },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "not supported" }],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime",
    parentDataPath: "root.administrationGuidelines.dosage.dosage[0]",
    basePath: "root.dosage.maxDosePerLifetime",
    baseId: "Dosage.maxDosePerLifetime",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime.value",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime.comparator",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime.unit",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime.system",
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime.value",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime",
    basePath: "root.dosage.maxDosePerLifetime.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime.comparator",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime",
    basePath: "root.dosage.maxDosePerLifetime.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime.unit",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime",
    basePath: "root.dosage.maxDosePerLifetime.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime.system",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime",
    basePath: "root.dosage.maxDosePerLifetime.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime.code",
    parentDataPath:
      "root.administrationGuidelines.dosage.dosage[0].maxDosePerLifetime",
    basePath: "root.dosage.maxDosePerLifetime.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines.indication[x]",
      path: "MedicationKnowledge.administrationGuidelines.indication[x]",
      short:
        "Indication for use that apply to the specific administration guidelines",
      definition:
        "Indication for use that apply to the specific administration guidelines.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.administrationGuidelines.indication[x]",
        min: 0,
        max: "1",
      },
      type: [
        { code: "CodeableConcept" },
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
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
    dataPath: "root.administrationGuidelines.indication[x]",
    parentDataPath: "root.administrationGuidelines[0]",
    basePath: "root.indication[x]",
    baseId: "MedicationKnowledge.administrationGuidelines.indication[x]",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.indicationCodeableConcept.coding[0]",
      "root.administrationGuidelines.indicationCodeableConcept.text",
      "root.administrationGuidelines.indicationReference.reference",
      "root.administrationGuidelines.indicationReference.type",
      "root.administrationGuidelines.indicationReference.display",
    ],
    multiTypeType: "CodeableConcept",
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.indicationCodeableConcept.coding[0]",
    parentDataPath: "root.administrationGuidelines.indication[x]",
    basePath: "root.indication[x].coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.indicationCodeableConcept.coding[0].system",
      "root.administrationGuidelines.indicationCodeableConcept.coding[0].version",
      "root.administrationGuidelines.indicationCodeableConcept.coding[0].code",
      "root.administrationGuidelines.indicationCodeableConcept.coding[0].display",
      "root.administrationGuidelines.indicationCodeableConcept.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.indicationCodeableConcept.coding[0].system",
    parentDataPath:
      "root.administrationGuidelines.indicationCodeableConcept.coding[0]",
    basePath: "root.indication[x].coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.indicationCodeableConcept.coding[0].version",
    parentDataPath:
      "root.administrationGuidelines.indicationCodeableConcept.coding[0]",
    basePath: "root.indication[x].coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.indicationCodeableConcept.coding[0].code",
    parentDataPath:
      "root.administrationGuidelines.indicationCodeableConcept.coding[0]",
    basePath: "root.indication[x].coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.indicationCodeableConcept.coding[0].display",
    parentDataPath:
      "root.administrationGuidelines.indicationCodeableConcept.coding[0]",
    basePath: "root.indication[x].coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.indicationCodeableConcept.coding[0].userSelected",
    parentDataPath:
      "root.administrationGuidelines.indicationCodeableConcept.coding[0]",
    basePath: "root.indication[x].coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.administrationGuidelines.indicationCodeableConcept.text",
    parentDataPath: "root.administrationGuidelines.indication[x]",
    basePath: "root.indication[x].text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.administrationGuidelines.indicationReference.reference",
    parentDataPath: "root.administrationGuidelines.indication[x]",
    basePath: "root.indication[x].reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.administrationGuidelines.indicationReference.type",
    parentDataPath: "root.administrationGuidelines.indication[x]",
    basePath: "root.indication[x].type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
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
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.administrationGuidelines.indicationReference.display",
    parentDataPath: "root.administrationGuidelines.indication[x]",
    basePath: "root.indication[x].display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines.patientCharacteristics",
      path: "MedicationKnowledge.administrationGuidelines.patientCharacteristics",
      short:
        "Characteristics of the patient that are relevant to the administration guidelines",
      definition:
        "Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.administrationGuidelines.patientCharacteristics",
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
    dataPath: "root.administrationGuidelines.patientCharacteristics[0]",
    parentDataPath: "root.administrationGuidelines[0]",
    basePath: "root.patientCharacteristics",
    baseId:
      "MedicationKnowledge.administrationGuidelines.patientCharacteristics",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.patientCharacteristics.characteristic[x]",
      "root.administrationGuidelines.patientCharacteristics.value[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines.patientCharacteristics.characteristic[x]",
      path: "MedicationKnowledge.administrationGuidelines.patientCharacteristics.characteristic[x]",
      short:
        "Specific characteristic that is relevant to the administration guideline",
      definition:
        "Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).",
      min: 1,
      max: "1",
      base: {
        path: "MedicationKnowledge.administrationGuidelines.patientCharacteristics.characteristic[x]",
        min: 1,
        max: "1",
      },
      type: [
        { code: "CodeableConcept" },
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristic[x]",
    parentDataPath: "root.administrationGuidelines.patientCharacteristics[0]",
    basePath: "root.characteristic[x]",
    baseId:
      "MedicationKnowledge.administrationGuidelines.patientCharacteristics.characteristic[x]",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0]",
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.text",
      "root.administrationGuidelines.patientCharacteristics.characteristicQuantity.value",
      "root.administrationGuidelines.patientCharacteristics.characteristicQuantity.comparator",
      "root.administrationGuidelines.patientCharacteristics.characteristicQuantity.unit",
      "root.administrationGuidelines.patientCharacteristics.characteristicQuantity.system",
      "root.administrationGuidelines.patientCharacteristics.characteristicQuantity.code",
    ],
    multiTypeType: "CodeableConcept",
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0]",
    parentDataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristic[x]",
    basePath: "root.characteristic[x].coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0].system",
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0].version",
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0].code",
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0].display",
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0].system",
    parentDataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0]",
    basePath: "root.characteristic[x].coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0].version",
    parentDataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0]",
    basePath: "root.characteristic[x].coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0].code",
    parentDataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0]",
    basePath: "root.characteristic[x].coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0].display",
    parentDataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0]",
    basePath: "root.characteristic[x].coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0].userSelected",
    parentDataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.coding[0]",
    basePath: "root.characteristic[x].coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicCodeableConcept.text",
    parentDataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristic[x]",
    basePath: "root.characteristic[x].text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicQuantity.value",
    parentDataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristic[x]",
    basePath: "root.characteristic[x].value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicQuantity.comparator",
    parentDataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristic[x]",
    basePath: "root.characteristic[x].comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicQuantity.unit",
    parentDataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristic[x]",
    basePath: "root.characteristic[x].unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicQuantity.system",
    parentDataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristic[x]",
    basePath: "root.characteristic[x].system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristicQuantity.code",
    parentDataPath:
      "root.administrationGuidelines.patientCharacteristics.characteristic[x]",
    basePath: "root.characteristic[x].code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines.patientCharacteristics.value",
      path: "MedicationKnowledge.administrationGuidelines.patientCharacteristics.value",
      short: "The specific characteristic",
      definition:
        "The specific characteristic (e.g. height, weight, gender, etc.).",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.administrationGuidelines.patientCharacteristics.value",
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
      isSummary: false,
    },
    dataPath: "root.administrationGuidelines.patientCharacteristics.value[0]",
    parentDataPath: "root.administrationGuidelines.patientCharacteristics[0]",
    basePath: "root.value",
    baseId:
      "MedicationKnowledge.administrationGuidelines.patientCharacteristics.value",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.medicineClassification",
      path: "MedicationKnowledge.medicineClassification",
      short:
        "Categorization of the medication within a formulary or classification system",
      definition:
        "Categorization of the medication within a formulary or classification system.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.medicineClassification",
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
    dataPath: "root.medicineClassification[0]",
    parentDataPath: "root",
    basePath: "root.medicineClassification",
    baseId: "MedicationKnowledge.medicineClassification",
    isPrimitive: false,
    childPaths: [
      "root.medicineClassification.type",
      "root.medicineClassification.classification[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.medicineClassification.type",
      path: "MedicationKnowledge.medicineClassification.type",
      short:
        "The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification)",
      definition:
        "The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).",
      min: 1,
      max: "1",
      base: {
        path: "MedicationKnowledge.medicineClassification.type",
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
    },
    dataPath: "root.medicineClassification.type",
    parentDataPath: "root.medicineClassification[0]",
    basePath: "root.type",
    baseId: "MedicationKnowledge.medicineClassification.type",
    isPrimitive: false,
    childPaths: [
      "root.medicineClassification.type.coding[0]",
      "root.medicineClassification.type.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.medicineClassification.type.coding[0]",
    parentDataPath: "root.medicineClassification.type",
    basePath: "root.type.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.medicineClassification.type.coding[0].system",
      "root.medicineClassification.type.coding[0].version",
      "root.medicineClassification.type.coding[0].code",
      "root.medicineClassification.type.coding[0].display",
      "root.medicineClassification.type.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.medicineClassification.type.coding[0].system",
    parentDataPath: "root.medicineClassification.type.coding[0]",
    basePath: "root.type.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.medicineClassification.type.coding[0].version",
    parentDataPath: "root.medicineClassification.type.coding[0]",
    basePath: "root.type.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.medicineClassification.type.coding[0].code",
    parentDataPath: "root.medicineClassification.type.coding[0]",
    basePath: "root.type.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.medicineClassification.type.coding[0].display",
    parentDataPath: "root.medicineClassification.type.coding[0]",
    basePath: "root.type.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.medicineClassification.type.coding[0].userSelected",
    parentDataPath: "root.medicineClassification.type.coding[0]",
    basePath: "root.type.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.medicineClassification.type.text",
    parentDataPath: "root.medicineClassification.type",
    basePath: "root.type.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.medicineClassification.classification",
      path: "MedicationKnowledge.medicineClassification.classification",
      short: "Specific category assigned to the medication",
      definition:
        "Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.medicineClassification.classification",
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
    },
    dataPath: "root.medicineClassification.classification[0]",
    parentDataPath: "root.medicineClassification[0]",
    basePath: "root.classification",
    baseId: "MedicationKnowledge.medicineClassification.classification",
    isPrimitive: false,
    childPaths: [
      "root.medicineClassification.classification[0].coding[0]",
      "root.medicineClassification.classification[0].text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.medicineClassification.classification[0].coding[0]",
    parentDataPath: "root.medicineClassification.classification[0]",
    basePath: "root.classification.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.medicineClassification.classification[0].coding[0].system",
      "root.medicineClassification.classification[0].coding[0].version",
      "root.medicineClassification.classification[0].coding[0].code",
      "root.medicineClassification.classification[0].coding[0].display",
      "root.medicineClassification.classification[0].coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.medicineClassification.classification[0].coding[0].system",
    parentDataPath: "root.medicineClassification.classification[0].coding[0]",
    basePath: "root.classification.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.medicineClassification.classification[0].coding[0].version",
    parentDataPath: "root.medicineClassification.classification[0].coding[0]",
    basePath: "root.classification.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.medicineClassification.classification[0].coding[0].code",
    parentDataPath: "root.medicineClassification.classification[0].coding[0]",
    basePath: "root.classification.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.medicineClassification.classification[0].coding[0].display",
    parentDataPath: "root.medicineClassification.classification[0].coding[0]",
    basePath: "root.classification.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath:
      "root.medicineClassification.classification[0].coding[0].userSelected",
    parentDataPath: "root.medicineClassification.classification[0].coding[0]",
    basePath: "root.classification.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.medicineClassification.classification[0].text",
    parentDataPath: "root.medicineClassification.classification[0]",
    basePath: "root.classification.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.packaging",
      path: "MedicationKnowledge.packaging",
      short: "Details about packaged medications",
      definition: "Information that only applies to packages (not products).",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.packaging", min: 0, max: "1" },
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
    dataPath: "root.packaging",
    parentDataPath: "root",
    basePath: "root.packaging",
    baseId: "MedicationKnowledge.packaging",
    isPrimitive: false,
    childPaths: ["root.packaging.type", "root.packaging.quantity"],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.packaging.type",
      path: "MedicationKnowledge.packaging.type",
      short:
        "A code that defines the specific type of packaging that the medication can be found in",
      definition:
        "A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.packaging.type", min: 0, max: "1" },
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
            valueString: "MedicationPackageType",
          },
        ],
        strength: "example",
        description:
          "A coded concept defining the type of packaging of a medication.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/medicationknowledge-package-type",
      },
    },
    dataPath: "root.packaging.type",
    parentDataPath: "root.packaging",
    basePath: "root.type",
    baseId: "MedicationKnowledge.packaging.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "amp",
        display: "Ampule",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "bag",
        display: "Bag",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "blstrpk",
        display: "Blister Pack",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "bot",
        display: "Bottle",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "box",
        display: "Box",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "can",
        display: "Can",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "cart",
        display: "Cartridge",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "disk",
        display: "Disk",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "doset",
        display: "Dosette",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "jar",
        display: "Jar",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "jug",
        display: "Jug",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "minim",
        display: "Minim",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "nebamp",
        display: "Nebule Amp",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "ovul",
        display: "Ovule",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "pch",
        display: "Pouch",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "pkt",
        display: "Packet",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "sash",
        display: "Sashet",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "strip",
        display: "Strip",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "tin",
        display: "Tin",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "tub",
        display: "Tub",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "tube",
        display: "Tube",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "vial",
        display: "Vial",
      },
    ],
  },
  {
    element: {
      id: "MedicationKnowledge.packaging.quantity",
      path: "MedicationKnowledge.packaging.quantity",
      short:
        "The number of product units the package would contain if fully loaded",
      definition:
        "The number of product units the package would contain if fully loaded.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.packaging.quantity",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
    dataPath: "root.packaging.quantity",
    parentDataPath: "root.packaging",
    basePath: "root.quantity",
    baseId: "MedicationKnowledge.packaging.quantity",
    isPrimitive: false,
    childPaths: [
      "root.packaging.quantity.value",
      "root.packaging.quantity.comparator",
      "root.packaging.quantity.unit",
      "root.packaging.quantity.system",
      "root.packaging.quantity.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath: "root.packaging.quantity.value",
    parentDataPath: "root.packaging.quantity",
    basePath: "root.quantity.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath: "root.packaging.quantity.comparator",
    parentDataPath: "root.packaging.quantity",
    basePath: "root.quantity.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath: "root.packaging.quantity.unit",
    parentDataPath: "root.packaging.quantity",
    basePath: "root.quantity.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath: "root.packaging.quantity.system",
    parentDataPath: "root.packaging.quantity",
    basePath: "root.quantity.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath: "root.packaging.quantity.code",
    parentDataPath: "root.packaging.quantity",
    basePath: "root.quantity.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.drugCharacteristic",
      path: "MedicationKnowledge.drugCharacteristic",
      short: "Specifies descriptive properties of the medicine",
      definition:
        "Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.drugCharacteristic",
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
    dataPath: "root.drugCharacteristic[0]",
    parentDataPath: "root",
    basePath: "root.drugCharacteristic",
    baseId: "MedicationKnowledge.drugCharacteristic",
    isPrimitive: false,
    childPaths: [
      "root.drugCharacteristic.type",
      "root.drugCharacteristic.value[x]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.drugCharacteristic.type",
      path: "MedicationKnowledge.drugCharacteristic.type",
      short: "Code specifying the type of characteristic of medication",
      definition:
        "A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.drugCharacteristic.type",
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
            valueString: "MedicationCharacteristic",
          },
        ],
        strength: "example",
        description:
          "A coded concept defining the characteristic types of a medication.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/medicationknowledge-characteristic",
      },
    },
    dataPath: "root.drugCharacteristic.type",
    parentDataPath: "root.drugCharacteristic[0]",
    basePath: "root.type",
    baseId: "MedicationKnowledge.drugCharacteristic.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "imprintcd",
        display: "Imprint Code",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "size",
        display: "Size",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "shape",
        display: "Shape",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "color",
        display: "Color",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "coating",
        display: "Coating",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "scoring",
        display: "Scoring",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "logo",
        display: "Logo",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "image",
        display: "Image",
      },
    ],
  },
  {
    element: {
      id: "MedicationKnowledge.drugCharacteristic.value[x]",
      path: "MedicationKnowledge.drugCharacteristic.value[x]",
      short: "Description of the characteristic",
      definition: "Description of the characteristic.",
      comment:
        "The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.drugCharacteristic.value[x]",
        min: 0,
        max: "1",
      },
      type: [
        { code: "CodeableConcept" },
        { code: "string" },
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
        },
        { code: "base64Binary" },
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
    dataPath: "root.drugCharacteristic.value[x]",
    parentDataPath: "root.drugCharacteristic[0]",
    basePath: "root.value[x]",
    baseId: "MedicationKnowledge.drugCharacteristic.value[x]",
    isPrimitive: false,
    childPaths: [
      "root.drugCharacteristic.valueCodeableConcept.coding[0]",
      "root.drugCharacteristic.valueCodeableConcept.text",
      "root.drugCharacteristic.valueString.string",
      "root.drugCharacteristic.valueQuantity.value",
      "root.drugCharacteristic.valueQuantity.comparator",
      "root.drugCharacteristic.valueQuantity.unit",
      "root.drugCharacteristic.valueQuantity.system",
      "root.drugCharacteristic.valueQuantity.code",
      "root.drugCharacteristic.valueBase64Binary.base64Binary",
    ],
    multiTypeType: "CodeableConcept",
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.drugCharacteristic.valueCodeableConcept.coding[0]",
    parentDataPath: "root.drugCharacteristic.value[x]",
    basePath: "root.value[x].coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.drugCharacteristic.valueCodeableConcept.coding[0].system",
      "root.drugCharacteristic.valueCodeableConcept.coding[0].version",
      "root.drugCharacteristic.valueCodeableConcept.coding[0].code",
      "root.drugCharacteristic.valueCodeableConcept.coding[0].display",
      "root.drugCharacteristic.valueCodeableConcept.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.drugCharacteristic.valueCodeableConcept.coding[0].system",
    parentDataPath: "root.drugCharacteristic.valueCodeableConcept.coding[0]",
    basePath: "root.value[x].coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.drugCharacteristic.valueCodeableConcept.coding[0].version",
    parentDataPath: "root.drugCharacteristic.valueCodeableConcept.coding[0]",
    basePath: "root.value[x].coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.drugCharacteristic.valueCodeableConcept.coding[0].code",
    parentDataPath: "root.drugCharacteristic.valueCodeableConcept.coding[0]",
    basePath: "root.value[x].coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.drugCharacteristic.valueCodeableConcept.coding[0].display",
    parentDataPath: "root.drugCharacteristic.valueCodeableConcept.coding[0]",
    basePath: "root.value[x].coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath:
      "root.drugCharacteristic.valueCodeableConcept.coding[0].userSelected",
    parentDataPath: "root.drugCharacteristic.valueCodeableConcept.coding[0]",
    basePath: "root.value[x].coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.drugCharacteristic.valueCodeableConcept.text",
    parentDataPath: "root.drugCharacteristic.value[x]",
    basePath: "root.value[x].text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "string",
      path: "string",
      short: "Primitive Type string",
      definition: "A sequence of Unicode characters",
      comment: "Note that FHIR strings SHALL NOT exceed 1MB in size",
      min: 0,
      max: "1",
      base: { path: "string", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: false,
      type: [{ code: "string" }],
    },
    dataPath: "root.drugCharacteristic.valueString.string",
    parentDataPath: "root.drugCharacteristic.value[x]",
    basePath: "root.value[x].string",
    baseId: "MedicationKnowledge.drugCharacteristic.value[x]",
    isPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath: "root.drugCharacteristic.valueQuantity.value",
    parentDataPath: "root.drugCharacteristic.value[x]",
    basePath: "root.value[x].value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath: "root.drugCharacteristic.valueQuantity.comparator",
    parentDataPath: "root.drugCharacteristic.value[x]",
    basePath: "root.value[x].comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath: "root.drugCharacteristic.valueQuantity.unit",
    parentDataPath: "root.drugCharacteristic.value[x]",
    basePath: "root.value[x].unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath: "root.drugCharacteristic.valueQuantity.system",
    parentDataPath: "root.drugCharacteristic.value[x]",
    basePath: "root.value[x].system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath: "root.drugCharacteristic.valueQuantity.code",
    parentDataPath: "root.drugCharacteristic.value[x]",
    basePath: "root.value[x].code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "base64Binary",
      path: "base64Binary",
      short: "Primitive Type base64Binary",
      definition: "A stream of bytes",
      comment: "A stream of bytes, base64 encoded",
      min: 0,
      max: "1",
      base: { path: "base64Binary", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: false,
      type: [{ code: "base64Binary" }],
    },
    dataPath: "root.drugCharacteristic.valueBase64Binary.base64Binary",
    parentDataPath: "root.drugCharacteristic.value[x]",
    basePath: "root.value[x].base64Binary",
    baseId: "MedicationKnowledge.drugCharacteristic.value[x]",
    isPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.contraindication",
      path: "MedicationKnowledge.contraindication",
      short: "Potential clinical issue with or between medication(s)",
      definition:
        "Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.contraindication", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/DetectedIssue",
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
    dataPath: "root.contraindication[0]",
    parentDataPath: "root",
    basePath: "root.contraindication",
    baseId: "MedicationKnowledge.contraindication",
    isPrimitive: false,
    childPaths: [
      "root.contraindication[0].reference",
      "root.contraindication[0].type",
      "root.contraindication[0].display",
    ],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.contraindication[0].reference",
    parentDataPath: "root.contraindication[0]",
    basePath: "root.contraindication.reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.contraindication[0].type",
    parentDataPath: "root.contraindication[0]",
    basePath: "root.contraindication.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
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
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.contraindication[0].display",
    parentDataPath: "root.contraindication[0]",
    basePath: "root.contraindication.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory",
      path: "MedicationKnowledge.regulatory",
      short: "Regulatory information about a medication",
      definition: "Regulatory information about a medication.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.regulatory", min: 0, max: "*" },
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
    dataPath: "root.regulatory[0]",
    parentDataPath: "root",
    basePath: "root.regulatory",
    baseId: "MedicationKnowledge.regulatory",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.regulatoryAuthority",
      "root.regulatory.substitution[0]",
      "root.regulatory.schedule[0]",
      "root.regulatory.maxDispense",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.regulatoryAuthority",
      path: "MedicationKnowledge.regulatory.regulatoryAuthority",
      short: "Specifies the authority of the regulation",
      definition: "The authority that is specifying the regulations.",
      min: 1,
      max: "1",
      base: {
        path: "MedicationKnowledge.regulatory.regulatoryAuthority",
        min: 1,
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
    dataPath: "root.regulatory.regulatoryAuthority",
    parentDataPath: "root.regulatory[0]",
    basePath: "root.regulatoryAuthority",
    baseId: "MedicationKnowledge.regulatory.regulatoryAuthority",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.regulatoryAuthority.reference",
      "root.regulatory.regulatoryAuthority.type",
      "root.regulatory.regulatoryAuthority.display",
    ],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.regulatory.regulatoryAuthority.reference",
    parentDataPath: "root.regulatory.regulatoryAuthority",
    basePath: "root.regulatoryAuthority.reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.regulatory.regulatoryAuthority.type",
    parentDataPath: "root.regulatory.regulatoryAuthority",
    basePath: "root.regulatoryAuthority.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
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
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.regulatory.regulatoryAuthority.display",
    parentDataPath: "root.regulatory.regulatoryAuthority",
    basePath: "root.regulatoryAuthority.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.substitution",
      path: "MedicationKnowledge.regulatory.substitution",
      short:
        "Specifies if changes are allowed when dispensing a medication from a regulatory perspective",
      definition:
        "Specifies if changes are allowed when dispensing a medication from a regulatory perspective.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.regulatory.substitution",
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
    dataPath: "root.regulatory.substitution[0]",
    parentDataPath: "root.regulatory[0]",
    basePath: "root.substitution",
    baseId: "MedicationKnowledge.regulatory.substitution",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.substitution.type",
      "root.regulatory.substitution.allowed",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.substitution.type",
      path: "MedicationKnowledge.regulatory.substitution.type",
      short: "Specifies the type of substitution allowed",
      definition: "Specifies the type of substitution allowed.",
      min: 1,
      max: "1",
      base: {
        path: "MedicationKnowledge.regulatory.substitution.type",
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
    },
    dataPath: "root.regulatory.substitution.type",
    parentDataPath: "root.regulatory.substitution[0]",
    basePath: "root.type",
    baseId: "MedicationKnowledge.regulatory.substitution.type",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.substitution.type.coding[0]",
      "root.regulatory.substitution.type.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.regulatory.substitution.type.coding[0]",
    parentDataPath: "root.regulatory.substitution.type",
    basePath: "root.type.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.substitution.type.coding[0].system",
      "root.regulatory.substitution.type.coding[0].version",
      "root.regulatory.substitution.type.coding[0].code",
      "root.regulatory.substitution.type.coding[0].display",
      "root.regulatory.substitution.type.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.regulatory.substitution.type.coding[0].system",
    parentDataPath: "root.regulatory.substitution.type.coding[0]",
    basePath: "root.type.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.regulatory.substitution.type.coding[0].version",
    parentDataPath: "root.regulatory.substitution.type.coding[0]",
    basePath: "root.type.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.regulatory.substitution.type.coding[0].code",
    parentDataPath: "root.regulatory.substitution.type.coding[0]",
    basePath: "root.type.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.regulatory.substitution.type.coding[0].display",
    parentDataPath: "root.regulatory.substitution.type.coding[0]",
    basePath: "root.type.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.regulatory.substitution.type.coding[0].userSelected",
    parentDataPath: "root.regulatory.substitution.type.coding[0]",
    basePath: "root.type.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.regulatory.substitution.type.text",
    parentDataPath: "root.regulatory.substitution.type",
    basePath: "root.type.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.substitution.allowed",
      path: "MedicationKnowledge.regulatory.substitution.allowed",
      short:
        "Specifies if regulation allows for changes in the medication when dispensing",
      definition:
        "Specifies if regulation allows for changes in the medication when dispensing.",
      min: 1,
      max: "1",
      base: {
        path: "MedicationKnowledge.regulatory.substitution.allowed",
        min: 1,
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
    dataPath: "root.regulatory.substitution.allowed",
    parentDataPath: "root.regulatory.substitution[0]",
    basePath: "root.allowed",
    baseId: "MedicationKnowledge.regulatory.substitution.allowed",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.schedule",
      path: "MedicationKnowledge.regulatory.schedule",
      short: "Specifies the schedule of a medication in jurisdiction",
      definition: "Specifies the schedule of a medication in jurisdiction.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.regulatory.schedule",
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
    dataPath: "root.regulatory.schedule[0]",
    parentDataPath: "root.regulatory[0]",
    basePath: "root.schedule",
    baseId: "MedicationKnowledge.regulatory.schedule",
    isPrimitive: false,
    childPaths: ["root.regulatory.schedule.schedule"],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.schedule.schedule",
      path: "MedicationKnowledge.regulatory.schedule.schedule",
      short: "Specifies the specific drug schedule",
      definition: "Specifies the specific drug schedule.",
      min: 1,
      max: "1",
      base: {
        path: "MedicationKnowledge.regulatory.schedule.schedule",
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
    },
    dataPath: "root.regulatory.schedule.schedule",
    parentDataPath: "root.regulatory.schedule[0]",
    basePath: "root.schedule",
    baseId: "MedicationKnowledge.regulatory.schedule.schedule",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.schedule.schedule.coding[0]",
      "root.regulatory.schedule.schedule.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.regulatory.schedule.schedule.coding[0]",
    parentDataPath: "root.regulatory.schedule.schedule",
    basePath: "root.schedule.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.schedule.schedule.coding[0].system",
      "root.regulatory.schedule.schedule.coding[0].version",
      "root.regulatory.schedule.schedule.coding[0].code",
      "root.regulatory.schedule.schedule.coding[0].display",
      "root.regulatory.schedule.schedule.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.regulatory.schedule.schedule.coding[0].system",
    parentDataPath: "root.regulatory.schedule.schedule.coding[0]",
    basePath: "root.schedule.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.regulatory.schedule.schedule.coding[0].version",
    parentDataPath: "root.regulatory.schedule.schedule.coding[0]",
    basePath: "root.schedule.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.regulatory.schedule.schedule.coding[0].code",
    parentDataPath: "root.regulatory.schedule.schedule.coding[0]",
    basePath: "root.schedule.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.regulatory.schedule.schedule.coding[0].display",
    parentDataPath: "root.regulatory.schedule.schedule.coding[0]",
    basePath: "root.schedule.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.regulatory.schedule.schedule.coding[0].userSelected",
    parentDataPath: "root.regulatory.schedule.schedule.coding[0]",
    basePath: "root.schedule.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.regulatory.schedule.schedule.text",
    parentDataPath: "root.regulatory.schedule.schedule",
    basePath: "root.schedule.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.maxDispense",
      path: "MedicationKnowledge.regulatory.maxDispense",
      short:
        "The maximum number of units of the medication that can be dispensed in a period",
      definition:
        "The maximum number of units of the medication that can be dispensed in a period.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.regulatory.maxDispense",
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
    dataPath: "root.regulatory.maxDispense",
    parentDataPath: "root.regulatory[0]",
    basePath: "root.maxDispense",
    baseId: "MedicationKnowledge.regulatory.maxDispense",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.maxDispense.quantity",
      "root.regulatory.maxDispense.period",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.maxDispense.quantity",
      path: "MedicationKnowledge.regulatory.maxDispense.quantity",
      short:
        "The maximum number of units of the medication that can be dispensed",
      definition:
        "The maximum number of units of the medication that can be dispensed.",
      min: 1,
      max: "1",
      base: {
        path: "MedicationKnowledge.regulatory.maxDispense.quantity",
        min: 1,
        max: "1",
      },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
    dataPath: "root.regulatory.maxDispense.quantity",
    parentDataPath: "root.regulatory.maxDispense",
    basePath: "root.quantity",
    baseId: "MedicationKnowledge.regulatory.maxDispense.quantity",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.maxDispense.quantity.value",
      "root.regulatory.maxDispense.quantity.comparator",
      "root.regulatory.maxDispense.quantity.unit",
      "root.regulatory.maxDispense.quantity.system",
      "root.regulatory.maxDispense.quantity.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath: "root.regulatory.maxDispense.quantity.value",
    parentDataPath: "root.regulatory.maxDispense.quantity",
    basePath: "root.quantity.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath: "root.regulatory.maxDispense.quantity.comparator",
    parentDataPath: "root.regulatory.maxDispense.quantity",
    basePath: "root.quantity.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath: "root.regulatory.maxDispense.quantity.unit",
    parentDataPath: "root.regulatory.maxDispense.quantity",
    basePath: "root.quantity.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath: "root.regulatory.maxDispense.quantity.system",
    parentDataPath: "root.regulatory.maxDispense.quantity",
    basePath: "root.quantity.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath: "root.regulatory.maxDispense.quantity.code",
    parentDataPath: "root.regulatory.maxDispense.quantity",
    basePath: "root.quantity.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.maxDispense.period",
      path: "MedicationKnowledge.regulatory.maxDispense.period",
      short: "The period that applies to the maximum number of units",
      definition: "The period that applies to the maximum number of units.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.regulatory.maxDispense.period",
        min: 0,
        max: "1",
      },
      type: [{ code: "Duration" }],
      constraint: [
        {
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
    dataPath: "root.regulatory.maxDispense.period",
    parentDataPath: "root.regulatory.maxDispense",
    basePath: "root.period",
    baseId: "MedicationKnowledge.regulatory.maxDispense.period",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.maxDispense.period.value",
      "root.regulatory.maxDispense.period.comparator",
      "root.regulatory.maxDispense.period.unit",
      "root.regulatory.maxDispense.period.system",
      "root.regulatory.maxDispense.period.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Duration.value",
      path: "Duration.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath: "root.regulatory.maxDispense.period.value",
    parentDataPath: "root.regulatory.maxDispense.period",
    basePath: "root.period.value",
    baseId: "Duration.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Duration.comparator",
      path: "Duration.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath: "root.regulatory.maxDispense.period.comparator",
    parentDataPath: "root.regulatory.maxDispense.period",
    basePath: "root.period.comparator",
    baseId: "Duration.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Duration.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Duration.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath: "root.regulatory.maxDispense.period.unit",
    parentDataPath: "root.regulatory.maxDispense.period",
    basePath: "root.period.unit",
    baseId: "Duration.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Duration.system",
      path: "Duration.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath: "root.regulatory.maxDispense.period.system",
    parentDataPath: "root.regulatory.maxDispense.period",
    basePath: "root.period.system",
    baseId: "Duration.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Duration.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Duration.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath: "root.regulatory.maxDispense.period.code",
    parentDataPath: "root.regulatory.maxDispense.period",
    basePath: "root.period.code",
    baseId: "Duration.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.kinetics",
      path: "MedicationKnowledge.kinetics",
      short:
        "The time course of drug absorption, distribution, metabolism and excretion of a medication from the body",
      definition:
        "The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.kinetics", min: 0, max: "*" },
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
    dataPath: "root.kinetics[0]",
    parentDataPath: "root",
    basePath: "root.kinetics",
    baseId: "MedicationKnowledge.kinetics",
    isPrimitive: false,
    childPaths: [
      "root.kinetics.areaUnderCurve[0]",
      "root.kinetics.lethalDose50[0]",
      "root.kinetics.halfLifePeriod",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.kinetics.areaUnderCurve",
      path: "MedicationKnowledge.kinetics.areaUnderCurve",
      short:
        "The drug concentration measured at certain discrete points in time",
      definition:
        "The drug concentration measured at certain discrete points in time.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.kinetics.areaUnderCurve",
        min: 0,
        max: "*",
      },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
    dataPath: "root.kinetics.areaUnderCurve[0]",
    parentDataPath: "root.kinetics[0]",
    basePath: "root.areaUnderCurve",
    baseId: "MedicationKnowledge.kinetics.areaUnderCurve",
    isPrimitive: false,
    childPaths: [
      "root.kinetics.areaUnderCurve[0].value",
      "root.kinetics.areaUnderCurve[0].comparator",
      "root.kinetics.areaUnderCurve[0].unit",
      "root.kinetics.areaUnderCurve[0].system",
      "root.kinetics.areaUnderCurve[0].code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath: "root.kinetics.areaUnderCurve[0].value",
    parentDataPath: "root.kinetics.areaUnderCurve[0]",
    basePath: "root.areaUnderCurve.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath: "root.kinetics.areaUnderCurve[0].comparator",
    parentDataPath: "root.kinetics.areaUnderCurve[0]",
    basePath: "root.areaUnderCurve.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath: "root.kinetics.areaUnderCurve[0].unit",
    parentDataPath: "root.kinetics.areaUnderCurve[0]",
    basePath: "root.areaUnderCurve.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath: "root.kinetics.areaUnderCurve[0].system",
    parentDataPath: "root.kinetics.areaUnderCurve[0]",
    basePath: "root.areaUnderCurve.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath: "root.kinetics.areaUnderCurve[0].code",
    parentDataPath: "root.kinetics.areaUnderCurve[0]",
    basePath: "root.areaUnderCurve.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.kinetics.lethalDose50",
      path: "MedicationKnowledge.kinetics.lethalDose50",
      short: "The median lethal dose of a drug",
      definition: "The median lethal dose of a drug.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.kinetics.lethalDose50",
        min: 0,
        max: "*",
      },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
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
    dataPath: "root.kinetics.lethalDose50[0]",
    parentDataPath: "root.kinetics[0]",
    basePath: "root.lethalDose50",
    baseId: "MedicationKnowledge.kinetics.lethalDose50",
    isPrimitive: false,
    childPaths: [
      "root.kinetics.lethalDose50[0].value",
      "root.kinetics.lethalDose50[0].comparator",
      "root.kinetics.lethalDose50[0].unit",
      "root.kinetics.lethalDose50[0].system",
      "root.kinetics.lethalDose50[0].code",
    ],
    value: "",
  },
  {
    element: {
      id: "Quantity.value",
      path: "Quantity.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath: "root.kinetics.lethalDose50[0].value",
    parentDataPath: "root.kinetics.lethalDose50[0]",
    basePath: "root.lethalDose50.value",
    baseId: "Quantity.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.comparator",
      path: "Quantity.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath: "root.kinetics.lethalDose50[0].comparator",
    parentDataPath: "root.kinetics.lethalDose50[0]",
    basePath: "root.lethalDose50.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Quantity.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Quantity.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath: "root.kinetics.lethalDose50[0].unit",
    parentDataPath: "root.kinetics.lethalDose50[0]",
    basePath: "root.lethalDose50.unit",
    baseId: "Quantity.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.system",
      path: "Quantity.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath: "root.kinetics.lethalDose50[0].system",
    parentDataPath: "root.kinetics.lethalDose50[0]",
    basePath: "root.lethalDose50.system",
    baseId: "Quantity.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Quantity.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Quantity.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath: "root.kinetics.lethalDose50[0].code",
    parentDataPath: "root.kinetics.lethalDose50[0]",
    basePath: "root.lethalDose50.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.kinetics.halfLifePeriod",
      path: "MedicationKnowledge.kinetics.halfLifePeriod",
      short: "Time required for concentration in the body to decrease by half",
      definition:
        "The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.kinetics.halfLifePeriod",
        min: 0,
        max: "1",
      },
      type: [{ code: "Duration" }],
      constraint: [
        {
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
    dataPath: "root.kinetics.halfLifePeriod",
    parentDataPath: "root.kinetics[0]",
    basePath: "root.halfLifePeriod",
    baseId: "MedicationKnowledge.kinetics.halfLifePeriod",
    isPrimitive: false,
    childPaths: [
      "root.kinetics.halfLifePeriod.value",
      "root.kinetics.halfLifePeriod.comparator",
      "root.kinetics.halfLifePeriod.unit",
      "root.kinetics.halfLifePeriod.system",
      "root.kinetics.halfLifePeriod.code",
    ],
    value: "",
  },
  {
    element: {
      id: "Duration.value",
      path: "Duration.value",
      short: "Numerical value (with implicit precision)",
      definition:
        "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
      comment:
        "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
      requirements:
        "Precision is handled implicitly in almost all cases of measurement.",
      min: 0,
      max: "1",
      base: { path: "Quantity.value", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "SN.2  / CQ - N/A" },
        {
          identity: "rim",
          map: "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value",
        },
      ],
    },
    dataPath: "root.kinetics.halfLifePeriod.value",
    parentDataPath: "root.kinetics.halfLifePeriod",
    basePath: "root.halfLifePeriod.value",
    baseId: "Duration.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Duration.comparator",
      path: "Duration.comparator",
      short: "< | <= | >= | > - how to understand the value",
      definition:
        'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
      requirements:
        "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
      min: 0,
      max: "1",
      base: { path: "Quantity.comparator", min: 0, max: "1" },
      type: [{ code: "code" }],
      meaningWhenMissing:
        "If there is no comparator, then there is no modification of the value",
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "How the Quantity should be understood and represented.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "QuantityComparator",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/quantity-comparator|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "SN.1  / CQ.1" },
        { identity: "rim", map: "IVL properties" },
      ],
    },
    dataPath: "root.kinetics.halfLifePeriod.comparator",
    parentDataPath: "root.kinetics.halfLifePeriod",
    basePath: "root.halfLifePeriod.comparator",
    baseId: "Duration.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<",
        display: "Less than",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: "<=",
        display: "Less or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">=",
        display: "Greater or Equal to",
      },
      {
        system: "http://hl7.org/fhir/quantity-comparator",
        code: ">",
        display: "Greater than",
      },
    ],
  },
  {
    element: {
      id: "Duration.unit",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Duration.unit",
      short: "Unit representation",
      definition: "A human-readable form of the unit.",
      requirements:
        "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
      min: 0,
      max: "1",
      base: { path: "Quantity.unit", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.unit" },
      ],
    },
    dataPath: "root.kinetics.halfLifePeriod.unit",
    parentDataPath: "root.kinetics.halfLifePeriod",
    basePath: "root.halfLifePeriod.unit",
    baseId: "Duration.unit",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Duration.system",
      path: "Duration.system",
      short: "System that defines coded unit form",
      definition:
        "The identification of the system that provides the coded form of the unit.",
      requirements:
        "Need to know the system that defines the coded form of the unit.",
      min: 0,
      max: "1",
      base: { path: "Quantity.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      condition: ["qty-3"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "CO.codeSystem, PQ.translation.codeSystem" },
      ],
    },
    dataPath: "root.kinetics.halfLifePeriod.system",
    parentDataPath: "root.kinetics.halfLifePeriod",
    basePath: "root.halfLifePeriod.system",
    baseId: "Duration.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Duration.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Duration.code",
      short: "Coded form of the unit",
      definition:
        "A computer processable form of the unit in some unit representation system.",
      comment:
        "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
      requirements:
        "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
      min: 0,
      max: "1",
      base: { path: "Quantity.code", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "(see OBX.6 etc.) / CQ.2" },
        { identity: "rim", map: "PQ.code, MO.currency, PQ.translation.code" },
      ],
    },
    dataPath: "root.kinetics.halfLifePeriod.code",
    parentDataPath: "root.kinetics.halfLifePeriod",
    basePath: "root.halfLifePeriod.code",
    baseId: "Duration.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge",
      path: "MedicationKnowledge",
      short: "Definition of Medication Knowledge",
      definition:
        "Information about a medication that is used to support knowledge.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge", min: 0, max: "*" },
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
        { identity: "rim", map: "Todo" },
        { identity: "w5", map: "clinical.medication" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "MedicationKnowledge",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
