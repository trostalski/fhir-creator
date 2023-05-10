const Contributor = {
  resourceType: "StructureDefinition",
  id: "Contributor",
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
  url: "http://hl7.org/fhir/StructureDefinition/Contributor",
  version: "4.3.0",
  name: "Contributor",
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
    "Base StructureDefinition for Contributor Type: A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.",
  purpose:
    "Need to track contributor information in the same way across multiple resources.",
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
  type: "Contributor",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/Element",
  derivation: "specialization",
  snapshot: {
    element: [
      {
        id: "Contributor",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "trial-use",
          },
        ],
        path: "Contributor",
        short: "Contributor information",
        definition:
          "A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.",
        min: 0,
        max: "*",
        base: {
          path: "Contributor",
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
        id: "Contributor.id",
        path: "Contributor.id",
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
        id: "Contributor.extension",
        path: "Contributor.extension",
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
        id: "Contributor.type",
        path: "Contributor.type",
        short: "author | editor | reviewer | endorser",
        definition: "The type of contributor.",
        min: 1,
        max: "1",
        base: {
          path: "Contributor.type",
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
              valueString: "The type of contributor.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "ContributorType",
            },
          ],
          strength: "required",
          valueSet: "http://hl7.org/fhir/ValueSet/contributor-type|4.3.0",
        },
      },
      {
        id: "Contributor.name",
        path: "Contributor.name",
        short: "Who contributed the content",
        definition:
          "The name of the individual or organization responsible for the contribution.",
        min: 1,
        max: "1",
        base: {
          path: "Contributor.name",
          min: 1,
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
        id: "Contributor.contact",
        path: "Contributor.contact",
        short: "Contact details of the contributor",
        definition:
          "Contact details to assist a user in finding and communicating with the contributor.",
        min: 0,
        max: "*",
        base: {
          path: "Contributor.contact",
          min: 0,
          max: "*",
        },
        type: [
          {
            code: "ContactDetail",
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
        id: "Contributor",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "trial-use",
          },
        ],
        path: "Contributor",
        short: "Contributor information",
        definition:
          "A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.",
        min: 0,
        max: "*",
      },
      {
        id: "Contributor.type",
        path: "Contributor.type",
        short: "author | editor | reviewer | endorser",
        definition: "The type of contributor.",
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
              valueString: "The type of contributor.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "ContributorType",
            },
          ],
          strength: "required",
          valueSet: "http://hl7.org/fhir/ValueSet/contributor-type|4.3.0",
        },
      },
      {
        id: "Contributor.name",
        path: "Contributor.name",
        short: "Who contributed the content",
        definition:
          "The name of the individual or organization responsible for the contribution.",
        min: 1,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
        isSummary: true,
      },
      {
        id: "Contributor.contact",
        path: "Contributor.contact",
        short: "Contact details of the contributor",
        definition:
          "Contact details to assist a user in finding and communicating with the contributor.",
        min: 0,
        max: "*",
        type: [
          {
            code: "ContactDetail",
          },
        ],
        isSummary: true,
      },
    ],
  },
};

export default Contributor;
