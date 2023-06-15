import React, { useRef } from "react";
import useResize from "@/hooks/useResize";
import { BsPersonAdd } from "react-icons/bs";
import { TbTransform } from "react-icons/tb";
import { TbDeviceAnalytics } from "react-icons/tb";
import RightPart from "./RightPart";
import Link from "next/link";
import { useRouter } from "next/router";

interface LeftSidebarProps {
  setCheckoutModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftSidebar = (props: LeftSidebarProps) => {
  const resizeRef = useRef<HTMLInputElement>(null);
  const { resizeWidth, startResizing, setResizeWidth } = useResize(resizeRef);

  const minWidth = 75;
  const maxWidth = 400;

  const closeRightPart = () => {
    setResizeWidth(minWidth);
  };
  const router = useRouter();

  return (
    <div
      ref={resizeRef}
      className={"flex flex-row h-full flex-shrink-0 w-80"}
      style={{
        flexBasis: `${resizeWidth}px`,
        minWidth: `${minWidth}px`,
        maxWidth: `${maxWidth}px`,
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="flex flex-col h-full w-16 pt-4 items-center flex-shrink-0 shadow-md">
        <button
          className="p-4 rounded-md hover:bg-slate-300"
          title="Resource Editor"
          onClick={() => {
            router.push("/");
          }}
        >
          <BsPersonAdd size={20} className="hover:scale-105" />
        </button>
        <button
          className="p-4 rounded-md hover:bg-slate-300"
          title="Inspect Data"
          onClick={() => {
            router.push("/explorer");
          }}
        >
          <TbDeviceAnalytics size={20} className="hover:scale-105" />
        </button>
        <button
          className="p-4 rounded-md hover:bg-slate-300"
          title="Data Transformer"
        >
          <TbTransform size={20} className="hover:scale-105" />
        </button>
      </div>
      <RightPart
        startResizing={startResizing}
        closeRightPart={closeRightPart}
      />
    </div>
  );
};

export default LeftSidebar;
