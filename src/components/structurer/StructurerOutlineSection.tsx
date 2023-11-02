import { StructurerOutlineSectionProps } from "@/types";
import StructuerOutlineEntity from "./StructurerOutlineEntity";

const StructurerOutlineSection = (props: StructurerOutlineSectionProps) => {
  const { outline, setOutline, section, sectionRefs } = props;

  const handleSectionClick = () => {
    const refIndex = outline.findIndex((s) => s.key === section.key);
    if (refIndex !== -1) {
      sectionRefs[refIndex].current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-1" onClick={() => handleSectionClick()}>
        {section.key}
      </div>
      {section.entities &&
        Object.keys(section.entities).map((key) => {
          return (
            <StructuerOutlineEntity
              entityName={key}
              key={key}
              {...props}
              entity={section.entities![key]}
            />
          );
        })}
    </div>
  );
};

export default StructurerOutlineSection;
