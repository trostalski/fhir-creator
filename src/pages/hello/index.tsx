import { StructureDefinition } from "fhir/r4";
import React, { useEffect } from "react";
import { ProfileTree, buildTreeFromElementsRecursive } from "../buildTree";
import ProfileTreeComponent from "./ProfileTreeComponent";

const index = () => {
  const [tree, setTree] = React.useState<ProfileTree>([]);
  useEffect(() => {
    const profile: StructureDefinition = require("../../data/base-profiles/Condition_profile.json");
    const elements = profile.snapshot!.element!;
    // console.log("elements: ",elements);
    const t = buildTreeFromElementsRecursive(elements);
    console.log(t.length);
    setTree(t);
  }, []);

  return (
    <div>
      <ProfileTreeComponent tree={tree} />
    </div>
  );
};

export default index;
