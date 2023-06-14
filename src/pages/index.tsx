import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Modes, resourceOptions } from "../utils/constants";
import Header from "@/components/Header";
import "react-tooltip/dist/react-tooltip.css";
import { idIsImportant } from "../utils/utils";
import RightSidebar, { BranchIdsCheckboxes } from "@/components/RightSidebar";
import LeftSidebar from "@/components/left-sidebar/LeftSidebar";
import { getBaseProfile } from "@/db/utils";
import ProfileTreeComponent from "../components/profile_tree_input/ProfileTreeComponent";
import uniq from "lodash/uniq";
import { getBranchIds } from "@/utils/tree_utils";
import ExportModal from "@/components/ExportModal";
import UploadProfileButton from "@/components/buttons/UploadProfileButton";
import AddResourceButton from "@/components/buttons/AddResourceButton";
import Head from "next/head";
import { useStore } from "@/stores/useStore";

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

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Head>
        <title>FHIR Creator | Create and Analyze your FHIR Data</title>
        <meta
          name="description"
          content="Upload your FHIR data or create Resources from scratch. Analyze your data with the FHIR Creator."
          key="desc"
        />
        <meta property="og:title" content="FHIR Creator" key="title" />
        <meta property="og:url" content="https://fhir-creator.vercel.app/" />
        <meta
          property="og:description"
          content="Upload your FHIR data or create Resources from scratch. Analyze your data with the FHIR Creator."
        />
      </Head>
      <Header />
      <main className="flex flex-row pt-8 h-full">
        <LeftSidebar setCheckoutModalOpen={setCheckoutModalOpen} />
        <div className="p-4 w-full">
          <div className="flex flex-row items-center gap-2 bg-white p-2">
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
            <UploadProfileButton style="topbar" text="Upload Profile" />
            <span className="flex-grow" />
            <AddResourceButton
              setPathsWithInvalidCardinality={setPathsWithInvalidCardinality}
            />
          </div>
          <div className="h-full pt-2 pb-10 overflow-scroll">
            {!profile ? null : (
              <div className="">
                <div className="flex flex-col gap-2 px-8">
                  {!profileTree ? null : (
                    <ProfileTreeComponent
                      setPathsWithInvalidCardinality={
                        setPathsWithInvalidCardinality
                      }
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
