import { SectionInfo, Outline, StructurerTextDisplayProps } from "@/types";
import { prepareIndexList } from "@/utils/structurerUtils";
import { useEffect, useState } from "react";
import { TextAnnotator } from "@/utils/text-annotate/TextAnnotator";

const StructurerTextDisplaySegmenter = (props: StructurerTextDisplayProps) => {
  const {
    text,
    llmResponse,
    outline,
    setOutline,
    setFocusedSection,
    focusedSection,
  } = props;

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
      {outline.length > 0
        ? outline.map((section) => (
            <div
              key={section.startIndex}
              className="border border-blue-500 rounded-md flex flex-col gap-1 p-2"
            >
              <div className="flex flex-row justify-between">
                <span className="text-lg font-semibold">{section.key}:</span>
                <button
                  className={`${
                    focusedSection?.key === section.key
                      ? "bg-gray-500"
                      : "bg-blue-500"
                  } text-right rounded-md p-1 transform hover:scale-105`}
                  onClick={() => setFocusedSection(section)}
                >
                  Label Entities
                </button>
              </div>
              {section.text && (
                <TextAnnotator
                  content={section.text}
                  onChange={(value) => {}}
                  value={[]}
                  colors={{}}
                  setOutline={() => {}}
                  outline={
                    outline.find((sec) => sec.key === section.key)?.entities
                  }
                />
              )}
            </div>
          ))
        : text}
    </div>
  );
};

export default StructurerTextDisplaySegmenter;
