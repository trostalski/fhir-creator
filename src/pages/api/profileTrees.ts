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
import { some } from "lodash";

const loadProfileTree = async (
  profile: StructureDefinition,
  inputData?: PathItem[]
) => {
  let profileTree: ProfileTree = [];
  if (containsSnapshot(profile) && profile.snapshot) {
    if (isBaseUrl(profile.url)) {
      // const profileTreeModule = await import(
      //   `../../fhir/profiletrees/${getResourceTypeFromUrl(profile.url)}`
      // );
      // profileTree = profileTreeModule.default;
      // if (some(profileTree, (node) => node.value)) {
      //   profileTree = await buildProfileTree(profile);
      // }
      profileTree = await buildProfileTree(profile);
    } else {
      profileTree = await buildProfileTree(profile);
    }
  } else if (containsDifferential(profile) && profile.differential) {
    const baseUrl = getBaseUrl(profile);
    if (!baseUrl || !isBaseUrl(baseUrl)) {
      throw new Error("No base url found in profile");
    }
    const baseResourceType = getResourceTypeFromUrl(baseUrl);
    const baseProfile: StructureDefinition = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), `data/base-profiles/${baseResourceType}.json`),
        "utf8"
      )
    );

    profileTree = await buildProfileTree(baseProfile);
    profileTree = await mergeTreeWithDifferential(
      profileTree,
      profile.differential.element
    );
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
