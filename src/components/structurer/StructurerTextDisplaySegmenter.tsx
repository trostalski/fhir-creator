import { SectionInfo, StructurerTextDisplayProps } from "@/types";
import { prepareIndexList } from "@/utils/structurerUtils";
import { useEffect, useState } from "react";
import StructurerSectionSplitModal from "./StructurerSectionSplitModal";
import StructurerSectionRenameModal from "./StructurerSectionRenameModal";
import StructurerTextDisplaySection from "./StructurerTextDisplaySection";

const StructurerTextDisplaySegmenter = (props: StructurerTextDisplayProps) => {
  const { text, llmResponse, outline, setOutline } = props;

  const [showSplitSectionModal, setShowSplitSectionModal] = useState(false);
  const [splitSection, setSplitSection] = useState<SectionInfo | undefined>();
  const [showSectionRenameModal, setShowSectionRenameModal] = useState(false);
  const [renameSection, setRenameSection] = useState<SectionInfo | undefined>();

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
        <StructurerSectionSplitModal
          setShowSplitSectionModal={setShowSplitSectionModal}
          setSpliceSection={setSplitSection}
          splitSection={splitSection}
          setOutline={setOutline}
          outline={outline}
        />
      )}
      {showSectionRenameModal && renameSection && (
        <StructurerSectionRenameModal
          outline={outline}
          renameSection={renameSection}
          setOutline={setOutline}
          setRenameSection={setRenameSection}
          setShowSectionRenameModal={setShowSectionRenameModal}
        />
      )}
      {outline.length > 0
        ? outline.map((section, index) => (
            <StructurerTextDisplaySection
              key={section.startIndex}
              {...props}
              section={section}
              index={index}
              setRenameSection={setRenameSection}
              setShowSectionRenameModal={setShowSectionRenameModal}
              setShowSplitSectionModal={setShowSplitSectionModal}
              setSplitSection={setSplitSection}
            />
          ))
        : text}
    </div>
  );
};

export default StructurerTextDisplaySegmenter;
