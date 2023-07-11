const data = [
  {
    element: {
      id: "MedicationRequest.meta",
      path: "MedicationRequest.meta",
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
    baseId: "MedicationRequest.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.implicitRules",
      path: "MedicationRequest.implicitRules",
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
    baseId: "MedicationRequest.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.language",
      path: "MedicationRequest.language",
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
    baseId: "MedicationRequest.language",
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
      id: "MedicationRequest.contained",
      path: "MedicationRequest.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
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
    baseId: "MedicationRequest.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.status",
      path: "MedicationRequest.status",
      short:
        "active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown",
      definition:
        "A code specifying the current state of the order.  Generally, this will be active or completed state.",
      comment:
        "This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.",
      min: 1,
      max: "1",
      base: { path: "MedicationRequest.status", min: 1, max: "1" },
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
        "This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationRequestStatus",
          },
        ],
        strength: "required",
        description:
          "A coded concept specifying the state of the prescribing event. Describes the lifecycle of the prescription.",
        valueSet: "http://hl7.org/fhir/ValueSet/medicationrequest-status|4.3.0",
      },
      mapping: [
        { identity: "workflow", map: "Request.status" },
        { identity: "script10.6", map: "no mapping" },
        { identity: "w5", map: "FiveWs.status" },
        { identity: "rim", map: ".statusCode" },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "MedicationRequest.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
        code: "active",
        display: "Active",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
        code: "on-hold",
        display: "On Hold",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
        code: "cancelled",
        display: "Cancelled",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
        code: "completed",
        display: "Completed",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
        code: "entered-in-error",
        display: "Entered in Error",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
        code: "stopped",
        display: "Stopped",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
        code: "draft",
        display: "Draft",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
        code: "unknown",
        display: "Unknown",
      },
    ],
  },
  {
    element: {
      id: "MedicationRequest.statusReason",
      path: "MedicationRequest.statusReason",
      short: "Reason for current status",
      definition:
        "Captures the reason for the current state of the MedicationRequest.",
      comment:
        'This is generally only used for "exception" statuses such as "suspended" or "cancelled". The reason why the MedicationRequest was created at all is captured in reasonCode, not here.',
      min: 0,
      max: "1",
      base: { path: "MedicationRequest.statusReason", min: 0, max: "1" },
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
      isSummary: false,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationRequestStatusReason",
          },
        ],
        strength: "example",
        description: "Identifies the reasons for a given status.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/medicationrequest-status-reason",
      },
      mapping: [
        { identity: "workflow", map: "Request.statusReason" },
        {
          identity: "rim",
          map: ".inboundRelationship[typeCode=SUBJ].source[classCode=CACT, moodCode=EVN].reasonCOde",
        },
      ],
    },
    dataPath: "root.statusReason",
    parentDataPath: "root",
    basePath: "root.statusReason",
    baseId: "MedicationRequest.statusReason",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "altchoice",
        display: "Try another treatment first",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "clarif",
        display: "Prescription requires clarification",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "drughigh",
        display: "Drug level too high",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "hospadm",
        display: "Admission to hospital",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "labint",
        display: "Lab interference issues",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "non-avail",
        display: "Patient not available",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "preg",
        display: "Parent is pregnant/breast feeding",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "salg",
        display: "Allergy",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "sddi",
        display: "Drug interacts with another drug",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "sdupther",
        display: "Duplicate therapy",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "sintol",
        display: "Suspected intolerance",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "surg",
        display: "Patient scheduled for surgery.",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
        code: "washout",
        display: "Waiting for old drug to wash out",
      },
    ],
  },
  {
    element: {
      id: "MedicationRequest.intent",
      path: "MedicationRequest.intent",
      short:
        "proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option",
      definition:
        "Whether the request is a proposal, plan, or an original order.",
      comment:
        "It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only.\r\rAn instance-order is an instantiation of a request or order and may be used to populate Medication Administration Record.\r\rThis element is labeled as a modifier because the intent alters when and how the resource is actually applicable.",
      min: 1,
      max: "1",
      base: { path: "MedicationRequest.intent", min: 1, max: "1" },
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
        'This element changes the interpretation of all descriptive attributes. For example "the time the request is recommended to occur" vs. "the time the request is authorized to occur" or "who is recommended to perform the request" vs. "who is authorized to perform the request',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationRequestIntent",
          },
        ],
        strength: "required",
        description: "The kind of medication order.",
        valueSet: "http://hl7.org/fhir/ValueSet/medicationrequest-intent|4.3.0",
      },
      mapping: [
        { identity: "workflow", map: "Request.intent" },
        { identity: "w5", map: "FiveWs.class" },
        {
          identity: "rim",
          map: ".moodCode (nuances beyond PRP/PLAN/RQO would need to be elsewhere)",
        },
      ],
    },
    dataPath: "root.intent",
    parentDataPath: "root",
    basePath: "root.intent",
    baseId: "MedicationRequest.intent",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
        code: "proposal",
        display: "Proposal",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
        code: "plan",
        display: "Plan",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
        code: "order",
        display: "Order",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
        code: "original-order",
        display: "Original Order",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
        code: "reflex-order",
        display: "Reflex Order",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
        code: "filler-order",
        display: "Filler Order",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
        code: "instance-order",
        display: "Instance Order",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
        code: "option",
        display: "Option",
      },
    ],
  },
  {
    element: {
      id: "MedicationRequest.category",
      path: "MedicationRequest.category",
      short: "Type of medication usage",
      definition:
        "Indicates the type of medication request (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)).",
      comment:
        "The category can be used to include where the medication is expected to be consumed or other types of requests.",
      min: 0,
      max: "*",
      base: { path: "MedicationRequest.category", min: 0, max: "*" },
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
      isSummary: false,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationRequestCategory",
          },
        ],
        strength: "example",
        description:
          "A coded concept identifying the category of medication request.  For example, where the medication is to be consumed or administered, or the type of medication treatment.",
        valueSet: "http://hl7.org/fhir/ValueSet/medicationrequest-category",
      },
      mapping: [
        {
          identity: "script10.6",
          map: "Message/Body/NewRx/MedicationPrescribed/Directions\r\ror \r\rMessage/Body/NewRx/MedicationPrescribed/StructuredSIG",
        },
        { identity: "w5", map: "FiveWs.class" },
        {
          identity: "rim",
          map: '.inboundRelationship[typeCode=COMP].source[classCode=OBS, moodCode=EVN, code="type of medication usage"].value',
        },
      ],
    },
    dataPath: "root.category[0]",
    parentDataPath: "root",
    basePath: "root.category",
    baseId: "MedicationRequest.category",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
        code: "inpatient",
        display: "Inpatient",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
        code: "outpatient",
        display: "Outpatient",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
        code: "community",
        display: "Community",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
        code: "discharge",
        display: "Discharge",
      },
    ],
  },
  {
    element: {
      id: "MedicationRequest.priority",
      path: "MedicationRequest.priority",
      short: "routine | urgent | asap | stat",
      definition:
        "Indicates how quickly the Medication Request should be addressed with respect to other requests.",
      min: 0,
      max: "1",
      base: { path: "MedicationRequest.priority", min: 0, max: "1" },
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
            valueString: "MedicationRequestPriority",
          },
        ],
        strength: "required",
        description:
          "Identifies the level of importance to be assigned to actioning the request.",
        valueSet: "http://hl7.org/fhir/ValueSet/request-priority|4.3.0",
      },
      mapping: [
        { identity: "workflow", map: "Request.priority" },
        { identity: "w5", map: "FiveWs.grade" },
        { identity: "rim", map: ".priorityCode" },
      ],
    },
    dataPath: "root.priority",
    parentDataPath: "root",
    basePath: "root.priority",
    baseId: "MedicationRequest.priority",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/request-priority",
        code: "routine",
        display: "Routine",
      },
      {
        system: "http://hl7.org/fhir/request-priority",
        code: "urgent",
        display: "Urgent",
      },
      {
        system: "http://hl7.org/fhir/request-priority",
        code: "asap",
        display: "ASAP",
      },
      {
        system: "http://hl7.org/fhir/request-priority",
        code: "stat",
        display: "STAT",
      },
    ],
  },
  {
    element: {
      id: "MedicationRequest.doNotPerform",
      path: "MedicationRequest.doNotPerform",
      short: "True if request is prohibiting action",
      definition:
        "If true indicates that the provider is asking for the medication request not to occur.",
      comment:
        'If do not perform is not specified, the request is a positive request e.g. "do perform".',
      min: 0,
      max: "1",
      base: { path: "MedicationRequest.doNotPerform", min: 0, max: "1" },
      type: [{ code: "boolean" }],
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
        "This element is labeled as a modifier because this element negates the request to occur (ie, this is a request for the medication not to be ordered or prescribed, etc)",
      isSummary: true,
      mapping: [
        { identity: "rim", map: "SubstanceAdministration.actionNegationInd" },
      ],
    },
    dataPath: "root.doNotPerform",
    parentDataPath: "root",
    basePath: "root.doNotPerform",
    baseId: "MedicationRequest.doNotPerform",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.medication[x]",
      path: "MedicationRequest.medication[x]",
      short: "Medication to be taken",
      definition:
        "Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.",
      comment:
        "If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.",
      min: 1,
      max: "1",
      base: { path: "MedicationRequest.medication[x]", min: 1, max: "1" },
      type: [
        { code: "CodeableConcept" },
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Medication"],
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
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationCode",
          },
        ],
        strength: "example",
        description:
          "A coded concept identifying substance or product that can be ordered.",
        valueSet: "http://hl7.org/fhir/ValueSet/medication-codes",
      },
      mapping: [
        { identity: "workflow", map: "Request.code" },
        {
          identity: "script10.6",
          map: "Message/Body/NewRx/MedicationPrescribed\r\rMedication.code.coding.code = Message/Body/NewRx/MedicationPrescribed/DrugCoded/ProductCode\r\rMedication.code.coding.system = Message/Body/NewRx/MedicationPrescribed/DrugCoded/ProductCodeQualifier\r\rMedication.code.coding.display = Message/Body/NewRx/MedicationPrescribed/DrugDescription",
        },
        { identity: "w5", map: "FiveWs.what[x]" },
        {
          identity: "v2",
          map: "RXE-2-Give Code / RXO-1-Requested Give Code / RXC-2-Component Code",
        },
        { identity: "rim", map: "consumable.administrableMedication" },
      ],
    },
    dataPath: "root.medication[x]",
    parentDataPath: "root",
    basePath: "root.medication[x]",
    baseId: "MedicationRequest.medication[x]",
    isPrimitive: false,
    childPaths: [],
    multiTypeType: "CodeableConcept",
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.encounter",
      path: "MedicationRequest.encounter",
      short: "Encounter created as part of encounter/admission/stay",
      definition:
        "The Encounter during which this [x] was created or to which the creation of this record is tightly associated.",
      comment:
        'This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter."    If there is a need to link to episodes of care they will be handled with an extension.',
      min: 0,
      max: "1",
      base: { path: "MedicationRequest.encounter", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
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
      isSummary: false,
      mapping: [
        { identity: "workflow", map: "Request.context" },
        { identity: "script10.6", map: "no mapping" },
        { identity: "w5", map: "FiveWs.context" },
        { identity: "v2", map: "PV1-19-Visit Number" },
        {
          identity: "rim",
          map: '.inboundRelationship[typeCode=COMP].source[classCode=ENC, moodCode=EVN, code="type of encounter or episode"]',
        },
      ],
    },
    dataPath: "root.encounter",
    parentDataPath: "root",
    basePath: "root.encounter",
    baseId: "MedicationRequest.encounter",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.authoredOn",
      path: "MedicationRequest.authoredOn",
      short: "When request was initially authored",
      definition:
        "The date (and perhaps time) when the prescription was initially written or authored on.",
      min: 0,
      max: "1",
      base: { path: "MedicationRequest.authoredOn", min: 0, max: "1" },
      type: [{ code: "dateTime" }],
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
        { identity: "workflow", map: "Request.authoredOn" },
        {
          identity: "script10.6",
          map: "Message/Body/NewRx/MedicationPrescribed/WrittenDate",
        },
        { identity: "w5", map: "FiveWs.recorded" },
        {
          identity: "v2",
          map: "RXE-32-Original Order Date/Time / ORC-9-Date/Time of Transaction",
        },
        { identity: "rim", map: "author.time" },
      ],
    },
    dataPath: "root.authoredOn",
    parentDataPath: "root",
    basePath: "root.authoredOn",
    baseId: "MedicationRequest.authoredOn",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.performer",
      path: "MedicationRequest.performer",
      short: "Intended performer of administration",
      definition:
        "The specified desired performer of the medication treatment (e.g. the performer of the medication administration).",
      min: 0,
      max: "1",
      base: { path: "MedicationRequest.performer", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Practitioner",
            "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
            "http://hl7.org/fhir/StructureDefinition/Organization",
            "http://hl7.org/fhir/StructureDefinition/Patient",
            "http://hl7.org/fhir/StructureDefinition/Device",
            "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
            "http://hl7.org/fhir/StructureDefinition/CareTeam",
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
      isSummary: false,
      mapping: [
        { identity: "workflow", map: "Request.performer" },
        { identity: "w5", map: "FiveWs.actor" },
        {
          identity: "rim",
          map: ".participation[typeCode=PRF].role[scoper.determinerCode=INSTANCE]",
        },
      ],
    },
    dataPath: "root.performer",
    parentDataPath: "root",
    basePath: "root.performer",
    baseId: "MedicationRequest.performer",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.recorder",
      path: "MedicationRequest.recorder",
      short: "Person who entered the request",
      definition:
        "The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.",
      min: 0,
      max: "1",
      base: { path: "MedicationRequest.recorder", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Practitioner",
            "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
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
      isSummary: false,
      mapping: [
        { identity: "w5", map: "FiveWs.who" },
        {
          identity: "rim",
          map: ".participation[typeCode=TRANS].role[classCode=ASSIGNED].code (HealthcareProviderType)",
        },
      ],
    },
    dataPath: "root.recorder",
    parentDataPath: "root",
    basePath: "root.recorder",
    baseId: "MedicationRequest.recorder",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.reasonReference",
      path: "MedicationRequest.reasonReference",
      short:
        "Condition or observation that supports why the prescription is being written",
      definition:
        "Condition or observation that supports why the medication was ordered.",
      comment:
        "This is a reference to a condition or observation that is the reason for the medication order.  If only a code exists, use reasonCode.",
      min: 0,
      max: "*",
      base: { path: "MedicationRequest.reasonReference", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Condition",
            "http://hl7.org/fhir/StructureDefinition/Observation",
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
      isSummary: false,
      mapping: [
        { identity: "workflow", map: "Request.reasonReference" },
        { identity: "script10.6", map: "no mapping" },
        { identity: "w5", map: "FiveWs.why[x]" },
        { identity: "rim", map: "reason.observation[code=ASSERTION].value" },
      ],
    },
    dataPath: "root.reasonReference[0]",
    parentDataPath: "root",
    basePath: "root.reasonReference",
    baseId: "MedicationRequest.reasonReference",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.instantiatesCanonical",
      path: "MedicationRequest.instantiatesCanonical",
      short: "Instantiates FHIR protocol or definition",
      definition:
        "The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationRequest.instantiatesCanonical",
        min: 0,
        max: "*",
      },
      type: [{ code: "canonical" }],
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
        { identity: "workflow", map: "Request.instantiates" },
        { identity: "rim", map: ".outboundRelationship[typeCode=DEFN].target" },
      ],
    },
    dataPath: "root.instantiatesCanonical[0]",
    parentDataPath: "root",
    basePath: "root.instantiatesCanonical",
    baseId: "MedicationRequest.instantiatesCanonical",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.instantiatesUri",
      path: "MedicationRequest.instantiatesUri",
      short: "Instantiates external protocol or definition",
      definition:
        "The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.",
      min: 0,
      max: "*",
      base: { path: "MedicationRequest.instantiatesUri", min: 0, max: "*" },
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
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "rim", map: ".outboundRelationship[typeCode=DEFN].target" },
      ],
    },
    dataPath: "root.instantiatesUri[0]",
    parentDataPath: "root",
    basePath: "root.instantiatesUri",
    baseId: "MedicationRequest.instantiatesUri",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.groupIdentifier",
      path: "MedicationRequest.groupIdentifier",
      short: "Composite request this is part of",
      definition:
        "A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.",
      requirements:
        'Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition. Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.',
      min: 0,
      max: "1",
      base: { path: "MedicationRequest.groupIdentifier", min: 0, max: "1" },
      type: [{ code: "Identifier" }],
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
        { identity: "workflow", map: "Request.groupIdentifier" },
        {
          identity: "rim",
          map: ".outboundRelationship(typeCode=COMP].target[classCode=SBADM, moodCode=INT].id",
        },
      ],
    },
    dataPath: "root.groupIdentifier",
    parentDataPath: "root",
    basePath: "root.groupIdentifier",
    baseId: "MedicationRequest.groupIdentifier",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.courseOfTherapyType",
      path: "MedicationRequest.courseOfTherapyType",
      short: "Overall pattern of medication administration",
      definition:
        "The description of the overall patte3rn of the administration of the medication to the patient.",
      comment:
        "This attribute should not be confused with the protocol of the medication.",
      min: 0,
      max: "1",
      base: { path: "MedicationRequest.courseOfTherapyType", min: 0, max: "1" },
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
      isSummary: false,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationRequestCourseOfTherapy",
          },
        ],
        strength: "example",
        description:
          "Identifies the overall pattern of medication administratio.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/medicationrequest-course-of-therapy",
      },
      mapping: [
        {
          identity: "rim",
          map: "Act.code where classCode = LIST and moodCode = EVN",
        },
      ],
    },
    dataPath: "root.courseOfTherapyType",
    parentDataPath: "root",
    basePath: "root.courseOfTherapyType",
    baseId: "MedicationRequest.courseOfTherapyType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
        code: "continuous",
        display: "Continuous long term therapy",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
        code: "acute",
        display: "Short course (acute) therapy",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
        code: "seasonal",
        display: "Seasonal",
      },
    ],
  },
  {
    element: {
      id: "MedicationRequest.note",
      path: "MedicationRequest.note",
      short: "Information about the prescription",
      definition:
        "Extra information about the prescription that could not be conveyed by the other attributes.",
      min: 0,
      max: "*",
      base: { path: "MedicationRequest.note", min: 0, max: "*" },
      type: [{ code: "Annotation" }],
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
          identity: "script10.6",
          map: "Message/Body/NewRx/MedicationPrescribed/Note",
        },
        {
          identity: "rim",
          map: '.inboundRelationship[typeCode=SUBJ]/source[classCode=OBS,moodCode=EVN,code="annotation"].value',
        },
      ],
    },
    dataPath: "root.note[0]",
    parentDataPath: "root",
    basePath: "root.note",
    baseId: "MedicationRequest.note",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.dispenseRequest",
      path: "MedicationRequest.dispenseRequest",
      short: "Medication supply authorization",
      definition:
        "Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.",
      min: 0,
      max: "1",
      base: { path: "MedicationRequest.dispenseRequest", min: 0, max: "1" },
      type: [{ code: "BackboneElement" }],
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
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        {
          identity: "script10.6",
          map: "Message/Body/NewRx/MedicationPrescribed/ExpirationDate",
        },
        { identity: "rim", map: "component.supplyEvent" },
      ],
    },
    dataPath: "root.dispenseRequest",
    parentDataPath: "root",
    basePath: "root.dispenseRequest",
    baseId: "MedicationRequest.dispenseRequest",
    isPrimitive: false,
    childPaths: [
      "root.dispenseRequest.initialFill",
      "root.dispenseRequest.dispenseInterval",
      "root.dispenseRequest.validityPeriod",
      "root.dispenseRequest.numberOfRepeatsAllowed",
      "root.dispenseRequest.quantity",
      "root.dispenseRequest.expectedSupplyDuration",
      "root.dispenseRequest.performer",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.dispenseRequest.initialFill",
      path: "MedicationRequest.dispenseRequest.initialFill",
      short: "First fill details",
      definition:
        "Indicates the quantity or duration for the first dispense of the medication.",
      comment:
        "If populating this element, either the quantity or the duration must be included.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationRequest.dispenseRequest.initialFill",
        min: 0,
        max: "1",
      },
      type: [{ code: "BackboneElement" }],
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
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        {
          identity: "rim",
          map: "SubstanceAdministration -> ActRelationship[sequenceNumber = '1'] -> Supply",
        },
      ],
    },
    dataPath: "root.dispenseRequest.initialFill",
    parentDataPath: "root.dispenseRequest",
    basePath: "root.initialFill",
    baseId: "MedicationRequest.dispenseRequest.initialFill",
    isPrimitive: false,
    childPaths: [
      "root.dispenseRequest.initialFill.quantity",
      "root.dispenseRequest.initialFill.duration",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.dispenseRequest.initialFill.duration",
      path: "MedicationRequest.dispenseRequest.initialFill.duration",
      short: "First fill duration",
      definition:
        "The length of time that the first dispense is expected to last.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationRequest.dispenseRequest.initialFill.duration",
        min: 0,
        max: "1",
      },
      type: [{ code: "Duration" }],
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
      mapping: [{ identity: "rim", map: "Supply.effectivetime[moodCode=RQO]" }],
    },
    dataPath: "root.dispenseRequest.initialFill.duration",
    parentDataPath: "root.dispenseRequest.initialFill",
    basePath: "root.duration",
    baseId: "MedicationRequest.dispenseRequest.initialFill.duration",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.dispenseRequest.validityPeriod",
      path: "MedicationRequest.dispenseRequest.validityPeriod",
      short: "Time period supply is authorized for",
      definition:
        "This indicates the validity period of a prescription (stale dating the Prescription).",
      comment:
        "It reflects the prescribers' perspective for the validity of the prescription. Dispenses must not be made against the prescription outside of this period. The lower-bound of the Dispensing Window signifies the earliest date that the prescription can be filled for the first time. If an upper-bound is not specified then the Prescription is open-ended or will default to a stale-date based on regulations.",
      requirements:
        "Indicates when the Prescription becomes valid, and when it ceases to be a dispensable Prescription.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationRequest.dispenseRequest.validityPeriod",
        min: 0,
        max: "1",
      },
      type: [{ code: "Period" }],
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
        {
          identity: "script10.6",
          map: "Message/Body/NewRx/MedicationPrescribed/Refills",
        },
        { identity: "rim", map: "effectiveTime" },
      ],
    },
    dataPath: "root.dispenseRequest.validityPeriod",
    parentDataPath: "root.dispenseRequest",
    basePath: "root.validityPeriod",
    baseId: "MedicationRequest.dispenseRequest.validityPeriod",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.dispenseRequest.numberOfRepeatsAllowed",
      path: "MedicationRequest.dispenseRequest.numberOfRepeatsAllowed",
      short: "Number of refills authorized",
      definition:
        'An integer indicating the number of times, in addition to the original dispense, (aka refills or repeats) that the patient can receive the prescribed medication. Usage Notes: This integer does not include the original order dispense. This means that if an order indicates dispense 30 tablets plus "3 repeats", then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.  A prescriber may explicitly say that zero refills are permitted after the initial dispense.',
      comment:
        'If displaying "number of authorized fills", add 1 to this number.',
      min: 0,
      max: "1",
      base: {
        path: "MedicationRequest.dispenseRequest.numberOfRepeatsAllowed",
        min: 0,
        max: "1",
      },
      type: [{ code: "unsignedInt" }],
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
        {
          identity: "script10.6",
          map: "Message/Body/NewRx/MedicationPrescribed/Quantity",
        },
        { identity: "v2", map: "RXE-12-Number of Refills" },
        { identity: "rim", map: "repeatNumber" },
      ],
    },
    dataPath: "root.dispenseRequest.numberOfRepeatsAllowed",
    parentDataPath: "root.dispenseRequest",
    basePath: "root.numberOfRepeatsAllowed",
    baseId: "MedicationRequest.dispenseRequest.numberOfRepeatsAllowed",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.dispenseRequest.expectedSupplyDuration",
      path: "MedicationRequest.dispenseRequest.expectedSupplyDuration",
      short: "Number of days supply per dispense",
      definition:
        "Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.",
      comment:
        "In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is expected to last, rather than the physical quantity issued, e.g. 90 days supply of medication (based on an ordered dosage). When possible, it is always better to specify quantity, as this tends to be more precise. expectedSupplyDuration will always be an estimate that can be influenced by external factors.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationRequest.dispenseRequest.expectedSupplyDuration",
        min: 0,
        max: "1",
      },
      type: [{ code: "Duration" }],
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
        {
          identity: "script10.6",
          map: "Message/Body/NewRx/MedicationPrescribed/Substitutions",
        },
        { identity: "rim", map: "expectedUseTime" },
      ],
    },
    dataPath: "root.dispenseRequest.expectedSupplyDuration",
    parentDataPath: "root.dispenseRequest",
    basePath: "root.expectedSupplyDuration",
    baseId: "MedicationRequest.dispenseRequest.expectedSupplyDuration",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.substitution",
      path: "MedicationRequest.substitution",
      short: "Any restrictions on medication substitution",
      definition:
        "Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.",
      min: 0,
      max: "1",
      base: { path: "MedicationRequest.substitution", min: 0, max: "1" },
      type: [{ code: "BackboneElement" }],
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
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        {
          identity: "script10.6",
          map: "specific values within Message/Body/NewRx/MedicationPrescribed/Substitutions",
        },
        { identity: "rim", map: "subjectOf.substitutionPersmission" },
      ],
    },
    dataPath: "root.substitution",
    parentDataPath: "root",
    basePath: "root.substitution",
    baseId: "MedicationRequest.substitution",
    isPrimitive: false,
    childPaths: ["root.substitution.allowed[x]", "root.substitution.reason"],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest.substitution.allowed[x]",
      path: "MedicationRequest.substitution.allowed[x]",
      short: "Whether substitution is allowed or not",
      definition:
        "True if the prescriber allows a different drug to be dispensed from what was prescribed.",
      comment:
        "This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.",
      min: 1,
      max: "1",
      base: {
        path: "MedicationRequest.substitution.allowed[x]",
        min: 1,
        max: "1",
      },
      type: [{ code: "boolean" }, { code: "CodeableConcept" }],
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
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationRequestSubstitution",
          },
        ],
        strength: "example",
        description: "Identifies the type of substitution allowed.",
        valueSet:
          "http://terminology.hl7.org/ValueSet/v3-ActSubstanceAdminSubstitutionCode",
      },
      mapping: [
        {
          identity: "script10.6",
          map: "specific values within Message/Body/NewRx/MedicationPrescribed/Substitutions",
        },
        {
          identity: "v2",
          map: "RXO-9-Allow Substitutions / RXE-9-Substitution Status",
        },
        { identity: "rim", map: "code" },
      ],
    },
    dataPath: "root.substitution.allowed[x]",
    parentDataPath: "root.substitution",
    basePath: "root.allowed[x]",
    baseId: "MedicationRequest.substitution.allowed[x]",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
        code: "_ActSubstanceAdminSubstitutionCode",
        display: "ActSubstanceAdminSubstitutionCode",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
        code: "E",
        display: "equivalent",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
        code: "EC",
        display: "equivalent composition",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
        code: "BC",
        display: "brand composition",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
        code: "G",
        display: "generic composition",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
        code: "TE",
        display: "therapeutic alternative",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
        code: "TB",
        display: "therapeutic brand",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
        code: "TG",
        display: "therapeutic generic",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
        code: "F",
        display: "formulary",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
        code: "N",
        display: "none",
      },
    ],
  },
  {
    element: {
      id: "MedicationRequest.substitution.reason",
      path: "MedicationRequest.substitution.reason",
      short: "Why should (not) substitution be made",
      definition:
        "Indicates the reason for the substitution, or why substitution must or must not be performed.",
      min: 0,
      max: "1",
      base: { path: "MedicationRequest.substitution.reason", min: 0, max: "1" },
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
      isSummary: false,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationIntendedSubstitutionReason",
          },
        ],
        strength: "example",
        description: "SubstanceAdminSubstitutionReason",
        valueSet:
          "http://terminology.hl7.org/ValueSet/v3-SubstanceAdminSubstitutionReason",
      },
      mapping: [
        { identity: "script10.6", map: "not mapped" },
        { identity: "v2", map: "RXE-9 Substition status" },
        { identity: "rim", map: "reasonCode" },
      ],
    },
    dataPath: "root.substitution.reason",
    parentDataPath: "root.substitution",
    basePath: "root.reason",
    baseId: "MedicationRequest.substitution.reason",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActAccommodationReason",
        display: "ActAccommodationReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActCoverageReason",
        display: "ActCoverageReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActInformationManagementReason",
        display: "ActInformationManagementReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActInvalidReason",
        display: "ActInvalidReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActInvoiceCancelReason",
        display: "ActInvoiceCancelReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActNoImmunizationReason",
        display: "ActNoImmunizationReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActSupplyFulfillmentRefusalReason",
        display: "ActSupplyFulfillmentRefusalReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ClinicalResearchEventReason",
        display: "ClinicalResearchEventReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ClinicalResearchObservationReason",
        display: "ClinicalResearchObservationReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_CombinedPharmacyOrderSuspendReasonCode",
        display: "CombinedPharmacyOrderSuspendReasonCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ControlActNullificationReasonCode",
        display: "ControlActNullificationReasonCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ControlActNullificationRefusalReasonType",
        display: "ControlActNullificationRefusalReasonType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ControlActReason",
        display: "ControlActReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_GenericUpdateReasonCode",
        display: "GenericUpdateReasonCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_PatientProfileQueryReasonCode",
        display: "patient profile query reason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_PharmacySupplyRequestFulfillerRevisionRefusalReasonCode",
        display: "PharmacySupplyRequestFulfillerRevisionRefusalReasonCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_RefusalReasonCode",
        display: "RefusalReasonCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_SchedulingActReason",
        display: "SchedulingActReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_StatusRevisionRefusalReasonCode",
        display: "StatusRevisionRefusalReasonCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_SubstanceAdministrationPermissionRefusalReasonCode",
        display: "SubstanceAdministrationPermissionRefusalReasonCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_SubstanceAdminSubstitutionNotAllowedReason",
        display: "SubstanceAdminSubstitutionNotAllowedReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_SubstanceAdminSubstitutionReason",
        display: "SubstanceAdminSubstitutionReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_TransferActReason",
        display: "TransferActReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActAdjudicationReason",
        display: "ActAdjudicationReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActBillableServiceReason",
        display: "ActBillableServiceReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActCoverageLevelRasonCode",
        display: "ActCoverageLevelRasonCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActImmunizationReason",
        display: "ActImmunizationReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ConrolActNullificationReasonCode",
        display: "ConrolActNullificationReasonCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_NonPerformanceReasonCode",
        display: "NonPerformanceReasonCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ReasonForNotEvaluatingDevice",
        display: "ReasonForNotEvaluatingDevice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ReferralReasonCode",
        display: "ReferralReasonCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "BONUS",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CHD",
        display: "Children only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "DEP",
        display: "Dependents only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ECH",
        display: "Employee and children",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "EDU",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "EMP",
        display: "Employee only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ESP",
        display: "Employee and spouse",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FAM",
        display: "Family",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "IND",
        display: "Individual",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "INVOICE",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PROA",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "RECOV",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "RETRO",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "SPC",
        display: "Spouse and children",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "SPO",
        display: "Spouse only",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "TRAN",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ACCREQNA",
        display: "Accommodation Requested Not Available",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FLRCNV",
        display: "Floor Convenience",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MEDNEC",
        display: "Medical Necessity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PAT",
        display: "Patient request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_MedicallyNecessaryDuplicateProcedureReason",
        display: "MedicallyNecessaryDuplicateProcedureReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActBillableClinicalServiceReason",
        display: "ActBillableClinicalServiceReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "OVRER",
        display: "emergency treatment override",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "OVRINCOMP",
        display: "incompetency override",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "OVRPJ",
        display: "professional judgment override",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "OVRPS",
        display: "public safety override",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "OVRTPS",
        display: "third party safety override",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_EligibilityActReasonCode",
        display: "EligibilityActReasonCode",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActCoverageProviderReason",
        display: "ActCoverageProviderReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActCoverageServiceReason",
        display: "ActCoverageServiceReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_CoverageExclusionReason",
        display: "CoverageExclusionReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_CoverageFinancialParticipationReason",
        display: "CoverageFinancialParticipationReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_CoverageLimitationReason",
        display: "CoverageLimitationReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActConsentInformationAccessOverrideReason",
        display: "ActConsentInformationAccessOverrideReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PurposeOfUse",
        display: "purpose of use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActHealthInformationPrivacyReason",
        display: "ActHealthInformationPrivacyReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "COVSUS",
        display: "coverage suspended",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "DECSD",
        display: "deceased",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "REGERR",
        display: "registered in error",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActHealthInformationManagementReason",
        display: "ActHealthInformationManagementReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActInformationPrivacyReason",
        display: "ActInformationPrivacyReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MARKT",
        display: "marketing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "OPERAT",
        display: "operations",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PAYMT",
        display: "payment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "RESCH",
        display: "research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "SRVC",
        display: "service",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ADVSTORAGE",
        display: "adverse storage condition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "EXPLOT",
        display: "expired lot",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "OUTSIDESCHED",
        display: "administered outside recommended schedule or practice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PRODRECALL",
        display: "product recall",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "INCCOVPTY",
        display: "incorrect covered party as patient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "INCINVOICE",
        display: "incorrect billing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "INCPOLICY",
        display: "incorrect policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "INCPROV",
        display: "incorrect provider",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "IMMUNE",
        display: "immunity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MEDPREC",
        display: "medical precaution",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "OSTOCK",
        display: "product out of stock",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PATOBJ",
        display: "patient objection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PHILISOP",
        display: "philosophical objection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "RELIG",
        display: "religious objection",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "VACEFF",
        display: "vaccine efficacy concerns",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "VACSAF",
        display: "vaccine safety concerns",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FRR01",
        display: "order stopped",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FRR02",
        display: "stale-dated order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FRR03",
        display: "incomplete data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FRR04",
        display: "product unavailable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FRR05",
        display: "ethical/religious",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FRR06",
        display: "unable to provide care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "RET",
        display: "retest",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "SCH",
        display: "scheduled",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "TRM",
        display: "termination",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "UNS",
        display: "unscheduled",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NPT",
        display: "non-protocol",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PPT",
        display: "per protocol",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "UPT",
        display: "per definition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ALTCHOICE",
        display: "try another treatment first",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CLARIF",
        display: "prescription requires clarification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "DRUGHIGH",
        display: "drug level too high",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HOSPADM",
        display: "admission to hospital",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "LABINT",
        display: "lab interference issues",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NON-AVAIL",
        display: "patient not-available",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PREG",
        display: "parent is pregnant/breast feeding",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "SALG",
        display: "allergy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "SDDI",
        display: "drug interacts with another drug",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "SDUPTHER",
        display: "duplicate therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "SINTOL",
        display: "suspected intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "SURG",
        display: "patient scheduled for surgery",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "WASHOUT",
        display: "waiting for old drug to wash out",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ALTD",
        display: "altered decision",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "EIE",
        display: "entered in error",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NORECMTCH",
        display: "no record match",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "INRQSTATE",
        display: "in requested state",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOMATCH",
        display: "no match",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOPERM",
        display: "no permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "WRNGVER",
        display: "wrong version",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_MedicationOrderAbortReasonCode",
        display: "medication order abort reason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_MedicationOrderReleaseReasonCode",
        display: "medication order release reason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ModifyPrescriptionReasonType",
        display: "ModifyPrescriptionReasonType",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_PharmacySupplyEventAbortReason",
        display: "PharmacySupplyEventAbortReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_PharmacySupplyEventStockReasonCode",
        display: "pharmacy supply event stock reason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_PharmacySupplyRequestRenewalRefusalReasonCode",
        display: "pharmacy supply request renewal refusal reason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_SupplyOrderAbortReasonCode",
        display: "supply order abort reason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ControlActReasonConditionNullify",
        display: "ControlActReasonConditionNullify",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "AGE",
        display: "age eligibility",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CRIME",
        display: "crime victim",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "DIS",
        display: "disability",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "EMPLOY",
        display: "employment benefit",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FINAN",
        display: "financial eligibility",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HEALTH",
        display: "health status",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MULTI",
        display: "multiple criteria eligibility",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PNC",
        display: "property and casualty condition",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "STATUTORY",
        display: "statutory eligibility",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "VEHIC",
        display: "motor vehicle accident victim",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "WORK",
        display: "work related",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_ActIneligibilityReason",
        display: "ActIneligibilityReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "_CoverageEligibilityReason",
        display: "CoverageEligibilityReason",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CHGDATA",
        display: "information change",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FIXDATA",
        display: "error correction",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MDATA",
        display: "merge data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NEWDATA",
        display: "new information",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "UMDATA",
        display: "unmerge data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "DISCONT",
        display: "product discontinued",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "INEFFECT",
        display: "ineffective",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MONIT",
        display: "response to monitoring",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOREQ",
        display: "no longer required for treatment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOTCOVER",
        display: "not covered",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PREFUS",
        display: "patient refuse",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "RECALL",
        display: "product recalled",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "REPLACE",
        display: "change in order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "REPLACEFIX",
        display: "error in order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "UNABLE",
        display: "unable to use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HOLDDONE",
        display: "suspend reason no longer applies",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HOLDINAP",
        display: "suspend reason inappropriate",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ADMINERROR",
        display: "administrative error in order",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CLINMOD",
        display: "clinical modification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ADMREV",
        display: "administrative review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "LEGAL",
        display: "subpoena",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PATCAR",
        display: "patient care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PATREQ",
        display: "patient request query",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PRCREV",
        display: "practice review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "REGUL",
        display: "regulatory review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "RSRCH",
        display: "research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "VALIDATION",
        display: "validation review",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CONTRA",
        display: "contraindication",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FOABORT",
        display: "order aborted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FOSUSP",
        display: "order suspended",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOPICK",
        display: "not picked up",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PATDEC",
        display: "patient changed mind",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "QUANTCHG",
        display: "change supply quantity",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FLRSTCK",
        display: "floor stock",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "LTC",
        display: "long term care use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "OFFICE",
        display: "office use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PHARM",
        display: "pharmacy transfer",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PROG",
        display: "program use",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "LOCKED",
        display: "locked",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOUSERPERM",
        display: "no user permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "UNKWNTARGET",
        display: "unknown target",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ALREADYRX",
        display: "new prescription exists",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FAMPHYS",
        display: "family physician must authorize further fills",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MODIFY",
        display: "modified prescription exists",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NEEDAPMT",
        display: "patient must make appointment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOTAVAIL",
        display: "prescriber not available",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOTPAT",
        display: "patient no longer in this practice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ONHOLD",
        display: "medication on hold",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PRNA",
        display: "product not available",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "STOPMED",
        display: "prescriber stopped medication for patient",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "TOOEARLY",
        display: "too early",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "BLK",
        display: "Unexpected Block (of Schedule)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "DEC",
        display: "Patient Deceased",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FIN",
        display: "No Financial Backing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MED",
        display: "Medical Status Altered",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MTG",
        display: "In an outside meeting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PHY",
        display: "Physician request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FILLED",
        display: "fully filled",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PATINELIG",
        display: "patient not eligible",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PROTUNMET",
        display: "protocol not met",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PROVUNAUTH",
        display: "provider not authorized",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ALGINT",
        display: "allergy intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "COMPCON",
        display: "compliance concern",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "THERCHAR",
        display: "therapeutic characteristics",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "TRIAL",
        display: "clinical trial drug",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CT",
        display: "continuing therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FP",
        display: "formulary policy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "OS",
        display: "out of stock",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "RR",
        display: "regulatory requirement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "IMPROV",
        display: "condition improved",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "INTOL",
        display: "intolerance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NEWSTR",
        display: "new strength",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NEWTHER",
        display: "new therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ER",
        display: "Error",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "RQ",
        display: "Request",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "COLDCHNBRK",
        display: "cold chain break",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CLINTRCHNPC",
        display: "clinical trial research without patient care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CLINTRCHPC",
        display: "clinical trial research with patient care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PRECLINTRCH",
        display: "preclinical trial research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ELIGDTRM",
        display: "eligibility determination",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ELIGVER",
        display: "eligibility verification",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ENROLLM",
        display: "enrollment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MILDCRG",
        display: "military discharge",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "BTG",
        display: "break the glass",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ERTREAT",
        display: "emergency room treatment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CAREMGT",
        display: "care management",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "DONAT",
        display: "donation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FRAUD",
        display: "fraud",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "GOV",
        display: "government",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HACCRED",
        display: "health accreditation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HCOMPL",
        display: "health compliance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HDECD",
        display: "decedent",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HDIRECT",
        display: "directory",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HDM",
        display: "healthcare delivery management",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HLEGAL",
        display: "legal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HOUTCOMS",
        display: "health outcome measure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HPRGRP",
        display: "health program reporting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HQUALIMP",
        display: "health quality improvement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HSYSADMIN",
        display: "health system administration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MEMADMIN",
        display: "member administration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MILCDM",
        display: "military command",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PATADMIN",
        display: "patient administration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PATSFTY",
        display: "patient safety",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PERFMSR",
        display: "performance measure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "RECORDMGT",
        display: "records management",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "SYSDEV",
        display: "system development",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "TRAIN",
        display: "training",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CLMATTCH",
        display: "claim attachment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "COVAUTH",
        display: "coverage authorization",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "COVERAGE",
        display: "coverage under policy or program",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "REMITADV",
        display: "remittance advice",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "BIORCH",
        display: "biomedical research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CLINTRCH",
        display: "clinical trial research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "DSRCH",
        display: "disease specific healthcare research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "POARCH",
        display: "population origins or ancestry healthcare research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "TRANSRCH",
        display: "translational healthcare research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "LABELING",
        display: "labeling",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "METAMGT",
        display: "metadata management",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOPRODMTCH",
        display: "no product match",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOSERMTCH",
        display: "no service match",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOVERMTCH",
        display: "no version match",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOAGNTPERM",
        display: "no agent permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "NOUSRPERM",
        display: "no user permission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ACCRED",
        display: "accreditation",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "COMPL",
        display: "compliance",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ENADMIN",
        display: "entity administration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "OUTCOMS",
        display: "outcome measure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PRGRPT",
        display: "program reporting",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "QUALIMP",
        display: "quality improvement",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "SYSADMN",
        display: "system administration",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "FAMRQT",
        display: "family requested",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PWATRNY",
        display: "power of attorney",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "SUPNWK",
        display: "support network",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "DISASTER",
        display: "disaster",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "THREAT",
        display: "threat",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HMARKT",
        display: "healthcare marketing",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HOPERAT",
        display: "healthcare operations",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HPAYMT",
        display: "healthcare payment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HRESCH",
        display: "healthcare research",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PATRQT",
        display: "patient requested",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "PUBHLTH",
        display: "public health",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "TREAT",
        display: "treatment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "DOSECHG",
        display: "change in medication/dose",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "CLINTRL",
        display: "clinical trial",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "COC",
        display: "coordination of care",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ETREAT",
        display: "Emergency Treatment",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "POPHLTH",
        display: "population health",
      },
    ],
  },
  {
    element: {
      id: "MedicationRequest.detectedIssue",
      path: "MedicationRequest.detectedIssue",
      short: "Clinical Issue with action",
      definition:
        "Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.",
      comment:
        "This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.",
      alias: ["Contraindication", "Drug Utilization Review (DUR)", "Alert"],
      min: 0,
      max: "*",
      base: { path: "MedicationRequest.detectedIssue", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/DetectedIssue",
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
      isSummary: false,
      mapping: [
        {
          identity: "rim",
          map: ".inboundRelationship[typeCode=SUBJ]/source[classCode=ALRT,moodCode=EVN].value",
        },
      ],
    },
    dataPath: "root.detectedIssue[0]",
    parentDataPath: "root",
    basePath: "root.detectedIssue",
    baseId: "MedicationRequest.detectedIssue",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationRequest",
      path: "MedicationRequest",
      short: "Ordering of medication for patient or group",
      definition:
        'An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.',
      alias: ["Prescription", "Order"],
      min: 0,
      max: "*",
      base: { path: "MedicationRequest", min: 0, max: "*" },
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
        { identity: "workflow", map: "Request" },
        { identity: "script10.6", map: "Message/Body/NewRx" },
        { identity: "rim", map: "CombinedMedicationRequest" },
        { identity: "w5", map: "clinical.medication" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "MedicationRequest",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
