import { Outline, Entities, StructurerOutlineProps } from "@/types";
import StructurerOutlineSection from "./StructurerOutlineSection";
import { useState } from "react";
import ExpandAccordionToggle from "../shared/ExpandAccordionToggle";

const StructurerOutline = (props: StructurerOutlineProps) => {
  const { outline, setOutline } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-2/12 gap-1 h-[90vh]">
      <div className="flex items-center">
        {outline.length > 0 ? (
          <div className="flex-shrink-0 transform hover:bg-blue-500 p-1 rounded-md">
            <ExpandAccordionToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        ) : null}
        <h2 className="text-center text-lg flex-grow mx-auto">
          Sections ({outline.length})
        </h2>
      </div>
      <div
        className={`${
          !isOpen ? "max-h-0 overflow-hidden" : "overflow-auto"
        }  flex flex-col`}
      >
        {outline.map((section) => {
          return (
            <StructurerOutlineSection
              key={section.key}
              {...props}
              section={section}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StructurerOutline;
