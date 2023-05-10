const ParameterDefinition = {
  resourceType: "StructureDefinition",
  id: "ParameterDefinition",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
  },
  text: {
    status: "generated",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
  ],
  url: "http://hl7.org/fhir/StructureDefinition/ParameterDefinition",
  version: "4.3.0",
  name: "ParameterDefinition",
  status: "draft",
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
    "Base StructureDefinition for ParameterDefinition Type: The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.",
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
  type: "ParameterDefinition",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/Element",
  derivation: "specialization",
  snapshot: {
    element: [
      {
        id: "ParameterDefinition",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "trial-use",
          },
        ],
        path: "ParameterDefinition",
        short: "Definition of a parameter to a module",
        definition:
          "The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.",
        min: 0,
        max: "*",
        base: {
          path: "ParameterDefinition",
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
        ],
      },
      {
        id: "ParameterDefinition.id",
        path: "ParameterDefinition.id",
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
        id: "ParameterDefinition.extension",
        path: "ParameterDefinition.extension",
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
        id: "ParameterDefinition.name",
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
            valueBoolean: true,
          },
        ],
        path: "ParameterDefinition.name",
        short: "Name used to access the parameter value",
        definition:
          "The name of the parameter used to allow access to the value of the parameter in evaluation contexts.",
        min: 0,
        max: "1",
        base: {
          path: "ParameterDefinition.name",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "code",
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
        id: "ParameterDefinition.use",
        path: "ParameterDefinition.use",
        short: "in | out",
        definition: "Whether the parameter is input or output for the module.",
        min: 1,
        max: "1",
        base: {
          path: "ParameterDefinition.use",
          min: 1,
          max: "1",
        },
        type: [
          {
            code: "code",
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
              valueString: "Whether the parameter is input or output.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "ParameterUse",
            },
          ],
          strength: "required",
          valueSet:
            "http://hl7.org/fhir/ValueSet/operation-parameter-use|4.3.0",
        },
      },
      {
        id: "ParameterDefinition.min",
        path: "ParameterDefinition.min",
        short: "Minimum cardinality",
        definition:
          "The minimum number of times this parameter SHALL appear in the request or response.",
        min: 0,
        max: "1",
        base: {
          path: "ParameterDefinition.min",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "integer",
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
        id: "ParameterDefinition.max",
        path: "ParameterDefinition.max",
        short: "Maximum cardinality (a number of *)",
        definition:
          "The maximum number of times this element is permitted to appear in the request or response.",
        min: 0,
        max: "1",
        base: {
          path: "ParameterDefinition.max",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "string",
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
        id: "ParameterDefinition.documentation",
        path: "ParameterDefinition.documentation",
        short: "A brief description of the parameter",
        definition:
          "A brief discussion of what the parameter is for and how it is used by the module.",
        min: 0,
        max: "1",
        base: {
          path: "ParameterDefinition.documentation",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "string",
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
        id: "ParameterDefinition.type",
        path: "ParameterDefinition.type",
        short: "What type of value",
        definition: "The type of the parameter.",
        min: 1,
        max: "1",
        base: {
          path: "ParameterDefinition.type",
          min: 1,
          max: "1",
        },
        type: [
          {
            code: "code",
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
                "A list of all the concrete types defined in this version of the FHIR specification - Abstract Types, Data Types and Resource Types.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "FHIRAllTypes",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
              valueBoolean: true,
            },
          ],
          strength: "required",
          valueSet: "http://hl7.org/fhir/ValueSet/all-types|4.3.0",
        },
      },
      {
        id: "ParameterDefinition.profile",
        path: "ParameterDefinition.profile",
        short: "What profile the value is expected to be",
        definition:
          "If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.",
        min: 0,
        max: "1",
        base: {
          path: "ParameterDefinition.profile",
          min: 0,
          max: "1",
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
    ],
  },
  differential: {
    element: [
      {
        id: "ParameterDefinition",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "trial-use",
          },
        ],
        path: "ParameterDefinition",
        short: "Definition of a parameter to a module",
        definition:
          "The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.",
        min: 0,
        max: "*",
      },
      {
        id: "ParameterDefinition.name",
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
            valueBoolean: true,
          },
        ],
        path: "ParameterDefinition.name",
        short: "Name used to access the parameter value",
        definition:
          "The name of the parameter used to allow access to the value of the parameter in evaluation contexts.",
        min: 0,
        max: "1",
        type: [
          {
            code: "code",
          },
        ],
        isSummary: true,
      },
      {
        id: "ParameterDefinition.use",
        path: "ParameterDefinition.use",
        short: "in | out",
        definition: "Whether the parameter is input or output for the module.",
        min: 1,
        max: "1",
        type: [
          {
            code: "code",
          },
        ],
        isSummary: true,
        binding: {
          extension: [
            {
              url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
              valueString: "Whether the parameter is input or output.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "ParameterUse",
            },
          ],
          strength: "required",
          valueSet:
            "http://hl7.org/fhir/ValueSet/operation-parameter-use|4.3.0",
        },
      },
      {
        id: "ParameterDefinition.min",
        path: "ParameterDefinition.min",
        short: "Minimum cardinality",
        definition:
          "The minimum number of times this parameter SHALL appear in the request or response.",
        min: 0,
        max: "1",
        type: [
          {
            code: "integer",
          },
        ],
        isSummary: true,
      },
      {
        id: "ParameterDefinition.max",
        path: "ParameterDefinition.max",
        short: "Maximum cardinality (a number of *)",
        definition:
          "The maximum number of times this element is permitted to appear in the request or response.",
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
        isSummary: true,
      },
      {
        id: "ParameterDefinition.documentation",
        path: "ParameterDefinition.documentation",
        short: "A brief description of the parameter",
        definition:
          "A brief discussion of what the parameter is for and how it is used by the module.",
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
        isSummary: true,
      },
      {
        id: "ParameterDefinition.type",
        path: "ParameterDefinition.type",
        short: "What type of value",
        definition: "The type of the parameter.",
        min: 1,
        max: "1",
        type: [
          {
            code: "code",
          },
        ],
        isSummary: true,
        binding: {
          extension: [
            {
              url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
              valueString:
                "A list of all the concrete types defined in this version of the FHIR specification - Abstract Types, Data Types and Resource Types.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "FHIRAllTypes",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
              valueBoolean: true,
            },
          ],
          strength: "required",
          valueSet: "http://hl7.org/fhir/ValueSet/all-types|4.3.0",
        },
      },
      {
        id: "ParameterDefinition.profile",
        path: "ParameterDefinition.profile",
        short: "What profile the value is expected to be",
        definition:
          "If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.",
        min: 0,
        max: "1",
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
    ],
  },
};

export default ParameterDefinition;
