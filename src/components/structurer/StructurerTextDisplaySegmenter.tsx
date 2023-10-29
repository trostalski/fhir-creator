import { SectionInfo, Outline, StructurerTextDisplayProps } from "@/types";
import { prepareIndexList } from "@/utils/structurerUtils";
import { useEffect, useState } from "react";
import { TextAnnotator } from "react-text-annotate";

const StructurerTextDisplaySegmenter = (props: StructurerTextDisplayProps) => {
  const { text, llmResponse, outline, setOutline } = props;

  const [indexSections, setIndexSections] = useState<SectionInfo[]>([]);

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
          setIndexSections(indexSections);
          setOutline(indexSections);
        }
      } catch (error) {
        console.error("Error parsing llmResponse:", error);
      }
    }
  }, [llmResponse]);

  return (
    <div className="flex flex-col gap-1 whitespace-pre">
      {indexSections.length > 0
        ? indexSections.map((section) => (
            <div
              key={section.startIndex}
              className="border border-blue-500 rounded-md flex flex-col gap-1 p-2"
            >
              <div className="text-lg font-semibold">{section.key}:</div>
              {section.text && (
                <TextAnnotator
                  content={section.text}
                  onChange={(value) => {}}
                  value={[]}
                />
              )}
            </div>
          ))
        : text}
    </div>
  );
};

export default StructurerTextDisplaySegmenter;
