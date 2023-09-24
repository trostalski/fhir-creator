import { PathItem } from "@/types";
import { fetchProfileTree } from "@/utils/api";
import { ProfileTree } from "@/utils/buildTree";
import { Modes } from "@/utils/constants";
import { getBranchIds } from "@/utils/tree_utils";
import { getResourceTypeFromProfile, idIsImportant } from "@/utils/utils";
import { OrderedConstraintResults } from "@/utils/constraint_utils";
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
  activeReferenceContext?: string;
  setActiveReferenceContext: (bundleId: string) => void;
  setProfileTree: (
    profile: StructureDefinition,
    inputData?: PathItem[]
  ) => Promise<void>;
  updateProfileTree: (newProfileTree: ProfileTree | undefined) => void;
  clearProfileTree: () => void;
  setMode: (mode: Modes) => void;
  branchIds: string[];
  checkedBranchIds: string[];
  setCheckedBranchIds: (branchIds: string[]) => void;
  setBranchIds: (profileTree: ProfileTree) => void;
  setResource: (resource: Resource) => Promise<void>;
  orderedConstraintResults?: OrderedConstraintResults | undefined;
  setOrderedConstraintResults: (
    orderedConstraintResults: OrderedConstraintResults | undefined
  ) => void;
}

export const useStore = create<Store>((set, get) => ({
  activeResource: undefined,
  activeBundle: undefined,
  activeProfileTree: undefined,
  activeResourceType: undefined,
  activeProfile: undefined,
  activeReferenceContext: undefined,
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
    get().setCheckedBranchIds(
      get().branchIds.filter((id) => idIsImportant(id))
    );
    set({ orderedConstraintResults: undefined });
  },
  updateProfileTree: async (newProfileTree?: ProfileTree) => {
    set({ activeProfileTree: newProfileTree });
  },
  clearProfileTree: async () => {
    const profile = get().activeProfile;
    if (profile) {
      const profileTree = await fetchProfileTree(profile);
      set({ activeProfileTree: undefined });
    }
  },
  branchIds: [],
  checkedBranchIds: [],
  setBranchIds: (profileTree: ProfileTree) => {
    if (profileTree) {
      const branchIds = uniq(getBranchIds(profileTree));
      set({ branchIds: branchIds });
    }
  },
  setActiveReferenceContext: (bundleId: string) => {
    set({activeReferenceContext: bundleId})
  },
  setCheckedBranchIds: (checkedBranchIds: string[]) =>
    set({ checkedBranchIds: checkedBranchIds }),
  setResource: async (resource: Resource) => {
    set({ activeResource: resource });
  },
  setMode: (mode: Modes) => set({ mode: mode }),
  orderedConstraintResults: undefined,
  setOrderedConstraintResults: (
    orderedConstraintResults: OrderedConstraintResults | undefined
  ) =>
    set({
      orderedConstraintResults: orderedConstraintResults,
    }),
}));

interface ValResultStore {
  orderedConstraintResults?: OrderedConstraintResults | undefined;
  setOrderedConstraintResults: (
    orderedConstraintResults: OrderedConstraintResults | undefined
  ) => void;
}

export const useValResultStore = create<ValResultStore>((set) => ({
  orderedConstraintResults: undefined,
  setOrderedConstraintResults: (
    orderedConstraintResults: OrderedConstraintResults | undefined
  ) =>
    set({
      orderedConstraintResults: orderedConstraintResults,
    }),
}));
