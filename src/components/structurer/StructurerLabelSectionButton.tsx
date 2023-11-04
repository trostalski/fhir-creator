import { SectionInfo, StructurerLabelSectionButtonProps } from "@/types";
import { LiaMarkerSolid } from "react-icons/lia";
import { Tooltip } from "react-tooltip";

const StructurerLabelSectionButton = (
  props: StructurerLabelSectionButtonProps
) => {
  const { focusedSection, section, setFocusedSection } = props;

  return (
    <div
      data-tooltip-content={"Label this section"}
      data-tooltip-id="label-tooltip"
    >
      <button
        className={`${
          focusedSection?.key === section.key ? "bg-gray-500" : "bg-blue-500"
        } text-right rounded-md p-1 transform hover:scale-105`}
        onClick={() => setFocusedSection(section)}
      >
        <LiaMarkerSolid />
      </button>
      <Tooltip id="label-tooltip" place="left" />
    </div>
  );
};

export default StructurerLabelSectionButton;
