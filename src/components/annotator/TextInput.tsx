import { useState } from "react";
import { TextInputProps } from "@/types";

export function TextInput(props: TextInputProps) {
  const [tempText, setTempText] = useState("");
  function onChange(e: React.FormEvent<HTMLTextAreaElement>) {
    setTempText(e.currentTarget.value);
  }

  return (
    <div className="flex flex-col w-1/2 gap-2">
      <textarea
        className="h-full w-full"
        name="input"
        id=""
        placeholder={"Copy your text here"}
        onChange={(e) => {
          onChange(e);
        }}
      ></textarea>
      <button
        className="bg-blue-500 text-white text-lg font-semibold py-1 rounded-lg hover:bg-blue-700"
        onClick={() => {
          props.setText(tempText);
        }}
      >
        Start Annotation
      </button>
    </div>
  );
}
