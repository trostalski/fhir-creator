const SampledData = {
  resourceType: "StructureDefinition",
  id: "SampledData",
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
  url: "http://hl7.org/fhir/StructureDefinition/SampledData",
  version: "4.3.0",
  name: "SampledData",
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
    "Base StructureDefinition for SampledData Type: A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.",
  purpose:
    "There is a need for a concise way to handle the data produced by devices that sample a physical state at a high frequency.",
  fhirVersion: "4.3.0",
  mapping: [
    {
      identity: "v2",
      uri: "http://hl7.org/v2",
      name: "HL7 v2 Mapping",
    },
    {
      identity: "rim",
      uri: "http://hl7.org/v3",
      name: "RIM Mapping",
    },
  ],
  kind: "complex-type",
  abstract: false,
  type: "SampledData",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/Element",
  derivation: "specialization",
  snapshot: {
    element: [
      {
        id: "SampledData",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "trial-use",
          },
        ],
        path: "SampledData",
        short: "A series of measurements taken by a device",
        definition:
          "A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.",
        comment:
          'The data is not interpretable without at least origin, period, and dimensions, but these are optional to allow a separation between the template of measurement and the actual measurement, such as between DeviceCapabilities and DeviceLog.  When providing a summary view (for example with Observation.value[x]) SampledData should be represented with a brief display text such as "Sampled Data".',
        min: 0,
        max: "*",
        base: {
          path: "SampledData",
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
            identity: "v2",
            map: "N/A (but see section 7.14 in v2.7)",
          },
          {
            identity: "rim",
            map: "SLIST + GLIST",
          },
        ],
      },
      {
        id: "SampledData.id",
        path: "SampledData.id",
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
        id: "SampledData.extension",
        path: "SampledData.extension",
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
        id: "SampledData.origin",
        path: "SampledData.origin",
        short: "Zero value and units",
        definition:
          "The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.",
        min: 1,
        max: "1",
        base: {
          path: "SampledData.origin",
          min: 1,
          max: "1",
        },
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
          {
            identity: "rim",
            map: "SLIST.origin",
          },
        ],
      },
      {
        id: "SampledData.period",
        path: "SampledData.period",
        short: "Number of milliseconds between samples",
        definition:
          "The length of time between sampling times, measured in milliseconds.",
        comment: "This is usually a whole number.",
        min: 1,
        max: "1",
        base: {
          path: "SampledData.period",
          min: 1,
          max: "1",
        },
        type: [
          {
            code: "decimal",
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
            map: "GLIST.increment",
          },
        ],
      },
      {
        id: "SampledData.factor",
        path: "SampledData.factor",
        short: "Multiply data by this before adding to origin",
        definition:
          "A correction factor that is applied to the sampled data points before they are added to the origin.",
        min: 0,
        max: "1",
        base: {
          path: "SampledData.factor",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "decimal",
          },
        ],
        meaningWhenMissing:
          "If no factor is assigned, the data is not adjusted before adding to the origin",
        constraint: [
          {
            key: "ele-1",
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
            map: "SLIST.factor",
          },
        ],
      },
      {
        id: "SampledData.lowerLimit",
        path: "SampledData.lowerLimit",
        short: "Lower limit of detection",
        definition:
          'The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).',
        min: 0,
        max: "1",
        base: {
          path: "SampledData.lowerLimit",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "decimal",
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
            map: "N/A (use SLIST.digits.nullFlavor)",
          },
        ],
      },
      {
        id: "SampledData.upperLimit",
        path: "SampledData.upperLimit",
        short: "Upper limit of detection",
        definition:
          'The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).',
        min: 0,
        max: "1",
        base: {
          path: "SampledData.upperLimit",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "decimal",
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
            map: "N/A (use SLIST.digits.nullFlavor)",
          },
        ],
      },
      {
        id: "SampledData.dimensions",
        path: "SampledData.dimensions",
        short: "Number of sample points at each time point",
        definition:
          "The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.",
        comment:
          "If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).",
        min: 1,
        max: "1",
        base: {
          path: "SampledData.dimensions",
          min: 1,
          max: "1",
        },
        type: [
          {
            code: "positiveInt",
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
            map: "N/A (fixed to 1)",
          },
        ],
      },
      {
        id: "SampledData.data",
        path: "SampledData.data",
        short: 'Decimal values with spaces, or "E" | "U" | "L"',
        definition:
          'A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value.',
        comment:
          "Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.",
        min: 0,
        max: "1",
        base: {
          path: "SampledData.data",
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
        isSummary: false,
        mapping: [
          {
            identity: "rim",
            map: "SLIST.digits",
          },
        ],
      },
    ],
  },
  differential: {
    element: [
      {
        id: "SampledData",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "trial-use",
          },
        ],
        path: "SampledData",
        short: "A series of measurements taken by a device",
        definition:
          "A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.",
        comment:
          'The data is not interpretable without at least origin, period, and dimensions, but these are optional to allow a separation between the template of measurement and the actual measurement, such as between DeviceCapabilities and DeviceLog.  When providing a summary view (for example with Observation.value[x]) SampledData should be represented with a brief display text such as "Sampled Data".',
        min: 0,
        max: "*",
        mapping: [
          {
            identity: "v2",
            map: "N/A (but see section 7.14 in v2.7)",
          },
          {
            identity: "rim",
            map: "SLIST + GLIST",
          },
        ],
      },
      {
        id: "SampledData.origin",
        path: "SampledData.origin",
        short: "Zero value and units",
        definition:
          "The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.",
        min: 1,
        max: "1",
        type: [
          {
            code: "Quantity",
            profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "rim",
            map: "SLIST.origin",
          },
        ],
      },
      {
        id: "SampledData.period",
        path: "SampledData.period",
        short: "Number of milliseconds between samples",
        definition:
          "The length of time between sampling times, measured in milliseconds.",
        comment: "This is usually a whole number.",
        min: 1,
        max: "1",
        type: [
          {
            code: "decimal",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "rim",
            map: "GLIST.increment",
          },
        ],
      },
      {
        id: "SampledData.factor",
        path: "SampledData.factor",
        short: "Multiply data by this before adding to origin",
        definition:
          "A correction factor that is applied to the sampled data points before they are added to the origin.",
        min: 0,
        max: "1",
        type: [
          {
            code: "decimal",
          },
        ],
        meaningWhenMissing:
          "If no factor is assigned, the data is not adjusted before adding to the origin",
        isSummary: true,
        mapping: [
          {
            identity: "rim",
            map: "SLIST.factor",
          },
        ],
      },
      {
        id: "SampledData.lowerLimit",
        path: "SampledData.lowerLimit",
        short: "Lower limit of detection",
        definition:
          'The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).',
        min: 0,
        max: "1",
        type: [
          {
            code: "decimal",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "rim",
            map: "N/A (use SLIST.digits.nullFlavor)",
          },
        ],
      },
      {
        id: "SampledData.upperLimit",
        path: "SampledData.upperLimit",
        short: "Upper limit of detection",
        definition:
          'The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).',
        min: 0,
        max: "1",
        type: [
          {
            code: "decimal",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "rim",
            map: "N/A (use SLIST.digits.nullFlavor)",
          },
        ],
      },
      {
        id: "SampledData.dimensions",
        path: "SampledData.dimensions",
        short: "Number of sample points at each time point",
        definition:
          "The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.",
        comment:
          "If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).",
        min: 1,
        max: "1",
        type: [
          {
            code: "positiveInt",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "rim",
            map: "N/A (fixed to 1)",
          },
        ],
      },
      {
        id: "SampledData.data",
        path: "SampledData.data",
        short: 'Decimal values with spaces, or "E" | "U" | "L"',
        definition:
          'A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value.',
        comment:
          "Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.",
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
        mapping: [
          {
            identity: "rim",
            map: "SLIST.digits",
          },
        ],
      },
    ],
  },
};

export default SampledData;
