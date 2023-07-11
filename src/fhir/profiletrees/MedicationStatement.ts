const data = [
  {
    element: {
      id: "MedicationStatement.meta",
      path: "MedicationStatement.meta",
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
    baseId: "MedicationStatement.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationStatement.implicitRules",
      path: "MedicationStatement.implicitRules",
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
    baseId: "MedicationStatement.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationStatement.language",
      path: "MedicationStatement.language",
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
    baseId: "MedicationStatement.language",
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
      id: "MedicationStatement.contained",
      path: "MedicationStatement.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/MedicationStatement",
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
    baseId: "MedicationStatement.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationStatement.basedOn",
      path: "MedicationStatement.basedOn",
      short: "Fulfils plan, proposal or order",
      definition:
        "A plan, proposal or order that is fulfilled in whole or in part by this event.",
      requirements:
        "Allows tracing of authorization for the event and tracking whether proposals/recommendations were acted upon.",
      min: 0,
      max: "*",
      base: { path: "MedicationStatement.basedOn", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
            "http://hl7.org/fhir/StructureDefinition/CarePlan",
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
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=FLFS].target[classCode=SBADM or PROC or PCPR or OBS, moodCode=RQO orPLAN or PRP]",
        },
      ],
    },
    dataPath: "root.basedOn[0]",
    parentDataPath: "root",
    basePath: "root.basedOn",
    baseId: "MedicationStatement.basedOn",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationStatement.status",
      path: "MedicationStatement.status",
      short:
        "active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken",
      definition:
        "A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally, this will be active or completed.",
      comment:
        "MedicationStatement is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for MedicationStatement.status contains codes that assert the status of the use of the medication by the patient (for example, stopped or on hold) as well as codes that assert the status of the medication statement itself (for example, entered in error).\r\rThis element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.",
      min: 1,
      max: "1",
      base: { path: "MedicationStatement.status", min: 1, max: "1" },
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
            valueString: "MedicationStatementStatus",
          },
        ],
        strength: "required",
        description:
          "A coded concept indicating the current status of a MedicationStatement.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/medication-statement-status|4.3.0",
      },
      mapping: [
        { identity: "workflow", map: "Event.status" },
        { identity: "w5", map: "FiveWs.status" },
        { identity: "rim", map: ".statusCode" },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "MedicationStatement.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
        code: "active",
        display: "Active",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
        code: "completed",
        display: "Completed",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
        code: "entered-in-error",
        display: "Entered in Error",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
        code: "intended",
        display: "Intended",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
        code: "stopped",
        display: "Stopped",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
        code: "on-hold",
        display: "On Hold",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
        code: "unknown",
        display: "Unknown",
      },
      {
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
        code: "not-taken",
        display: "Not Taken",
      },
    ],
  },
  {
    element: {
      id: "MedicationStatement.category",
      path: "MedicationStatement.category",
      short: "Type of medication usage",
      definition:
        "Indicates where the medication is expected to be consumed or administered.",
      min: 0,
      max: "1",
      base: { path: "MedicationStatement.category", min: 0, max: "1" },
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
            valueString: "MedicationStatementCategory",
          },
        ],
        strength: "preferred",
        description:
          "A coded concept identifying where the medication included in the MedicationStatement is expected to be consumed or administered.",
        valueSet: "http://hl7.org/fhir/ValueSet/medication-statement-category",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.class" },
        {
          identity: "rim",
          map: '.inboundRelationship[typeCode=COMP].source[classCode=OBS, moodCode=EVN, code="type of medication usage"].value',
        },
      ],
    },
    dataPath: "root.category",
    parentDataPath: "root",
    basePath: "root.category",
    baseId: "MedicationStatement.category",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medication-statement-category",
        code: "inpatient",
        display: "Inpatient",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medication-statement-category",
        code: "outpatient",
        display: "Outpatient",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medication-statement-category",
        code: "community",
        display: "Community",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medication-statement-category",
        code: "patientspecified",
        display: "Patient Specified",
      },
    ],
  },
  {
    element: {
      id: "MedicationStatement.subject",
      path: "MedicationStatement.subject",
      short: "Who is/was taking  the medication",
      definition:
        "The person, animal or group who is/was taking the medication.",
      min: 1,
      max: "1",
      base: { path: "MedicationStatement.subject", min: 1, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Patient",
            "http://hl7.org/fhir/StructureDefinition/Group",
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
        { identity: "v2", map: "PID-3-Patient ID List" },
        {
          identity: "rim",
          map: ".participation[typeCode=SBJ].role[classCode=PAT]",
        },
        { identity: "w5", map: "FiveWs.subject" },
      ],
    },
    dataPath: "root.subject",
    parentDataPath: "root",
    basePath: "root.subject",
    baseId: "MedicationStatement.subject",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationStatement.effective[x]",
      path: "MedicationStatement.effective[x]",
      short:
        "The date/time or interval when the medication is/was/will be taken",
      definition:
        "The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.taken element is No).",
      comment:
        'This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the majority of Medication Statements. If the medication is still being taken at the time the statement is recorded, the "end" date will be omitted.  The date/time attribute supports a variety of dates - year, year/month and exact date.  If something more than this is required, this should be conveyed as text.',
      min: 0,
      max: "1",
      base: { path: "MedicationStatement.effective[x]", min: 0, max: "1" },
      type: [{ code: "dateTime" }, { code: "Period" }],
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
        { identity: "workflow", map: "Event.occurrence[x]" },
        { identity: "w5", map: "FiveWs.done[x]" },
        { identity: "rim", map: ".effectiveTime" },
      ],
    },
    dataPath: "root.effective[x]",
    parentDataPath: "root",
    basePath: "root.effective[x]",
    baseId: "MedicationStatement.effective[x]",
    isPrimitive: false,
    childPaths: [],
    multiTypeType: "dateTime",
    value: "",
  },
  {
    element: {
      id: "MedicationStatement.dateAsserted",
      path: "MedicationStatement.dateAsserted",
      short: "When the statement was asserted?",
      definition:
        "The date when the medication statement was asserted by the information source.",
      min: 0,
      max: "1",
      base: { path: "MedicationStatement.dateAsserted", min: 0, max: "1" },
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
        { identity: "w5", map: "FiveWs.recorded" },
        { identity: "rim", map: ".participation[typeCode=AUT].time" },
      ],
    },
    dataPath: "root.dateAsserted",
    parentDataPath: "root",
    basePath: "root.dateAsserted",
    baseId: "MedicationStatement.dateAsserted",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationStatement.derivedFrom",
      path: "MedicationStatement.derivedFrom",
      short: "Additional supporting information",
      definition:
        "Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement.",
      comment:
        "Likely references would be to MedicationRequest, MedicationDispense, Claim, Observation or QuestionnaireAnswers.  The most common use cases for deriving a MedicationStatement comes from creating a MedicationStatement from a MedicationRequest or from a lab observation or a claim.  it should be noted that the amount of information that is available varies from the type resource that you derive the MedicationStatement from.",
      min: 0,
      max: "*",
      base: { path: "MedicationStatement.derivedFrom", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
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
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=SPRT]/target[classCode=ACT,moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.derivedFrom[0]",
    parentDataPath: "root",
    basePath: "root.derivedFrom",
    baseId: "MedicationStatement.derivedFrom",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationStatement.reasonReference",
      path: "MedicationStatement.reasonReference",
      short:
        "Condition or observation that supports why the medication is being/was taken",
      definition:
        "Condition or observation that supports why the medication is being/was taken.",
      comment:
        "This is a reference to a condition that is the reason why the medication is being/was taken.  If only a code exists, use reasonForUseCode.",
      min: 0,
      max: "*",
      base: { path: "MedicationStatement.reasonReference", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Condition",
            "http://hl7.org/fhir/StructureDefinition/Observation",
            "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
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
        { identity: "workflow", map: "Event.reasonReference" },
        { identity: "w5", map: "FiveWs.why[x]" },
        {
          identity: "rim",
          map: '.outboundRelationship[typeCode=RSON]/target[classCode=OBS,moodCode=EVN, code="reason for use"].value',
        },
      ],
    },
    dataPath: "root.reasonReference[0]",
    parentDataPath: "root",
    basePath: "root.reasonReference",
    baseId: "MedicationStatement.reasonReference",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationStatement.dosage",
      path: "MedicationStatement.dosage",
      short: "Details of how medication is/was taken or should be taken",
      definition:
        "Indicates how the medication is/was or should be taken by the patient.",
      comment:
        'The dates included in the dosage on a Medication Statement reflect the dates for a given dose.  For example, "from November 1, 2016 to November 3, 2016, take one tablet daily and from November 4, 2016 to November 7, 2016, take two tablets daily."  It is expected that this specificity may only be populated where the patient brings in their labeled container or where the Medication Statement is derived from a MedicationRequest.',
      min: 0,
      max: "*",
      base: { path: "MedicationStatement.dosage", min: 0, max: "*" },
      type: [{ code: "Dosage" }],
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
      mapping: [{ identity: "rim", map: "refer dosageInstruction mapping" }],
    },
    dataPath: "root.dosage[0]",
    parentDataPath: "root",
    basePath: "root.dosage",
    baseId: "MedicationStatement.dosage",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationStatement",
      path: "MedicationStatement",
      short: "Record of medication being taken by a patient",
      definition:
        "A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. \n\nThe primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.",
      comment:
        "When interpreting a medicationStatement, the value of the status and NotTaken needed to be considered:\rMedicationStatement.status + MedicationStatement.wasNotTaken\rStatus=Active + NotTaken=T = Not currently taking\rStatus=Completed + NotTaken=T = Not taken in the past\rStatus=Intended + NotTaken=T = No intention of taking\rStatus=Active + NotTaken=F = Taking, but not as prescribed\rStatus=Active + NotTaken=F = Taking\rStatus=Intended +NotTaken= F = Will be taking (not started)\rStatus=Completed + NotTaken=F = Taken in past\rStatus=In Error + NotTaken=N/A = In Error.",
      min: 0,
      max: "*",
      base: { path: "MedicationStatement", min: 0, max: "*" },
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
        { identity: "workflow", map: "Event" },
        { identity: "rim", map: "SubstanceAdministration" },
        { identity: "w5", map: "clinical.medication" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "MedicationStatement",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
