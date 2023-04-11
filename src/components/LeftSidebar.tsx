import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdDoneAll } from "react-icons/io";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";
import { InputData } from "@/types";

interface ResourceIdListProps {
  setMode: React.Dispatch<React.SetStateAction<"edit" | "create">>;
  setInputData: React.Dispatch<React.SetStateAction<InputData[]>>;
}

export const ResourceIdList = (props: ResourceIdListProps) => {
  const resources = useLiveQuery(() => db.resourcesPathRepr.toArray());
  return (
    <div className="flex flex-col grow gap-2 p-2 overflow-scroll">
      {resources?.map((resource) => (
        <div className="flex flex-row text-xs gap-2 items-center">
          <button
            className="hover:underline"
            onClick={() => {
              props.setMode("edit");
              props.setInputData(resource.data);
            }}
          >
            {resource.id}
          </button>
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
        <div className="h-full p-2 w-60">
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="flex flex-row items-center w-full bg-inherit h-8"
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
