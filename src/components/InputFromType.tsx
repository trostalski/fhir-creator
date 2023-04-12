import {
  formatIdForPath,
  isMultiTypeString,
  removeDots,
  removeMultiTypeString,
} from "@/pages/utils";
import { Element } from "@/types";

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
  resourceType?: string;
  type?: string;
}

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
          className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          value={
            props.inputData.find(
              (inputData) =>
                inputData.path ===
                formatIdForPath(props.element.id, undefined, props.resourceType)
            )?.value || ""
          }
          onChange={(e) => {
            handleChange(
              e,
              formatIdForPath(props.element.id, undefined, props.resourceType)
            );
          }}
        />
      );
    case "dateTime":
      return (
        <input
          type="datetime-local"
          value={
            props.inputData.find(
              (inputData) =>
                inputData.path ===
                formatIdForPath(props.element.id, undefined, props.resourceType)
            )?.value || ""
          }
          id={removeDots(props.element.id)}
          className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            handleChange(
              e,
              formatIdForPath(props.element.id, undefined, props.resourceType)
            );
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
              value={
                props.inputData.find(
                  (inputData) =>
                    inputData.path ===
                    formatIdForPath(
                      props.element.id,
                      undefined,
                      props.resourceType
                    ) +
                      ".Start"
                )?.value || ""
              }
              className="bg-gray-50 h-8 w-full p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="YYYY/MM/DD"
              onChange={(e) => {
                handleChange(
                  e,
                  formatIdForPath(
                    props.element.id,
                    undefined,
                    props.resourceType
                  ) + ".Start"
                );
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">End</label>
            <input
              type="datetime-local"
              value={
                props.inputData.find(
                  (inputData) =>
                    inputData.path ===
                    formatIdForPath(
                      props.element.id,
                      undefined,
                      props.resourceType
                    ) +
                      ".End"
                )?.value || ""
              }
              className="bg-gray-50 h-8 w-full p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="YYYY/MM/DD"
              onChange={(e) => {
                handleChange(
                  e,
                  formatIdForPath(
                    props.element.id,
                    undefined,
                    props.resourceType
                  ) + ".End"
                );
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
                value={
                  props.inputData.find(
                    (inputData) =>
                      inputData.path ===
                      formatIdForPath(
                        props.element.id,
                        undefined,
                        props.resourceType
                      ) +
                        ".low.value"
                  )?.value || ""
                }
                step={0.01}
                className="bg-gray-50 h-8 w-full p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="value"
                onChange={(e) => {
                  handleChange(
                    e,
                    formatIdForPath(
                      props.element.id,
                      props.type!,
                      props.resourceType
                    ) + ".low.value"
                  );
                }}
              />
              <input
                type="text"
                value={
                  props.inputData.find(
                    (inputData) =>
                      inputData.path ===
                      formatIdForPath(
                        props.element.id,
                        undefined,
                        props.resourceType
                      ) +
                        ".low.currency"
                  )?.value || ""
                }
                className="bg-gray-50 w-full h-8 p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="currency"
                onChange={(e) => {
                  handleChange(
                    e,
                    formatIdForPath(
                      props.element.id,
                      props.type!,
                      props.resourceType
                    ) + ".low.currency"
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
                value={
                  props.inputData.find(
                    (inputData) =>
                      inputData.path ===
                      formatIdForPath(
                        props.element.id,
                        undefined,
                        props.resourceType
                      ) +
                        ".high.value"
                  )?.value || ""
                }
                className="bg-gray-50 w-full h-8 p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="value"
                onChange={(e) => {
                  handleChange(
                    e,
                    formatIdForPath(
                      props.element.id,
                      props.type!,
                      props.resourceType
                    ) + ".high.value"
                  );
                }}
              />
              <input
                type="text"
                className="bg-gray-50 w-full h-8 p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="currency"
                onChange={(e) => {
                  handleChange(
                    e,
                    formatIdForPath(
                      props.element.id,
                      props.type!,
                      props.resourceType
                    ) + ".high.currency"
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
              value={
                props.inputData.find(
                  (inputData) =>
                    inputData.path ===
                    formatIdForPath(
                      props.element.id,
                      undefined,
                      props.resourceType
                    ) +
                      (props.isArray
                        ? "[0].coding[0].system"
                        : ".coding[0].system")
                )?.value || ""
              }
              className="bg-gray-50 h-8 w-full p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                handleChange(
                  e,
                  formatIdForPath(
                    props.element.id,
                    undefined,
                    props.resourceType
                  ) +
                    (props.isArray
                      ? "[0].coding[0].system"
                      : ".coding[0].system")
                );
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">code</label>
            <input
              type="text"
              value={
                props.inputData.find(
                  (inputData) =>
                    inputData.path ===
                    formatIdForPath(
                      props.element.id,
                      undefined,
                      props.resourceType
                    ) +
                      (props.isArray ? "[0].coding[0].code" : ".coding[0].code")
                )?.value || ""
              }
              className="bg-gray-50 h-8 w-full p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                handleChange(
                  e,
                  formatIdForPath(
                    props.element.id,
                    undefined,
                    props.resourceType
                  ) + (props.isArray ? "[0].coding[0].code" : ".coding[0].code")
                );
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">display</label>
            <input
              type="text"
              value={
                props.inputData.find(
                  (inputData) =>
                    inputData.path ===
                    formatIdForPath(
                      props.element.id,
                      undefined,
                      props.resourceType
                    ) +
                      (props.isArray
                        ? "[0].coding[0].display"
                        : ".coding[0].display")
                )?.value || ""
              }
              className="bg-gray-50 h-8 w-full p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                handleChange(
                  e,
                  formatIdForPath(
                    props.element.id,
                    undefined,
                    props.resourceType
                  ) +
                    (props.isArray
                      ? "[0].coding[0].display"
                      : ".coding[0].display")
                );
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
              value={
                props.inputData.find(
                  (inputData) =>
                    inputData.path ===
                    formatIdForPath(
                      props.element.id,
                      undefined,
                      props.resourceType
                    ) +
                      ".authorString"
                )?.value || ""
              }
              className="bg-gray-50 h-8 w-full p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                handleChange(
                  e,
                  formatIdForPath(
                    props.element.id,
                    undefined,
                    props.resourceType
                  ) + ".authorString"
                );
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">time</label>
            <input
              type="time"
              className="bg-gray-50 h-8 w-full p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={
                props.inputData.find(
                  (inputData) =>
                    inputData.path ===
                    formatIdForPath(
                      props.element.id,
                      undefined,
                      props.resourceType
                    ) +
                      ".time"
                )?.value || ""
              }
              onChange={(e) => {
                handleChange(
                  e,
                  formatIdForPath(
                    props.element.id,
                    undefined,
                    props.resourceType
                  ) + ".time"
                );
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">text</label>
            <input
              type="text"
              value={
                props.inputData.find(
                  (inputData) =>
                    inputData.path ===
                    formatIdForPath(
                      props.element.id,
                      undefined,
                      props.resourceType
                    ) +
                      ".text"
                )?.value || ""
              }
              className="bg-gray-50 h-8 w-full p-1 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                handleChange(
                  e,
                  formatIdForPath(
                    props.element.id,
                    undefined,
                    props.resourceType
                  ) + ".text"
                );
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
          className="bg-gray-50 h-8 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          value={
            props.inputData.find(
              (inputData) =>
                inputData.path ===
                formatIdForPath(props.element.id, undefined, props.resourceType)
            )?.value || ""
          }
          onChange={(e) => {
            handleChange(
              e,
              formatIdForPath(props.element.id, undefined, props.resourceType)
            );
          }}
        />
      );
  }
};

export default InputFromType;
