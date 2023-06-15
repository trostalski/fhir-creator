import { PathItem } from "@/types";
import { fetchProfileTree } from "@/utils/api";
import { ProfileTree } from "@/utils/buildTree";
import { Modes } from "@/utils/constants";
import { getResourceTypeFromProfile } from "@/utils/utils";
import { Bundle, Resource, StructureDefinition } from "fhir/r4";
import { create } from "zustand";

interface Store {
  activeResource?: Resource;
  activeBundle?: Bundle;
  activeProfileTree?: ProfileTree;
  activeResourceType?: string;
  activeProfile?: StructureDefinition;
  mode: Modes;
  setProfileTree: (
    profile: StructureDefinition,
    inputData?: PathItem[]
  ) => Promise<void>;
  updateProfileTree: (newProfileTree: ProfileTree | undefined) => void;
  setMode: (mode: Modes) => void;
}

export const useStore = create<Store>((set) => ({
  activeResource: undefined,
  activeBundle: undefined,
  activeProfileTree: undefined,
  activeResourceType: undefined,
  activeProfile: undefined,
  mode: Modes.CREATE,
  setProfileTree: async (
    profile: StructureDefinition,
    inputData?: PathItem[]
  ) => {
    const profileTree = await fetchProfileTree(profile, inputData);
    set({ activeProfile: profile });
    set({ activeResourceType: getResourceTypeFromProfile(profile) });
    set({ activeProfileTree: profileTree });
  },
  updateProfileTree: async (newProfileTree?: ProfileTree) => {
    set({ activeProfileTree: newProfileTree });
  },
  setMode: (mode: Modes) => set({ mode: mode }),
}));
