const data = [
  {
    element: {
      id: "Endpoint.meta",
      path: "Endpoint.meta",
      short: "Metadata about the resource",
      definition:
        "The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
      min: 0,
      max: "1",
      base: { path: "Resource.meta", min: 0, max: "1" },
      type: [{ code: "Meta" }],
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
      mustSupport: false,
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.meta",
    parentDataPath: "root",
    basePath: "root.meta",
    baseId: "Endpoint.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Endpoint.implicitRules",
      path: "Endpoint.implicitRules",
      short: "A set of rules under which this content was created",
      definition:
        "A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.",
      comment:
        "Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.",
      min: 0,
      max: "1",
      base: { path: "Resource.implicitRules", min: 0, max: "1" },
      type: [{ code: "uri" }],
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
      mustSupport: false,
      isModifier: true,
      isModifierReason:
        "This element is labeled as a modifier because the implicit rules may provide additional knowledge about the resource that modifies it's meaning or interpretation",
      isSummary: true,
    },
    dataPath: "root.implicitRules",
    parentDataPath: "root",
    basePath: "root.implicitRules",
    baseId: "Endpoint.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Endpoint.language",
      path: "Endpoint.language",
      short: "Language of the resource content",
      definition: "The base language in which the resource is written.",
      comment:
        "Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).",
      min: 0,
      max: "1",
      base: { path: "Resource.language", min: 0, max: "1" },
      type: [{ code: "code" }],
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
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet",
            valueCanonical: "http://hl7.org/fhir/ValueSet/all-languages",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "Language",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "preferred",
        description: "IETF language tag",
        valueSet: "http://hl7.org/fhir/ValueSet/languages",
      },
    },
    dataPath: "root.language",
    parentDataPath: "root",
    basePath: "root.language",
    baseId: "Endpoint.language",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      { code: "ar", display: "Arabic" },
      { code: "bn", display: "Bengali" },
      { code: "cs", display: "Czech" },
      { code: "da", display: "Danish" },
      { code: "de", display: "German" },
      { code: "de-AT", display: "German (Austria)" },
      { code: "de-CH", display: "German (Switzerland)" },
      { code: "de-DE", display: "German (Germany)" },
      { code: "el", display: "Greek" },
      { code: "en", display: "English" },
      { code: "en-AU", display: "English (Australia)" },
      { code: "en-CA", display: "English (Canada)" },
      { code: "en-GB", display: "English (Great Britain)" },
      { code: "en-IN", display: "English (India)" },
      { code: "en-NZ", display: "English (New Zeland)" },
      { code: "en-SG", display: "English (Singapore)" },
      { code: "en-US", display: "English (United States)" },
      { code: "es", display: "Spanish" },
      { code: "es-AR", display: "Spanish (Argentina)" },
      { code: "es-ES", display: "Spanish (Spain)" },
      { code: "es-UY", display: "Spanish (Uruguay)" },
      { code: "fi", display: "Finnish" },
      { code: "fr", display: "French" },
      { code: "fr-BE", display: "French (Belgium)" },
      { code: "fr-CH", display: "French (Switzerland)" },
      { code: "fr-FR", display: "French (France)" },
      { code: "fy", display: "Frysian" },
      { code: "fy-NL", display: "Frysian (Netherlands)" },
      { code: "hi", display: "Hindi" },
      { code: "hr", display: "Croatian" },
      { code: "it", display: "Italian" },
      { code: "it-CH", display: "Italian (Switzerland)" },
      { code: "it-IT", display: "Italian (Italy)" },
      { code: "ja", display: "Japanese" },
      { code: "ko", display: "Korean" },
      { code: "nl", display: "Dutch" },
      { code: "nl-BE", display: "Dutch (Belgium)" },
      { code: "nl-NL", display: "Dutch (Netherlands)" },
      { code: "no", display: "Norwegian" },
      { code: "no-NO", display: "Norwegian (Norway)" },
      { code: "pa", display: "Punjabi" },
      { code: "pl", display: "Polish" },
      { code: "pt", display: "Portuguese" },
      { code: "pt-BR", display: "Portuguese (Brazil)" },
      { code: "ru", display: "Russian" },
      { code: "ru-RU", display: "Russian (Russia)" },
      { code: "sr", display: "Serbian" },
      { code: "sr-RS", display: "Serbian (Serbia)" },
      { code: "sv", display: "Swedish" },
      { code: "sv-SE", display: "Swedish (Sweden)" },
      { code: "te", display: "Telegu" },
      { code: "zh", display: "Chinese" },
      { code: "zh-CN", display: "Chinese (China)" },
      { code: "zh-HK", display: "Chinese (Hong Kong)" },
      { code: "zh-SG", display: "Chinese (Singapore)" },
      { code: "zh-TW", display: "Chinese (Taiwan)" },
    ],
  },
  {
    element: {
      id: "Endpoint.contained",
      path: "Endpoint.contained",
      short: "Contained, inline Resources",
      definition:
        "These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.",
      comment:
        "This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.",
      alias: ["inline resources", "anonymous resources", "contained resources"],
      min: 0,
      max: "*",
      base: { path: "DomainResource.contained", min: 0, max: "*" },
      type: [{ code: "Resource" }],
      constraint: [
        {
          key: "dom-r4b",
          severity: "warning",
          human:
            "Containing new R4B resources within R4 resources may cause interoperability issues if instances are shared with R4 systems",
          expression:
            "($this is Citation or $this is Evidence or $this is EvidenceReport or $this is EvidenceVariable or $this is MedicinalProductDefinition or $this is PackagedProductDefinition or $this is AdministrableProductDefinition or $this is Ingredient or $this is ClinicalUseDefinition or $this is RegulatedAuthorization or $this is SubstanceDefinition or $this is SubscriptionStatus or $this is SubscriptionTopic) implies (%resource is Citation or %resource is Evidence or %resource is EvidenceReport or %resource is EvidenceVariable or %resource is MedicinalProductDefinition or %resource is PackagedProductDefinition or %resource is AdministrableProductDefinition or %resource is Ingredient or %resource is ClinicalUseDefinition or %resource is RegulatedAuthorization or %resource is SubstanceDefinition or %resource is SubscriptionStatus or %resource is SubscriptionTopic)",
          xpath:
            "not(f:Citation|f:Evidence|f:EvidenceReport|f:EvidenceVariable|f:MedicinalProductDefinition|f:PackagedProductDefinition|f:AdministrableProductDefinition|f:Ingredient|f:ClinicalUseDefinition|f:RegulatedAuthorization|f:SubstanceDefinition|f:SubscriptionStatus|f:SubscriptionTopic) or not(parent::f:Citation|parent::f:Evidence|parent::f:EvidenceReport|parent::f:EvidenceVariable|parent::f:MedicinalProductDefinition|parent::f:PackagedProductDefinition|parent::f:AdministrableProductDefinition|parent::f:Ingredient|parent::f:ClinicalUseDefinition|parent::f:RegulatedAuthorization|parent::f:SubstanceDefinition|f:SubscriptionStatus|f:SubscriptionTopic)",
          source: "http://hl7.org/fhir/StructureDefinition/Endpoint",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.contained[0]",
    parentDataPath: "root",
    basePath: "root.contained",
    baseId: "Endpoint.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Endpoint.status",
      path: "Endpoint.status",
      short: "active | suspended | error | off | entered-in-error | test",
      definition: "active | suspended | error | off | test.",
      comment:
        "This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid.",
      min: 1,
      max: "1",
      base: { path: "Endpoint.status", min: 1, max: "1" },
      type: [{ code: "code" }],
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
      mustSupport: false,
      isModifier: true,
      isModifierReason:
        "This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "EndpointStatus",
          },
        ],
        strength: "required",
        description: "The status of the endpoint.",
        valueSet: "http://hl7.org/fhir/ValueSet/endpoint-status|4.3.0",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.status" },
        { identity: "rim", map: "n/a" },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "Endpoint.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/endpoint-status",
        code: "active",
        display: "Active",
      },
      {
        system: "http://hl7.org/fhir/endpoint-status",
        code: "suspended",
        display: "Suspended",
      },
      {
        system: "http://hl7.org/fhir/endpoint-status",
        code: "error",
        display: "Error",
      },
      {
        system: "http://hl7.org/fhir/endpoint-status",
        code: "off",
        display: "Off",
      },
      {
        system: "http://hl7.org/fhir/endpoint-status",
        code: "entered-in-error",
        display: "Entered in error",
      },
      {
        system: "http://hl7.org/fhir/endpoint-status",
        code: "test",
        display: "Test",
      },
    ],
  },
  {
    element: {
      id: "Endpoint.connectionType",
      path: "Endpoint.connectionType",
      short:
        "Protocol/Profile/Standard to be used with this endpoint connection",
      definition:
        "A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook).",
      comment:
        "For additional connectivity details for the protocol, extensions will be used at this point, as in the XDS example.",
      min: 1,
      max: "1",
      base: { path: "Endpoint.connectionType", min: 1, max: "1" },
      type: [{ code: "Coding" }],
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
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "endpoint-contype",
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/endpoint-connection-type",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.class" },
        { identity: "rim", map: "n/a" },
      ],
    },
    dataPath: "root.connectionType",
    parentDataPath: "root",
    basePath: "root.connectionType",
    baseId: "Endpoint.connectionType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        code: "dicom-wado-rs",
        display: "DICOM WADO-RS",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        code: "dicom-qido-rs",
        display: "DICOM QIDO-RS",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        code: "dicom-stow-rs",
        display: "DICOM STOW-RS",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        code: "dicom-wado-uri",
        display: "DICOM WADO-URI",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        code: "hl7-fhir-rest",
        display: "HL7 FHIR",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        code: "hl7-fhir-msg",
        display: "HL7 FHIR Messaging",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        code: "hl7v2-mllp",
        display: "HL7 v2 MLLP",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        code: "secure-email",
        display: "Secure email",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        code: "direct-project",
        display: "Direct Project",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
        code: "cds-hooks-service",
        display: "CDS Hooks Service",
      },
    ],
  },
  {
    element: {
      id: "Endpoint.name",
      path: "Endpoint.name",
      short: "A name that this endpoint can be identified by",
      definition: "A friendly name that this endpoint can be referred to with.",
      min: 0,
      max: "1",
      base: { path: "Endpoint.name", min: 0, max: "1" },
      type: [{ code: "string" }],
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
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "w5", map: "FiveWs.what[x]" },
        { identity: "rim", map: "n/a" },
      ],
    },
    dataPath: "root.name",
    parentDataPath: "root",
    basePath: "root.name",
    baseId: "Endpoint.name",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Endpoint.contact",
      path: "Endpoint.contact",
      short: "Contact details for source (e.g. troubleshooting)",
      definition:
        "Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.",
      min: 0,
      max: "*",
      base: { path: "Endpoint.contact", min: 0, max: "*" },
      type: [{ code: "ContactPoint" }],
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
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [{ identity: "rim", map: "n/a" }],
    },
    dataPath: "root.contact[0]",
    parentDataPath: "root",
    basePath: "root.contact",
    baseId: "Endpoint.contact",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Endpoint.payloadType",
      path: "Endpoint.payloadType",
      short:
        "The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)",
      definition:
        "The payload type describes the acceptable content that can be communicated on the endpoint.",
      comment:
        "The payloadFormat describes the serialization format of the data, where the payloadType indicates the specific document/schema that is being transferred; e.g. DischargeSummary or CarePlan.",
      min: 1,
      max: "*",
      base: { path: "Endpoint.payloadType", min: 1, max: "*" },
      type: [{ code: "CodeableConcept" }],
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
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "PayloadType",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/endpoint-payload-type",
      },
      mapping: [{ identity: "rim", map: "n/a" }],
    },
    dataPath: "root.payloadType[0]",
    parentDataPath: "root",
    basePath: "root.payloadType",
    baseId: "Endpoint.payloadType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "any",
        display: "Any",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "none",
        display: "None",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:handp:2008",
        display: "History and Physical Specification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:xphr:2007",
        display: "HL7 CCD Document",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:aps:2007",
        display: "IHE Antepartum Summary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:xds-ms:2007",
        display: "XDS Medical Summaries",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:xphr:2007",
        display: "Personal Health Records",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:edr:2007",
        display: "Emergency Department Referral (EDR)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:edes:2007",
        display: "Emergency Department Encounter Summary (EDES)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:apr:handp:2008",
        display: "Antepartum Record (APR) - History and Physical",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:apr:lab:2008",
        display: "Antepartum Record (APR) - Laboratory",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:apr:edu:2008",
        display: "Antepartum Record (APR) - Education",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:irc:2008",
        display: "Immunization Registry Content (IRC)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:crc:2008",
        display: "Cancer Registry Content (CRC)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:cm:2008",
        display: "Care Management (CM)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:ic:2009",
        display: "Immunization Content (IC)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:tn:2007",
        display: "PCC TN",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:nn:2007",
        display: "PCC NN",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:ctn:2007",
        display: "PCC CTN",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:edpn:2007",
        display: "PCC EDPN",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:hp:2008",
        display: "PCC HP",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:ldhp:2009",
        display: "PCC LDHP",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:lds:2009",
        display: "PCC LDS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:mds:2009",
        display: "PCC MDS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:nds:2010",
        display: "PCC NDS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:ppvs:2010",
        display: "PCC PPVS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:trs:2011",
        display: "PCC TRS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:ets:2011",
        display: "PCC ETS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pcc:its:2011",
        display: "PCC ITS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:iti:bppc:2007",
        display: "Basic Patient Privacy Consents",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:iti:bppc-sd:2007",
        display: "Basic Patient Privacy Consents with Scanned Document",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:iti:xdw:2011:workflowDoc",
        display: "XDW Workflow Document",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:iti:dsg:detached:2014",
        display: "DSG Detached Document",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:iti:dsg:enveloping:2014",
        display: "DSG Enveloping Document",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:iti:xds-sd:pdf:2008",
        display: "PDF embedded in CDA per XDS-SD profile",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:iti:xds-sd:text:2008",
        display: "Text embedded in CDA per XDS-SD profile",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:lab:xd-lab:2008",
        display: "CDA Laboratory Report",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:rad:TEXT",
        display: "Radiology XDS-I Text",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:rad:PDF",
        display: "Radiology XDS-I PDF",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013",
        display: "Radiology XDS-I Structured CDA",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:card:imaging:2011",
        display: "Cardiac Imaging Report",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:card:CRC:2012",
        display: "Cardiology CRC",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:card:EPRC-IE:2014",
        display: "Cardiology EPRC-IE",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:dent:TEXT",
        display: "Dental Text",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:dent:PDF",
        display: "Dental PDF",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013",
        display: "Dental CDA",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:all:2010",
        display: "Anatomic Pathology Structured Report All",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:all:2010",
        display: "Anatomic Pathology Structured Report Cancer All",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:breast:2010",
        display: "Anatomic Pathology Structured Report Cancer Breast",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:colon:2010",
        display: "Anatomic Pathology Structured Report Cancer Colon",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:prostate:2010",
        display: "Anatomic Pathology Structured Report Cancer Prostate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:thyroid:2010",
        display: "Anatomic Pathology Structured Report Cancer Thyroid",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:lung:2010",
        display: "Anatomic Pathology Structured Report Cancer Lung",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:skin:2010",
        display: "Anatomic Pathology Structured Report Cancer Skin",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:kidney:2010",
        display: "Anatomic Pathology Structured Report Cancer Kidney",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:cervix:2010",
        display: "Anatomic Pathology Structured Report Cancer Cervix",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:endometrium:2010",
        display: "Anatomic Pathology Structured Report Cancer Endometrium",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:ovary:2010",
        display: "Anatomic Pathology Structured Report Cancer Ovary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:esophagus: 2010",
        display: "Anatomic Pathology Structured Report Cancer Esophagus",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:stomach: 2010",
        display: "Anatomic Pathology Structured Report Cancer Stomach",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:liver:2010",
        display: "Anatomic Pathology Structured Report Cancer Liver",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:pancreas: 2010",
        display: "Anatomic Pathology Structured Report Cancer Pancreas",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:testis:2010",
        display: "Anatomic Pathology Structured Report Cancer Testis",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:urinary_bladder:2010",
        display: "Anatomic Pathology Structured Report Cancer Urinary Bladder",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010",
        display: "Anatomic Pathology Structured Report Cancer Lip Oral Cavity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:pharynx:2010",
        display: "Anatomic Pathology Structured Report Cancer Pharynx",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:salivary_gland:2010",
        display: "Anatomic Pathology Structured Report Cancer Salivary Gland",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pat:apsr:cancer:larynx:2010",
        display: "Anatomic Pathology Structured Report Cancer Larynx",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pharm:pre:2010",
        display: "Pharmacy Pre",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pharm:padv:2010",
        display: "Pharmacy PADV",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pharm:dis:2010",
        display: "Pharmacy DIS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:ihe:pharm:pml:2013",
        display: "Pharmacy PML",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:hl7-org:sdwg:ccda-structuredBody:1.1",
        display:
          "For documents following C-CDA constraints using a structured body.",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
        code: "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",
        display:
          "For documents following C-CDA constraints using a non structured body.",
      },
    ],
  },
  {
    element: {
      id: "Endpoint.payloadMimeType",
      path: "Endpoint.payloadMimeType",
      short:
        "Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this)",
      definition:
        "The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType).",
      comment:
        "Sending the payload has obvious security consequences. The server is responsible for ensuring that the content is appropriately secured.",
      min: 0,
      max: "*",
      base: { path: "Endpoint.payloadMimeType", min: 0, max: "*" },
      type: [{ code: "code" }],
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
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
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
      mapping: [{ identity: "rim", map: "n/a" }],
    },
    dataPath: "root.payloadMimeType[0]",
    parentDataPath: "root",
    basePath: "root.payloadMimeType",
    baseId: "Endpoint.payloadMimeType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Endpoint.address",
      path: "Endpoint.address",
      short: "The technical base address for connecting to this endpoint",
      definition: "The uri that describes the actual end-point to connect to.",
      comment:
        'For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs)\n\nThis address will be to the service base, without any parameters, or sub-services or resources tacked on.\n\nE.g. for a WADO-RS endpoint, the url should be "https://pacs.hospital.org/wado-rs"\n\nand not "https://pacs.hospital.org/wado-rs/studies/1.2.250.1.59.40211.12345678.678910/series/1.2.250.1.59.40211.789001276.14556172.67789/instances/...".',
      min: 1,
      max: "1",
      base: { path: "Endpoint.address", min: 1, max: "1" },
      type: [{ code: "url" }],
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
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "n/a" }],
    },
    dataPath: "root.address",
    parentDataPath: "root",
    basePath: "root.address",
    baseId: "Endpoint.address",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Endpoint.header",
      path: "Endpoint.header",
      short: "Usage depends on the channel type",
      definition:
        "Additional headers / information to send as part of the notification.",
      comment:
        "Exactly what these mean depends on the channel type. The can convey additional information to the recipient and/or meet security requirements.",
      min: 0,
      max: "*",
      base: { path: "Endpoint.header", min: 0, max: "*" },
      type: [{ code: "string" }],
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
      mustSupport: false,
      isModifier: false,
      isSummary: false,
    },
    dataPath: "root.header[0]",
    parentDataPath: "root",
    basePath: "root.header",
    baseId: "Endpoint.header",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Endpoint",
      path: "Endpoint",
      short:
        "The technical details of an endpoint that can be used for electronic services",
      definition:
        "The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.",
      min: 0,
      max: "*",
      base: { path: "Endpoint", min: 0, max: "*" },
      constraint: [
        {
          key: "dom-2",
          severity: "error",
          human:
            "If the resource is contained in another resource, it SHALL NOT contain nested Resources",
          expression: "contained.contained.empty()",
          xpath: "not(parent::f:contained and f:contained)",
          source: "http://hl7.org/fhir/StructureDefinition/DomainResource",
        },
        {
          key: "dom-3",
          severity: "error",
          human:
            "If the resource is contained in another resource, it SHALL be referred to from elsewhere in the resource or SHALL refer to the containing resource",
          expression:
            "contained.where(((id.exists() and ('#'+id in (%resource.descendants().reference | %resource.descendants().as(canonical) | %resource.descendants().as(uri) | %resource.descendants().as(url)))) or descendants().where(reference = '#').exists() or descendants().where(as(canonical) = '#').exists() or descendants().where(as(uri) = '#').exists()).not()).trace('unmatched', id).empty()",
          xpath:
            "not(exists(for $contained in f:contained return $contained[not(exists(parent::*/descendant::f:reference/@value=concat('#', $contained/*/f:id/@value)) or exists(descendant::f:reference[@value='#']))]))",
          source: "http://hl7.org/fhir/StructureDefinition/DomainResource",
        },
        {
          key: "dom-4",
          severity: "error",
          human:
            "If a resource is contained in another resource, it SHALL NOT have a meta.versionId or a meta.lastUpdated",
          expression:
            "contained.meta.versionId.empty() and contained.meta.lastUpdated.empty()",
          xpath:
            "not(exists(f:contained/*/f:meta/f:versionId)) and not(exists(f:contained/*/f:meta/f:lastUpdated))",
          source: "http://hl7.org/fhir/StructureDefinition/DomainResource",
        },
        {
          key: "dom-5",
          severity: "error",
          human:
            "If a resource is contained in another resource, it SHALL NOT have a security label",
          expression: "contained.meta.security.empty()",
          xpath: "not(exists(f:contained/*/f:meta/f:security))",
          source: "http://hl7.org/fhir/StructureDefinition/DomainResource",
        },
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice",
              valueBoolean: true,
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice-explanation",
              valueMarkdown:
                "When a resource has no narrative, only systems that fully understand the data can display the resource to a human safely. Including a human readable representation in the resource makes for a much more robust eco-system and cheaper handling of resources by intermediary systems. Some ecosystems restrict distribution of resources to only those systems that do fully understand the resources, and as a consequence implementers may believe that the narrative is superfluous. However experience shows that such eco-systems often open up to new participants over time.",
            },
          ],
          key: "dom-6",
          severity: "warning",
          human: "A resource should have narrative for robust management",
          expression: "text.`div`.exists()",
          xpath: "exists(f:text/h:div)",
          source: "http://hl7.org/fhir/StructureDefinition/DomainResource",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "rim", map: "Entity. Role, or Act" },
        { identity: "rim", map: "n/a" },
        { identity: "w5", map: "infrastructure.exchange" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "Endpoint",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
