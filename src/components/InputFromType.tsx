import { removeDots } from "@/pages/utils";
import { Element } from "@/types";
import { CodeableConcept, Age, Period, Range } from "fhir/r4";

interface InputFromTypeProps {
  element: Element;
  inputData: {
    id: string;
    value: any; // TODO use the input type and the FHIR library to set the type for the value
  }[];
  setInputData: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        value: string;
      }[]
    >
  >;
  type?: string;
}

const InputFromType = (props: InputFromTypeProps) => {
  const handleChangePrimitive = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setInputData([
      ...props.inputData.filter((input) => input.id !== props.element.id),
      { id: props.element.id, value: e.target.value },
    ]);
  };

  const handleChangeOneComplex = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    let entry = props.inputData.find((input) => input.id === props.element.id);
    if (entry) {
      entry.value[key] = e.target.value;
    } else {
      entry = {
        id: props.element.id,
        value: { [key]: e.target.value },
      };
    }
    props.setInputData([
      ...props.inputData.filter((input) => input.id !== props.element.id),
      entry,
    ]);
  };

  const handleChangeTwoComplex = (
    e: React.ChangeEvent<HTMLInputElement>,
    key_1: string,
    key_2: string
  ) => {
    let entry = props.inputData.find((input) => input.id === props.element.id);
    if (entry) {
      if (entry.value[key_1]) {
        entry.value[key_1][key_2] = e.target.value;
      } else {
        entry.value[key_1] = { [key_2]: e.target.value };
      }
    } else {
      entry = {
        id: props.element.id,
        value: { [key_1]: { [key_2]: e.target.value } },
      };
    }
    props.setInputData([
      ...props.inputData.filter((input) => input.id !== props.element.id),
      entry,
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
            handleChangePrimitive(e);
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
            handleChangePrimitive(e);
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
                handleChangeOneComplex(e, "Start");
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
                handleChangeOneComplex(e, "End");
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
                  handleChangeTwoComplex(e, "low", "value");
                }}
              />
              <input
                type="text"
                className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="currency"
                onChange={(e) => {
                  handleChangeTwoComplex(e, "low", "currency");
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
                  handleChangeTwoComplex(e, "high", "value");
                }}
              />
              <input
                type="text"
                className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="currency"
                onChange={(e) => {
                  handleChangeTwoComplex(e, "high", "currency");
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
                handleChangeOneComplex(e, "system");
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">code</label>
            <input
              type="text"
              className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                handleChangeOneComplex(e, "code");
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="light text-xs">display</label>
            <input
              type="text"
              className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                handleChangeOneComplex(e, "display");
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
              handleChangeOneComplex(e, "authorString");
            }}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="light text-xs">time</label>
          <input
            type="time"
            className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              handleChangeOneComplex(e, "time");
            }}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="light text-xs">text</label>
          <input
            type="text"
            className="bg-gray-50 w-full p-1 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              handleChangeOneComplex(e, "text");
            }}
          />
        </div>
      </div>
      )

    default:
      return (
        <input
          type="text"
          id={removeDots(props.element.id)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          onChange={(e) => {
            handleChangePrimitive(e);
          }}
        />
      );
  }
};

export default InputFromType;
