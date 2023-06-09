import { CodeSystem, CodeSystemConcept, Coding } from "fhir/r4";
import { isBaseUrl, isUrl } from "./utils";
import fs from "fs";
import path from "path";

export class CodeSystemResolver {
  private _codeSystemEndpoint: string;
  private _codeSystemUrl: string | undefined;

  constructor() {
    this._codeSystemEndpoint = "api/codeSystems/";
  }

  public async resolve(codeSystemUrl: string) {
    let codes: Coding[] | undefined;
    const isurl = isUrl(codeSystemUrl);
    if (isurl && isBaseUrl(codeSystemUrl)) {
      codes = await this.resolveBase(codeSystemUrl);
    } else if (isurl) {
    }
    return codes;
  }

  private async resolveBase(codeSystemUrl: string) {
    let codes: Coding[] = [];
    const parsedUrl = this.parseCodeSystemUrl(codeSystemUrl);
    const codeSystem = await this.getBaseCodeSystem(parsedUrl);
    if (codeSystem.concept) {
      codes = this.resolveConcept(codeSystem.concept);
    }
    return codes;
  }

  private resolveConcept(concepts: CodeSystemConcept[]) {
    let codes: Coding[] = [];
    for (const concept of concepts) {
      const coding: Coding = {
        system: this._codeSystemUrl,
        code: concept.code,
        display: concept.display,
      };
      codes.push(coding);
      if (concept.concept) {
        const childCodes = this.resolveConcept(concept.concept);
        codes = codes.concat(childCodes);
      }
    }
    return codes;
  }

  get codeSystemUrl() {
    return this._codeSystemUrl;
  }

  public async fetchBaseCodeSystem(codeSystemUrl: string) {
    const fileName = codeSystemUrl + ".json";
    const codeSystemRes = await fetch(
      this._codeSystemEndpoint +
        "?" +
        new URLSearchParams({ filename: fileName })
    );
    if (!codeSystemRes.ok) {
      throw new Error("Error fetching code system");
    }
    const codeSystem: CodeSystem = await codeSystemRes.json();
    this._codeSystemUrl = codeSystem.url;
    return codeSystem;
  }

  private async getBaseCodeSystem(codeSystemUrl: string) {
    const filePath = path.join(
      process.cwd(),
      `data/codesystems/${codeSystemUrl}.json`
    );
    const codeSystem = fs.readFileSync(filePath, "utf8");
    const data: CodeSystem = JSON.parse(codeSystem);
    this._codeSystemUrl = data.url;
    return data;
  }

  private parseCodeSystemUrl(codeSystemUrl: string): string {
    if (codeSystemUrl.includes("|")) {
      const [url, version] = codeSystemUrl.split("|");
      codeSystemUrl = url;
    }
    // const result = codeSystemUrl.split("/").at(-1)!;
    const result =
      codeSystemUrl.split("/")[codeSystemUrl.split("/").length - 1];
    return result;
  }
}
