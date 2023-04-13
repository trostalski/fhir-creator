import React from "react";
import { StructureDefinition } from "fhir/r4";

interface ParentWrapperProps {
  children: React.ReactNode;
}

const ParentWrapper = (props: ParentWrapperProps) => {
  return <div>{props.children}</div>;
};

export default ParentWrapper;
