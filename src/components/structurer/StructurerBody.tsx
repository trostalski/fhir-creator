import { createRef, useState } from "react";
import { StructurerModes, SectionInfo } from "@/types";
import StructurerText from "./StructurerText";
import StructurerWorkBench from "./StructurerWorkBench";
import StructurerOutline from "./StructurerOutline";

const StructurerBody = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<StructurerModes>(StructurerModes.inputText);
  const [llmResponse, setLlmResponse] = useState<string>();
  const [outline, setOutline] = useState<SectionInfo[]>([]);
  const [focusSection, setFocusSection] = useState<SectionInfo | undefined>();
  const [focusedCategory, setFocusedCategory] = useState<string>();

  const sectionRefs = outline.map(() => createRef<HTMLDivElement>());

  return (
    <div className="w-full p-2 flex flex-row gap-2">
      <StructurerText
        setMode={setMode}
        setText={setText}
        text={text}
        mode={mode}
        llmResponse={llmResponse}
        setLlmResponse={setLlmResponse}
        outline={outline}
        setOutline={setOutline}
        focusedSection={focusSection}
        setFocusedSection={setFocusSection}
        sectionRefs={sectionRefs}
        focusedCategory={focusedCategory}
        setFocusedCategory={setFocusedCategory}
      />
      <StructurerWorkBench
        mode={mode}
        setMode={setMode}
        text={text}
        setText={setText}
        llmResponse={llmResponse}
        setLlmResponse={setLlmResponse}
        outline={outline}
        setOutline={setOutline}
        focusedSection={focusSection}
        setFocusedSection={setFocusSection}
        sectionRefs={sectionRefs}
        focusedCategory={focusedCategory}
        setFocusedCategory={setFocusedCategory}
      />
      <StructurerOutline
        setMode={setMode}
        text={text}
        setText={setText}
        llmResponse={llmResponse}
        setLlmResponse={setLlmResponse}
        outline={outline}
        setOutline={setOutline}
        focusedSection={focusSection}
        setFocusedSection={setFocusSection}
        sectionRefs={sectionRefs}
        focusedCategory={focusedCategory}
        setFocusedCategory={setFocusedCategory}
      />
    </div>
  );
};

export default StructurerBody;
