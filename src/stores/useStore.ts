import { PathItem } from "@/types";
import { fetchProfileTree } from "@/utils/api";
import { ProfileTree } from "@/utils/buildTree";
import { Modes } from "@/utils/constants";
import { Bundle, Resource, StructureDefinition } from "fhir/r4";
import { create } from "zustand";

interface Store {
  activeResource: Resource;
  activeBundle: Bundle;
  activeProfileTree: ProfileTree;
  mode: Modes;
}

const useStore = create((set) => ({
  activeResource: {},
  activeBundle: {},
  activeProfileTree: {},
  mode: Modes.CREATE,
  setProfileTree: async (
    profile: StructureDefinition,
    inputData?: PathItem[]
  ) => {
    const profileTree = await fetchProfileTree(profile, inputData);
    set({ activeProfileTree: profileTree });
  },
  setMode: (mode: Modes) => set({ mode: mode }),
}));
