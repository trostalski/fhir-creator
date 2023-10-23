// import TestOutline from "../data/20.json";
import { TextAnnotator } from "@/utils/text-annotate/TextAnnotator";
import React, { useState } from "react";
import { llmJsonToAnnotatorFormat } from "@/utils/annotator_utils";
import {
  OutlineItem,
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
  const [value, setValue] = React.useState<ValueState[]>([]);
  let annotatorMatches: ValueState[] = [];
  if (props.outline) {
    annotatorMatches = llmJsonToAnnotatorFormat(props.outline);
  }
  const [sections, setSections] = useState<Section[]>([]);
  const [substrings, setSubstrings] = useState<string[]>([]);

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

  const apiKeys = useLiveQuery(() => {
    return db.apiKey.toArray();
  });
  const { activeAPIKey, setActiveAPIKey } = useStore((state) => {
    return {
      activeAPIKey: state.activeAPIKey,
      setActiveAPIKey: state.setActiveAPIKey,
    };
  });

  function splitText(): void {
    const segments: string[] = [];
    let prevIndex = 0;

    if (substrings.length === 0) {
      toast.error("No substrings found");
      return;
    }
    for (const substring of substrings) {
      const startIndex = props.text.indexOf(substring);

      if (
        startIndex !== -1 &&
        startIndex !== prevIndex &&
        startIndex > prevIndex
      ) {
        segments.push(props.text.slice(prevIndex, startIndex).trim());
        prevIndex = startIndex;
      }
    }

    // Append the remaining text after the last substring as the last segment
    segments.push(props.text.slice(prevIndex).trim());

    const sections: Section[] = [];
    let counter = 0;
    for (const segment of segments) {
      sections.push({
        id: counter,
        text: segment,
        heading: `Heading ${counter}`,
        state: SectionState.inferred,
        children: undefined,
      });
      counter++;
    }
    console.log(sections);
    setSections(sections);
  }

  async function segmentText(text: string = props.text) {
    if (!activeAPIKey) {
      toast.error("No API Key selected");
      return;
    }
    const response = await fetch("/api/segmentText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text, apiKey: activeAPIKey }),
    });
    const data = await response.json();
    if (data && data.substrings) {
      setSubstrings(data.substrings);
      toast.success("Text segmented");
    } else {
      toast.error("Text segmentation failed");
    }
  }

  return (
    // <div className="overflow-y-auto h-3/4">
    //   <button
    //     className="bg-blue-500 text-white text-lg font-semibold py-1 rounded-lg hover:bg-blue-700"
    //     onClick={async () => {
    //       await segmentText();
    //     }}
    //   >
    //     Segment Text
    //   </button>
    //   <button
    //     className="bg-blue-500 text-white text-lg font-semibold py-1 rounded-lg hover:bg-blue-700"
    //     onClick={async () => {
    //       splitText();
    //     }}
    //   >
    //     Split Text
    //   </button>
    //   {sections &&
    //     sections.map((section: any) => (
    //       <SectionComponent key={section.id} section={section}>
    //         <SectionText>
    //           <TextAnnotator
    //             colors={props.colors}
    //             content={section.text}
    //             onChange={(value) => {}}
    //             value={[]}
    //             setOutline={() => {}}
    //             selectedEntity={props.selectedEntity}
    //             outline={props.outline}
    //           />
    //         </SectionText>
    //       </SectionComponent>
    //     ))}
    // </div>

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
