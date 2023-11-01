import { StructurerModes, StructurerWorkBenchProps } from "@/types";
import StructurerWorkBenchTextInput from "./StructurerWorkBenchTextInput";
import StructurerWorkBenchSegmenter from "./StructurerWorkBenchSegmenter";
import StructurerWorkBenchLabeler from "./StructurerWorkBenchLabeler";
import { useEffect } from "react";

const StructurerWorkBench = (props: StructurerWorkBenchProps) => {
  const { mode, text, outline, setOutline, focusedSection, setFocusedSection } =
    props;

  const labelerSection = {
    key: "Text",
    startIndex: 0,
    endIndex: text.length,
    askedFor: true,
    text: text,
  };

  useEffect(() => {
    if (mode === StructurerModes.labelText) {
      setOutline([labelerSection]);
      setFocusedSection(labelerSection);
    } else if (mode === StructurerModes.segmentText) {
      setOutline([]);
    }
  }, [mode]);

  return (
    <div className="flex flex-col items-center w-4/12 overflow-auto">
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
