import fs from "fs";
import path from "path";
import { StructureDefinition } from "fhir/r4";
import type { NextApiRequest, NextApiResponse } from "next";
import { PathItem } from "@/types";
import { ProfileTree, buildProfileTree } from "@/utils/buildTree";
import { mergeTreeWithDifferential } from "@/utils/mergeDifferential";
import { removeNPathPartsFromStart } from "@/utils/path_utils";
import {
  containsSnapshot,
  containsDifferential,
  getBaseUrl,
  isBaseUrl,
  getResourceTypeFromUrl,
  getUid,
} from "@/utils/utils";

const loadProfileTree = async (
  profile: StructureDefinition,
  inputData?: PathItem[]
) => {
  let profileTree: ProfileTree = [];
  if (containsSnapshot(profile) && profile.snapshot) {
    // all elements are present
    profileTree = await buildProfileTree(profile);
  } else if (containsDifferential(profile) && profile.differential) {
    // only differential is present, needs to be merged with base profile
    const baseUrl = getBaseUrl(profile);
    if (!baseUrl || !isBaseUrl(baseUrl)) {
      alert("No base profile found");
      return [];
    } else {
      const baseResourceType = getResourceTypeFromUrl(baseUrl);
      const baseProfile: StructureDefinition = await fetch(
        `api/profiles?filename=${baseResourceType}`
      ).then((res) => res.json());
      profileTree = await buildProfileTree(baseProfile);
      profileTree = await mergeTreeWithDifferential(
        profileTree,
        profile.differential.element
      );
    }
  } else {
    // no snapshot or differential is present
    alert("No snapshot or differential is present in the profile");
    return [];
  }
  if (inputData) {
    profileTree = profileTree.map((n) => {
      const valueDataForNode = inputData.find(
        (e) => e.path === removeNPathPartsFromStart(n.dataPath, 1)
      ) as PathItem;
      if (valueDataForNode) {
        n.value = valueDataForNode.value;
      }
      return n;
    });
  } else {
    profileTree = profileTree = profileTree.map((node) => {
      const path = removeNPathPartsFromStart(node.dataPath, 1);
      if (path === "id") {
        node.value = getUid();
      } else if (path === "meta.profile[0]") {
        node.value = profile?.url!;
      } else if (path === "meta.lastUpdated") {
        node.value = new Date().toISOString();
      }
      return node;
    });
  }
  return profileTree;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StructureDefinition | Object>
) {
  const { profile, inputData } = JSON.parse(req.body);
  if (!profile) {
    res.status(400).json({ message: "No profile provided" });
    return;
  }
  return loadProfileTree(
    profile as StructureDefinition,
    inputData as PathItem[]
  ).then((profileTree) => {
    res.status(200).json(profileTree);
  });
}
