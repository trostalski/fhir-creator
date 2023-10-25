import { StructurerModes, StructurerWorkBenchProps } from "@/types";
import StructurerWorkBenchTextInput from "./StructurerWorkBenchTextInput";
import StructurerWorkBenchSegmenter from "./StructurerWorkBenchSegmenter";
import StructurerWorkBenchLabeler from "./StructurerWorkBenchLabeler";

const StructurerWorkBench = (props: StructurerWorkBenchProps) => {
  const { mode, text, setMode, setText, llmResponse, setLlmResponse } = props;
  return (
    <div className="flex flex-col items-center w-1/2">
      {mode === StructurerModes.inputText ? (
        <StructurerWorkBenchTextInput {...props} />
      ) : mode === StructurerModes.segmentText ? (
        <StructurerWorkBenchSegmenter {...props} />
      ) : mode === StructurerModes.labelText ? (
        <StructurerWorkBenchLabeler {...props} />
      ) : null}
    </div>
  );
};
export default StructurerWorkBench;
