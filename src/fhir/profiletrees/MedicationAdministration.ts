const data = [
  {
    element: {
      id: "MedicationAdministration.meta",
      path: "MedicationAdministration.meta",
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
    baseId: "MedicationAdministration.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.implicitRules",
      path: "MedicationAdministration.implicitRules",
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
    baseId: "MedicationAdministration.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.language",
      path: "MedicationAdministration.language",
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
    baseId: "MedicationAdministration.language",
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
      id: "MedicationAdministration.contained",
      path: "MedicationAdministration.contained",
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
          source:
            "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
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
    baseId: "MedicationAdministration.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.instantiates",
      path: "MedicationAdministration.instantiates",
      short: "Instantiates protocol or definition",
      definition:
        "A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.",
      min: 0,
      max: "*",
      base: { path: "MedicationAdministration.instantiates", min: 0, max: "*" },
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
        { identity: "workflow", map: "Event.instantiates" },
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=DEFN].target[classCode=unspecified]",
        },
      ],
    },
    dataPath: "root.instantiates[0]",
    parentDataPath: "root",
    basePath: "root.instantiates",
    baseId: "MedicationAdministration.instantiates",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.status",
      path: "MedicationAdministration.status",
      short:
        "in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown",
      definition:
        "Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions, it is possible for an administration to be started but not completed or it may be paused while some other process is under way.",
      comment:
        "This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.",
      min: 1,
      max: "1",
      base: { path: "MedicationAdministration.status", min: 1, max: "1" },
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
            valueString: "MedicationAdministrationStatus",
          },
        ],
        strength: "required",
        description:
          "A set of codes indicating the current status of a MedicationAdministration.",
        valueSet: "http://hl7.org/fhir/ValueSet/medication-admin-status|4.3.0",
      },
      mapping: [
        { identity: "workflow", map: "Event.status" },
        { identity: "w5", map: "FiveWs.status" },
        { identity: "v2", map: "RXA-20-Completion Status" },
        { identity: "rim", map: ".statusCode" },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "MedicationAdministration.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
        code: "in-progress",
        display: "In Progress",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
        code: "not-done",
        display: "Not Done",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
        code: "on-hold",
        display: "On Hold",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
        code: "completed",
        display: "Completed",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
        code: "entered-in-error",
        display: "Entered in Error",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
        code: "stopped",
        display: "Stopped",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
        code: "unknown",
        display: "Unknown",
      },
    ],
  },
  {
    element: {
      id: "MedicationAdministration.category",
      path: "MedicationAdministration.category",
      short: "Type of medication usage",
      definition:
        "Indicates where the medication is expected to be consumed or administered.",
      min: 0,
      max: "1",
      base: { path: "MedicationAdministration.category", min: 0, max: "1" },
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
            valueString: "MedicationAdministrationCategory",
          },
        ],
        strength: "preferred",
        description:
          "A coded concept describing where the medication administered is expected to occur.",
        valueSet: "http://hl7.org/fhir/ValueSet/medication-admin-category",
      },
      mapping: [
        {
          identity: "rim",
          map: '.inboundRelationship[typeCode=COMP].source[classCode=OBS, moodCode=EVN, code="type of medication usage"].value',
        },
      ],
    },
    dataPath: "root.category",
    parentDataPath: "root",
    basePath: "root.category",
    baseId: "MedicationAdministration.category",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medication-admin-category",
        code: "inpatient",
        display: "Inpatient",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medication-admin-category",
        code: "outpatient",
        display: "Outpatient",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medication-admin-category",
        code: "community",
        display: "Community",
      },
    ],
  },
  {
    element: {
      id: "MedicationAdministration.subject",
      path: "MedicationAdministration.subject",
      short: "Who received medication",
      definition: "The person or animal or group receiving the medication.",
      min: 1,
      max: "1",
      base: { path: "MedicationAdministration.subject", min: 1, max: "1" },
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
    baseId: "MedicationAdministration.subject",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.supportingInformation",
      path: "MedicationAdministration.supportingInformation",
      short: "Additional information to support administration",
      definition:
        "Additional information (for example, patient height and weight) that supports the administration of the medication.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationAdministration.supportingInformation",
        min: 0,
        max: "*",
      },
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
        { identity: "w5", map: "FiveWs.context" },
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=PERT].target[A_SupportingClinicalStatement CMET minimal with many different choices of classCodes(ORG, ENC, PROC, SPLY, SBADM, OBS) and each of the act class codes draws from one or more of the following moodCodes (EVN, DEF, INT PRMS, RQO, PRP, APT, ARQ, GOL)]",
        },
      ],
    },
    dataPath: "root.supportingInformation[0]",
    parentDataPath: "root",
    basePath: "root.supportingInformation",
    baseId: "MedicationAdministration.supportingInformation",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.performer",
      path: "MedicationAdministration.performer",
      short: "Who performed the medication administration and what they did",
      definition:
        "Indicates who or what performed the medication administration and how they were involved.",
      min: 0,
      max: "*",
      base: { path: "MedicationAdministration.performer", min: 0, max: "*" },
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
        { identity: "workflow", map: "Event.performer" },
        { identity: "w5", map: "FiveWs.actor" },
        {
          identity: "v2",
          map: "RXA-10-Administering Provider / PRT-5-Participation Person: PRT-4-Participation='AP' (RXA-10 is deprecated)",
        },
        { identity: "rim", map: ".participation[typeCode=PRF]" },
      ],
    },
    dataPath: "root.performer[0]",
    parentDataPath: "root",
    basePath: "root.performer",
    baseId: "MedicationAdministration.performer",
    isPrimitive: false,
    childPaths: ["root.performer.function", "root.performer.actor"],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.performer.function",
      path: "MedicationAdministration.performer.function",
      short: "Type of performance",
      definition:
        "Distinguishes the type of involvement of the performer in the medication administration.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationAdministration.performer.function",
        min: 0,
        max: "1",
      },
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
            valueString: "MedicationAdministrationPerformerFunction",
          },
        ],
        strength: "example",
        description:
          "A code describing the role an individual played in administering the medication.",
        valueSet: "http://hl7.org/fhir/ValueSet/med-admin-perform-function",
      },
      mapping: [
        { identity: "workflow", map: "Event.performer.function" },
        { identity: "rim", map: "participation[typeCode=PRF].functionCode" },
      ],
    },
    dataPath: "root.performer.function",
    parentDataPath: "root.performer[0]",
    basePath: "root.function",
    baseId: "MedicationAdministration.performer.function",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/med-admin-perform-function",
        code: "performer",
        display: "Performer",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/med-admin-perform-function",
        code: "verifier",
        display: "Verifier",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/med-admin-perform-function",
        code: "witness",
        display: "Witness",
      },
    ],
  },
  {
    element: {
      id: "MedicationAdministration.reasonCode",
      path: "MedicationAdministration.reasonCode",
      short: "Reason administration performed",
      definition: "A code indicating why the medication was given.",
      min: 0,
      max: "*",
      base: { path: "MedicationAdministration.reasonCode", min: 0, max: "*" },
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
            valueString: "MedicationAdministrationReason",
          },
        ],
        strength: "example",
        description:
          "A set of codes indicating the reason why the MedicationAdministration was made.",
        valueSet: "http://hl7.org/fhir/ValueSet/reason-medication-given-codes",
      },
      mapping: [
        { identity: "workflow", map: "Event.reasonCode" },
        { identity: "v2", map: "RXE-27 Give Indication" },
        { identity: "rim", map: ".reasonCode" },
      ],
    },
    dataPath: "root.reasonCode[0]",
    parentDataPath: "root",
    basePath: "root.reasonCode",
    baseId: "MedicationAdministration.reasonCode",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/reason-medication-given",
        code: "a",
        display: "None",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/reason-medication-given",
        code: "b",
        display: "Given as Ordered",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/reason-medication-given",
        code: "c",
        display: "Emergency",
      },
    ],
  },
  {
    element: {
      id: "MedicationAdministration.request",
      path: "MedicationAdministration.request",
      short: "Request administration performed against",
      definition:
        "The original request, instruction or authority to perform the administration.",
      comment:
        "This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not reference MedicationRequests where the intent is any other value.",
      min: 0,
      max: "1",
      base: { path: "MedicationAdministration.request", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
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
        { identity: "workflow", map: "Event.basedOn" },
        {
          identity: "v2",
          map: "ORC-2-Placer Order Number / ORC-3-Filler Order Number",
        },
        { identity: "rim", map: "InFullfillmentOf->SubstanceAdministration" },
      ],
    },
    dataPath: "root.request",
    parentDataPath: "root",
    basePath: "root.request",
    baseId: "MedicationAdministration.request",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.note",
      path: "MedicationAdministration.note",
      short: "Information about the administration",
      definition:
        "Extra information about the medication administration that is not conveyed by the other attributes.",
      min: 0,
      max: "*",
      base: { path: "MedicationAdministration.note", min: 0, max: "*" },
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
        { identity: "workflow", map: "Event.note" },
        {
          identity: "rim",
          map: '.inboundRelationship[typeCode=SUBJ]/source[classCode=OBS,moodCode=EVN,code="annotation"].value',
        },
      ],
    },
    dataPath: "root.note[0]",
    parentDataPath: "root",
    basePath: "root.note",
    baseId: "MedicationAdministration.note",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.dosage",
      path: "MedicationAdministration.dosage",
      short: "Details of how medication was taken",
      definition:
        "Describes the medication dosage information details e.g. dose, rate, site, route, etc.",
      min: 0,
      max: "1",
      base: { path: "MedicationAdministration.dosage", min: 0, max: "1" },
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
          key: "mad-1",
          severity: "error",
          human: "SHALL have at least one of dosage.dose or dosage.rate[x]",
          expression: "dose.exists() or rate.exists()",
          xpath:
            "exists(f:dose) or exists(f:*[starts-with(local-name(.), 'rate')])",
          source:
            "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "rim", map: "component->SubstanceAdministrationEvent" },
      ],
    },
    dataPath: "root.dosage",
    parentDataPath: "root",
    basePath: "root.dosage",
    baseId: "MedicationAdministration.dosage",
    isPrimitive: false,
    childPaths: [
      "root.dosage.text",
      "root.dosage.site",
      "root.dosage.route",
      "root.dosage.method",
      "root.dosage.dose",
      "root.dosage.rate[x]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.dosage.text",
      path: "MedicationAdministration.dosage.text",
      short: "Free text dosage instructions e.g. SIG",
      definition:
        "Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.\r\rThe dosage instructions should reflect the dosage of the medication that was administered.",
      min: 0,
      max: "1",
      base: { path: "MedicationAdministration.dosage.text", min: 0, max: "1" },
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
      mapping: [{ identity: "rim", map: ".text" }],
    },
    dataPath: "root.dosage.text",
    parentDataPath: "root.dosage",
    basePath: "root.text",
    baseId: "MedicationAdministration.dosage.text",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.dosage.route",
      path: "MedicationAdministration.dosage.route",
      short: "Path of substance into body",
      definition:
        "A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.",
      min: 0,
      max: "1",
      base: { path: "MedicationAdministration.dosage.route", min: 0, max: "1" },
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
            valueString: "RouteOfAdministration",
          },
        ],
        strength: "example",
        description:
          "A coded concept describing the route or physiological path of administration of a therapeutic agent into or onto the body of a subject.",
        valueSet: "http://hl7.org/fhir/ValueSet/route-codes",
      },
      mapping: [
        { identity: "v2", map: "RXR-1-Route" },
        { identity: "rim", map: ".routeCode" },
      ],
    },
    dataPath: "root.dosage.route",
    parentDataPath: "root.dosage",
    basePath: "root.route",
    baseId: "MedicationAdministration.dosage.route",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.dosage.dose",
      path: "MedicationAdministration.dosage.dose",
      short: "Amount of medication per dose",
      definition:
        "The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.",
      comment:
        "If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.",
      min: 0,
      max: "1",
      base: { path: "MedicationAdministration.dosage.dose", min: 0, max: "1" },
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
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        {
          identity: "v2",
          map: "RXA-6 Administered Amount / RXA-7 Administered Units",
        },
        { identity: "rim", map: ".doseQuantity" },
      ],
    },
    dataPath: "root.dosage.dose",
    parentDataPath: "root.dosage",
    basePath: "root.dose",
    baseId: "MedicationAdministration.dosage.dose",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration.eventHistory",
      path: "MedicationAdministration.eventHistory",
      short: "A list of events of interest in the lifecycle",
      definition:
        "A summary of the events of interest that have occurred, such as when the administration was verified.",
      comment:
        "This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.",
      min: 0,
      max: "*",
      base: { path: "MedicationAdministration.eventHistory", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Provenance"],
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
          map: ".inboundRelationship(typeCode=SUBJ].source[classCode=CACT, moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.eventHistory[0]",
    parentDataPath: "root",
    basePath: "root.eventHistory",
    baseId: "MedicationAdministration.eventHistory",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationAdministration",
      path: "MedicationAdministration",
      short: "Administration of medication to a patient",
      definition:
        "Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.",
      min: 0,
      max: "*",
      base: { path: "MedicationAdministration", min: 0, max: "*" },
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
    baseId: "MedicationAdministration",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
