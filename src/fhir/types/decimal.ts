const decimal = {
  resourceType: "StructureDefinition",
  id: "decimal",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">to do</div>',
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
  url: "http://hl7.org/fhir/StructureDefinition/decimal",
  version: "4.3.0",
  name: "decimal",
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
    "Base StructureDefinition for decimal Type: A rational number with implicit precision",
  fhirVersion: "4.3.0",
  kind: "primitive-type",
  abstract: false,
  type: "decimal",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/Element",
  derivation: "specialization",
  snapshot: {
    element: [
      {
        id: "decimal",
        path: "decimal",
        short: "Primitive Type decimal",
        definition: "A rational number with implicit precision",
        comment:
          "Do not use an IEEE type floating point type, instead use something that works like a true decimal, with inbuilt precision (e.g. Java BigInteger)",
        min: 0,
        max: "*",
        base: {
          path: "decimal",
          min: 0,
          max: "*",
        },
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
      },
      {
        id: "decimal.id",
        path: "decimal.id",
        representation: ["xmlAttr"],
        short: "xml:id (or equivalent in JSON)",
        definition:
          "unique id for the element within a resource (for internal references)",
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
                valueUrl: "string",
              },
            ],
            code: "http://hl7.org/fhirpath/System.String",
          },
        ],
        isModifier: false,
        isSummary: false,
      },
      {
        id: "decimal.extension",
        path: "decimal.extension",
        short: "Additional content defined by implementations",
        definition:
          "May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
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
              "exists(f:extension)!=exists(f:*[starts-with(local-name(.), 'value')])",
            source: "http://hl7.org/fhir/StructureDefinition/Extension",
          },
        ],
        isModifier: false,
        isSummary: false,
      },
      {
        id: "decimal.value",
        path: "decimal.value",
        representation: ["xmlAttr"],
        short: "Primitive value for decimal",
        definition: "The actual value",
        min: 0,
        max: "1",
        base: {
          path: "decimal.value",
          min: 0,
          max: "1",
        },
        type: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
                valueUrl: "decimal",
              },
              {
                url: "http://hl7.org/fhir/StructureDefinition/regex",
                valueString: "-?(0|[1-9][0-9]*)(.[0-9]+)?([eE][+-]?[0-9]+)?",
              },
            ],
            code: "http://hl7.org/fhirpath/System.Decimal",
          },
        ],
        isModifier: false,
        isSummary: false,
      },
    ],
  },
  differential: {
    element: [
      {
        id: "decimal",
        path: "decimal",
        short: "Primitive Type decimal",
        definition: "A rational number with implicit precision",
        comment:
          "Do not use an IEEE type floating point type, instead use something that works like a true decimal, with inbuilt precision (e.g. Java BigInteger)",
        min: 0,
        max: "*",
      },
      {
        id: "decimal.value",
        path: "decimal.value",
        representation: ["xmlAttr"],
        short: "Primitive value for decimal",
        definition: "Primitive value for decimal",
        min: 0,
        max: "1",
        type: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
                valueUrl: "decimal",
              },
              {
                url: "http://hl7.org/fhir/StructureDefinition/regex",
                valueString: "-?(0|[1-9][0-9]*)(.[0-9]+)?([eE][+-]?[0-9]+)?",
              },
            ],
            code: "http://hl7.org/fhirpath/System.Decimal",
          },
        ],
      },
    ],
  },
};

export default decimal;
