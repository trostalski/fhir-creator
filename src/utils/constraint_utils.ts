import fhirpath from "fhirpath";
import { ProfileTree, ProfileTreeNode } from "./buildTree";
import { ElementDefinitionConstraint } from "fhir/r4";
import {
  defaultOrderedConstraintResults,
  defaultProfileTreeNode,
  multiTypeString,
} from "./constants";
import { getFirstChildren, getNodeByDataPath } from "./tree_utils";

export interface ConstraintEvaluationResult {
  node: ProfileTreeNode;
  constraints: ElementDefinitionConstraint[];
}

export interface ConstraintTreeNode extends ProfileTreeNode {
  constraintPath: string;
}

export interface OrderedConstraintResults {
  errors: ConstraintEvaluationResult[];
  warnings: ConstraintEvaluationResult[];
  guidelines: ConstraintEvaluationResult[];
}

export class ConstraintResolver {
  // evaluates a created resource against the constraints specified in the corresponding structure definition
  // provides the application with it's result in a ordered form for the GUI to communicate back to the user
  // communication with the GUI elements is handled by the GUIConstraintResolver

  private profileTree: ProfileTree;
  private constraintTree: ConstraintTreeNode[];
  private resource: any;
  private evaluationResults: ConstraintEvaluationResult[];
  private orderedEvaluationResults: OrderedConstraintResults;
  private rootDataPath = "root";
  private severityLevels = {
    error: "error",
    warning: "warning",
    guideline: "guideline",
  };

  constructor(profileTree: ProfileTree, resource: any) {
    this.profileTree = profileTree;
    this.resource = resource;
    this.constraintTree = [];
    this.evaluationResults = [];
    this.orderedEvaluationResults = {
      errors: [],
      warnings: [],
      guidelines: [],
    };
    this.createConstraintTree();
    this.evaluate();
    this.orderEvaluationResult();
  }

  getEvaluationResult() {
    return this.orderedEvaluationResults;
  }

  private orderEvaluationResult() {
    const errors = this.getSeverityLevel(this.severityLevels.error);
    const warnings = this.getSeverityLevel(this.severityLevels.warning);
    const guidelines = this.getSeverityLevel(this.severityLevels.guideline);
    this.orderedEvaluationResults = {
      errors: errors,
      warnings: warnings,
      guidelines: guidelines,
    };
  }

  private getSeverityLevel(severityLevel: string) {
    // assert that severityLevel is one of "error", "warning", "guideline"
    const severityLevels = ["error", "warning", "guideline"];
    if (!severityLevels.includes(severityLevel)) {
      throw new Error(
        "severityLevel must be one of 'error', 'warning', 'guideline'"
      );
    }

    const severityLevelResults: ConstraintEvaluationResult[] = [];
    this.evaluationResults.forEach((result) => {
      let foundConstraints: ElementDefinitionConstraint[] = [];
      result.constraints.forEach((constraint) => {
        if (constraint.severity === severityLevel) {
          foundConstraints.push(constraint);
        }
      });
      if (foundConstraints.length > 0) {
        const severityLevelResult: ConstraintEvaluationResult = {
          node: result.node,
          constraints: foundConstraints,
        };
        severityLevelResults.push(severityLevelResult);
      }
    });
    return severityLevelResults;
  }

  private evaluate() {
    this.constraintTree.forEach((node) => {
      const constraints = node.element.constraint;
      if (constraints) {
        let failedConstraints: ElementDefinitionConstraint[] = [];
        constraints.forEach((constraint) => {
          let id = this.handleDiv(node.element.id);
          const expression = [id, constraint.expression].join(".");
          if (expression) {
            try {
              const result = fhirpath.evaluate(this.resource, expression);
              if (!result[0]) {
                failedConstraints.push(constraint);
              }
            } catch (err) {
              window.confirm(
                `There has been an issue while evaluating the constraints: ${err}`
              );
            }
          }
        });
        if (failedConstraints.length > 0) {
          this.evaluationResults.push({
            node: node,
            constraints: failedConstraints,
          });
        }
      }
    });
  }

