import { StructureDefinition } from "fhir/r4";
import type { NextApiRequest, NextApiResponse } from "next";
import { termWhipUrl } from "@/utils/constants";

async function snomed_fts(searchTerm: string) {
  const response = await fetch(
    `${termWhipUrl}/api/v1/snomed_fts?search_term=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  console.log("TERMWHIP response: ", response);
  const data = await response.json();
  return data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StructureDefinition | Object>
) {
  if (req.method === "POST") {
    const { method } = req.body;
  } else if (req.method === "GET") {
    const { method } = req.query;
    if (method === "snomed_fts") {
      const { searchTerm } = req.query as { searchTerm: string };
      const fts_result = await snomed_fts(searchTerm);
      res.status(200).json(fts_result);
    }
  }
}
