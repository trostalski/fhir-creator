const data = [
  {
    element: {
      id: "ResearchStudy.meta",
      path: "ResearchStudy.meta",
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
    baseId: "ResearchStudy.meta",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.implicitRules",
      path: "ResearchStudy.implicitRules",
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
    baseId: "ResearchStudy.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.language",
      path: "ResearchStudy.language",
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
    baseId: "ResearchStudy.language",
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
      id: "ResearchStudy.contained",
      path: "ResearchStudy.contained",
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
          source: "http://hl7.org/fhir/StructureDefinition/ResearchStudy",
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
    baseId: "ResearchStudy.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.title",
      path: "ResearchStudy.title",
      short: "Name for this study",
      definition: "A short, descriptive user-friendly label for the study.",
      min: 0,
      max: "1",
      base: { path: "ResearchStudy.title", min: 0, max: "1" },
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
      mapping: [
        { identity: "clinicaltrials-gov", map: "Brief Title" },
        {
          identity: "BRIDG5.1",
          map: "No BRIDG mapping (although there is  StudyProtocolDocumentVersionPublicTitle this is arguably a different semantic: title of a document vs title of a research study)",
        },
      ],
    },
    dataPath: "root.title",
    parentDataPath: "root",
    basePath: "root.title",
    baseId: "ResearchStudy.title",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.partOf",
      path: "ResearchStudy.partOf",
      short: "Part of larger study",
      definition:
        "A larger research study of which this particular study is a component or step.",
      requirements:
        "Allows breaking a study into components (e.g. by study site) each with their own PI, status, enrollment, etc.",
      alias: ["container"],
      min: 0,
      max: "*",
      base: { path: "ResearchStudy.partOf", min: 0, max: "*" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/ResearchStudy",
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
        { identity: "BRIDG5.1", map: "CompanionStudyRelationship" },
        {
          identity: "rim",
          map: ".inboundRelationship[typeCode=COMP].source[moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.partOf[0]",
    parentDataPath: "root",
    basePath: "root.partOf",
    baseId: "ResearchStudy.partOf",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.status",
      path: "ResearchStudy.status",
      short:
        "active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn",
      definition: "The current state of the study.",
      min: 1,
      max: "1",
      base: { path: "ResearchStudy.status", min: 1, max: "1" },
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
            valueString: "ResearchStudyStatus",
          },
        ],
        strength: "required",
        description:
          "Codes that convey the current status of the research study.",
        valueSet: "http://hl7.org/fhir/ValueSet/research-study-status|4.3.0",
      },
      mapping: [
        { identity: "w5", map: "FiveWs.status" },
        { identity: "BRIDG5.1", map: "StudyOverallStatus.code" },
        { identity: "rim", map: ".status" },
      ],
    },
    dataPath: "root.status",
    parentDataPath: "root",
    basePath: "root.status",
    baseId: "ResearchStudy.status",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://hl7.org/fhir/research-study-status",
        code: "active",
        display: "Active",
      },
      {
        system: "http://hl7.org/fhir/research-study-status",
        code: "administratively-completed",
        display: "Administratively Completed",
      },
      {
        system: "http://hl7.org/fhir/research-study-status",
        code: "approved",
        display: "Approved",
      },
      {
        system: "http://hl7.org/fhir/research-study-status",
        code: "closed-to-accrual",
        display: "Closed to Accrual",
      },
      {
        system: "http://hl7.org/fhir/research-study-status",
        code: "closed-to-accrual-and-intervention",
        display: "Closed to Accrual and Intervention",
      },
      {
        system: "http://hl7.org/fhir/research-study-status",
        code: "completed",
        display: "Completed",
      },
      {
        system: "http://hl7.org/fhir/research-study-status",
        code: "disapproved",
        display: "Disapproved",
      },
      {
        system: "http://hl7.org/fhir/research-study-status",
        code: "in-review",
        display: "In Review",
      },
      {
        system: "http://hl7.org/fhir/research-study-status",
        code: "temporarily-closed-to-accrual",
        display: "Temporarily Closed to Accrual",
      },
      {
        system: "http://hl7.org/fhir/research-study-status",
        code: "temporarily-closed-to-accrual-and-intervention",
        display: "Temporarily Closed to Accrual and Intervention",
      },
      {
        system: "http://hl7.org/fhir/research-study-status",
        code: "withdrawn",
        display: "Withdrawn",
      },
    ],
  },
  {
    element: {
      id: "ResearchStudy.primaryPurposeType",
      path: "ResearchStudy.primaryPurposeType",
      short:
        "treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility",
      definition:
        "The type of study based upon the intent of the study's activities. A classification of the intent of the study.",
      min: 0,
      max: "1",
      base: { path: "ResearchStudy.primaryPurposeType", min: 0, max: "1" },
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
            valueString: "ResearchStudyPrimaryPurposeType",
          },
        ],
        strength: "extensible",
        description: "Codes for the main intent of the study.",
        valueSet: "http://hl7.org/fhir/ValueSet/research-study-prim-purp-type",
      },
      mapping: [
        {
          identity: "BRIDG5.1",
          map: "StudyProtocolVersion.primaryPurposeTypeCode",
        },
      ],
    },
    dataPath: "root.primaryPurposeType",
    parentDataPath: "root",
    basePath: "root.primaryPurposeType",
    baseId: "ResearchStudy.primaryPurposeType",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
        code: "treatment",
        display: "Treatment",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
        code: "prevention",
        display: "Prevention",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
        code: "diagnostic",
        display: "Diagnostic",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
        code: "supportive-care",
        display: "Supportive Care",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
        code: "screening",
        display: "Screening",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
        code: "health-services-research",
        display: "Health Services Research",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
        code: "basic-science",
        display: "Basic Science",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
        code: "device-feasibility",
        display: "Device Feasibility",
      },
    ],
  },
  {
    element: {
      id: "ResearchStudy.phase",
      path: "ResearchStudy.phase",
      short:
        "n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4",
      definition:
        "The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.",
      min: 0,
      max: "1",
      base: { path: "ResearchStudy.phase", min: 0, max: "1" },
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
            valueString: "ResearchStudyPhase",
          },
        ],
        strength: "example",
        description:
          "Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.",
        valueSet: "http://hl7.org/fhir/ValueSet/research-study-phase",
      },
      mapping: [
        { identity: "clinicaltrials-gov", map: "Study Phase" },
        { identity: "BRIDG5.1", map: "StudyProtocolVersion.phaseCode" },
      ],
    },
    dataPath: "root.phase",
    parentDataPath: "root",
    basePath: "root.phase",
    baseId: "ResearchStudy.phase",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase",
        code: "n-a",
        display: "N/A",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase",
        code: "early-phase-1",
        display: "Early Phase 1",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase",
        code: "phase-1",
        display: "Phase 1",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase",
        code: "phase-1-phase-2",
        display: "Phase 1/Phase 2",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase",
        code: "phase-2",
        display: "Phase 2",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase",
        code: "phase-2-phase-3",
        display: "Phase 2/Phase 3",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase",
        code: "phase-3",
        display: "Phase 3",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase",
        code: "phase-4",
        display: "Phase 4",
      },
    ],
  },
  {
    element: {
      id: "ResearchStudy.focus",
      path: "ResearchStudy.focus",
      short: "Drugs, devices, etc. under study",
      definition:
        "The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.",
      min: 0,
      max: "*",
      base: { path: "ResearchStudy.focus", min: 0, max: "*" },
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
            valueString: "ResearchStudyFocus",
          },
        ],
        strength: "example",
        description: "Codes for medications, devices and other interventions.",
      },
      mapping: [
        { identity: "clinicaltrials-gov", map: "Focus of Study" },
        { identity: "w5", map: "FiveWs.what[x]" },
        {
          identity: "BRIDG5.1",
          map: "InterventionalStudyProtocol.interventionTypeCode",
        },
      ],
    },
    dataPath: "root.focus[0]",
    parentDataPath: "root",
    basePath: "root.focus",
    baseId: "ResearchStudy.focus",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.contact",
      path: "ResearchStudy.contact",
      short: "Contact details for the study",
      definition:
        "Contact details to assist a user in learning more about or engaging with the study.",
      min: 0,
      max: "*",
      base: { path: "ResearchStudy.contact", min: 0, max: "*" },
      type: [{ code: "ContactDetail" }],
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
          identity: "clinicaltrials-gov",
          map: "Central Contact; Central Contact Backup; Overall Study Officials; Facility Contact & Backup (if Study tied to only one location); Investigators",
        },
        {
          identity: "BRIDG5.1",
          map: "PointOfContact > Project > Research Project > Study > StudyProtocol > StudyProtocolVersion",
        },
      ],
    },
    dataPath: "root.contact[0]",
    parentDataPath: "root",
    basePath: "root.contact",
    baseId: "ResearchStudy.contact",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.keyword",
      path: "ResearchStudy.keyword",
      short: "Used to search for the study",
      definition: "Key terms to aid in searching for or filtering the study.",
      min: 0,
      max: "*",
      base: { path: "ResearchStudy.keyword", min: 0, max: "*" },
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
            valueString: "ResearchStudyKeyword",
          },
        ],
        strength: "example",
        description:
          "Words associated with the study that may be useful in discovery.",
      },
      mapping: [
        { identity: "clinicaltrials-gov", map: "Keywords" },
        {
          identity: "BRIDG5.1",
          map: "DocumentVersion.keywordCode; DocumentVersion.keywordText",
        },
      ],
    },
    dataPath: "root.keyword[0]",
    parentDataPath: "root",
    basePath: "root.keyword",
    baseId: "ResearchStudy.keyword",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.description",
      path: "ResearchStudy.description",
      short: "What this is study doing",
      definition: "A full description of how the study is being conducted.",
      min: 0,
      max: "1",
      base: { path: "ResearchStudy.description", min: 0, max: "1" },
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
      mapping: [
        { identity: "clinicaltrials-gov", map: "Detailed Description" },
        {
          identity: "BRIDG5.1",
          map: "StudyProtocolDocumentVersion.publicDescription",
        },
      ],
    },
    dataPath: "root.description",
    parentDataPath: "root",
    basePath: "root.description",
    baseId: "ResearchStudy.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.period",
      path: "ResearchStudy.period",
      short: "When the study began and ended",
      definition:
        "Identifies the start date and the expected (or actual, depending on status) end date for the study.",
      alias: ["timing"],
      min: 0,
      max: "1",
      base: { path: "ResearchStudy.period", min: 0, max: "1" },
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
      isSummary: true,
      mapping: [
        {
          identity: "clinicaltrials-gov",
          map: "Study Start Date (start); Study Completion Date (end)",
        },
        { identity: "w5", map: "FiveWs.done[x]" },
        {
          identity: "BRIDG5.1",
          map: "ProjectConduct.dateRange; StudyProtocolVersion.plannedDuration",
        },
        { identity: "rim", map: ".effectiveTime" },
      ],
    },
    dataPath: "root.period",
    parentDataPath: "root",
    basePath: "root.period",
    baseId: "ResearchStudy.period",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.principalInvestigator",
      path: "ResearchStudy.principalInvestigator",
      short: "Researcher who oversees multiple aspects of the study",
      definition:
        "A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.",
      min: 0,
      max: "1",
      base: { path: "ResearchStudy.principalInvestigator", min: 0, max: "1" },
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
      isSummary: true,
      mapping: [
        { identity: "clinicaltrials-gov", map: "Principal Investigator" },
        { identity: "w5", map: "FiveWs.actor" },
        { identity: "BRIDG5.1", map: "StudyInvestigator" },
      ],
    },
    dataPath: "root.principalInvestigator",
    parentDataPath: "root",
    basePath: "root.principalInvestigator",
    baseId: "ResearchStudy.principalInvestigator",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.reasonStopped",
      path: "ResearchStudy.reasonStopped",
      short:
        "accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design",
      definition:
        "A description and/or code explaining the premature termination of the study.",
      min: 0,
      max: "1",
      base: { path: "ResearchStudy.reasonStopped", min: 0, max: "1" },
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
            valueString: "ResearchStudyReasonStopped",
          },
        ],
        strength: "example",
        description: "Codes for why the study ended prematurely.",
        valueSet: "http://hl7.org/fhir/ValueSet/research-study-reason-stopped",
      },
      mapping: [
        { identity: "clinicaltrials-gov", map: "Why Study Stopped" },
        { identity: "w5", map: "FiveWs.why[x]" },
        {
          identity: "BRIDG5.1",
          map: "StudyOverallStatus.studyStoppedReasonCode",
        },
      ],
    },
    dataPath: "root.reasonStopped",
    parentDataPath: "root",
    basePath: "root.reasonStopped",
    baseId: "ResearchStudy.reasonStopped",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
        code: "accrual-goal-met",
        display: "Accrual Goal Met",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
        code: "closed-due-to-toxicity",
        display: "Closed due to toxicity",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
        code: "closed-due-to-lack-of-study-progress",
        display: "Closed due to lack of study progress",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
        code: "temporarily-closed-per-study-design",
        display: "Temporarily closed per study design",
      },
    ],
  },
  {
    element: {
      id: "ResearchStudy.arm",
      path: "ResearchStudy.arm",
      short: "Defined path through the study for a subject",
      definition:
        "Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.",
      min: 0,
      max: "*",
      base: { path: "ResearchStudy.arm", min: 0, max: "*" },
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
        { identity: "clinicaltrials-gov", map: "Arms" },
        { identity: "BRIDG5.1", map: "Arm" },
      ],
    },
    dataPath: "root.arm[0]",
    parentDataPath: "root",
    basePath: "root.arm",
    baseId: "ResearchStudy.arm",
    isPrimitive: false,
    childPaths: ["root.arm.name", "root.arm.type", "root.arm.description"],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.arm.name",
      path: "ResearchStudy.arm.name",
      short: "Label for study arm",
      definition: "Unique, human-readable label for this arm of the study.",
      min: 1,
      max: "1",
      base: { path: "ResearchStudy.arm.name", min: 1, max: "1" },
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
        { identity: "clinicaltrials-gov", map: "Arm Label" },
        { identity: "BRIDG5.1", map: "Arm.name" },
      ],
    },
    dataPath: "root.arm.name",
    parentDataPath: "root.arm[0]",
    basePath: "root.name",
    baseId: "ResearchStudy.arm.name",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.arm.description",
      path: "ResearchStudy.arm.description",
      short: "Short explanation of study path",
      definition:
        "A succinct description of the path through the study that would be followed by a subject adhering to this arm.",
      min: 0,
      max: "1",
      base: { path: "ResearchStudy.arm.description", min: 0, max: "1" },
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
        { identity: "clinicaltrials-gov", map: "Arm Description" },
        { identity: "BRIDG5.1", map: "Arm.description" },
      ],
    },
    dataPath: "root.arm.description",
    parentDataPath: "root.arm[0]",
    basePath: "root.description",
    baseId: "ResearchStudy.arm.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.objective",
      path: "ResearchStudy.objective",
      short: "A goal for the study",
      definition:
        "A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.",
      min: 0,
      max: "*",
      base: { path: "ResearchStudy.objective", min: 0, max: "*" },
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
      mapping: [{ identity: "BRIDG5.1", map: "StudyObjective" }],
    },
    dataPath: "root.objective[0]",
    parentDataPath: "root",
    basePath: "root.objective",
    baseId: "ResearchStudy.objective",
    isPrimitive: false,
    childPaths: ["root.objective.name", "root.objective.type"],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.objective.name",
      path: "ResearchStudy.objective.name",
      short: "Label for the objective",
      definition:
        "Unique, human-readable label for this objective of the study.",
      min: 0,
      max: "1",
      base: { path: "ResearchStudy.objective.name", min: 0, max: "1" },
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
        {
          identity: "BRIDG5.1",
          map: "No BRIDG mapping (BRIDG has a description, but not a name)",
        },
      ],
    },
    dataPath: "root.objective.name",
    parentDataPath: "root.objective[0]",
    basePath: "root.name",
    baseId: "ResearchStudy.objective.name",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ResearchStudy.objective.type",
      path: "ResearchStudy.objective.type",
      short: "primary | secondary | exploratory",
      definition: "The kind of study objective.",
      min: 0,
      max: "1",
      base: { path: "ResearchStudy.objective.type", min: 0, max: "1" },
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
            valueString: "ResearchStudyObjectiveType",
          },
        ],
        strength: "preferred",
        description: "Codes for the kind of study objective.",
        valueSet: "http://hl7.org/fhir/ValueSet/research-study-objective-type",
      },
      mapping: [{ identity: "BRIDG5.1", map: "StudyObjective.typeCode" }],
    },
    dataPath: "root.objective.type",
    parentDataPath: "root.objective[0]",
    basePath: "root.type",
    baseId: "ResearchStudy.objective.type",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
    bindingCodes: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-objective-type",
        code: "primary",
        display: "Primary",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-objective-type",
        code: "secondary",
        display: "Secondary",
      },
      {
        system:
          "http://terminology.hl7.org/CodeSystem/research-study-objective-type",
        code: "exploratory",
        display: "Exploratory",
      },
    ],
  },
  {
    element: {
      id: "ResearchStudy",
      path: "ResearchStudy",
      short:
        "Investigation to increase healthcare-related patient-independent knowledge",
      definition:
        "A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.",
      comment: "Need to make sure we encompass public health studies.",
      alias: ["Clinical Trial", "Study"],
      min: 0,
      max: "*",
      base: { path: "ResearchStudy", min: 0, max: "*" },
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
          identity: "BRIDG5.1",
          map: "ObservationalStudyProtocolVersion; Study;\nStudyProtocolVersion",
        },
        { identity: "v2", map: "OBX" },
        { identity: "rim", map: "Observation[classCode=CLNTRL, moodCode=EVN]" },
        { identity: "w5", map: "clinical.diagnostics" },
      ],
    },
    dataPath: "root",
    parentDataPath: "",
    basePath: "root",
    baseId: "ResearchStudy",
    isPrimitive: false,
    isRoot: true,
    childPaths: [],
    value: "",
  },
];
export default data;
