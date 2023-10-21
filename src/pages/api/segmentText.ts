import { fhirChainUrl } from "@/utils/constants";
import { StructureDefinition } from "fhir/r4";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StructureDefinition | Object>
) {
  const { text: text, apiKey: apiKey } = req.body as {
    text: string;
    apiKey: string;
  };

  const response = await fetch(`${fhirChainUrl}/fhirchain/structureText`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: text, api_key: apiKey }),
  });
  const data = await response.json();
  console.log(data);
}
