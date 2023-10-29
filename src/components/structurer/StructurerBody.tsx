import { useState } from "react";
import { StructurerModes } from "@/types";
import StructurerText from "./StructurerText";
import StructurerWorkBench from "./StructurerWorkBench";
import StructurerOutline from "./StructurerOutline";

const StructurerBody = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<StructurerModes>(StructurerModes.inputText);
  const [llmResponse, setLlmResponse] = useState<string>();

  const dummyOutline = {
    Medication: {
      MedicationRequest: {
        item: "Taluvolul",
        matches: [[22, 44]],
      },
    },
  };

  return (
    <div className="w-full p-4 flex flex-row gap-4">
      <StructurerText
        setMode={setMode}
        setText={setText}
        text={text}
        mode={mode}
        llmResponse={llmResponse}
        setLlmResponse={setLlmResponse}
      />
      <StructurerWorkBench
        mode={mode}
        setMode={setMode}
        text={text}
        setText={setText}
        llmResponse={llmResponse}
        setLlmResponse={setLlmResponse}
      />
      <StructurerOutline />
    </div>
  );
};

export default StructurerBody;
