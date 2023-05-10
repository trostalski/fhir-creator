import { useLiveQuery } from "dexie-react-hooks";
import ModalWrapper from "./ModalWrapper";
import { db } from "@/db/db";
import { useEffect, useState } from "react";
import { Resource } from "fhir/r4";
import { checkoutBundle } from "@/db/utils";
import { toastError } from "@/toasts";

interface CheckoutModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckoutModal = (props: CheckoutModalProps) => {
  const resources = useLiveQuery(() => db.resources.toArray());
  const [selectedResources, setSelectedResources] = useState<
    Resource[] | undefined
  >(resources);
  useEffect(() => {
    if (resources) {
      setSelectedResources(resources);
    }
  }, [resources]);
  return (
    <ModalWrapper setShow={props.setIsOpen}>
      <div className="flex flex-col h-96">
        <div>
          {!resources || !selectedResources ? (
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
                {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex bg-gray-100 p-2 text-xs rounded-md hover:bg-gray-200 transition-colors duration-300 ease-in-out pl-"
                  >
                    <span className="w-4/12">{resource.resourceType}</span>
                    <span className="w-4/12">{resource.id}</span>
                    <span className="w-3/12 overflow-hidden">
                      {resource.meta?.lastUpdated}
                    </span>
                    <input
                      type="checkbox"
                      checked={selectedResources!.includes(resource)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedResources((prev) => [...prev!, resource]);
                        } else {
                          setSelectedResources((prev) =>
                            prev!.filter((prevResource) => {
                              return prevResource.id !== resource.id;
                            })
                          );
                        }
                      }}
                      className="w-1/12 rounded-md border-gray-300 border-2 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <span className="flex-grow" />
        <div className="flex flex-row gap-4">
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
              }
              checkoutBundle(selectedResources);
            }}
          >
            Create
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default CheckoutModal;
