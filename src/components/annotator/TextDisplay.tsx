// import TestOutline from "../data/20.json";
import { TextAnnotator } from "@/utils/text-annotate/TextAnnotator";
import React from "react";
import { llmJsonToAnnotatorFormat } from "@/utils/annotator_utils";
import {
  OutlineItem,
  SectionState,
  TextDisplayProps,
  ValueState,
} from "@/types";
import { toastError } from "@/toasts";
import SectionComponent from "./SectionHeading";
import SectionText from "./SectionText";

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

  const mockSections = [
    {
      id: 1,
      heading: "Section 1",
      text: "This is a section",
      state: SectionState.askedFor,
    },
    {
      id: 2,
      heading: "Section 2",
      text: "This is another section",
      state: SectionState.inferred,
    },
    {
      id: 3,
      heading: "not Allocated Section",
      text: "This is yet another section",
      state: SectionState.notAllocated,
    },
  ];

  return (
    <div>
      {mockSections.map((section: any) => (
        <SectionComponent key={section.id} section={section}>
          <SectionText>
            <TextAnnotator
              colors={props.colors}
              content={section.text}
              onChange={(value) => {}}
              value={[]}
              setOutline={() => {}}
              selectedEntity={props.selectedEntity}
              outline={props.outline}
            />
          </SectionText>
        </SectionComponent>
      ))}
    </div>

    // <div className="overflow-y-auto h-3/4">
    //   <TextAnnotator
    //     selectedEntity={props.selectedEntity}
    //     outline={props.outline}
    //     setOutline={props.setOutline}
    //     colors={props.colors}
    //     content={props.text}
    //     onChange={(value) => {
    //       if (!props.activeResourceType) {
    //         toastError("Please select a Resource Type!");
    //         return;
    //       }
    //       if (Array.isArray(value)) {
    //         const entity = transformValueToEntity(value, props.text);
    //         props.setOutline({
    //           ...props.outline,
    //           [props.activeResourceType!.value]: [
    //             ...props.outline![props.activeResourceType!.value],
    //             entity,
    //           ],
    //         });
    //       }
    //     }}
    //     value={annotatorMatches}
    //   />
    // </div>
  );
}
