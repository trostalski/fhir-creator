import { Coding, ValueSet } from "fhir/r4";
import { isBaseUrl } from "./utils";
import { ValueSetCompose } from "fhir/r4b";
import { ValueSetComposeInclude } from "fhir/r4";
import { CodeSystemResolver } from "./codesystem_utils";

export class ValueSetResolver {
  private valueSetEndpoint: string;
  private codeSystemUrl: string | undefined;

  constructor() {
    this.valueSetEndpoint = "api/valueSets/";
  }

  public resolve(valueSetUrl: string) {
    const urlIsBase = isBaseUrl(valueSetUrl);
    if (urlIsBase) {
      return this.resolveBase(valueSetUrl);
    }
  }

  private async resolveBase(valueSetUrl: string) {
    let codes: Coding[] | undefined;
    const parsedUrl = this.parseValueSetUrl(valueSetUrl);
    const valueSet = await this.getBaseValueSet(parsedUrl);
    if (valueSet.compose) {
      codes = [];
      const composeCodes = await this.resolveCompose(valueSet.compose);
      if (composeCodes) {
        codes = codes.concat(composeCodes);
      }
    }
    if (valueSet.expansion) {
    }
    return codes;
  }

  public async getBaseValueSet(valueSetUrl: string) {
    const fileName = valueSetUrl + ".json";
    const valueSetRes = await fetch(
      this.valueSetEndpoint + "?" + new URLSearchParams({ filename: fileName })
    );
    if (!valueSetRes.ok) {
      throw new Error("Error fetching value set");
    }
    const valueSet: ValueSet = await valueSetRes.json();
    return valueSet;
  }

  private async resolveCompose(compose: ValueSetCompose) {
    let codes: Coding[] | undefined;
    if (compose.include) {
      codes = await this.resolveInclude(compose.include);
    }
    return codes;
  }

  private async resolveInclude(include: ValueSetComposeInclude[]) {
    let codes: Coding[] | undefined;
    for (const includeItem of include) {
      const system = includeItem.system;
      const concept = includeItem.concept;
      if (system && !concept) {
        // all codes in system
        const systemCodes = await this.resolveSystem(includeItem.system!);
        if (systemCodes) {
          if (!codes) {
            codes = [];
          }
          codes = codes.concat(systemCodes);
        } else {
          // if one system fails, return undefined because we can't be sure that all systems are codes are found
          return undefined;
        }
      } else if (concept && system) {
        // only concept codes
        for (const conceptItem of concept) {
          const coding: Coding = {
            system: this.codeSystemUrl,
            code: conceptItem.code,
            display: conceptItem.display,
          };
          if (!codes) {
            codes = [];
          }
          codes.push(coding);
        }
      }
    }
    return codes;
  }
  private async resolveSystem(system: string) {
    const codeSystemResolver = new CodeSystemResolver();
    const codes = await codeSystemResolver.resolve(system);
    this.codeSystemUrl = codeSystemResolver.codeSystemUrl;
    return codes;
  }

  private parseValueSetUrl(valueSetUrl: string): string {
    if (valueSetUrl.includes("|")) {
      const [url, version] = valueSetUrl.split("|");
      valueSetUrl = url;
    }
    const result = valueSetUrl.split("/")[valueSetUrl.split("/").length - 1];
    return result;
  }
}
