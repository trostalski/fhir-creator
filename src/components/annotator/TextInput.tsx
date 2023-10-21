import { useState } from "react";
import { TextInputProps } from "@/types";
import async from "react-select/dist/declarations/src/async";

export function TextInput(props: TextInputProps) {
  const [tempText, setTempText] = useState("");
  function onChange(e: React.FormEvent<HTMLTextAreaElement>) {
    setTempText(e.currentTarget.value);
  }

  async function segmentText(
    text: string = tempText,
    apiKey: string = "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"
  ) {
    const response = await fetch("/api/segmentText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: tempText, apiKey: apiKey }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="flex flex-col w-1/2 gap-2">
      <textarea
        className="h-full w-full rounded-md resize-none border-gray-400"
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
      <button
        className="bg-blue-500 text-white text-lg font-semibold py-1 rounded-lg hover:bg-blue-700"
        onClick={async () => {
          await segmentText();
        }}
      >
        Segment Text
      </button>
    </div>
  );
}
