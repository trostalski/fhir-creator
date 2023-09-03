// import TestOutline from "../data/20.json";
import { TextAnnotator } from "@/utils/text-annotate/TextAnnotator";
import React from "react";
import { llmJsonToAnnotatorFormat } from "@/utils/annotator_utils";
import { OutlineItem, TextDisplayProps, ValueState } from "@/types";
import { toastError } from "@/toasts";

export function TextDisplay(props: TextDisplayProps) {
  const [value, setValue] = React.useState<ValueState[]>([]);
  let annotatorMatches: ValueState[] = [];
  if (props.outline) {
    annotatorMatches = llmJsonToAnnotatorFormat(props.outline);
  }

  const transformValueToEntity = (value: ValueState[], text: string) => {
    const entity: OutlineItem = {
      item: text.slice(
        value[value.length - 1].start,
        value[value.length - 1].end
      ),
      matches: [[value[value.length - 1].start, value[value.length - 1].end]],
    };
    return entity;
  };

  return (
    <div className="overflow-y-auto h-3/4">
      <TextAnnotator
        content={props.text}
        onChange={(value) => {
          if (!props.activeResourceType) {
            toastError("Please select a Resource Type!");
            return;
          }
          if (Array.isArray(value)) {
            const entity = transformValueToEntity(value, props.text);
            props.setOutline({
              ...props.outline,
              [props.activeResourceType!.value]: [
                ...props.outline![props.activeResourceType!.value],
                entity,
              ],
            });
          }
        }}
        value={annotatorMatches}
      />
    </div>
  );
}
