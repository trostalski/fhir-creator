import { PathItem } from "@/types";
import { detaSpaceUrl } from "@/utils/constants";
import { StructureDefinition } from "fhir/r4";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StructureDefinition | Object>
) {
  try {
    const response = await fetch(`${detaSpaceUrl}/api/v1/patsim/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    if (!response.ok) {
      throw new Error("Error fetching patient similarity data.");
    }
    const file = Buffer.from(await response.arrayBuffer());
    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${req.body.filename}`
    );
    res.setHeader("Content-Length", file.length);
    res.send(file);
  } catch (error) {
    console.error(error);
    return error;
  }
}
