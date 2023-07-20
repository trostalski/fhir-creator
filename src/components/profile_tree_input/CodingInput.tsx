import { ProfileTreeNode } from "@/utils/buildTree";
import React from "react";

interface CodingInputProps {
  node: ProfileTreeNode;
}

const CodingInput = (props: CodingInputProps) => {
  const [isCustom, setIsCustom] = React.useState<boolean>(false);
  return (
    <div>
      <input type="select" placeholder="system" />
      <input type="text" placeholder="concept" />
    </div>
  );
};

export default CodingInput;
