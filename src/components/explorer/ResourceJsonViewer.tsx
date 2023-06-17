import { useStore } from "@/stores/useStore";
import React from "react";
import ReactJson from "react-json-view";

const ResourceJsonViewer = () => {
  const { resource } = useStore((state) => {
    return {
      resource: state.activeResource,
    };
  });
  return (
    <div>
      <ReactJson src={resource!} />
    </div>
  );
};

export default ResourceJsonViewer;
