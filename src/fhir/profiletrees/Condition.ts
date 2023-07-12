const data = [
  {
    element: {
      id: "Condition.meta",
      path: "Condition.meta",
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
    baseId: "Condition.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Condition.implicitRules",
      path: "Condition.implicitRules",
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
    baseId: "Condition.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Condition.language",
      path: "Condition.language",
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
    baseId: "Condition.language",
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
      id: "Condition.contained",
      path: "Condition.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/Condition",
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
    baseId: "Condition.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Condition.clinicalStatus",
      path: "Condition.clinicalStatus",
      short: "active | recurrence | relapse | inactive | remission | resolved",
      definition: "The clinical status of the condition.",
      comment:
        "The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.",
      min: 0,
      max: "1",
      base: { path: "Condition.clinicalStatus", min: 0, max: "1" },
      type: [{ code: "CodeableConcept" }],
      condition: ["con-3", "con-4", "con-5"],
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
        "This element is labeled as a modifier because the status contains codes that mark the condition as no longer active.",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "ConditionClinicalStatus",
          },
        ],
        strength: "required",
        description: "The clinical status of the condition or diagnosis.",
        valueSet: "http://hl7.org/fhir/ValueSet/condition-clinical|4.3.0",
      },
      mapping: [
        { identity: "workflow", map: "Event.status" },
        { identity: "w5", map: "FiveWs.status" },
        { identity: "sct-concept", map: "< 303105007 |Disease phases|" },
        { identity: "v2", map: "PRB-14" },
        {
          identity: "rim",
          map: 'Observation ACT\n.inboundRelationship[typeCode=COMP].source[classCode=OBS, code="clinicalStatus", moodCode=EVN].value',
        },
      ],
    },
    dataPath: "root.clinicalStatus",
    parentDataPath: "root",
    basePath: "root.clinicalStatus",
    baseId: "Condition.clinicalStatus",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "active",
        display: "Active",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "recurrence",
        display: "Recurrence",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "relapse",
        display: "Relapse",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "inactive",
        display: "Inactive",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "remission",
        display: "Remission",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "resolved",
        display: "Resolved",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "unknown",
        display: "Unknown",
      },
    ],
  },
  {
    element: {
      id: "Condition.verificationStatus",
      path: "Condition.verificationStatus",
      short:
        "unconfirmed | provisional | differential | confirmed | refuted | entered-in-error",
      definition:
        "The verification status to support the clinical status of the condition.",
      comment:
        "verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.\nThe data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.",
      min: 0,
      max: "1",
      base: { path: "Condition.verificationStatus", min: 0, max: "1" },
      type: [{ code: "CodeableConcept" }],
      condition: ["con-3", "con-5"],
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
        "This element is labeled as a modifier because the status contains the code refuted and entered-in-error that mark the Condition as not currently valid.",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "ConditionVerificationStatus",
          },
        ],
        strength: "required",
        description:
          "The verification status to support or decline the clinical status of the condition or diagnosis.",
        valueSet: "http://hl7.org/fhir/ValueSet/condition-ver-status|4.3.0",
      },
      mapping: [
        { identity: "workflow", map: "Event.status" },
        { identity: "w5", map: "FiveWs.status" },
        { identity: "sct-concept", map: "< 410514004 |Finding context value|" },
        { identity: "v2", map: "PRB-13" },
        {
          identity: "rim",
          map: 'Observation ACT\n.inboundRelationship[typeCode=COMP].source[classCode=OBS, code="verificationStatus", moodCode=EVN].value',
        },
        { identity: "sct-attr", map: "408729009" },
      ],
    },
    dataPath: "root.verificationStatus",
    parentDataPath: "root",
    basePath: "root.verificationStatus",
    baseId: "Condition.verificationStatus",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "unconfirmed",
        display: "Unconfirmed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "provisional",
        display: "Provisional",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "differential",
        display: "Differential",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "confirmed",
        display: "Confirmed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "refuted",
        display: "Refuted",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "entered-in-error",
        display: "Entered in Error",
      },
    ],
  },
  {
    element: {
      id: "Condition.category",
      path: "Condition.category",
      short: "problem-list-item | encounter-diagnosis",
      definition: "A category assigned to the condition.",
      comment:
        "The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.",
      min: 0,
      max: "*",
      base: { path: "Condition.category", min: 0, max: "*" },
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
            valueString: "ConditionCategory",
          },
        ],
        strength: "extensible",
        description: "A category assigned to the condition.",
        valueSet: "http://hl7.org/fhir/ValueSet/condition-category",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.class" },
        { identity: "sct-concept", map: "< 404684003 |Clinical finding|" },
        {
          identity: "v2",
          map: "'problem' if from PRB-3. 'diagnosis' if from DG1 segment in PV1 message",
        },
        { identity: "rim", map: ".code" },
      ],
    },
    dataPath: "root.category[0]",
    parentDataPath: "root",
    basePath: "root.category",
    baseId: "Condition.category",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-category",
        code: "problem-list-item",
        display: "Problem List Item",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-category",
        code: "encounter-diagnosis",
        display: "Encounter Diagnosis",
      },
    ],
  },
  {
    element: {
      id: "Condition.severity",
      path: "Condition.severity",
      short: "Subjective severity of condition",
      definition:
        "A subjective assessment of the severity of the condition as evaluated by the clinician.",
      comment:
        "Coding of the severity with a terminology is preferred, where possible.",
      min: 0,
      max: "1",
      base: { path: "Condition.severity", min: 0, max: "1" },
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
            valueString: "ConditionSeverity",
          },
        ],
        strength: "preferred",
        description:
          "A subjective assessment of the severity of the condition as evaluated by the clinician.",
        valueSet: "http://hl7.org/fhir/ValueSet/condition-severity",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.grade" },
        { identity: "sct-concept", map: "< 272141005 |Severities|" },
        { identity: "v2", map: "PRB-26 / ABS-3" },
        {
          identity: "rim",
          map: 'Can be pre/post-coordinated into value.  Or ./inboundRelationship[typeCode=SUBJ].source[classCode=OBS, moodCode=EVN, code="severity"].value',
        },
        { identity: "sct-attr", map: "246112005" },
      ],
    },
    dataPath: "root.severity",
    parentDataPath: "root",
    basePath: "root.severity",
    baseId: "Condition.severity",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      { code: "24484000" },
      { code: "6736007" },
      { code: "255604002" },
    ],
  },
  {
    element: {
      id: "Condition.bodySite",
      path: "Condition.bodySite",
      short: "Anatomical location, if relevant",
      definition:
        "The anatomical location where this condition manifests itself.",
      comment:
        "Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.",
      min: 0,
      max: "*",
      base: { path: "Condition.bodySite", min: 0, max: "*" },
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
            valueString: "BodySite",
          },
        ],
        strength: "example",
        description: "SNOMED CT Body site concepts",
        valueSet: "http://hl7.org/fhir/ValueSet/body-site",
      },
      mapping: [
        {
          identity: "sct-concept",
          map: "< 442083009  |Anatomical or acquired body structure|",
        },
        { identity: "rim", map: ".targetBodySiteCode" },
        { identity: "sct-attr", map: "363698007" },
      ],
    },
    dataPath: "root.bodySite[0]",
    parentDataPath: "root",
    basePath: "root.bodySite",
    baseId: "Condition.bodySite",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Condition.encounter",
      path: "Condition.encounter",
      short: "Encounter created as part of",
      definition:
        "The Encounter during which this Condition was created or to which the creation of this record is tightly associated.",
      comment:
        'This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".',
      min: 0,
      max: "1",
      base: { path: "Condition.encounter", min: 0, max: "1" },
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
        { identity: "v2", map: "PV1-19 (+PV1-54)" },
        {
          identity: "rim",
          map: ".inboundRelationship[typeCode=COMP].source[classCode=ENC, moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.encounter",
    parentDataPath: "root",
    basePath: "root.encounter",
    baseId: "Condition.encounter",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Condition.abatement[x]",
      path: "Condition.abatement[x]",
      short: "When in resolution/remission",
      definition:
        'The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.',
      comment:
        "There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.",
      min: 0,
      max: "1",
      base: { path: "Condition.abatement[x]", min: 0, max: "1" },
      type: [
        { code: "dateTime" },
        { code: "Age" },
        { code: "Period" },
        { code: "Range" },
        { code: "string" },
      ],
      condition: ["con-4"],
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
        { identity: "w5", map: "FiveWs.done[x]" },
        {
          identity: "rim",
          map: '.effectiveTime.high or .inboundRelationship[typeCode=SUBJ].source[classCode=OBS, moodCode=EVN, code="age at remission"].value or .inboundRelationship[typeCode=SUBJ]source[classCode=CONC, moodCode=EVN].status=completed',
        },
      ],
    },
    dataPath: "root.abatement[x]",
    parentDataPath: "root",
    basePath: "root.abatement[x]",
    baseId: "Condition.abatement[x]",
    isPrimitive: false,
    childPaths: [],
    multiTypeType: "dateTime",
    value: "",
  },
  {
    element: {
      id: "Condition.recordedDate",
      path: "Condition.recordedDate",
      short: "Date record was first recorded",
      definition:
        "The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.",
      min: 0,
      max: "1",
      base: { path: "Condition.recordedDate", min: 0, max: "1" },
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
        { identity: "v2", map: "REL-11" },
        { identity: "rim", map: ".participation[typeCode=AUT].time" },
      ],
    },
    dataPath: "root.recordedDate",
    parentDataPath: "root",
    basePath: "root.recordedDate",
    baseId: "Condition.recordedDate",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Condition.asserter",
      path: "Condition.asserter",
      short: "Person who asserts this condition",
      definition: "Individual who is making the condition statement.",
      min: 0,
      max: "1",
      base: { path: "Condition.asserter", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Practitioner",
            "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
            "http://hl7.org/fhir/StructureDefinition/Patient",
            "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
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
        { identity: "w5", map: "FiveWs.source" },
        { identity: "v2", map: "REL-7.1 identifier + REL-7.12 type code" },
        { identity: "rim", map: ".participation[typeCode=INF].role" },
      ],
    },
    dataPath: "root.asserter",
    parentDataPath: "root",
    basePath: "root.asserter",
    baseId: "Condition.asserter",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Condition.stage",
      path: "Condition.stage",
      short: "Stage/grade, usually assessed formally",
      definition:
        "Clinical stage or grade of a condition. May include formal severity assessments.",
      min: 0,
      max: "*",
      base: { path: "Condition.stage", min: 0, max: "*" },
      type: [{ code: "BackboneElement" }],
      constraint: [
        {
          key: "con-1",
          severity: "error",
          human: "Stage SHALL have summary or assessment",
          expression: "summary.exists() or assessment.exists()",
          xpath: "exists(f:summary) or exists(f:assessment)",
          source: "http://hl7.org/fhir/StructureDefinition/Condition",
        },
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
          map: './inboundRelationship[typeCode=SUBJ].source[classCode=OBS, moodCode=EVN, code="stage/grade"]',
        },
      ],
    },
    dataPath: "root.stage[0]",
    parentDataPath: "root",
    basePath: "root.stage",
    baseId: "Condition.stage",
    isPrimitive: false,
    childPaths: [
      "root.stage.summary",
      "root.stage.assessment[0]",
      "root.stage.type",
    ],
    value: "",
  },
  {
    element: {
      id: "Condition.stage.assessment",
      path: "Condition.stage.assessment",
      short: "Formal record of assessment",
      definition:
        "Reference to a formal record of the evidence on which the staging assessment is based.",
      min: 0,
      max: "*",
      base: { path: "Condition.stage.assessment", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/ClinicalImpression",
            "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
            "http://hl7.org/fhir/StructureDefinition/Observation",
          ],
        },
      ],
      condition: ["con-1"],
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
      mapping: [{ identity: "rim", map: ".self" }],
    },
    dataPath: "root.stage.assessment[0]",
    parentDataPath: "root.stage[0]",
    basePath: "root.assessment",
    baseId: "Condition.stage.assessment",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Condition.evidence",
      path: "Condition.evidence",
      short: "Supporting evidence",
      definition:
        "Supporting evidence / manifestations that are the basis of the Condition's verification status, such as evidence that confirmed or refuted the condition.",
      comment:
        "The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.",
      min: 0,
      max: "*",
      base: { path: "Condition.evidence", min: 0, max: "*" },
      type: [{ code: "BackboneElement" }],
      constraint: [
        {
          key: "con-2",
          severity: "error",
          human: "evidence SHALL have code or details",
          expression: "code.exists() or detail.exists()",
          xpath: "exists(f:code) or exists(f:detail)",
          source: "http://hl7.org/fhir/StructureDefinition/Condition",
        },
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
          map: ".outboundRelationship[typeCode=SPRT].target[classCode=OBS, moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.evidence[0]",
    parentDataPath: "root",
    basePath: "root.evidence",
    baseId: "Condition.evidence",
    isPrimitive: false,
    childPaths: ["root.evidence.code[0]", "root.evidence.detail[0]"],
    value: "",
  },
  {
    element: {
      id: "Condition.evidence.detail",
      path: "Condition.evidence.detail",
      short: "Supporting information found elsewhere",
      definition:
        "Links to other relevant information, including pathology reports.",
      min: 0,
      max: "*",
      base: { path: "Condition.evidence.detail", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
        },
      ],
      condition: ["con-2"],
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
        { identity: "w5", map: "FiveWs.why[x]" },
        { identity: "rim", map: ".self" },
      ],
    },
    dataPath: "root.evidence.detail[0]",
    parentDataPath: "root.evidence[0]",
    basePath: "root.detail",
    baseId: "Condition.evidence.detail",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Condition",
      path: "Condition",
      short: "Detailed information about conditions, problems or diagnoses",
      definition:
        "A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.",
      min: 0,
      max: "*",
      base: { path: "Condition", min: 0, max: "*" },
      constraint: [
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice",
              valueBoolean: true,
            },
            {
              url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice-explanation",
              valueMarkdown:
                "Most systems will expect a clinicalStatus to be valued for problem-list-items that are managed over time, but might not need a clinicalStatus for point in time encounter-diagnosis.",
            },
          ],
          key: "con-3",
          severity: "warning",
          human:
            "Condition.clinicalStatus SHOULD be present if verificationStatus is not entered-in-error and category is problem-list-item",
          expression:
            "verificationStatus.empty().not() and verificationStatus.coding.where(system='http://terminology.hl7.org/CodeSystem/condition-ver-status' and code='entered-in-error').exists().not() and category.coding.where(system='http://terminology.hl7.org/CodeSystem/condition-category' and code='problem-list-item').exists() implies clinicalStatus.empty().not()",
          xpath:
            "not(exists(f:verificationStatus) and not(exists(f:verificationStatus/f:coding[f:system/@value='http://terminology.hl7.org/CodeSystem/condition-ver-status' and f:code/@value='entered-in-error'])) and exists(f:category/f:coding[f:system/@value='http://terminology.hl7.org/CodeSystem/condition-category' and f:code/@value='problem-list-item'])) or exists(f:clinicalStatus)",
          source: "http://hl7.org/fhir/StructureDefinition/Condition",
        },
        {
          key: "con-4",
          severity: "error",
          human:
            "If condition is abated, then clinicalStatus must be either inactive, resolved, or remission",
          expression:
            "abatement.empty() or clinicalStatus.coding.where(system='http://terminology.hl7.org/CodeSystem/condition-clinical' and (code='resolved' or code='remission' or code='inactive')).exists()",
          xpath:
            "not(exists(*[starts-with(local-name(.), 'abatement')])) or exists(f:clinicalStatus/f:coding[f:system/@value='http://terminology.hl7.org/CodeSystem/condition-clinical' and f:code/@value=('resolved', 'remission', 'inactive')])",
          source: "http://hl7.org/fhir/StructureDefinition/Condition",
        },
        {
          key: "con-5",
          severity: "error",
          human:
            "Condition.clinicalStatus SHALL NOT be present if verification Status is entered-in-error",
          expression:
            "verificationStatus.coding.where(system='http://terminology.hl7.org/CodeSystem/condition-ver-status' and code='entered-in-error').empty() or clinicalStatus.empty()",
          xpath:
            "not(exists(f:verificationStatus/f:coding[f:system/@value='http://terminology.hl7.org/CodeSystem/condition-ver-status' and f:code/@value='entered-in-error'])) or not(exists(f:clinicalStatus))",
          source: "http://hl7.org/fhir/StructureDefinition/Condition",
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
        { identity: "workflow", map: "Event" },
        {
          identity: "sct-concept",
          map: "< 243796009 |Situation with explicit context| : 246090004 |Associated finding| = ( ( < 404684003 |Clinical finding| MINUS ( << 420134006 |Propensity to adverse reactions| OR << 473010000 |Hypersensitivity condition| OR << 79899007 |Drug interaction| OR << 69449002 |Drug action| OR << 441742003 |Evaluation finding| OR << 307824009 |Administrative status| OR << 385356007 |Tumor stage finding|)) OR < 272379006 |Event|)",
        },
        { identity: "v2", map: "PPR message" },
        {
          identity: "rim",
          map: "Observation[classCode=OBS, moodCode=EVN, code=ASSERTION, value<Diagnosis]",
        },
        { identity: "w5", map: "clinical.general" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "Condition",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
