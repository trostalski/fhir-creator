import React from "react";
import Select from "react-select";
import { resourceOptions } from "@/constants";
import { Elements, StructureDefinition, Element } from "@/types";
import Header from "@/components/Header";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { Tooltip } from "react-tooltip";
import { IconContext } from "react-icons/lib";
import "react-tooltip/dist/react-tooltip.css";
import {
  containsSnapshot,
  containsDifferential,
  containsDot,
  parseMaxString,
  removeDots,
  idIsImportant,
} from "./utils";
import RightSidebar, { ProfileCheckboxes } from "@/components/RightSidebar";
import LeftSidebar from "@/components/LeftSidebar";

const tooltipSytles = {
  backgroundColor: "black",
  opacity: 0.8,
  fontSize: "12px",
  color: "white",
  borderRadius: "5px",
  padding: "5px",
  width: "300px",
};

const inputFromType = (
  element: Element,
  inputData: {
    id: string;
    value: string;
  }[],
  setInputData: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        value: string;
      }[]
    >
  >,
  type?: string
) => {
  switch (type) {
    case "string":
      return <input type="text" className="w-full" />;
    default:
      return (
        <input
          type="text"
          id={removeDots(element.id)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          onChange={(e) => {
            setInputData([
              ...inputData,
              { id: element.id, value: e.target.value },
            ]);
          }}
        />
      );
  }
};

type ElementType = {
  id: string;
  type: string;
};

const index = () => {
  const [selectedResource, setSelectedResource] =
    React.useState<string>("Patient");
  const [profile, setProfile] = React.useState<StructureDefinition>();
  const [profileElements, setProfileElements] = React.useState<Elements>();
  const [checkedIds, setCheckedIds] = React.useState<string[]>([]);
  const [elementTypes, setElementTypes] = React.useState<ElementType[]>([]);

  const [inputData, setInputData] = React.useState<
    { id: string; value: string }[]
  >([]);

  const handleSelectResourceType = (value: string) => {
    setSelectedResource(value);
    let elements: Elements;
    import(`../data/profiles/${value}_profile.json`).then(
      (profile: StructureDefinition) => {
        setProfile(profile);
        if (containsSnapshot(profile) && profile.snapshot) {
          elements = profile.snapshot;
        } else if (containsDifferential(profile) && profile.differential) {
          elements = profile.differential;
        } else {
          elements = { element: [] };
        }
        setElementTypes(
          elements.element.map((element) => {
            if (element.type) {
              return { id: element.id, type: element.type[0].code };
            } else {
              return { id: element.id, type: "string" };
            }
          })
        );
        setProfileElements(elements);
        setCheckedIds(
          elements.element
            .map((element) => element.id)
            .filter((id) => idIsImportant(id))
        );
      }
    );
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <main className="flex flex-row pt-8 h-full w-full">
        <LeftSidebar>
          <></>
        </LeftSidebar>
        <div className="grow p-4">
          <div className="flex flex-row w-full justify-between items-center">
            <Select
              className="w-1/2"
              options={resourceOptions}
              onChange={(e) => {
                handleSelectResourceType(e.value);
              }}
            ></Select>
            <div className="flex flex-row gap-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded">
                Upload Profile
              </button>
              <button className="bg-green-600 hover:bg-green-800 text-white text-xs font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </div>
          <div className="h-full pb-10 overflow-scroll">
            {!profile ? null : (
              <div>
                <div className="flex flex-row gap-4 items-center">
                  <h3 className="text-xl font-extralight">{profile.name}</h3>
                  <div
                    id="description-anchor"
                    data-tooltip-id="description-tooltip"
                    data-tooltip-content={profile.description}
                    className="relative"
                  >
                    <AiOutlineQuestionCircle data-too size={20} />
                  </div>
                  <Tooltip
                    anchorSelect="#description-anchor"
                    id="description-tooltip"
                    place="right"
                    style={tooltipSytles}
                  />
                </div>
                <IconContext.Provider value={{ color: "gray", size: "16px" }}>
                  <div className="">
                    {profileElements!.element
                      .filter(
                        (element) =>
                          containsDot(element.id) &&
                          checkedIds.includes(element.id)
                      )
                      .map((element) => (
                        <div
                          key={element.id}
                          className="flex flex-col gap-1 p-2"
                        >
                          <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-4 items-center">
                              <label
                                htmlFor="element-value"
                                className={`block w-48 text-sm font-medium text-gray-900 dark:text-white ${
                                  element.min > 0
                                    ? "after:text-red-600 after:content-['*']"
                                    : ""
                                }`}
                              >
                                {element.id}
                              </label>
                              <select
                                id="countries"
                                className="bg-gray-50 py-1 px-4 border w-56 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                {element.type ? (
                                  element.type.map((type) => (
                                    <option value={type.code}>
                                      {type.code}
                                    </option>
                                  ))
                                ) : (
                                  <option value="string">string</option>
                                )}
                              </select>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                              {parseMaxString(element.max) > 1 ? (
                                <button>
                                  <GrFormAdd />
                                </button>
                              ) : null}
                              <div
                                id={`${removeDots(element.id)}-anchor`}
                                data-tooltip-id={`${removeDots(
                                  element.id
                                )}-tooltip)}`}
                                data-tooltip-content={element.short}
                              >
                                <AiOutlineQuestionCircle />
                              </div>
                              <Tooltip
                                anchorSelect={`#${removeDots(
                                  element.id
                                )}-anchor`}
                                id={`${removeDots(element.id)}-tooltip`}
                                place="left"
                                style={tooltipSytles}
                              />
                            </div>
                          </div>
                          {inputFromType(
                            element,
                            inputData,
                            setInputData,
                            elementTypes.map((el) => {
                              if (el.id === element.id) {
                                return el.type;
                              }
                            })[0]
                          )}
                        </div>
                      ))}
                  </div>
                </IconContext.Provider>
              </div>
            )}
          </div>
        </div>
        <RightSidebar>
          <ProfileCheckboxes
            profileElements={profileElements!}
            setCheckedIds={setCheckedIds}
            checkedIds={checkedIds}
          />
        </RightSidebar>
      </main>
      <footer></footer>
    </div>
  );
};

export default index;
