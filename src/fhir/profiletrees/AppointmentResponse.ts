const data = [
  {
    element: {
      id: "AppointmentResponse.meta",
      path: "AppointmentResponse.meta",
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
    baseId: "AppointmentResponse.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AppointmentResponse.implicitRules",
      path: "AppointmentResponse.implicitRules",
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
    baseId: "AppointmentResponse.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AppointmentResponse.language",
      path: "AppointmentResponse.language",
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
    baseId: "AppointmentResponse.language",
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
      id: "AppointmentResponse.contained",
      path: "AppointmentResponse.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/AppointmentResponse",
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
    baseId: "AppointmentResponse.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AppointmentResponse.appointment",
      path: "AppointmentResponse.appointment",
      short: "Appointment this response relates to",
      definition: "Appointment that this response is replying to.",
      min: 1,
      max: "1",
      base: { path: "AppointmentResponse.appointment", min: 1, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Appointment",
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
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "workflow", map: "Request.basedOn" },
        {
          identity: "rim",
          map: "scheduleRequest.ActAppointmentRequest[@moodCode &lt;= 'ARQ']",
        },
      ],
    },
    dataPath: "root.appointment",
    parentDataPath: "root",
    basePath: "root.appointment",
    baseId: "AppointmentResponse.appointment",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AppointmentResponse.start",
      path: "AppointmentResponse.start",
      short: "Time from appointment, or requested new start time",
      definition:
        "Date/Time that the appointment is to take place, or requested new start time.",
      comment:
        "This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the start time.",
      min: 0,
      max: "1",
      base: { path: "AppointmentResponse.start", min: 0, max: "1" },
      type: [{ code: "instant" }],
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
      mapping: [
        { identity: "workflow", map: "Request.occurrence[x]" },
        { identity: "w5", map: "FiveWs.init" },
        { identity: "rim", map: ".effectiveTime.low" },
      ],
    },
    dataPath: "root.start",
    parentDataPath: "root",
    basePath: "root.start",
    baseId: "AppointmentResponse.start",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AppointmentResponse.end",
      path: "AppointmentResponse.end",
      short: "Time from appointment, or requested new end time",
      definition:
        "This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.",
      min: 0,
      max: "1",
      base: { path: "AppointmentResponse.end", min: 0, max: "1" },
      type: [{ code: "instant" }],
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
      mapping: [
        { identity: "workflow", map: "Request.occurrence[x]" },
        { identity: "w5", map: "FiveWs.done[x]" },
        { identity: "rim", map: ".effectiveTime.high" },
      ],
    },
    dataPath: "root.end",
    parentDataPath: "root",
    basePath: "root.end",
    baseId: "AppointmentResponse.end",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AppointmentResponse.participantType",
      path: "AppointmentResponse.participantType",
      short: "Role of participant in the appointment",
      definition: "Role of participant in the appointment.",
      comment:
        "The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointment.\r\rIf the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.\r\rThis value SHALL be the same as specified on the referenced Appointment so that they can be matched, and subsequently updated.",
      min: 0,
      max: "*",
      base: { path: "AppointmentResponse.participantType", min: 0, max: "*" },
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
            valueString: "ParticipantType",
          },
        ],
        strength: "extensible",
        description: "Role of participant in encounter.",
        valueSet: "http://hl7.org/fhir/ValueSet/encounter-participant-type",
      },
      mapping: [
        { identity: "workflow", map: "Request.performerType" },
        {
          identity: "rim",
          map: "(performer | reusableDevice | subject | location).@typeCode",
        },
        { identity: "ical", map: "n/a" },
      ],
    },
    dataPath: "root.participantType[0]",
    parentDataPath: "root",
    basePath: "root.participantType",
    baseId: "AppointmentResponse.participantType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PART",
        display: "Participation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "_ParticipationAncillary",
        display: "ParticipationAncillary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ADM",
        display: "admitter",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ATND",
        display: "attender",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "CALLBCK",
        display: "callback contact",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "CON",
        display: "consultant",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "DIS",
        display: "discharger",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ESC",
        display: "escort",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "REF",
        display: "referrer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "_ParticipationInformationGenerator",
        display: "ParticipationInformationGenerator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "AUT",
        display: "author (originator)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "INF",
        display: "informant",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "TRANS",
        display: "Transcriber",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ENT",
        display: "data entry person",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "WIT",
        display: "witness",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "NOTARY",
        display: "notary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "CST",
        display: "custodian",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "DIR",
        display: "direct target",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ALY",
        display: "analyte",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "BBY",
        display: "baby",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "CAT",
        display: "catalyst",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "CSM",
        display: "consumable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "TPA",
        display: "therapeutic agent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "DEV",
        display: "device",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "NRD",
        display: "non-reuseable device",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "RDV",
        display: "reusable device",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "DON",
        display: "donor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "EXPAGNT",
        display: "ExposureAgent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "EXPART",
        display: "ExposureParticipation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "EXPTRGT",
        display: "ExposureTarget",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "EXSRC",
        display: "ExposureSource",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PRD",
        display: "product",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "SBJ",
        display: "subject",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "SPC",
        display: "specimen",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "IND",
        display: "indirect target",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "BEN",
        display: "beneficiary",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "CAGNT",
        display: "causative agent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "COV",
        display: "coverage target",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "GUAR",
        display: "guarantor party",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "HLD",
        display: "holder",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "RCT",
        display: "record target",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "RCV",
        display: "receiver",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "IRCP",
        display: "information recipient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "NOT",
        display: "ugent notification contact",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PRCP",
        display: "primary information recipient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "REFB",
        display: "Referred By",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "REFT",
        display: "Referred to",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "TRC",
        display: "tracker",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "LOC",
        display: "location",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "DST",
        display: "destination",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ELOC",
        display: "entry location",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "ORG",
        display: "origin",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "RML",
        display: "remote",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "VIA",
        display: "via",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PRF",
        display: "performer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "DIST",
        display: "distributor",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PPRF",
        display: "primary performer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "SPRF",
        display: "secondary performer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "RESP",
        display: "responsible party",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "VRF",
        display: "verifier",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "AUTHEN",
        display: "authenticator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "LA",
        display: "legal authenticator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "SPRF",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PPRF",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        code: "PART",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/participant-type",
        code: "translator",
        display: "Translator",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/participant-type",
        code: "emergency",
        display: "Emergency",
      },
    ],
  },
  {
    element: {
      id: "AppointmentResponse.participantStatus",
      path: "AppointmentResponse.participantStatus",
      short: "accepted | declined | tentative | needs-action",
      definition:
        "Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.",
      comment:
        "This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.",
      min: 1,
      max: "1",
      base: { path: "AppointmentResponse.participantStatus", min: 1, max: "1" },
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
      isModifierReason: "Not known why this is labelled a modifier",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "ParticipantStatus",
          },
        ],
        strength: "required",
        description: "The Participation status of an appointment.",
        valueSet: "http://hl7.org/fhir/ValueSet/participationstatus|4.3.0",
      },
      mapping: [
        { identity: "workflow", map: "Request.status" },
        {
          identity: "rim",
          map: "(performer | reusableDevice | subject | location).statusCode",
        },
        {
          identity: "ical",
          map: 'ATTENDEE;CN="Brian Postlethwaite";RSVP=TRUE:mailto:BPostlethwaite@data.com (rsvpparam | partstatparam)',
        },
      ],
    },
    dataPath: "root.participantStatus",
    parentDataPath: "root",
    basePath: "root.participantStatus",
    baseId: "AppointmentResponse.participantStatus",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/participationstatus",
        code: "accepted",
        display: "Accepted",
      },
      {
        system: "http://hl7.org/fhir/participationstatus",
        code: "declined",
        display: "Declined",
      },
      {
        system: "http://hl7.org/fhir/participationstatus",
        code: "tentative",
        display: "Tentative",
      },
      {
        system: "http://hl7.org/fhir/participationstatus",
        code: "needs-action",
        display: "Needs Action",
      },
    ],
  },
  {
    element: {
      id: "AppointmentResponse.comment",
      path: "AppointmentResponse.comment",
      short: "Additional comments",
      definition: "Additional comments about the appointment.",
      comment:
        "This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.",
      min: 0,
      max: "1",
      base: { path: "AppointmentResponse.comment", min: 0, max: "1" },
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
      mapping: [
        { identity: "workflow", map: "Request.note" },
        {
          identity: "rim",
          map: ".subjectOf.observation[@moodCode = 'EVN'][code = 'annotation'].value",
        },
        { identity: "ical", map: "COMMENT" },
      ],
    },
    dataPath: "root.comment",
    parentDataPath: "root",
    basePath: "root.comment",
    baseId: "AppointmentResponse.comment",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AppointmentResponse",
      path: "AppointmentResponse",
      short:
        "A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection",
      definition:
        "A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.",
      min: 0,
      max: "*",
      base: { path: "AppointmentResponse", min: 0, max: "*" },
      constraint: [
        {
          key: "apr-1",
          severity: "error",
          human: "Either the participantType or actor must be specified",
          expression: "participantType.exists() or actor.exists()",
          xpath: "(exists(f:participantType) or exists(f:actor))",
          source: "http://hl7.org/fhir/StructureDefinition/AppointmentResponse",
        },
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
        { identity: "workflow", map: "Request" },
        { identity: "rim", map: "Appointment[@moodCode &lt;= 'PRMS']" },
        { identity: "ical", map: "VEVENT" },
        { identity: "w5", map: "workflow.scheduling" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "AppointmentResponse",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;