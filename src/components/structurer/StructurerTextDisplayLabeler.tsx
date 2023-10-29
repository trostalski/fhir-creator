import { StructurerTextDisplayProps } from "@/types";
import { TextAnnotator } from "react-text-annotate";

const StructurerTextDisplayLabeler = (props: StructurerTextDisplayProps) => {
  const { mode, text, setMode, setText, llmResponse, setLlmResponse } = props;
  return (
    <div className="whitespace-pre">
      <TextAnnotator content={text} onChange={(value) => {}} value={[]} />;
    </div>
  );
};

export default StructurerTextDisplayLabeler;
