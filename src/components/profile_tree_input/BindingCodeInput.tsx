import { useStore } from "@/stores/useStore";
import { reactSelectStyles } from "@/styles/reactSelectStyles";
import { ProfileTreeNode } from "@/utils/buildTree";
import { getNodeByDataPath, nodeIsType } from "@/utils/tree_utils";
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
    // not the optimal handling, might be better to have a ResolveBinding class at some point
    // own handling for references as they usually provid targetProfiles in the reference base node
    let targetProfiles: string[] | undefined;
    let options: { value: string | undefined; label: string }[] = [];
    // special for references as they often provide targetProfiles in the reference base node
    if (profileTree) {
      const parentNode = getNodeByDataPath(
        profileTree,
        props.node.parentDataPath
      );
      targetProfiles = parentNode?.element.type?.find(
        (item) => item.code === "Reference"
      )?.targetProfile;
    }

    if (targetProfiles) {
      targetProfiles.forEach((profile) => {
        // split the profile string to get the last part of the url
        const profileName = profile.split("/").pop();
        options.push({ value: profile, label: profileName! });
      });
    } else {
      const codes = props.node.bindingCodes!;
      options = codes.map((code) => {
        let label = "";
        if (code.display) {
          label = code.display;
        } else if (code.code) {
          label = code.code;
        }
        return { value: code.code, label: label };
      });
    }

    return options;
  };

  const handleOnChange = (e: any) => {
    const newProfileTree = [...profileTree!];
    const nodeIndex = newProfileTree.findIndex(
      (node) => node.dataPath === props.node.dataPath
    );
    if (nodeIsType(props.node, "Coding")) {
      const code = props.node.bindingCodes!.find(
        (code) => code.code === e.value
      );
      newProfileTree[nodeIndex].value = code;
    } else {
      newProfileTree[nodeIndex].value = e.value;
    }
    updateProfileTree(newProfileTree);
  };

  return (
    <>
      <Select
        options={getOptions()}
        onChange={(e) => handleOnChange(e)}
        className="w-full"
        placeholder={props.node.element.short}
        value={getOptions().find(
          (option) =>
            option.value === props.node.value.code ||
            option.value === props.node.value
        )}
        styles={reactSelectStyles}
      />
    </>
  );
};

export default BindingCodeInput;