  private handleDiv(id: string | undefined) {
    // the word div can be an element id but is also a reserved keyword in fhirpath
    // therefore when an element id and in an expression it needs to be escaped with backticks `div`
    if (id) {
      let idCheck = id;
      if (id.includes("div")) {
        idCheck = idCheck.replace("div", "`div`");
      }
      return idCheck;
    }
  }

  private addRootNode() {
    const rootNode = this.profileTree.find((item) => {
      return item.dataPath === this.rootDataPath;
    });
    if (rootNode) {
      let constraintTreeNode = this.createConstraintTreeNode(rootNode);
      this.constraintTree.push(constraintTreeNode);
    }
  }

  private createConstraintTreeNode(node: ProfileTreeNode) {
    let constraintTreeNode: ConstraintTreeNode = {
      ...JSON.parse(JSON.stringify(node)),
      constraintPath: node.dataPath,
    };
    return constraintTreeNode;
  }

  private createConstraintTree() {
    let firstChildren: ProfileTreeNode[];
    firstChildren = getFirstChildren(this.profileTree);
    firstChildren.forEach(this.flagNodesAndBuildTree, this);
    this.handleChoiceType();
    this.addRootNode();
    this.ensureElementIds();
  }

  private ensureElementIds() {
    // the profile tree nodes that were created from complex types do not have correct id in their element
    // correct IDs needed for correct expression generation
    const resourceType = this.getResourceType();
    if (resourceType) {
      this.constraintTree.forEach((node) => {
        this.updateBaseId(node, resourceType);
      });
    }
  }

  private updateBaseId(node: ConstraintTreeNode, resourceType: string) {
    const constraintPath = node.constraintPath;
    if (constraintPath) {
      const updatedPath = constraintPath.replace(
        this.rootDataPath,
        resourceType
      );
      node.element.id = updatedPath;
    } else {
      console.log("No constraint path defined for ", node);
    }
  }

  private getResourceType() {
    const rootNode = this.getRootNode();
    const resourceType = rootNode?.baseId;
    return resourceType;
  }

  private getRootNode() {
    const rootNode = this.constraintTree.find((node) => {
      return node.dataPath === this.rootDataPath;
    });
    return rootNode;
  }

  // recursive method to parse profileTree for constraintTree construction
  // a node is to be included if a descendant is primitive with value
  private flagNodesAndBuildTree(node: ProfileTreeNode): {
    selfPath: string;
    includeParent: boolean;
  } {
    let includeParent = false;
    let childrenResponses: { selfPath: string; includeParent: boolean }[] = [];
    let selfPath = node.dataPath;

    // end of recursion
    if (node.isPrimitive && node.value) {
      includeParent = true;
    } else if (node.childPaths.length > 0) {
      for (let i = 0; i < node.childPaths.length; i++) {
        const childPath = node.childPaths[i];
        const childNode = getNodeByDataPath(this.profileTree, childPath);
        // recursive call
        if (childNode) {
          childrenResponses.push(this.flagNodesAndBuildTree(childNode!));
        }
      }
    }
    // if any of the children is to be included, then the parent is to be included
    if (
      includeParent ||
      childrenResponses.some((response) => response.includeParent)
    ) {
      // deep copy of profileTreeNode
      let constraintTreeNode = this.createConstraintTreeNode(node);
      this.constraintTree.push(constraintTreeNode);
      includeParent = true;
      this.updateChildPaths(constraintTreeNode, childrenResponses);
    }
    return { selfPath, includeParent };
  }

  private updateChildPaths(
    node: ConstraintTreeNode,
    childrenResponses: { selfPath: string; includeParent: boolean }[]
  ) {
    // update the childPaths of the node
    let newChildPaths: string[] = [];
    childrenResponses.forEach((response) => {
      if (response.includeParent) {
        newChildPaths.push(response.selfPath);
      }
    });
    node.childPaths = newChildPaths;
  }

