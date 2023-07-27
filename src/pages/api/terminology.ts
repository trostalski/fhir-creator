import { awsUrl } from "@/utils/constants";
import { StructureDefinition } from "fhir/r4";
import type { NextApiRequest, NextApiResponse } from "next";

async function snomed_fts(searchTerm: string, limit: string) {
  const response = await fetch(
    `${awsUrl}/api/v1/snomed/fts?search_term=${searchTerm}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
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
      const { search_term: searchTerm, limit } = req.query as {
        search_term: string;
        limit: string;
      };
      const fts_result = await snomed_fts(searchTerm, limit);
      res.status(200).json(fts_result);
    }
  }
}
