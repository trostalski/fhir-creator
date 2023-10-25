import { StructurerModes, StructurerTextDisplayProps } from "@/types";
import ChangeTextButton from "./ChangeTextButton";
import StructurerTextDisplaySegmenter from "./StructurerTextDisplaySegmenter";
import StructurerTextDisplayLabeler from "./StructurerTextDisplayLabeler";

const StructurerTextDisplay = (props: StructurerTextDisplayProps) => {
  const { mode, text, setMode, setText, llmResponse, setLlmResponse } = props;

  return (
    <div className="flex flex-col gap-3">
      <div className="border-blue-500 border rounded-md overflow-auto h-[85vh]">
        {mode === StructurerModes.segmentText ? (
          <StructurerTextDisplaySegmenter {...props} />
        ) : mode === StructurerModes.labelText ? (
          <StructurerTextDisplayLabeler {...props} />
        ) : null}
      </div>
      <ChangeTextButton onClick={() => setMode(StructurerModes.inputText)} />
    </div>
  );
};

export default StructurerTextDisplay;
