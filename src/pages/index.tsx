import React, { useState } from "react";
import Select from "react-select";
import { Modes, resourceOptions } from "../utils/constants";
import Header from "@/components/Header";
import "react-tooltip/dist/react-tooltip.css";
import {
  containsSnapshot,
  containsDifferential,
  idIsImportant,
  isBaseUrl,
  getResourceTypeFromUrl,
  getBaseUrl,
  getResourceTypeFromProfile,
  getUid,
} from "../utils/utils";
import RightSidebar, { BranchIdsCheckboxes } from "@/components/RightSidebar";
import LeftSidebar from "@/components/left-sidebar/LeftSidebar";
import { getBaseProfile } from "@/db/utils";
import { StructureDefinition } from "fhir/r4";
import { ProfileTree, getProfileTree } from "../utils/buildTree";
import ProfileTreeComponent from "../components/profile_tree_input/ProfileTreeComponent";
import { PathItem } from "@/types";
import { mergeTreeWithDifferential } from "@/utils/mergeDifferential";
import uniq from "lodash/uniq";
import { getBranchIds } from "@/utils/tree_utils";
import { removeNPathPartsFromStart } from "@/utils/path_utils";
import ExportModal from "@/components/CheckoutModal";
import UploadProfileButton from "@/components/buttons/UploadProfileButton";
import AddResourceButton from "@/components/buttons/AddResourceButton";

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

  const loadProfile = async (
    profile: StructureDefinition,
    inputData?: PathItem[]
  ) => {
    setProfile(profile);
    setPathsWithInvalidCardinality([]);
    const resourceType = getResourceTypeFromProfile(profile);
    if (!resourceType) {
      alert("Could not determine resource type from profile");
    } else {
      setResourceType(resourceType);
    }
    let profileTree: ProfileTree = [];
    if (containsSnapshot(profile) && profile.snapshot) {
      // all elements are present
      profileTree = await getProfileTree(profile);
    } else if (containsDifferential(profile) && profile.differential) {
      // only differential is present, needs to be merged with base profile
      const baseUrl = getBaseUrl(profile);
      if (!baseUrl || !isBaseUrl(baseUrl)) {
        alert("No base profile found");
        return [];
      } else {
        const baseResourceType = getResourceTypeFromUrl(baseUrl);
        const baseProfile: StructureDefinition = await fetch(
          `api/profiles?filename=${baseResourceType}`
        ).then((res) => res.json());
        profileTree = await getProfileTree(baseProfile);
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
        ) as PathItem;
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

  console.log("profileTree", profileTree);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <main className="flex flex-row pt-8 h-full">
        <LeftSidebar
          setCheckoutModalOpen={setCheckoutModalOpen}
          handleSelectBaseProfile={handleSelectBaseProfile}
          loadProfile={loadProfile}
          setMode={setMode}
          setProfileTree={setProfileTree}
        />
        <div className="p-4 w-full">
          <div className="flex flex-row items-center gap-2">
            <Select
              instanceId={"baseprofile-select"}
              className="w-1/3"
              options={resourceOptions}
              placeholder="Select Base Profile"
              onChange={(e) => {
                setMode(Modes.CREATE);
                handleSelectBaseProfile(e!.value);
              }}
            ></Select>
            <span className="text-gray-400">or</span>
            <UploadProfileButton
              loadProfile={loadProfile}
              style="topbar"
              text="Upload Profile"
            />
            <span className="flex-grow" />
            <AddResourceButton
              mode={mode}
              profileTree={profileTree}
              setPathsWithInvalidCardinality={setPathsWithInvalidCardinality}
              resourceType={resourceType}
            />
          </div>
          <div className="h-full pt-6 pb-10 overflow-scroll">
            {!profile ? null : (
              <div className="">
                <div className="flex flex-col gap-2 px-8">
                  {!profileTree ? null : (
                    <ProfileTreeComponent
                      mode={mode}
                      resourceType={resourceType}
                      setPathsWithInvalidCardinality={
                        setPathsWithInvalidCardinality
                      }
                      profile={profile}
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
        <ExportModal
          isOpen={checkoutModalOpen}
          setIsOpen={setCheckoutModalOpen}
        />
      )}
    </div>
  );
};

export default Home;
