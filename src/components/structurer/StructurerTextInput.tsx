import { StructurerModes, StructurerTextInputProps } from "@/types";
import { useState } from "react";
import { TiUpload } from "react-icons/ti";
import { GrDocumentPdf, GrScan } from "react-icons/gr";
import StructurerUpload from "./StructurerUpload";

const StructurerTextInput = (props: StructurerTextInputProps) => {
  const { setMode, setText, text, llmResponse, setLlmResponse } = props;

  return (
    <div className="flex-flex-col gap-2">
      <StructurerUpload setText={setText} />
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
