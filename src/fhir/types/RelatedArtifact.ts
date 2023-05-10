const RelatedArtifact = {
  resourceType: "StructureDefinition",
  id: "RelatedArtifact",
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
  url: "http://hl7.org/fhir/StructureDefinition/RelatedArtifact",
  version: "4.3.0",
  name: "RelatedArtifact",
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
    "Base StructureDefinition for RelatedArtifact Type: Related artifacts such as additional documentation, justification, or bibliographic references.",
  purpose:
    "Knowledge resources must be able to provide enough information for consumers of the content (and/or interventions or results produced by the content) to be able to determine and understand the justification for and evidence in support of the content.",
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
  type: "RelatedArtifact",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/Element",
  derivation: "specialization",
  snapshot: {
    element: [
      {
        id: "RelatedArtifact",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "trial-use",
          },
        ],
        path: "RelatedArtifact",
        short: "Related artifacts for a knowledge resource",
        definition:
          "Related artifacts such as additional documentation, justification, or bibliographic references.",
        comment:
          "Each related artifact is either an attachment, or a reference to another knowledge resource, but not both.",
        min: 0,
        max: "*",
        base: {
          path: "RelatedArtifact",
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
        id: "RelatedArtifact.id",
        path: "RelatedArtifact.id",
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
        id: "RelatedArtifact.extension",
        path: "RelatedArtifact.extension",
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
        id: "RelatedArtifact.type",
        path: "RelatedArtifact.type",
        short:
          "documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of",
        definition: "The type of relationship to the related artifact.",
        min: 1,
        max: "1",
        base: {
          path: "RelatedArtifact.type",
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
              valueString: "The type of relationship to the related artifact.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "RelatedArtifactType",
            },
          ],
          strength: "required",
          valueSet: "http://hl7.org/fhir/ValueSet/related-artifact-type|4.3.0",
        },
      },
      {
        id: "RelatedArtifact.label",
        path: "RelatedArtifact.label",
        short: "Short label",
        definition:
          "A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.",
        min: 0,
        max: "1",
        base: {
          path: "RelatedArtifact.label",
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
        id: "RelatedArtifact.display",
        path: "RelatedArtifact.display",
        short: "Brief description of the related artifact",
        definition:
          "A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.",
        min: 0,
        max: "1",
        base: {
          path: "RelatedArtifact.display",
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
        id: "RelatedArtifact.citation",
        path: "RelatedArtifact.citation",
        short: "Bibliographic citation for the artifact",
        definition:
          "A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.",
        comment:
          "Additional structured information about citations should be captured as extensions.",
        min: 0,
        max: "1",
        base: {
          path: "RelatedArtifact.citation",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "markdown",
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
        id: "RelatedArtifact.url",
        path: "RelatedArtifact.url",
        short: "Where the artifact can be accessed",
        definition:
          "A url for the artifact that can be followed to access the actual content.",
        comment:
          "If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).",
        min: 0,
        max: "1",
        base: {
          path: "RelatedArtifact.url",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "url",
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
        id: "RelatedArtifact.document",
        path: "RelatedArtifact.document",
        short: "What document is being referenced",
        definition:
          "The document being referenced, represented as an attachment. This is exclusive with the resource element.",
        min: 0,
        max: "1",
        base: {
          path: "RelatedArtifact.document",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "Attachment",
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
        id: "RelatedArtifact.resource",
        path: "RelatedArtifact.resource",
        short: "What resource is being referenced",
        definition:
          "The related resource, such as a library, value set, profile, or other knowledge resource.",
        comment:
          "If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.",
        min: 0,
        max: "1",
        base: {
          path: "RelatedArtifact.resource",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "canonical",
            targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
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
        id: "RelatedArtifact",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "trial-use",
          },
        ],
        path: "RelatedArtifact",
        short: "Related artifacts for a knowledge resource",
        definition:
          "Related artifacts such as additional documentation, justification, or bibliographic references.",
        comment:
          "Each related artifact is either an attachment, or a reference to another knowledge resource, but not both.",
        min: 0,
        max: "*",
      },
      {
        id: "RelatedArtifact.type",
        path: "RelatedArtifact.type",
        short:
          "documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of",
        definition: "The type of relationship to the related artifact.",
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
              valueString: "The type of relationship to the related artifact.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "RelatedArtifactType",
            },
          ],
          strength: "required",
          valueSet: "http://hl7.org/fhir/ValueSet/related-artifact-type|4.3.0",
        },
      },
      {
        id: "RelatedArtifact.label",
        path: "RelatedArtifact.label",
        short: "Short label",
        definition:
          "A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.",
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
        id: "RelatedArtifact.display",
        path: "RelatedArtifact.display",
        short: "Brief description of the related artifact",
        definition:
          "A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.",
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
        id: "RelatedArtifact.citation",
        path: "RelatedArtifact.citation",
        short: "Bibliographic citation for the artifact",
        definition:
          "A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.",
        comment:
          "Additional structured information about citations should be captured as extensions.",
        min: 0,
        max: "1",
        type: [
          {
            code: "markdown",
          },
        ],
        isSummary: true,
      },
      {
        id: "RelatedArtifact.url",
        path: "RelatedArtifact.url",
        short: "Where the artifact can be accessed",
        definition:
          "A url for the artifact that can be followed to access the actual content.",
        comment:
          "If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).",
        min: 0,
        max: "1",
        type: [
          {
            code: "url",
          },
        ],
        isSummary: true,
      },
      {
        id: "RelatedArtifact.document",
        path: "RelatedArtifact.document",
        short: "What document is being referenced",
        definition:
          "The document being referenced, represented as an attachment. This is exclusive with the resource element.",
        min: 0,
        max: "1",
        type: [
          {
            code: "Attachment",
          },
        ],
        isSummary: true,
      },
      {
        id: "RelatedArtifact.resource",
        path: "RelatedArtifact.resource",
        short: "What resource is being referenced",
        definition:
          "The related resource, such as a library, value set, profile, or other knowledge resource.",
        comment:
          "If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.",
        min: 0,
        max: "1",
        type: [
          {
            code: "canonical",
            targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
          },
        ],
        isSummary: true,
      },
    ],
  },
};

export default RelatedArtifact;
