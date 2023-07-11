import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Modes, resourceOptions } from "../utils/constants";
import "react-tooltip/dist/react-tooltip.css";
import { idIsImportant } from "../utils/utils";
import RightSidebar, { BranchIdsCheckboxes } from "@/components/RightSidebar";
import { getBaseProfile } from "@/db/utils";
import ProfileTreeComponent from "../components/profile_tree_input/ProfileTreeComponent";
import uniq from "lodash/uniq";
import { getBranchIds } from "@/utils/tree_utils";
import ExportModal from "@/components/ExportModal";
import UploadProfileButton from "@/components/buttons/UploadProfileButton";
import AddResourceButton from "@/components/buttons/AddResourceButton";
import { useStore } from "@/stores/useStore";
import Layout from "@/components/Layout";

const Home = () => {
  const [checkedBranchIds, setCheckedBranchIds] = useState<string[]>([]);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState<boolean>(false);
  const [branchIds, setBranchIds] = useState<string[]>([]);
  const [pathsWithInvalidCardinality, setPathsWithInvalidCardinality] =
    useState<string[]>([]);

  const { setProfileTree, profileTree, profile, mode, setMode } = useStore(
    (state) => {
      return {
        setProfileTree: state.setProfileTree,
        profileTree: state.activeProfileTree,
        profile: state.activeProfile,
        mode: state.mode,
        setMode: state.setMode,
      };
    }
  );

  const handleSelectBaseProfile = async (value: string) => {
    const profile = await getBaseProfile(value);
    setProfileTree(profile);
  };

  useEffect(() => {
    if (profileTree) {
      const branchIds = uniq(getBranchIds(profileTree));
      setBranchIds(branchIds);
      setCheckedBranchIds(branchIds.filter((id) => idIsImportant(id)));
    }
  }, [profileTree]);

  console.log("profile tree: ", profileTree);

  return (
    <Layout>
      <div className="flex flex-col w-full pb-10 pt-4 overflow-scroll gap-2 px-8">
        <div className="flex flex-row items-center gap-2 bg-white p-2">
          <Select
            instanceId={"baseprofile-select"}
            className="w-96"
            options={resourceOptions}
            placeholder="Select Base Profile"
            onChange={(e) => {
              setMode(Modes.CREATE);
              handleSelectBaseProfile(e!.value);
            }}
          ></Select>
          <span className="text-gray-400">or</span>
          <UploadProfileButton style="topbar" text="Upload Profile" />
          <span className="flex-grow" />
          <AddResourceButton
            setPathsWithInvalidCardinality={setPathsWithInvalidCardinality}
          />
        </div>
        <div className="flex flex-col h-full ">
          {!profileTree ? null : (
            <ProfileTreeComponent
              setPathsWithInvalidCardinality={setPathsWithInvalidCardinality}
              checkedBranchIds={checkedBranchIds}
              pathsWithInvalidCardinality={pathsWithInvalidCardinality}
            />
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
      {checkoutModalOpen && (
        <ExportModal
          isOpen={checkoutModalOpen}
          setIsOpen={setCheckoutModalOpen}
        />
      )}
    </Layout>
  );
};

export default Home;
