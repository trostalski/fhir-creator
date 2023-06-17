import { useStore } from "@/stores/useStore";
import React from "react";

const ResourceOverview = () => {
  const { resource } = useStore((state) => {
    return {
      resource: state.activeResource,
    };
  });
  return <div>ResourceOverview</div>;
};

export default ResourceOverview;
