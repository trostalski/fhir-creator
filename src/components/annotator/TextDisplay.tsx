// import TestOutline from "../data/20.json";
import { TextAnnotator } from "@/utils/text-annotate/TextAnnotator";
import React, { useState } from "react";
import { llmJsonToAnnotatorFormat } from "@/utils/annotator_utils";
import {
  EntityElement,
  Section,
  SectionState,
  TextDisplayProps,
  ValueState,
} from "@/types";
import { toastError } from "@/toasts";
import SectionComponent from "./SectionHeading";
import SectionText from "./SectionText";
import { useStore } from "@/stores/useStore";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/db";
import { toast } from "react-toastify";

export function TextDisplay(props: TextDisplayProps) {
  let annotatorMatches: ValueState[] = [];
  if (props.outline) {
    annotatorMatches = llmJsonToAnnotatorFormat(props.outline);
  }

  const transformValueToEntity = (value: ValueState[], text: string) => {
    const entity: EntityElement = {
      item: text.slice(
        value[value.length - 1].start,
        value[value.length - 1].end
      ),
      matches: [[value[value.length - 1].start, value[value.length - 1].end]],
    };
    return entity;
  };

  const apiKeys = useLiveQuery(() => {
    return db.apiKey.toArray();
  });
  const { activeAPIKey, setActiveAPIKey } = useStore((state) => {
    return {
      activeAPIKey: state.activeAPIKey,
      setActiveAPIKey: state.setActiveAPIKey,
    };
  });

  return (
    <div className="overflow-y-auto h-3/4">
      <TextAnnotator
        selectedEntity={props.selectedEntity}
        outline={props.outline}
        setOutline={props.setOutline}
        colors={props.colors}
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
