import React, { useState } from "react";
import Select from "react-select";
import { resourceOptions } from "../utils/constants";
import Header from "@/components/Header";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { IconContext } from "react-icons/lib";
import "react-tooltip/dist/react-tooltip.css";
import {
  containsSnapshot,
  containsDifferential,
  idIsImportant,
  isFhirBaseDefinition,
  getResourceTypeFromUrl,
  getBaseUrl,
  mergeDifferentialWithSnapshot,
  getBranchIds,
  shouldDisplayNode,
  createJsonFromPathArray,
  formatInputDataForResource,
  getResourceTypeFromProfile,
  getUid,
} from "../utils/utils";
import RightSidebar, { BranchIdsCheckboxes } from "@/components/RightSidebar";
import LeftSidebar, { ResourceIdList } from "@/components/LeftSidebar";
import { addProfile, addResourcPathRepr, addResource } from "@/db/utils";
import { StructureDefinition, ElementDefinition } from "fhir/r4";
import {
  ProfileTree,
  buildTreeFromElementsRecursive,
} from "../utils/buildTree";
import ProfileTreeComponent from "../components/ProfileTreeComponent";
import { tooltipSytles } from "@/utils/styles";
import { InputData } from "@/types";

const index = () => {
  const [profile, setProfile] = useState<StructureDefinition>();
  const [profileTree, setProfileTree] = useState<ProfileTree>([]);
  const [checkedBranchIds, setCheckedBranchIds] = useState<string[]>([]);
  const [branchIds, setBranchIds] = useState<string[]>([]);
  const [resourceType, setResourceType] = useState<string>();
  const [mode, setMode] = useState<"create" | "edit">("create");

  const loadProfile = async (profile: StructureDefinition) => {
    let elements: ElementDefinition[];
    setProfile(profile);
    const resourceType = getResourceTypeFromProfile(profile);
    if (!resourceType) {
      alert("Could not determine resource type from profile");
    } else {
      setResourceType(resourceType);
    }
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
    const branchIds = getBranchIds(tree);
    setProfileTree(tree);
    setBranchIds(branchIds);
    setCheckedBranchIds(branchIds.filter((id) => idIsImportant(id)));
  };

  const addMissingElements = (inputData: InputData[]) => {
    if (!inputData.find((e) => e.path === "resourceType")) {
      inputData.push({
        path: "resourceType",
        value: resourceType!,
      });
    }
    if (!inputData.find((e) => e.path === "profile[0]")) {
      inputData.push({
        path: "profile[0]",
        value: profile?.id!,
      });
    }
    if (!inputData.find((e) => e.path === "id")) {
      inputData.push({
        path: "id",
        value: getUid(),
      });
    }
    return inputData;
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
                    let inputData = profileTree
                      .filter((node) => node.value)
                      .map((node) => ({
                        path: node.path,
                        value: node.value!,
                      }));
                    inputData = formatInputDataForResource(inputData);
                    inputData = addMissingElements(inputData);
                    // const notMet = checkCardinalities(
                    //   formattedInputData,
                    //   profileTree
                    // );
                    // if (notMet.length > 0) {
                    //   alert(
                    //     `The following elements do not meet the cardinalities of the profile: ${notMet.map(
                    //       (e) => JSON.stringify(e)
                    //     )}`
                    //   );
                    //   return;
                    // }
                    const resource = createJsonFromPathArray(inputData);
                    addResource(resource);
                    addResourcPathRepr(inputData);
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
                <div className="flex flex-col gap-2">
                  {!profileTree ? null : (
                    <ProfileTreeComponent
                      setProfileTree={setProfileTree}
                      profileTree={profileTree.filter((node) =>
                        shouldDisplayNode(node, checkedBranchIds)
                      )}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <RightSidebar>
          <BranchIdsCheckboxes
            branchIds={branchIds}
            setCheckedBranchIds={setCheckedBranchIds}
            checkedBranchIds={checkedBranchIds}
          />
        </RightSidebar>
      </main>
      <footer></footer>
    </div>
  );
};

export default index;
