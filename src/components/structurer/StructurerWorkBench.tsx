import { StructurerModes, StructurerWorkBenchProps } from "@/types";
import StructurerWorkBenchTextInput from "./StructurerWorkBenchTextInput";
import StructurerWorkBenchSegmenter from "./StructurerWorkBenchSegmenter";
import StructurerWorkBenchLabeler from "./StructurerWorkBenchLabeler";
import { useEffect } from "react";

const StructurerWorkBench = (props: StructurerWorkBenchProps) => {
  const { mode, text, outline, setOutline } = props;

  // useEffect(() => {
  //   if (mode === StructurerModes.labelText) {
  //     setLlmResponse(undefined);
  //   }
  // }, [mode]);

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
