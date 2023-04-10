import React from "react";
import Select from "react-select";
import { resourceOptions } from "@/constants";
import { Elements, StructureDefinition } from "@/types";
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
} from "./utils";
import RightSidebar, { ProfileCheckboxes } from "@/components/RightSidebar";
import LeftSidebar, { ResourceIdList } from "@/components/LeftSidebar";
import InputFromType from "@/components/InputFromType";
import useFhirResources from "@/hooks/useFhirResources";

const tooltipSytles = {
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
  const [profile, setProfile] = React.useState<StructureDefinition>();
  const [profileElements, setProfileElements] = React.useState<Elements>();
  const [checkedIds, setCheckedIds] = React.useState<string[]>([]);
  const [elementTypes, setElementTypes] = React.useState<ElementType[]>([]);

  const [inputData, setInputData] = React.useState<
    { path: string; value: string }[]
  >([]);

  const { addResources } = useFhirResources();

  const handleSelectResourceType = (value: string) => {
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
        setInputData([
          ...inputData,
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
      }
    );
  };

  console.log("input data: ", inputData);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <main className="flex flex-row pt-8 h-full w-full">
        <LeftSidebar>
          <ResourceIdList />
        </LeftSidebar>
        <div className="grow p-4">
          <div className="flex flex-row w-full justify-between items-center">
            <Select
              className="w-3/4"
              options={resourceOptions}
              onChange={(e) => {
                handleSelectResourceType(e!.value);
              }}
            ></Select>
            <div className="flex flex-row gap-4">
              <button className="bg-blue-500 max-h-8 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded">
                <input type="file" hidden />
                Load Profile
              </button>
              <button
                className="bg-green-600 max-h-8 hover:bg-green-800 text-white text-xs font-bold py-2 px-4 rounded"
                onClick={() => {
                  const resource = createJsonFromPathArray(inputData);
                  console.log("resource: ", resource);
                  addResources([resource]);
                }}
              >
                Add Resource
              </button>
            </div>
          </div>
          <div className="h-full pb-10 overflow-scroll">
            {!profile ? null : (
              <div className="">
                <div className="flex flex-row gap-4 items-center">
                  <h3 className="text-xl font-extralight p-4">
                    {profile.name}
                  </h3>
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
                      .filter(
                        (element) =>
                          !element.type
                            ?.map((type) => type.code)
                            .includes("BackboneElement")
                      )
                      .map((element) => (
                        <div
                          key={element.id}
                          className="flex flex-col gap-0.5 p-4 rounded-md shadow-md bg-blue-100"
                        >
                          <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2 items-center">
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
