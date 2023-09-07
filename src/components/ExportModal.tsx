import { useLiveQuery } from "dexie-react-hooks";
import ModalWrapper from "./ModalWrapper";
import { BundleFolder, db } from "@/db/db";
import { useState } from "react";
import { Bundle, BundleEntry, Resource } from "fhir/r4";
import {
  checkoutBundle,
  checkoutResources,
  createBundleFromFolder,
  exportBundleFolder,
  getResourcesForBundleFolder,
} from "@/db/utils";
import { toastError } from "@/toasts";
import { bundlePoolId } from "@/utils/constants";

interface ExportModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExportModal = (props: ExportModalProps) => {
  const resourcesTab = "Resources";
  const bundlesTab = "Bundles";
  const exportModalTabs = [resourcesTab, bundlesTab];
  const bundleFolders = useLiveQuery(() => db.bundleFolders.toArray());
  const singleResources = useLiveQuery(() =>
    getResourcesForBundleFolder(bundlePoolId)
  );
  const [activeTab, setActiveTab] =
    useState<(typeof exportModalTabs)[number]>(bundlesTab);

  const [bundleOuptut, setBundleOutput] = useState<boolean>(true);

  const [selectedResources, setSelectedResources] = useState<Resource[]>([]);
  const [selectedBundleFolders, setSelectedBundleFolders] = useState<
    BundleFolder[]
  >([]);

  const handleSubmit = async () => {
    if (activeTab === resourcesTab && selectedResources) {
      if (!selectedResources || selectedResources.length === 0) {
        toastError("No resources selected");
        return;
      } else if (!bundleOuptut) {
        checkoutResources(selectedResources);
      } else {
        checkoutBundle(
          selectedResources,
          selectedBundleFolders.map((bundle) => bundle.meta)
        );
      }
    } else if (activeTab === bundlesTab && selectedBundleFolders) {
      console.log(selectedBundleFolders);
      if (!selectedBundleFolders || selectedBundleFolders.length === 0) {
        toastError("No bundles selected");
        return;
      }
      if (bundleOuptut) {
        let bundles: Bundle[] = [];
        for (const folder of selectedBundleFolders) {
          const bundle = await createBundleFromFolder(folder);
          bundles.push(bundle);
        }
        checkoutBundle([], bundles);
      } else {
        for (const folder of selectedBundleFolders) {
          exportBundleFolder(folder);
        }
      }
    }
  };

  return (
    <ModalWrapper setShow={props.setIsOpen}>
      <div className="flex flex-col h-[60vh]">
        <div>
          <div className="flex flex-row gap-2 w-full">
            {exportModalTabs.map((tab) => (
              <button
                key={tab}
                className={`px-2 py-1 w-1/2 rounded-md border  ${
                  activeTab === tab ? "bg-blue-500 text-white" : "text-blue-500"
                } transition hover:bg-blue-400 hover:text-white`}
                onClick={() => {
                  setActiveTab(tab);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col h-full">
          <div className="overflow-scroll">
            <div className="flex flex-col gap-2">
              <div className="flex p-2 rounded-md">
                <span className="w-4/12">Type</span>
                <span className="w-4/12">ID</span>
                <span className="w-3/12">Created At</span>
                <span className="1/12">Select</span>
              </div>
              <div className="flex flex-col gap-2 h-full overflow-scroll">
                {activeTab === bundlesTab && !bundleFolders ? (
                  <span className="text-xs text-gray-500">
                    No bundles found.
                  </span>
                ) : (
                  activeTab === bundlesTab &&
                  bundleFolders!.map((bundle) => (
                    <div
                      key={bundle.id}
                      className="flex bg-gray-100 p-2 text-xs rounded-md hover:bg-gray-200 transition-colors duration-300 ease-in-out cursor-pointer"
                    >
                      <span className="w-4/12">Bundle</span>
                      <span className="w-4/12">{bundle.name}</span>
                      <span className="w-3/12 overflow-hidden">
                        {bundle.createdAt}
                      </span>
                      <input
                        type="checkbox"
                        checked={selectedBundleFolders?.includes(bundle)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBundleFolders((prev) => [
                              ...prev!,
                              bundle,
                            ]);
                          } else {
                            setSelectedBundleFolders((prev) =>
                              prev!.filter((prevResource) => {
                                return prevResource.id !== bundle.id;
                              })
                            );
                          }
                        }}
                        className="mx-auto border-gray-300 border-2 cursor-pointer"
                      />
                    </div>
                  ))
                )}
                {activeTab === resourcesTab && singleResources?.length === 0 ? (
                  <span className="text-xs text-gray-500">
                    No resources found.
                  </span>
                ) : (
                  activeTab === resourcesTab &&
                  singleResources!.map((resource) => (
                    <div
                      key={resource.id}
                      className="flex bg-gray-100 p-2 text-xs rounded-md hover:bg-gray-200 transition-colors duration-300 ease-in-out cursor-pointer"
                    >
                      <span className="w-4/12">{resource.resourceType}</span>
                      <span className="w-4/12">{resource.id}</span>
                      <span className="w-3/12 overflow-hidden">
                        {resource.meta?.lastUpdated}
                      </span>
                      <input
                        type="checkbox"
                        checked={selectedResources?.includes(resource)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedResources((prev) => [
                              ...prev!,
                              resource,
                            ]);
                          } else {
                            setSelectedResources((prev) =>
                              prev!.filter((prevResource) => {
                                return prevResource.id !== resource.id;
                              })
                            );
                          }
                        }}
                        className="mx-auto border-gray-300 border-2 cursor-pointer"
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <span className="flex-grow" />
          <div className="flex flex-row gap-4 items-center">
            <div className="flex items-center gap-4">
              <input
                id="bundle-output-checkbox"
                type="checkbox"
                checked={bundleOuptut}
                className="border-gray-300 border-2 cursor-pointer"
                onChange={(e) => {
                  setBundleOutput(e.target.checked);
                }}
              />
              <label htmlFor="bundle-output-checkbox" className="text-sm">
                Bundle Output
              </label>
            </div>
            <span className="flex-grow" />
            <button
              className="w-24 p-2 text-gray-500 rounded-md transition hover:bg-gray-500 hover:text-white"
              onClick={() => {
                setSelectedResources([]);
                setSelectedBundleFolders([]);
                props.setIsOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              className="w-24 p-2 text-blue-500 rounded-md transition hover:bg-blue-500 hover:text-white"
              onClick={() => {
                handleSubmit();
              }}
            >
              Export
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ExportModal;
