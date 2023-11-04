import { SectionInfo, StructurerSplitSectionButtonProps } from "@/types";
import { LuSplitSquareVertical } from "react-icons/lu";
import { Tooltip } from "react-tooltip";

const StructurerSplitSectionButton = (
  props: StructurerSplitSectionButtonProps
) => {
  const { setShowSplitSectionModal, setSplitSection, section } = props;

  const handleSplitClick = () => {
    setSplitSection(section);
    setShowSplitSectionModal(true);
  };

  return (
    <div className="bg-blue-500 rounded-md p-1 flex items-center transform hover:scale-105">
      <button
        data-tooltip-id="unite-button"
        data-tooltip-content={"Split Section"}
        onClick={handleSplitClick}
      >
        <LuSplitSquareVertical />
      </button>
      <Tooltip id="unite-button" place="left" />
    </div>
  );
};

export default StructurerSplitSectionButton;
