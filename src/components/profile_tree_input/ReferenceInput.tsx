import { ProfileTreeNode } from "@/utils/buildTree";
import React, { useEffect, useState } from "react";
import { useStore } from "@/stores/useStore";
import InputWrapper from "./InputWrapper";
import { getReferenceChildren, nodeIsType } from "@/utils/tree_utils";
import PrimitveInput from "./PrimitveInput";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { getPossibleReferenceIds } from "@/db/utils";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/db";
import { reactSelectStyles } from "@/styles/reactSelectStyles";

interface ReferenceInputProps {
  node: ProfileTreeNode;
  pathsWithInvalidCardinality: string[];
}

export const ReferenceInput = (props: ReferenceInputProps) => {
  const [referenceOptions, setReferenceOptions] = useState<
    { value: string | undefined; label: string }[]
  >([]);

  const {
    profileTree,
    updateProfileTree,
    activeReferenceContext,
    setActiveReferenceContext,
  } = useStore((state) => {
    return {
      profileTree: state.activeProfileTree,
      updateProfileTree: state.updateProfileTree,
      activeReferenceContext: state.activeReferenceContext,
      setActiveReferenceContext: state.setActiveReferenceContext,
    };
  });

  const { referenceNode, typeNode, displayNode } = getReferenceChildren(
    profileTree!,
    props.node
  );
  const bundleFolders = useLiveQuery(() => {
    return db.bundleFolders.toArray();
  });
  const bundleFolderOptions = bundleFolders?.map((folder) => {
    return {
      value: folder.id,
      label: folder.id,
    };
  });

  useEffect(() => {
    getOptions();
  }, [typeNode.value, activeReferenceContext]);

  const handleOnChange = (e: any, focusNode: ProfileTreeNode) => {
    // focusNode as parameter just lazy by me, dirty fix
    const newProfileTree = [...profileTree!];
    const nodeIndex = newProfileTree.findIndex(
      (node) => node.dataPath === focusNode.dataPath
    );
    newProfileTree[nodeIndex].value = e.value;

    updateProfileTree(newProfileTree);
  };

  const handleRefContextOnChange = (e: any) => {
    setActiveReferenceContext(e.value);
  };

  const getRefContextPlaceholder = () => {
    if (activeReferenceContext) {
      return activeReferenceContext;
    } else {
      return "Select the reference context bundle";
    }
  };

  const getOptions = async () => {
    let referenceIds: string[] = [];
    let options: { value: string | undefined; label: string }[] = [];
    if (typeNode.value && activeReferenceContext) {
      referenceIds = await getPossibleReferenceIds(
        typeNode.value,
        activeReferenceContext
      );
      options = referenceIds.map((id) => {
        return { value: id, label: id };
      });
    }
    setReferenceOptions(options);
  };
  return (
    <div className="flex flex-row w-full gap-8">
      <div className="basis-3/4">
        <PrimitveInput
          node={typeNode}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
        />
        <InputWrapper
          node={referenceNode}
          title="reference"
          helpText={referenceNode.element.short}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
        >
          <CreatableSelect
            options={referenceOptions}
            onChange={(e) => handleOnChange(e, referenceNode)}
            styles={reactSelectStyles}
            placeholder={referenceNode.element.short}
          />
        </InputWrapper>
        <PrimitveInput
          node={displayNode}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
        />
      </div>
      <div>
        <InputWrapper
          node={referenceNode}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
          title="Reference Context Bundle"
        >
          <Select
            options={bundleFolderOptions}
            styles={{
              ...reactSelectStyles,
            }}
            onChange={(e) => handleRefContextOnChange(e)}
            placeholder={getRefContextPlaceholder()}
          />
        </InputWrapper>
      </div>
    </div>
  );
};
