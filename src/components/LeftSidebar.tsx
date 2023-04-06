import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const LeftSidebar = (props: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      {isOpen ? (
        <div className="relative p-2 w-40 bg-gray-50 h-full overflow-scroll">
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
        <div className="relative w-12 bg-gray-50 h-full overflow-scroll">
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="fixed top-14 left-4"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
