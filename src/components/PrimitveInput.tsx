import { ProfileTreeNode } from "@/utils/buildTree";
import { ElementDefinition, StructureDefinition } from "fhir/r4";
import React from "react";

interface PrimitveInputProps {
  node: ProfileTreeNode;
}

interface InputFromTypeProps {
  type: string;
}

const InputFromType = (props: InputFromTypeProps) => {
  switch (props.type) {
    //for each primitve type return its own component
    case "boolean":
      return (
        // boolean radio buttons with yes and no option
        <div className="flex flex-row gap-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="boolean"
              value="true"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="boolean"
              value="false"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      );
    case "canonical":
    case "code":
    case "Extension":
    case "id":
    case "markdown":
    case "oid":
    case "string":
    case "url":
    case "uri":
    case "uuid":
      return (
        <input
          type="text"
          className="bg-gray-50 h-8 w-full p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      );
    case "decimal":
    case "integer":
    case "integer64":
    case "positiveInt":
    case "unsignedInt":
      return (
        <input
          type="number"
          className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      );
    case "dateTime":
    case "instant":
      return (
        <input
          type="date"
          className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      );
    case "date":
      return (
        <input
          type="date"
          className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      );
    case "time":
      return (
        <input
          type="time"
          className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      );
    default:
      return (
        <input
          type="text"
          className="bg-gray-50 h-8 w-full p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      );
  }
};

const PrimitveInput = (props: PrimitveInputProps) => {
  //switch case for primitive types

  return (
    <>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {props.node.path}
      </label>
      <InputFromType type={props.node.element.type![0].code} />
    </>
  );
};

export default PrimitveInput;
