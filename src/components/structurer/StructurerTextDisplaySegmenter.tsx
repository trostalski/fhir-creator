import {
  CombineSectionButtonState,
  SectionInfo,
  StructurerTextDisplayProps,
  ValueState,
} from "@/types";
import {
  handleAnnotationChange,
  prepareIndexList,
} from "@/utils/structurerUtils";
import { useEffect, useState } from "react";
import { TextAnnotator } from "@/utils/text-annotate/TextAnnotator";
import StructurerCombineSectionButton from "./StructurerCombineSectionButton";
import StructurerSplitSectionButton from "./StructurerSplitSectionButton";
import StructurerSplitSectionModal from "./StructurerSplitSectionModal";
import { LiaMarkerSolid } from "react-icons/lia";

const StructurerTextDisplaySegmenter = (props: StructurerTextDisplayProps) => {
  const {
    text,
    llmResponse,
    outline,
    setOutline,
    setFocusedSection,
    focusedSection,
    sectionRefs,
    focusedCategory,
    colors,
  } = props;

  const [showSplitSectionModal, setShowSplitSectionModal] = useState(false);
  const [splitSection, setSplitSection] = useState<SectionInfo | undefined>();

  let dummyValue: ValueState[] = []; // need this somehow so that the type in the TextAnnotator is not never... might be nice to get rid off for usability

  useEffect(() => {
    if (llmResponse) {
      try {
        const jsonData = JSON.parse(llmResponse);
        const llmSections = {
          sectionsAskedFor: jsonData.sections_asked_for,
          sectionsInferred: jsonData.sections_inferred,
        };
        const indexSections = prepareIndexList(llmSections, text);
        if (indexSections) {
          setOutline(indexSections);
        }
      } catch (error) {
        console.error("Error parsing llmResponse:", error);
      }
    }
  }, [llmResponse]);

  return (
    <div className="flex flex-col gap-1 whitespace-pre">
      {showSplitSectionModal && splitSection && (
        <StructurerSplitSectionModal
          setShowSplitSectionModal={setShowSplitSectionModal}
          setSpliceSection={setSplitSection}
          splitSection={splitSection}
          setOutline={setOutline}
          outline={outline}
        />
      )}
      {outline.length > 0
        ? outline.map((section, index) => (
            <div
              ref={sectionRefs[index]}
              key={section.startIndex}
              className="border border-blue-500 rounded-md flex flex-col gap-1 p-2"
            >
              <div className="flex flex-row justify-between gap-2">
                <span className="text-lg font-semibold flex-grow">
                  {section.key}:
                </span>
                <button
                  className={`${
                    focusedSection?.key === section.key
                      ? "bg-gray-500"
                      : "bg-blue-500"
                  } text-right rounded-md p-1 transform hover:scale-105`}
                  onClick={() => setFocusedSection(section)}
                >
                  <LiaMarkerSolid />
                </button>
                <StructurerSplitSectionButton
                  setShowSplitSectionModal={setShowSplitSectionModal}
                  setSplitSection={setSplitSection}
                  section={section}
                />
              </div>
              {section.text && (
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
                  outline={
                    outline.find((sec) => sec.key === section.key)?.entities
                  }
                />
              )}
              <div className="flex justify-end">
                <StructurerCombineSectionButton
                  state={CombineSectionButtonState.CombineBelow}
                  outline={outline}
                  setOutline={setOutline}
                  section={section}
                />
              </div>
            </div>
          ))
        : text}
    </div>
  );
};

export default StructurerTextDisplaySegmenter;
