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
            outline={outline}
            setOutline={setOutline}
            section={section}
            key={section.key}
          />
        );
      })}
    </div>
  );
};

export default StructurerOutline;
