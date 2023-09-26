import React, { useState } from "react";
import Select from "react-select";
import {
  Modes,
  availableFhirVersions,
  resourceTypeList,
} from "../utils/constants";
import "react-tooltip/dist/react-tooltip.css";
import { getBaseProfile } from "@/db/utils";
import ProfileTreeComponent from "../components/profile_tree_input/ProfileTreeComponent";
import ExportModal from "@/components/ExportModal";
import { useStore } from "@/stores/useStore";
import Layout from "@/components/Layout";
import { toastPromise } from "@/toasts";
import { getResourceTypeFromProfile } from "@/utils/utils";
import { reactSelectStyles } from "@/styles/reactSelectStyles";

const Home = () => {
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

  const resourceOptions = resourceTypeList.map((resourceType) => {
    return {
      value: resourceType,
      label: resourceType,
    };
  });

  const handleSelectBaseProfile = async (value: string) => {
    const profile = await getBaseProfile(value);
    setProfileTree(profile);
  };

  return (
    <Layout>
      <div className="flex flex-col h-full w-full pt-2 overflow-x-scroll overflow-y-hidden pl-8 pr-32 gap-2 ">
        <div className="flex flex-row gap-2 items-center">
          <Select
            instanceId={"baseprofile-select"}
            className="w-full mx-auto"
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
          />
          <select className="h-10 rounded-md border-gray-400">
            {availableFhirVersions.map((version) => (
              <option key={version} value={version}>
                {version}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col h-full">
          {!profileTree ? null : (
            <ProfileTreeComponent
              setPathsWithInvalidCardinality={setPathsWithInvalidCardinality}
              pathsWithInvalidCardinality={pathsWithInvalidCardinality}
            />
          )}
        </div>
      </div>
      {/* <RightSidebar>
        <BranchIdsCheckboxes />
      </RightSidebar> */}
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
