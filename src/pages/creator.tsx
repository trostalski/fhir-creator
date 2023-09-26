import React, { useState } from "react";
import Select from "react-select";
import { Modes, resourceOptions } from "../utils/constants";
import "react-tooltip/dist/react-tooltip.css";
import RightSidebar, { BranchIdsCheckboxes } from "@/components/RightSidebar";
import { getBaseProfile } from "@/db/utils";
import ProfileTreeComponent from "../components/profile_tree_input/ProfileTreeComponent";
import ExportModal from "@/components/ExportModal";
import AddResourceButton from "@/components/buttons/AddResourceButton";
import { useStore } from "@/stores/useStore";
import Layout from "@/components/Layout";
import { toastPromise } from "@/toasts";
import { getResourceTypeFromProfile } from "@/utils/utils";

const Creator = () => {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState<boolean>(false);
  const [pathsWithInvalidCardinality, setPathsWithInvalidCardinality] =
    useState<string[]>([]);

  const { setProfileTree, profileTree, profile, setMode } = useStore(
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

  return (
    <Layout>
      <div className="flex flex-col w-full pb-10 pt-4 overflow-scroll gap-2 px-8">
        <div className="flex flex-row items-center gap-2 p-2">
          <Select
            instanceId={"baseprofile-select"}
            className="w-[1000px] mx-auto"
            value={
              profile
                ? resourceOptions.find(
                    (option) =>
                      getResourceTypeFromProfile(profile) === option.value
                  )
                : null
            }
            options={resourceOptions}
            placeholder="Select Base Profile"
            onChange={async (e) => {
              setMode(Modes.CREATE);
              await toastPromise(
                handleSelectBaseProfile(e!.value),
                "loading profile tree...",
                "success!",
                "failed to load profile tree."
              );
            }}
          ></Select>
          <span className="flex-grow" />
          <AddResourceButton
            setPathsWithInvalidCardinality={setPathsWithInvalidCardinality}
          />
        </div>
        <div className="flex flex-col h-full ">
          {!profileTree ? null : (
            <ProfileTreeComponent
              setPathsWithInvalidCardinality={setPathsWithInvalidCardinality}
              pathsWithInvalidCardinality={pathsWithInvalidCardinality}
            />
          )}
        </div>
      </div>
      <RightSidebar>
        <BranchIdsCheckboxes />
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

export default Creator;
