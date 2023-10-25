import { StructurerModes, StructurerTextProps } from "@/types";
import StructurerTextInput from "./StructurerTextInput";
import StructurerTextDisplay from "./StructurerTextDisplay";

const StructurerText = (props: StructurerTextProps) => {
  const { mode, text, setMode, setText, llmResponse, setLlmResponse } = props;

  return (
    <div className="w-1/2">
      {mode === StructurerModes.inputText ? (
        <StructurerTextInput
          setMode={setMode}
          setText={setText}
          text={text}
          llmResponse={llmResponse}
          setLlmResponse={setLlmResponse}
        />
      ) : (
        <StructurerTextDisplay
          mode={mode}
          text={text}
          setMode={setMode}
          setText={setText}
          llmResponse={llmResponse}
          setLlmResponse={setLlmResponse}
        />
      )}
    </div>
  );
};

export default StructurerText;
