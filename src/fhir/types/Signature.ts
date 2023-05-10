const Signature = {
  resourceType: "StructureDefinition",
  id: "Signature",
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
  url: "http://hl7.org/fhir/StructureDefinition/Signature",
  version: "4.3.0",
  name: "Signature",
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
    "Base StructureDefinition for Signature Type: A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.",
  purpose:
    "There are a number of places where content must be signed in healthcare.",
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
  type: "Signature",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/Element",
  derivation: "specialization",
  snapshot: {
    element: [
      {
        id: "Signature",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "trial-use",
          },
        ],
        path: "Signature",
        short:
          "A Signature - XML DigSig, JWS, Graphical image of signature, etc.",
        definition:
          "A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.",
        comment:
          "The elements of the Signature Resource are for ease of access of these elements. For digital signatures (Xml DigSig, JWS), the non-repudiation proof comes from the Signature  validation, which includes validation of the referenced objects (e.g. Resources) (a.k.a., Content) in the XML-Signature Detached form.",
        min: 0,
        max: "*",
        base: {
          path: "Signature",
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
        id: "Signature.id",
        path: "Signature.id",
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
        id: "Signature.extension",
        path: "Signature.extension",
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
        id: "Signature.type",
        path: "Signature.type",
        short: "Indication of the reason the entity signed the object(s)",
        definition:
          "An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.",
        comment:
          "Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &quot;Commitment Type Indication&quot;.",
        min: 1,
        max: "*",
        base: {
          path: "Signature.type",
          min: 1,
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
                "An indication of the reason that an entity signed the object.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "SignatureType",
            },
          ],
          strength: "preferred",
          valueSet: "http://hl7.org/fhir/ValueSet/signature-type",
        },
      },
      {
        id: "Signature.when",
        path: "Signature.when",
        short: "When the signature was created",
        definition: "When the digital signature was signed.",
        comment: "This should agree with the information in the signature.",
        min: 1,
        max: "1",
        base: {
          path: "Signature.when",
          min: 1,
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
        id: "Signature.who",
        path: "Signature.who",
        short: "Who signed",
        definition:
          "A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).",
        comment: "This should agree with the information in the signature.",
        min: 1,
        max: "1",
        base: {
          path: "Signature.who",
          min: 1,
          max: "1",
        },
        type: [
          {
            code: "Reference",
            targetProfile: [
              "http://hl7.org/fhir/StructureDefinition/Practitioner",
              "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
              "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
              "http://hl7.org/fhir/StructureDefinition/Patient",
              "http://hl7.org/fhir/StructureDefinition/Device",
              "http://hl7.org/fhir/StructureDefinition/Organization",
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
        id: "Signature.onBehalfOf",
        path: "Signature.onBehalfOf",
        short: "The party represented",
        definition:
          "A reference to an application-usable description of the identity that is represented by the signature.",
        comment: "The party that can't sign. For example a child.",
        requirements: "used when the signature is on behalf of a non-signer.",
        min: 0,
        max: "1",
        base: {
          path: "Signature.onBehalfOf",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "Reference",
            targetProfile: [
              "http://hl7.org/fhir/StructureDefinition/Practitioner",
              "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
              "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
              "http://hl7.org/fhir/StructureDefinition/Patient",
              "http://hl7.org/fhir/StructureDefinition/Device",
              "http://hl7.org/fhir/StructureDefinition/Organization",
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
        id: "Signature.targetFormat",
        path: "Signature.targetFormat",
        short: "The technical format of the signed resources",
        definition:
          "A mime type that indicates the technical format of the target resources signed by the signature.",
        comment:
          '"xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.',
        min: 0,
        max: "1",
        base: {
          path: "Signature.targetFormat",
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
        isSummary: false,
        binding: {
          extension: [
            {
              url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
              valueString:
                "The mime type of an attachment. Any valid mime type is allowed.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "MimeType",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
              valueBoolean: true,
            },
          ],
          strength: "required",
          description: "BCP 13 (RFCs 2045, 2046, 2047, 4288, 4289 and 2049)",
          valueSet: "http://hl7.org/fhir/ValueSet/mimetypes|4.3.0",
        },
      },
      {
        id: "Signature.sigFormat",
        path: "Signature.sigFormat",
        short: "The technical format of the signature",
        definition:
          "A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.",
        min: 0,
        max: "1",
        base: {
          path: "Signature.sigFormat",
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
        isSummary: false,
        binding: {
          extension: [
            {
              url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
              valueString:
                "The mime type of an attachment. Any valid mime type is allowed.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "MimeType",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
              valueBoolean: true,
            },
          ],
          strength: "required",
          description: "BCP 13 (RFCs 2045, 2046, 2047, 4288, 4289 and 2049)",
          valueSet: "http://hl7.org/fhir/ValueSet/mimetypes|4.3.0",
        },
      },
      {
        id: "Signature.data",
        path: "Signature.data",
        short: "The actual signature content (XML DigSig. JWS, picture, etc.)",
        definition:
          "The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.",
        comment:
          'Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.',
        min: 0,
        max: "1",
        base: {
          path: "Signature.data",
          min: 0,
          max: "1",
        },
        type: [
          {
            code: "base64Binary",
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
      },
    ],
  },
  differential: {
    element: [
      {
        id: "Signature",
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            valueCode: "trial-use",
          },
        ],
        path: "Signature",
        short:
          "A Signature - XML DigSig, JWS, Graphical image of signature, etc.",
        definition:
          "A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.",
        comment:
          "The elements of the Signature Resource are for ease of access of these elements. For digital signatures (Xml DigSig, JWS), the non-repudiation proof comes from the Signature  validation, which includes validation of the referenced objects (e.g. Resources) (a.k.a., Content) in the XML-Signature Detached form.",
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
        id: "Signature.type",
        path: "Signature.type",
        short: "Indication of the reason the entity signed the object(s)",
        definition:
          "An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.",
        comment:
          "Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &quot;Commitment Type Indication&quot;.",
        min: 1,
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
                "An indication of the reason that an entity signed the object.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "SignatureType",
            },
          ],
          strength: "preferred",
          valueSet: "http://hl7.org/fhir/ValueSet/signature-type",
        },
      },
      {
        id: "Signature.when",
        path: "Signature.when",
        short: "When the signature was created",
        definition: "When the digital signature was signed.",
        comment: "This should agree with the information in the signature.",
        min: 1,
        max: "1",
        type: [
          {
            code: "instant",
          },
        ],
        isSummary: true,
      },
      {
        id: "Signature.who",
        path: "Signature.who",
        short: "Who signed",
        definition:
          "A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).",
        comment: "This should agree with the information in the signature.",
        min: 1,
        max: "1",
        type: [
          {
            code: "Reference",
            targetProfile: [
              "http://hl7.org/fhir/StructureDefinition/Practitioner",
              "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
              "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
              "http://hl7.org/fhir/StructureDefinition/Patient",
              "http://hl7.org/fhir/StructureDefinition/Device",
              "http://hl7.org/fhir/StructureDefinition/Organization",
            ],
          },
        ],
        isSummary: true,
      },
      {
        id: "Signature.onBehalfOf",
        path: "Signature.onBehalfOf",
        short: "The party represented",
        definition:
          "A reference to an application-usable description of the identity that is represented by the signature.",
        comment: "The party that can't sign. For example a child.",
        requirements: "used when the signature is on behalf of a non-signer.",
        min: 0,
        max: "1",
        type: [
          {
            code: "Reference",
            targetProfile: [
              "http://hl7.org/fhir/StructureDefinition/Practitioner",
              "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
              "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
              "http://hl7.org/fhir/StructureDefinition/Patient",
              "http://hl7.org/fhir/StructureDefinition/Device",
              "http://hl7.org/fhir/StructureDefinition/Organization",
            ],
          },
        ],
        isSummary: true,
      },
      {
        id: "Signature.targetFormat",
        path: "Signature.targetFormat",
        short: "The technical format of the signed resources",
        definition:
          "A mime type that indicates the technical format of the target resources signed by the signature.",
        comment:
          '"xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.',
        min: 0,
        max: "1",
        type: [
          {
            code: "code",
          },
        ],
        binding: {
          extension: [
            {
              url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
              valueString:
                "The mime type of an attachment. Any valid mime type is allowed.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "MimeType",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
              valueBoolean: true,
            },
          ],
          strength: "required",
          description: "BCP 13 (RFCs 2045, 2046, 2047, 4288, 4289 and 2049)",
          valueSet: "http://hl7.org/fhir/ValueSet/mimetypes|4.3.0",
        },
      },
      {
        id: "Signature.sigFormat",
        path: "Signature.sigFormat",
        short: "The technical format of the signature",
        definition:
          "A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.",
        min: 0,
        max: "1",
        type: [
          {
            code: "code",
          },
        ],
        binding: {
          extension: [
            {
              url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
              valueString:
                "The mime type of an attachment. Any valid mime type is allowed.",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
              valueString: "MimeType",
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
              valueBoolean: true,
            },
          ],
          strength: "required",
          description: "BCP 13 (RFCs 2045, 2046, 2047, 4288, 4289 and 2049)",
          valueSet: "http://hl7.org/fhir/ValueSet/mimetypes|4.3.0",
        },
      },
      {
        id: "Signature.data",
        path: "Signature.data",
        short: "The actual signature content (XML DigSig. JWS, picture, etc.)",
        definition:
          "The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.",
        comment:
          'Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.',
        min: 0,
        max: "1",
        type: [
          {
            code: "base64Binary",
          },
        ],
      },
    ],
  },
};

export default Signature;
