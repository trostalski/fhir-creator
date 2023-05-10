const Population = {
  resourceType: "StructureDefinition",
  id: "Population",
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
  url: "http://hl7.org/fhir/StructureDefinition/Population",
  version: "4.3.0",
  name: "Population",
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
    "Base StructureDefinition for Population Type: A populatioof people with some set of grouping criteria.",
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
  type: "Population",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/BackboneElement",
  derivation: "specialization",
  snapshot: {
    element: [
      {
        id: "Population",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "draft",
          },
        ],
        path: "Population",
        short:
          "A definition of a set of people that apply to some clinically related context, for example people contraindicated for a certain medication",
        definition: "A populatioof people with some set of grouping criteria.",
        min: 0,
        max: "*",
        base: {
          path: "Population",
          min: 0,
          max: "*",
        },
        constraint: [
          {
            key: "ele-1",
            severity: "error",
            human: "All FHIR elements must have a @value or children",
            expression: "hasValue() or (children().count() > id.count())",
            xpath: "@value|f:*|h:div",
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
        id: "Population.id",
        path: "Population.id",
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
        id: "Population.extension",
        path: "Population.extension",
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
        id: "Population.modifierExtension",
        path: "Population.modifierExtension",
        short: "Extensions that cannot be ignored even if unrecognized",
        definition:
          "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
        comment:
          "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        requirements:
          "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
        alias: ["extensions", "user content", "modifiers"],
        min: 0,
        max: "*",
        base: {
          path: "BackboneElement.modifierExtension",
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
        isModifier: true,
        isModifierReason:
          "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
        isSummary: true,
        mapping: [
          {
            identity: "rim",
            map: "N/A",
          },
        ],
      },
      {
        id: "Population.age[x]",
        path: "Population.age[x]",
        short: "The age of the specific population",
        definition: "The age of the specific population.",
        min: 0,
        max: "1",
        base: {
          path: "Population.age[x]",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "Range",
          },
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
      },
      {
        id: "Population.gender",
        path: "Population.gender",
        short: "The gender of the specific population",
        definition: "The gender of the specific population.",
        min: 0,
        max: "1",
        base: {
          path: "Population.gender",
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
      },
      {
        id: "Population.race",
        path: "Population.race",
        short: "Race of the specific population",
        definition: "Race of the specific population.",
        min: 0,
        max: "1",
        base: {
          path: "Population.race",
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
      },
      {
        id: "Population.physiologicalCondition",
        path: "Population.physiologicalCondition",
        short:
          "The existing physiological conditions of the specific population to which this applies",
        definition:
          "The existing physiological conditions of the specific population to which this applies.",
        min: 0,
        max: "1",
        base: {
          path: "Population.physiologicalCondition",
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
      },
    ],
  },
  differential: {
    element: [
      {
        id: "Population",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "draft",
          },
        ],
        path: "Population",
        short:
          "A definition of a set of people that apply to some clinically related context, for example people contraindicated for a certain medication",
        definition: "A populatioof people with some set of grouping criteria.",
        min: 0,
        max: "*",
      },
      {
        id: "Population.age[x]",
        path: "Population.age[x]",
        short: "The age of the specific population",
        definition: "The age of the specific population.",
        min: 0,
        max: "1",
        type: [
          {
            code: "Range",
          },
          {
            code: "CodeableConcept",
          },
        ],
        isSummary: true,
      },
      {
        id: "Population.gender",
        path: "Population.gender",
        short: "The gender of the specific population",
        definition: "The gender of the specific population.",
        min: 0,
        max: "1",
        type: [
          {
            code: "CodeableConcept",
          },
        ],
        isSummary: true,
      },
      {
        id: "Population.race",
        path: "Population.race",
        short: "Race of the specific population",
        definition: "Race of the specific population.",
        min: 0,
        max: "1",
        type: [
          {
            code: "CodeableConcept",
          },
        ],
        isSummary: true,
      },
      {
        id: "Population.physiologicalCondition",
        path: "Population.physiologicalCondition",
        short:
          "The existing physiological conditions of the specific population to which this applies",
        definition:
          "The existing physiological conditions of the specific population to which this applies.",
        min: 0,
        max: "1",
        type: [
          {
            code: "CodeableConcept",
          },
        ],
        isSummary: true,
      },
    ],
  },
};

export default Population;
