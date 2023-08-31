// import TestOutline from "../data/20.json";
import { TextAnnotator } from "react-text-annotate";
import React from "react";
import { llmJsonToAnnotatorFormat } from "@/utils/annotator_utils";
import { TextDisplayProps, ValueState } from "@/types";

export function TextDisplay(props: TextDisplayProps) {
  const [value, setValue] = React.useState<ValueState[]>([]);
  let annotatorMatches: ValueState[] = [];
  if (props.outline) {
    annotatorMatches = llmJsonToAnnotatorFormat(props.outline);
  }

  return (
    <div>
      <TextAnnotator
        content={props.text}
        onChange={(value) => {
          if (Array.isArray(value)) {
            setValue(value);
          }
        }}
        value={annotatorMatches}
      />
    </div>
  );
}
