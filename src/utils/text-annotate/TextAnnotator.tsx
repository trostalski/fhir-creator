import React from "react";

import Mark from "./Mark";
import {
  selectionIsEmpty,
  selectionIsBackwards,
  splitWithOutline,
} from "./utils";
import { Span } from "./span";
import { ColorStore, Outline, OutlineArrayItem, OutlineItem } from "@/types";

export interface SplitProps {
  outlineArrayItem?: OutlineArrayItem;
  content: string;
  start: number;
  end: number;
  onClick: (e: any) => any;
  mark?: boolean;
  key?: string;
  color?: string;
  selectedEntity?: OutlineItem;
}

const Split = (props: SplitProps) => {
  if (props.mark) {
    let selected = false;
    if (
      props.selectedEntity &&
      props.selectedEntity.item === props.outlineArrayItem?.item
    ) {
      selected = true;
    }
    let markProps = { ...props, selected: selected };
    return <Mark {...markProps} />;
  }

  return (
    <span data-start={props.start} data-end={props.end} onClick={() => {}}>
      {props.content}
    </span>
  );
};

interface TextSpan extends Span {
  text: string;
}

type TextBaseProps<T> = {
  outline?: Outline;
  setOutline: (outline: Outline) => void;
  content: string;
  value: T[];
  onChange: (value: T[]) => any;
  getSpan?: (span: TextSpan) => T;
  colors: ColorStore;
  selectedEntity?: OutlineItem;
  // TODO: determine whether to overwrite or leave intersecting ranges.
};

type TextAnnotatorProps<T> = React.HTMLAttributes<HTMLDivElement> &
  TextBaseProps<T>;

export const TextAnnotator = <T extends Span>(props: TextAnnotatorProps<T>) => {
  const getSpan = (span: TextSpan): T => {
    // TODO: Better typings here.
    if (props.getSpan) return props.getSpan(span) as T;
    return { start: span.start, end: span.end } as T;
  };

  const handleMouseUp = () => {
    if (!props.onChange) return;

    const selection = window.getSelection();

    if (!selection || selectionIsEmpty(selection)) return;

    const anchorParent = selection.anchorNode?.parentElement;
    const focusParent = selection.focusNode?.parentElement;

    const anchorDataStart = anchorParent?.getAttribute("data-start");
    const focusDataStart = focusParent?.getAttribute("data-start");

    if (anchorParent && focusParent && anchorDataStart && focusDataStart) {
      let start = parseInt(anchorDataStart, 10) + (selection.anchorOffset || 0);
      let end = parseInt(focusDataStart, 10) + (selection.focusOffset || 0);

      if (selectionIsBackwards(selection)) {
        [start, end] = [end, start];
      }

      props.onChange([
        ...props.value,
        getSpan({ start, end, text: content.slice(start, end) }),
      ]);

      window.getSelection()?.empty(); // Use null-conditional operator to avoid the need for non-null assertion
    }
  };

  const handleSplitClick = (outlineItem: OutlineArrayItem) => {
    if (props.outline && outlineItem) {
      props.setOutline({
        ...props.outline,
        [outlineItem.resourceType]: props.outline[
          outlineItem.resourceType
        ].filter((entity) => {
          return entity.item !== outlineItem.item;
        }),
      });
    }
  };

  const { content, value, style } = props;
  const splits = splitWithOutline(content, value, props.colors, props.outline);
  return (
    <div onMouseUp={handleMouseUp} className="overflow-y-auto">
      {splits.map((split) => (
        <Split
          key={`${split.start}-${split.end}`}
          {...split}
          onClick={handleSplitClick}
          selectedEntity={props.selectedEntity}
        />
      ))}
    </div>
  );
};

export default TextAnnotator;
