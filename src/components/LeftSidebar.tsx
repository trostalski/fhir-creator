import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdDoneAll } from "react-icons/io";
import useFhirResources, { FhirResource } from "@/hooks/useFhirResources";

export const ResourceIdList = () => {
  const [resources, setResources] = useState<FhirResource[]>([]);
  const { getResources } = useFhirResources();
  let resourceIds: string[] = [];

  useEffect(() => {
    console.log("getting resources");
    getResources((resources) => {
      resourceIds = resources.map((resource) => resource.id);
      setResources(resources);
    });
  }, []);

  console.log("resourceIds: ", resourceIds);
  console.log("resources: ", resources);
  return (
    <div className="flex flex-col h-full gap-2 p-2 overflow-scroll">
      {!resources
        ? null
        : resources.map((resource) => (
            <div className="flex flex-row text-xs gap-2 items-center">
              <span>{resource.id}</span>
            </div>
          ))}
    </div>
  );
};

const LeftSidebar = (props: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="flex flex-col h-full bg-gray-50 shadow-md">
      {isOpen ? (
        <div className="relative h-full p-2 w-60">
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="flex flex-row items-center sticky top-0 w-full bg-inherit h-8"
          >
            <span className="grow" />
            <RxHamburgerMenu />
          </button>
          {props.children}
        </div>
      ) : (
        <div className="relative w-12">
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="fixed top-12 left-4"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      )}
      <div className="grow"></div>
      <button className="w-full bg-blue-800 p-2">
        <IoMdDoneAll
          size={40}
          className="mx-auto"
          style={{
            color: "white",
            borderRadius: "15%",
            padding: "5px",
          }}
        />
      </button>
    </div>
  );
};

export default LeftSidebar;
