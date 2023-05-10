const Address = {
  resourceType: "StructureDefinition",
  id: "Address",
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
  url: "http://hl7.org/fhir/StructureDefinition/Address",
  version: "4.3.0",
  name: "Address",
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
    "Base StructureDefinition for Address Type: An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.",
  purpose:
    "Need to be able to record postal addresses, along with notes about their use.",
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
    {
      identity: "servd",
      uri: "http://www.omg.org/spec/ServD/1.0/",
      name: "ServD",
    },
    {
      identity: "vcard",
      uri: "http://w3.org/vcard",
      name: "vCard Mapping",
    },
  ],
  kind: "complex-type",
  abstract: false,
  type: "Address",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/Element",
  derivation: "specialization",
  snapshot: {
    element: [
      {
        id: "Address",
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
        path: "Address",
        short:
          "An address expressed using postal conventions (as opposed to GPS or other location definition formats)",
        definition:
          "An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.",
        comment:
          "Note: address is intended to describe postal addresses for administrative purposes, not to describe absolute geographical coordinates.  Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).",
        min: 0,
        max: "*",
        base: {
          path: "Address",
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
            map: "XAD",
          },
          {
            identity: "rim",
            map: "AD",
          },
          {
            identity: "servd",
            map: "Address",
          },
        ],
      },
      {
        id: "Address.id",
        path: "Address.id",
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
        id: "Address.extension",
        path: "Address.extension",
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
        id: "Address.use",
        path: "Address.use",
        short: "home | work | temp | old | billing - purpose of this address",
        definition: "The purpose of this address.",
        comment:
          "Applications can assume that an address is current unless it explicitly says that it is temporary or old.",
        requirements:
          "Allows an appropriate address to be chosen from a list of many.",
        min: 0,
        max: "1",
        base: {
          path: "Address.use",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "code",
          },
        ],
        example: [
          {
            label: "General",
            valueCode: "home",
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
        isModifier: true,
        isModifierReason:
          'This is labeled as "Is Modifier" because applications should not mistake a temporary or old address etc.for a current/permanent one',
        isSummary: true,
        binding: {
          extension: [
            {
              url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
              valueString: "The use of an address.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "AddressUse",
            },
          ],
          strength: "required",
          description: "The use of an address (home / work / etc.).",
          valueSet: "http://hl7.org/fhir/ValueSet/address-use|4.3.0",
        },
        mapping: [
          {
            identity: "v2",
            map: "XAD.7",
          },
          {
            identity: "rim",
            map: "unique(./use)",
          },
          {
            identity: "servd",
            map: "./AddressPurpose",
          },
        ],
      },
      {
        id: "Address.type",
        path: "Address.type",
        short: "postal | physical | both",
        definition:
          "Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.",
        comment:
          'The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).',
        min: 0,
        max: "1",
        base: {
          path: "Address.type",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "code",
          },
        ],
        example: [
          {
            label: "General",
            valueCode: "both",
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
              valueString: "The type of an address (physical / postal).",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "AddressType",
            },
          ],
          strength: "required",
          description: "The type of an address (physical / postal).",
          valueSet: "http://hl7.org/fhir/ValueSet/address-type|4.3.0",
        },
        mapping: [
          {
            identity: "v2",
            map: "XAD.18",
          },
          {
            identity: "rim",
            map: "unique(./use)",
          },
          {
            identity: "vcard",
            map: "address type parameter",
          },
        ],
      },
      {
        id: "Address.text",
        path: "Address.text",
        short: "Text representation of the address",
        definition:
          "Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts.",
        comment:
          "Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.",
        requirements: "A renderable, unencoded form.",
        min: 0,
        max: "1",
        base: {
          path: "Address.text",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "string",
          },
        ],
        example: [
          {
            label: "General",
            valueString: "137 Nowhere Street, Erewhon 9132",
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
            identity: "v2",
            map: "XAD.1 + XAD.2 + XAD.3 + XAD.4 + XAD.5 + XAD.6",
          },
          {
            identity: "rim",
            map: "./formatted",
          },
          {
            identity: "vcard",
            map: "address label parameter",
          },
        ],
      },
      {
        id: "Address.line",
        path: "Address.line",
        short: "Street name, number, direction & P.O. Box etc.",
        definition:
          "This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.",
        min: 0,
        max: "*",
        base: {
          path: "Address.line",
          min: 0,
          max: "*",
        },
        type: [
          {
            code: "string",
          },
        ],
        orderMeaning:
          "The order in which lines should appear in an address label",
        example: [
          {
            label: "General",
            valueString: "137 Nowhere Street",
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
            identity: "v2",
            map: "XAD.1 + XAD.2 (note: XAD.1 and XAD.2 have different meanings for a company address than for a person address)",
          },
          {
            identity: "rim",
            map: "AD.part[parttype = AL]",
          },
          {
            identity: "vcard",
            map: "street",
          },
          {
            identity: "servd",
            map: "./StreetAddress (newline delimitted)",
          },
        ],
      },
      {
        id: "Address.city",
        path: "Address.city",
        short: "Name of city, town etc.",
        definition:
          "The name of the city, town, suburb, village or other community or delivery center.",
        alias: ["Municpality"],
        min: 0,
        max: "1",
        base: {
          path: "Address.city",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "string",
          },
        ],
        example: [
          {
            label: "General",
            valueString: "Erewhon",
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
            identity: "v2",
            map: "XAD.3",
          },
          {
            identity: "rim",
            map: "AD.part[parttype = CTY]",
          },
          {
            identity: "vcard",
            map: "locality",
          },
          {
            identity: "servd",
            map: "./Jurisdiction",
          },
        ],
      },
      {
        id: "Address.district",
        path: "Address.district",
        short: "District name (aka county)",
        definition: "The name of the administrative area (county).",
        comment:
          "District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.",
        alias: ["County"],
        min: 0,
        max: "1",
        base: {
          path: "Address.district",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "string",
          },
        ],
        example: [
          {
            label: "General",
            valueString: "Madison",
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
            identity: "v2",
            map: "XAD.9",
          },
          {
            identity: "rim",
            map: "AD.part[parttype = CNT | CPA]",
          },
        ],
      },
      {
        id: "Address.state",
        path: "Address.state",
        short: "Sub-unit of country (abbreviations ok)",
        definition:
          "Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).",
        alias: ["Province", "Territory"],
        min: 0,
        max: "1",
        base: {
          path: "Address.state",
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
        mapping: [
          {
            identity: "v2",
            map: "XAD.4",
          },
          {
            identity: "rim",
            map: "AD.part[parttype = STA]",
          },
          {
            identity: "vcard",
            map: "region",
          },
          {
            identity: "servd",
            map: "./Region",
          },
        ],
      },
      {
        id: "Address.postalCode",
        path: "Address.postalCode",
        short: "Postal code for area",
        definition:
          "A postal code designating a region defined by the postal service.",
        alias: ["Zip"],
        min: 0,
        max: "1",
        base: {
          path: "Address.postalCode",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "string",
          },
        ],
        example: [
          {
            label: "General",
            valueString: "9132",
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
            identity: "v2",
            map: "XAD.5",
          },
          {
            identity: "rim",
            map: "AD.part[parttype = ZIP]",
          },
          {
            identity: "vcard",
            map: "code",
          },
          {
            identity: "servd",
            map: "./PostalIdentificationCode",
          },
        ],
      },
      {
        id: "Address.country",
        path: "Address.country",
        short: "Country (e.g. can be ISO 3166 2 or 3 letter code)",
        definition:
          "Country - a nation as commonly understood or generally accepted.",
        comment:
          "ISO 3166 3 letter codes can be used in place of a human readable country name.",
        min: 0,
        max: "1",
        base: {
          path: "Address.country",
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
        mapping: [
          {
            identity: "v2",
            map: "XAD.6",
          },
          {
            identity: "rim",
            map: "AD.part[parttype = CNT]",
          },
          {
            identity: "vcard",
            map: "country",
          },
          {
            identity: "servd",
            map: "./Country",
          },
        ],
      },
      {
        id: "Address.period",
        path: "Address.period",
        short: "Time period when address was/is in use",
        definition: "Time period when address was/is in use.",
        requirements: "Allows addresses to be placed in historical context.",
        min: 0,
        max: "1",
        base: {
          path: "Address.period",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "Period",
          },
        ],
        example: [
          {
            label: "General",
            valuePeriod: {
              start: "2010-03-23",
              end: "2010-07-01",
            },
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
            identity: "v2",
            map: "XAD.12 / XAD.13 + XAD.14",
          },
          {
            identity: "rim",
            map: './usablePeriod[type="IVL<TS>"]',
          },
          {
            identity: "servd",
            map: "./StartDate and ./EndDate",
          },
        ],
      },
    ],
  },
  differential: {
    element: [
      {
        id: "Address",
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
        path: "Address",
        short:
          "An address expressed using postal conventions (as opposed to GPS or other location definition formats)",
        definition:
          "An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.",
        comment:
          "Note: address is intended to describe postal addresses for administrative purposes, not to describe absolute geographical coordinates.  Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).",
        min: 0,
        max: "*",
        mapping: [
          {
            identity: "v2",
            map: "XAD",
          },
          {
            identity: "rim",
            map: "AD",
          },
          {
            identity: "servd",
            map: "Address",
          },
        ],
      },
      {
        id: "Address.use",
        path: "Address.use",
        short: "home | work | temp | old | billing - purpose of this address",
        definition: "The purpose of this address.",
        comment:
          "Applications can assume that an address is current unless it explicitly says that it is temporary or old.",
        requirements:
          "Allows an appropriate address to be chosen from a list of many.",
        min: 0,
        max: "1",
        type: [
          {
            code: "code",
          },
        ],
        example: [
          {
            label: "General",
            valueCode: "home",
          },
        ],
        isModifier: true,
        isModifierReason:
          'This is labeled as "Is Modifier" because applications should not mistake a temporary or old address etc.for a current/permanent one',
        isSummary: true,
        binding: {
          extension: [
            {
              url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
              valueString: "The use of an address.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "AddressUse",
            },
          ],
          strength: "required",
          description: "The use of an address (home / work / etc.).",
          valueSet: "http://hl7.org/fhir/ValueSet/address-use|4.3.0",
        },
        mapping: [
          {
            identity: "v2",
            map: "XAD.7",
          },
          {
            identity: "rim",
            map: "unique(./use)",
          },
          {
            identity: "servd",
            map: "./AddressPurpose",
          },
        ],
      },
      {
        id: "Address.type",
        path: "Address.type",
        short: "postal | physical | both",
        definition:
          "Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.",
        comment:
          'The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).',
        min: 0,
        max: "1",
        type: [
          {
            code: "code",
          },
        ],
        example: [
          {
            label: "General",
            valueCode: "both",
          },
        ],
        isSummary: true,
        binding: {
          extension: [
            {
              url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
              valueString: "The type of an address (physical / postal).",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "AddressType",
            },
          ],
          strength: "required",
          description: "The type of an address (physical / postal).",
          valueSet: "http://hl7.org/fhir/ValueSet/address-type|4.3.0",
        },
        mapping: [
          {
            identity: "v2",
            map: "XAD.18",
          },
          {
            identity: "rim",
            map: "unique(./use)",
          },
          {
            identity: "vcard",
            map: "address type parameter",
          },
        ],
      },
      {
        id: "Address.text",
        path: "Address.text",
        short: "Text representation of the address",
        definition:
          "Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts.",
        comment:
          "Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.",
        requirements: "A renderable, unencoded form.",
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
        example: [
          {
            label: "General",
            valueString: "137 Nowhere Street, Erewhon 9132",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "v2",
            map: "XAD.1 + XAD.2 + XAD.3 + XAD.4 + XAD.5 + XAD.6",
          },
          {
            identity: "rim",
            map: "./formatted",
          },
          {
            identity: "vcard",
            map: "address label parameter",
          },
        ],
      },
      {
        id: "Address.line",
        path: "Address.line",
        short: "Street name, number, direction & P.O. Box etc.",
        definition:
          "This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.",
        min: 0,
        max: "*",
        type: [
          {
            code: "string",
          },
        ],
        orderMeaning:
          "The order in which lines should appear in an address label",
        example: [
          {
            label: "General",
            valueString: "137 Nowhere Street",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "v2",
            map: "XAD.1 + XAD.2 (note: XAD.1 and XAD.2 have different meanings for a company address than for a person address)",
          },
          {
            identity: "rim",
            map: "AD.part[parttype = AL]",
          },
          {
            identity: "vcard",
            map: "street",
          },
          {
            identity: "servd",
            map: "./StreetAddress (newline delimitted)",
          },
        ],
      },
      {
        id: "Address.city",
        path: "Address.city",
        short: "Name of city, town etc.",
        definition:
          "The name of the city, town, suburb, village or other community or delivery center.",
        alias: ["Municpality"],
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
        example: [
          {
            label: "General",
            valueString: "Erewhon",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "v2",
            map: "XAD.3",
          },
          {
            identity: "rim",
            map: "AD.part[parttype = CTY]",
          },
          {
            identity: "vcard",
            map: "locality",
          },
          {
            identity: "servd",
            map: "./Jurisdiction",
          },
        ],
      },
      {
        id: "Address.district",
        path: "Address.district",
        short: "District name (aka county)",
        definition: "The name of the administrative area (county).",
        comment:
          "District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.",
        alias: ["County"],
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
        example: [
          {
            label: "General",
            valueString: "Madison",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "v2",
            map: "XAD.9",
          },
          {
            identity: "rim",
            map: "AD.part[parttype = CNT | CPA]",
          },
        ],
      },
      {
        id: "Address.state",
        path: "Address.state",
        short: "Sub-unit of country (abbreviations ok)",
        definition:
          "Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).",
        alias: ["Province", "Territory"],
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "v2",
            map: "XAD.4",
          },
          {
            identity: "rim",
            map: "AD.part[parttype = STA]",
          },
          {
            identity: "vcard",
            map: "region",
          },
          {
            identity: "servd",
            map: "./Region",
          },
        ],
      },
      {
        id: "Address.postalCode",
        path: "Address.postalCode",
        short: "Postal code for area",
        definition:
          "A postal code designating a region defined by the postal service.",
        alias: ["Zip"],
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
        example: [
          {
            label: "General",
            valueString: "9132",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "v2",
            map: "XAD.5",
          },
          {
            identity: "rim",
            map: "AD.part[parttype = ZIP]",
          },
          {
            identity: "vcard",
            map: "code",
          },
          {
            identity: "servd",
            map: "./PostalIdentificationCode",
          },
        ],
      },
      {
        id: "Address.country",
        path: "Address.country",
        short: "Country (e.g. can be ISO 3166 2 or 3 letter code)",
        definition:
          "Country - a nation as commonly understood or generally accepted.",
        comment:
          "ISO 3166 3 letter codes can be used in place of a human readable country name.",
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "v2",
            map: "XAD.6",
          },
          {
            identity: "rim",
            map: "AD.part[parttype = CNT]",
          },
          {
            identity: "vcard",
            map: "country",
          },
          {
            identity: "servd",
            map: "./Country",
          },
        ],
      },
      {
        id: "Address.period",
        path: "Address.period",
        short: "Time period when address was/is in use",
        definition: "Time period when address was/is in use.",
        requirements: "Allows addresses to be placed in historical context.",
        min: 0,
        max: "1",
        type: [
          {
            code: "Period",
          },
        ],
        example: [
          {
            label: "General",
            valuePeriod: {
              start: "2010-03-23",
              end: "2010-07-01",
            },
          },
        ],
        isSummary: true,
        mapping: [
          {
            identity: "v2",
            map: "XAD.12 / XAD.13 + XAD.14",
          },
          {
            identity: "rim",
            map: './usablePeriod[type="IVL<TS>"]',
          },
          {
            identity: "servd",
            map: "./StartDate and ./EndDate",
          },
        ],
      },
    ],
  },
};

export default Address;
