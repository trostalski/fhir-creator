const data = [
  {
    element: {
      id: "Observation.meta",
      path: "Observation.meta",
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
    baseId: "Observation.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Observation.implicitRules",
      path: "Observation.implicitRules",
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
    baseId: "Observation.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Observation.language",
      path: "Observation.language",
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
    baseId: "Observation.language",
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
      id: "Observation.contained",
      path: "Observation.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/Observation",
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
    baseId: "Observation.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Observation.basedOn",
      path: "Observation.basedOn",
      short: "Fulfills plan, proposal or order",
      definition:
        "A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed.",
      requirements:
        "Allows tracing of authorization for the event and tracking whether proposals/recommendations were acted upon.",
      alias: ["Fulfills"],
      min: 0,
      max: "*",
      base: { path: "Observation.basedOn", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/CarePlan",
            "http://hl7.org/fhir/StructureDefinition/DeviceRequest",
            "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
            "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
            "http://hl7.org/fhir/StructureDefinition/NutritionOrder",
            "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
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
        { identity: "workflow", map: "Event.basedOn" },
        { identity: "v2", map: "ORC" },
        {
          identity: "rim",
          map: ".inboundRelationship[typeCode=COMP].source[moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.basedOn[0]",
    parentDataPath: "root",
    basePath: "root.basedOn",
    baseId: "Observation.basedOn",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Observation.status",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-display-hint",
          valueString: "default: final",
        },
      ],
      path: "Observation.status",
      short: "registered | preliminary | final | amended +",
      definition: "The status of the result value.",
      comment:
        "This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.",
      requirements:
        "Need to track the status of individual results. Some results are finalized before the whole report is finalized.",
      min: 1,
      max: "1",
      base: { path: "Observation.status", min: 1, max: "1" },
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
            valueString: "ObservationStatus",
          },
        ],
        strength: "required",
        description: "Codes providing the status of an observation.",
        valueSet: "http://hl7.org/fhir/ValueSet/observation-status|4.3.0",
      },
      mapping: [
        { identity: "workflow", map: "Event.status" },
        { identity: "w5", map: "FiveWs.status" },
        {
          identity: "sct-concept",
          map: "< 445584004 |Report by finality status|",
        },
        { identity: "v2", map: "OBX-11" },
        {
          identity: "rim",
          map: 'status  Amended & Final are differentiated by whether it is the subject of a ControlAct event with a type of "revise"',
        },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "Observation.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "registered",
        display: "Registered",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "preliminary",
        display: "Preliminary",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "final",
        display: "Final",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "amended",
        display: "Amended",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "corrected",
        display: "Corrected",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "cancelled",
        display: "Cancelled",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "entered-in-error",
        display: "Entered in Error",
      },
      {
        system: "http://hl7.org/fhir/observation-status",
        code: "unknown",
        display: "Unknown",
      },
    ],
  },
  {
    element: {
      id: "Observation.category",
      path: "Observation.category",
      short: "Classification of  type of observation",
      definition:
        "A code that classifies the general type of observation being made.",
      comment:
        "In addition to the required category valueset, this element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.",
      requirements:
        "Used for filtering what observations are retrieved and displayed.",
      min: 0,
      max: "*",
      base: { path: "Observation.category", min: 0, max: "*" },
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
            valueString: "ObservationCategory",
          },
        ],
        strength: "preferred",
        description: "Codes for high level observation categories.",
        valueSet: "http://hl7.org/fhir/ValueSet/observation-category",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.class" },
        {
          identity: "rim",
          map: '.outboundRelationship[typeCode="COMP].target[classCode="LIST", moodCode="EVN"].code',
        },
      ],
    },
    dataPath: "root.category[0]",
    parentDataPath: "root",
    basePath: "root.category",
    baseId: "Observation.category",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/observation-category",
        code: "social-history",
        display: "Social History",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/observation-category",
        code: "vital-signs",
        display: "Vital Signs",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/observation-category",
        code: "imaging",
        display: "Imaging",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/observation-category",
        code: "laboratory",
        display: "Laboratory",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/observation-category",
        code: "procedure",
        display: "Procedure",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/observation-category",
        code: "survey",
        display: "Survey",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/observation-category",
        code: "exam",
        display: "Exam",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/observation-category",
        code: "therapy",
        display: "Therapy",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/observation-category",
        code: "activity",
        display: "Activity",
      },
    ],
  },
  {
    element: {
      id: "Observation.subject",
      path: "Observation.subject",
      short: "Who and/or what the observation is about",
      definition:
        "The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.",
      comment:
        "One would expect this element to be a cardinality of 1..1. The only circumstance in which the subject can be missing is when the observation is made by a device that does not know the patient. In this case, the observation SHALL be matched to a patient through some context/channel matching technique, and at this point, the observation should be updated.",
      requirements:
        "Observations have no value if you don't know who or what they're about.",
      min: 0,
      max: "1",
      base: { path: "Observation.subject", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Patient",
            "http://hl7.org/fhir/StructureDefinition/Group",
            "http://hl7.org/fhir/StructureDefinition/Device",
            "http://hl7.org/fhir/StructureDefinition/Location",
            "http://hl7.org/fhir/StructureDefinition/Organization",
            "http://hl7.org/fhir/StructureDefinition/Procedure",
            "http://hl7.org/fhir/StructureDefinition/Practitioner",
            "http://hl7.org/fhir/StructureDefinition/Medication",
            "http://hl7.org/fhir/StructureDefinition/Substance",
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
        { identity: "workflow", map: "Event.subject" },
        { identity: "w5", map: "FiveWs.subject[x]" },
        { identity: "v2", map: "PID-3" },
        { identity: "rim", map: "participation[typeCode=RTGT]" },
        { identity: "w5", map: "FiveWs.subject" },
      ],
    },
    dataPath: "root.subject",
    parentDataPath: "root",
    basePath: "root.subject",
    baseId: "Observation.subject",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Observation.encounter",
      path: "Observation.encounter",
      short: "Healthcare event during which this observation is made",
      definition:
        "The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.",
      comment:
        "This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission laboratory tests).",
      requirements:
        "For some observations it may be important to know the link between an observation and a particular encounter.",
      alias: ["Context"],
      min: 0,
      max: "1",
      base: { path: "Observation.encounter", min: 0, max: "1" },
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
      isSummary: true,
      mapping: [
        { identity: "workflow", map: "Event.context" },
        { identity: "w5", map: "FiveWs.context" },
        { identity: "v2", map: "PV1" },
        {
          identity: "rim",
          map: "inboundRelationship[typeCode=COMP].source[classCode=ENC, moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.encounter",
    parentDataPath: "root",
    basePath: "root.encounter",
    baseId: "Observation.encounter",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Observation.issued",
      path: "Observation.issued",
      short: "Date/Time this version was made available",
      definition:
        "The date and time this version of the observation was made available to providers, typically after the results have been reviewed and verified.",
      comment:
        "For Observations that don’t require review and verification, it may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that doesn’t require the new version to be reviewed and verified again.",
      min: 0,
      max: "1",
      base: { path: "Observation.issued", min: 0, max: "1" },
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
      isSummary: true,
      mapping: [
        { identity: "w5", map: "FiveWs.recorded" },
        {
          identity: "v2",
          map: "OBR.22 (or MSH.7), or perhaps OBX-19 (depends on who observation made)",
        },
        { identity: "rim", map: "participation[typeCode=AUT].time" },
      ],
    },
    dataPath: "root.issued",
    parentDataPath: "root",
    basePath: "root.issued",
    baseId: "Observation.issued",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Observation.value[x]",
      path: "Observation.value[x]",
      short: "Actual result",
      definition:
        "The information determined as a result of making the observation, if the information has a simple value.",
      comment:
        "An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.",
      requirements:
        "An observation exists to have a value, though it might not if it is in error, or if it represents a group of observations.",
      min: 0,
      max: "1",
      base: { path: "Observation.value[x]", min: 0, max: "1" },
      type: [
        { code: "Quantity" },
        { code: "CodeableConcept" },
        { code: "string" },
        { code: "boolean" },
        { code: "integer" },
        { code: "Range" },
        { code: "Ratio" },
        { code: "SampledData" },
        { code: "time" },
        { code: "dateTime" },
        { code: "Period" },
      ],
      condition: ["obs-7"],
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
        { identity: "sct-concept", map: "< 441742003 |Evaluation finding|" },
        { identity: "v2", map: "OBX.2, OBX.5, OBX.6" },
        { identity: "rim", map: "value" },
        { identity: "sct-attr", map: "363714003 |Interprets|" },
      ],
    },
    dataPath: "root.value[x]",
    parentDataPath: "root",
    basePath: "root.value[x]",
    baseId: "Observation.value[x]",
    isPrimitive: false,
    childPaths: [],
    multiTypeType: "Quantity",
    value: "",
  },
  {
    element: {
      id: "Observation.dataAbsentReason",
      path: "Observation.dataAbsentReason",
      short: "Why the result is missing",
      definition:
        "Provides a reason why the expected value in the element Observation.value[x] is missing.",
      comment:
        'Null or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "specimen unsatisfactory".   \n\nThe alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed. Note that an observation may only be reported if there are values to report. For example differential cell counts values may be reported only when > 0.  Because of these options, use-case agreements are required to interpret general observations for null or exceptional values.',
      requirements:
        "For many results it is necessary to handle exceptional values in measurements.",
      min: 0,
      max: "1",
      base: { path: "Observation.dataAbsentReason", min: 0, max: "1" },
      type: [{ code: "CodeableConcept" }],
      condition: ["obs-6"],
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
            valueString: "ObservationValueAbsentReason",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        description:
          "Codes specifying why the result (`Observation.value[x]`) is missing.",
        valueSet: "http://hl7.org/fhir/ValueSet/data-absent-reason",
      },
      mapping: [
        { identity: "v2", map: "N/A" },
        { identity: "rim", map: "value.nullFlavor" },
      ],
    },
    dataPath: "root.dataAbsentReason",
    parentDataPath: "root",
    basePath: "root.dataAbsentReason",
    baseId: "Observation.dataAbsentReason",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "unknown",
        display: "Unknown",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "asked-unknown",
        display: "Asked But Unknown",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "temp-unknown",
        display: "Temporarily Unknown",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "not-asked",
        display: "Not Asked",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "asked-declined",
        display: "Asked But Declined",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "masked",
        display: "Masked",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "not-applicable",
        display: "Not Applicable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "unsupported",
        display: "Unsupported",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "as-text",
        display: "As Text",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "error",
        display: "Error",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "not-a-number",
        display: "Not a Number (NaN)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "negative-infinity",
        display: "Negative Infinity (NINF)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "positive-infinity",
        display: "Positive Infinity (PINF)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "not-performed",
        display: "Not Performed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "not-permitted",
        display: "Not Permitted",
      },
    ],
  },
  {
    element: {
      id: "Observation.interpretation",
      path: "Observation.interpretation",
      short: "High, low, normal, etc.",
      definition:
        "A categorical assessment of an observation value.  For example, high, low, normal.",
      comment:
        "Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.",
      requirements:
        "For some results, particularly numeric results, an interpretation is necessary to fully understand the significance of a result.",
      alias: ["Abnormal Flag"],
      min: 0,
      max: "*",
      base: { path: "Observation.interpretation", min: 0, max: "*" },
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
            valueString: "ObservationInterpretation",
          },
        ],
        strength: "extensible",
        description: "Codes identifying interpretations of observations.",
        valueSet: "http://hl7.org/fhir/ValueSet/observation-interpretation",
      },
      mapping: [
        { identity: "sct-concept", map: "< 260245000 |Findings values|" },
        { identity: "v2", map: "OBX-8" },
        { identity: "rim", map: "interpretationCode" },
        { identity: "sct-attr", map: "363713009 |Has interpretation|" },
      ],
    },
    dataPath: "root.interpretation[0]",
    parentDataPath: "root",
    basePath: "root.interpretation",
    baseId: "Observation.interpretation",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "_GeneticObservationInterpretation",
        display: "GeneticObservationInterpretation",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "_ObservationInterpretationChange",
        display: "ObservationInterpretationChange",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "_ObservationInterpretationExceptions",
        display: "ObservationInterpretationExceptions",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "_ObservationInterpretationNormality",
        display: "ObservationInterpretationNormality",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "_ObservationInterpretationSusceptibility",
        display: "ObservationInterpretationSusceptibility",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "EX",
        display: "outside threshold",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "HM",
        display: "Hold for Medical Review",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "ObservationInterpretationDetection",
        display: "ObservationInterpretationDetection",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "ObservationInterpretationExpectation",
        display: "ObservationInterpretationExpectation",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "OBX",
        display: "Interpretation qualifiers in separate OBX segments",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "ReactivityObservationInterpretation",
        display: "ReactivityObservationInterpretation",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "CAR",
        display: "Carrier",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "Carrier",
        display: "Carrier",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "B",
        display: "Better",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "D",
        display: "Significant change down",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "U",
        display: "Significant change up",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "W",
        display: "Worse",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "<",
        display: "Off scale low",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: ">",
        display: "Off scale high",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "AC",
        display: "Anti-complementary substances present",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "IE",
        display: "Insufficient evidence",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "QCF",
        display: "Quality control failure",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "TOX",
        display: "Cytotoxic substance present",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "A",
        display: "Abnormal",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "N",
        display: "Normal",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "I",
        display: "Intermediate",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "MS",
        display: "moderately susceptible",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "NCL",
        display: "No CLSI defined breakpoint",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "NS",
        display: "Non-susceptible",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "R",
        display: "Resistant",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "S",
        display: "Susceptible",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "VS",
        display: "very susceptible",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "AA",
        display: "Critical abnormal",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "H",
        display: "High",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "L",
        display: "Low",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "HH",
        display: "Critical high",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "LL",
        display: "Critical low",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "HX",
        display: "above high threshold",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "LX",
        display: "below low threshold",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "H>",
        display: "Significantly high",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "HU",
        display: "Significantly high",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "E",
        display: "Equivocal",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "L<",
        display: "Significantly low",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "LU",
        display: "Significantly low",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "ND",
        display: "Not detected",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "IND",
        display: "Indeterminate",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "NEG",
        display: "Negative",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "POS",
        display: "Positive",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "EXP",
        display: "Expected",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "UNE",
        display: "Unexpected",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "DET",
        display: "Detected",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "SYN-R",
        display: "Synergy - resistant",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "NR",
        display: "Non-reactive",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "RR",
        display: "Reactive",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "WR",
        display: "Weakly reactive",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "SDD",
        display: "Susceptible-dose dependent",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "SYN-S",
        display: "Synergy - susceptible",
      },
    ],
  },
  {
    element: {
      id: "Observation.bodySite",
      path: "Observation.bodySite",
      short: "Observed body part",
      definition:
        "Indicates the site on the subject's body where the observation was made (i.e. the target site).",
      comment:
        "Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.   \n\nIf the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).",
      min: 0,
      max: "1",
      base: { path: "Observation.bodySite", min: 0, max: "1" },
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
            valueString: "BodySite",
          },
        ],
        strength: "example",
        description: "SNOMED CT Body site concepts",
        valueSet: "http://hl7.org/fhir/ValueSet/body-site",
      },
      mapping: [
        { identity: "sct-concept", map: "< 123037004 |Body structure|" },
        { identity: "v2", map: "OBX-20" },
        { identity: "rim", map: "targetSiteCode" },
        { identity: "sct-attr", map: "718497002 |Inherent location|" },
      ],
    },
    dataPath: "root.bodySite",
    parentDataPath: "root",
    basePath: "root.bodySite",
    baseId: "Observation.bodySite",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Observation.specimen",
      path: "Observation.specimen",
      short: "Specimen used for this observation",
      definition: "The specimen that was used when this observation was made.",
      comment:
        "Should only be used if not implicit in code found in `Observation.code`.  Observations are not made on specimens themselves; they are made on a subject, but in many cases by the means of a specimen. Note that although specimens are often involved, they are not always tracked and reported explicitly. Also note that observation resources may be used in contexts that track the specimen explicitly (e.g. Diagnostic Report).",
      min: 0,
      max: "1",
      base: { path: "Observation.specimen", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Specimen"],
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
        { identity: "sct-concept", map: "< 123038009 |Specimen|" },
        { identity: "v2", map: "SPM segment" },
        { identity: "rim", map: "participation[typeCode=SPC].specimen" },
        { identity: "sct-attr", map: "704319004 |Inherent in|" },
      ],
    },
    dataPath: "root.specimen",
    parentDataPath: "root",
    basePath: "root.specimen",
    baseId: "Observation.specimen",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Observation.referenceRange",
      path: "Observation.referenceRange",
      short: "Provides guide for interpretation",
      definition:
        'Guidance on how to interpret the value by comparison to a normal or recommended range.  Multiple reference ranges are interpreted as an "OR".   In other words, to represent two distinct target populations, two `referenceRange` elements would be used.',
      comment:
        "Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.",
      requirements:
        'Knowing what values are considered "normal" can help evaluate the significance of a particular result. Need to be able to provide multiple reference ranges for different contexts.',
      min: 0,
      max: "*",
      base: { path: "Observation.referenceRange", min: 0, max: "*" },
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
        {
          key: "obs-3",
          severity: "error",
          human: "Must have at least a low or a high or text",
          expression: "low.exists() or high.exists() or text.exists()",
          xpath: "(exists(f:low) or exists(f:high)or exists(f:text))",
          source: "http://hl7.org/fhir/StructureDefinition/Observation",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "v2", map: "OBX.7" },
        {
          identity: "rim",
          map: "outboundRelationship[typeCode=REFV]/target[classCode=OBS, moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.referenceRange[0]",
    parentDataPath: "root",
    basePath: "root.referenceRange",
    baseId: "Observation.referenceRange",
    isPrimitive: false,
    childPaths: [
      "root.referenceRange.low",
      "root.referenceRange.high",
      "root.referenceRange.type",
      "root.referenceRange.appliesTo[0]",
      "root.referenceRange.age",
      "root.referenceRange.text",
    ],
    value: "",
  },
  {
    element: {
      id: "Observation.referenceRange.high",
      path: "Observation.referenceRange.high",
      short: "High Range, if relevant",
      definition:
        "The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).",
      min: 0,
      max: "1",
      base: { path: "Observation.referenceRange.high", min: 0, max: "1" },
      type: [
        {
          code: "Quantity",
          profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
        },
      ],
      condition: ["obs-3"],
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
        { identity: "v2", map: "OBX-7" },
        { identity: "rim", map: "value:IVL_PQ.high" },
      ],
    },
    dataPath: "root.referenceRange.high",
    parentDataPath: "root.referenceRange[0]",
    basePath: "root.high",
    baseId: "Observation.referenceRange.high",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Observation.referenceRange.type",
      path: "Observation.referenceRange.type",
      short: "Reference range qualifier",
      definition:
        "Codes to indicate the what part of the targeted reference population it applies to. For example, the normal or therapeutic range.",
      comment:
        "This SHOULD be populated if there is more than one range.  If this element is not present then the normal range is assumed.",
      requirements:
        "Need to be able to say what kind of reference range this is - normal, recommended, therapeutic, etc.,  - for proper interpretation.",
      min: 0,
      max: "1",
      base: { path: "Observation.referenceRange.type", min: 0, max: "1" },
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
            valueString: "ObservationRangeMeaning",
          },
        ],
        strength: "preferred",
        description: "Code for the meaning of a reference range.",
        valueSet: "http://hl7.org/fhir/ValueSet/referencerange-meaning",
      },
      mapping: [
        {
          identity: "sct-concept",
          map: "< 260245000 |Findings values| OR  \r< 365860008 |General clinical state finding| \rOR \r< 250171008 |Clinical history or observation findings| OR  \r< 415229000 |Racial group| OR \r< 365400002 |Finding of puberty stage| OR\r< 443938003 |Procedure carried out on subject|",
        },
        { identity: "v2", map: "OBX-10" },
        { identity: "rim", map: "interpretationCode" },
      ],
    },
    dataPath: "root.referenceRange.type",
    parentDataPath: "root.referenceRange[0]",
    basePath: "root.type",
    baseId: "Observation.referenceRange.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "type",
        display: "Type",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "normal",
        display: "Normal Range",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "recommended",
        display: "Recommended Range",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "treatment",
        display: "Treatment Range",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "therapeutic",
        display: "Therapeutic Desired Level",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "pre",
        display: "Pre Therapeutic Desired Level",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "post",
        display: "Post Therapeutic Desired Level",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "endocrine",
        display: "Endocrine",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "pre-puberty",
        display: "Pre-Puberty",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "follicular",
        display: "Follicular Stage",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "midcycle",
        display: "MidCycle",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "luteal",
        display: "Luteal",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        code: "postmenopausal",
        display: "Post-Menopause",
      },
    ],
  },
  {
    element: {
      id: "Observation.referenceRange.appliesTo",
      path: "Observation.referenceRange.appliesTo",
      short: "Reference range population",
      definition:
        'Codes to indicate the target population this reference range applies to.  For example, a reference range may be based on the normal population or a particular sex or race.  Multiple `appliesTo`  are interpreted as an "AND" of the target populations.  For example, to represent a target population of African American females, both a code of female and a code for African American would be used.',
      comment:
        "This SHOULD be populated if there is more than one range.  If this element is not present then the normal population is assumed.",
      requirements:
        "Need to be able to identify the target population for proper interpretation.",
      min: 0,
      max: "*",
      base: { path: "Observation.referenceRange.appliesTo", min: 0, max: "*" },
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
            valueString: "ObservationRangeType",
          },
        ],
        strength: "example",
        description:
          "Codes identifying the population the reference range applies to.",
        valueSet: "http://hl7.org/fhir/ValueSet/referencerange-appliesto",
      },
      mapping: [
        {
          identity: "sct-concept",
          map: "< 260245000 |Findings values| OR  \r< 365860008 |General clinical state finding| \rOR \r< 250171008 |Clinical history or observation findings| OR  \r< 415229000 |Racial group| OR \r< 365400002 |Finding of puberty stage| OR\r< 443938003 |Procedure carried out on subject|",
        },
        { identity: "v2", map: "OBX-10" },
        { identity: "rim", map: "interpretationCode" },
      ],
    },
    dataPath: "root.referenceRange.appliesTo[0]",
    parentDataPath: "root.referenceRange[0]",
    basePath: "root.appliesTo",
    baseId: "Observation.referenceRange.appliesTo",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      { code: "248153007" },
      { code: "248152002" },
      { code: "77386006" },
    ],
  },
  {
    element: {
      id: "Observation.referenceRange.text",
      path: "Observation.referenceRange.text",
      short: "Text based reference range in an observation",
      definition:
        'Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of "normals".',
      min: 0,
      max: "1",
      base: { path: "Observation.referenceRange.text", min: 0, max: "1" },
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
        { identity: "v2", map: "OBX-7" },
        { identity: "rim", map: "value:ST" },
      ],
    },
    dataPath: "root.referenceRange.text",
    parentDataPath: "root.referenceRange[0]",
    basePath: "root.text",
    baseId: "Observation.referenceRange.text",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Observation.derivedFrom",
      path: "Observation.derivedFrom",
      short: "Related measurements the observation is made from",
      definition:
        "The target resource that represents a measurement from which this observation value is derived. For example, a calculated anion gap or a fetal measurement based on an ultrasound image.",
      comment:
        "All the reference choices that are listed in this element can represent clinical observations and other measurements that may be the source for a derived value.  The most common reference will be another Observation.  For a discussion on the ways Observations can assembled in groups together, see [Notes](observation.html#obsgrouping) below.",
      min: 0,
      max: "*",
      base: { path: "Observation.derivedFrom", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/DocumentReference",
            "http://hl7.org/fhir/StructureDefinition/ImagingStudy",
            "http://hl7.org/fhir/StructureDefinition/Media",
            "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
            "http://hl7.org/fhir/StructureDefinition/Observation",
            "http://hl7.org/fhir/StructureDefinition/MolecularSequence",
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
        { identity: "v2", map: "Relationships established by OBX-4 usage" },
        { identity: "rim", map: ".targetObservation" },
      ],
    },
    dataPath: "root.derivedFrom[0]",
    parentDataPath: "root",
    basePath: "root.derivedFrom",
    baseId: "Observation.derivedFrom",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Observation.component",
      path: "Observation.component",
      short: "Component results",
      definition:
        "Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.",
      comment:
        "For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.",
      requirements:
        "Component observations share the same attributes in the Observation resource as the primary observation and are always treated a part of a single observation (they are not separable).   However, the reference range for the primary observation value is not inherited by the component values and is required when appropriate for each component observation.",
      min: 0,
      max: "*",
      base: { path: "Observation.component", min: 0, max: "*" },
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
      isSummary: true,
      mapping: [
        { identity: "v2", map: "containment by OBX-4?" },
        { identity: "rim", map: "outBoundRelationship[typeCode=COMP]" },
      ],
    },
    dataPath: "root.component[0]",
    parentDataPath: "root",
    basePath: "root.component",
    baseId: "Observation.component",
    isPrimitive: false,
    childPaths: [
      "root.component.code",
      "root.component.value[x]",
      "root.component.dataAbsentReason",
      "root.component.interpretation[0]",
      "root.component.referenceRange[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "Observation.component.value[x]",
      path: "Observation.component.value[x]",
      short: "Actual component result",
      definition:
        "The information determined as a result of making the observation, if the information has a simple value.",
      comment:
        "Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.",
      requirements:
        "An observation exists to have a value, though it might not if it is in error, or if it represents a group of observations.",
      min: 0,
      max: "1",
      base: { path: "Observation.component.value[x]", min: 0, max: "1" },
      type: [
        { code: "Quantity" },
        { code: "CodeableConcept" },
        { code: "string" },
        { code: "boolean" },
        { code: "integer" },
        { code: "Range" },
        { code: "Ratio" },
        { code: "SampledData" },
        { code: "time" },
        { code: "dateTime" },
        { code: "Period" },
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
        {
          identity: "sct-concept",
          map: "363714003 |Interprets| < 441742003 |Evaluation finding|",
        },
        { identity: "v2", map: "OBX.2, OBX.5, OBX.6" },
        { identity: "rim", map: "value" },
        { identity: "sct-attr", map: "363714003 |Interprets|" },
      ],
    },
    dataPath: "root.component.value[x]",
    parentDataPath: "root.component[0]",
    basePath: "root.value[x]",
    baseId: "Observation.component.value[x]",
    isPrimitive: false,
    childPaths: [],
    multiTypeType: "Quantity",
    value: "",
  },
  {
    element: {
      id: "Observation.component.dataAbsentReason",
      path: "Observation.component.dataAbsentReason",
      short: "Why the component result is missing",
      definition:
        "Provides a reason why the expected value in the element Observation.component.value[x] is missing.",
      comment:
        '"Null" or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "test not done". \n\nThe alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed.  Because of these options, use-case agreements are required to interpret general observations for exceptional values.',
      requirements:
        "For many results it is necessary to handle exceptional values in measurements.",
      min: 0,
      max: "1",
      base: {
        path: "Observation.component.dataAbsentReason",
        min: 0,
        max: "1",
      },
      type: [{ code: "CodeableConcept" }],
      condition: ["obs-6"],
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
            valueString: "ObservationValueAbsentReason",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        description:
          "Codes specifying why the result (`Observation.value[x]`) is missing.",
        valueSet: "http://hl7.org/fhir/ValueSet/data-absent-reason",
      },
      mapping: [
        { identity: "v2", map: "N/A" },
        { identity: "rim", map: "value.nullFlavor" },
      ],
    },
    dataPath: "root.component.dataAbsentReason",
    parentDataPath: "root.component[0]",
    basePath: "root.dataAbsentReason",
    baseId: "Observation.component.dataAbsentReason",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "unknown",
        display: "Unknown",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "asked-unknown",
        display: "Asked But Unknown",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "temp-unknown",
        display: "Temporarily Unknown",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "not-asked",
        display: "Not Asked",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "asked-declined",
        display: "Asked But Declined",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "masked",
        display: "Masked",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "not-applicable",
        display: "Not Applicable",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "unsupported",
        display: "Unsupported",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "as-text",
        display: "As Text",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "error",
        display: "Error",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "not-a-number",
        display: "Not a Number (NaN)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "negative-infinity",
        display: "Negative Infinity (NINF)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "positive-infinity",
        display: "Positive Infinity (PINF)",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "not-performed",
        display: "Not Performed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        code: "not-permitted",
        display: "Not Permitted",
      },
    ],
  },
  {
    element: {
      id: "Observation.component.interpretation",
      path: "Observation.component.interpretation",
      short: "High, low, normal, etc.",
      definition:
        "A categorical assessment of an observation value.  For example, high, low, normal.",
      comment:
        "Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.",
      requirements:
        "For some results, particularly numeric results, an interpretation is necessary to fully understand the significance of a result.",
      alias: ["Abnormal Flag"],
      min: 0,
      max: "*",
      base: { path: "Observation.component.interpretation", min: 0, max: "*" },
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
            valueString: "ObservationInterpretation",
          },
        ],
        strength: "extensible",
        description: "Codes identifying interpretations of observations.",
        valueSet: "http://hl7.org/fhir/ValueSet/observation-interpretation",
      },
      mapping: [
        { identity: "sct-concept", map: "< 260245000 |Findings values|" },
        { identity: "v2", map: "OBX-8" },
        { identity: "rim", map: "interpretationCode" },
        { identity: "sct-attr", map: "363713009 |Has interpretation|" },
      ],
    },
    dataPath: "root.component.interpretation[0]",
    parentDataPath: "root.component[0]",
    basePath: "root.interpretation",
    baseId: "Observation.component.interpretation",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "_GeneticObservationInterpretation",
        display: "GeneticObservationInterpretation",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "_ObservationInterpretationChange",
        display: "ObservationInterpretationChange",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "_ObservationInterpretationExceptions",
        display: "ObservationInterpretationExceptions",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "_ObservationInterpretationNormality",
        display: "ObservationInterpretationNormality",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "_ObservationInterpretationSusceptibility",
        display: "ObservationInterpretationSusceptibility",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "EX",
        display: "outside threshold",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "HM",
        display: "Hold for Medical Review",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "ObservationInterpretationDetection",
        display: "ObservationInterpretationDetection",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "ObservationInterpretationExpectation",
        display: "ObservationInterpretationExpectation",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "OBX",
        display: "Interpretation qualifiers in separate OBX segments",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "ReactivityObservationInterpretation",
        display: "ReactivityObservationInterpretation",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "CAR",
        display: "Carrier",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "Carrier",
        display: "Carrier",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "B",
        display: "Better",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "D",
        display: "Significant change down",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "U",
        display: "Significant change up",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "W",
        display: "Worse",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "<",
        display: "Off scale low",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: ">",
        display: "Off scale high",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "AC",
        display: "Anti-complementary substances present",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "IE",
        display: "Insufficient evidence",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "QCF",
        display: "Quality control failure",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "TOX",
        display: "Cytotoxic substance present",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "A",
        display: "Abnormal",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "N",
        display: "Normal",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "I",
        display: "Intermediate",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "MS",
        display: "moderately susceptible",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "NCL",
        display: "No CLSI defined breakpoint",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "NS",
        display: "Non-susceptible",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "R",
        display: "Resistant",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "S",
        display: "Susceptible",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "VS",
        display: "very susceptible",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "AA",
        display: "Critical abnormal",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "H",
        display: "High",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "L",
        display: "Low",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "HH",
        display: "Critical high",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "LL",
        display: "Critical low",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "HX",
        display: "above high threshold",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "LX",
        display: "below low threshold",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "H>",
        display: "Significantly high",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "HU",
        display: "Significantly high",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "E",
        display: "Equivocal",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "L<",
        display: "Significantly low",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "LU",
        display: "Significantly low",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "ND",
        display: "Not detected",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "IND",
        display: "Indeterminate",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "NEG",
        display: "Negative",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "POS",
        display: "Positive",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "EXP",
        display: "Expected",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "UNE",
        display: "Unexpected",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "DET",
        display: "Detected",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "SYN-R",
        display: "Synergy - resistant",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "NR",
        display: "Non-reactive",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "RR",
        display: "Reactive",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "WR",
        display: "Weakly reactive",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "SDD",
        display: "Susceptible-dose dependent",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        code: "SYN-S",
        display: "Synergy - susceptible",
      },
    ],
  },
  {
    element: {
      id: "Observation",
      path: "Observation",
      short: "Measurements and simple assertions",
      definition:
        "Measurements and simple assertions made about a patient, device or other subject.",
      comment:
        "Used for simple observations such as device measurements, laboratory atomic results, vital signs, height, weight, smoking status, comments, etc.  Other resources are used to provide context for observations such as laboratory reports, etc.",
      alias: ["Vital Signs", "Measurement", "Results", "Tests"],
      min: 0,
      max: "*",
      base: { path: "Observation", min: 0, max: "*" },
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
        {
          key: "obs-6",
          severity: "error",
          human:
            "dataAbsentReason SHALL only be present if Observation.value[x] is not present",
          expression: "dataAbsentReason.empty() or value.empty()",
          xpath:
            "not(exists(f:dataAbsentReason)) or (not(exists(*[starts-with(local-name(.), 'value')])))",
          source: "http://hl7.org/fhir/StructureDefinition/Observation",
        },
        {
          key: "obs-7",
          severity: "error",
          human:
            "If Observation.code is the same as an Observation.component.code then the value element associated with the code SHALL NOT be present",
          expression:
            "value.empty() or component.code.where(coding.intersect(%resource.code.coding).exists()).empty()",
          xpath:
            "not(f:*[starts-with(local-name(.), 'value')] and (for $coding in f:code/f:coding return f:component/f:code/f:coding[f:code/@value=$coding/f:code/@value] [f:system/@value=$coding/f:system/@value]))",
          source: "http://hl7.org/fhir/StructureDefinition/Observation",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "rim", map: "Entity. Role, or Act" },
        { identity: "workflow", map: "Event" },
        { identity: "sct-concept", map: "< 363787002 |Observable entity|" },
        { identity: "v2", map: "OBX" },
        { identity: "rim", map: "Observation[classCode=OBS, moodCode=EVN]" },
        { identity: "w5", map: "clinical.diagnostics" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "Observation",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
