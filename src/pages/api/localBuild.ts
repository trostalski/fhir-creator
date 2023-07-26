import { StructureDefinition } from "fhir/r4";
import type { NextApiRequest, NextApiResponse } from "next";
import { loadTrees } from "@/fhir/scripts/loadTrees";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StructureDefinition | Object>
) {
  loadTrees();
  res.status(200).json({ message: "Hello world" });
}
