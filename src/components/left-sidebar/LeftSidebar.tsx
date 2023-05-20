import React, { useRef } from "react";
import { StructureDefinition } from "fhir/r4";
import { ProfileTree } from "@/utils/buildTree";
import { Modes } from "@/utils/constants";
import { PathItem } from "@/types";
import useResize from "@/hooks/useResize";
import { BsPersonAdd } from "react-icons/bs";
import RightPart from "./RightPart";

interface LeftSidebarProps {
  setCheckoutModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
  setMode: React.Dispatch<React.SetStateAction<Modes>>;
  loadProfile: (profile: StructureDefinition, inputData?: PathItem[]) => void;
  handleSelectBaseProfile: (value: string) => void;
}

const LeftSidebar = (props: LeftSidebarProps) => {
  const resizeRef = useRef<HTMLInputElement>(null);
  const { resizeWidth, startResizing, setResizeWidth } = useResize(resizeRef);

  const minWidth = 75;
  const maxWidth = 400;

  const closeRightPart = () => {
    setResizeWidth(minWidth);
  };

  return (
    <div
      ref={resizeRef}
      className={"flex flex-row h-full flex-shrink-0 w-80"}
      onResize={(e) => console.log(e)}
      style={{
        flexBasis: `${resizeWidth}px`,
        minWidth: `${minWidth}px`,
        maxWidth: `${maxWidth}px`,
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="flex flex-col h-full w-16 pt-8 items-center flex-shrink-0 shadow-md">
        <button
          className="p-4 rounded-md hover:bg-slate-300"
          title="Resource Editor"
        >
          <BsPersonAdd size={20} className="hover:scale-105" />
        </button>
      </div>
      <RightPart
        handleSelectBaseProfile={props.handleSelectBaseProfile}
        loadProfile={props.loadProfile}
        setMode={props.setMode}
        setProfileTree={props.setProfileTree}
        startResizing={startResizing}
        closeRightPart={closeRightPart}
      />
    </div>
    /* <button
        className="w-full bg-blue-800 p-2"
        onClick={() => {
          props.setCheckoutModalOpen(true);
        }}
      >
        <div className="flex flex-row justify-center items-center gap-2">
          <span className="text-white">Checkout</span>
          <IoMdDoneAll
            size={40}
            style={{
              color: "white",
              borderRadius: "15%",
            }}
          />
        </div>
      </button> */
  );
};

export default LeftSidebar;
