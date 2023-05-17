import fs from "fs";
import path from "path";
import { CodeSystem } from "fhir/r4";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CodeSystem | Object>
) {
  const { filename } = req.query;
  const filePath = path.join(process.cwd(), `data/codesystems/${filename}`);
  let fileContents: string | undefined;
  try {
    fileContents = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  const data: CodeSystem = JSON.parse(fileContents!);
  res.status(200).json(data);
}
