import React, { useRef } from "react";
import useResize from "@/hooks/useResize";
import { BsPersonAdd } from "react-icons/bs";
import { TbTransform } from "react-icons/tb";
import Storage from "./Storage";
import { useRouter } from "next/router";
import { TbDatabase } from "react-icons/tb";

interface LeftSidebarProps {
  setCheckoutModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftSidebar = (props: LeftSidebarProps) => {
  const resizeRef = useRef<HTMLInputElement>(null);
  const minWidth = 10;
  const startWidth = 300;
  const maxWidth = 600;

  const { resizeWidth, startResizing, setResizeWidth } = useResize(
    resizeRef,
    startWidth
  );

  const rightPartIsOpen = !resizeWidth ? false : resizeWidth > minWidth + 5;

  const closeRightPart = () => {
    setResizeWidth(minWidth);
  };
  const router = useRouter();
  console.log("resizeWidth", resizeWidth);

  return (
    <div
      ref={resizeRef}
      className={`flex flex-row relative h-full flex-shrink-0 ${!rightPartIsOpen && "mr-12"}`}
      style={{
        flexBasis: `${resizeWidth}px`,
        minWidth: `${minWidth}px`,
        maxWidth: `${maxWidth}px`,
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      {rightPartIsOpen ? (
        <Storage
          startResizing={startResizing}
          closeRightPart={closeRightPart}
        />
      ) : (
        <div
          className="absolute content-center bg-white left-2 top-4 p-3 rounded-md cursor-pointer shadow-xl hover:border-gray-400 hover:border-2"
          onClick={() => {
            setResizeWidth(startWidth);
          }}
        >
          <TbDatabase size={24} />
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
