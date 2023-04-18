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
  shouldDisplayNode,
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
import { checkCardinalities } from "../utils/utils";

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
  const [profileTree, setProfileTree] = useState<ProfileTree>([]);
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [ids, setIds] = useState<string[]>([]);
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
    setIds(elements.map((e) => e.id!));
    setProfileTree(tree);
    console.log("tree: ", tree);
    setCheckedIds(elements.map((e) => e.id!).filter((e) => idIsImportant(e)));
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
            setProfileTree={setProfileTree}
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
                    if (profileTree.length === 0) {
                      return;
                    }
                    // const formattedInputData =
                    //   formatInputDataForResource(inputData);
                    // const notMet = checkCardinalities(
                    //   formattedInputData,
                    //   profileTree
                    // );
                    // if (notMet.length > 0) {
                    //   alert(
                    //     `The following elements do not meet the cardinalities of the profile: ${notMet.join()}`
                    //   );
                    //   return;
                    // }
                    // const resource =
                    //   createJsonFromPathArray(formattedInputData);
                    // addResource(resource);
                    // addResourcPathRepr(inputData);
                  }}
                >
                  Add Resource
                </button>
              )}
              {/* {mode == "edit" && (
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
              )} */}
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
                      <ProfileTreeComponent
                        setProfileTree={setProfileTree}
                        profileTree={profileTree}
                      />
                    )}
                  </div>
                </IconContext.Provider>
              </div>
            )}
          </div>
        </div>
        <RightSidebar>
          <ProfileCheckboxes
            ids={ids}
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
