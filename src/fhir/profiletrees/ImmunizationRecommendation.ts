const data = [
  {
    element: {
      id: "ImmunizationRecommendation.meta",
      path: "ImmunizationRecommendation.meta",
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
    baseId: "ImmunizationRecommendation.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.implicitRules",
      path: "ImmunizationRecommendation.implicitRules",
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
    baseId: "ImmunizationRecommendation.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.language",
      path: "ImmunizationRecommendation.language",
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
    baseId: "ImmunizationRecommendation.language",
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
      id: "ImmunizationRecommendation.contained",
      path: "ImmunizationRecommendation.contained",
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
            "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
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
    baseId: "ImmunizationRecommendation.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.patient",
      path: "ImmunizationRecommendation.patient",
      short: "Who this profile is for",
      definition: "The patient the recommendation(s) are for.",
      min: 1,
      max: "1",
      base: { path: "ImmunizationRecommendation.patient", min: 1, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
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
        { identity: "workflow", map: "Request.subject" },
        { identity: "w5", map: "FiveWs.subject[x]" },
        { identity: "v2", map: "PID-3" },
        { identity: "rim", map: ".partipication[typeCode=SUBJ].role" },
        { identity: "w5", map: "FiveWs.subject" },
      ],
    },
    dataPath: "root.patient",
    parentDataPath: "root",
    basePath: "root.patient",
    baseId: "ImmunizationRecommendation.patient",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.date",
      path: "ImmunizationRecommendation.date",
      short: "Date recommendation(s) created",
      definition: "The date the immunization recommendation(s) were created.",
      min: 1,
      max: "1",
      base: { path: "ImmunizationRecommendation.date", min: 1, max: "1" },
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
        { identity: "v2", map: "OBX-15" },
        { identity: "rim", map: ".partipication[typeCode=AUTH].time" },
      ],
    },
    dataPath: "root.date",
    parentDataPath: "root",
    basePath: "root.date",
    baseId: "ImmunizationRecommendation.date",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation",
      path: "ImmunizationRecommendation.recommendation",
      short: "Vaccine administration recommendations",
      definition: "Vaccine administration recommendations.",
      min: 1,
      max: "*",
      base: {
        path: "ImmunizationRecommendation.recommendation",
        min: 1,
        max: "*",
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
        {
          key: "imr-1",
          severity: "error",
          human: "One of vaccineCode or targetDisease SHALL be present",
          expression: "vaccineCode.exists() or targetDisease.exists()",
          xpath: "exists(f:vaccineCode) or exists(f:targetDisease)",
          source:
            "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode='COMP'].target[classCode=SBADM, moodCode=RMD]",
        },
      ],
    },
    dataPath: "root.recommendation[0]",
    parentDataPath: "root",
    basePath: "root.recommendation",
    baseId: "ImmunizationRecommendation.recommendation",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.vaccineCode[0]",
      "root.recommendation.targetDisease",
      "root.recommendation.contraindicatedVaccineCode[0]",
      "root.recommendation.forecastStatus",
      "root.recommendation.forecastReason[0]",
      "root.recommendation.dateCriterion[0]",
      "root.recommendation.description",
      "root.recommendation.series",
      "root.recommendation.doseNumber[x]",
      "root.recommendation.seriesDoses[x]",
      "root.recommendation.supportingImmunization[0]",
      "root.recommendation.supportingPatientInformation[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.targetDisease",
      path: "ImmunizationRecommendation.recommendation.targetDisease",
      short: "Disease to be immunized against",
      definition: "The targeted disease for the recommendation.",
      min: 0,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.targetDisease",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "TargetDisease",
          },
        ],
        strength: "example",
        description: "The disease that the recommended vaccination targets.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/immunization-recommendation-target-disease",
      },
      mapping: [
        { identity: "v2", map: "OBX-5 : OBX-3 = ( 30956-7 | 38890-0 )" },
        {
          identity: "rim",
          map: ".partipication[typeCode=CSM].role[classCode=ADMM].code",
        },
      ],
    },
    dataPath: "root.recommendation.targetDisease",
    parentDataPath: "root.recommendation[0]",
    basePath: "root.targetDisease",
    baseId: "ImmunizationRecommendation.recommendation.targetDisease",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      { code: "1857005" },
      { code: "397430003" },
      { code: "14189004" },
      { code: "36989005" },
      { code: "36653000" },
      { code: "76902006" },
      { code: "709410003" },
      { code: "27836007" },
      { code: "398102009" },
    ],
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.forecastStatus",
      path: "ImmunizationRecommendation.recommendation.forecastStatus",
      short: "Vaccine recommendation status",
      definition:
        "Indicates the patient status with respect to the path to immunity for the target disease.",
      min: 1,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.forecastStatus",
        min: 1,
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
      isModifier: true,
      isModifierReason:
        "This element is labeled as a modifier because the forecastStatus indicates whether a patient needs additional doses (due, overdue, etc) or not  (contraindicated, complete, etc).",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "ImmunizationRecommendationStatus",
          },
        ],
        strength: "example",
        description:
          "The patient's status with respect to a vaccination protocol.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/immunization-recommendation-status",
      },
      mapping: [
        { identity: "v2", map: "OBX-5 : OBX-3 = 59783-1" },
        {
          identity: "rim",
          map: '.inboundRelationship[typeCode=SUBJ] .source[classCode=OBS, moodCode=EVN, code="Immunization Forecast Status"].value',
        },
      ],
    },
    dataPath: "root.recommendation.forecastStatus",
    parentDataPath: "root.recommendation[0]",
    basePath: "root.forecastStatus",
    baseId: "ImmunizationRecommendation.recommendation.forecastStatus",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status",
        code: "due",
        display: "Due",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status",
        code: "overdue",
        display: "Overdue",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status",
        code: "immune",
        display: "Immune",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status",
        code: "contraindicated",
        display: "Contraindicated",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status",
        code: "complete",
        display: "Complete",
      },
    ],
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.forecastReason",
      path: "ImmunizationRecommendation.recommendation.forecastReason",
      short: "Vaccine administration status reason",
      definition: "The reason for the assigned forecast status.",
      min: 0,
      max: "*",
      base: {
        path: "ImmunizationRecommendation.recommendation.forecastReason",
        min: 0,
        max: "*",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "ImmunizationRecommendationReason",
          },
        ],
        strength: "example",
        description:
          "The reason for the patient's status with respect to a vaccination protocol.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/immunization-recommendation-reason",
      },
      mapping: [
        { identity: "v2", map: "OBX-5 : OBX-3 = 30982-3" },
        { identity: "rim", map: "N/A" },
      ],
    },
    dataPath: "root.recommendation.forecastReason[0]",
    parentDataPath: "root.recommendation[0]",
    basePath: "root.forecastReason",
    baseId: "ImmunizationRecommendation.recommendation.forecastReason",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [{ code: "77176002" }, { code: "77386006" }],
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.dateCriterion",
      path: "ImmunizationRecommendation.recommendation.dateCriterion",
      short: "Dates governing proposed immunization",
      definition:
        "Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.",
      min: 0,
      max: "*",
      base: {
        path: "ImmunizationRecommendation.recommendation.dateCriterion",
        min: 0,
        max: "*",
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
        { identity: "workflow", map: "Request.occurrence[x]" },
        {
          identity: "v2",
          map: "OBX-3: 30980-7 = Next dose recommended, 59777-3 = Latest next dose should be given, 59778-1 = Dose is overdue",
        },
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode='LIMIT'].target[classCode=OBS, moodCode=EVN, isCriterionInd=true]",
        },
      ],
    },
    dataPath: "root.recommendation.dateCriterion[0]",
    parentDataPath: "root.recommendation[0]",
    basePath: "root.dateCriterion",
    baseId: "ImmunizationRecommendation.recommendation.dateCriterion",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.dateCriterion.code",
      "root.recommendation.dateCriterion.value",
    ],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.dateCriterion.code",
      path: "ImmunizationRecommendation.recommendation.dateCriterion.code",
      short: "Type of date",
      definition:
        "Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.",
      min: 1,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.dateCriterion.code",
        min: 1,
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
            valueString: "ImmunizationRecommendationDateCriterion",
          },
        ],
        strength: "example",
        description:
          "Classifies date criterion with respect to conveying information about a patient's vaccination status (e.g. due date, latest to give date, etc.).",
        valueSet:
          "http://hl7.org/fhir/ValueSet/immunization-recommendation-date-criterion",
      },
      mapping: [
        { identity: "v2", map: "OBX-3" },
        { identity: "rim", map: ".code" },
      ],
    },
    dataPath: "root.recommendation.dateCriterion.code",
    parentDataPath: "root.recommendation.dateCriterion[0]",
    basePath: "root.code",
    baseId: "ImmunizationRecommendation.recommendation.dateCriterion.code",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      { code: "30981-5" },
      { code: "30980-7" },
      { code: "59777-3" },
      { code: "59778-1" },
    ],
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.dateCriterion.value",
      path: "ImmunizationRecommendation.recommendation.dateCriterion.value",
      short: "Recommended date",
      definition: "The date whose meaning is specified by dateCriterion.code.",
      min: 1,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.dateCriterion.value",
        min: 1,
        max: "1",
      },
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
      isSummary: false,
      mapping: [
        { identity: "v2", map: "OBX-5" },
        { identity: "rim", map: ".value" },
      ],
    },
    dataPath: "root.recommendation.dateCriterion.value",
    parentDataPath: "root.recommendation.dateCriterion[0]",
    basePath: "root.value",
    baseId: "ImmunizationRecommendation.recommendation.dateCriterion.value",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.description",
      path: "ImmunizationRecommendation.recommendation.description",
      short: "Protocol details",
      definition:
        "Contains the description about the protocol under which the vaccine was administered.",
      min: 0,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.description",
        min: 0,
        max: "1",
      },
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
        { identity: "v2", map: "OBX-5 : OBX-3 = 30956-7" },
        { identity: "rim", map: ".text" },
      ],
    },
    dataPath: "root.recommendation.description",
    parentDataPath: "root.recommendation[0]",
    basePath: "root.description",
    baseId: "ImmunizationRecommendation.recommendation.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.series",
      path: "ImmunizationRecommendation.recommendation.series",
      short: "Name of vaccination series",
      definition:
        "One possible path to achieve presumed immunity against a disease - within the context of an authority.",
      min: 0,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.series",
        min: 0,
        max: "1",
      },
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
        { identity: "v2", map: "RXA-5-administered code" },
        { identity: "rim", map: ".title" },
      ],
    },
    dataPath: "root.recommendation.series",
    parentDataPath: "root.recommendation[0]",
    basePath: "root.series",
    baseId: "ImmunizationRecommendation.recommendation.series",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.seriesDoses[x]",
      path: "ImmunizationRecommendation.recommendation.seriesDoses[x]",
      short: "Recommended number of doses for immunity",
      definition: "The recommended number of doses to achieve immunity.",
      comment:
        "The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).",
      min: 0,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.seriesDoses[x]",
        min: 0,
        max: "1",
      },
      type: [{ code: "positiveInt" }, { code: "string" }],
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
        { identity: "v2", map: "OBX-5 : OBX-3 = 59782-3" },
        {
          identity: "rim",
          map: ".inboundRelationship[typeCode=COMP, .source[classCode=SBADM, moodCode=DEF]].sequenceNumber",
        },
      ],
    },
    dataPath: "root.recommendation.seriesDoses[x]",
    parentDataPath: "root.recommendation[0]",
    basePath: "root.seriesDoses[x]",
    baseId: "ImmunizationRecommendation.recommendation.seriesDoses[x]",
    isPrimitive: false,
    childPaths: [],
    multiTypeType: "positiveInt",
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.supportingPatientInformation",
      path: "ImmunizationRecommendation.recommendation.supportingPatientInformation",
      short: "Patient observations supporting recommendation",
      definition:
        "Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.",
      min: 0,
      max: "*",
      base: {
        path: "ImmunizationRecommendation.recommendation.supportingPatientInformation",
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
        { identity: "workflow", map: "Request.supportingInfo" },
        {
          identity: "v2",
          map: "OBX If OBX is associated with ( RXA : RXA-5-administered code = '998^No vaccine administered^CVX'), could contain the reason the vaccine was not administered",
        },
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=RSON].target[classCode=OBS, moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.recommendation.supportingPatientInformation[0]",
    parentDataPath: "root.recommendation[0]",
    basePath: "root.supportingPatientInformation",
    baseId:
      "ImmunizationRecommendation.recommendation.supportingPatientInformation",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation",
      path: "ImmunizationRecommendation",
      short: "Guidance or advice relating to an immunization",
      definition:
        "A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.",
      min: 0,
      max: "*",
      base: { path: "ImmunizationRecommendation", min: 0, max: "*" },
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
        { identity: "v2", map: "VXU_V04" },
        { identity: "rim", map: "SubstanceAdministration[moodCode=RMD]" },
        { identity: "w5", map: "clinical.medication" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "ImmunizationRecommendation",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;