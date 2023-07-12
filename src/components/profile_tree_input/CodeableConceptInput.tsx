import { useStore } from "@/stores/useStore";
import { ProfileTreeNode } from "@/utils/buildTree";
import { nodeIsType } from "@/utils/tree_utils";
import React from "react";
import Select from "react-select";

interface BindingCodeInputProps {
  node: ProfileTreeNode;
}

const BindingCodeInput = (props: BindingCodeInputProps) => {
  const { updateProfileTree, profileTree } = useStore((state) => {
    return {
      updateProfileTree: state.updateProfileTree,
      profileTree: state.activeProfileTree,
    };
  });
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
    const newProfileTree = [...profileTree!];
    const nodeIndex = newProfileTree.findIndex(
      (node) => node.dataPath === props.node.dataPath
    );
    if (nodeIsType(props.node, "CodeableConcept")) {
      newProfileTree[nodeIndex].value = code;
    } else {
      newProfileTree[nodeIndex].value = code!.code;
    }
    updateProfileTree(newProfileTree);
  };

  return (
    <>
      <Select
        options={getOptions()}
        onChange={(e) => handleOnChange(e)}
        value={getOptions().find(
          (option) => option.value === props.node.value.code
        )}
      />
    </>
  );
};

export default BindingCodeInput;
