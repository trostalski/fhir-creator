import React, { useState } from "react";
import Select from "react-select";
import { Modes, resourceOptions } from "../utils/constants";
import Header from "@/components/Header";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {
  containsSnapshot,
  containsDifferential,
  idIsImportant,
  isFhirBaseDefinition,
  getResourceTypeFromUrl,
  getBaseUrl,
  createJsonFromPathArray,
  formatInputDataForResource,
  getResourceTypeFromProfile,
  getUid,
  extractInputDataFromProfileTree,
  checkCardinalities,
} from "../utils/utils";
import RightSidebar, { BranchIdsCheckboxes } from "@/components/RightSidebar";
import LeftSidebar, { ResourceIdList } from "@/components/LeftSidebar";
import {
  addProfile,
  addResourcPathRepr,
  addResource,
  getBaseProfile,
  updateResource,
  updateResourcePathRepr,
} from "@/db/utils";
import { StructureDefinition, ElementDefinition } from "fhir/r4";
import {
  ProfileTree,
  buildTreeFromElementsRecursive,
} from "../utils/buildTree";
import ProfileTreeComponent from "../components/ProfileTreeComponent";
import { tooltipStyles } from "@/utils/styles";
import { InputData } from "@/types";
import { mergeTreeWithDifferential } from "@/utils/mergeDifferential";
import uniq from "lodash/uniq";
import { getBranchIds } from "@/utils/tree_utils";
import { removeNPathPartsFromStart } from "@/utils/path_utils";
import { toastError, toastSuccess } from "@/toasts";
import CheckoutModal from "@/components/CheckoutModal";

