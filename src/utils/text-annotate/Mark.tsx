import { ColorStore, OutlineArrayItem } from "@/types";
import React, { FC } from "react";
import { SplitProps } from "./TextAnnotator";

export interface MarkProps {
  outlineArrayItem?: OutlineArrayItem;
  content: string;
  start: number;
  end: number;
  onClick: (event: any) => any;
  mark?: boolean;
  key?: string;
  color?: string;
}

const Mark: FC<SplitProps> = (props) => (
  <mark
    className="rounded-md p-1"
    style={{
      backgroundColor: props.color || "#84d2ff",
      padding: "0 4px",
    }}
    data-start={props.start}
    data-end={props.end}
    onClick={() => props.onClick({ start: props.start, end: props.end })}
  >
    {props.content}
    {props.outlineArrayItem && (
      <span style={{ fontSize: "0.7em", fontWeight: 500, marginLeft: 6 }}>
        {props.outlineArrayItem.resourceType}
      </span>
    )}
  </mark>
);

export default Mark;
