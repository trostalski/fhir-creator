import { StructurerOutlineSectionProps } from "@/types";
import StructuerOutlineEntity from "./StructurerOutlineEntity";

const StructurerOutlineSection = (props: StructurerOutlineSectionProps) => {
  const { outline, setOutline, section } = props;

  return (
    <div>
      <div className="flex flex-col gap-1">{section.key}</div>
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
