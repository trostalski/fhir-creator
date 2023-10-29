import { Outline, SectionOutline, StructurerOutlineProps } from "@/types";
import StructurerOutlineSection from "./StructurerOutlineSection";

const StructurerOutline = (props: StructurerOutlineProps) => {
  const { outline, setOutline } = props;

  return (
    <div className="flex flex-col">
      {Object.keys(outline).map((key) => {
        return (
          <StructurerOutlineSection
            outline={outline}
            setOutline={setOutline}
            section={key}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default StructurerOutline;
