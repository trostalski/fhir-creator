import { ElementDefinition, StructureDefinition } from "fhir/r4";
import React from "react";

interface PrimitveInputProps {
  id: string;
  element: ElementDefinition;
}

//TODO: write script to extract primitive types from specifications

const PrimitveInput = (props: PrimitveInputProps) => {
  //switch case for primitive types

  const renderInput = (element: ElementDefinition) => {
    switch (element.type![0].code) {
      //for each primitve type return its own component
      case "string":
        return <input type="text" />;
      case "integer":
        return <input type="number" />;
      case "decimal":
        return <input type="number" />;
      case "dateTime":
        return <input type="date" />;
      case "date":
        return <input type="date" />;
      case "boolean":
        return <input type="checkbox" />;
      case "uri":
        return <input type="text" />;
      default:
        return <input type="text" />;
    }
  };
  return <div>PrimitveInput</div>;
};

export default PrimitveInput;
