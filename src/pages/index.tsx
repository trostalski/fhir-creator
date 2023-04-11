import React, { useEffect, useState } from "react";
import Select from "react-select";
import { resourceOptions } from "@/constants";
import { Elements, StructureDefinition, InputData } from "@/types";
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
  createJsonFromPathArray,
  getUid,
  elementContainsValidType,
} from "./utils";
import RightSidebar, { ProfileCheckboxes } from "@/components/RightSidebar";
import LeftSidebar, { ResourceIdList } from "@/components/LeftSidebar";
import InputFromType from "@/components/InputFromType";
import { db, FhirResource } from "@/db";

const tooltipSytles = {
  zIndex: 1000,
  backgroundColor: "black",
  opacity: 0.8,
  fontSize: "12px",
  color: "white",
  borderRadius: "5px",
  padding: "5px",
  width: "300px",
};

type ElementType = {
  id: string;
  type: string;
};

const index = () => {
  const [profile, setProfile] = useState<StructureDefinition>();
  const [profileElements, setProfileElements] = useState<Elements>();
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [elementTypes, setElementTypes] = useState<ElementType[]>([]);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [inputData, setInputData] = React.useState<InputData[]>([]);

  async function addResource(resource: FhirResource) {
    try {
      await db.resources.add(resource);
    } catch (error) {
      console.log(`Failed to add resource`);
    }
  }

  async function addProfile(profile: StructureDefinition) {
    try {
      await db.profiles.add(profile);
    } catch (error) {
      console.log(`Failed to add profile`);
    }
  }

  async function addResourcPathRepr(inputData: InputData[]) {
    try {
      const id = inputData.find((data) => data.path === "id")?.value as string;
      await db.resourcesPathRepr.add({
        id: id,
        data: inputData,
      });
    } catch (error) {
      console.log(`Failed to add path representation of resource`);
    }
  }

  const loadProfile = (profile: StructureDefinition) => {
    let elements: Elements;
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
    setInputData([
      ...inputData,
      { path: "meta.profile[0]", value: profile.url as string },
      {
        path: "resourceType",
        value: profile.type as string,
      },
      {
        path: "id",
        value: (profile.type as string) + "/" + getUid(),
      },
    ]);
    setCheckedIds(
      elements.element
        .map((element) => element.id)
        .filter((id) => idIsImportant(id))
    );
  };

  const handleSelectProfile = (value: string) => {
    import(`../data/base-profiles/${value}_profile.json`).then(
      (profile: StructureDefinition) => loadProfile(profile)
    );
  };

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const profile = JSON.parse(e.target.result as string);
          loadProfile(profile);
          addProfile(profile);
        }
      };
      reader.readAsText(file);
    }
  };

  console.log("inputdata: ", inputData);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <main className="flex flex-row pt-8 h-full w-full">
        <LeftSidebar>
          <ResourceIdList
            setInputData={setInputData}
            setMode={setMode}
            loadProfile={loadProfile}
          />
        </LeftSidebar>
        <div className="grow p-4">
          <div className="flex flex-row w-full justify-between items-center">
            <Select
              className="w-3/4"
              options={resourceOptions}
              onChange={(e) => {
                handleSelectProfile(e!.value);
              }}
            ></Select>
            <div className="flex flex-row gap-2">
              <label
                htmlFor="profile-upload"
                className="bg-blue-500 max-h-8 hover:bg-blue-700 text-white text-xxs font-bold py-2 px-4 rounded hover:cursor-pointer"
              >
                <input
                  id="profile-upload"
                  type="file"
                  hidden
                  onChange={(e) => handleProfileUpload(e)}
                />
                Load Profile
              </label>
              {mode == "create" && (
                <button
                  className="bg-green-600 max-h-8 hover:bg-green-800 text-white text-xxs font-bold py-2 px-4 rounded"
                  onClick={() => {
                    if (inputData.length === 0) {
                      return;
                    }
                    const resource = createJsonFromPathArray(inputData);
                    addResource(resource);
                    addResourcPathRepr(inputData);
                  }}
                >
                  Add Resource
                </button>
              )}
              {mode == "edit" && (
                <button
                  className="bg-green-600 max-h-8 hover:bg-green-800 text-white text-xs font-bold py-2 px-4 rounded"
                  onClick={() => {
                    const resource = createJsonFromPathArray(inputData);
                  }}
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>
          <div className="h-full pb-10 overflow-scroll">
            {!profile ? null : (
              <div className="">
                <div className="flex flex-row gap-4 items-center">
                  <h3 className="font-extralight py-4">{profile.url}</h3>
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
                  <div className="flex flex-col gap-2">
                    {profileElements!.element
                      .filter(
                        (element) =>
                          containsDot(element.id) &&
                          checkedIds.includes(element.id)
                      )
                      .filter((element) => elementContainsValidType(element))
                      .map((element) => (
                        <div
                          key={element.id}
                          className="flex flex-col gap-0.5 p-4 rounded-md shadow-md bg-blue-100"
                        >
                          <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2 items-center">
                              <label
                                htmlFor="element-value"
                                className={`block whitespace-nowrap w-48 text-sm font-medium text-gray-900 dark:text-white ${
                                  element.min > 0
                                    ? "after:text-red-600 after:content-['*']"
                                    : ""
                                }`}
                              >
                                {element.id}
                              </label>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                              <select
                                id="element-type"
                                placeholder="Type"
                                className="bg-white py-0.5 px-4 border w-40 border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => {
                                  setElementTypes(
                                    elementTypes.map((type) => {
                                      if (type.id === element.id) {
                                        return {
                                          id: type.id,
                                          type: e.target.value,
                                        };
                                      } else {
                                        return type;
                                      }
                                    })
                                  );
                                }}
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
                              {parseMaxString(element.max) > 1 ? (
                                <button>
                                  <GrFormAdd />
                                </button>
                              ) : (
                                <button disabled>
                                  <GrFormAdd style={{ opacity: 0.2 }} />
                                </button>
                              )}
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
                          <InputFromType
                            element={element}
                            inputData={inputData}
                            setInputData={setInputData}
                            isArray={parseMaxString(element.max) > 1}
                            resourceType={profile.type as string}
                            type={
                              elementTypes.filter((el) => {
                                return el.id == element.id;
                              })[0].type
                            }
                          />
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
