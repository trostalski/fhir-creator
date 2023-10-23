import { useState } from "react";
import StructurerTextInput from "./StructurerTextInput";
import { StructurerModes } from "@/types";
import StructurerSegmenter from "./StructurerSegmenter";
import StructurerLabeler from "./StructurerLabeler";

const StructurerBody = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<StructurerModes>(StructurerModes.inputText);

  return (
    <div className="w-full overflow-auto p-4">
      {mode === StructurerModes.inputText ? (
        <StructurerTextInput setMode={setMode} setText={setText} text={text} />
      ) : mode === StructurerModes.segmentText ? (
        <StructurerSegmenter text={text} setMode={setMode} setText={setText} />
      ) : (
        <StructurerLabeler text={text} setMode={setMode} setText={setText} />
      )}
    </div>
  );
};

export default StructurerBody;
