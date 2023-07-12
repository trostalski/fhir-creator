const data = [
  {
    element: {
      id: "ClinicalUseDefinition.meta",
      path: "ClinicalUseDefinition.meta",
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
    baseId: "ClinicalUseDefinition.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.implicitRules",
      path: "ClinicalUseDefinition.implicitRules",
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
    baseId: "ClinicalUseDefinition.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.language",
      path: "ClinicalUseDefinition.language",
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
    baseId: "ClinicalUseDefinition.language",
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
      id: "ClinicalUseDefinition.contained",
      path: "ClinicalUseDefinition.contained",
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
            "http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition",
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
    baseId: "ClinicalUseDefinition.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.type",
      path: "ClinicalUseDefinition.type",
      short:
        "indication | contraindication | interaction | undesirable-effect | warning",
      definition:
        "indication | contraindication | interaction | undesirable-effect | warning.",
      min: 1,
      max: "1",
      base: { path: "ClinicalUseDefinition.type", min: 1, max: "1" },
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
            valueString: "ClinicalUseDefinitionType",
          },
        ],
        strength: "required",
        description: "Overall defining type of this clinical use definition.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/clinical-use-definition-type|4.3.0",
      },
      mapping: [
        {
          identity: "idmp",
          map: "(the type of IDMP class, out of Contraindication, Therapeutic Indication, Interactions, Undesirable Effects)",
        },
      ],
    },
    dataPath: "root.type",
    parentDataPath: "root",
    basePath: "root.type",
    baseId: "ClinicalUseDefinition.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/clinical-use-definition-type",
        code: "indication",
        display: "Indication",
      },
      {
        system: "http://hl7.org/fhir/clinical-use-definition-type",
        code: "contraindication",
        display: "Contraindication",
      },
      {
        system: "http://hl7.org/fhir/clinical-use-definition-type",
        code: "interaction",
        display: "Interaction",
      },
      {
        system: "http://hl7.org/fhir/clinical-use-definition-type",
        code: "undesirable-effect",
        display: "Undesirable Effect",
      },
      {
        system: "http://hl7.org/fhir/clinical-use-definition-type",
        code: "warning",
        display: "Warning",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.category",
      path: "ClinicalUseDefinition.category",
      short:
        'A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy", "Overdose"',
      definition:
        'A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy and Lactation", "Overdose", "Effects on Ability to Drive and Use Machines".',
      min: 0,
      max: "*",
      base: { path: "ClinicalUseDefinition.category", min: 0, max: "*" },
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
            valueString: "ClinicalUseDefinitionCategory",
          },
        ],
        strength: "preferred",
        description: "A categorisation for a clinical use information item.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/clinical-use-definition-category",
      },
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.category[0]",
    parentDataPath: "root",
    basePath: "root.category",
    baseId: "ClinicalUseDefinition.category",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/clinical-use-definition-category",
        code: "Pregnancy",
        display: "Pregnancy and Lactation",
      },
      {
        system: "http://hl7.org/fhir/clinical-use-definition-category",
        code: "Overdose",
        display: "Overdose",
      },
      {
        system: "http://hl7.org/fhir/clinical-use-definition-category",
        code: "DriveAndMachines",
        display: "Effects on Ability to Drive and Use Machines",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.status",
      path: "ClinicalUseDefinition.status",
      short: "Whether this is a current issue or one that has been retired etc",
      definition:
        "Whether this is a current issue or one that has been retired etc.",
      min: 0,
      max: "1",
      base: { path: "ClinicalUseDefinition.status", min: 0, max: "1" },
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
            valueString: "PublicationStatus",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "preferred",
        description: "The lifecycle status of an artifact.",
        valueSet: "http://hl7.org/fhir/ValueSet/publication-status",
      },
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "ClinicalUseDefinition.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/publication-status",
        code: "draft",
        display: "Draft",
      },
      {
        system: "http://hl7.org/fhir/publication-status",
        code: "active",
        display: "Active",
      },
      {
        system: "http://hl7.org/fhir/publication-status",
        code: "retired",
        display: "Retired",
      },
      {
        system: "http://hl7.org/fhir/publication-status",
        code: "unknown",
        display: "Unknown",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.contraindication",
      path: "ClinicalUseDefinition.contraindication",
      short: "Specifics for when this is a contraindication",
      definition: "Specifics for when this is a contraindication.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.contraindication",
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
      isSummary: true,
      mapping: [{ identity: "idmp", map: "Contraindication" }],
    },
    dataPath: "root.contraindication",
    parentDataPath: "root",
    basePath: "root.contraindication",
    baseId: "ClinicalUseDefinition.contraindication",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.diseaseSymptomProcedure",
      "root.contraindication.diseaseStatus",
      "root.contraindication.comorbidity[0]",
      "root.contraindication.indication[0]",
      "root.contraindication.otherTherapy[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.contraindication.diseaseStatus",
      path: "ClinicalUseDefinition.contraindication.diseaseStatus",
      short: "The status of the disease or symptom for the contraindication",
      definition:
        'The status of the disease or symptom for the contraindication, for example "chronic" or "metastatic".',
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.contraindication.diseaseStatus",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "CodeableReference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
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
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DiseaseStatus",
          },
        ],
        strength: "example",
        description: "The status of a disease or symptom.",
        valueSet: "http://hl7.org/fhir/ValueSet/disease-status",
      },
      mapping: [{ identity: "idmp", map: "Contraindication.Disease Status" }],
    },
    dataPath: "root.contraindication.diseaseStatus",
    parentDataPath: "root.contraindication",
    basePath: "root.diseaseStatus",
    baseId: "ClinicalUseDefinition.contraindication.diseaseStatus",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.contraindication.indication",
      path: "ClinicalUseDefinition.contraindication.indication",
      short: "The indication which this is a contraidication for",
      definition: "The indication which this is a contraidication for.",
      min: 0,
      max: "*",
      base: {
        path: "ClinicalUseDefinition.contraindication.indication",
        min: 0,
        max: "*",
      },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition",
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
        {
          identity: "idmp",
          map: "(the link from Contraindication to Therapeutic Indication)",
        },
      ],
    },
    dataPath: "root.contraindication.indication[0]",
    parentDataPath: "root.contraindication",
    basePath: "root.indication",
    baseId: "ClinicalUseDefinition.contraindication.indication",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.contraindication.otherTherapy",
      path: "ClinicalUseDefinition.contraindication.otherTherapy",
      short:
        "Information about use of the product in relation to other therapies described as part of the contraindication",
      definition:
        "Information about the use of the medicinal product in relation to other therapies described as part of the contraindication.",
      min: 0,
      max: "*",
      base: {
        path: "ClinicalUseDefinition.contraindication.otherTherapy",
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
      isSummary: true,
      mapping: [
        { identity: "idmp", map: "Contraindication.Other Therapy Specifics" },
      ],
    },
    dataPath: "root.contraindication.otherTherapy[0]",
    parentDataPath: "root.contraindication",
    basePath: "root.otherTherapy",
    baseId: "ClinicalUseDefinition.contraindication.otherTherapy",
    isPrimitive: false,
    childPaths: [
      "root.contraindication.otherTherapy.relationshipType",
      "root.contraindication.otherTherapy.therapy",
    ],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.contraindication.otherTherapy.relationshipType",
      path: "ClinicalUseDefinition.contraindication.otherTherapy.relationshipType",
      short:
        "The type of relationship between the product indication/contraindication and another therapy",
      definition:
        "The type of relationship between the medicinal product indication or contraindication and another therapy.",
      min: 1,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.contraindication.otherTherapy.relationshipType",
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
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "TherapyRelationshipType",
          },
        ],
        strength: "preferred",
        description:
          "Classification of relationship between a therapy and a contraindication or an indication.",
        valueSet: "http://hl7.org/fhir/ValueSet/therapy-relationship-type",
      },
      mapping: [
        {
          identity: "idmp",
          map: "Other Therapy Specifics.Therapy Relationship Type",
        },
      ],
    },
    dataPath: "root.contraindication.otherTherapy.relationshipType",
    parentDataPath: "root.contraindication.otherTherapy[0]",
    basePath: "root.relationshipType",
    baseId:
      "ClinicalUseDefinition.contraindication.otherTherapy.relationshipType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "contraindicated-only-with",
        display: "Only contraindicated if the other therapy is given",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "contraindicated-except-with",
        display: "Contraindicated unless the other therapy is given",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "indicated-only-with",
        display:
          "Indicated only when the other therapy is given (co-occurrent)",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "indicated-except-with",
        display: "Indicated except when the other therapy is given",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "indicated-only-before",
        display:
          "Indicated only if the other therapy is planned to be given afterwards (prep)",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "indicated-only-before",
        display:
          "Indicated only if the other therapy was given before (follow-up)",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "replace-other-therapy",
        display: "Indicated to replace the other therapy",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "replace-other-therapy-contraindicated",
        display: "Indicated to replace the other contraindicated therapy",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "replace-other-therapy-not-tolerated",
        display:
          "Indicated to replace the other therapy not well tolerated by patient",
      },
      {
        system: "http://hl7.org/fhir/therapy-relationship-type",
        code: "replace-other-therapy-not-effective",
        display:
          "Indicated to replace the other therapy not effective on patient",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.indication",
      path: "ClinicalUseDefinition.indication",
      short: "Specifics for when this is an indication",
      definition: "Specifics for when this is an indication.",
      min: 0,
      max: "1",
      base: { path: "ClinicalUseDefinition.indication", min: 0, max: "1" },
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
      mapping: [{ identity: "idmp", map: "Therapeutic Indication" }],
    },
    dataPath: "root.indication",
    parentDataPath: "root",
    basePath: "root.indication",
    baseId: "ClinicalUseDefinition.indication",
    isPrimitive: false,
    childPaths: [
      "root.indication.diseaseSymptomProcedure",
      "root.indication.diseaseStatus",
      "root.indication.comorbidity[0]",
      "root.indication.intendedEffect",
      "root.indication.duration[x]",
      "root.indication.undesirableEffect[0]",
      "root.indication.otherTherapy[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.indication.diseaseStatus",
      path: "ClinicalUseDefinition.indication.diseaseStatus",
      short: "The status of the disease or symptom for the indication",
      definition:
        'The status of the disease or symptom for the indication, for example "chronic" or "metastatic".',
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.indication.diseaseStatus",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "CodeableReference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
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
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "DiseaseStatus",
          },
        ],
        strength: "example",
        description: "The status of a disease or symptom.",
        valueSet: "http://hl7.org/fhir/ValueSet/disease-status",
      },
      mapping: [
        { identity: "idmp", map: "Therapeutic Indication.Disease Status" },
      ],
    },
    dataPath: "root.indication.diseaseStatus",
    parentDataPath: "root.indication",
    basePath: "root.diseaseStatus",
    baseId: "ClinicalUseDefinition.indication.diseaseStatus",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.indication.intendedEffect",
      path: "ClinicalUseDefinition.indication.intendedEffect",
      short: "The intended effect, aim or strategy to be achieved",
      definition: "The intended effect, aim or strategy to be achieved.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.indication.intendedEffect",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "CodeableReference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
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
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "ProductIntendedUse",
          },
        ],
        strength: "preferred",
        description: "The overall intended use of a product.",
        valueSet: "http://hl7.org/fhir/ValueSet/product-intended-use",
      },
      mapping: [
        { identity: "idmp", map: "Therapeutic Indication.Intended Effect" },
      ],
    },
    dataPath: "root.indication.intendedEffect",
    parentDataPath: "root.indication",
    basePath: "root.intendedEffect",
    baseId: "ClinicalUseDefinition.indication.intendedEffect",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/product-intended-use",
        code: "Prevention",
        display: "Prevention",
      },
      {
        system: "http://hl7.org/fhir/product-intended-use",
        code: "Treatment",
        display: "Treatment",
      },
      {
        system: "http://hl7.org/fhir/product-intended-use",
        code: "Alleviation",
        display: "Alleviation",
      },
      {
        system: "http://hl7.org/fhir/product-intended-use",
        code: "Diagnosis",
        display: "Diagnosis",
      },
      {
        system: "http://hl7.org/fhir/product-intended-use",
        code: "Monitoring",
        display: "Monitoring",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.indication.undesirableEffect",
      path: "ClinicalUseDefinition.indication.undesirableEffect",
      short:
        "An unwanted side effect or negative outcome of the subject of this resource when being used for this indication",
      definition:
        "An unwanted side effect or negative outcome that may happen if you use the drug (or other subject of this resource) for this indication.",
      min: 0,
      max: "*",
      base: {
        path: "ClinicalUseDefinition.indication.undesirableEffect",
        min: 0,
        max: "*",
      },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition",
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
        { identity: "idmp", map: "Therapeutic Indication.Undesirable Effects" },
      ],
    },
    dataPath: "root.indication.undesirableEffect[0]",
    parentDataPath: "root.indication",
    basePath: "root.undesirableEffect",
    baseId: "ClinicalUseDefinition.indication.undesirableEffect",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.interaction",
      path: "ClinicalUseDefinition.interaction",
      short: "Specifics for when this is an interaction",
      definition: "Specifics for when this is an interaction.",
      min: 0,
      max: "1",
      base: { path: "ClinicalUseDefinition.interaction", min: 0, max: "1" },
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
      mapping: [{ identity: "idmp", map: "Interactions" }],
    },
    dataPath: "root.interaction",
    parentDataPath: "root",
    basePath: "root.interaction",
    baseId: "ClinicalUseDefinition.interaction",
    isPrimitive: false,
    childPaths: [
      "root.interaction.interactant[0]",
      "root.interaction.type",
      "root.interaction.effect",
      "root.interaction.incidence",
      "root.interaction.management[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.interaction.interactant",
      path: "ClinicalUseDefinition.interaction.interactant",
      short:
        "The specific medication, food, substance or laboratory test that interacts",
      definition:
        "The specific medication, food, substance or laboratory test that interacts.",
      min: 0,
      max: "*",
      base: {
        path: "ClinicalUseDefinition.interaction.interactant",
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
      isSummary: true,
      mapping: [
        {
          identity: "idmp",
          map: "Interactions.Interactant and Interactions.Interactions Text",
        },
      ],
    },
    dataPath: "root.interaction.interactant[0]",
    parentDataPath: "root.interaction",
    basePath: "root.interactant",
    baseId: "ClinicalUseDefinition.interaction.interactant",
    isPrimitive: false,
    childPaths: ["root.interaction.interactant.item[x]"],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.interaction.type",
      path: "ClinicalUseDefinition.interaction.type",
      short:
        "The type of the interaction e.g. drug-drug interaction, drug-lab test interaction",
      definition:
        "The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.interaction.type",
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
            valueString: "InteractionType",
          },
        ],
        strength: "example",
        description:
          "A categorisation for an interaction between two substances.",
        valueSet: "http://hl7.org/fhir/ValueSet/interaction-type",
      },
      mapping: [{ identity: "idmp", map: "Interactions.Interactions Type" }],
    },
    dataPath: "root.interaction.type",
    parentDataPath: "root.interaction",
    basePath: "root.type",
    baseId: "ClinicalUseDefinition.interaction.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/interaction-type",
        code: "drug-drug",
        display: "drug to drug interaction",
      },
      {
        system: "http://hl7.org/fhir/interaction-type",
        code: "drug-food",
        display: "drug to food interaction",
      },
      {
        system: "http://hl7.org/fhir/interaction-type",
        code: "drug-test",
        display: "drug to laboratory test interaction",
      },
      {
        system: "http://hl7.org/fhir/interaction-type",
        code: "other",
        display: "other interaction",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.interaction.incidence",
      path: "ClinicalUseDefinition.interaction.incidence",
      short: "The incidence of the interaction, e.g. theoretical, observed",
      definition:
        "The incidence of the interaction, e.g. theoretical, observed.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.interaction.incidence",
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
            valueString: "UndesirableEffectSymptom",
          },
        ],
        strength: "example",
        description:
          "A categorisation for incidence of occurence of an interaction.",
        valueSet: "http://hl7.org/fhir/ValueSet/interaction-incidence",
      },
      mapping: [
        { identity: "idmp", map: "Interactions.Interactions Incidence" },
      ],
    },
    dataPath: "root.interaction.incidence",
    parentDataPath: "root.interaction",
    basePath: "root.incidence",
    baseId: "ClinicalUseDefinition.interaction.incidence",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/interaction-incidence",
        code: "Theoretical",
        display: "Theoretical",
      },
      {
        system: "http://hl7.org/fhir/interaction-incidence",
        code: "Observed",
        display: "Observed",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.population",
      path: "ClinicalUseDefinition.population",
      short: "The population group to which this applies",
      definition: "The population group to which this applies.",
      min: 0,
      max: "*",
      base: { path: "ClinicalUseDefinition.population", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Group"],
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
      mapping: [{ identity: "idmp", map: "Population Specifics" }],
    },
    dataPath: "root.population[0]",
    parentDataPath: "root",
    basePath: "root.population",
    baseId: "ClinicalUseDefinition.population",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.undesirableEffect",
      path: "ClinicalUseDefinition.undesirableEffect",
      short: "A possible negative outcome from the use of this treatment",
      definition:
        "Describe the possible undesirable effects (negative outcomes) from the use of the medicinal product as treatment.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.undesirableEffect",
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
      isSummary: true,
      mapping: [{ identity: "idmp", map: "Undesirable Effects" }],
    },
    dataPath: "root.undesirableEffect",
    parentDataPath: "root",
    basePath: "root.undesirableEffect",
    baseId: "ClinicalUseDefinition.undesirableEffect",
    isPrimitive: false,
    childPaths: [
      "root.undesirableEffect.symptomConditionEffect",
      "root.undesirableEffect.classification",
      "root.undesirableEffect.frequencyOfOccurrence",
    ],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.undesirableEffect.classification",
      path: "ClinicalUseDefinition.undesirableEffect.classification",
      short: "High level classification of the effect",
      definition: "High level classification of the effect.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.undesirableEffect.classification",
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
            valueString: "UndesirableEffectClassification",
          },
        ],
        strength: "example",
        description: "A categorisation for an undesirable effect.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/undesirable-effect-classification",
      },
      mapping: [
        {
          identity: "idmp",
          map: "Undesirable Effects.Symptom / Condition / Effect Classification",
        },
      ],
    },
    dataPath: "root.undesirableEffect.classification",
    parentDataPath: "root.undesirableEffect",
    basePath: "root.classification",
    baseId: "ClinicalUseDefinition.undesirableEffect.classification",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.undesirableEffect.frequencyOfOccurrence",
      path: "ClinicalUseDefinition.undesirableEffect.frequencyOfOccurrence",
      short: "How often the effect is seen",
      definition: "How often the effect is seen.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.undesirableEffect.frequencyOfOccurrence",
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
            valueString: "UndesirablEffectFrequency",
          },
        ],
        strength: "example",
        description:
          "A categorisation for a frequency of occurence of an undesirable effect.",
        valueSet: "http://hl7.org/fhir/ValueSet/undesirable-effect-frequency",
      },
      mapping: [
        {
          identity: "idmp",
          map: "Undesirable Effects.Frequency of Occurrence",
        },
      ],
    },
    dataPath: "root.undesirableEffect.frequencyOfOccurrence",
    parentDataPath: "root.undesirableEffect",
    basePath: "root.frequencyOfOccurrence",
    baseId: "ClinicalUseDefinition.undesirableEffect.frequencyOfOccurrence",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/undesirable-effect-frequency",
        code: "Common",
        display: "Common",
      },
      {
        system: "http://hl7.org/fhir/undesirable-effect-frequency",
        code: "Uncommon",
        display: "Uncommon",
      },
      {
        system: "http://hl7.org/fhir/undesirable-effect-frequency",
        code: "Rare",
        display: "Rare",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition.warning",
      path: "ClinicalUseDefinition.warning",
      short:
        "Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness'",
      definition:
        "A critical piece of information about environmental, health or physical risks or hazards that serve as caution to the user. For example 'Do not operate heavy machinery', 'May cause drowsiness', or 'Get medical advice/attention if you feel unwell'.",
      min: 0,
      max: "1",
      base: { path: "ClinicalUseDefinition.warning", min: 0, max: "1" },
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
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.warning",
    parentDataPath: "root",
    basePath: "root.warning",
    baseId: "ClinicalUseDefinition.warning",
    isPrimitive: false,
    childPaths: ["root.warning.description", "root.warning.code"],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.warning.description",
      path: "ClinicalUseDefinition.warning.description",
      short: "A textual definition of this warning, with formatting",
      definition: "A textual definition of this warning, with formatting.",
      min: 0,
      max: "1",
      base: {
        path: "ClinicalUseDefinition.warning.description",
        min: 0,
        max: "1",
      },
      type: [{ code: "markdown" }],
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
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.warning.description",
    parentDataPath: "root.warning",
    basePath: "root.description",
    baseId: "ClinicalUseDefinition.warning.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ClinicalUseDefinition.warning.code",
      path: "ClinicalUseDefinition.warning.code",
      short: "A coded or unformatted textual definition of this warning",
      definition: "A coded or unformatted textual definition of this warning.",
      min: 0,
      max: "1",
      base: { path: "ClinicalUseDefinition.warning.code", min: 0, max: "1" },
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
            valueString: "WarningType",
          },
        ],
        strength: "example",
        description: "Classification of warning type.",
        valueSet: "http://hl7.org/fhir/ValueSet/warning-type",
      },
      mapping: [{ identity: "idmp", map: "n/a" }],
    },
    dataPath: "root.warning.code",
    parentDataPath: "root.warning",
    basePath: "root.code",
    baseId: "ClinicalUseDefinition.warning.code",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P313",
        display: "Get medical advice/attention.",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P314",
        display: "Get medical advice/attention if you feel unwell.",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P315",
        display: "Get immediate medical advice/attention.",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P320",
        display: "Specific treatment is urgent (see ... on this label).",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P321",
        display: "Specific treatment (see ... on this label).",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P322",
        display: "Specific measures (see ... on this label).",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P330",
        display: "Rinse mouth.",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P331",
        display: "Do NOT induce vomiting.",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P361",
        display: "Remove/Take off immediately all contaminated clothing.",
      },
      {
        system: "http://hl7.org/fhir/warning-type",
        code: "P363",
        display: "Wash contaminated clothing before reuse..",
      },
    ],
  },
  {
    element: {
      id: "ClinicalUseDefinition",
      path: "ClinicalUseDefinition",
      short:
        "A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure",
      definition:
        "A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.",
      min: 0,
      max: "*",
      base: { path: "ClinicalUseDefinition", min: 0, max: "*" },
      constraint: [
        {
          key: "cud-1",
          severity: "error",
          human:
            "Indication, Contraindication, Interaction, UndesirableEffect and Warning cannot be used in the same instance",
          expression:
            "(ClinicalUseDefinition.indication.count() + ClinicalUseDefinition.contraindication.count() + ClinicalUseDefinition.interaction.count() + ClinicalUseDefinition.undesirableEffect.count() + ClinicalUseDefinition.warning.count())  < 2",
          xpath:
            "count(f:ClinicalUseDefinition/f:indication|f:ClinicalUseDefinition/f:contraindication|f:ClinicalUseDefinition/f:interaction|f:ClinicalUseDefinition/f:undesirableEffect|f:ClinicalUseDefinition/f:warning) < 2",
          source:
            "http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition",
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
        {
          identity: "idmp",
          map: "Contraindication, Therapeutic Indication, Interactions, Undesirable Effects",
        },
        { identity: "w5", map: "clinical.general" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "ClinicalUseDefinition",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
