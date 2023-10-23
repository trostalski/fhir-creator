import { StructurerLabelerProps, StructurerModes } from "@/types";
import ChangeTextButton from "./ChangeTextButton";

const StructurerLabeler = (props: StructurerLabelerProps) => {
  return (
    <div>
      <ChangeTextButton
        onClick={() => props.setMode(StructurerModes.inputText)}
      />
    </div>
  );
};

export default StructurerLabeler;
