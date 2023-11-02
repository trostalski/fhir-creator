import { createRef, useState } from "react";
import { StructurerModes, SectionInfo, ColorStore } from "@/types";
import StructurerText from "./StructurerText";
import StructurerWorkBench from "./StructurerWorkBench";
import StructurerOutline from "./StructurerOutline";
import seedrandom from "seedrandom";
import { colorSeed, defaultFocusResources } from "@/utils/constants";
import { setColorsForDefaultResources } from "@/utils/annotator_utils";

const StructurerBody = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<StructurerModes>(StructurerModes.inputText);
  const [llmResponse, setLlmResponse] = useState<string>();
  const [outline, setOutline] = useState<SectionInfo[]>([]);
  const [focusSection, setFocusSection] = useState<SectionInfo | undefined>();
  const [focusedCategory, setFocusedCategory] = useState<string>();
  const [rng, setRng] = useState<seedrandom.PRNG>(() => seedrandom(colorSeed));
  const [colors, setColors] = useState<ColorStore>(
    setColorsForDefaultResources(defaultFocusResources, rng)
  );

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
        colors={colors}
        setColors={setColors}
        rng={rng}
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
        colors={colors}
        setColors={setColors}
        rng={rng}
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
        colors={colors}
        setColors={setColors}
        rng={rng}
      />
    </div>
  );
};

export default StructurerBody;
