const data = [
  {
    element: {
      id: "AllergyIntolerance.meta",
      path: "AllergyIntolerance.meta",
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
    baseId: "AllergyIntolerance.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance.implicitRules",
      path: "AllergyIntolerance.implicitRules",
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
    baseId: "AllergyIntolerance.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance.language",
      path: "AllergyIntolerance.language",
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
    baseId: "AllergyIntolerance.language",
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
      id: "AllergyIntolerance.contained",
      path: "AllergyIntolerance.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
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
    baseId: "AllergyIntolerance.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance.clinicalStatus",
      path: "AllergyIntolerance.clinicalStatus",
      short: "active | inactive | resolved",
      definition: "The clinical status of the allergy or intolerance.",
      comment:
        "Refer to [discussion](extensibility.html#Special-Case) if clincalStatus is missing data.\nThe data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.",
      min: 0,
      max: "1",
      base: { path: "AllergyIntolerance.clinicalStatus", min: 0, max: "1" },
      type: [{ code: "CodeableConcept" }],
      condition: ["ait-1", "ait-2"],
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
        "This element is labeled as a modifier because the status contains the codes inactive and resolved that mark the AllergyIntolerance as no longer active.",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "AllergyIntoleranceClinicalStatus",
          },
        ],
        strength: "required",
        description: "The clinical status of the allergy or intolerance.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/allergyintolerance-clinical|4.3.0",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.status" },
        {
          identity: "rim",
          map: 'Observation ACT .inboundRelationship[typeCode=COMP].source[classCode=OBS, code="clinicalStatus", moodCode=EVN].value',
        },
      ],
    },
    dataPath: "root.clinicalStatus",
    parentDataPath: "root",
    basePath: "root.clinicalStatus",
    baseId: "AllergyIntolerance.clinicalStatus",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
        code: "active",
        display: "Active",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
        code: "inactive",
        display: "Inactive",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
        code: "resolved",
        display: "Resolved",
      },
    ],
  },
  {
    element: {
      id: "AllergyIntolerance.verificationStatus",
      path: "AllergyIntolerance.verificationStatus",
      short: "unconfirmed | confirmed | refuted | entered-in-error",
      definition:
        "Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).",
      comment:
        "The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.",
      min: 0,
      max: "1",
      base: { path: "AllergyIntolerance.verificationStatus", min: 0, max: "1" },
      type: [{ code: "CodeableConcept" }],
      condition: ["ait-1", "ait-2"],
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
        "This element is labeled as a modifier because the status contains the codes refuted and entered-in-error that mark the AllergyIntolerance as not currently valid.",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "AllergyIntoleranceVerificationStatus",
          },
        ],
        strength: "required",
        description:
          "Assertion about certainty associated with a propensity, or potential risk, of a reaction to the identified substance.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/allergyintolerance-verification|4.3.0",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.status" },
        {
          identity: "rim",
          map: 'Observation ACT .inboundRelationship[typeCode=COMP].source[classCode=OBS, code="verificationStatus", moodCode=EVN].value',
        },
      ],
    },
    dataPath: "root.verificationStatus",
    parentDataPath: "root",
    basePath: "root.verificationStatus",
    baseId: "AllergyIntolerance.verificationStatus",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
        code: "unconfirmed",
        display: "Unconfirmed",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
        code: "presumed",
        display: "Presumed",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
        code: "confirmed",
        display: "Confirmed",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
        code: "refuted",
        display: "Refuted",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
        code: "entered-in-error",
        display: "Entered in Error",
      },
    ],
  },
  {
    element: {
      id: "AllergyIntolerance.type",
      path: "AllergyIntolerance.type",
      short: "allergy | intolerance - Underlying mechanism (if known)",
      definition:
        "Identification of the underlying physiological mechanism for the reaction risk.",
      comment:
        'Allergic (typically immune-mediated) reactions have been traditionally regarded as an indicator for potential escalation to significant future risk. Contemporary knowledge suggests that some reactions previously thought to be immune-mediated are, in fact, non-immune, but in some cases can still pose a life threatening risk. It is acknowledged that many clinicians might not be in a position to distinguish the mechanism of a particular reaction. Often the term "allergy" is used rather generically and may overlap with the use of "intolerance" - in practice the boundaries between these two concepts might not be well-defined or understood. This data element is included nevertheless, because many legacy systems have captured this attribute. Immunologic testing may provide supporting evidence for the basis of the reaction and the causative substance, but no tests are 100% sensitive or specific for sensitivity to a particular substance. If, as is commonly the case, it is unclear whether the reaction is due to an allergy or an intolerance, then the type element should be omitted from the resource.',
      alias: ["Category", "Class"],
      min: 0,
      max: "1",
      base: { path: "AllergyIntolerance.type", min: 0, max: "1" },
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
            valueString: "AllergyIntoleranceType",
          },
        ],
        strength: "required",
        description:
          "Identification of the underlying physiological mechanism for a Reaction Risk.",
        valueSet: "http://hl7.org/fhir/ValueSet/allergy-intolerance-type|4.3.0",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.class" },
        { identity: "v2", map: "IAM-9" },
        { identity: "rim", map: "code" },
      ],
    },
    dataPath: "root.type",
    parentDataPath: "root",
    basePath: "root.type",
    baseId: "AllergyIntolerance.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/allergy-intolerance-type",
        code: "allergy",
        display: "Allergy",
      },
      {
        system: "http://hl7.org/fhir/allergy-intolerance-type",
        code: "intolerance",
        display: "Intolerance",
      },
    ],
  },
  {
    element: {
      id: "AllergyIntolerance.category",
      path: "AllergyIntolerance.category",
      short: "food | medication | environment | biologic",
      definition: "Category of the identified substance.",
      comment:
        "This data element has been included because it is currently being captured in some clinical systems. This data can be derived from the substance where coding systems are used, and is effectively redundant in that situation.  When searching on category, consider the implications of AllergyIntolerance resources without a category.  For example, when searching on category = medication, medication allergies that don't have a category valued will not be returned.  Refer to [search](search.html) for more information on how to search category with a :missing modifier to get allergies that don't have a category.  Additionally, category should be used with caution because category can be subjective based on the sender.",
      alias: ["Category", "Type", "Reaction Type", "Class"],
      min: 0,
      max: "*",
      base: { path: "AllergyIntolerance.category", min: 0, max: "*" },
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
            valueString: "AllergyIntoleranceCategory",
          },
        ],
        strength: "required",
        description:
          "Category of an identified substance associated with allergies or intolerances.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/allergy-intolerance-category|4.3.0",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.class" },
        { identity: "v2", map: "AL1-2" },
        { identity: "rim", map: "value < IntoleranceValue (Agent)" },
      ],
    },
    dataPath: "root.category[0]",
    parentDataPath: "root",
    basePath: "root.category",
    baseId: "AllergyIntolerance.category",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/allergy-intolerance-category",
        code: "food",
        display: "Food",
      },
      {
        system: "http://hl7.org/fhir/allergy-intolerance-category",
        code: "medication",
        display: "Medication",
      },
      {
        system: "http://hl7.org/fhir/allergy-intolerance-category",
        code: "environment",
        display: "Environment",
      },
      {
        system: "http://hl7.org/fhir/allergy-intolerance-category",
        code: "biologic",
        display: "Biologic",
      },
    ],
  },
  {
    element: {
      id: "AllergyIntolerance.criticality",
      path: "AllergyIntolerance.criticality",
      short: "low | high | unable-to-assess",
      definition:
        "Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.",
      comment:
        "The default criticality value for any propensity to an adverse reaction should be 'Low Risk', indicating at the very least a relative contraindication to deliberate or voluntary exposure to the substance. 'High Risk' is flagged if the clinician has identified a propensity for a more serious or potentially life-threatening reaction, such as anaphylaxis, and implies an absolute contraindication to deliberate or voluntary exposure to the substance. If this element is missing, the criticality is unknown (though it may be known elsewhere).  Systems that capture a severity at the condition level are actually representing the concept of criticality whereas the severity documented at the reaction level is representing the true reaction severity.  Existing systems that are capturing both condition criticality and reaction severity may use the term \"severity\" to represent both.  Criticality is the worst it could be in the future (i.e. situation-agnostic) whereas severity is situation-dependent.",
      alias: ["Severity", "Seriousness", "Contra-indication", "Risk"],
      min: 0,
      max: "1",
      base: { path: "AllergyIntolerance.criticality", min: 0, max: "1" },
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
            valueString: "AllergyIntoleranceCriticality",
          },
        ],
        strength: "required",
        description:
          "Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality|4.3.0",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.grade" },
        { identity: "v2", map: "AL1-4" },
        {
          identity: "rim",
          map: "inboundRelationship[typeCode=SUBJ].source[classCode=OBS, moodCode=EVN, code=SEV, value <= SeverityObservation (Severity Level)]",
        },
      ],
    },
    dataPath: "root.criticality",
    parentDataPath: "root",
    basePath: "root.criticality",
    baseId: "AllergyIntolerance.criticality",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/allergy-intolerance-criticality",
        code: "low",
        display: "Low Risk",
      },
      {
        system: "http://hl7.org/fhir/allergy-intolerance-criticality",
        code: "high",
        display: "High Risk",
      },
      {
        system: "http://hl7.org/fhir/allergy-intolerance-criticality",
        code: "unable-to-assess",
        display: "Unable to Assess Risk",
      },
    ],
  },
  {
    element: {
      id: "AllergyIntolerance.patient",
      path: "AllergyIntolerance.patient",
      short: "Who the sensitivity is for",
      definition: "The patient who has the allergy or intolerance.",
      alias: ["Patient"],
      min: 1,
      max: "1",
      base: { path: "AllergyIntolerance.patient", min: 1, max: "1" },
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
        { identity: "w5", map: "FiveWs.subject[x]" },
        { identity: "v2", map: "(PID-3)" },
        {
          identity: "rim",
          map: ".participation[typeCode=SBJ].role[classCode=PAT]",
        },
        { identity: "w5", map: "FiveWs.subject" },
      ],
    },
    dataPath: "root.patient",
    parentDataPath: "root",
    basePath: "root.patient",
    baseId: "AllergyIntolerance.patient",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance.onset[x]",
      path: "AllergyIntolerance.onset[x]",
      short: "When allergy or intolerance was identified",
      definition:
        "Estimated or actual date,  date-time, or age when allergy or intolerance was identified.",
      min: 0,
      max: "1",
      base: { path: "AllergyIntolerance.onset[x]", min: 0, max: "1" },
      type: [
        { code: "dateTime" },
        { code: "Age" },
        { code: "Period" },
        { code: "Range" },
        { code: "string" },
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
        { identity: "w5", map: "FiveWs.init" },
        { identity: "rim", map: "effectiveTime.low" },
      ],
    },
    dataPath: "root.onset[x]",
    parentDataPath: "root",
    basePath: "root.onset[x]",
    baseId: "AllergyIntolerance.onset[x]",
    isPrimitive: false,
    childPaths: [],
    multiTypeType: "dateTime",
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance.recordedDate",
      path: "AllergyIntolerance.recordedDate",
      short: "Date first version of the resource instance was recorded",
      definition:
        "The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.",
      min: 0,
      max: "1",
      base: { path: "AllergyIntolerance.recordedDate", min: 0, max: "1" },
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
        { identity: "w5", map: "FiveWs.recorded" },
        { identity: "v2", map: "IAM-13" },
        { identity: "rim", map: ".participation[typeCode=AUT].time" },
      ],
    },
    dataPath: "root.recordedDate",
    parentDataPath: "root",
    basePath: "root.recordedDate",
    baseId: "AllergyIntolerance.recordedDate",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance.asserter",
      path: "AllergyIntolerance.asserter",
      short: "Source of the information about the allergy",
      definition:
        "The source of the information about the allergy that is recorded.",
      comment:
        "The recorder takes responsibility for the content, but can reference the source from where they got it.",
      alias: ["Source", "Informant"],
      min: 0,
      max: "1",
      base: { path: "AllergyIntolerance.asserter", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Patient",
            "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
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
      isSummary: true,
      mapping: [
        { identity: "w5", map: "FiveWs.source" },
        {
          identity: "v2",
          map: "IAM-14 (if patient) / IAM-18 (if practitioner)",
        },
        { identity: "rim", map: ".participation[typeCode=INF].role" },
      ],
    },
    dataPath: "root.asserter",
    parentDataPath: "root",
    basePath: "root.asserter",
    baseId: "AllergyIntolerance.asserter",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance.lastOccurrence",
      path: "AllergyIntolerance.lastOccurrence",
      short: "Date(/time) of last known occurrence of a reaction",
      definition:
        "Represents the date and/or time of the last known occurrence of a reaction event.",
      comment:
        "This date may be replicated by one of the Onset of Reaction dates. Where a textual representation of the date of last occurrence is required e.g. 'In Childhood, '10 years ago' the Comment element should be used.",
      min: 0,
      max: "1",
      base: { path: "AllergyIntolerance.lastOccurrence", min: 0, max: "1" },
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
        {
          identity: "rim",
          map: "outBoundRelationship[typeCode=SUBJ].target[classCode=OBS, moodCode=EVN, code <= CommonClinicalObservationType, value <= ObservationValue (Reaction Type)].effectiveTime",
        },
      ],
    },
    dataPath: "root.lastOccurrence",
    parentDataPath: "root",
    basePath: "root.lastOccurrence",
    baseId: "AllergyIntolerance.lastOccurrence",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance.reaction",
      path: "AllergyIntolerance.reaction",
      short: "Adverse Reaction Events linked to exposure to substance",
      definition:
        "Details about each adverse reaction event linked to exposure to the identified substance.",
      min: 0,
      max: "*",
      base: { path: "AllergyIntolerance.reaction", min: 0, max: "*" },
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
          map: "outBoundRelationship[typeCode=SUBJ].target[classCode=OBS, moodCode=EVN, code <= CommonClinicalObservationType, value <= ObservationValue (Reaction Type)]",
        },
      ],
    },
    dataPath: "root.reaction[0]",
    parentDataPath: "root",
    basePath: "root.reaction",
    baseId: "AllergyIntolerance.reaction",
    isPrimitive: false,
    childPaths: [
      "root.reaction.substance",
      "root.reaction.manifestation[0]",
      "root.reaction.description",
      "root.reaction.onset",
      "root.reaction.severity",
      "root.reaction.exposureRoute",
      "root.reaction.note[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance.reaction.manifestation",
      path: "AllergyIntolerance.reaction.manifestation",
      short: "Clinical symptoms/signs associated with the Event",
      definition:
        "Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.",
      comment:
        "Manifestation can be expressed as a single word, phrase or brief description. For example: nausea, rash or no reaction. It is preferable that manifestation should be coded with a terminology, where possible. The values entered here may be used to display on an application screen as part of a list of adverse reactions, as recommended in the UK NHS CUI guidelines.  Terminologies commonly used include, but are not limited to, SNOMED CT or ICD10.",
      alias: ["Symptoms", "Signs"],
      min: 1,
      max: "*",
      base: {
        path: "AllergyIntolerance.reaction.manifestation",
        min: 1,
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
      isSummary: false,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "Manifestation",
          },
        ],
        strength: "example",
        description:
          "Clinical symptoms and/or signs that are observed or associated with an Adverse Reaction Event.",
        valueSet: "http://hl7.org/fhir/ValueSet/clinical-findings",
      },
      mapping: [
        { identity: "v2", map: "AL1-5" },
        { identity: "rim", map: "code" },
      ],
    },
    dataPath: "root.reaction.manifestation[0]",
    parentDataPath: "root.reaction[0]",
    basePath: "root.manifestation",
    baseId: "AllergyIntolerance.reaction.manifestation",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance.reaction.description",
      path: "AllergyIntolerance.reaction.description",
      short: "Description of the event as a whole",
      definition:
        "Text description about the reaction as a whole, including details of the manifestation if required.",
      comment:
        "Use the description to provide any details of a particular event of the occurred reaction such as circumstances, reaction specifics, what happened before/after. Information, related to the event, but not describing a particular care should be captured in the comment field. For example: at the age of four, the patient was given penicillin for strep throat and subsequently developed severe hives.",
      alias: ["Narrative", "Text"],
      min: 0,
      max: "1",
      base: {
        path: "AllergyIntolerance.reaction.description",
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
      mapping: [{ identity: "rim", map: "text" }],
    },
    dataPath: "root.reaction.description",
    parentDataPath: "root.reaction[0]",
    basePath: "root.description",
    baseId: "AllergyIntolerance.reaction.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance.reaction.onset",
      path: "AllergyIntolerance.reaction.onset",
      short: "Date(/time) when manifestations showed",
      definition:
        "Record of the date and/or time of the onset of the Reaction.",
      min: 0,
      max: "1",
      base: { path: "AllergyIntolerance.reaction.onset", min: 0, max: "1" },
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
        { identity: "v2", map: "AL1-6" },
        { identity: "rim", map: "effectiveTime.low" },
      ],
    },
    dataPath: "root.reaction.onset",
    parentDataPath: "root.reaction[0]",
    basePath: "root.onset",
    baseId: "AllergyIntolerance.reaction.onset",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance.reaction.severity",
      path: "AllergyIntolerance.reaction.severity",
      short: "mild | moderate | severe (of event as a whole)",
      definition:
        "Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.",
      comment:
        "It is acknowledged that this assessment is very subjective. There may be some specific practice domains where objective scales have been applied. Objective scales can be included in this model as extensions.",
      min: 0,
      max: "1",
      base: { path: "AllergyIntolerance.reaction.severity", min: 0, max: "1" },
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
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "AllergyIntoleranceSeverity",
          },
        ],
        strength: "required",
        description:
          "Clinical assessment of the severity of a reaction event as a whole, potentially considering multiple different manifestations.",
        valueSet: "http://hl7.org/fhir/ValueSet/reaction-event-severity|4.3.0",
      },
      mapping: [
        {
          identity: "rim",
          map: "inboundRelationship[typeCode=SUBJ].source[classCode=OBS, moodCode=EVN, code=SEV, value <= SeverityObservation (Severity Level)]",
        },
      ],
    },
    dataPath: "root.reaction.severity",
    parentDataPath: "root.reaction[0]",
    basePath: "root.severity",
    baseId: "AllergyIntolerance.reaction.severity",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/reaction-event-severity",
        code: "mild",
        display: "Mild",
      },
      {
        system: "http://hl7.org/fhir/reaction-event-severity",
        code: "moderate",
        display: "Moderate",
      },
      {
        system: "http://hl7.org/fhir/reaction-event-severity",
        code: "severe",
        display: "Severe",
      },
    ],
  },
  {
    element: {
      id: "AllergyIntolerance.reaction.note",
      path: "AllergyIntolerance.reaction.note",
      short: "Text about event not captured in other fields",
      definition:
        "Additional text about the adverse reaction event not captured in other fields.",
      comment:
        "Use this field to record information indirectly related to a particular event and not captured in the description. For example: Clinical records are no longer available, recorded based on information provided to the patient by her mother and her mother is deceased.",
      min: 0,
      max: "*",
      base: { path: "AllergyIntolerance.reaction.note", min: 0, max: "*" },
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
        {
          identity: "rim",
          map: 'subjectOf.observationEvent[code="annotation"].value',
        },
      ],
    },
    dataPath: "root.reaction.note[0]",
    parentDataPath: "root.reaction[0]",
    basePath: "root.note",
    baseId: "AllergyIntolerance.reaction.note",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "AllergyIntolerance",
      path: "AllergyIntolerance",
      short:
        "Allergy or Intolerance (generally: Risk of adverse reaction to a substance)",
      definition:
        "Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.",
      comment:
        "Substances include, but are not limited to: a therapeutic substance administered correctly at an appropriate dosage for the individual; food; material derived from plants or animals; or venom from insect stings.",
      alias: ["Allergy", "Intolerance", "Adverse Reaction"],
      min: 0,
      max: "*",
      base: { path: "AllergyIntolerance", min: 0, max: "*" },
      constraint: [
        {
          key: "ait-1",
          severity: "error",
          human:
            "AllergyIntolerance.clinicalStatus SHALL be present if verificationStatus is not entered-in-error.",
          expression:
            "(verificationStatus.exists() and verificationStatus.coding.where(system='http://terminology.hl7.org/CodeSystem/allergyintolerance-verification' and code='entered-in-error').exists().not()) implies clinicalStatus.exists()",
          xpath:
            "not(exists(f:verificationStatus) and not(exists(f:verificationStatus/f:coding[f:system/@value='http://terminology.hl7.org/CodeSystem/allergyintolerance-verification' and f:code/@value='entered-in-error']))) or exists(f:clinicalStatus)",
          source: "http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
        },
        {
          key: "ait-2",
          severity: "error",
          human:
            "AllergyIntolerance.clinicalStatus SHALL NOT be present if verification Status is entered-in-error",
          expression:
            "(verificationStatus.coding.where(system='http://terminology.hl7.org/CodeSystem/allergyintolerance-verification' and code='entered-in-error').exists()) implies clinicalStatus.exists().not()",
          xpath:
            "not(exists(f:verificationStatus/f:coding[f:system/@value='http://terminology.hl7.org/CodeSystem/allergyintolerance-verification' and f:code/@value='entered-in-error'])) or not(exists(f:clinicalStatus))",
          source: "http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
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
        { identity: "rim", map: "Observation[classCode=OBS, moodCode=EVN]" },
        { identity: "w5", map: "clinical.general" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "AllergyIntolerance",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
