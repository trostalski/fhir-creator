const data = [
  {
    element: {
      id: "ClinicalUseDefinition.id",
      path: "ClinicalUseDefinition.id",
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
    baseId: "ClinicalUseDefinition.id",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.meta",
      path: "ClinicalUseDefinition.meta",
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
    baseId: "ClinicalUseDefinition.meta",
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
      id: "ClinicalUseDefinition.implicitRules",
      path: "ClinicalUseDefinition.implicitRules",
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
    baseId: "ClinicalUseDefinition.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.language",
      path: "ClinicalUseDefinition.language",
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
    baseId: "ClinicalUseDefinition.language",
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
      id: "ClinicalUseDefinition.text",
      path: "ClinicalUseDefinition.text",
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
    baseId: "ClinicalUseDefinition.text",
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
      id: "ClinicalUseDefinition.identifier",
      path: "ClinicalUseDefinition.identifier",
      short: "Business identifier for this issue",
      definition: "Business identifier for this issue.",
      min: 0,
      max: "*",
      base: { path: "ClinicalUseDefinition.identifier", min: 0, max: "*" },
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
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.identifier[0]",
    parentDataPath: "root",
    basePath: "root.identifier",
    baseId: "ClinicalUseDefinition.identifier",
    isPrimitive: false,
    childPaths: [
      "root.identifier[0].use",
      "root.identifier[0].type",
      "root.identifier[0].system",
      "root.identifier[0].value",
      "root.identifier[0].period",
      "root.identifier[0].assigner",
    ],
    value: "",
  },
  {
    element: {
      id: "Identifier.use",
      path: "Identifier.use",
      short: "usual | official | temp | secondary | old (If known)",
      definition: "The purpose of this identifier.",
      comment:
        "Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.",
      requirements:
        "Allows the appropriate identifier for a particular context of use to be selected from among a set of identifiers.",
      min: 0,
      max: "1",
      base: { path: "Identifier.use", min: 0, max: "1" },
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
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because applications should not mistake a temporary id for a permanent one.',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Identifies the purpose for this identifier, if known .",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "IdentifierUse",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/identifier-use|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "N/A" },
        { identity: "rim", map: "Role.code or implied by context" },
      ],
    },
    dataPath: "root.identifier[0].use",
    parentDataPath: "root.identifier[0]",
    basePath: "root.identifier.use",
    baseId: "Identifier.use",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/identifier-use",
        code: "usual",
        display: "Usual",
      },
      {
        system: "http://hl7.org/fhir/identifier-use",
        code: "official",
        display: "Official",
      },
      {
        system: "http://hl7.org/fhir/identifier-use",
        code: "temp",
        display: "Temp",
      },
      {
        system: "http://hl7.org/fhir/identifier-use",
        code: "secondary",
        display: "Secondary",
      },
      {
        system: "http://hl7.org/fhir/identifier-use",
        code: "old",
        display: "Old",
      },
    ],
  },
  {
    element: {
      id: "Identifier.type",
      path: "Identifier.type",
      short: "Description of identifier",
      definition:
        "A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.",
      comment:
        "This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.   Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.",
      requirements:
        "Allows users to make use of identifiers when the identifier system is not known.",
      min: 0,
      max: "1",
      base: { path: "Identifier.type", min: 0, max: "1" },
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
              "A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "IdentifierType",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/identifier-type",
      },
      mapping: [
        { identity: "v2", map: "CX.5" },
        { identity: "rim", map: "Role.code or implied by context" },
      ],
    },
    dataPath: "root.identifier[0].type",
    parentDataPath: "root.identifier[0]",
    basePath: "root.identifier.type",
    baseId: "Identifier.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
    bindingCodes: [
      { code: "DL" },
      { code: "PPN" },
      { code: "BRN" },
      { code: "MR" },
      { code: "MCN" },
      { code: "EN" },
      { code: "TAX" },
      { code: "NIIP" },
      { code: "PRN" },
      { code: "MD" },
      { code: "DR" },
      { code: "ACSN" },
      { code: "UDI" },
      { code: "SNO" },
      { code: "SB" },
      { code: "PLAC" },
      { code: "FILL" },
      { code: "JHN" },
    ],
  },
  {
    element: {
      id: "Identifier.system",
      path: "Identifier.system",
      short: "The namespace for the identifier value",
      definition:
        "Establishes the namespace for the value - that is, a URL that describes a set values that are unique.",
      comment: "Identifier.system is always case sensitive.",
      requirements:
        "There are many sets  of identifiers.  To perform matching of two identifiers, we need to know what set we're dealing with. The system identifies a particular set of unique identifiers.",
      min: 0,
      max: "1",
      base: { path: "Identifier.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      example: [
        {
          label: "General",
          valueUri: "http://www.acme.com/identifiers/patient",
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
        { identity: "v2", map: "CX.4 / EI-2-4" },
        { identity: "rim", map: "II.root or Role.id.root" },
        { identity: "servd", map: "./IdentifierType" },
      ],
    },
    dataPath: "root.identifier[0].system",
    parentDataPath: "root.identifier[0]",
    basePath: "root.identifier.system",
    baseId: "Identifier.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Identifier.value",
      path: "Identifier.value",
      short: "The value that is unique",
      definition:
        "The portion of the identifier typically relevant to the user and which is unique within the context of the system.",
      comment:
        "If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](extension-rendered-value.html). Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the processer to be confident that non-case-sensitive processing is safe.",
      min: 0,
      max: "1",
      base: { path: "Identifier.value", min: 0, max: "1" },
      type: [{ code: "string" }],
      example: [{ label: "General", valueString: "123456" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "CX.1 / EI.1" },
        {
          identity: "rim",
          map: "II.extension or II.root if system indicates OID or GUID (Or Role.id.extension or root)",
        },
        { identity: "servd", map: "./Value" },
      ],
    },
    dataPath: "root.identifier[0].value",
    parentDataPath: "root.identifier[0]",
    basePath: "root.identifier.value",
    baseId: "Identifier.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Identifier.period",
      path: "Identifier.period",
      short: "Time period when id is/was valid for use",
      definition: "Time period during which identifier is/was valid for use.",
      min: 0,
      max: "1",
      base: { path: "Identifier.period", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "CX.7 + CX.8" },
        { identity: "rim", map: "Role.effectiveTime or implied by context" },
        { identity: "servd", map: "./StartDate and ./EndDate" },
      ],
    },
    dataPath: "root.identifier[0].period",
    parentDataPath: "root.identifier[0]",
    basePath: "root.identifier.period",
    baseId: "Identifier.period",
    isPrimitive: false,
    childPaths: [
      "root.identifier[0].period.start",
      "root.identifier[0].period.end",
    ],
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
    dataPath: "root.identifier[0].period.start",
    parentDataPath: "root.identifier[0].period",
    basePath: "root.identifier.period.start",
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
    dataPath: "root.identifier[0].period.end",
    parentDataPath: "root.identifier[0].period",
    basePath: "root.identifier.period.end",
    baseId: "Period.end",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Identifier.assigner",
      path: "Identifier.assigner",
      short: "Organization that issued id (may be just text)",
      definition: "Organization that issued/manages the identifier.",
      comment:
        "The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.",
      min: 0,
      max: "1",
      base: { path: "Identifier.assigner", min: 0, max: "1" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "CX.4 / (CX.4,CX.9,CX.10)" },
        {
          identity: "rim",
          map: "II.assigningAuthorityName but note that this is an improper use by the definition of the field.  Also Role.scoper",
        },
        { identity: "servd", map: "./IdentifierIssuingAuthority" },
      ],
    },
    dataPath: "root.identifier[0].assigner",
    parentDataPath: "root.identifier[0]",
    basePath: "root.identifier.assigner",
    baseId: "Identifier.assigner",
    isPrimitive: false,
    childPaths: [
      "root.identifier[0].assigner.reference",
      "root.identifier[0].assigner.type",
      "root.identifier[0].assigner.display",
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
    dataPath: "root.identifier[0].assigner.reference",
    parentDataPath: "root.identifier[0].assigner",
    basePath: "root.identifier.assigner.reference",
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
    dataPath: "root.identifier[0].assigner.type",
    parentDataPath: "root.identifier[0].assigner",
    basePath: "root.identifier.assigner.type",
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
    dataPath: "root.identifier[0].assigner.display",
    parentDataPath: "root.identifier[0].assigner",
    basePath: "root.identifier.assigner.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.type",
      path: "ClinicalUseDefinition.type",
      short:
        "indication | contraindication | interaction | undesirable-effect | warning",
      definition:
        "indication | contraindication | interaction | undesirable-effect | warning.",
      min: 1,
      max: "1",
      base: { path: "ClinicalUseDefinition.type", min: 1, max: "1" },
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
            valueString: "ClinicalUseDefinitionType",
          },
        ],
        strength: "required",
        description: "Overall defining type of this clinical use definition.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/clinical-use-definition-type|4.3.0",
      },
      mapping: [
        {
          identity: "idmp",
          map: "(the type of IDMP class, out of Contraindication, Therapeutic Indication, Interactions, Undesirable Effects)",
        },
      ],
    },
    dataPath: "root.type",
    parentDataPath: "root",
    basePath: "root.type",
    baseId: "ClinicalUseDefinition.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/clinical-use-definition-type",
        code: "indication",
        display: "Indication",
      },
      {
        system: "http://hl7.org/fhir/clinical-use-definition-type",
        code: "contraindication",
        display: "Contraindication",
      },
      {
        system: "http://hl7.org/fhir/clinical-use-definition-type",
        code: "interaction",
        display: "Interaction",
      },
      {
        system: "http://hl7.org/fhir/clinical-use-definition-type",
        code: "undesirable-effect",
        display: "Undesirable Effect",
      },
      {
        system: "http://hl7.org/fhir/clinical-use-definition-type",
        code: "warning",
        display: "Warning",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.category",
      path: "ClinicalUseDefinition.category",
      short:
        'A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy", "Overdose"',
      definition:
        'A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy and Lactation", "Overdose", "Effects on Ability to Drive and Use Machines".',
      min: 0,
      max: "*",
      base: { path: "ClinicalUseDefinition.category", min: 0, max: "*" },
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
            valueString: "ClinicalUseDefinitionCategory",
          },
        ],
        strength: "preferred",
        description: "A categorisation for a clinical use information item.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/clinical-use-definition-category",
      },
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.category[0]",
    parentDataPath: "root",
    basePath: "root.category",
    baseId: "ClinicalUseDefinition.category",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/clinical-use-definition-category",
        code: "Pregnancy",
        display: "Pregnancy and Lactation",
      },
      {
        system: "http://hl7.org/fhir/clinical-use-definition-category",
        code: "Overdose",
        display: "Overdose",
      },
      {
        system: "http://hl7.org/fhir/clinical-use-definition-category",
        code: "DriveAndMachines",
        display: "Effects on Ability to Drive and Use Machines",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.subject",
      path: "ClinicalUseDefinition.subject",
      short: "The medication or procedure for which this is an indication",
      definition:
        "The medication or procedure for which this is an indication.",
      min: 0,
      max: "*",
      base: { path: "ClinicalUseDefinition.subject", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
            "http://hl7.org/fhir/StructureDefinition/Medication",
            "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
            "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
            "http://hl7.org/fhir/StructureDefinition/Device",
            "http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
            "http://hl7.org/fhir/StructureDefinition/Substance",
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
        {
          identity: "idmp",
          map: "(the link between the IDMP class and Medicinal Product)",
        },
      ],
    },
    dataPath: "root.subject[0]",
    parentDataPath: "root",
    basePath: "root.subject",
    baseId: "ClinicalUseDefinition.subject",
    isPrimitive: false,
    childPaths: [
      "root.subject[0].reference",
      "root.subject[0].type",
      "root.subject[0].display",
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
    dataPath: "root.subject[0].reference",
    parentDataPath: "root.subject[0]",
    basePath: "root.subject.reference",
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
    dataPath: "root.subject[0].type",
    parentDataPath: "root.subject[0]",
    basePath: "root.subject.type",
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
    dataPath: "root.subject[0].display",
    parentDataPath: "root.subject[0]",
    basePath: "root.subject.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.status",
      path: "ClinicalUseDefinition.status",
      short: "Whether this is a current issue or one that has been retired etc",
      definition:
        "Whether this is a current issue or one that has been retired etc.",
      min: 0,
      max: "1",
      base: { path: "ClinicalUseDefinition.status", min: 0, max: "1" },
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
            valueString: "PublicationStatus",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "preferred",
        description: "The lifecycle status of an artifact.",
        valueSet: "http://hl7.org/fhir/ValueSet/publication-status",
      },
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "ClinicalUseDefinition.status",
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
      id: "ClinicalUseDefinition.contraindication",
      path: "ClinicalUseDefinition.contraindication",
      short: "Specifics for when this is a contraindication",
      definition: "Specifics for when this is a contraindication.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.contraindication",
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
      mapping: [{ identity: "idmp", map: "Contraindication" }],
    },
    dataPath: "root.contraindication",
    parentDataPath: "root",
    basePath: "root.contraindication",
    baseId: "ClinicalUseDefinition.contraindication",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.diseaseSymptomProcedure",
      "root.contraindication.diseaseStatus",
      "root.contraindication.comorbidity[0]",
      "root.contraindication.indication[0]",
      "root.contraindication.otherTherapy[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.contraindication.diseaseSymptomProcedure",
      path: "ClinicalUseDefinition.contraindication.diseaseSymptomProcedure",
      short:
        "The situation that is being documented as contraindicating against this item",
      definition:
        "The situation that is being documented as contraindicating against this item.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.contraindication.diseaseSymptomProcedure",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "CodeableReference",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DiseaseSymptomProcedure",
          },
        ],
        strength: "example",
        description: "A symptom, disease or procedure.",
        valueSet: "http://hl7.org/fhir/ValueSet/disease-symptom-procedure",
      },
      mapping: [
        {
          identity: "idmp",
          map: 'Contraindication.Contraindications as "Disease / Symptom / Procedure" and Contraindication.Contraindications Text',
        },
      ],
    },
    dataPath: "root.contraindication.diseaseSymptomProcedure",
    parentDataPath: "root.contraindication",
    basePath: "root.diseaseSymptomProcedure",
    baseId: "ClinicalUseDefinition.contraindication.diseaseSymptomProcedure",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.diseaseSymptomProcedure.concept",
      "root.contraindication.diseaseSymptomProcedure.reference",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.concept",
      path: "CodeableReference.concept",
      short: "Reference to a concept (by class)",
      definition:
        "A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.concept", min: 0, max: "1" },
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
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.contraindication.diseaseSymptomProcedure.concept",
    parentDataPath: "root.contraindication.diseaseSymptomProcedure",
    basePath: "root.diseaseSymptomProcedure.concept",
    baseId: "CodeableReference.concept",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0]",
      "root.contraindication.diseaseSymptomProcedure.concept.text",
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
    dataPath: "root.contraindication.diseaseSymptomProcedure.concept.coding[0]",
    parentDataPath: "root.contraindication.diseaseSymptomProcedure.concept",
    basePath: "root.diseaseSymptomProcedure.concept.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0].system",
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0].version",
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0].code",
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0].display",
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0].userSelected",
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
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0].system",
    parentDataPath:
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0]",
    basePath: "root.diseaseSymptomProcedure.concept.coding.system",
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
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0].version",
    parentDataPath:
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0]",
    basePath: "root.diseaseSymptomProcedure.concept.coding.version",
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
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0].code",
    parentDataPath:
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0]",
    basePath: "root.diseaseSymptomProcedure.concept.coding.code",
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
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0].display",
    parentDataPath:
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0]",
    basePath: "root.diseaseSymptomProcedure.concept.coding.display",
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
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0].userSelected",
    parentDataPath:
      "root.contraindication.diseaseSymptomProcedure.concept.coding[0]",
    basePath: "root.diseaseSymptomProcedure.concept.coding.userSelected",
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
    dataPath: "root.contraindication.diseaseSymptomProcedure.concept.text",
    parentDataPath: "root.contraindication.diseaseSymptomProcedure.concept",
    basePath: "root.diseaseSymptomProcedure.concept.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.reference",
      path: "CodeableReference.reference",
      short: "Reference to a resource (by instance)",
      definition:
        "A reference to a resource the provides exact details about the information being referenced.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.reference", min: 0, max: "1" },
      type: [{ code: "Reference" }],
      constraint: [
        {
          key: "ele-1",
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
    dataPath: "root.contraindication.diseaseSymptomProcedure.reference",
    parentDataPath: "root.contraindication.diseaseSymptomProcedure",
    basePath: "root.diseaseSymptomProcedure.reference",
    baseId: "CodeableReference.reference",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.diseaseSymptomProcedure.reference.reference",
      "root.contraindication.diseaseSymptomProcedure.reference.type",
      "root.contraindication.diseaseSymptomProcedure.reference.display",
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
    dataPath:
      "root.contraindication.diseaseSymptomProcedure.reference.reference",
    parentDataPath: "root.contraindication.diseaseSymptomProcedure.reference",
    basePath: "root.diseaseSymptomProcedure.reference.reference",
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
    dataPath: "root.contraindication.diseaseSymptomProcedure.reference.type",
    parentDataPath: "root.contraindication.diseaseSymptomProcedure.reference",
    basePath: "root.diseaseSymptomProcedure.reference.type",
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
    dataPath: "root.contraindication.diseaseSymptomProcedure.reference.display",
    parentDataPath: "root.contraindication.diseaseSymptomProcedure.reference",
    basePath: "root.diseaseSymptomProcedure.reference.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.contraindication.diseaseStatus",
      path: "ClinicalUseDefinition.contraindication.diseaseStatus",
      short: "The status of the disease or symptom for the contraindication",
      definition:
        'The status of the disease or symptom for the contraindication, for example "chronic" or "metastatic".',
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.contraindication.diseaseStatus",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "CodeableReference",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DiseaseStatus",
          },
        ],
        strength: "example",
        description: "The status of a disease or symptom.",
        valueSet: "http://hl7.org/fhir/ValueSet/disease-status",
      },
      mapping: [{ identity: "idmp", map: "Contraindication.Disease Status" }],
    },
    dataPath: "root.contraindication.diseaseStatus",
    parentDataPath: "root.contraindication",
    basePath: "root.diseaseStatus",
    baseId: "ClinicalUseDefinition.contraindication.diseaseStatus",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.diseaseStatus.concept",
      "root.contraindication.diseaseStatus.reference",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.concept",
      path: "CodeableReference.concept",
      short: "Reference to a concept (by class)",
      definition:
        "A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.concept", min: 0, max: "1" },
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
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.contraindication.diseaseStatus.concept",
    parentDataPath: "root.contraindication.diseaseStatus",
    basePath: "root.diseaseStatus.concept",
    baseId: "CodeableReference.concept",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.diseaseStatus.concept.coding[0]",
      "root.contraindication.diseaseStatus.concept.text",
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
    dataPath: "root.contraindication.diseaseStatus.concept.coding[0]",
    parentDataPath: "root.contraindication.diseaseStatus.concept",
    basePath: "root.diseaseStatus.concept.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.diseaseStatus.concept.coding[0].system",
      "root.contraindication.diseaseStatus.concept.coding[0].version",
      "root.contraindication.diseaseStatus.concept.coding[0].code",
      "root.contraindication.diseaseStatus.concept.coding[0].display",
      "root.contraindication.diseaseStatus.concept.coding[0].userSelected",
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
    dataPath: "root.contraindication.diseaseStatus.concept.coding[0].system",
    parentDataPath: "root.contraindication.diseaseStatus.concept.coding[0]",
    basePath: "root.diseaseStatus.concept.coding.system",
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
    dataPath: "root.contraindication.diseaseStatus.concept.coding[0].version",
    parentDataPath: "root.contraindication.diseaseStatus.concept.coding[0]",
    basePath: "root.diseaseStatus.concept.coding.version",
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
    dataPath: "root.contraindication.diseaseStatus.concept.coding[0].code",
    parentDataPath: "root.contraindication.diseaseStatus.concept.coding[0]",
    basePath: "root.diseaseStatus.concept.coding.code",
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
    dataPath: "root.contraindication.diseaseStatus.concept.coding[0].display",
    parentDataPath: "root.contraindication.diseaseStatus.concept.coding[0]",
    basePath: "root.diseaseStatus.concept.coding.display",
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
      "root.contraindication.diseaseStatus.concept.coding[0].userSelected",
    parentDataPath: "root.contraindication.diseaseStatus.concept.coding[0]",
    basePath: "root.diseaseStatus.concept.coding.userSelected",
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
    dataPath: "root.contraindication.diseaseStatus.concept.text",
    parentDataPath: "root.contraindication.diseaseStatus.concept",
    basePath: "root.diseaseStatus.concept.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.reference",
      path: "CodeableReference.reference",
      short: "Reference to a resource (by instance)",
      definition:
        "A reference to a resource the provides exact details about the information being referenced.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.reference", min: 0, max: "1" },
      type: [{ code: "Reference" }],
      constraint: [
        {
          key: "ele-1",
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
    dataPath: "root.contraindication.diseaseStatus.reference",
    parentDataPath: "root.contraindication.diseaseStatus",
    basePath: "root.diseaseStatus.reference",
    baseId: "CodeableReference.reference",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.diseaseStatus.reference.reference",
      "root.contraindication.diseaseStatus.reference.type",
      "root.contraindication.diseaseStatus.reference.display",
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
    dataPath: "root.contraindication.diseaseStatus.reference.reference",
    parentDataPath: "root.contraindication.diseaseStatus.reference",
    basePath: "root.diseaseStatus.reference.reference",
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
    dataPath: "root.contraindication.diseaseStatus.reference.type",
    parentDataPath: "root.contraindication.diseaseStatus.reference",
    basePath: "root.diseaseStatus.reference.type",
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
    dataPath: "root.contraindication.diseaseStatus.reference.display",
    parentDataPath: "root.contraindication.diseaseStatus.reference",
    basePath: "root.diseaseStatus.reference.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.contraindication.comorbidity",
      path: "ClinicalUseDefinition.contraindication.comorbidity",
      short: "A comorbidity (concurrent condition) or coinfection",
      definition: "A comorbidity (concurrent condition) or coinfection.",
      min: 0,
      max: "*",
      base: {
        path: "ClinicalUseDefinition.contraindication.comorbidity",
        min: 0,
        max: "*",
      },
      type: [
        {
          code: "CodeableReference",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DiseaseSymptomProcedure",
          },
        ],
        strength: "example",
        description: "A symptom, disease or procedure.",
        valueSet: "http://hl7.org/fhir/ValueSet/disease-symptom-procedure",
      },
      mapping: [{ identity: "idmp", map: "Contraindication.Comorbidity" }],
    },
    dataPath: "root.contraindication.comorbidity[0]",
    parentDataPath: "root.contraindication",
    basePath: "root.comorbidity",
    baseId: "ClinicalUseDefinition.contraindication.comorbidity",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.comorbidity[0].concept",
      "root.contraindication.comorbidity[0].reference",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.concept",
      path: "CodeableReference.concept",
      short: "Reference to a concept (by class)",
      definition:
        "A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.concept", min: 0, max: "1" },
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
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.contraindication.comorbidity[0].concept",
    parentDataPath: "root.contraindication.comorbidity[0]",
    basePath: "root.comorbidity.concept",
    baseId: "CodeableReference.concept",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.comorbidity[0].concept.coding[0]",
      "root.contraindication.comorbidity[0].concept.text",
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
    dataPath: "root.contraindication.comorbidity[0].concept.coding[0]",
    parentDataPath: "root.contraindication.comorbidity[0].concept",
    basePath: "root.comorbidity.concept.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.comorbidity[0].concept.coding[0].system",
      "root.contraindication.comorbidity[0].concept.coding[0].version",
      "root.contraindication.comorbidity[0].concept.coding[0].code",
      "root.contraindication.comorbidity[0].concept.coding[0].display",
      "root.contraindication.comorbidity[0].concept.coding[0].userSelected",
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
    dataPath: "root.contraindication.comorbidity[0].concept.coding[0].system",
    parentDataPath: "root.contraindication.comorbidity[0].concept.coding[0]",
    basePath: "root.comorbidity.concept.coding.system",
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
    dataPath: "root.contraindication.comorbidity[0].concept.coding[0].version",
    parentDataPath: "root.contraindication.comorbidity[0].concept.coding[0]",
    basePath: "root.comorbidity.concept.coding.version",
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
    dataPath: "root.contraindication.comorbidity[0].concept.coding[0].code",
    parentDataPath: "root.contraindication.comorbidity[0].concept.coding[0]",
    basePath: "root.comorbidity.concept.coding.code",
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
    dataPath: "root.contraindication.comorbidity[0].concept.coding[0].display",
    parentDataPath: "root.contraindication.comorbidity[0].concept.coding[0]",
    basePath: "root.comorbidity.concept.coding.display",
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
      "root.contraindication.comorbidity[0].concept.coding[0].userSelected",
    parentDataPath: "root.contraindication.comorbidity[0].concept.coding[0]",
    basePath: "root.comorbidity.concept.coding.userSelected",
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
    dataPath: "root.contraindication.comorbidity[0].concept.text",
    parentDataPath: "root.contraindication.comorbidity[0].concept",
    basePath: "root.comorbidity.concept.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.reference",
      path: "CodeableReference.reference",
      short: "Reference to a resource (by instance)",
      definition:
        "A reference to a resource the provides exact details about the information being referenced.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.reference", min: 0, max: "1" },
      type: [{ code: "Reference" }],
      constraint: [
        {
          key: "ele-1",
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
    dataPath: "root.contraindication.comorbidity[0].reference",
    parentDataPath: "root.contraindication.comorbidity[0]",
    basePath: "root.comorbidity.reference",
    baseId: "CodeableReference.reference",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.comorbidity[0].reference.reference",
      "root.contraindication.comorbidity[0].reference.type",
      "root.contraindication.comorbidity[0].reference.display",
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
    dataPath: "root.contraindication.comorbidity[0].reference.reference",
    parentDataPath: "root.contraindication.comorbidity[0].reference",
    basePath: "root.comorbidity.reference.reference",
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
    dataPath: "root.contraindication.comorbidity[0].reference.type",
    parentDataPath: "root.contraindication.comorbidity[0].reference",
    basePath: "root.comorbidity.reference.type",
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
    dataPath: "root.contraindication.comorbidity[0].reference.display",
    parentDataPath: "root.contraindication.comorbidity[0].reference",
    basePath: "root.comorbidity.reference.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.contraindication.indication",
      path: "ClinicalUseDefinition.contraindication.indication",
      short: "The indication which this is a contraidication for",
      definition: "The indication which this is a contraidication for.",
      min: 0,
      max: "*",
      base: {
        path: "ClinicalUseDefinition.contraindication.indication",
        min: 0,
        max: "*",
      },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition",
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
        {
          identity: "idmp",
          map: "(the link from Contraindication to Therapeutic Indication)",
        },
      ],
    },
    dataPath: "root.contraindication.indication[0]",
    parentDataPath: "root.contraindication",
    basePath: "root.indication",
    baseId: "ClinicalUseDefinition.contraindication.indication",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.indication[0].reference",
      "root.contraindication.indication[0].type",
      "root.contraindication.indication[0].display",
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
    dataPath: "root.contraindication.indication[0].reference",
    parentDataPath: "root.contraindication.indication[0]",
    basePath: "root.indication.reference",
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
    dataPath: "root.contraindication.indication[0].type",
    parentDataPath: "root.contraindication.indication[0]",
    basePath: "root.indication.type",
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
    dataPath: "root.contraindication.indication[0].display",
    parentDataPath: "root.contraindication.indication[0]",
    basePath: "root.indication.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.contraindication.otherTherapy",
      path: "ClinicalUseDefinition.contraindication.otherTherapy",
      short:
        "Information about use of the product in relation to other therapies described as part of the contraindication",
      definition:
        "Information about the use of the medicinal product in relation to other therapies described as part of the contraindication.",
      min: 0,
      max: "*",
      base: {
        path: "ClinicalUseDefinition.contraindication.otherTherapy",
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
      isSummary: true,
      mapping: [
        { identity: "idmp", map: "Contraindication.Other Therapy Specifics" },
      ],
    },
    dataPath: "root.contraindication.otherTherapy[0]",
    parentDataPath: "root.contraindication",
    basePath: "root.otherTherapy",
    baseId: "ClinicalUseDefinition.contraindication.otherTherapy",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.otherTherapy.relationshipType",
      "root.contraindication.otherTherapy.therapy",
    ],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.contraindication.otherTherapy.relationshipType",
      path: "ClinicalUseDefinition.contraindication.otherTherapy.relationshipType",
      short:
        "The type of relationship between the product indication/contraindication and another therapy",
      definition:
        "The type of relationship between the medicinal product indication or contraindication and another therapy.",
      min: 1,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.contraindication.otherTherapy.relationshipType",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "TherapyRelationshipType",
          },
        ],
        strength: "preferred",
        description:
          "Classification of relationship between a therapy and a contraindication or an indication.",
        valueSet: "http://hl7.org/fhir/ValueSet/therapy-relationship-type",
      },
      mapping: [
        {
          identity: "idmp",
          map: "Other Therapy Specifics.Therapy Relationship Type",
        },
      ],
    },
    dataPath: "root.contraindication.otherTherapy.relationshipType",
    parentDataPath: "root.contraindication.otherTherapy[0]",
    basePath: "root.relationshipType",
    baseId:
      "ClinicalUseDefinition.contraindication.otherTherapy.relationshipType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "contraindicated-only-with",
        display: "Only contraindicated if the other therapy is given",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "contraindicated-except-with",
        display: "Contraindicated unless the other therapy is given",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "indicated-only-with",
        display:
          "Indicated only when the other therapy is given (co-occurrent)",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "indicated-except-with",
        display: "Indicated except when the other therapy is given",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "indicated-only-before",
        display:
          "Indicated only if the other therapy is planned to be given afterwards (prep)",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "indicated-only-before",
        display:
          "Indicated only if the other therapy was given before (follow-up)",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "replace-other-therapy",
        display: "Indicated to replace the other therapy",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "replace-other-therapy-contraindicated",
        display: "Indicated to replace the other contraindicated therapy",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "replace-other-therapy-not-tolerated",
        display:
          "Indicated to replace the other therapy not well tolerated by patient",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "replace-other-therapy-not-effective",
        display:
          "Indicated to replace the other therapy not effective on patient",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.contraindication.otherTherapy.therapy",
      path: "ClinicalUseDefinition.contraindication.otherTherapy.therapy",
      short:
        "Reference to a specific medication as part of an indication or contraindication",
      definition:
        "Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.",
      min: 1,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.contraindication.otherTherapy.therapy",
        min: 1,
        max: "1",
      },
      type: [
        {
          code: "CodeableReference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
            "http://hl7.org/fhir/StructureDefinition/Medication",
            "http://hl7.org/fhir/StructureDefinition/Substance",
            "http://hl7.org/fhir/StructureDefinition/SubstanceDefinition",
            "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
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
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "Therapy",
          },
        ],
        strength: "example",
        description: "A therapy.",
        valueSet: "http://hl7.org/fhir/ValueSet/therapy",
      },
      mapping: [
        { identity: "idmp", map: "Other Therapy Specifics.Medication" },
      ],
    },
    dataPath: "root.contraindication.otherTherapy.therapy",
    parentDataPath: "root.contraindication.otherTherapy[0]",
    basePath: "root.therapy",
    baseId: "ClinicalUseDefinition.contraindication.otherTherapy.therapy",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.otherTherapy.therapy.concept",
      "root.contraindication.otherTherapy.therapy.reference",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.concept",
      path: "CodeableReference.concept",
      short: "Reference to a concept (by class)",
      definition:
        "A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.concept", min: 0, max: "1" },
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
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.contraindication.otherTherapy.therapy.concept",
    parentDataPath: "root.contraindication.otherTherapy.therapy",
    basePath: "root.therapy.concept",
    baseId: "CodeableReference.concept",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.otherTherapy.therapy.concept.coding[0]",
      "root.contraindication.otherTherapy.therapy.concept.text",
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
    dataPath: "root.contraindication.otherTherapy.therapy.concept.coding[0]",
    parentDataPath: "root.contraindication.otherTherapy.therapy.concept",
    basePath: "root.therapy.concept.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.otherTherapy.therapy.concept.coding[0].system",
      "root.contraindication.otherTherapy.therapy.concept.coding[0].version",
      "root.contraindication.otherTherapy.therapy.concept.coding[0].code",
      "root.contraindication.otherTherapy.therapy.concept.coding[0].display",
      "root.contraindication.otherTherapy.therapy.concept.coding[0].userSelected",
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
      "root.contraindication.otherTherapy.therapy.concept.coding[0].system",
    parentDataPath:
      "root.contraindication.otherTherapy.therapy.concept.coding[0]",
    basePath: "root.therapy.concept.coding.system",
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
      "root.contraindication.otherTherapy.therapy.concept.coding[0].version",
    parentDataPath:
      "root.contraindication.otherTherapy.therapy.concept.coding[0]",
    basePath: "root.therapy.concept.coding.version",
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
      "root.contraindication.otherTherapy.therapy.concept.coding[0].code",
    parentDataPath:
      "root.contraindication.otherTherapy.therapy.concept.coding[0]",
    basePath: "root.therapy.concept.coding.code",
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
      "root.contraindication.otherTherapy.therapy.concept.coding[0].display",
    parentDataPath:
      "root.contraindication.otherTherapy.therapy.concept.coding[0]",
    basePath: "root.therapy.concept.coding.display",
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
      "root.contraindication.otherTherapy.therapy.concept.coding[0].userSelected",
    parentDataPath:
      "root.contraindication.otherTherapy.therapy.concept.coding[0]",
    basePath: "root.therapy.concept.coding.userSelected",
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
    dataPath: "root.contraindication.otherTherapy.therapy.concept.text",
    parentDataPath: "root.contraindication.otherTherapy.therapy.concept",
    basePath: "root.therapy.concept.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.reference",
      path: "CodeableReference.reference",
      short: "Reference to a resource (by instance)",
      definition:
        "A reference to a resource the provides exact details about the information being referenced.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.reference", min: 0, max: "1" },
      type: [{ code: "Reference" }],
      constraint: [
        {
          key: "ele-1",
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
    dataPath: "root.contraindication.otherTherapy.therapy.reference",
    parentDataPath: "root.contraindication.otherTherapy.therapy",
    basePath: "root.therapy.reference",
    baseId: "CodeableReference.reference",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.otherTherapy.therapy.reference.reference",
      "root.contraindication.otherTherapy.therapy.reference.type",
      "root.contraindication.otherTherapy.therapy.reference.display",
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
    dataPath: "root.contraindication.otherTherapy.therapy.reference.reference",
    parentDataPath: "root.contraindication.otherTherapy.therapy.reference",
    basePath: "root.therapy.reference.reference",
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
    dataPath: "root.contraindication.otherTherapy.therapy.reference.type",
    parentDataPath: "root.contraindication.otherTherapy.therapy.reference",
    basePath: "root.therapy.reference.type",
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
    dataPath: "root.contraindication.otherTherapy.therapy.reference.display",
    parentDataPath: "root.contraindication.otherTherapy.therapy.reference",
    basePath: "root.therapy.reference.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.indication",
      path: "ClinicalUseDefinition.indication",
      short: "Specifics for when this is an indication",
      definition: "Specifics for when this is an indication.",
      min: 0,
      max: "1",
      base: { path: "ClinicalUseDefinition.indication", min: 0, max: "1" },
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
      mapping: [{ identity: "idmp", map: "Therapeutic Indication" }],
    },
    dataPath: "root.indication",
    parentDataPath: "root",
    basePath: "root.indication",
    baseId: "ClinicalUseDefinition.indication",
    isPrimitive: false,
    childPaths: [
      "root.indication.diseaseSymptomProcedure",
      "root.indication.diseaseStatus",
      "root.indication.comorbidity[0]",
      "root.indication.intendedEffect",
      "root.indication.duration[x]",
      "root.indication.undesirableEffect[0]",
      "root.indication.otherTherapy[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.indication.diseaseSymptomProcedure",
      path: "ClinicalUseDefinition.indication.diseaseSymptomProcedure",
      short:
        "The situation that is being documented as an indicaton for this item",
      definition:
        "The situation that is being documented as an indicaton for this item.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.indication.diseaseSymptomProcedure",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "CodeableReference",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DiseaseSymptomProcedure",
          },
        ],
        strength: "example",
        description: "A symptom, disease or procedure.",
        valueSet: "http://hl7.org/fhir/ValueSet/disease-symptom-procedure",
      },
      mapping: [
        {
          identity: "idmp",
          map: 'Therapeutic Indication.Indication as "Disease / Symptom / Procedure", and Therapeutic Indication.Indication Text',
        },
      ],
    },
    dataPath: "root.indication.diseaseSymptomProcedure",
    parentDataPath: "root.indication",
    basePath: "root.diseaseSymptomProcedure",
    baseId: "ClinicalUseDefinition.indication.diseaseSymptomProcedure",
    isPrimitive: false,
    childPaths: [
      "root.indication.diseaseSymptomProcedure.concept",
      "root.indication.diseaseSymptomProcedure.reference",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.concept",
      path: "CodeableReference.concept",
      short: "Reference to a concept (by class)",
      definition:
        "A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.concept", min: 0, max: "1" },
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
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.indication.diseaseSymptomProcedure.concept",
    parentDataPath: "root.indication.diseaseSymptomProcedure",
    basePath: "root.diseaseSymptomProcedure.concept",
    baseId: "CodeableReference.concept",
    isPrimitive: false,
    childPaths: [
      "root.indication.diseaseSymptomProcedure.concept.coding[0]",
      "root.indication.diseaseSymptomProcedure.concept.text",
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
    dataPath: "root.indication.diseaseSymptomProcedure.concept.coding[0]",
    parentDataPath: "root.indication.diseaseSymptomProcedure.concept",
    basePath: "root.diseaseSymptomProcedure.concept.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.indication.diseaseSymptomProcedure.concept.coding[0].system",
      "root.indication.diseaseSymptomProcedure.concept.coding[0].version",
      "root.indication.diseaseSymptomProcedure.concept.coding[0].code",
      "root.indication.diseaseSymptomProcedure.concept.coding[0].display",
      "root.indication.diseaseSymptomProcedure.concept.coding[0].userSelected",
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
      "root.indication.diseaseSymptomProcedure.concept.coding[0].system",
    parentDataPath: "root.indication.diseaseSymptomProcedure.concept.coding[0]",
    basePath: "root.diseaseSymptomProcedure.concept.coding.system",
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
      "root.indication.diseaseSymptomProcedure.concept.coding[0].version",
    parentDataPath: "root.indication.diseaseSymptomProcedure.concept.coding[0]",
    basePath: "root.diseaseSymptomProcedure.concept.coding.version",
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
    dataPath: "root.indication.diseaseSymptomProcedure.concept.coding[0].code",
    parentDataPath: "root.indication.diseaseSymptomProcedure.concept.coding[0]",
    basePath: "root.diseaseSymptomProcedure.concept.coding.code",
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
      "root.indication.diseaseSymptomProcedure.concept.coding[0].display",
    parentDataPath: "root.indication.diseaseSymptomProcedure.concept.coding[0]",
    basePath: "root.diseaseSymptomProcedure.concept.coding.display",
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
      "root.indication.diseaseSymptomProcedure.concept.coding[0].userSelected",
    parentDataPath: "root.indication.diseaseSymptomProcedure.concept.coding[0]",
    basePath: "root.diseaseSymptomProcedure.concept.coding.userSelected",
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
    dataPath: "root.indication.diseaseSymptomProcedure.concept.text",
    parentDataPath: "root.indication.diseaseSymptomProcedure.concept",
    basePath: "root.diseaseSymptomProcedure.concept.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.reference",
      path: "CodeableReference.reference",
      short: "Reference to a resource (by instance)",
      definition:
        "A reference to a resource the provides exact details about the information being referenced.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.reference", min: 0, max: "1" },
      type: [{ code: "Reference" }],
      constraint: [
        {
          key: "ele-1",
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
    dataPath: "root.indication.diseaseSymptomProcedure.reference",
    parentDataPath: "root.indication.diseaseSymptomProcedure",
    basePath: "root.diseaseSymptomProcedure.reference",
    baseId: "CodeableReference.reference",
    isPrimitive: false,
    childPaths: [
      "root.indication.diseaseSymptomProcedure.reference.reference",
      "root.indication.diseaseSymptomProcedure.reference.type",
      "root.indication.diseaseSymptomProcedure.reference.display",
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
    dataPath: "root.indication.diseaseSymptomProcedure.reference.reference",
    parentDataPath: "root.indication.diseaseSymptomProcedure.reference",
    basePath: "root.diseaseSymptomProcedure.reference.reference",
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
    dataPath: "root.indication.diseaseSymptomProcedure.reference.type",
    parentDataPath: "root.indication.diseaseSymptomProcedure.reference",
    basePath: "root.diseaseSymptomProcedure.reference.type",
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
    dataPath: "root.indication.diseaseSymptomProcedure.reference.display",
    parentDataPath: "root.indication.diseaseSymptomProcedure.reference",
    basePath: "root.diseaseSymptomProcedure.reference.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.indication.diseaseStatus",
      path: "ClinicalUseDefinition.indication.diseaseStatus",
      short: "The status of the disease or symptom for the indication",
      definition:
        'The status of the disease or symptom for the indication, for example "chronic" or "metastatic".',
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.indication.diseaseStatus",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "CodeableReference",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DiseaseStatus",
          },
        ],
        strength: "example",
        description: "The status of a disease or symptom.",
        valueSet: "http://hl7.org/fhir/ValueSet/disease-status",
      },
      mapping: [
        { identity: "idmp", map: "Therapeutic Indication.Disease Status" },
      ],
    },
    dataPath: "root.indication.diseaseStatus",
    parentDataPath: "root.indication",
    basePath: "root.diseaseStatus",
    baseId: "ClinicalUseDefinition.indication.diseaseStatus",
    isPrimitive: false,
    childPaths: [
      "root.indication.diseaseStatus.concept",
      "root.indication.diseaseStatus.reference",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.concept",
      path: "CodeableReference.concept",
      short: "Reference to a concept (by class)",
      definition:
        "A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.concept", min: 0, max: "1" },
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
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.indication.diseaseStatus.concept",
    parentDataPath: "root.indication.diseaseStatus",
    basePath: "root.diseaseStatus.concept",
    baseId: "CodeableReference.concept",
    isPrimitive: false,
    childPaths: [
      "root.indication.diseaseStatus.concept.coding[0]",
      "root.indication.diseaseStatus.concept.text",
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
    dataPath: "root.indication.diseaseStatus.concept.coding[0]",
    parentDataPath: "root.indication.diseaseStatus.concept",
    basePath: "root.diseaseStatus.concept.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.indication.diseaseStatus.concept.coding[0].system",
      "root.indication.diseaseStatus.concept.coding[0].version",
      "root.indication.diseaseStatus.concept.coding[0].code",
      "root.indication.diseaseStatus.concept.coding[0].display",
      "root.indication.diseaseStatus.concept.coding[0].userSelected",
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
    dataPath: "root.indication.diseaseStatus.concept.coding[0].system",
    parentDataPath: "root.indication.diseaseStatus.concept.coding[0]",
    basePath: "root.diseaseStatus.concept.coding.system",
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
    dataPath: "root.indication.diseaseStatus.concept.coding[0].version",
    parentDataPath: "root.indication.diseaseStatus.concept.coding[0]",
    basePath: "root.diseaseStatus.concept.coding.version",
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
    dataPath: "root.indication.diseaseStatus.concept.coding[0].code",
    parentDataPath: "root.indication.diseaseStatus.concept.coding[0]",
    basePath: "root.diseaseStatus.concept.coding.code",
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
    dataPath: "root.indication.diseaseStatus.concept.coding[0].display",
    parentDataPath: "root.indication.diseaseStatus.concept.coding[0]",
    basePath: "root.diseaseStatus.concept.coding.display",
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
    dataPath: "root.indication.diseaseStatus.concept.coding[0].userSelected",
    parentDataPath: "root.indication.diseaseStatus.concept.coding[0]",
    basePath: "root.diseaseStatus.concept.coding.userSelected",
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
    dataPath: "root.indication.diseaseStatus.concept.text",
    parentDataPath: "root.indication.diseaseStatus.concept",
    basePath: "root.diseaseStatus.concept.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.reference",
      path: "CodeableReference.reference",
      short: "Reference to a resource (by instance)",
      definition:
        "A reference to a resource the provides exact details about the information being referenced.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.reference", min: 0, max: "1" },
      type: [{ code: "Reference" }],
      constraint: [
        {
          key: "ele-1",
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
    dataPath: "root.indication.diseaseStatus.reference",
    parentDataPath: "root.indication.diseaseStatus",
    basePath: "root.diseaseStatus.reference",
    baseId: "CodeableReference.reference",
    isPrimitive: false,
    childPaths: [
      "root.indication.diseaseStatus.reference.reference",
      "root.indication.diseaseStatus.reference.type",
      "root.indication.diseaseStatus.reference.display",
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
    dataPath: "root.indication.diseaseStatus.reference.reference",
    parentDataPath: "root.indication.diseaseStatus.reference",
    basePath: "root.diseaseStatus.reference.reference",
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
    dataPath: "root.indication.diseaseStatus.reference.type",
    parentDataPath: "root.indication.diseaseStatus.reference",
    basePath: "root.diseaseStatus.reference.type",
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
    dataPath: "root.indication.diseaseStatus.reference.display",
    parentDataPath: "root.indication.diseaseStatus.reference",
    basePath: "root.diseaseStatus.reference.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.indication.comorbidity",
      path: "ClinicalUseDefinition.indication.comorbidity",
      short: "A comorbidity or coinfection as part of the indication",
      definition:
        "A comorbidity (concurrent condition) or coinfection as part of the indication.",
      min: 0,
      max: "*",
      base: {
        path: "ClinicalUseDefinition.indication.comorbidity",
        min: 0,
        max: "*",
      },
      type: [
        {
          code: "CodeableReference",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DiseaseSymptomProcedure",
          },
        ],
        strength: "example",
        description: "A symptom, disease or procedure.",
        valueSet: "http://hl7.org/fhir/ValueSet/disease-symptom-procedure",
      },
      mapping: [
        { identity: "idmp", map: "Therapeutic Indication.Comorbidity" },
      ],
    },
    dataPath: "root.indication.comorbidity[0]",
    parentDataPath: "root.indication",
    basePath: "root.comorbidity",
    baseId: "ClinicalUseDefinition.indication.comorbidity",
    isPrimitive: false,
    childPaths: [
      "root.indication.comorbidity[0].concept",
      "root.indication.comorbidity[0].reference",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.concept",
      path: "CodeableReference.concept",
      short: "Reference to a concept (by class)",
      definition:
        "A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.concept", min: 0, max: "1" },
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
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.indication.comorbidity[0].concept",
    parentDataPath: "root.indication.comorbidity[0]",
    basePath: "root.comorbidity.concept",
    baseId: "CodeableReference.concept",
    isPrimitive: false,
    childPaths: [
      "root.indication.comorbidity[0].concept.coding[0]",
      "root.indication.comorbidity[0].concept.text",
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
    dataPath: "root.indication.comorbidity[0].concept.coding[0]",
    parentDataPath: "root.indication.comorbidity[0].concept",
    basePath: "root.comorbidity.concept.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.indication.comorbidity[0].concept.coding[0].system",
      "root.indication.comorbidity[0].concept.coding[0].version",
      "root.indication.comorbidity[0].concept.coding[0].code",
      "root.indication.comorbidity[0].concept.coding[0].display",
      "root.indication.comorbidity[0].concept.coding[0].userSelected",
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
    dataPath: "root.indication.comorbidity[0].concept.coding[0].system",
    parentDataPath: "root.indication.comorbidity[0].concept.coding[0]",
    basePath: "root.comorbidity.concept.coding.system",
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
    dataPath: "root.indication.comorbidity[0].concept.coding[0].version",
    parentDataPath: "root.indication.comorbidity[0].concept.coding[0]",
    basePath: "root.comorbidity.concept.coding.version",
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
    dataPath: "root.indication.comorbidity[0].concept.coding[0].code",
    parentDataPath: "root.indication.comorbidity[0].concept.coding[0]",
    basePath: "root.comorbidity.concept.coding.code",
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
    dataPath: "root.indication.comorbidity[0].concept.coding[0].display",
    parentDataPath: "root.indication.comorbidity[0].concept.coding[0]",
    basePath: "root.comorbidity.concept.coding.display",
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
    dataPath: "root.indication.comorbidity[0].concept.coding[0].userSelected",
    parentDataPath: "root.indication.comorbidity[0].concept.coding[0]",
    basePath: "root.comorbidity.concept.coding.userSelected",
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
    dataPath: "root.indication.comorbidity[0].concept.text",
    parentDataPath: "root.indication.comorbidity[0].concept",
    basePath: "root.comorbidity.concept.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.reference",
      path: "CodeableReference.reference",
      short: "Reference to a resource (by instance)",
      definition:
        "A reference to a resource the provides exact details about the information being referenced.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.reference", min: 0, max: "1" },
      type: [{ code: "Reference" }],
      constraint: [
        {
          key: "ele-1",
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
    dataPath: "root.indication.comorbidity[0].reference",
    parentDataPath: "root.indication.comorbidity[0]",
    basePath: "root.comorbidity.reference",
    baseId: "CodeableReference.reference",
    isPrimitive: false,
    childPaths: [
      "root.indication.comorbidity[0].reference.reference",
      "root.indication.comorbidity[0].reference.type",
      "root.indication.comorbidity[0].reference.display",
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
    dataPath: "root.indication.comorbidity[0].reference.reference",
    parentDataPath: "root.indication.comorbidity[0].reference",
    basePath: "root.comorbidity.reference.reference",
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
    dataPath: "root.indication.comorbidity[0].reference.type",
    parentDataPath: "root.indication.comorbidity[0].reference",
    basePath: "root.comorbidity.reference.type",
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
    dataPath: "root.indication.comorbidity[0].reference.display",
    parentDataPath: "root.indication.comorbidity[0].reference",
    basePath: "root.comorbidity.reference.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.indication.intendedEffect",
      path: "ClinicalUseDefinition.indication.intendedEffect",
      short: "The intended effect, aim or strategy to be achieved",
      definition: "The intended effect, aim or strategy to be achieved.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.indication.intendedEffect",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "CodeableReference",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "ProductIntendedUse",
          },
        ],
        strength: "preferred",
        description: "The overall intended use of a product.",
        valueSet: "http://hl7.org/fhir/ValueSet/product-intended-use",
      },
      mapping: [
        { identity: "idmp", map: "Therapeutic Indication.Intended Effect" },
      ],
    },
    dataPath: "root.indication.intendedEffect",
    parentDataPath: "root.indication",
    basePath: "root.intendedEffect",
    baseId: "ClinicalUseDefinition.indication.intendedEffect",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/product-intended-use",
        code: "Prevention",
        display: "Prevention",
      },
      {
        system: "http://hl7.org/fhir/product-intended-use",
        code: "Treatment",
        display: "Treatment",
      },
      {
        system: "http://hl7.org/fhir/product-intended-use",
        code: "Alleviation",
        display: "Alleviation",
      },
      {
        system: "http://hl7.org/fhir/product-intended-use",
        code: "Diagnosis",
        display: "Diagnosis",
      },
      {
        system: "http://hl7.org/fhir/product-intended-use",
        code: "Monitoring",
        display: "Monitoring",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.indication.duration[x]",
      path: "ClinicalUseDefinition.indication.duration[x]",
      short: "Timing or duration information",
      definition:
        "Timing or duration information, that may be associated with use with the indicated condition e.g. Adult patients suffering from myocardial infarction (from a few days until less than 35 days), ischaemic stroke (from 7 days until less than 6 months).",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.indication.duration[x]",
        min: 0,
        max: "1",
      },
      type: [{ code: "Range" }, { code: "string" }],
      constraint: [
        {
          key: "ele-1",
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
        { identity: "idmp", map: "Therapeutic Indication.Timing / Duration" },
      ],
    },
    dataPath: "root.indication.duration[x]",
    parentDataPath: "root.indication",
    basePath: "root.duration[x]",
    baseId: "ClinicalUseDefinition.indication.duration[x]",
    isPrimitive: false,
    childPaths: [
      "root.indication.durationRange.low",
      "root.indication.durationRange.high",
      "root.indication.durationString.string",
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
    dataPath: "root.indication.durationRange.low",
    parentDataPath: "root.indication.duration[x]",
    basePath: "root.duration[x].low",
    baseId: "Range.low",
    isPrimitive: false,
    childPaths: [
      "root.indication.durationRange.low.value",
      "root.indication.durationRange.low.comparator",
      "root.indication.durationRange.low.unit",
      "root.indication.durationRange.low.system",
      "root.indication.durationRange.low.code",
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
    dataPath: "root.indication.durationRange.low.value",
    parentDataPath: "root.indication.durationRange.low",
    basePath: "root.duration[x].low.value",
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
    dataPath: "root.indication.durationRange.low.comparator",
    parentDataPath: "root.indication.durationRange.low",
    basePath: "root.duration[x].low.comparator",
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
    dataPath: "root.indication.durationRange.low.unit",
    parentDataPath: "root.indication.durationRange.low",
    basePath: "root.duration[x].low.unit",
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
    dataPath: "root.indication.durationRange.low.system",
    parentDataPath: "root.indication.durationRange.low",
    basePath: "root.duration[x].low.system",
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
    dataPath: "root.indication.durationRange.low.code",
    parentDataPath: "root.indication.durationRange.low",
    basePath: "root.duration[x].low.code",
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
    dataPath: "root.indication.durationRange.high",
    parentDataPath: "root.indication.duration[x]",
    basePath: "root.duration[x].high",
    baseId: "Range.high",
    isPrimitive: false,
    childPaths: [
      "root.indication.durationRange.high.value",
      "root.indication.durationRange.high.comparator",
      "root.indication.durationRange.high.unit",
      "root.indication.durationRange.high.system",
      "root.indication.durationRange.high.code",
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
    dataPath: "root.indication.durationRange.high.value",
    parentDataPath: "root.indication.durationRange.high",
    basePath: "root.duration[x].high.value",
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
    dataPath: "root.indication.durationRange.high.comparator",
    parentDataPath: "root.indication.durationRange.high",
    basePath: "root.duration[x].high.comparator",
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
    dataPath: "root.indication.durationRange.high.unit",
    parentDataPath: "root.indication.durationRange.high",
    basePath: "root.duration[x].high.unit",
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
    dataPath: "root.indication.durationRange.high.system",
    parentDataPath: "root.indication.durationRange.high",
    basePath: "root.duration[x].high.system",
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
    dataPath: "root.indication.durationRange.high.code",
    parentDataPath: "root.indication.durationRange.high",
    basePath: "root.duration[x].high.code",
    baseId: "Quantity.code",
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
    dataPath: "root.indication.durationString.string",
    parentDataPath: "root.indication.duration[x]",
    basePath: "root.duration[x].string",
    baseId: "ClinicalUseDefinition.indication.duration[x]",
    isPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.indication.undesirableEffect",
      path: "ClinicalUseDefinition.indication.undesirableEffect",
      short:
        "An unwanted side effect or negative outcome of the subject of this resource when being used for this indication",
      definition:
        "An unwanted side effect or negative outcome that may happen if you use the drug (or other subject of this resource) for this indication.",
      min: 0,
      max: "*",
      base: {
        path: "ClinicalUseDefinition.indication.undesirableEffect",
        min: 0,
        max: "*",
      },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition",
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
        { identity: "idmp", map: "Therapeutic Indication.Undesirable Effects" },
      ],
    },
    dataPath: "root.indication.undesirableEffect[0]",
    parentDataPath: "root.indication",
    basePath: "root.undesirableEffect",
    baseId: "ClinicalUseDefinition.indication.undesirableEffect",
    isPrimitive: false,
    childPaths: [
      "root.indication.undesirableEffect[0].reference",
      "root.indication.undesirableEffect[0].type",
      "root.indication.undesirableEffect[0].display",
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
    dataPath: "root.indication.undesirableEffect[0].reference",
    parentDataPath: "root.indication.undesirableEffect[0]",
    basePath: "root.undesirableEffect.reference",
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
    dataPath: "root.indication.undesirableEffect[0].type",
    parentDataPath: "root.indication.undesirableEffect[0]",
    basePath: "root.undesirableEffect.type",
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
    dataPath: "root.indication.undesirableEffect[0].display",
    parentDataPath: "root.indication.undesirableEffect[0]",
    basePath: "root.undesirableEffect.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.interaction",
      path: "ClinicalUseDefinition.interaction",
      short: "Specifics for when this is an interaction",
      definition: "Specifics for when this is an interaction.",
      min: 0,
      max: "1",
      base: { path: "ClinicalUseDefinition.interaction", min: 0, max: "1" },
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
      mapping: [{ identity: "idmp", map: "Interactions" }],
    },
    dataPath: "root.interaction",
    parentDataPath: "root",
    basePath: "root.interaction",
    baseId: "ClinicalUseDefinition.interaction",
    isPrimitive: false,
    childPaths: [
      "root.interaction.interactant[0]",
      "root.interaction.type",
      "root.interaction.effect",
      "root.interaction.incidence",
      "root.interaction.management[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.interaction.interactant",
      path: "ClinicalUseDefinition.interaction.interactant",
      short:
        "The specific medication, food, substance or laboratory test that interacts",
      definition:
        "The specific medication, food, substance or laboratory test that interacts.",
      min: 0,
      max: "*",
      base: {
        path: "ClinicalUseDefinition.interaction.interactant",
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
      isSummary: true,
      mapping: [
        {
          identity: "idmp",
          map: "Interactions.Interactant and Interactions.Interactions Text",
        },
      ],
    },
    dataPath: "root.interaction.interactant[0]",
    parentDataPath: "root.interaction",
    basePath: "root.interactant",
    baseId: "ClinicalUseDefinition.interaction.interactant",
    isPrimitive: false,
    childPaths: ["root.interaction.interactant.item[x]"],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.interaction.interactant.item[x]",
      path: "ClinicalUseDefinition.interaction.interactant.item[x]",
      short: "The specific medication, food or laboratory test that interacts",
      definition:
        "The specific medication, food or laboratory test that interacts.",
      min: 1,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.interaction.interactant.item[x]",
        min: 1,
        max: "1",
      },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
            "http://hl7.org/fhir/StructureDefinition/Medication",
            "http://hl7.org/fhir/StructureDefinition/Substance",
            "http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
          ],
        },
        { code: "CodeableConcept" },
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
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "Interactant",
          },
        ],
        strength: "example",
        description:
          "An interactant - a substance that may have an clinically significant effect on another.",
        valueSet: "http://hl7.org/fhir/ValueSet/interactant",
      },
      mapping: [
        {
          identity: "idmp",
          map: "Interactions.Interactant and Interactions.Interactions Text",
        },
      ],
    },
    dataPath: "root.interaction.interactant.item[x]",
    parentDataPath: "root.interaction.interactant[0]",
    basePath: "root.item[x]",
    baseId: "ClinicalUseDefinition.interaction.interactant.item[x]",
    isPrimitive: false,
    childPaths: [
      "root.interaction.interactant.itemReference.reference",
      "root.interaction.interactant.itemReference.type",
      "root.interaction.interactant.itemReference.display",
      "root.interaction.interactant.itemCodeableConcept.coding[0]",
      "root.interaction.interactant.itemCodeableConcept.text",
    ],
    multiTypeType: "Reference",
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
    dataPath: "root.interaction.interactant.itemReference.reference",
    parentDataPath: "root.interaction.interactant.item[x]",
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
    dataPath: "root.interaction.interactant.itemReference.type",
    parentDataPath: "root.interaction.interactant.item[x]",
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
    dataPath: "root.interaction.interactant.itemReference.display",
    parentDataPath: "root.interaction.interactant.item[x]",
    basePath: "root.item[x].display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
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
    dataPath: "root.interaction.interactant.itemCodeableConcept.coding[0]",
    parentDataPath: "root.interaction.interactant.item[x]",
    basePath: "root.item[x].coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.interaction.interactant.itemCodeableConcept.coding[0].system",
      "root.interaction.interactant.itemCodeableConcept.coding[0].version",
      "root.interaction.interactant.itemCodeableConcept.coding[0].code",
      "root.interaction.interactant.itemCodeableConcept.coding[0].display",
      "root.interaction.interactant.itemCodeableConcept.coding[0].userSelected",
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
      "root.interaction.interactant.itemCodeableConcept.coding[0].system",
    parentDataPath:
      "root.interaction.interactant.itemCodeableConcept.coding[0]",
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
    dataPath:
      "root.interaction.interactant.itemCodeableConcept.coding[0].version",
    parentDataPath:
      "root.interaction.interactant.itemCodeableConcept.coding[0]",
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
    dataPath: "root.interaction.interactant.itemCodeableConcept.coding[0].code",
    parentDataPath:
      "root.interaction.interactant.itemCodeableConcept.coding[0]",
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
    dataPath:
      "root.interaction.interactant.itemCodeableConcept.coding[0].display",
    parentDataPath:
      "root.interaction.interactant.itemCodeableConcept.coding[0]",
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
    dataPath:
      "root.interaction.interactant.itemCodeableConcept.coding[0].userSelected",
    parentDataPath:
      "root.interaction.interactant.itemCodeableConcept.coding[0]",
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
    dataPath: "root.interaction.interactant.itemCodeableConcept.text",
    parentDataPath: "root.interaction.interactant.item[x]",
    basePath: "root.item[x].text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.interaction.type",
      path: "ClinicalUseDefinition.interaction.type",
      short:
        "The type of the interaction e.g. drug-drug interaction, drug-lab test interaction",
      definition:
        "The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.interaction.type",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "InteractionType",
          },
        ],
        strength: "example",
        description:
          "A categorisation for an interaction between two substances.",
        valueSet: "http://hl7.org/fhir/ValueSet/interaction-type",
      },
      mapping: [{ identity: "idmp", map: "Interactions.Interactions Type" }],
    },
    dataPath: "root.interaction.type",
    parentDataPath: "root.interaction",
    basePath: "root.type",
    baseId: "ClinicalUseDefinition.interaction.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/interaction-type",
        code: "drug-drug",
        display: "drug to drug interaction",
      },
      {
        system: "http://hl7.org/fhir/interaction-type",
        code: "drug-food",
        display: "drug to food interaction",
      },
      {
        system: "http://hl7.org/fhir/interaction-type",
        code: "drug-test",
        display: "drug to laboratory test interaction",
      },
      {
        system: "http://hl7.org/fhir/interaction-type",
        code: "other",
        display: "other interaction",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.interaction.effect",
      path: "ClinicalUseDefinition.interaction.effect",
      short:
        'The effect of the interaction, for example "reduced gastric absorption of primary medication"',
      definition:
        'The effect of the interaction, for example "reduced gastric absorption of primary medication".',
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.interaction.effect",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "CodeableReference",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "InteractionEffect",
          },
        ],
        strength: "example",
        description:
          "A interaction effect of clinical use of a medication or other substance.",
        valueSet: "http://hl7.org/fhir/ValueSet/interaction-effect",
      },
      mapping: [{ identity: "idmp", map: "Interactions.Interactions Effect" }],
    },
    dataPath: "root.interaction.effect",
    parentDataPath: "root.interaction",
    basePath: "root.effect",
    baseId: "ClinicalUseDefinition.interaction.effect",
    isPrimitive: false,
    childPaths: [
      "root.interaction.effect.concept",
      "root.interaction.effect.reference",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.concept",
      path: "CodeableReference.concept",
      short: "Reference to a concept (by class)",
      definition:
        "A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.concept", min: 0, max: "1" },
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
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.interaction.effect.concept",
    parentDataPath: "root.interaction.effect",
    basePath: "root.effect.concept",
    baseId: "CodeableReference.concept",
    isPrimitive: false,
    childPaths: [
      "root.interaction.effect.concept.coding[0]",
      "root.interaction.effect.concept.text",
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
    dataPath: "root.interaction.effect.concept.coding[0]",
    parentDataPath: "root.interaction.effect.concept",
    basePath: "root.effect.concept.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.interaction.effect.concept.coding[0].system",
      "root.interaction.effect.concept.coding[0].version",
      "root.interaction.effect.concept.coding[0].code",
      "root.interaction.effect.concept.coding[0].display",
      "root.interaction.effect.concept.coding[0].userSelected",
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
    dataPath: "root.interaction.effect.concept.coding[0].system",
    parentDataPath: "root.interaction.effect.concept.coding[0]",
    basePath: "root.effect.concept.coding.system",
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
    dataPath: "root.interaction.effect.concept.coding[0].version",
    parentDataPath: "root.interaction.effect.concept.coding[0]",
    basePath: "root.effect.concept.coding.version",
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
    dataPath: "root.interaction.effect.concept.coding[0].code",
    parentDataPath: "root.interaction.effect.concept.coding[0]",
    basePath: "root.effect.concept.coding.code",
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
    dataPath: "root.interaction.effect.concept.coding[0].display",
    parentDataPath: "root.interaction.effect.concept.coding[0]",
    basePath: "root.effect.concept.coding.display",
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
    dataPath: "root.interaction.effect.concept.coding[0].userSelected",
    parentDataPath: "root.interaction.effect.concept.coding[0]",
    basePath: "root.effect.concept.coding.userSelected",
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
    dataPath: "root.interaction.effect.concept.text",
    parentDataPath: "root.interaction.effect.concept",
    basePath: "root.effect.concept.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.reference",
      path: "CodeableReference.reference",
      short: "Reference to a resource (by instance)",
      definition:
        "A reference to a resource the provides exact details about the information being referenced.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.reference", min: 0, max: "1" },
      type: [{ code: "Reference" }],
      constraint: [
        {
          key: "ele-1",
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
    dataPath: "root.interaction.effect.reference",
    parentDataPath: "root.interaction.effect",
    basePath: "root.effect.reference",
    baseId: "CodeableReference.reference",
    isPrimitive: false,
    childPaths: [
      "root.interaction.effect.reference.reference",
      "root.interaction.effect.reference.type",
      "root.interaction.effect.reference.display",
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
    dataPath: "root.interaction.effect.reference.reference",
    parentDataPath: "root.interaction.effect.reference",
    basePath: "root.effect.reference.reference",
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
    dataPath: "root.interaction.effect.reference.type",
    parentDataPath: "root.interaction.effect.reference",
    basePath: "root.effect.reference.type",
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
    dataPath: "root.interaction.effect.reference.display",
    parentDataPath: "root.interaction.effect.reference",
    basePath: "root.effect.reference.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.interaction.incidence",
      path: "ClinicalUseDefinition.interaction.incidence",
      short: "The incidence of the interaction, e.g. theoretical, observed",
      definition:
        "The incidence of the interaction, e.g. theoretical, observed.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.interaction.incidence",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "UndesirableEffectSymptom",
          },
        ],
        strength: "example",
        description:
          "A categorisation for incidence of occurence of an interaction.",
        valueSet: "http://hl7.org/fhir/ValueSet/interaction-incidence",
      },
      mapping: [
        { identity: "idmp", map: "Interactions.Interactions Incidence" },
      ],
    },
    dataPath: "root.interaction.incidence",
    parentDataPath: "root.interaction",
    basePath: "root.incidence",
    baseId: "ClinicalUseDefinition.interaction.incidence",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/interaction-incidence",
        code: "Theoretical",
        display: "Theoretical",
      },
      {
        system: "http://hl7.org/fhir/interaction-incidence",
        code: "Observed",
        display: "Observed",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.interaction.management",
      path: "ClinicalUseDefinition.interaction.management",
      short: "Actions for managing the interaction",
      definition: "Actions for managing the interaction.",
      min: 0,
      max: "*",
      base: {
        path: "ClinicalUseDefinition.interaction.management",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "InteractionManagement",
          },
        ],
        strength: "example",
        description:
          "A type of management for an interaction of a medication or other substance.",
        valueSet: "http://hl7.org/fhir/ValueSet/interaction-management",
      },
      mapping: [{ identity: "idmp", map: "Interactions.Management Actions" }],
    },
    dataPath: "root.interaction.management[0]",
    parentDataPath: "root.interaction",
    basePath: "root.management",
    baseId: "ClinicalUseDefinition.interaction.management",
    isPrimitive: false,
    childPaths: [
      "root.interaction.management[0].coding[0]",
      "root.interaction.management[0].text",
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
    dataPath: "root.interaction.management[0].coding[0]",
    parentDataPath: "root.interaction.management[0]",
    basePath: "root.management.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.interaction.management[0].coding[0].system",
      "root.interaction.management[0].coding[0].version",
      "root.interaction.management[0].coding[0].code",
      "root.interaction.management[0].coding[0].display",
      "root.interaction.management[0].coding[0].userSelected",
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
    dataPath: "root.interaction.management[0].coding[0].system",
    parentDataPath: "root.interaction.management[0].coding[0]",
    basePath: "root.management.coding.system",
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
    dataPath: "root.interaction.management[0].coding[0].version",
    parentDataPath: "root.interaction.management[0].coding[0]",
    basePath: "root.management.coding.version",
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
    dataPath: "root.interaction.management[0].coding[0].code",
    parentDataPath: "root.interaction.management[0].coding[0]",
    basePath: "root.management.coding.code",
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
    dataPath: "root.interaction.management[0].coding[0].display",
    parentDataPath: "root.interaction.management[0].coding[0]",
    basePath: "root.management.coding.display",
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
    dataPath: "root.interaction.management[0].coding[0].userSelected",
    parentDataPath: "root.interaction.management[0].coding[0]",
    basePath: "root.management.coding.userSelected",
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
    dataPath: "root.interaction.management[0].text",
    parentDataPath: "root.interaction.management[0]",
    basePath: "root.management.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.population",
      path: "ClinicalUseDefinition.population",
      short: "The population group to which this applies",
      definition: "The population group to which this applies.",
      min: 0,
      max: "*",
      base: { path: "ClinicalUseDefinition.population", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Group"],
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
      mapping: [{ identity: "idmp", map: "Population Specifics" }],
    },
    dataPath: "root.population[0]",
    parentDataPath: "root",
    basePath: "root.population",
    baseId: "ClinicalUseDefinition.population",
    isPrimitive: false,
    childPaths: [
      "root.population[0].reference",
      "root.population[0].type",
      "root.population[0].display",
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
    dataPath: "root.population[0].reference",
    parentDataPath: "root.population[0]",
    basePath: "root.population.reference",
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
    dataPath: "root.population[0].type",
    parentDataPath: "root.population[0]",
    basePath: "root.population.type",
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
    dataPath: "root.population[0].display",
    parentDataPath: "root.population[0]",
    basePath: "root.population.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.undesirableEffect",
      path: "ClinicalUseDefinition.undesirableEffect",
      short: "A possible negative outcome from the use of this treatment",
      definition:
        "Describe the possible undesirable effects (negative outcomes) from the use of the medicinal product as treatment.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.undesirableEffect",
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
      mapping: [{ identity: "idmp", map: "Undesirable Effects" }],
    },
    dataPath: "root.undesirableEffect",
    parentDataPath: "root",
    basePath: "root.undesirableEffect",
    baseId: "ClinicalUseDefinition.undesirableEffect",
    isPrimitive: false,
    childPaths: [
      "root.undesirableEffect.symptomConditionEffect",
      "root.undesirableEffect.classification",
      "root.undesirableEffect.frequencyOfOccurrence",
    ],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.undesirableEffect.symptomConditionEffect",
      path: "ClinicalUseDefinition.undesirableEffect.symptomConditionEffect",
      short: "The situation in which the undesirable effect may manifest",
      definition: "The situation in which the undesirable effect may manifest.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.undesirableEffect.symptomConditionEffect",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "CodeableReference",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "UndesirableEffectSymptom",
          },
        ],
        strength: "example",
        description: "An undesirable effect of clinical use.",
        valueSet: "http://hl7.org/fhir/ValueSet/undesirable-effect-symptom",
      },
      mapping: [
        {
          identity: "idmp",
          map: 'Undesirable Effects.Undesirable Effect as "Symptom / Condition / Effect"',
        },
      ],
    },
    dataPath: "root.undesirableEffect.symptomConditionEffect",
    parentDataPath: "root.undesirableEffect",
    basePath: "root.symptomConditionEffect",
    baseId: "ClinicalUseDefinition.undesirableEffect.symptomConditionEffect",
    isPrimitive: false,
    childPaths: [
      "root.undesirableEffect.symptomConditionEffect.concept",
      "root.undesirableEffect.symptomConditionEffect.reference",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.concept",
      path: "CodeableReference.concept",
      short: "Reference to a concept (by class)",
      definition:
        "A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.concept", min: 0, max: "1" },
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
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.undesirableEffect.symptomConditionEffect.concept",
    parentDataPath: "root.undesirableEffect.symptomConditionEffect",
    basePath: "root.symptomConditionEffect.concept",
    baseId: "CodeableReference.concept",
    isPrimitive: false,
    childPaths: [
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0]",
      "root.undesirableEffect.symptomConditionEffect.concept.text",
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
    dataPath: "root.undesirableEffect.symptomConditionEffect.concept.coding[0]",
    parentDataPath: "root.undesirableEffect.symptomConditionEffect.concept",
    basePath: "root.symptomConditionEffect.concept.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0].system",
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0].version",
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0].code",
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0].display",
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0].userSelected",
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
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0].system",
    parentDataPath:
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0]",
    basePath: "root.symptomConditionEffect.concept.coding.system",
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
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0].version",
    parentDataPath:
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0]",
    basePath: "root.symptomConditionEffect.concept.coding.version",
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
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0].code",
    parentDataPath:
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0]",
    basePath: "root.symptomConditionEffect.concept.coding.code",
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
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0].display",
    parentDataPath:
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0]",
    basePath: "root.symptomConditionEffect.concept.coding.display",
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
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0].userSelected",
    parentDataPath:
      "root.undesirableEffect.symptomConditionEffect.concept.coding[0]",
    basePath: "root.symptomConditionEffect.concept.coding.userSelected",
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
    dataPath: "root.undesirableEffect.symptomConditionEffect.concept.text",
    parentDataPath: "root.undesirableEffect.symptomConditionEffect.concept",
    basePath: "root.symptomConditionEffect.concept.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableReference.reference",
      path: "CodeableReference.reference",
      short: "Reference to a resource (by instance)",
      definition:
        "A reference to a resource the provides exact details about the information being referenced.",
      min: 0,
      max: "1",
      base: { path: "CodeableReference.reference", min: 0, max: "1" },
      type: [{ code: "Reference" }],
      constraint: [
        {
          key: "ele-1",
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
    dataPath: "root.undesirableEffect.symptomConditionEffect.reference",
    parentDataPath: "root.undesirableEffect.symptomConditionEffect",
    basePath: "root.symptomConditionEffect.reference",
    baseId: "CodeableReference.reference",
    isPrimitive: false,
    childPaths: [
      "root.undesirableEffect.symptomConditionEffect.reference.reference",
      "root.undesirableEffect.symptomConditionEffect.reference.type",
      "root.undesirableEffect.symptomConditionEffect.reference.display",
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
    dataPath:
      "root.undesirableEffect.symptomConditionEffect.reference.reference",
    parentDataPath: "root.undesirableEffect.symptomConditionEffect.reference",
    basePath: "root.symptomConditionEffect.reference.reference",
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
    dataPath: "root.undesirableEffect.symptomConditionEffect.reference.type",
    parentDataPath: "root.undesirableEffect.symptomConditionEffect.reference",
    basePath: "root.symptomConditionEffect.reference.type",
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
    dataPath: "root.undesirableEffect.symptomConditionEffect.reference.display",
    parentDataPath: "root.undesirableEffect.symptomConditionEffect.reference",
    basePath: "root.symptomConditionEffect.reference.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.undesirableEffect.classification",
      path: "ClinicalUseDefinition.undesirableEffect.classification",
      short: "High level classification of the effect",
      definition: "High level classification of the effect.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.undesirableEffect.classification",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "UndesirableEffectClassification",
          },
        ],
        strength: "example",
        description: "A categorisation for an undesirable effect.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/undesirable-effect-classification",
      },
      mapping: [
        {
          identity: "idmp",
          map: "Undesirable Effects.Symptom / Condition / Effect Classification",
        },
      ],
    },
    dataPath: "root.undesirableEffect.classification",
    parentDataPath: "root.undesirableEffect",
    basePath: "root.classification",
    baseId: "ClinicalUseDefinition.undesirableEffect.classification",
    isPrimitive: false,
    childPaths: [
      "root.undesirableEffect.classification.coding[0]",
      "root.undesirableEffect.classification.text",
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
    dataPath: "root.undesirableEffect.classification.coding[0]",
    parentDataPath: "root.undesirableEffect.classification",
    basePath: "root.classification.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.undesirableEffect.classification.coding[0].system",
      "root.undesirableEffect.classification.coding[0].version",
      "root.undesirableEffect.classification.coding[0].code",
      "root.undesirableEffect.classification.coding[0].display",
      "root.undesirableEffect.classification.coding[0].userSelected",
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
    dataPath: "root.undesirableEffect.classification.coding[0].system",
    parentDataPath: "root.undesirableEffect.classification.coding[0]",
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
    dataPath: "root.undesirableEffect.classification.coding[0].version",
    parentDataPath: "root.undesirableEffect.classification.coding[0]",
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
    dataPath: "root.undesirableEffect.classification.coding[0].code",
    parentDataPath: "root.undesirableEffect.classification.coding[0]",
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
    dataPath: "root.undesirableEffect.classification.coding[0].display",
    parentDataPath: "root.undesirableEffect.classification.coding[0]",
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
    dataPath: "root.undesirableEffect.classification.coding[0].userSelected",
    parentDataPath: "root.undesirableEffect.classification.coding[0]",
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
    dataPath: "root.undesirableEffect.classification.text",
    parentDataPath: "root.undesirableEffect.classification",
    basePath: "root.classification.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.undesirableEffect.frequencyOfOccurrence",
      path: "ClinicalUseDefinition.undesirableEffect.frequencyOfOccurrence",
      short: "How often the effect is seen",
      definition: "How often the effect is seen.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.undesirableEffect.frequencyOfOccurrence",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "UndesirablEffectFrequency",
          },
        ],
        strength: "example",
        description:
          "A categorisation for a frequency of occurence of an undesirable effect.",
        valueSet: "http://hl7.org/fhir/ValueSet/undesirable-effect-frequency",
      },
      mapping: [
        {
          identity: "idmp",
          map: "Undesirable Effects.Frequency of Occurrence",
        },
      ],
    },
    dataPath: "root.undesirableEffect.frequencyOfOccurrence",
    parentDataPath: "root.undesirableEffect",
    basePath: "root.frequencyOfOccurrence",
    baseId: "ClinicalUseDefinition.undesirableEffect.frequencyOfOccurrence",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/undesirable-effect-frequency",
        code: "Common",
        display: "Common",
      },
      {
        system: "http://hl7.org/fhir/undesirable-effect-frequency",
        code: "Uncommon",
        display: "Uncommon",
      },
      {
        system: "http://hl7.org/fhir/undesirable-effect-frequency",
        code: "Rare",
        display: "Rare",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.warning",
      path: "ClinicalUseDefinition.warning",
      short:
        "Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness'",
      definition:
        "A critical piece of information about environmental, health or physical risks or hazards that serve as caution to the user. For example 'Do not operate heavy machinery', 'May cause drowsiness', or 'Get medical advice/attention if you feel unwell'.",
      min: 0,
      max: "1",
      base: { path: "ClinicalUseDefinition.warning", min: 0, max: "1" },
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
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.warning",
    parentDataPath: "root",
    basePath: "root.warning",
    baseId: "ClinicalUseDefinition.warning",
    isPrimitive: false,
    childPaths: ["root.warning.description", "root.warning.code"],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.warning.description",
      path: "ClinicalUseDefinition.warning.description",
      short: "A textual definition of this warning, with formatting",
      definition: "A textual definition of this warning, with formatting.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.warning.description",
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
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.warning.description",
    parentDataPath: "root.warning",
    basePath: "root.description",
    baseId: "ClinicalUseDefinition.warning.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.warning.code",
      path: "ClinicalUseDefinition.warning.code",
      short: "A coded or unformatted textual definition of this warning",
      definition: "A coded or unformatted textual definition of this warning.",
      min: 0,
      max: "1",
      base: { path: "ClinicalUseDefinition.warning.code", min: 0, max: "1" },
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
            valueString: "WarningType",
          },
        ],
        strength: "example",
        description: "Classification of warning type.",
        valueSet: "http://hl7.org/fhir/ValueSet/warning-type",
      },
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.warning.code",
    parentDataPath: "root.warning",
    basePath: "root.code",
    baseId: "ClinicalUseDefinition.warning.code",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P313",
        display: "Get medical advice/attention.",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P314",
        display: "Get medical advice/attention if you feel unwell.",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P315",
        display: "Get immediate medical advice/attention.",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P320",
        display: "Specific treatment is urgent (see ... on this label).",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P321",
        display: "Specific treatment (see ... on this label).",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P322",
        display: "Specific measures (see ... on this label).",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P330",
        display: "Rinse mouth.",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P331",
        display: "Do NOT induce vomiting.",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P361",
        display: "Remove/Take off immediately all contaminated clothing.",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P363",
        display: "Wash contaminated clothing before reuse..",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition",
      path: "ClinicalUseDefinition",
      short:
        "A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure",
      definition:
        "A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.",
      min: 0,
      max: "*",
      base: { path: "ClinicalUseDefinition", min: 0, max: "*" },
      constraint: [
        {
          key: "cud-1",
          severity: "error",
          human:
            "Indication, Contraindication, Interaction, UndesirableEffect and Warning cannot be used in the same instance",
          expression:
            "(ClinicalUseDefinition.indication.count() + ClinicalUseDefinition.contraindication.count() + ClinicalUseDefinition.interaction.count() + ClinicalUseDefinition.undesirableEffect.count() + ClinicalUseDefinition.warning.count())  < 2",
          xpath:
            "count(f:ClinicalUseDefinition/f:indication|f:ClinicalUseDefinition/f:contraindication|f:ClinicalUseDefinition/f:interaction|f:ClinicalUseDefinition/f:undesirableEffect|f:ClinicalUseDefinition/f:warning) < 2",
          source:
            "http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition",
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
        {
          identity: "idmp",
          map: "Contraindication, Therapeutic Indication, Interactions, Undesirable Effects",
        },
        { identity: "w5", map: "clinical.general" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "ClinicalUseDefinition",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
