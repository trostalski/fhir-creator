import { StructurerOutlineSectionProps } from "@/types";
import StructuerOutlineEntity from "./StructurerOutlineEntity";

const StructurerOutlineSection = (props: StructurerOutlineSectionProps) => {
  const { outline, setOutline, section } = props;

  return (
    <div>
      <div className="flex flex-col gap-1">{section}</div>
      {Object.keys(outline[section]).map((entity) => {
        return (
          <StructuerOutlineEntity key={entity} {...props} entity={entity} />
        );
      })}
    </div>
  );
};

export default StructurerOutlineSection;
