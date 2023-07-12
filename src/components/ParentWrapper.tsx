import React from "react";

interface ParentWrapperProps {
  children: React.ReactNode;
}

const ParentWrapper = (props: ParentWrapperProps) => {
  return <div>{props.children}</div>;
};

export default ParentWrapper;
