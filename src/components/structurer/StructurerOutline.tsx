import { Outline, Entities, StructurerOutlineProps } from "@/types";
import StructurerOutlineSection from "./StructurerOutlineSection";

const StructurerOutline = (props: StructurerOutlineProps) => {
  const { outline, setOutline } = props;

  return (
    <div className="flex flex-col overflow-auto w-2/12">
      Outline
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
  );
};

export default StructurerOutline;