  private handleChoiceType() {
    // find all choice nodes
    const choiceNodes = this.constraintTree.filter((node) => {
      return node.constraintPath.includes(multiTypeString);
    });
    choiceNodes.forEach((node) => {
      let parentFromChildren = this.getParentFromChildren(node);
      this.updateChoiceType(node, parentFromChildren);
    });
  }

  private getParentFromChildren(node: ConstraintTreeNode) {
    let parentFromChildren = [];
    for (let i = 0; i < node.childPaths.length; i++) {
      const childPath = node.childPaths[i];
      const indexX = node.dataPath.split(".").findIndex((element) => {
        return element.includes(multiTypeString);
      });
      parentFromChildren.push({
        parentFromChildren: childPath.split(".")[indexX],
        index: indexX,
      });
    }
    return parentFromChildren;
  }

  private updateChoiceType(
    node: ConstraintTreeNode,
    parentFromChildren: { parentFromChildren: string; index: number }[]
  ) {
    // assuming there is only one parent from children
    let pathArr = node.constraintPath.split(".");
    pathArr[parentFromChildren[0].index] =
      parentFromChildren[0].parentFromChildren;
    const updatedPath = pathArr.join(".");
    node.constraintPath = updatedPath;

    // update a path in element as well for constraint checking
    let idArr = node.element.id!.split(".");
    idArr[parentFromChildren[0].index] =
      parentFromChildren[0].parentFromChildren;
    const updatedId = idArr.join(".");
    node.element.id = updatedId;
  }
}

export interface HasConstraint {
  error: boolean;
  warning: boolean;
  guideline: boolean;
}

type GUIConstraintResolverArgs = {
  node?: ProfileTreeNode;
  orderedConstraintResults?: OrderedConstraintResults;
};

export class GUIConstraintResolver {
  // handles logic to provide GUI elements with individualized information wether they are affected from constraint issues

  private node: ProfileTreeNode;
  private orderedConstraintResults!: OrderedConstraintResults;
  private hasConstraint: HasConstraint = {
    error: false,
    warning: false,
    guideline: false,
  };

  constructor({
    node = defaultProfileTreeNode,
    orderedConstraintResults = defaultOrderedConstraintResults,
  }: GUIConstraintResolverArgs = {}) {
    this.node = node;
    this.orderedConstraintResults = orderedConstraintResults;
    this.evalHasConstraint();
  }

  private evalHasConstraint() {
    const hasError = this.orderedConstraintResults.errors.some((item) => {
      return item.node.dataPath === this.node.dataPath;
    });
    const hasWarning = this.orderedConstraintResults.warnings.some((item) => {
      return item.node.dataPath === this.node.dataPath;
    });
    const hasGuideline = this.orderedConstraintResults.guidelines.some(
      (item) => {
        return item.node.dataPath === this.node.dataPath;
      }
    );
    this.hasConstraint = {
      error: hasError,
      warning: hasWarning,
      guideline: hasGuideline,
    };
  }
  // these are not used atm, but keep for later use maybe
  // to highlight nodes in gui with constraint issues
  hasError() {
    return this.hasConstraint.error;
  }
  hasWarning() {
    return this.hasConstraint.warning;
  }
  hasGuideline() {
    return this.hasConstraint.guideline;
  }
  //
  hasConstraintIssue() {
    return (
      this.hasConstraint.error ||
      this.hasConstraint.warning ||
      this.hasConstraint.guideline
    );
  }

  getErrors() {
    const errors = this.orderedConstraintResults.errors.find((item) => {
      return item.node.dataPath === this.node.dataPath;
    })?.constraints;
    return errors;
  }
  getWarnings() {
    const warnings = this.orderedConstraintResults.warnings.find((item) => {
      return item.node.dataPath === this.node.dataPath;
    })?.constraints;
    return warnings;
  }
  getGuidelines() {
    const guidelines = this.orderedConstraintResults.guidelines.find((item) => {
      return item.node.dataPath === this.node.dataPath;
    })?.constraints;
    return guidelines;
  }

  reset() {
    this.orderedConstraintResults = { ...defaultOrderedConstraintResults };
  }
}
