import * as fs from "fs";
import * as path from "path";
import {
  addMissingChildren,
  addRootNode,
  buildTreeFromElementsRecursive,
  removeNonePrimmitiveWithoutChildren,
  replaceWrongParentPaths,
} from "../../utils/buildTree";

console.log("dir: ", __dirname);
console.log("cwd: ", process.cwd());
console.log("base: ", path.basename(__dirname));

// Define the directory containing the JSON files
const directoryPath = "./data/base-profiles";

// Get a list of all the JSON files in the directory
const files = fs
  .readdirSync(directoryPath)
  .filter((file) => file.endsWith(".json"));

// Loop over each file and process its contents
files.forEach(async (file) => {
  const filePath = path.join(directoryPath, file);
  const rawData = fs.readFileSync(filePath);
  const profile = JSON.parse(rawData.toString());
  const elements = profile.snapshot!.element;
  const profileTree = await buildTreeFromElementsRecursive(
    profile.snapshot.element
  );
  replaceWrongParentPaths(profileTree);
  addMissingChildren(profileTree);
  removeNonePrimmitiveWithoutChildren(profileTree);
  // add root node for constraint checking
  addRootNode(profileTree, elements);
  // remove json ending
  let newFile = file.replace(".json", "");
  let newFilePath = path.join("src/fhir/profiletrees", `${newFile}.ts`);
  fs.writeFileSync(
    newFilePath,
    `const data = ${JSON.stringify(profileTree)}; export default data`
  );
});
