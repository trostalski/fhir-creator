import React from "react";

interface ModalWrapperProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  height?: string;
  size?: "sm" | "md" | "lg";
}

const ModalWrapper = (props: ModalWrapperProps) => {
  return (
    <div
      className="fixed flex justify-center items-center top-0 left-0 bg-black bg-opacity-40 w-screen h-screen z-50"
      onClick={() => {
        props.setShow(false);
      }}
    >
      <div
        className={`bg-white rounded-xl overflow-visible ${
          props.height ? props.height : "auto"
        } ${
          props.size == "sm"
            ? "h-auto w-1/4"
            : props.size == "md"
            ? "h-auto w-1/3"
            : "h-auto w-1/2"
        } mb-8 p-4`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default ModalWrapper;
