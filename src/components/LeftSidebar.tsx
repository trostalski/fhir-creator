import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdDoneAll } from "react-icons/io";

const LeftSidebar = (props: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {isOpen ? (
        <div className="relative p-2 w-40">
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
