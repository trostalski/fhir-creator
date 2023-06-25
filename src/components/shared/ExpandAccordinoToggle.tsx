import React from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

interface ExpandAccordinoToggleProps {
  isOpen: boolean;
  onClick?: () => void;
  size?: number;
}

const ExpandAccordinoToggle = (props: ExpandAccordinoToggleProps) => {
  return (
    <>
      {props.isOpen ? (
        <MdExpandLess
          size={props.size || 20}
          className="cursor-pointer"
          onClick={props.onClick}
        />
      ) : (
        <MdExpandMore
          size={props.size || 20}
          className="cursor-pointer"
          onClick={props.onClick}
        />
      )}
    </>
  );
};

export default ExpandAccordinoToggle;
