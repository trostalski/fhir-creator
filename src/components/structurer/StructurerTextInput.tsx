import { StructurerModes, StructurerTextInputProps } from "@/types";
import { useState } from "react";

const StructurerTextInput = (props: StructurerTextInputProps) => {
  const { setMode, setText, text, llmResponse, setLlmResponse } = props;

  return (
    <div>
      <textarea
        className="rounded"
        rows={30}
        cols={60}
        placeholder="Paste a medical text to be structured"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>
    </div>
  );
};

export default StructurerTextInput;
