const ContactDetail = {
  resourceType: "StructureDefinition",
  id: "ContactDetail",
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
  url: "http://hl7.org/fhir/StructureDefinition/ContactDetail",
  version: "4.3.0",
  name: "ContactDetail",
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
    "Base StructureDefinition for ContactDetail Type: Specifies contact information for a person or organization.",
  purpose:
    "Need to track contact information in the same way across multiple resources.",
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
  type: "ContactDetail",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/Element",
  derivation: "specialization",
  snapshot: {
    element: [
      {
        id: "ContactDetail",
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
        path: "ContactDetail",
        short: "Contact information",
        definition:
          "Specifies contact information for a person or organization.",
        min: 0,
        max: "*",
        base: {
          path: "ContactDetail",
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
        id: "ContactDetail.id",
        path: "ContactDetail.id",
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
        id: "ContactDetail.extension",
        path: "ContactDetail.extension",
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
        id: "ContactDetail.name",
        path: "ContactDetail.name",
        short: "Name of an individual to contact",
        definition: "The name of an individual to contact.",
        comment:
          "If there is no named individual, the telecom information is for the organization as a whole.",
        min: 0,
        max: "1",
        base: {
          path: "ContactDetail.name",
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
        id: "ContactDetail.telecom",
        path: "ContactDetail.telecom",
        short: "Contact details for individual or organization",
        definition:
          "The contact details for the individual (if a name was provided) or the organization.",
        min: 0,
        max: "*",
        base: {
          path: "ContactDetail.telecom",
          min: 0,
          max: "*",
        },
        type: [
          {
            code: "ContactPoint",
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
        id: "ContactDetail",
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
        path: "ContactDetail",
        short: "Contact information",
        definition:
          "Specifies contact information for a person or organization.",
        min: 0,
        max: "*",
      },
      {
        id: "ContactDetail.name",
        path: "ContactDetail.name",
        short: "Name of an individual to contact",
        definition: "The name of an individual to contact.",
        comment:
          "If there is no named individual, the telecom information is for the organization as a whole.",
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
        id: "ContactDetail.telecom",
        path: "ContactDetail.telecom",
        short: "Contact details for individual or organization",
        definition:
          "The contact details for the individual (if a name was provided) or the organization.",
        min: 0,
        max: "*",
        type: [
          {
            code: "ContactPoint",
          },
        ],
        isSummary: true,
      },
    ],
  },
};

export default ContactDetail;
