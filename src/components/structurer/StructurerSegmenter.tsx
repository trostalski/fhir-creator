import { StructurerModes, StructurerSegmenterProps } from "@/types";
import { AiOutlineRollback } from "react-icons/ai";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import ChangeTextButton from "./ChangeTextButton";

const StructurerSegmenter = (props: StructurerSegmenterProps) => {
  return (
    <div>
      <ChangeTextButton
        onClick={() => props.setMode(StructurerModes.inputText)}
      />
    </div>
  );
};

export default StructurerSegmenter;
