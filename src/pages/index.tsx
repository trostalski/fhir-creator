import React, { useState } from "react";
import Select from "react-select";
import { resourceOptions } from "@/constants";
import { InputData } from "@/types";
import Header from "@/components/Header";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { Tooltip } from "react-tooltip";
import { IconContext } from "react-icons/lib";
import "react-tooltip/dist/react-tooltip.css";
import {
  containsSnapshot,
  containsDifferential,
  parseMaxString,
  removeDots,
  idIsImportant,
  createJsonFromPathArray,
  getUid,
  isFhirBaseDefinition,
  getResourceTypeFromUrl,
  getBaseUrl,
  mergeDifferentialWithSnapshot,
  formatInputDataForResource,
} from "../utils/utils";
import RightSidebar, { ProfileCheckboxes } from "@/components/RightSidebar";
import LeftSidebar, { ResourceIdList } from "@/components/LeftSidebar";
import InputFromType from "@/components/InputFromType";
import {
  addProfile,
  addResource,
  addResourcPathRepr,
  updateResource,
  updateResourcePathRepr,
} from "@/db/utils";
import { StructureDefinition, ElementDefinition } from "fhir/r4";
import {
  ProfileTree,
  buildTreeFromElementsRecursive,
  containsDot,
} from "../utils/buildTree";
import ProfileTreeComponent from "../components/ProfileTreeComponent";

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
  const [profileElements, setProfileElements] = useState<ElementDefinition[]>();
  const [profileTree, setProfileTree] = useState<ProfileTree>([]);
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [elementTypes, setElementTypes] = useState<ElementType[]>([]);
  const [inputData, setInputData] = React.useState<InputData[]>([]);
  const [mode, setMode] = useState<"create" | "edit">("create");

  const loadProfile = async (profile: StructureDefinition) => {
    let elements: ElementDefinition[];
    setProfile(profile);
    if (containsSnapshot(profile) && profile.snapshot) {
      // all elements are present
      elements = profile.snapshot.element;
    } else if (containsDifferential(profile) && profile.differential) {
      // only differential is present, needs to be merged with base profile
      const baseUrl = getBaseUrl(profile);
      if (!baseUrl || !isFhirBaseDefinition(baseUrl)) {
        return [];
      } else {
        const baseResourceType = getResourceTypeFromUrl(baseUrl);
        const baseProfile: StructureDefinition = await fetch(
          `api/profiles?filename=${baseResourceType}`
        ).then((res) => res.json());
        elements = mergeDifferentialWithSnapshot(baseProfile, profile);
      }
    } else {
      // no snapshot or differential is present
      alert("No snapshot or differential is present in the profile");
      return [];
    }
    const tree = await buildTreeFromElementsRecursive(elements);
    console.log(tree);
    setProfileTree(tree);
    setDefaultProfileStates(elements, profile);
  };

  const setDefaultProfileStates = (
    elements: ElementDefinition[],
    profile: StructureDefinition
  ) => {
    setProfileElements(elements);
    setElementTypes(
      elements.map((element) => {
        if (element.type) {
          return { id: element.id!, type: element.type[0].code as string };
        } else {
          return { id: element.id!, type: "string" as string };
        }
      })
    );
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
      elements.map((element) => element.id!).filter((id) => idIsImportant(id))
    );
  };

  const handleSelectBaseProfile = async (value: string) => {
    const profile: StructureDefinition = await fetch(
      `api/profiles?filename=${value}`
    ).then((res) => res.json());
    loadProfile(profile);
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

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <main className="flex flex-row pt-8 h-full">
        <LeftSidebar>
          <ResourceIdList
            setInputData={setInputData}
            setMode={setMode}
            loadProfile={loadProfile}
            handleSelectBaseProfile={handleSelectBaseProfile}
          />
        </LeftSidebar>
        <div className="w-full p-4">
          <div className="flex flex-row w-full justify-between items-center">
            <Select
              className="w-3/4"
              options={resourceOptions}
              placeholder="Select a profile"
              onChange={(e) => {
                handleSelectBaseProfile(e!.value);
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
                    const formattedInputData =
                      formatInputDataForResource(inputData);
                    const resource =
                      createJsonFromPathArray(formattedInputData);
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
                    const formattedInputData =
                      formatInputDataForResource(inputData);
                    const resource =
                      createJsonFromPathArray(formattedInputData);
                    updateResource(resource);
                    updateResourcePathRepr(inputData);
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
                    {!profileTree ? null : (
                      <ProfileTreeComponent tree={profileTree} />
                    )}
                    {/* {profileElements!
                      .filter(
                        (element) =>
                          containsDot(element.id!) &&
                          checkedIds.includes(element.id!)
                      )
                      .map((element, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-0.5 p-4 rounded-md shadow-md bg-blue-100"
                        >
                          <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2 items-center">
                              <label
                                htmlFor="element-value"
                                className={`block whitespace-nowrap w-48 text-sm font-medium text-gray-900 dark:text-white ${
                                  element.min! > 0
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
                              {parseMaxString(element.max!) > 1 ? (
                                <button>
                                  <GrFormAdd />
                                </button>
                              ) : (
                                <button disabled>
                                  <GrFormAdd style={{ opacity: 0.2 }} />
                                </button>
                              )}
                              <div
                                id={`element-${index}`}
                                data-tooltip-id={`${removeDots(
                                  element.id!
                                )}-tooltip)}`}
                                data-tooltip-content={element.short}
                              >
                                <AiOutlineQuestionCircle />
                              </div>
                              <Tooltip
                                anchorSelect={`#element-${index}`}
                                id={`${removeDots(element.id!)}-tooltip`}
                                place="left"
                                style={tooltipSytles}
                              />
                            </div>
                          </div>
                          <InputFromType
                            element={element}
                            inputData={inputData}
                            setInputData={setInputData}
                            isArray={parseMaxString(element.max!) > 1}
                            resourceType={profile.type as string}
                            type={
                              elementTypes.filter((el) => {
                                return el.id == element.id;
                              })[0].type
                            }
                          />
                        </div>
                      ))} */}
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
