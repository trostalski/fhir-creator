import { awsUrl } from "@/utils/constants";
import { StructureDefinition } from "fhir/r4";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StructureDefinition | Object>
) {
  const {
    terminology_system: terminologySystem,
    search_term: searchTerm,
    limit,
  } = req.query as {
    terminology_system: string;
    search_term: string;
    limit: string;
  };
  const response = await fetch(
    `${awsUrl}/api/v1/${terminologySystem}/fts?search_term=${searchTerm}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  res.send(data);
}