const Home = () => {
  const [profile, setProfile] = useState<StructureDefinition>();
  const [profileTree, setProfileTree] = useState<ProfileTree>([]);
  const [checkedBranchIds, setCheckedBranchIds] = useState<string[]>([]);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState<boolean>(false);
  const [branchIds, setBranchIds] = useState<string[]>([]);
  const [resourceType, setResourceType] = useState<string>();
  const [pathsWithInvalidCardinality, setPathsWithInvalidCardinality] =
    useState<string[]>([]);
  const [mode, setMode] = useState<Modes>(Modes.CREATE);

  const addResourceTypeToInputData = (inputData: InputData[]) => {
    return [
      ...inputData,
      {
        path: "resourceType",
        value: resourceType!,
      },
    ];
  };

  const loadProfile = async (
    profile: StructureDefinition,
    inputData?: InputData[]
  ) => {
    let baseElements: ElementDefinition[];
    setProfile(profile);
    const resourceType = getResourceTypeFromProfile(profile);
    if (!resourceType) {
      alert("Could not determine resource type from profile");
    } else {
      setResourceType(resourceType);
    }
    let profileTree: ProfileTree = [];
    if (containsSnapshot(profile) && profile.snapshot) {
      // all elements are present
      baseElements = profile.snapshot.element;
      if (isFhirBaseDefinition(profile.url)) {
        const profileTreeModule = await import(
          `../fhir/profiletrees/${getResourceTypeFromUrl(profile.url)}`
        );
        profileTree = profileTreeModule.default;
        console.log(profileTree);
      } else {
        profileTree = await buildTreeFromElementsRecursive(baseElements);
      }
    } else if (containsDifferential(profile) && profile.differential) {
      // only differential is present, needs to be merged with base profile
      const baseUrl = getBaseUrl(profile);
      if (!baseUrl || !isFhirBaseDefinition(baseUrl)) {
        alert("No base profile found");
        return [];
      } else {
        const baseResourceType = getResourceTypeFromUrl(baseUrl);
        const baseProfile: StructureDefinition = await fetch(
          `api/profiles?filename=${baseResourceType}`
        ).then((res) => res.json());
        baseElements = baseProfile.snapshot!.element;
        profileTree = await buildTreeFromElementsRecursive(baseElements);
        profileTree = await mergeTreeWithDifferential(
          profileTree,
          profile.differential.element
        );
      }
    } else {
      // no snapshot or differential is present
      alert("No snapshot or differential is present in the profile");
      return [];
    }
    if (inputData) {
      profileTree = profileTree.map((n) => {
        const valueDataForNode = inputData.find(
          (e) => e.path === removeNPathPartsFromStart(n.dataPath, 1)
        ) as InputData;
        if (valueDataForNode) {
          n.value = valueDataForNode.value;
        }
        return n;
      });
    } else {
      profileTree = profileTree = profileTree.map((node) => {
        const path = removeNPathPartsFromStart(node.dataPath, 1);
        if (path === "id") {
          node.value = getUid();
        } else if (path === "meta.profile[0]") {
          node.value = profile?.url!;
        } else if (path === "meta.lastUpdated") {
          node.value = new Date().toISOString();
        }
        return node;
      });
    }
    const branchIds = uniq(getBranchIds(profileTree));
    setProfileTree(profileTree);
    setBranchIds(branchIds);
    setCheckedBranchIds(branchIds.filter((id) => idIsImportant(id)));
  };

  const handleSelectBaseProfile = async (value: string) => {
    const profile = await getBaseProfile(value);
    loadProfile(profile);
  };

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numFiles = e.target.files?.length;
    if (e.target.files && numFiles) {
      for (let i = 0; i < numFiles; i++) {
        const file = e.target.files[i];
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target) {
            const profile = JSON.parse(e.target.result as string);
            if (numFiles == 1) {
              loadProfile(profile);
            }
            addProfile(profile);
          }
        };
        if (file) {
          reader.readAsText(file);
        }
      }
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <main className="flex flex-row pt-8 h-full">
        <LeftSidebar setCheckoutModalOpen={setCheckoutModalOpen}>
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
              instanceId={"baseprofile-select"}
              className="w-3/4"
              options={resourceOptions}
              placeholder="Select a profile"
              onChange={(e) => {
                setMode(Modes.CREATE);
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
                  multiple
                  onChange={(e) => handleProfileUpload(e)}
                />
                Load Profile
              </label>
              {mode == Modes.CREATE && (
                <button
                  className="bg-green-600 max-h-8 hover:bg-green-800 text-white text-xxs font-bold py-2 px-4 rounded"
                  onClick={() => {
                    if (profileTree.length === 0) {
                      return;
                    }
                    setPathsWithInvalidCardinality([]);
                    const inputData =
                      extractInputDataFromProfileTree(profileTree);
                    const checkCardinalityResponse = checkCardinalities(
                      profileTree,
                      inputData
                    );
                    if (!checkCardinalityResponse.isValid) {
                      toastError(
                        `Cardinalities error: ${checkCardinalityResponse.pathsWithInvalidCardinality
                          .map((p) => removeNPathPartsFromStart(p, 1))
                          .join(", ")}`
                      );
                      setPathsWithInvalidCardinality(
                        checkCardinalityResponse.pathsWithInvalidCardinality
                      );
                      return;
                    }
                    let formattedInputData =
                      formatInputDataForResource(inputData);
                    formattedInputData =
                      addResourceTypeToInputData(formattedInputData);
                    const resource =
                      createJsonFromPathArray(formattedInputData);
                    addResource(resource);
                    addResourcPathRepr(formattedInputData);
                    toastSuccess("Resource added");
                  }}
                >
                  Add Resource
                </button>
              )}
              {mode == Modes.EDIT && (
                <button
                  className="bg-green-600 max-h-8 hover:bg-green-800 text-white text-xs font-bold py-2 px-4 rounded"
                  onClick={() => {
                    let inputData =
                      extractInputDataFromProfileTree(profileTree);
                    inputData = formatInputDataForResource(inputData);
                    const resource = createJsonFromPathArray(inputData);
                    updateResource(resource);
                    updateResourcePathRepr(inputData);
                    toastSuccess("Resource updated");
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
                    style={tooltipStyles}
                  />
                </div>
                <div className="flex flex-col gap-2 px-8">
                  {!profileTree ? null : (
                    <ProfileTreeComponent
                      setProfileTree={setProfileTree}
                      profileTree={profileTree}
                      checkedBranchIds={checkedBranchIds}
                      pathsWithInvalidCardinality={pathsWithInvalidCardinality}
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
      {checkoutModalOpen && (
        <CheckoutModal
          isOpen={checkoutModalOpen}
          setIsOpen={setCheckoutModalOpen}
        />
      )}
    </div>
  );
};

export default Home;
