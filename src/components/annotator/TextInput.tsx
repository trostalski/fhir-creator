import { useState } from "react";
import { addMatches, transformOutline } from "@/utils/annotator_utils";
import { chains } from "@/utils/langchain_utils";
import { TextInputProps } from "@/types";

const focus_resources = [
  "Observation",
  "Medication",
  "Condition",
  "Procedure",
  "Patient",
  "Practicioner",
  "PractitionerRole",
  "Encounter",
  "AllergyIntolerance",
];

export function TextInput(props: TextInputProps) {
  const [tempText, setTempText] = useState("");
  function onChange(e: React.FormEvent<HTMLTextAreaElement>) {
    setTempText(e.currentTarget.value);
  }

  async function handleParse() {
    props.setText(tempText);
    const llmOutline = await chains.bundleOutlineV2.call({
      medical_text: tempText,
      focus_resources: focus_resources,
    });
    let llmOutlineJson;
    try {
      llmOutlineJson = JSON.parse(llmOutline.text);
    } catch (error) {
      console.log("Not able to parse llmOutput to Json with Error: ", error);
    }
    if (llmOutlineJson) {
      let matchedOutline = transformOutline(llmOutlineJson);
      addMatches(matchedOutline, tempText);
      props.setOutline(matchedOutline);
    }
  }

  return (
    <div className="flex flex-col h-[25vh] w-1/2">
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
        className="bg-blue-500 text-white text-lg font-semibold py-4 rounded-lg hover:bg-blue-700"
        onClick={() => {
          props.setText(tempText);
        }}
      >
        Start Annotation
      </button>
    </div>
  );
}

{
  /* <button
  onClick={() => {
    handleParse();
  }}
>
  Parse
</button> */
}
