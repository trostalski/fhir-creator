const data = [
  {
    element: {
      id: "Ingredient.id",
      path: "Ingredient.id",
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
    baseId: "Ingredient.id",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.meta",
      path: "Ingredient.meta",
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
    baseId: "Ingredient.meta",
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
    isPrimitive: false,
    childPaths: [
      "root.meta.tag[0].system",
      "root.meta.tag[0].version",
      "root.meta.tag[0].code",
      "root.meta.tag[0].display",
      "root.meta.tag[0].userSelected",
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
    dataPath: "root.meta.tag[0].system",
    parentDataPath: "root.meta.tag[0]",
    basePath: "root.meta.tag.system",
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
    dataPath: "root.meta.tag[0].version",
    parentDataPath: "root.meta.tag[0]",
    basePath: "root.meta.tag.version",
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
    dataPath: "root.meta.tag[0].code",
    parentDataPath: "root.meta.tag[0]",
    basePath: "root.meta.tag.code",
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
    dataPath: "root.meta.tag[0].display",
    parentDataPath: "root.meta.tag[0]",
    basePath: "root.meta.tag.display",
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
    dataPath: "root.meta.tag[0].userSelected",
    parentDataPath: "root.meta.tag[0]",
    basePath: "root.meta.tag.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.implicitRules",
      path: "Ingredient.implicitRules",
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
    baseId: "Ingredient.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.language",
      path: "Ingredient.language",
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
    baseId: "Ingredient.language",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.text",
      path: "Ingredient.text",
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
    baseId: "Ingredient.text",
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
      id: "Ingredient.contained",
      path: "Ingredient.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/Ingredient",
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
    baseId: "Ingredient.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.modifierExtension",
      path: "Ingredient.modifierExtension",
      short: "Extensions that cannot be ignored",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content"],
      min: 0,
      max: "*",
      base: { path: "DomainResource.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
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
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      mustSupport: false,
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the resource that contains them",
      isSummary: false,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.modifierExtension[0]",
    parentDataPath: "root",
    basePath: "root.modifierExtension",
    baseId: "Ingredient.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.identifier",
      path: "Ingredient.identifier",
      short: "An identifier or code by which the ingredient can be referenced",
      definition:
        "The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.",
      min: 0,
      max: "1",
      base: { path: "Ingredient.identifier", min: 0, max: "1" },
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
    dataPath: "root.identifier",
    parentDataPath: "root",
    basePath: "root.identifier",
    baseId: "Ingredient.identifier",
    isPrimitive: false,
    childPaths: [
      "root.identifier.use",
      "root.identifier.type",
      "root.identifier.system",
      "root.identifier.value",
      "root.identifier.period",
      "root.identifier.assigner",
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
    dataPath: "root.identifier.use",
    parentDataPath: "root.identifier",
    basePath: "root.identifier.use",
    baseId: "Identifier.use",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
    dataPath: "root.identifier.type",
    parentDataPath: "root.identifier",
    basePath: "root.identifier.type",
    baseId: "Identifier.type",
    isPrimitive: false,
    childPaths: ["root.identifier.type.coding[0]", "root.identifier.type.text"],
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
    dataPath: "root.identifier.type.coding[0]",
    parentDataPath: "root.identifier.type",
    basePath: "root.identifier.type.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.identifier.type.coding[0].system",
      "root.identifier.type.coding[0].version",
      "root.identifier.type.coding[0].code",
      "root.identifier.type.coding[0].display",
      "root.identifier.type.coding[0].userSelected",
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
    dataPath: "root.identifier.type.coding[0].system",
    parentDataPath: "root.identifier.type.coding[0]",
    basePath: "root.identifier.type.coding.system",
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
    dataPath: "root.identifier.type.coding[0].version",
    parentDataPath: "root.identifier.type.coding[0]",
    basePath: "root.identifier.type.coding.version",
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
    dataPath: "root.identifier.type.coding[0].code",
    parentDataPath: "root.identifier.type.coding[0]",
    basePath: "root.identifier.type.coding.code",
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
    dataPath: "root.identifier.type.coding[0].display",
    parentDataPath: "root.identifier.type.coding[0]",
    basePath: "root.identifier.type.coding.display",
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
    dataPath: "root.identifier.type.coding[0].userSelected",
    parentDataPath: "root.identifier.type.coding[0]",
    basePath: "root.identifier.type.coding.userSelected",
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
    dataPath: "root.identifier.type.text",
    parentDataPath: "root.identifier.type",
    basePath: "root.identifier.type.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
    dataPath: "root.identifier.system",
    parentDataPath: "root.identifier",
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
    dataPath: "root.identifier.value",
    parentDataPath: "root.identifier",
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
    dataPath: "root.identifier.period",
    parentDataPath: "root.identifier",
    basePath: "root.identifier.period",
    baseId: "Identifier.period",
    isPrimitive: false,
    childPaths: ["root.identifier.period.start", "root.identifier.period.end"],
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
    dataPath: "root.identifier.period.start",
    parentDataPath: "root.identifier.period",
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
    dataPath: "root.identifier.period.end",
    parentDataPath: "root.identifier.period",
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
    dataPath: "root.identifier.assigner",
    parentDataPath: "root.identifier",
    basePath: "root.identifier.assigner",
    baseId: "Identifier.assigner",
    isPrimitive: false,
    childPaths: [
      "root.identifier.assigner.reference",
      "root.identifier.assigner.type",
      "root.identifier.assigner.display",
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
    dataPath: "root.identifier.assigner.reference",
    parentDataPath: "root.identifier.assigner",
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
    dataPath: "root.identifier.assigner.type",
    parentDataPath: "root.identifier.assigner",
    basePath: "root.identifier.assigner.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
    dataPath: "root.identifier.assigner.display",
    parentDataPath: "root.identifier.assigner",
    basePath: "root.identifier.assigner.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.status",
      path: "Ingredient.status",
      short: "draft | active | retired | unknown",
      definition:
        "The status of this ingredient. Enables tracking the life-cycle of the content.",
      comment:
        "Allows filtering of ingredient that are appropriate for use versus not.",
      min: 1,
      max: "1",
      base: { path: "Ingredient.status", min: 1, max: "1" },
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
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "Ingredient.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.for",
      path: "Ingredient.for",
      short: "The product which this ingredient is a constituent part of",
      definition: "The product which this ingredient is a constituent part of.",
      min: 0,
      max: "*",
      base: { path: "Ingredient.for", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
            "http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition",
            "http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition",
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
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.for[0]",
    parentDataPath: "root",
    basePath: "root.for",
    baseId: "Ingredient.for",
    isPrimitive: false,
    childPaths: [
      "root.for[0].reference",
      "root.for[0].type",
      "root.for[0].display",
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
    dataPath: "root.for[0].reference",
    parentDataPath: "root.for[0]",
    basePath: "root.for.reference",
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
    dataPath: "root.for[0].type",
    parentDataPath: "root.for[0]",
    basePath: "root.for.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
    dataPath: "root.for[0].display",
    parentDataPath: "root.for[0]",
    basePath: "root.for.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.role",
      path: "Ingredient.role",
      short:
        "Purpose of the ingredient within the product, e.g. active, inactive",
      definition:
        "A classification of the ingredient identifying its purpose within the product, e.g. active, inactive.",
      min: 1,
      max: "1",
      base: { path: "Ingredient.role", min: 1, max: "1" },
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
            valueString: "IngredientRole",
          },
        ],
        strength: "example",
        description:
          "A classification of the ingredient identifying its purpose within the product, e.g. active, inactive.",
        valueSet: "http://hl7.org/fhir/ValueSet/ingredient-role",
      },
      mapping: [{ identity: "idmp", map: "Ingredient.Ingredient Role" }],
    },
    dataPath: "root.role",
    parentDataPath: "root",
    basePath: "root.role",
    baseId: "Ingredient.role",
    isPrimitive: false,
    childPaths: ["root.role.coding[0]", "root.role.text"],
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
    dataPath: "root.role.coding[0]",
    parentDataPath: "root.role",
    basePath: "root.role.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.role.coding[0].system",
      "root.role.coding[0].version",
      "root.role.coding[0].code",
      "root.role.coding[0].display",
      "root.role.coding[0].userSelected",
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
    dataPath: "root.role.coding[0].system",
    parentDataPath: "root.role.coding[0]",
    basePath: "root.role.coding.system",
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
    dataPath: "root.role.coding[0].version",
    parentDataPath: "root.role.coding[0]",
    basePath: "root.role.coding.version",
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
    dataPath: "root.role.coding[0].code",
    parentDataPath: "root.role.coding[0]",
    basePath: "root.role.coding.code",
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
    dataPath: "root.role.coding[0].display",
    parentDataPath: "root.role.coding[0]",
    basePath: "root.role.coding.display",
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
    dataPath: "root.role.coding[0].userSelected",
    parentDataPath: "root.role.coding[0]",
    basePath: "root.role.coding.userSelected",
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
    dataPath: "root.role.text",
    parentDataPath: "root.role",
    basePath: "root.role.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.function",
      path: "Ingredient.function",
      short:
        "Precise action within the drug product, e.g. antioxidant, alkalizing agent",
      definition:
        "A classification of the ingredient identifying its precise purpose(s) in the drug product. This extends the Ingredient.role to add more detail. Example: antioxidant, alkalizing agent.",
      min: 0,
      max: "*",
      base: { path: "Ingredient.function", min: 0, max: "*" },
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
            valueString: "IngredientFunction",
          },
        ],
        strength: "example",
        description:
          "A classification of the ingredient identifying its precise purpose(s) in the drug product (beyond e.g. active/inactive).",
        valueSet: "http://hl7.org/fhir/ValueSet/ingredient-function",
      },
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.function[0]",
    parentDataPath: "root",
    basePath: "root.function",
    baseId: "Ingredient.function",
    isPrimitive: false,
    childPaths: ["root.function[0].coding[0]", "root.function[0].text"],
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
    dataPath: "root.function[0].coding[0]",
    parentDataPath: "root.function[0]",
    basePath: "root.function.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.function[0].coding[0].system",
      "root.function[0].coding[0].version",
      "root.function[0].coding[0].code",
      "root.function[0].coding[0].display",
      "root.function[0].coding[0].userSelected",
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
    dataPath: "root.function[0].coding[0].system",
    parentDataPath: "root.function[0].coding[0]",
    basePath: "root.function.coding.system",
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
    dataPath: "root.function[0].coding[0].version",
    parentDataPath: "root.function[0].coding[0]",
    basePath: "root.function.coding.version",
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
    dataPath: "root.function[0].coding[0].code",
    parentDataPath: "root.function[0].coding[0]",
    basePath: "root.function.coding.code",
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
    dataPath: "root.function[0].coding[0].display",
    parentDataPath: "root.function[0].coding[0]",
    basePath: "root.function.coding.display",
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
    dataPath: "root.function[0].coding[0].userSelected",
    parentDataPath: "root.function[0].coding[0]",
    basePath: "root.function.coding.userSelected",
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
    dataPath: "root.function[0].text",
    parentDataPath: "root.function[0]",
    basePath: "root.function.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.allergenicIndicator",
      path: "Ingredient.allergenicIndicator",
      short: "If the ingredient is a known or suspected allergen",
      definition:
        "If the ingredient is a known or suspected allergen. Note that this is a property of the substance, so if a reference to a SubstanceDefinition is used to decribe that (rather than just a code), the allergen information should go there, not here.",
      min: 0,
      max: "1",
      base: { path: "Ingredient.allergenicIndicator", min: 0, max: "1" },
      type: [{ code: "boolean" }],
      meaningWhenMissing:
        "If this value is not present, there is no statement being made about whether this is an allergen or not. No inference can be made",
      constraint: [
        {
          key: "ele-1",
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
      mapping: [{ identity: "idmp", map: "Ingredient.Allergenic Indicator" }],
    },
    dataPath: "root.allergenicIndicator",
    parentDataPath: "root",
    basePath: "root.allergenicIndicator",
    baseId: "Ingredient.allergenicIndicator",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.manufacturer",
      path: "Ingredient.manufacturer",
      short: "An organization that manufactures this ingredient",
      definition:
        "The organization(s) that manufacture this ingredient. Can be used to indicate:         1) Organizations we are aware of that manufacture this ingredient         2) Specific Manufacturer(s) currently being used         3) Set of organisations allowed to manufacture this ingredient for this product         Users must be clear on the application of context relevant to their use case.",
      min: 0,
      max: "*",
      base: { path: "Ingredient.manufacturer", min: 0, max: "*" },
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
      mapping: [{ identity: "idmp", map: "Ingredient.manufacturer" }],
    },
    dataPath: "root.manufacturer[0]",
    parentDataPath: "root",
    basePath: "root.manufacturer",
    baseId: "Ingredient.manufacturer",
    isPrimitive: false,
    childPaths: ["root.manufacturer[0].modifierExtension[0]"],
    value: "",
  },
  {
    element: {
      id: "BackboneElement.modifierExtension",
      path: "BackboneElement.modifierExtension",
      short: "Extensions that cannot be ignored even if unrecognized",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content", "modifiers"],
      min: 0,
      max: "*",
      base: { path: "BackboneElement.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
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
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.manufacturer[0].modifierExtension[0]",
    parentDataPath: "root.manufacturer[0]",
    basePath: "root.manufacturer.modifierExtension",
    baseId: "BackboneElement.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.manufacturer.modifierExtension",
      path: "Ingredient.manufacturer.modifierExtension",
      short: "Extensions that cannot be ignored even if unrecognized",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content", "modifiers"],
      min: 0,
      max: "*",
      base: { path: "BackboneElement.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
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
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.manufacturer.modifierExtension[0]",
    parentDataPath: "root.manufacturer",
    basePath: "root.modifierExtension",
    baseId: "Ingredient.manufacturer.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.manufacturer.role",
      path: "Ingredient.manufacturer.role",
      short: "allowed | possible | actual",
      definition:
        "The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.",
      min: 0,
      max: "1",
      base: { path: "Ingredient.manufacturer.role", min: 0, max: "1" },
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
            valueString: "IngredientManufacturerRole",
          },
        ],
        strength: "required",
        description:
          "The way in which this manufacturer is associated with the ingredient.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/ingredient-manufacturer-role|4.3.0",
      },
      mapping: [
        {
          identity: "idmp",
          map: "Ingredient.Manufacturer / Establishment (Organisation)",
        },
      ],
    },
    dataPath: "root.manufacturer.role",
    parentDataPath: "root.manufacturer",
    basePath: "root.role",
    baseId: "Ingredient.manufacturer.role",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.manufacturer.manufacturer",
      path: "Ingredient.manufacturer.manufacturer",
      short: "An organization that manufactures this ingredient",
      definition: "An organization that manufactures this ingredient.",
      min: 1,
      max: "1",
      base: { path: "Ingredient.manufacturer.manufacturer", min: 1, max: "1" },
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
        {
          identity: "idmp",
          map: "Ingredient.Manufacturer / Establishment (Organisation)",
        },
      ],
    },
    dataPath: "root.manufacturer.manufacturer",
    parentDataPath: "root.manufacturer",
    basePath: "root.manufacturer",
    baseId: "Ingredient.manufacturer.manufacturer",
    isPrimitive: false,
    childPaths: [
      "root.manufacturer.manufacturer.reference",
      "root.manufacturer.manufacturer.type",
      "root.manufacturer.manufacturer.display",
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
    dataPath: "root.manufacturer.manufacturer.reference",
    parentDataPath: "root.manufacturer.manufacturer",
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
    dataPath: "root.manufacturer.manufacturer.type",
    parentDataPath: "root.manufacturer.manufacturer",
    basePath: "root.manufacturer.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
    dataPath: "root.manufacturer.manufacturer.display",
    parentDataPath: "root.manufacturer.manufacturer",
    basePath: "root.manufacturer.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance",
      path: "Ingredient.substance",
      short: "The substance that comprises this ingredient",
      definition: "The substance that comprises this ingredient.",
      min: 1,
      max: "1",
      base: { path: "Ingredient.substance", min: 1, max: "1" },
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
      mapping: [{ identity: "idmp", map: "Ingredient.Substance" }],
    },
    dataPath: "root.substance",
    parentDataPath: "root",
    basePath: "root.substance",
    baseId: "Ingredient.substance",
    isPrimitive: false,
    childPaths: [
      "root.substance.modifierExtension[0]",
      "root.substance.code",
      "root.substance.strength[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "BackboneElement.modifierExtension",
      path: "BackboneElement.modifierExtension",
      short: "Extensions that cannot be ignored even if unrecognized",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content", "modifiers"],
      min: 0,
      max: "*",
      base: { path: "BackboneElement.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
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
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.substance.modifierExtension[0]",
    parentDataPath: "root.substance",
    basePath: "root.substance.modifierExtension",
    baseId: "BackboneElement.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.code",
      path: "Ingredient.substance.code",
      short: "A code or full resource that represents the ingredient substance",
      definition:
        "A code or full resource that represents the ingredient's substance.",
      min: 1,
      max: "1",
      base: { path: "Ingredient.substance.code", min: 1, max: "1" },
      type: [
        {
          code: "CodeableReference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/SubstanceDefinition",
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
            valueString: "SNOMEDCTSubstanceCodes",
          },
        ],
        strength: "example",
        description:
          "This value set includes all substance codes from SNOMED CT - provided as an exemplar value set.",
        valueSet: "http://hl7.org/fhir/ValueSet/substance-codes",
      },
      mapping: [{ identity: "idmp", map: "Substance.Substance" }],
    },
    dataPath: "root.substance.code",
    parentDataPath: "root.substance",
    basePath: "root.code",
    baseId: "Ingredient.substance.code",
    isPrimitive: false,
    childPaths: [
      "root.substance.code.concept",
      "root.substance.code.reference",
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
    dataPath: "root.substance.code.concept",
    parentDataPath: "root.substance.code",
    basePath: "root.code.concept",
    baseId: "CodeableReference.concept",
    isPrimitive: false,
    childPaths: [
      "root.substance.code.concept.coding[0]",
      "root.substance.code.concept.text",
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
    dataPath: "root.substance.code.concept.coding[0]",
    parentDataPath: "root.substance.code.concept",
    basePath: "root.code.concept.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.substance.code.concept.coding[0].system",
      "root.substance.code.concept.coding[0].version",
      "root.substance.code.concept.coding[0].code",
      "root.substance.code.concept.coding[0].display",
      "root.substance.code.concept.coding[0].userSelected",
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
    dataPath: "root.substance.code.concept.coding[0].system",
    parentDataPath: "root.substance.code.concept.coding[0]",
    basePath: "root.code.concept.coding.system",
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
    dataPath: "root.substance.code.concept.coding[0].version",
    parentDataPath: "root.substance.code.concept.coding[0]",
    basePath: "root.code.concept.coding.version",
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
    dataPath: "root.substance.code.concept.coding[0].code",
    parentDataPath: "root.substance.code.concept.coding[0]",
    basePath: "root.code.concept.coding.code",
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
    dataPath: "root.substance.code.concept.coding[0].display",
    parentDataPath: "root.substance.code.concept.coding[0]",
    basePath: "root.code.concept.coding.display",
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
    dataPath: "root.substance.code.concept.coding[0].userSelected",
    parentDataPath: "root.substance.code.concept.coding[0]",
    basePath: "root.code.concept.coding.userSelected",
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
    dataPath: "root.substance.code.concept.text",
    parentDataPath: "root.substance.code.concept",
    basePath: "root.code.concept.text",
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
    dataPath: "root.substance.code.reference",
    parentDataPath: "root.substance.code",
    basePath: "root.code.reference",
    baseId: "CodeableReference.reference",
    isPrimitive: false,
    childPaths: [
      "root.substance.code.reference.reference",
      "root.substance.code.reference.type",
      "root.substance.code.reference.display",
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
    dataPath: "root.substance.code.reference.reference",
    parentDataPath: "root.substance.code.reference",
    basePath: "root.code.reference.reference",
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
    dataPath: "root.substance.code.reference.type",
    parentDataPath: "root.substance.code.reference",
    basePath: "root.code.reference.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
    dataPath: "root.substance.code.reference.display",
    parentDataPath: "root.substance.code.reference",
    basePath: "root.code.reference.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength",
      path: "Ingredient.substance.strength",
      short:
        "The quantity of substance, per presentation, or per volume or mass, and type of quantity",
      definition:
        "The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. The allowed repetitions do not represent different strengths, but are different representations - mathematically equivalent - of a single strength.",
      min: 0,
      max: "*",
      base: { path: "Ingredient.substance.strength", min: 0, max: "*" },
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
      mapping: [{ identity: "idmp", map: "Specified Substance.Strength" }],
    },
    dataPath: "root.substance.strength[0]",
    parentDataPath: "root.substance",
    basePath: "root.strength",
    baseId: "Ingredient.substance.strength",
    isPrimitive: false,
    childPaths: ["root.substance.strength[0].modifierExtension[0]"],
    value: "",
  },
  {
    element: {
      id: "BackboneElement.modifierExtension",
      path: "BackboneElement.modifierExtension",
      short: "Extensions that cannot be ignored even if unrecognized",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content", "modifiers"],
      min: 0,
      max: "*",
      base: { path: "BackboneElement.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
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
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.substance.strength[0].modifierExtension[0]",
    parentDataPath: "root.substance.strength[0]",
    basePath: "root.strength.modifierExtension",
    baseId: "BackboneElement.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.modifierExtension",
      path: "Ingredient.substance.strength.modifierExtension",
      short: "Extensions that cannot be ignored even if unrecognized",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content", "modifiers"],
      min: 0,
      max: "*",
      base: { path: "BackboneElement.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
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
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.substance.strength.modifierExtension[0]",
    parentDataPath: "root.substance.strength",
    basePath: "root.modifierExtension",
    baseId: "Ingredient.substance.strength.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.presentation[x]",
      path: "Ingredient.substance.strength.presentation[x]",
      short: "The quantity of substance in the unit of presentation",
      definition:
        "The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. Unit of presentation refers to the quantity that the item occurs in e.g. a strength per tablet size, perhaps 'per 20mg' (the size of the tablet). It is not generally normalized as a unitary unit, which would be 'per mg').",
      min: 0,
      max: "1",
      base: {
        path: "Ingredient.substance.strength.presentation[x]",
        min: 0,
        max: "1",
      },
      type: [{ code: "Ratio" }, { code: "RatioRange" }],
      constraint: [
        {
          key: "ele-1",
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
      mapping: [{ identity: "idmp", map: "Strength.Strength (Presentation)" }],
    },
    dataPath: "root.substance.strength.presentation[x]",
    parentDataPath: "root.substance.strength",
    basePath: "root.presentation[x]",
    baseId: "Ingredient.substance.strength.presentation[x]",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.presentationRatio.numerator",
      "root.substance.strength.presentationRatio.denominator",
      "root.substance.strength.presentationRatioRange.lowNumerator",
      "root.substance.strength.presentationRatioRange.highNumerator",
      "root.substance.strength.presentationRatioRange.denominator",
    ],
    type: "Ratio",
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
    dataPath: "root.substance.strength.presentationRatio.numerator",
    parentDataPath: "root.substance.strength.presentation[x]",
    basePath: "root.presentation[x].numerator",
    baseId: "Ratio.numerator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.presentationRatio.numerator.value",
      "root.substance.strength.presentationRatio.numerator.comparator",
      "root.substance.strength.presentationRatio.numerator.unit",
      "root.substance.strength.presentationRatio.numerator.system",
      "root.substance.strength.presentationRatio.numerator.code",
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
    dataPath: "root.substance.strength.presentationRatio.numerator.value",
    parentDataPath: "root.substance.strength.presentationRatio.numerator",
    basePath: "root.presentation[x].numerator.value",
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
    dataPath: "root.substance.strength.presentationRatio.numerator.comparator",
    parentDataPath: "root.substance.strength.presentationRatio.numerator",
    basePath: "root.presentation[x].numerator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
    dataPath: "root.substance.strength.presentationRatio.numerator.unit",
    parentDataPath: "root.substance.strength.presentationRatio.numerator",
    basePath: "root.presentation[x].numerator.unit",
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
    dataPath: "root.substance.strength.presentationRatio.numerator.system",
    parentDataPath: "root.substance.strength.presentationRatio.numerator",
    basePath: "root.presentation[x].numerator.system",
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
    dataPath: "root.substance.strength.presentationRatio.numerator.code",
    parentDataPath: "root.substance.strength.presentationRatio.numerator",
    basePath: "root.presentation[x].numerator.code",
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
    dataPath: "root.substance.strength.presentationRatio.denominator",
    parentDataPath: "root.substance.strength.presentation[x]",
    basePath: "root.presentation[x].denominator",
    baseId: "Ratio.denominator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.presentationRatio.denominator.value",
      "root.substance.strength.presentationRatio.denominator.comparator",
      "root.substance.strength.presentationRatio.denominator.unit",
      "root.substance.strength.presentationRatio.denominator.system",
      "root.substance.strength.presentationRatio.denominator.code",
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
    dataPath: "root.substance.strength.presentationRatio.denominator.value",
    parentDataPath: "root.substance.strength.presentationRatio.denominator",
    basePath: "root.presentation[x].denominator.value",
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
      "root.substance.strength.presentationRatio.denominator.comparator",
    parentDataPath: "root.substance.strength.presentationRatio.denominator",
    basePath: "root.presentation[x].denominator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
    dataPath: "root.substance.strength.presentationRatio.denominator.unit",
    parentDataPath: "root.substance.strength.presentationRatio.denominator",
    basePath: "root.presentation[x].denominator.unit",
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
    dataPath: "root.substance.strength.presentationRatio.denominator.system",
    parentDataPath: "root.substance.strength.presentationRatio.denominator",
    basePath: "root.presentation[x].denominator.system",
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
    dataPath: "root.substance.strength.presentationRatio.denominator.code",
    parentDataPath: "root.substance.strength.presentationRatio.denominator",
    basePath: "root.presentation[x].denominator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RatioRange.lowNumerator",
      path: "RatioRange.lowNumerator",
      short: "Low Numerator limit",
      definition: "The value of the low limit numerator.",
      comment: "If the low element is missing, the low boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "RatioRange.lowNumerator", min: 0, max: "1" },
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
    dataPath: "root.substance.strength.presentationRatioRange.lowNumerator",
    parentDataPath: "root.substance.strength.presentation[x]",
    basePath: "root.presentation[x].lowNumerator",
    baseId: "RatioRange.lowNumerator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.presentationRatioRange.lowNumerator.value",
      "root.substance.strength.presentationRatioRange.lowNumerator.comparator",
      "root.substance.strength.presentationRatioRange.lowNumerator.unit",
      "root.substance.strength.presentationRatioRange.lowNumerator.system",
      "root.substance.strength.presentationRatioRange.lowNumerator.code",
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
      "root.substance.strength.presentationRatioRange.lowNumerator.value",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.lowNumerator",
    basePath: "root.presentation[x].lowNumerator.value",
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
      "root.substance.strength.presentationRatioRange.lowNumerator.comparator",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.lowNumerator",
    basePath: "root.presentation[x].lowNumerator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
      "root.substance.strength.presentationRatioRange.lowNumerator.unit",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.lowNumerator",
    basePath: "root.presentation[x].lowNumerator.unit",
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
      "root.substance.strength.presentationRatioRange.lowNumerator.system",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.lowNumerator",
    basePath: "root.presentation[x].lowNumerator.system",
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
      "root.substance.strength.presentationRatioRange.lowNumerator.code",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.lowNumerator",
    basePath: "root.presentation[x].lowNumerator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RatioRange.highNumerator",
      path: "RatioRange.highNumerator",
      short: "High Numerator limit",
      definition: "The value of the high limit numerator.",
      comment:
        "If the high element is missing, the high boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "RatioRange.highNumerator", min: 0, max: "1" },
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
    dataPath: "root.substance.strength.presentationRatioRange.highNumerator",
    parentDataPath: "root.substance.strength.presentation[x]",
    basePath: "root.presentation[x].highNumerator",
    baseId: "RatioRange.highNumerator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.presentationRatioRange.highNumerator.value",
      "root.substance.strength.presentationRatioRange.highNumerator.comparator",
      "root.substance.strength.presentationRatioRange.highNumerator.unit",
      "root.substance.strength.presentationRatioRange.highNumerator.system",
      "root.substance.strength.presentationRatioRange.highNumerator.code",
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
      "root.substance.strength.presentationRatioRange.highNumerator.value",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.highNumerator",
    basePath: "root.presentation[x].highNumerator.value",
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
      "root.substance.strength.presentationRatioRange.highNumerator.comparator",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.highNumerator",
    basePath: "root.presentation[x].highNumerator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
      "root.substance.strength.presentationRatioRange.highNumerator.unit",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.highNumerator",
    basePath: "root.presentation[x].highNumerator.unit",
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
      "root.substance.strength.presentationRatioRange.highNumerator.system",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.highNumerator",
    basePath: "root.presentation[x].highNumerator.system",
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
      "root.substance.strength.presentationRatioRange.highNumerator.code",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.highNumerator",
    basePath: "root.presentation[x].highNumerator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RatioRange.denominator",
      path: "RatioRange.denominator",
      short: "Denominator value",
      definition: "The value of the denominator.",
      min: 0,
      max: "1",
      base: { path: "RatioRange.denominator", min: 0, max: "1" },
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
    },
    dataPath: "root.substance.strength.presentationRatioRange.denominator",
    parentDataPath: "root.substance.strength.presentation[x]",
    basePath: "root.presentation[x].denominator",
    baseId: "RatioRange.denominator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.presentationRatioRange.denominator.value",
      "root.substance.strength.presentationRatioRange.denominator.comparator",
      "root.substance.strength.presentationRatioRange.denominator.unit",
      "root.substance.strength.presentationRatioRange.denominator.system",
      "root.substance.strength.presentationRatioRange.denominator.code",
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
      "root.substance.strength.presentationRatioRange.denominator.value",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.denominator",
    basePath: "root.presentation[x].denominator.value",
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
      "root.substance.strength.presentationRatioRange.denominator.comparator",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.denominator",
    basePath: "root.presentation[x].denominator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
    dataPath: "root.substance.strength.presentationRatioRange.denominator.unit",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.denominator",
    basePath: "root.presentation[x].denominator.unit",
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
      "root.substance.strength.presentationRatioRange.denominator.system",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.denominator",
    basePath: "root.presentation[x].denominator.system",
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
    dataPath: "root.substance.strength.presentationRatioRange.denominator.code",
    parentDataPath:
      "root.substance.strength.presentationRatioRange.denominator",
    basePath: "root.presentation[x].denominator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.textPresentation",
      path: "Ingredient.substance.strength.textPresentation",
      short:
        "Text of either the whole presentation strength or a part of it (rest being in Strength.presentation as a ratio)",
      definition:
        "A textual represention of either the whole of the presentation strength or a part of it - with the rest being in Strength.presentation as a ratio.",
      min: 0,
      max: "1",
      base: {
        path: "Ingredient.substance.strength.textPresentation",
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
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.substance.strength.textPresentation",
    parentDataPath: "root.substance.strength",
    basePath: "root.textPresentation",
    baseId: "Ingredient.substance.strength.textPresentation",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.concentration[x]",
      path: "Ingredient.substance.strength.concentration[x]",
      short: "The strength per unitary volume (or mass)",
      definition: "The strength per unitary volume (or mass).",
      min: 0,
      max: "1",
      base: {
        path: "Ingredient.substance.strength.concentration[x]",
        min: 0,
        max: "1",
      },
      type: [{ code: "Ratio" }, { code: "RatioRange" }],
      constraint: [
        {
          key: "ele-1",
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
      mapping: [{ identity: "idmp", map: "Strength.Strength (Concentration)" }],
    },
    dataPath: "root.substance.strength.concentration[x]",
    parentDataPath: "root.substance.strength",
    basePath: "root.concentration[x]",
    baseId: "Ingredient.substance.strength.concentration[x]",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.concentrationRatio.numerator",
      "root.substance.strength.concentrationRatio.denominator",
      "root.substance.strength.concentrationRatioRange.lowNumerator",
      "root.substance.strength.concentrationRatioRange.highNumerator",
      "root.substance.strength.concentrationRatioRange.denominator",
    ],
    type: "Ratio",
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
    dataPath: "root.substance.strength.concentrationRatio.numerator",
    parentDataPath: "root.substance.strength.concentration[x]",
    basePath: "root.concentration[x].numerator",
    baseId: "Ratio.numerator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.concentrationRatio.numerator.value",
      "root.substance.strength.concentrationRatio.numerator.comparator",
      "root.substance.strength.concentrationRatio.numerator.unit",
      "root.substance.strength.concentrationRatio.numerator.system",
      "root.substance.strength.concentrationRatio.numerator.code",
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
    dataPath: "root.substance.strength.concentrationRatio.numerator.value",
    parentDataPath: "root.substance.strength.concentrationRatio.numerator",
    basePath: "root.concentration[x].numerator.value",
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
    dataPath: "root.substance.strength.concentrationRatio.numerator.comparator",
    parentDataPath: "root.substance.strength.concentrationRatio.numerator",
    basePath: "root.concentration[x].numerator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
    dataPath: "root.substance.strength.concentrationRatio.numerator.unit",
    parentDataPath: "root.substance.strength.concentrationRatio.numerator",
    basePath: "root.concentration[x].numerator.unit",
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
    dataPath: "root.substance.strength.concentrationRatio.numerator.system",
    parentDataPath: "root.substance.strength.concentrationRatio.numerator",
    basePath: "root.concentration[x].numerator.system",
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
    dataPath: "root.substance.strength.concentrationRatio.numerator.code",
    parentDataPath: "root.substance.strength.concentrationRatio.numerator",
    basePath: "root.concentration[x].numerator.code",
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
    dataPath: "root.substance.strength.concentrationRatio.denominator",
    parentDataPath: "root.substance.strength.concentration[x]",
    basePath: "root.concentration[x].denominator",
    baseId: "Ratio.denominator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.concentrationRatio.denominator.value",
      "root.substance.strength.concentrationRatio.denominator.comparator",
      "root.substance.strength.concentrationRatio.denominator.unit",
      "root.substance.strength.concentrationRatio.denominator.system",
      "root.substance.strength.concentrationRatio.denominator.code",
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
    dataPath: "root.substance.strength.concentrationRatio.denominator.value",
    parentDataPath: "root.substance.strength.concentrationRatio.denominator",
    basePath: "root.concentration[x].denominator.value",
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
      "root.substance.strength.concentrationRatio.denominator.comparator",
    parentDataPath: "root.substance.strength.concentrationRatio.denominator",
    basePath: "root.concentration[x].denominator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
    dataPath: "root.substance.strength.concentrationRatio.denominator.unit",
    parentDataPath: "root.substance.strength.concentrationRatio.denominator",
    basePath: "root.concentration[x].denominator.unit",
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
    dataPath: "root.substance.strength.concentrationRatio.denominator.system",
    parentDataPath: "root.substance.strength.concentrationRatio.denominator",
    basePath: "root.concentration[x].denominator.system",
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
    dataPath: "root.substance.strength.concentrationRatio.denominator.code",
    parentDataPath: "root.substance.strength.concentrationRatio.denominator",
    basePath: "root.concentration[x].denominator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RatioRange.lowNumerator",
      path: "RatioRange.lowNumerator",
      short: "Low Numerator limit",
      definition: "The value of the low limit numerator.",
      comment: "If the low element is missing, the low boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "RatioRange.lowNumerator", min: 0, max: "1" },
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
    dataPath: "root.substance.strength.concentrationRatioRange.lowNumerator",
    parentDataPath: "root.substance.strength.concentration[x]",
    basePath: "root.concentration[x].lowNumerator",
    baseId: "RatioRange.lowNumerator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.concentrationRatioRange.lowNumerator.value",
      "root.substance.strength.concentrationRatioRange.lowNumerator.comparator",
      "root.substance.strength.concentrationRatioRange.lowNumerator.unit",
      "root.substance.strength.concentrationRatioRange.lowNumerator.system",
      "root.substance.strength.concentrationRatioRange.lowNumerator.code",
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
      "root.substance.strength.concentrationRatioRange.lowNumerator.value",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.lowNumerator",
    basePath: "root.concentration[x].lowNumerator.value",
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
      "root.substance.strength.concentrationRatioRange.lowNumerator.comparator",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.lowNumerator",
    basePath: "root.concentration[x].lowNumerator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
      "root.substance.strength.concentrationRatioRange.lowNumerator.unit",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.lowNumerator",
    basePath: "root.concentration[x].lowNumerator.unit",
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
      "root.substance.strength.concentrationRatioRange.lowNumerator.system",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.lowNumerator",
    basePath: "root.concentration[x].lowNumerator.system",
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
      "root.substance.strength.concentrationRatioRange.lowNumerator.code",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.lowNumerator",
    basePath: "root.concentration[x].lowNumerator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RatioRange.highNumerator",
      path: "RatioRange.highNumerator",
      short: "High Numerator limit",
      definition: "The value of the high limit numerator.",
      comment:
        "If the high element is missing, the high boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "RatioRange.highNumerator", min: 0, max: "1" },
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
    dataPath: "root.substance.strength.concentrationRatioRange.highNumerator",
    parentDataPath: "root.substance.strength.concentration[x]",
    basePath: "root.concentration[x].highNumerator",
    baseId: "RatioRange.highNumerator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.concentrationRatioRange.highNumerator.value",
      "root.substance.strength.concentrationRatioRange.highNumerator.comparator",
      "root.substance.strength.concentrationRatioRange.highNumerator.unit",
      "root.substance.strength.concentrationRatioRange.highNumerator.system",
      "root.substance.strength.concentrationRatioRange.highNumerator.code",
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
      "root.substance.strength.concentrationRatioRange.highNumerator.value",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.highNumerator",
    basePath: "root.concentration[x].highNumerator.value",
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
      "root.substance.strength.concentrationRatioRange.highNumerator.comparator",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.highNumerator",
    basePath: "root.concentration[x].highNumerator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
      "root.substance.strength.concentrationRatioRange.highNumerator.unit",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.highNumerator",
    basePath: "root.concentration[x].highNumerator.unit",
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
      "root.substance.strength.concentrationRatioRange.highNumerator.system",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.highNumerator",
    basePath: "root.concentration[x].highNumerator.system",
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
      "root.substance.strength.concentrationRatioRange.highNumerator.code",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.highNumerator",
    basePath: "root.concentration[x].highNumerator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RatioRange.denominator",
      path: "RatioRange.denominator",
      short: "Denominator value",
      definition: "The value of the denominator.",
      min: 0,
      max: "1",
      base: { path: "RatioRange.denominator", min: 0, max: "1" },
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
    },
    dataPath: "root.substance.strength.concentrationRatioRange.denominator",
    parentDataPath: "root.substance.strength.concentration[x]",
    basePath: "root.concentration[x].denominator",
    baseId: "RatioRange.denominator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.concentrationRatioRange.denominator.value",
      "root.substance.strength.concentrationRatioRange.denominator.comparator",
      "root.substance.strength.concentrationRatioRange.denominator.unit",
      "root.substance.strength.concentrationRatioRange.denominator.system",
      "root.substance.strength.concentrationRatioRange.denominator.code",
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
      "root.substance.strength.concentrationRatioRange.denominator.value",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.denominator",
    basePath: "root.concentration[x].denominator.value",
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
      "root.substance.strength.concentrationRatioRange.denominator.comparator",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.denominator",
    basePath: "root.concentration[x].denominator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
      "root.substance.strength.concentrationRatioRange.denominator.unit",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.denominator",
    basePath: "root.concentration[x].denominator.unit",
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
      "root.substance.strength.concentrationRatioRange.denominator.system",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.denominator",
    basePath: "root.concentration[x].denominator.system",
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
      "root.substance.strength.concentrationRatioRange.denominator.code",
    parentDataPath:
      "root.substance.strength.concentrationRatioRange.denominator",
    basePath: "root.concentration[x].denominator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.textConcentration",
      path: "Ingredient.substance.strength.textConcentration",
      short:
        "Text of either the whole concentration strength or a part of it (rest being in Strength.concentration as a ratio)",
      definition:
        "A textual represention of either the whole of the concentration strength or a part of it - with the rest being in Strength.concentration as a ratio.",
      min: 0,
      max: "1",
      base: {
        path: "Ingredient.substance.strength.textConcentration",
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
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.substance.strength.textConcentration",
    parentDataPath: "root.substance.strength",
    basePath: "root.textConcentration",
    baseId: "Ingredient.substance.strength.textConcentration",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.measurementPoint",
      path: "Ingredient.substance.strength.measurementPoint",
      short: "When strength is measured at a particular point or distance",
      definition:
        "For when strength is measured at a particular point or distance. There are products where strength is measured at a particular point. For example, the strength of the ingredient in some inhalers is measured at a particular position relative to the point of aerosolization.",
      min: 0,
      max: "1",
      base: {
        path: "Ingredient.substance.strength.measurementPoint",
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
      mapping: [{ identity: "idmp", map: "Strength.Measurement Point" }],
    },
    dataPath: "root.substance.strength.measurementPoint",
    parentDataPath: "root.substance.strength",
    basePath: "root.measurementPoint",
    baseId: "Ingredient.substance.strength.measurementPoint",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.country",
      path: "Ingredient.substance.strength.country",
      short: "Where the strength range applies",
      definition:
        "The country or countries for which the strength range applies.",
      min: 0,
      max: "*",
      base: { path: "Ingredient.substance.strength.country", min: 0, max: "*" },
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
            valueString: "Country",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "example",
        description: "Jurisdiction codes",
        valueSet: "http://hl7.org/fhir/ValueSet/country",
      },
      mapping: [{ identity: "idmp", map: "Strength.Country" }],
    },
    dataPath: "root.substance.strength.country[0]",
    parentDataPath: "root.substance.strength",
    basePath: "root.country",
    baseId: "Ingredient.substance.strength.country",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.country[0].coding[0]",
      "root.substance.strength.country[0].text",
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
    dataPath: "root.substance.strength.country[0].coding[0]",
    parentDataPath: "root.substance.strength.country[0]",
    basePath: "root.country.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.country[0].coding[0].system",
      "root.substance.strength.country[0].coding[0].version",
      "root.substance.strength.country[0].coding[0].code",
      "root.substance.strength.country[0].coding[0].display",
      "root.substance.strength.country[0].coding[0].userSelected",
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
    dataPath: "root.substance.strength.country[0].coding[0].system",
    parentDataPath: "root.substance.strength.country[0].coding[0]",
    basePath: "root.country.coding.system",
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
    dataPath: "root.substance.strength.country[0].coding[0].version",
    parentDataPath: "root.substance.strength.country[0].coding[0]",
    basePath: "root.country.coding.version",
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
    dataPath: "root.substance.strength.country[0].coding[0].code",
    parentDataPath: "root.substance.strength.country[0].coding[0]",
    basePath: "root.country.coding.code",
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
    dataPath: "root.substance.strength.country[0].coding[0].display",
    parentDataPath: "root.substance.strength.country[0].coding[0]",
    basePath: "root.country.coding.display",
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
    dataPath: "root.substance.strength.country[0].coding[0].userSelected",
    parentDataPath: "root.substance.strength.country[0].coding[0]",
    basePath: "root.country.coding.userSelected",
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
    dataPath: "root.substance.strength.country[0].text",
    parentDataPath: "root.substance.strength.country[0]",
    basePath: "root.country.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.referenceStrength",
      path: "Ingredient.substance.strength.referenceStrength",
      short: "Strength expressed in terms of a reference substance",
      definition:
        "Strength expressed in terms of a reference substance. For when the ingredient strength is additionally expressed as equivalent to the strength of some other closely related substance (e.g. salt vs. base). Reference strength represents the strength (quantitative composition) of the active moiety of the active substance. There are situations when the active substance and active moiety are different, therefore both a strength and a reference strength are needed.",
      min: 0,
      max: "*",
      base: {
        path: "Ingredient.substance.strength.referenceStrength",
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
      mapping: [{ identity: "idmp", map: "Strength.Reference Strength" }],
    },
    dataPath: "root.substance.strength.referenceStrength[0]",
    parentDataPath: "root.substance.strength",
    basePath: "root.referenceStrength",
    baseId: "Ingredient.substance.strength.referenceStrength",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength[0].modifierExtension[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "BackboneElement.modifierExtension",
      path: "BackboneElement.modifierExtension",
      short: "Extensions that cannot be ignored even if unrecognized",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content", "modifiers"],
      min: 0,
      max: "*",
      base: { path: "BackboneElement.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
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
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath:
      "root.substance.strength.referenceStrength[0].modifierExtension[0]",
    parentDataPath: "root.substance.strength.referenceStrength[0]",
    basePath: "root.referenceStrength.modifierExtension",
    baseId: "BackboneElement.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.referenceStrength.modifierExtension",
      path: "Ingredient.substance.strength.referenceStrength.modifierExtension",
      short: "Extensions that cannot be ignored even if unrecognized",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content", "modifiers"],
      min: 0,
      max: "*",
      base: { path: "BackboneElement.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
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
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.substance.strength.referenceStrength.modifierExtension[0]",
    parentDataPath: "root.substance.strength.referenceStrength",
    basePath: "root.modifierExtension",
    baseId: "Ingredient.substance.strength.referenceStrength.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.referenceStrength.substance",
      path: "Ingredient.substance.strength.referenceStrength.substance",
      short: "Relevant reference substance",
      definition: "Relevant reference substance.",
      min: 0,
      max: "1",
      base: {
        path: "Ingredient.substance.strength.referenceStrength.substance",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "CodeableReference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/SubstanceDefinition",
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
            valueString: "SNOMEDCTSubstanceCodes",
          },
        ],
        strength: "example",
        description:
          "This value set includes all substance codes from SNOMED CT - provided as an exemplar value set.",
        valueSet: "http://hl7.org/fhir/ValueSet/substance-codes",
      },
      mapping: [
        { identity: "idmp", map: "Reference Strength.Reference Substance" },
      ],
    },
    dataPath: "root.substance.strength.referenceStrength.substance",
    parentDataPath: "root.substance.strength.referenceStrength",
    basePath: "root.substance",
    baseId: "Ingredient.substance.strength.referenceStrength.substance",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength.substance.concept",
      "root.substance.strength.referenceStrength.substance.reference",
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
    dataPath: "root.substance.strength.referenceStrength.substance.concept",
    parentDataPath: "root.substance.strength.referenceStrength.substance",
    basePath: "root.substance.concept",
    baseId: "CodeableReference.concept",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength.substance.concept.coding[0]",
      "root.substance.strength.referenceStrength.substance.concept.text",
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
      "root.substance.strength.referenceStrength.substance.concept.coding[0]",
    parentDataPath:
      "root.substance.strength.referenceStrength.substance.concept",
    basePath: "root.substance.concept.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength.substance.concept.coding[0].system",
      "root.substance.strength.referenceStrength.substance.concept.coding[0].version",
      "root.substance.strength.referenceStrength.substance.concept.coding[0].code",
      "root.substance.strength.referenceStrength.substance.concept.coding[0].display",
      "root.substance.strength.referenceStrength.substance.concept.coding[0].userSelected",
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
      "root.substance.strength.referenceStrength.substance.concept.coding[0].system",
    parentDataPath:
      "root.substance.strength.referenceStrength.substance.concept.coding[0]",
    basePath: "root.substance.concept.coding.system",
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
      "root.substance.strength.referenceStrength.substance.concept.coding[0].version",
    parentDataPath:
      "root.substance.strength.referenceStrength.substance.concept.coding[0]",
    basePath: "root.substance.concept.coding.version",
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
      "root.substance.strength.referenceStrength.substance.concept.coding[0].code",
    parentDataPath:
      "root.substance.strength.referenceStrength.substance.concept.coding[0]",
    basePath: "root.substance.concept.coding.code",
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
      "root.substance.strength.referenceStrength.substance.concept.coding[0].display",
    parentDataPath:
      "root.substance.strength.referenceStrength.substance.concept.coding[0]",
    basePath: "root.substance.concept.coding.display",
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
      "root.substance.strength.referenceStrength.substance.concept.coding[0].userSelected",
    parentDataPath:
      "root.substance.strength.referenceStrength.substance.concept.coding[0]",
    basePath: "root.substance.concept.coding.userSelected",
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
      "root.substance.strength.referenceStrength.substance.concept.text",
    parentDataPath:
      "root.substance.strength.referenceStrength.substance.concept",
    basePath: "root.substance.concept.text",
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
    dataPath: "root.substance.strength.referenceStrength.substance.reference",
    parentDataPath: "root.substance.strength.referenceStrength.substance",
    basePath: "root.substance.reference",
    baseId: "CodeableReference.reference",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength.substance.reference.reference",
      "root.substance.strength.referenceStrength.substance.reference.type",
      "root.substance.strength.referenceStrength.substance.reference.display",
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
      "root.substance.strength.referenceStrength.substance.reference.reference",
    parentDataPath:
      "root.substance.strength.referenceStrength.substance.reference",
    basePath: "root.substance.reference.reference",
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
    dataPath:
      "root.substance.strength.referenceStrength.substance.reference.type",
    parentDataPath:
      "root.substance.strength.referenceStrength.substance.reference",
    basePath: "root.substance.reference.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
    dataPath:
      "root.substance.strength.referenceStrength.substance.reference.display",
    parentDataPath:
      "root.substance.strength.referenceStrength.substance.reference",
    basePath: "root.substance.reference.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.referenceStrength.strength[x]",
      path: "Ingredient.substance.strength.referenceStrength.strength[x]",
      short: "Strength expressed in terms of a reference substance",
      definition: "Strength expressed in terms of a reference substance.",
      min: 1,
      max: "1",
      base: {
        path: "Ingredient.substance.strength.referenceStrength.strength[x]",
        min: 1,
        max: "1",
      },
      type: [{ code: "Ratio" }, { code: "RatioRange" }],
      constraint: [
        {
          key: "ele-1",
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
        { identity: "idmp", map: "Reference Strength.Reference Strength" },
      ],
    },
    dataPath: "root.substance.strength.referenceStrength.strength[x]",
    parentDataPath: "root.substance.strength.referenceStrength",
    basePath: "root.strength[x]",
    baseId: "Ingredient.substance.strength.referenceStrength.strength[x]",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength.strengthRatio.numerator",
      "root.substance.strength.referenceStrength.strengthRatio.denominator",
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator",
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator",
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator",
    ],
    type: "Ratio",
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
      "root.substance.strength.referenceStrength.strengthRatio.numerator",
    parentDataPath: "root.substance.strength.referenceStrength.strength[x]",
    basePath: "root.strength[x].numerator",
    baseId: "Ratio.numerator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength.strengthRatio.numerator.value",
      "root.substance.strength.referenceStrength.strengthRatio.numerator.comparator",
      "root.substance.strength.referenceStrength.strengthRatio.numerator.unit",
      "root.substance.strength.referenceStrength.strengthRatio.numerator.system",
      "root.substance.strength.referenceStrength.strengthRatio.numerator.code",
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
      "root.substance.strength.referenceStrength.strengthRatio.numerator.value",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatio.numerator",
    basePath: "root.strength[x].numerator.value",
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
      "root.substance.strength.referenceStrength.strengthRatio.numerator.comparator",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatio.numerator",
    basePath: "root.strength[x].numerator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
      "root.substance.strength.referenceStrength.strengthRatio.numerator.unit",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatio.numerator",
    basePath: "root.strength[x].numerator.unit",
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
      "root.substance.strength.referenceStrength.strengthRatio.numerator.system",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatio.numerator",
    basePath: "root.strength[x].numerator.system",
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
      "root.substance.strength.referenceStrength.strengthRatio.numerator.code",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatio.numerator",
    basePath: "root.strength[x].numerator.code",
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
      "root.substance.strength.referenceStrength.strengthRatio.denominator",
    parentDataPath: "root.substance.strength.referenceStrength.strength[x]",
    basePath: "root.strength[x].denominator",
    baseId: "Ratio.denominator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength.strengthRatio.denominator.value",
      "root.substance.strength.referenceStrength.strengthRatio.denominator.comparator",
      "root.substance.strength.referenceStrength.strengthRatio.denominator.unit",
      "root.substance.strength.referenceStrength.strengthRatio.denominator.system",
      "root.substance.strength.referenceStrength.strengthRatio.denominator.code",
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
      "root.substance.strength.referenceStrength.strengthRatio.denominator.value",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatio.denominator",
    basePath: "root.strength[x].denominator.value",
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
      "root.substance.strength.referenceStrength.strengthRatio.denominator.comparator",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatio.denominator",
    basePath: "root.strength[x].denominator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
      "root.substance.strength.referenceStrength.strengthRatio.denominator.unit",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatio.denominator",
    basePath: "root.strength[x].denominator.unit",
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
      "root.substance.strength.referenceStrength.strengthRatio.denominator.system",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatio.denominator",
    basePath: "root.strength[x].denominator.system",
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
      "root.substance.strength.referenceStrength.strengthRatio.denominator.code",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatio.denominator",
    basePath: "root.strength[x].denominator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RatioRange.lowNumerator",
      path: "RatioRange.lowNumerator",
      short: "Low Numerator limit",
      definition: "The value of the low limit numerator.",
      comment: "If the low element is missing, the low boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "RatioRange.lowNumerator", min: 0, max: "1" },
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
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator",
    parentDataPath: "root.substance.strength.referenceStrength.strength[x]",
    basePath: "root.strength[x].lowNumerator",
    baseId: "RatioRange.lowNumerator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator.value",
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator.comparator",
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator.unit",
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator.system",
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator.code",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator.value",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator",
    basePath: "root.strength[x].lowNumerator.value",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator.comparator",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator",
    basePath: "root.strength[x].lowNumerator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator.unit",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator",
    basePath: "root.strength[x].lowNumerator.unit",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator.system",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator",
    basePath: "root.strength[x].lowNumerator.system",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator.code",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.lowNumerator",
    basePath: "root.strength[x].lowNumerator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RatioRange.highNumerator",
      path: "RatioRange.highNumerator",
      short: "High Numerator limit",
      definition: "The value of the high limit numerator.",
      comment:
        "If the high element is missing, the high boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "RatioRange.highNumerator", min: 0, max: "1" },
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
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator",
    parentDataPath: "root.substance.strength.referenceStrength.strength[x]",
    basePath: "root.strength[x].highNumerator",
    baseId: "RatioRange.highNumerator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator.value",
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator.comparator",
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator.unit",
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator.system",
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator.code",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator.value",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator",
    basePath: "root.strength[x].highNumerator.value",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator.comparator",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator",
    basePath: "root.strength[x].highNumerator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator.unit",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator",
    basePath: "root.strength[x].highNumerator.unit",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator.system",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator",
    basePath: "root.strength[x].highNumerator.system",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator.code",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.highNumerator",
    basePath: "root.strength[x].highNumerator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "RatioRange.denominator",
      path: "RatioRange.denominator",
      short: "Denominator value",
      definition: "The value of the denominator.",
      min: 0,
      max: "1",
      base: { path: "RatioRange.denominator", min: 0, max: "1" },
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
    },
    dataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator",
    parentDataPath: "root.substance.strength.referenceStrength.strength[x]",
    basePath: "root.strength[x].denominator",
    baseId: "RatioRange.denominator",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator.value",
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator.comparator",
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator.unit",
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator.system",
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator.code",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator.value",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator",
    basePath: "root.strength[x].denominator.value",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator.comparator",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator",
    basePath: "root.strength[x].denominator.comparator",
    baseId: "Quantity.comparator",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator.unit",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator",
    basePath: "root.strength[x].denominator.unit",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator.system",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator",
    basePath: "root.strength[x].denominator.system",
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
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator.code",
    parentDataPath:
      "root.substance.strength.referenceStrength.strengthRatioRange.denominator",
    basePath: "root.strength[x].denominator.code",
    baseId: "Quantity.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.referenceStrength.measurementPoint",
      path: "Ingredient.substance.strength.referenceStrength.measurementPoint",
      short: "When strength is measured at a particular point or distance",
      definition:
        "For when strength is measured at a particular point or distance.",
      min: 0,
      max: "1",
      base: {
        path: "Ingredient.substance.strength.referenceStrength.measurementPoint",
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
      mapping: [
        { identity: "idmp", map: "Reference Strength.Measurement Point" },
      ],
    },
    dataPath: "root.substance.strength.referenceStrength.measurementPoint",
    parentDataPath: "root.substance.strength.referenceStrength",
    basePath: "root.measurementPoint",
    baseId: "Ingredient.substance.strength.referenceStrength.measurementPoint",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Ingredient.substance.strength.referenceStrength.country",
      path: "Ingredient.substance.strength.referenceStrength.country",
      short: "Where the strength range applies",
      definition:
        "The country or countries for which the strength range applies.",
      min: 0,
      max: "*",
      base: {
        path: "Ingredient.substance.strength.referenceStrength.country",
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
            valueString: "Country",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "example",
        description: "Jurisdiction codes",
        valueSet: "http://hl7.org/fhir/ValueSet/country",
      },
      mapping: [{ identity: "idmp", map: "Reference Strength.Country" }],
    },
    dataPath: "root.substance.strength.referenceStrength.country[0]",
    parentDataPath: "root.substance.strength.referenceStrength",
    basePath: "root.country",
    baseId: "Ingredient.substance.strength.referenceStrength.country",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength.country[0].coding[0]",
      "root.substance.strength.referenceStrength.country[0].text",
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
    dataPath: "root.substance.strength.referenceStrength.country[0].coding[0]",
    parentDataPath: "root.substance.strength.referenceStrength.country[0]",
    basePath: "root.country.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.substance.strength.referenceStrength.country[0].coding[0].system",
      "root.substance.strength.referenceStrength.country[0].coding[0].version",
      "root.substance.strength.referenceStrength.country[0].coding[0].code",
      "root.substance.strength.referenceStrength.country[0].coding[0].display",
      "root.substance.strength.referenceStrength.country[0].coding[0].userSelected",
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
      "root.substance.strength.referenceStrength.country[0].coding[0].system",
    parentDataPath:
      "root.substance.strength.referenceStrength.country[0].coding[0]",
    basePath: "root.country.coding.system",
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
      "root.substance.strength.referenceStrength.country[0].coding[0].version",
    parentDataPath:
      "root.substance.strength.referenceStrength.country[0].coding[0]",
    basePath: "root.country.coding.version",
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
      "root.substance.strength.referenceStrength.country[0].coding[0].code",
    parentDataPath:
      "root.substance.strength.referenceStrength.country[0].coding[0]",
    basePath: "root.country.coding.code",
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
      "root.substance.strength.referenceStrength.country[0].coding[0].display",
    parentDataPath:
      "root.substance.strength.referenceStrength.country[0].coding[0]",
    basePath: "root.country.coding.display",
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
      "root.substance.strength.referenceStrength.country[0].coding[0].userSelected",
    parentDataPath:
      "root.substance.strength.referenceStrength.country[0].coding[0]",
    basePath: "root.country.coding.userSelected",
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
    dataPath: "root.substance.strength.referenceStrength.country[0].text",
    parentDataPath: "root.substance.strength.referenceStrength.country[0]",
    basePath: "root.country.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
];
export default data;
