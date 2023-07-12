const data = [
  {
    element: {
      id: "BiologicallyDerivedProduct.meta",
      path: "BiologicallyDerivedProduct.meta",
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
    baseId: "BiologicallyDerivedProduct.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.implicitRules",
      path: "BiologicallyDerivedProduct.implicitRules",
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
    baseId: "BiologicallyDerivedProduct.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.language",
      path: "BiologicallyDerivedProduct.language",
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
    baseId: "BiologicallyDerivedProduct.language",
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
      id: "BiologicallyDerivedProduct.contained",
      path: "BiologicallyDerivedProduct.contained",
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
            "http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
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
    baseId: "BiologicallyDerivedProduct.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.productCategory",
      path: "BiologicallyDerivedProduct.productCategory",
      short: "organ | tissue | fluid | cells | biologicalAgent",
      definition: "Broad category of this product.",
      min: 0,
      max: "1",
      base: {
        path: "BiologicallyDerivedProduct.productCategory",
        min: 0,
        max: "1",
      },
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
            valueString: "BiologicallyDerivedProductCategory",
          },
        ],
        strength: "required",
        description: "Biologically Derived Product Category.",
        valueSet: "http://hl7.org/fhir/ValueSet/product-category|4.3.0",
      },
    },
    dataPath: "root.productCategory",
    parentDataPath: "root",
    basePath: "root.productCategory",
    baseId: "BiologicallyDerivedProduct.productCategory",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/product-category",
        code: "organ",
        display: "Organ",
      },
      {
        system: "http://hl7.org/fhir/product-category",
        code: "tissue",
        display: "Tissue",
      },
      {
        system: "http://hl7.org/fhir/product-category",
        code: "fluid",
        display: "Fluid",
      },
      {
        system: "http://hl7.org/fhir/product-category",
        code: "cells",
        display: "Cells",
      },
      {
        system: "http://hl7.org/fhir/product-category",
        code: "biologicalAgent",
        display: "BiologicalAgent",
      },
    ],
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.status",
      path: "BiologicallyDerivedProduct.status",
      short: "available | unavailable",
      definition: "Whether the product is currently available.",
      min: 0,
      max: "1",
      base: { path: "BiologicallyDerivedProduct.status", min: 0, max: "1" },
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
            valueString: "BiologicallyDerivedProductStatus",
          },
        ],
        strength: "required",
        description: "Biologically Derived Product Status.",
        valueSet: "http://hl7.org/fhir/ValueSet/product-status|4.3.0",
      },
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "BiologicallyDerivedProduct.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/product-status",
        code: "available",
        display: "Available",
      },
      {
        system: "http://hl7.org/fhir/product-status",
        code: "unavailable",
        display: "Unavailable",
      },
    ],
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.quantity",
      path: "BiologicallyDerivedProduct.quantity",
      short: "The amount of this biologically derived product",
      definition: "Number of discrete units within this product.",
      min: 0,
      max: "1",
      base: { path: "BiologicallyDerivedProduct.quantity", min: 0, max: "1" },
      type: [{ code: "integer" }],
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
    dataPath: "root.quantity",
    parentDataPath: "root",
    basePath: "root.quantity",
    baseId: "BiologicallyDerivedProduct.quantity",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.collection",
      path: "BiologicallyDerivedProduct.collection",
      short: "How this product was collected",
      definition: "How this product was collected.",
      min: 0,
      max: "1",
      base: { path: "BiologicallyDerivedProduct.collection", min: 0, max: "1" },
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
    dataPath: "root.collection",
    parentDataPath: "root",
    basePath: "root.collection",
    baseId: "BiologicallyDerivedProduct.collection",
    isPrimitive: false,
    childPaths: [
      "root.collection.collector",
      "root.collection.source",
      "root.collection.collected[x]",
    ],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.collection.source",
      path: "BiologicallyDerivedProduct.collection.source",
      short: "Who is product from",
      definition:
        "The patient or entity, such as a hospital or vendor in the case of a processed/manipulated/manufactured product, providing the product.",
      min: 0,
      max: "1",
      base: {
        path: "BiologicallyDerivedProduct.collection.source",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Patient",
            "http://hl7.org/fhir/StructureDefinition/Organization",
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
    dataPath: "root.collection.source",
    parentDataPath: "root.collection",
    basePath: "root.source",
    baseId: "BiologicallyDerivedProduct.collection.source",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.processing",
      path: "BiologicallyDerivedProduct.processing",
      short: "Any processing of the product during collection",
      definition:
        "Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.",
      min: 0,
      max: "*",
      base: { path: "BiologicallyDerivedProduct.processing", min: 0, max: "*" },
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
    dataPath: "root.processing[0]",
    parentDataPath: "root",
    basePath: "root.processing",
    baseId: "BiologicallyDerivedProduct.processing",
    isPrimitive: false,
    childPaths: [
      "root.processing.description",
      "root.processing.procedure",
      "root.processing.additive",
      "root.processing.time[x]",
    ],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.processing.description",
      path: "BiologicallyDerivedProduct.processing.description",
      short: "Description of of processing",
      definition: "Description of of processing.",
      min: 0,
      max: "1",
      base: {
        path: "BiologicallyDerivedProduct.processing.description",
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
    dataPath: "root.processing.description",
    parentDataPath: "root.processing[0]",
    basePath: "root.description",
    baseId: "BiologicallyDerivedProduct.processing.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.processing.additive",
      path: "BiologicallyDerivedProduct.processing.additive",
      short: "Substance added during processing",
      definition: "Substance added during processing.",
      min: 0,
      max: "1",
      base: {
        path: "BiologicallyDerivedProduct.processing.additive",
        min: 0,
        max: "1",
      },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Substance"],
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
    dataPath: "root.processing.additive",
    parentDataPath: "root.processing[0]",
    basePath: "root.additive",
    baseId: "BiologicallyDerivedProduct.processing.additive",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.manipulation",
      path: "BiologicallyDerivedProduct.manipulation",
      short: "Any manipulation of product post-collection",
      definition:
        "Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.",
      min: 0,
      max: "1",
      base: {
        path: "BiologicallyDerivedProduct.manipulation",
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
    dataPath: "root.manipulation",
    parentDataPath: "root",
    basePath: "root.manipulation",
    baseId: "BiologicallyDerivedProduct.manipulation",
    isPrimitive: false,
    childPaths: ["root.manipulation.description", "root.manipulation.time[x]"],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.manipulation.description",
      path: "BiologicallyDerivedProduct.manipulation.description",
      short: "Description of manipulation",
      definition: "Description of manipulation.",
      min: 0,
      max: "1",
      base: {
        path: "BiologicallyDerivedProduct.manipulation.description",
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
    dataPath: "root.manipulation.description",
    parentDataPath: "root.manipulation",
    basePath: "root.description",
    baseId: "BiologicallyDerivedProduct.manipulation.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.storage",
      path: "BiologicallyDerivedProduct.storage",
      short: "Product storage",
      definition: "Product storage.",
      min: 0,
      max: "*",
      base: { path: "BiologicallyDerivedProduct.storage", min: 0, max: "*" },
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
    dataPath: "root.storage[0]",
    parentDataPath: "root",
    basePath: "root.storage",
    baseId: "BiologicallyDerivedProduct.storage",
    isPrimitive: false,
    childPaths: [
      "root.storage.description",
      "root.storage.temperature",
      "root.storage.scale",
      "root.storage.duration",
    ],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.storage.description",
      path: "BiologicallyDerivedProduct.storage.description",
      short: "Description of storage",
      definition: "Description of storage.",
      min: 0,
      max: "1",
      base: {
        path: "BiologicallyDerivedProduct.storage.description",
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
    dataPath: "root.storage.description",
    parentDataPath: "root.storage[0]",
    basePath: "root.description",
    baseId: "BiologicallyDerivedProduct.storage.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.storage.temperature",
      path: "BiologicallyDerivedProduct.storage.temperature",
      short: "Storage temperature",
      definition: "Storage temperature.",
      min: 0,
      max: "1",
      base: {
        path: "BiologicallyDerivedProduct.storage.temperature",
        min: 0,
        max: "1",
      },
      type: [{ code: "decimal" }],
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
    dataPath: "root.storage.temperature",
    parentDataPath: "root.storage[0]",
    basePath: "root.temperature",
    baseId: "BiologicallyDerivedProduct.storage.temperature",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "BiologicallyDerivedProduct.storage.scale",
      path: "BiologicallyDerivedProduct.storage.scale",
      short: "farenheit | celsius | kelvin",
      definition: "Temperature scale used.",
      min: 0,
      max: "1",
      base: {
        path: "BiologicallyDerivedProduct.storage.scale",
        min: 0,
        max: "1",
      },
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
            valueString: "BiologicallyDerivedProductStorageScale",
          },
        ],
        strength: "required",
        description: "BiologicallyDerived Product Storage Scale.",
        valueSet: "http://hl7.org/fhir/ValueSet/product-storage-scale|4.3.0",
      },
    },
    dataPath: "root.storage.scale",
    parentDataPath: "root.storage[0]",
    basePath: "root.scale",
    baseId: "BiologicallyDerivedProduct.storage.scale",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/product-storage-scale",
        code: "farenheit",
        display: "Fahrenheit",
      },
      {
        system: "http://hl7.org/fhir/product-storage-scale",
        code: "celsius",
        display: "Celsius",
      },
      {
        system: "http://hl7.org/fhir/product-storage-scale",
        code: "kelvin",
        display: "Kelvin",
      },
    ],
  },
  {
    element: {
      id: "BiologicallyDerivedProduct",
      path: "BiologicallyDerivedProduct",
      short: "A material substance originating from a biological entity",
      definition:
        "A material substance originating from a biological entity intended to be transplanted or infused\ninto another (possibly the same) biological entity.",
      comment:
        "Substances include, but are not limited to: whole blood, bone marrow, organs, and manipulated blood cells.",
      min: 0,
      max: "*",
      base: { path: "BiologicallyDerivedProduct", min: 0, max: "*" },
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
        {
          identity: "rim",
          map: "Material[classCode=                       Observation[classCode=OBS, moodCode=EVN]",
        },
        { identity: "w5", map: "clinical.general" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "BiologicallyDerivedProduct",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;