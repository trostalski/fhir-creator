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
import { fetchProfileTree } from "@/utils/api";

function findElementWithValue(profileTree: ProfileTree): ProfileTree {
  const newProfileTree: ProfileTree = [];
  // find all element with value
  profileTree.forEach((node) => {
    if (node.value) {
      newProfileTree.push(node);
    }
  });
  return newProfileTree;
}

function createPathItemArray(profileTree: ProfileTree): PathItem[] {
  const pathItemArray: PathItem[] = [];
  profileTree.forEach((node) => {
    if (node.value) {
      const pathItem: PathItem = {
        path: node.dataPath,
        value: node.value,
      };
      pathItemArray.push(pathItem);
    }
  });
  return pathItemArray;
}

const loadProfileTree = async (
  profile: StructureDefinition,
  inputData?: PathItem[]
) => {
  if (inputData) {
    console.log("inputData:");
    console.log(inputData);
  }
  let profileTree: ProfileTree = [];
  console.log("Profile tree after initialization:");
  console.log(profileTree);
  if (containsSnapshot(profile) && profile.snapshot) {
    console.log("getting profileTree here 1");
    if (isBaseUrl(profile.url)) {
      const profileTreeModule = await import(
        `../../fhir/profiletrees/${getResourceTypeFromUrl(profile.url)}`
      );
      console.log(createPathItemArray(profileTreeModule.default));
      profileTree = profileTreeModule.default;
      if (some(profileTree, (node) => node.value)) {
        profileTree = await buildProfileTree(profile);
      }
      console.log("profileTree after build");
      console.log(createPathItemArray(profileTree));
      console.log("###########################################");
    } else {
      console.log("getting profileTree here 3");
      profileTree = await buildProfileTree(profile);
    }
  } else if (containsDifferential(profile) && profile.differential) {
    console.log("getting profileTree here 4");
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
    console.log("inputData from inside population:");
    console.log(inputData);
    console.log("profileTree before population:");
    console.log(createPathItemArray(profileTree));
    console.log("+++++++++++++++++++++++++++++++++++++++++++");
    profileTree = profileTree.map((n) => {
      const valueDataForNode = inputData.find(
        (e) => e.path === removeNPathPartsFromStart(n.dataPath, 1)
      ) as PathItem;
      if (valueDataForNode) {
        n.value = valueDataForNode.value;
      }
      return n;
    });
    console.log("profileTree:");
    console.log(createPathItemArray(profileTree));
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
  // console.log("profileTree:");
  // console.log(createPathItemArray(profileTree));
  console.log("--------------------------------------------------------");
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
