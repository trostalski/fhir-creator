const data = [
  {
    element: {
      id: "MedicationKnowledge.meta",
      path: "MedicationKnowledge.meta",
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
    baseId: "MedicationKnowledge.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.implicitRules",
      path: "MedicationKnowledge.implicitRules",
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
    baseId: "MedicationKnowledge.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.language",
      path: "MedicationKnowledge.language",
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
    baseId: "MedicationKnowledge.language",
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
      id: "MedicationKnowledge.contained",
      path: "MedicationKnowledge.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/MedicationKnowledge",
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
    baseId: "MedicationKnowledge.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.status",
      path: "MedicationKnowledge.status",
      short: "active | inactive | entered-in-error",
      definition:
        "A code to indicate if the medication is in active use.  The status refers to the validity about the information of the medication and not to its medicinal properties.",
      comment:
        'This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.',
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.status", min: 0, max: "1" },
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
        "This element changes the interpretation of all descriptive attributes.",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "MedicationKnowledgeStatus",
          },
        ],
        strength: "required",
        description:
          "A coded concept defining if the medication is in active use.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/medicationknowledge-status|4.3.0",
      },
      mapping: [{ identity: "rim", map: ".statusCode" }],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "MedicationKnowledge.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-status",
        code: "active",
        display: "Active",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-status",
        code: "inactive",
        display: "Inactive",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-status",
        code: "entered-in-error",
        display: "Entered in Error",
      },
    ],
  },
  {
    element: {
      id: "MedicationKnowledge.doseForm",
      path: "MedicationKnowledge.doseForm",
      short: "powder | tablets | capsule +",
      definition: "Describes the form of the item.  Powder; tablets; capsule.",
      comment:
        "When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.doseForm", min: 0, max: "1" },
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
            valueString: "MedicationForm",
          },
        ],
        strength: "example",
        description: "A coded concept defining the form of a medication.",
        valueSet: "http://hl7.org/fhir/ValueSet/medication-form-codes",
      },
      mapping: [
        {
          identity: "script10.6",
          map: "coding.code =  //element(*,DrugCodedType)/FormCode\r\rcoding.system = //element(*,DrugCodedType)/FormSourceCode",
        },
        {
          identity: "v2",
          map: "RXO-5-Requested Dosage Form / RXE-6-Give Dosage Form / RXD-6-Actual Dosage Form / RXG-8-Give Dosage Form / RXA-8-Administered Dosage Form",
        },
        { identity: "rim", map: ".formCode" },
      ],
    },
    dataPath: "root.doseForm",
    parentDataPath: "root",
    basePath: "root.doseForm",
    baseId: "MedicationKnowledge.doseForm",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.synonym",
      path: "MedicationKnowledge.synonym",
      short: "Additional names for a medication",
      definition:
        "Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.synonym", min: 0, max: "*" },
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
    },
    dataPath: "root.synonym[0]",
    parentDataPath: "root",
    basePath: "root.synonym",
    baseId: "MedicationKnowledge.synonym",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.relatedMedicationKnowledge",
      path: "MedicationKnowledge.relatedMedicationKnowledge",
      short: "Associated or related medication information",
      definition: "Associated or related knowledge about a medication.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.relatedMedicationKnowledge",
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
    },
    dataPath: "root.relatedMedicationKnowledge[0]",
    parentDataPath: "root",
    basePath: "root.relatedMedicationKnowledge",
    baseId: "MedicationKnowledge.relatedMedicationKnowledge",
    isPrimitive: false,
    childPaths: [
      "root.relatedMedicationKnowledge.type",
      "root.relatedMedicationKnowledge.reference[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.relatedMedicationKnowledge.reference",
      path: "MedicationKnowledge.relatedMedicationKnowledge.reference",
      short:
        "Associated documentation about the associated medication knowledge",
      definition:
        "Associated documentation about the associated medication knowledge.",
      min: 1,
      max: "*",
      base: {
        path: "MedicationKnowledge.relatedMedicationKnowledge.reference",
        min: 1,
        max: "*",
      },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/MedicationKnowledge",
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
    },
    dataPath: "root.relatedMedicationKnowledge.reference[0]",
    parentDataPath: "root.relatedMedicationKnowledge[0]",
    basePath: "root.reference",
    baseId: "MedicationKnowledge.relatedMedicationKnowledge.reference",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.productType",
      path: "MedicationKnowledge.productType",
      short: "Category of the medication or product",
      definition:
        "Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.productType", min: 0, max: "*" },
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
    },
    dataPath: "root.productType[0]",
    parentDataPath: "root",
    basePath: "root.productType",
    baseId: "MedicationKnowledge.productType",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.monograph",
      path: "MedicationKnowledge.monograph",
      short: "Associated documentation about the medication",
      definition: "Associated documentation about the medication.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.monograph", min: 0, max: "*" },
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
    },
    dataPath: "root.monograph[0]",
    parentDataPath: "root",
    basePath: "root.monograph",
    baseId: "MedicationKnowledge.monograph",
    isPrimitive: false,
    childPaths: ["root.monograph.type", "root.monograph.source"],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.monograph.source",
      path: "MedicationKnowledge.monograph.source",
      short: "Associated documentation about the medication",
      definition: "Associated documentation about the medication.",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.monograph.source", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/DocumentReference",
            "http://hl7.org/fhir/StructureDefinition/Media",
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
    },
    dataPath: "root.monograph.source",
    parentDataPath: "root.monograph[0]",
    basePath: "root.source",
    baseId: "MedicationKnowledge.monograph.source",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.ingredient",
      path: "MedicationKnowledge.ingredient",
      short: "Active or inactive ingredient",
      definition:
        "Identifies a particular constituent of interest in the product.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.ingredient", min: 0, max: "*" },
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
    },
    dataPath: "root.ingredient[0]",
    parentDataPath: "root",
    basePath: "root.ingredient",
    baseId: "MedicationKnowledge.ingredient",
    isPrimitive: false,
    childPaths: [
      "root.ingredient.item[x]",
      "root.ingredient.isActive",
      "root.ingredient.strength",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.ingredient.isActive",
      path: "MedicationKnowledge.ingredient.isActive",
      short: "Active ingredient indicator",
      definition:
        "Indication of whether this ingredient affects the therapeutic action of the drug.",
      requirements:
        "True indicates that the ingredient affects the therapeutic action of the drug (i.e. active). \rFalse indicates that the ingredient does not affect the therapeutic action of the drug (i.e. inactive).",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.ingredient.isActive",
        min: 0,
        max: "1",
      },
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
      isModifier: false,
      isSummary: false,
      mapping: [{ identity: "rim", map: "NA" }],
    },
    dataPath: "root.ingredient.isActive",
    parentDataPath: "root.ingredient[0]",
    basePath: "root.isActive",
    baseId: "MedicationKnowledge.ingredient.isActive",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.preparationInstruction",
      path: "MedicationKnowledge.preparationInstruction",
      short: "The instructions for preparing the medication",
      definition: "The instructions for preparing the medication.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.preparationInstruction",
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
      isSummary: false,
    },
    dataPath: "root.preparationInstruction",
    parentDataPath: "root",
    basePath: "root.preparationInstruction",
    baseId: "MedicationKnowledge.preparationInstruction",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.cost",
      path: "MedicationKnowledge.cost",
      short: "The pricing of the medication",
      definition: "The price of the medication.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.cost", min: 0, max: "*" },
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
    },
    dataPath: "root.cost[0]",
    parentDataPath: "root",
    basePath: "root.cost",
    baseId: "MedicationKnowledge.cost",
    isPrimitive: false,
    childPaths: ["root.cost.type", "root.cost.source", "root.cost.cost"],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.cost.source",
      path: "MedicationKnowledge.cost.source",
      short: "The source or owner for the price information",
      definition:
        "The source or owner that assigns the price to the medication.",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.cost.source", min: 0, max: "1" },
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
    dataPath: "root.cost.source",
    parentDataPath: "root.cost[0]",
    basePath: "root.source",
    baseId: "MedicationKnowledge.cost.source",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.monitoringProgram",
      path: "MedicationKnowledge.monitoringProgram",
      short: "Program under which a medication is reviewed",
      definition: "The program under which the medication is reviewed.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.monitoringProgram", min: 0, max: "*" },
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
    },
    dataPath: "root.monitoringProgram[0]",
    parentDataPath: "root",
    basePath: "root.monitoringProgram",
    baseId: "MedicationKnowledge.monitoringProgram",
    isPrimitive: false,
    childPaths: ["root.monitoringProgram.type", "root.monitoringProgram.name"],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.monitoringProgram.name",
      path: "MedicationKnowledge.monitoringProgram.name",
      short: "Name of the reviewing program",
      definition: "Name of the reviewing program.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.monitoringProgram.name",
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
    },
    dataPath: "root.monitoringProgram.name",
    parentDataPath: "root.monitoringProgram[0]",
    basePath: "root.name",
    baseId: "MedicationKnowledge.monitoringProgram.name",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines",
      path: "MedicationKnowledge.administrationGuidelines",
      short: "Guidelines for administration of the medication",
      definition: "Guidelines for the administration of the medication.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.administrationGuidelines",
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
    },
    dataPath: "root.administrationGuidelines[0]",
    parentDataPath: "root",
    basePath: "root.administrationGuidelines",
    baseId: "MedicationKnowledge.administrationGuidelines",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage[0]",
      "root.administrationGuidelines.indication[x]",
      "root.administrationGuidelines.patientCharacteristics[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines.dosage",
      path: "MedicationKnowledge.administrationGuidelines.dosage",
      short: "Dosage for the medication for the specific guidelines",
      definition: "Dosage for the medication for the specific guidelines.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.administrationGuidelines.dosage",
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
    },
    dataPath: "root.administrationGuidelines.dosage[0]",
    parentDataPath: "root.administrationGuidelines[0]",
    basePath: "root.dosage",
    baseId: "MedicationKnowledge.administrationGuidelines.dosage",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.dosage.type",
      "root.administrationGuidelines.dosage.dosage[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines.dosage.dosage",
      path: "MedicationKnowledge.administrationGuidelines.dosage.dosage",
      short: "Dosage for the medication for the specific guidelines",
      definition: "Dosage for the medication for the specific guidelines.",
      min: 1,
      max: "*",
      base: {
        path: "MedicationKnowledge.administrationGuidelines.dosage.dosage",
        min: 1,
        max: "*",
      },
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
    },
    dataPath: "root.administrationGuidelines.dosage.dosage[0]",
    parentDataPath: "root.administrationGuidelines.dosage[0]",
    basePath: "root.dosage",
    baseId: "MedicationKnowledge.administrationGuidelines.dosage.dosage",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines.patientCharacteristics",
      path: "MedicationKnowledge.administrationGuidelines.patientCharacteristics",
      short:
        "Characteristics of the patient that are relevant to the administration guidelines",
      definition:
        "Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.administrationGuidelines.patientCharacteristics",
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
    },
    dataPath: "root.administrationGuidelines.patientCharacteristics[0]",
    parentDataPath: "root.administrationGuidelines[0]",
    basePath: "root.patientCharacteristics",
    baseId:
      "MedicationKnowledge.administrationGuidelines.patientCharacteristics",
    isPrimitive: false,
    childPaths: [
      "root.administrationGuidelines.patientCharacteristics.characteristic[x]",
      "root.administrationGuidelines.patientCharacteristics.value[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.administrationGuidelines.patientCharacteristics.value",
      path: "MedicationKnowledge.administrationGuidelines.patientCharacteristics.value",
      short: "The specific characteristic",
      definition:
        "The specific characteristic (e.g. height, weight, gender, etc.).",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.administrationGuidelines.patientCharacteristics.value",
        min: 0,
        max: "*",
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
    },
    dataPath: "root.administrationGuidelines.patientCharacteristics.value[0]",
    parentDataPath: "root.administrationGuidelines.patientCharacteristics[0]",
    basePath: "root.value",
    baseId:
      "MedicationKnowledge.administrationGuidelines.patientCharacteristics.value",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.medicineClassification",
      path: "MedicationKnowledge.medicineClassification",
      short:
        "Categorization of the medication within a formulary or classification system",
      definition:
        "Categorization of the medication within a formulary or classification system.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.medicineClassification",
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
    },
    dataPath: "root.medicineClassification[0]",
    parentDataPath: "root",
    basePath: "root.medicineClassification",
    baseId: "MedicationKnowledge.medicineClassification",
    isPrimitive: false,
    childPaths: [
      "root.medicineClassification.type",
      "root.medicineClassification.classification[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.medicineClassification.classification",
      path: "MedicationKnowledge.medicineClassification.classification",
      short: "Specific category assigned to the medication",
      definition:
        "Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.medicineClassification.classification",
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
      isSummary: false,
    },
    dataPath: "root.medicineClassification.classification[0]",
    parentDataPath: "root.medicineClassification[0]",
    basePath: "root.classification",
    baseId: "MedicationKnowledge.medicineClassification.classification",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.packaging",
      path: "MedicationKnowledge.packaging",
      short: "Details about packaged medications",
      definition: "Information that only applies to packages (not products).",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.packaging", min: 0, max: "1" },
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
    },
    dataPath: "root.packaging",
    parentDataPath: "root",
    basePath: "root.packaging",
    baseId: "MedicationKnowledge.packaging",
    isPrimitive: false,
    childPaths: ["root.packaging.type", "root.packaging.quantity"],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.packaging.type",
      path: "MedicationKnowledge.packaging.type",
      short:
        "A code that defines the specific type of packaging that the medication can be found in",
      definition:
        "A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).",
      min: 0,
      max: "1",
      base: { path: "MedicationKnowledge.packaging.type", min: 0, max: "1" },
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
            valueString: "MedicationPackageType",
          },
        ],
        strength: "example",
        description:
          "A coded concept defining the type of packaging of a medication.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/medicationknowledge-package-type",
      },
    },
    dataPath: "root.packaging.type",
    parentDataPath: "root.packaging",
    basePath: "root.type",
    baseId: "MedicationKnowledge.packaging.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "amp",
        display: "Ampule",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "bag",
        display: "Bag",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "blstrpk",
        display: "Blister Pack",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "bot",
        display: "Bottle",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "box",
        display: "Box",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "can",
        display: "Can",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "cart",
        display: "Cartridge",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "disk",
        display: "Disk",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "doset",
        display: "Dosette",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "jar",
        display: "Jar",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "jug",
        display: "Jug",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "minim",
        display: "Minim",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "nebamp",
        display: "Nebule Amp",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "ovul",
        display: "Ovule",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "pch",
        display: "Pouch",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "pkt",
        display: "Packet",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "sash",
        display: "Sashet",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "strip",
        display: "Strip",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "tin",
        display: "Tin",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "tub",
        display: "Tub",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "tube",
        display: "Tube",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        code: "vial",
        display: "Vial",
      },
    ],
  },
  {
    element: {
      id: "MedicationKnowledge.drugCharacteristic",
      path: "MedicationKnowledge.drugCharacteristic",
      short: "Specifies descriptive properties of the medicine",
      definition:
        "Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.drugCharacteristic",
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
    },
    dataPath: "root.drugCharacteristic[0]",
    parentDataPath: "root",
    basePath: "root.drugCharacteristic",
    baseId: "MedicationKnowledge.drugCharacteristic",
    isPrimitive: false,
    childPaths: [
      "root.drugCharacteristic.type",
      "root.drugCharacteristic.value[x]",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.drugCharacteristic.type",
      path: "MedicationKnowledge.drugCharacteristic.type",
      short: "Code specifying the type of characteristic of medication",
      definition:
        "A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.drugCharacteristic.type",
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
            valueString: "MedicationCharacteristic",
          },
        ],
        strength: "example",
        description:
          "A coded concept defining the characteristic types of a medication.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/medicationknowledge-characteristic",
      },
    },
    dataPath: "root.drugCharacteristic.type",
    parentDataPath: "root.drugCharacteristic[0]",
    basePath: "root.type",
    baseId: "MedicationKnowledge.drugCharacteristic.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "imprintcd",
        display: "Imprint Code",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "size",
        display: "Size",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "shape",
        display: "Shape",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "color",
        display: "Color",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "coating",
        display: "Coating",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "scoring",
        display: "Scoring",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "logo",
        display: "Logo",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medicationknowledge-characteristic",
        code: "image",
        display: "Image",
      },
    ],
  },
  {
    element: {
      id: "MedicationKnowledge.contraindication",
      path: "MedicationKnowledge.contraindication",
      short: "Potential clinical issue with or between medication(s)",
      definition:
        "Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.contraindication", min: 0, max: "*" },
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
    },
    dataPath: "root.contraindication[0]",
    parentDataPath: "root",
    basePath: "root.contraindication",
    baseId: "MedicationKnowledge.contraindication",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory",
      path: "MedicationKnowledge.regulatory",
      short: "Regulatory information about a medication",
      definition: "Regulatory information about a medication.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.regulatory", min: 0, max: "*" },
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
    },
    dataPath: "root.regulatory[0]",
    parentDataPath: "root",
    basePath: "root.regulatory",
    baseId: "MedicationKnowledge.regulatory",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.regulatoryAuthority",
      "root.regulatory.substitution[0]",
      "root.regulatory.schedule[0]",
      "root.regulatory.maxDispense",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.substitution",
      path: "MedicationKnowledge.regulatory.substitution",
      short:
        "Specifies if changes are allowed when dispensing a medication from a regulatory perspective",
      definition:
        "Specifies if changes are allowed when dispensing a medication from a regulatory perspective.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.regulatory.substitution",
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
    },
    dataPath: "root.regulatory.substitution[0]",
    parentDataPath: "root.regulatory[0]",
    basePath: "root.substitution",
    baseId: "MedicationKnowledge.regulatory.substitution",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.substitution.type",
      "root.regulatory.substitution.allowed",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.substitution.allowed",
      path: "MedicationKnowledge.regulatory.substitution.allowed",
      short:
        "Specifies if regulation allows for changes in the medication when dispensing",
      definition:
        "Specifies if regulation allows for changes in the medication when dispensing.",
      min: 1,
      max: "1",
      base: {
        path: "MedicationKnowledge.regulatory.substitution.allowed",
        min: 1,
        max: "1",
      },
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
      isModifier: false,
      isSummary: false,
    },
    dataPath: "root.regulatory.substitution.allowed",
    parentDataPath: "root.regulatory.substitution[0]",
    basePath: "root.allowed",
    baseId: "MedicationKnowledge.regulatory.substitution.allowed",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.schedule",
      path: "MedicationKnowledge.regulatory.schedule",
      short: "Specifies the schedule of a medication in jurisdiction",
      definition: "Specifies the schedule of a medication in jurisdiction.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.regulatory.schedule",
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
    },
    dataPath: "root.regulatory.schedule[0]",
    parentDataPath: "root.regulatory[0]",
    basePath: "root.schedule",
    baseId: "MedicationKnowledge.regulatory.schedule",
    isPrimitive: false,
    childPaths: ["root.regulatory.schedule.schedule"],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.maxDispense",
      path: "MedicationKnowledge.regulatory.maxDispense",
      short:
        "The maximum number of units of the medication that can be dispensed in a period",
      definition:
        "The maximum number of units of the medication that can be dispensed in a period.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.regulatory.maxDispense",
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
    },
    dataPath: "root.regulatory.maxDispense",
    parentDataPath: "root.regulatory[0]",
    basePath: "root.maxDispense",
    baseId: "MedicationKnowledge.regulatory.maxDispense",
    isPrimitive: false,
    childPaths: [
      "root.regulatory.maxDispense.quantity",
      "root.regulatory.maxDispense.period",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.regulatory.maxDispense.period",
      path: "MedicationKnowledge.regulatory.maxDispense.period",
      short: "The period that applies to the maximum number of units",
      definition: "The period that applies to the maximum number of units.",
      min: 0,
      max: "1",
      base: {
        path: "MedicationKnowledge.regulatory.maxDispense.period",
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
    },
    dataPath: "root.regulatory.maxDispense.period",
    parentDataPath: "root.regulatory.maxDispense",
    basePath: "root.period",
    baseId: "MedicationKnowledge.regulatory.maxDispense.period",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.kinetics",
      path: "MedicationKnowledge.kinetics",
      short:
        "The time course of drug absorption, distribution, metabolism and excretion of a medication from the body",
      definition:
        "The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge.kinetics", min: 0, max: "*" },
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
    },
    dataPath: "root.kinetics[0]",
    parentDataPath: "root",
    basePath: "root.kinetics",
    baseId: "MedicationKnowledge.kinetics",
    isPrimitive: false,
    childPaths: [
      "root.kinetics.areaUnderCurve[0]",
      "root.kinetics.lethalDose50[0]",
      "root.kinetics.halfLifePeriod",
    ],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge.kinetics.lethalDose50",
      path: "MedicationKnowledge.kinetics.lethalDose50",
      short: "The median lethal dose of a drug",
      definition: "The median lethal dose of a drug.",
      min: 0,
      max: "*",
      base: {
        path: "MedicationKnowledge.kinetics.lethalDose50",
        min: 0,
        max: "*",
      },
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
    },
    dataPath: "root.kinetics.lethalDose50[0]",
    parentDataPath: "root.kinetics[0]",
    basePath: "root.lethalDose50",
    baseId: "MedicationKnowledge.kinetics.lethalDose50",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "MedicationKnowledge",
      path: "MedicationKnowledge",
      short: "Definition of Medication Knowledge",
      definition:
        "Information about a medication that is used to support knowledge.",
      min: 0,
      max: "*",
      base: { path: "MedicationKnowledge", min: 0, max: "*" },
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
        { identity: "rim", map: "Todo" },
        { identity: "w5", map: "clinical.medication" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "MedicationKnowledge",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
