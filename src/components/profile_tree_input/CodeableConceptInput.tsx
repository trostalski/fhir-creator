import { ProfileTreeNode, ProfileTree } from "@/utils/buildTree";
import React from "react";
import Select from "react-select";

interface BindingCodeInputProps {
  node: ProfileTreeNode;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
}

const BindingCodeInput = (props: BindingCodeInputProps) => {
  const getOptions = () => {
    const codes = props.node.bindingCodes!;
    const options = codes.map((code) => {
      let label = "";
      if (code.display) {
        label = code.display;
      } else if (code.code) {
        label = code.code;
      }
      return { value: code.code, label: label };
    });
    return options;
  };

  const handleOnChange = (e: any) => {
    const code = props.node.bindingCodes!.find((code) => code.code === e.value);
    props.setProfileTree((prevProfileTree) => {
      const newProfileTree = [...prevProfileTree];
      const nodeIndex = newProfileTree.findIndex(
        (node) => node.dataPath === props.node.dataPath
      );
      newProfileTree[nodeIndex].value = code;
      return newProfileTree;
    });
  };

  return (
    <>
      <Select options={getOptions()} onChange={handleOnChange} />
    </>
  );
};

export default BindingCodeInput;
