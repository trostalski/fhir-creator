import { useLiveQuery } from "dexie-react-hooks";
import ModalWrapper from "./ModalWrapper";
import { db } from "@/db/db";
import { useEffect, useState } from "react";
import { Bundle, Resource } from "fhir/r4";
import { checkoutBundle, checkoutResources } from "@/db/utils";
import { toastError } from "@/toasts";

interface ExportModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExportModal = (props: ExportModalProps) => {
  const resources = useLiveQuery(() => db.resources.toArray());
  const bundles = useLiveQuery(() => db.bundles.toArray());
  const [bundleOuptut, setBundleOutput] = useState<boolean>(true);
  const [bundleIndividually, setBundleIndividually] = useState<boolean>(false);
  const [selectedResources, setSelectedResources] = useState<Resource[]>(
    resources || []
  );
  const [selectedBundles, setSelectedBundles] = useState<Bundle[]>(
    bundles || []
  );
  useEffect(() => {
    if (resources) {
      setSelectedResources(resources);
    }
  }, [resources]);
  return (
    <ModalWrapper setShow={props.setIsOpen}>
      <div className="flex flex-col h-96">
        <div>
          {!resources && !bundles ? (
            <span>No resources added</span>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex p-2 rounded-md">
                <span className="w-4/12">Resource Type</span>
                <span className="w-4/12">Resource ID</span>
                <span className="w-3/12">Created At</span>
                <span className="1/12">Select</span>
              </div>
              <div className="flex flex-col gap-2 h-full overflow-scroll">
                {bundles &&
                  bundles.map((bundle) => (
                    <div
                      key={bundle.id}
                      className="flex bg-gray-100 p-2 text-xs rounded-md hover:bg-gray-200 transition-colors duration-300 ease-in-out cursor-pointer"
                    >
                      <span className="w-4/12">{bundle.resourceType}</span>
                      <span className="w-4/12">{bundle.id}</span>
                      <span className="w-3/12 overflow-hidden">
                        {bundle.meta?.lastUpdated}
                      </span>
                      <input
                        type="checkbox"
                        checked={selectedBundles?.includes(bundle)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBundles((prev) => [...prev!, bundle]);
                          } else {
                            setSelectedBundles((prev) =>
                              prev!.filter((prevResource) => {
                                return prevResource.id !== bundle.id;
                              })
                            );
                          }
                        }}
                        className="mx-auto border-gray-300 border-2 cursor-pointer"
                      />
                    </div>
                  ))}
                {resources &&
                  resources.map((resource) => (
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
                  ))}
              </div>
            </div>
          )}
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
            {bundleOuptut &&
            <>
            {/* might need some rework for bundle checkout */}
              <input
                id="bundle-individually-checkbox"
                type="checkbox"
                checked={bundleIndividually}
                className="border-gray-300 border-2 cursor-pointer"
                onChange={(e) => {
                  setBundleIndividually(e.target.checked);
                }}
                />
              <label htmlFor="bundle-individually-checkbox" className="text-sm">
                Bundle Individually
              </label>
            </>
            }
          </div>
          <span className="flex-grow" />
          <button
            className="w-24 p-2 text-gray-500 rounded-md"
            onClick={() => {
              props.setIsOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            className="w-24 p-2 text-blue-500 rounded-md"
            onClick={() => {
              if (!selectedResources || selectedResources.length === 0) {
                toastError("No resources selected");
                return;
              } else if(!bundleOuptut) {
                checkoutResources(selectedResources)
              } else if(bundleIndividually) {
                selectedResources.forEach( resource => {
                  checkoutBundle([resource], selectedBundles)
                })
              } else {
                checkoutBundle(selectedResources, selectedBundles);
              }
            }}
          >
            Export
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ExportModal;
