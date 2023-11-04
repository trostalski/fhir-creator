import {
  CombineSectionButtonState,
  StructurerTextDisplaySectionProps,
  ValueState,
} from "@/types";
import StructurerSectionRenameButton from "./StructurerSectionRenameButton";
import StructurerSectionLabelButton from "./StructurerSectionLabelButton";
import StructurerSectionSplitButton from "./StructurerSectionSplitButton";
import TextAnnotator from "@/utils/text-annotate/TextAnnotator";
import { handleAnnotationChange } from "@/utils/structurerUtils";
import StructurerSectionCombineButton from "./StructurerSectionCombineButton";
import ExpandAccordionToggle from "../shared/ExpandAccordionToggle";

const StructurerTextDisplaySection = (
  props: StructurerTextDisplaySectionProps
) => {
  const {
    outline,
    setOutline,
    setFocusedSection,
    focusedSection,
    sectionRefs,
    focusedCategory,
    colors,
    setShowSplitSectionModal,
    setSplitSection,
    setShowSectionRenameModal,
    setRenameSection,
    section,
    index,
    expandedSections,
    setExpandedSections,
  } = props;

  let dummyValue: ValueState[] = []; // need this somehow so that the type in the TextAnnotator is not never... might be nice to get rid off for usability

  return (
    <div
      ref={sectionRefs[index]}
      key={section.startIndex}
      className="border border-blue-500 rounded-md flex flex-col gap-1 p-2"
    >
      <div className="flex flex-row justify-between gap-2">
        <div className="flex flex-grow gap-2">
          <button>
            <ExpandAccordionToggle
              isOpen={expandedSections[section.key]}
              onClick={() =>
                setExpandedSections({
                  ...expandedSections,
                  [section.key]: !expandedSections[section.key],
                })
              }
            />
          </button>
          <StructurerSectionRenameButton
            section={section}
            setRenameSection={setRenameSection}
            setShowSectionRenameModal={setShowSectionRenameModal}
          />
          <span className="text-lg font-semibold">{section.key}:</span>
        </div>
        <StructurerSectionLabelButton
          focusedSection={focusedSection}
          section={section}
          setFocusedSection={setFocusedSection}
        />
        <StructurerSectionSplitButton
          setShowSplitSectionModal={setShowSplitSectionModal}
          setSplitSection={setSplitSection}
          section={section}
        />
      </div>
      {section.text && expandedSections[section.key] && (
        <TextAnnotator
          content={section.text}
          onChange={(value) =>
            handleAnnotationChange({
              value: value,
              outline: outline,
              setOutline: setOutline,
              focusedSection:
                focusedSection?.key === section.key
                  ? focusedSection
                  : undefined,
              focusedCategory: focusedCategory,
              text: focusedSection?.text,
            })
          }
          value={dummyValue} // need this somehow so that the type in the TextAnnotator is not never... might be nice to get rid off for usability
          colors={colors}
          setOutline={() => {}}
          outline={outline.find((sec) => sec.key === section.key)?.entities}
        />
      )}
      <div className="flex justify-end">
        <StructurerSectionCombineButton
          state={CombineSectionButtonState.CombineBelow}
          outline={outline}
          setOutline={setOutline}
          section={section}
        />
      </div>
    </div>
  );
};

export default StructurerTextDisplaySection;
