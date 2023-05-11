import * as fs from "fs";
import * as path from "path";
import { buildTreeFromElementsRecursive } from "../../utils/buildTree";

// Define the directory containing the JSON files
const directoryPath = "../data/base-profiles";

// Get a list of all the JSON files in the directory
const files = fs
  .readdirSync(directoryPath)
  .filter((file) => file.endsWith(".json"));

// Loop over each file and process its contents
files.forEach(async (file) => {
  const filePath = path.join(directoryPath, file);
  const rawData = fs.readFileSync(filePath);
  const profile = JSON.parse(rawData.toString());
  const pT = await buildTreeFromElementsRecursive(profile.snapshot.element);
  let newFilePath = path.join("./fhir/profiletrees", `${file}.ts`);
  newFilePath = newFilePath.replace("_profile.json", "");
  fs.writeFileSync(
    newFilePath,
    `const data = ${JSON.stringify(pT)}; export default data`
  );
});
