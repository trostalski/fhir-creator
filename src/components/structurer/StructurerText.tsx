import { StructurerModes, StructurerTextProps } from "@/types";
import StructurerTextInput from "./StructurerTextInput";
import StructurerTextDisplay from "./StructurerTextDisplay";

const StructurerText = (props: StructurerTextProps) => {
  const { mode, text, setMode, setText, llmResponse, setLlmResponse } = props;

  return (
    <div className="w-1/2">
      {mode === StructurerModes.inputText ? (
        <StructurerTextInput {...props} />
      ) : (
        <StructurerTextDisplay {...props} />
      )}
    </div>
  );
};

export default StructurerText;
