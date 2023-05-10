const Meta = {
  resourceType: "StructureDefinition",
  id: "Meta",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
  },
  text: {
    status: "generated",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
  ],
  url: "http://hl7.org/fhir/StructureDefinition/Meta",
  version: "4.3.0",
  name: "Meta",
  status: "active",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  publisher: "HL7 FHIR Standard",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "Base StructureDefinition for Meta Type: The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
  fhirVersion: "4.3.0",
  mapping: [
    {
      identity: "rim",
      uri: "http://hl7.org/v3",
      name: "RIM Mapping",
    },
  ],
  kind: "complex-type",
  abstract: false,
  type: "Meta",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/Element",
  derivation: "specialization",
  snapshot: {
    element: [
      {
        id: "Meta",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "normative",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
            valueCode: "4.0.0",
          },
        ],
        path: "Meta",
        short: "Metadata about a resource",
        definition:
          "The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
        min: 0,
        max: "*",
        base: {
          path: "Meta",
          min: 0,
          max: "*",
        },
        condition: ["ele-1"],
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
        mapping: [
          {
            identity: "rim",
            map: "n/a",
          },
          {
            identity: "rim",
            map: "N/A",
          },
        ],
      },
      {
        id: "Meta.id",
        path: "Meta.id",
        representation: ["xmlAttr"],
        short: "Unique id for inter-element referencing",
        definition:
          "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
        min: 0,
        max: "1",
        base: {
          path: "Element.id",
          min: 0,
          max: "1",
        },
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
        isModifier: false,
        isSummary: false,
        mapping: [
          {
            identity: "rim",
            map: "n/a",
          },
        ],
      },
      {
        id: "Meta.extension",
        path: "Meta.extension",
        slicing: {
          discriminator: [
            {
              type: "value",
              path: "url",
            },
          ],
          description: "Extensions are always sliced by (at least) url",
          rules: "open",
        },
        short: "Additional content defined by implementations",
        definition:
          "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
        comment:
          "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        alias: ["extensions", "user content"],
        min: 0,
        max: "*",
        base: {
          path: "Element.extension",
          min: 0,
          max: "*",
        },
        type: [
          {
            code: "Extension",
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
        isModifier: false,
        isSummary: false,
        mapping: [
          {
            identity: "rim",
            map: "n/a",
          },
        ],
      },
      {
        id: "Meta.versionId",
        path: "Meta.versionId",
        short: "Version specific identifier",
        definition:
          "The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted.",
        comment:
          "The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.",
        min: 0,
        max: "1",
        base: {
          path: "Meta.versionId",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "id",
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
      {
        id: "Meta.lastUpdated",
        path: "Meta.lastUpdated",
        short: "When the resource version last changed",
        definition:
          "When the resource last changed - e.g. when the version changed.",
        comment:
          "This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant. This is equivalent to the HTTP Last-Modified and SHOULD have the same value on a [read](http.html#read) interaction.",
        min: 0,
        max: "1",
        base: {
          path: "Meta.lastUpdated",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "instant",
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
      {
        id: "Meta.source",
        path: "Meta.source",
        short: "Identifies where the resource comes from",
        definition:
          "A uri that identifies the source system of the resource. This provides a minimal amount of [Provenance](provenance.html#) information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc.",
        comment:
          "In the provenance resource, this corresponds to Provenance.entity.what[x]. The exact use of the source (and the implied Provenance.entity.role) is left to implementer discretion. Only one nominated source is allowed; for additional provenance details, a full Provenance resource should be used.  This element can be used to indicate where the current master source of a resource that has a canonical URL if the resource is no longer hosted at the canonical URL.",
        min: 0,
        max: "1",
        base: {
          path: "Meta.source",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "uri",
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
      {
        id: "Meta.profile",
        path: "Meta.profile",
        short: "Profiles this resource claims to conform to",
        definition:
          "A list of profiles (references to [StructureDefinition](structuredefinition.html#) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url](structuredefinition-definitions.html#StructureDefinition.url).",
        comment:
          "It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.",
        min: 0,
        max: "*",
        base: {
          path: "Meta.profile",
          min: 0,
          max: "*",
        },
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
      {
        id: "Meta.security",
        path: "Meta.security",
        short: "Security Labels applied to this resource",
        definition:
          "Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.",
        comment:
          "The security labels can be updated without changing the stated version of the resource. The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.",
        min: 0,
        max: "*",
        base: {
          path: "Meta.security",
          min: 0,
          max: "*",
        },
        type: [
          {
            code: "Coding",
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
      {
        id: "Meta.tag",
        path: "Meta.tag",
        short: "Tags applied to this resource",
        definition:
          "Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.",
        comment:
          "The tags can be updated without changing the stated version of the resource. The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.",
        min: 0,
        max: "*",
        base: {
          path: "Meta.tag",
          min: 0,
          max: "*",
        },
        type: [
          {
            code: "Coding",
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
    ],
  },
  differential: {
    element: [
      {
        id: "Meta",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "normative",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
            valueCode: "4.0.0",
          },
        ],
        path: "Meta",
        short: "Metadata about a resource",
        definition:
          "The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
        min: 0,
        max: "*",
        mapping: [
          {
            identity: "rim",
            map: "N/A",
          },
        ],
      },
      {
        id: "Meta.versionId",
        path: "Meta.versionId",
        short: "Version specific identifier",
        definition:
          "The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted.",
        comment:
          "The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.",
        min: 0,
        max: "1",
        type: [
          {
            code: "id",
          },
        ],
        isSummary: true,
      },
      {
        id: "Meta.lastUpdated",
        path: "Meta.lastUpdated",
        short: "When the resource version last changed",
        definition:
          "When the resource last changed - e.g. when the version changed.",
        comment:
          "This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant. This is equivalent to the HTTP Last-Modified and SHOULD have the same value on a [read](http.html#read) interaction.",
        min: 0,
        max: "1",
        type: [
          {
            code: "instant",
          },
        ],
        isSummary: true,
      },
      {
        id: "Meta.source",
        path: "Meta.source",
        short: "Identifies where the resource comes from",
        definition:
          "A uri that identifies the source system of the resource. This provides a minimal amount of [Provenance](provenance.html#) information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc.",
        comment:
          "In the provenance resource, this corresponds to Provenance.entity.what[x]. The exact use of the source (and the implied Provenance.entity.role) is left to implementer discretion. Only one nominated source is allowed; for additional provenance details, a full Provenance resource should be used.          This element can be used to indicate where the current master source of a resource that has a canonical URL if the resource is no longer hosted at the canonical URL.",
        min: 0,
        max: "1",
        type: [
          {
            code: "uri",
          },
        ],
        isSummary: true,
      },
      {
        id: "Meta.profile",
        path: "Meta.profile",
        short: "Profiles this resource claims to conform to",
        definition:
          "A list of profiles (references to [StructureDefinition](structuredefinition.html#) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url](structuredefinition-definitions.html#StructureDefinition.url).",
        comment:
          "It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.",
        min: 0,
        max: "*",
        type: [
          {
            code: "canonical",
            targetProfile: [
              "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
            ],
          },
        ],
        isSummary: true,
      },
      {
        id: "Meta.security",
        path: "Meta.security",
        short: "Security Labels applied to this resource",
        definition:
          "Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.",
        comment:
          "The security labels can be updated without changing the stated version of the resource. The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.",
        min: 0,
        max: "*",
        type: [
          {
            code: "Coding",
          },
        ],
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
      {
        id: "Meta.tag",
        path: "Meta.tag",
        short: "Tags applied to this resource",
        definition:
          "Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.",
        comment:
          "The tags can be updated without changing the stated version of the resource. The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.",
        min: 0,
        max: "*",
        type: [
          {
            code: "Coding",
          },
        ],
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
    ],
  },
};

export default Meta;
