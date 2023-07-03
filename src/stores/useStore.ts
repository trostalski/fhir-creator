import { PathItem } from "@/types";
import { fetchProfileTree } from "@/utils/api";
import { ProfileTree } from "@/utils/buildTree";
import { Modes } from "@/utils/constants";
import { getBranchIds } from "@/utils/tree_utils";
import { getResourceTypeFromProfile, idIsImportant } from "@/utils/utils";
import { profile } from "console";
import { Bundle, Resource, StructureDefinition } from "fhir/r4";
import { uniq } from "lodash";
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
  clearProfileTree: () => void;
  setMode: (mode: Modes) => void;
  branchIds: string[];
  checkedBranchIds: string[],
  setCheckedBranchIds: (
    branchIds: string[]
  ) => void;
  setBranchIds: (profileTree:ProfileTree) => void;
}

export const useStore = create<Store>((set, get) => ({
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
    get().setBranchIds(profileTree);
    get().setCheckedBranchIds(get().branchIds.filter((id) => idIsImportant(id)));
  },
  updateProfileTree: async (newProfileTree?: ProfileTree) => {
    set({ activeProfileTree: newProfileTree });
  },
  clearProfileTree: async () =>{
    const profile = get().activeProfile;
    if(profile){
      const profileTree = await fetchProfileTree(profile)
      set({ activeProfileTree: profileTree })
    }
  },
  setMode: (mode: Modes) => set({ mode: mode }),
  branchIds:[],
  checkedBranchIds:[],
  setBranchIds: (profileTree:ProfileTree) => {
    if(profileTree){
      const branchIds = uniq(getBranchIds(profileTree));
      set({branchIds: branchIds});
    }
  },
  setCheckedBranchIds: (checkedBranchIds: string[]) => set({checkedBranchIds: checkedBranchIds}),
}));
