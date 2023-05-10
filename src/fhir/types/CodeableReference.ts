const CodeableReference = {
  resourceType: "StructureDefinition",
  id: "CodeableReference",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
  },
  text: {
    status: "generated",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
  ],
  url: "http://hl7.org/fhir/StructureDefinition/CodeableReference",
  version: "4.3.0",
  name: "CodeableReference",
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
    "Base StructureDefinition for CodeableReference Type: A reference to a resource (by instance), or instead, a reference to a concept defined in a terminology or ontology (by class).",
  purpose:
    "This is a common pattern in record keeping - a reference may be made to a specific condition, observation, plan, or definition, or a reference may be made to a general concept defined in a knowledge base somewhere.",
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
  type: "CodeableReference",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/Element",
  derivation: "specialization",
  snapshot: {
    element: [
      {
        id: "CodeableReference",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "draft",
          },
        ],
        path: "CodeableReference",
        short: "Reference to a resource or a concept",
        definition:
          "A reference to a resource (by instance), or instead, a reference to a concept defined in a terminology or ontology (by class).",
        min: 0,
        max: "*",
        base: {
          path: "CodeableReference",
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
        id: "CodeableReference.id",
        path: "CodeableReference.id",
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
        id: "CodeableReference.extension",
        path: "CodeableReference.extension",
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
        id: "CodeableReference.concept",
        path: "CodeableReference.concept",
        short: "Reference to a concept (by class)",
        definition:
          "A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.",
        min: 0,
        max: "1",
        base: {
          path: "CodeableReference.concept",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "CodeableConcept",
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
          {
            identity: "rim",
            map: "N/A",
          },
        ],
      },
      {
        id: "CodeableReference.reference",
        path: "CodeableReference.reference",
        short: "Reference to a resource (by instance)",
        definition:
          "A reference to a resource the provides exact details about the information being referenced.",
        min: 0,
        max: "1",
        base: {
          path: "CodeableReference.reference",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "Reference",
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
          {
            identity: "rim",
            map: "N/A",
          },
        ],
      },
    ],
  },
  differential: {
    element: [
      {
        id: "CodeableReference",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "draft",
          },
        ],
        path: "CodeableReference",
        short: "Reference to a resource or a concept",
        definition:
          "A reference to a resource (by instance), or instead, a reference to a concept defined in a terminology or ontology (by class).",
        min: 0,
        max: "*",
      },
      {
        id: "CodeableReference.concept",
        path: "CodeableReference.concept",
        short: "Reference to a concept (by class)",
        definition:
          "A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.",
        min: 0,
        max: "1",
        type: [
          {
            code: "CodeableConcept",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "rim",
            map: "N/A",
          },
        ],
      },
      {
        id: "CodeableReference.reference",
        path: "CodeableReference.reference",
        short: "Reference to a resource (by instance)",
        definition:
          "A reference to a resource the provides exact details about the information being referenced.",
        min: 0,
        max: "1",
        type: [
          {
            code: "Reference",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "rim",
            map: "N/A",
          },
        ],
      },
    ],
  },
};

export default CodeableReference;
