import { PathItem } from "@/types";
import { StructureDefinition } from "fhir/r4";

export const getProfileTree = async (
  profile: StructureDefinition,
  inputData?: PathItem[]
) => {
  const profileTreeResponse = await fetch(`api/profileTrees/`, {
    method: "POST",
    body: JSON.stringify({
      profile: profile,
      inputData: inputData,
    }),
  });
  if (!profileTreeResponse.ok) {
    throw new Error("Error fetching profile tree");
  }
  const profileTreeJson = await profileTreeResponse.json();
  return profileTreeJson;
};
