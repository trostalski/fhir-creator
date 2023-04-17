import React, { useEffect } from "react";
import {
  ProfileTree,
  buildTreeFromElementsRecursive,
} from "../../utils/buildTree";
import ProfileTreeComponent from "./ProfileTreeComponent";

const index = () => {
  const [tree, setTree] = React.useState<ProfileTree>();

  useEffect(() => {
    fetch("api/profiles?filename=Condition")
      .then((res) => res.json())
      .then((data) => {
        const elements = data.snapshot!.element!;
        const t = buildTreeFromElementsRecursive(elements, "root").then((t) =>
          setTree(t)
        );
      });
  }, []);

  if (!tree) {
    return <div>Loading...</div>;
  }
  console.log("tree: ", tree);
  return (
    <div>
      <ProfileTreeComponent tree={tree} />
    </div>
  );
};

export default index;
