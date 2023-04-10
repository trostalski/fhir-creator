import {
  isMultiTypeString,
  removeDots,
  removeMultiTypeString,
} from "@/pages/utils";
import { Element } from "@/types";
import { CodeableConcept, Age, Period, Range } from "fhir/r4";

interface InputFromTypeProps {
  element: Element;
  inputData: {
    path: string;
    value: any; // TODO use the input type and the FHIR library to set the type for the value
  }[];
  setInputData: React.Dispatch<
    React.SetStateAction<
      {
        path: string;
        value: string;
      }[]
    >
  >;
  isArray: boolean;
  type?: string;
}

const formatIdForPath = (id: string, type: string) => {
  let result = id;
  if (isMultiTypeString(id)) {
    result = removeMultiTypeString(result);
    result = result + type;
  }
  return result;
};

const InputFromType = (props: InputFromTypeProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    path: string
  ) => {
    props.setInputData([
      ...props.inputData.filter((inputData) => inputData.path !== path),
      { path: path, value: e.target.value },
    ]);
  };

  switch (props.type) {
    case "Age":
      return (
        <input
          type="number"
          id={removeDots(props.element.id)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          onChange={(e) => {
            handleChange(e, props.element.id);
          }}
        />
      );
    case "dateTime":
      return (
        <input
          type="datetime-local"
          id={removeDots(props.element.id)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            handleChange(e, props.element.id);
          }}
        />
      );
    case "Period":
      return (
        <div className="flex flex-row w-full gap-8">
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">Start</label>
            <input
              type="datetime-local"
              className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="YYYY/MM/DD"
              onChange={(e) => {
                handleChange(e, props.element.id + ".Start");
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">End</label>
            <input
              type="datetime-local"
              className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="YYYY/MM/DD"
              onChange={(e) => {
                handleChange(e, props.element.id + ".End");
              }}
            />
          </div>
        </div>
      );
    case "Range":
      return (
        <div className="flex flex-row w-full gap-8">
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">low</label>
            <div className="flex flex-row gap-2">
              <input
                type="number"
                step={0.01}
                className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="value"
                onChange={(e) => {
                  handleChange(
                    e,
                    formatIdForPath(props.element.id, props.type!) +
                      ".low.value"
                  );
                }}
              />
              <input
                type="text"
                className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="currency"
                onChange={(e) => {
                  handleChange(
                    e,
                    formatIdForPath(props.element.id, props.type!) +
                      ".low.currency"
                  );
                }}
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">high</label>
            <div className="flex flex-row gap-2">
              <input
                type="number"
                step={0.01}
                className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="value"
                onChange={(e) => {
                  handleChange(
                    e,
                    formatIdForPath(props.element.id, props.type!) +
                      ".high.value"
                  );
                }}
              />
              <input
                type="text"
                className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="currency"
                onChange={(e) => {
                  handleChange(
                    e,
                    formatIdForPath(props.element.id, props.type!) +
                      ".high.currency"
                  );
                }}
              />
            </div>
          </div>
        </div>
      );
    case "CodeableConcept":
      return (
        <div className="flex flex-row w-full gap-8">
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">system</label>
            <input
              type="text"
              className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                if (props.isArray) {
                  handleChange(e, props.element.id + "[0].coding[0].system");
                } else {
                  handleChange(e, props.element.id + ".coding[0].system");
                }
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">code</label>
            <input
              type="text"
              className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                if (props.isArray) {
                  handleChange(e, props.element.id + "[0].coding[0].code");
                } else {
                  handleChange(e, props.element.id + ".coding[0].code");
                }
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">display</label>
            <input
              type="text"
              className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                if (props.isArray) {
                  handleChange(e, props.element.id + "[0].coding[0].display");
                } else {
                  handleChange(e, props.element.id + ".coding[0].display");
                }
              }}
            />
          </div>
        </div>
      );
    case "Annotation":
      return (
        <div className="flex flex-row w-full gap-8">
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">author</label>
            <input
              type="text"
              className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                handleChange(e, props.element.id + ".authorString");
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">time</label>
            <input
              type="time"
              className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                handleChange(e, props.element.id + ".time");
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">text</label>
            <input
              type="text"
              className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                handleChange(e, props.element.id + ".text");
              }}
            />
          </div>
        </div>
      );
    case "BackboneElement":
      return null;
    default:
      return (
        <input
          type="text"
          id={removeDots(props.element.id)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          onChange={(e) => {
            handleChange(e, props.element.id);
          }}
        />
      );
  }
};

export default InputFromType;
