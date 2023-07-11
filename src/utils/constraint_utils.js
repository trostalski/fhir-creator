"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.GUIConstraintResolver = exports.ConstraintResolver = void 0;
var fhirpath_1 = __importDefault(require("fhirpath"));
var constants_1 = require("./constants");
var tree_utils_1 = require("./tree_utils");
var ConstraintResolver = /** @class */ (function () {
    function ConstraintResolver(profileTree, resource) {
        this.rootDataPath = "root";
        this.severityLevels = {
            error: "error",
            warning: "warning",
            guideline: "guideline"
        };
        this.profileTree = profileTree;
        this.resource = resource;
        this.constraintTree = [];
        this.evaluationResults = [];
        this.orderedEvaluationResults = {
            errors: [],
            warnings: [],
            guidelines: []
        };
        this.createConstraintTree();
        this.evaluate();
        this.orderEvaluationResult();
    }
    ConstraintResolver.prototype.getEvaluationResult = function () {
        return this.orderedEvaluationResults;
    };
    ConstraintResolver.prototype.orderEvaluationResult = function () {
        var errors = this.getSeverityLevel(this.severityLevels.error);
        var warnings = this.getSeverityLevel(this.severityLevels.warning);
        var guidelines = this.getSeverityLevel(this.severityLevels.guideline);
        this.orderedEvaluationResults = {
            errors: errors,
            warnings: warnings,
            guidelines: guidelines
        };
    };
    ConstraintResolver.prototype.getSeverityLevel = function (severityLevel) {
        // assert that severityLevel is one of "error", "warning", "guideline"
        var severityLevels = ["error", "warning", "guideline"];
        if (!severityLevels.includes(severityLevel)) {
            throw new Error("severityLevel must be one of 'error', 'warning', 'guideline'");
        }
        var severityLevelResults = [];
        this.evaluationResults.forEach(function (result) {
            var foundConstraints = [];
            result.constraints.forEach(function (constraint) {
                if (constraint.severity === severityLevel) {
                    foundConstraints.push(constraint);
                }
            });
            if (foundConstraints.length > 0) {
                var severityLevelResult = {
                    node: result.node,
                    constraints: foundConstraints
                };
                severityLevelResults.push(severityLevelResult);
            }
        });
        return severityLevelResults;
    };
    ConstraintResolver.prototype.evaluate = function () {
        var _this = this;
        this.constraintTree.forEach(function (node) {
            var constraints = node.element.constraint;
            if (constraints) {
                var failedConstraints_1 = [];
                constraints.forEach(function (constraint) {
                    var expression = [node.element.id, constraint.expression].join(".");
                    if (expression) {
                        var result = fhirpath_1["default"].evaluate(_this.resource, expression);
                        if (!result[0]) {
                            failedConstraints_1.push(constraint);
                        }
                    }
                });
                if (failedConstraints_1.length > 0) {
                    _this.evaluationResults.push({
                        node: node,
                        constraints: failedConstraints_1
                    });
                }
            }
        });
    };
    ConstraintResolver.prototype.addRootNode = function () {
        var _this = this;
        var rootNode = this.profileTree.find(function (item) {
            return item.dataPath === _this.rootDataPath;
        });
        if (rootNode) {
            var constraintTreeNode = this.createConstraintTreeNode(rootNode);
            this.constraintTree.push(constraintTreeNode);
        }
    };
    ConstraintResolver.prototype.createConstraintTreeNode = function (node) {
        var constraintTreeNode = __assign(__assign({}, JSON.parse(JSON.stringify(node))), { constraintPath: node.dataPath });
        return constraintTreeNode;
    };
    ConstraintResolver.prototype.createConstraintTree = function () {
        var firstChildren;
        firstChildren = (0, tree_utils_1.getFirstChildren)(this.profileTree);
        firstChildren.forEach(this.flagNodesAndBuildTree, this);
        this.handleChoiceType();
        this.addRootNode();
        this.ensureElementIds();
    };
    ConstraintResolver.prototype.ensureElementIds = function () {
        var _this = this;
        // the profile tree nodes that were created from complex types do not have correct id in their element
        // correct IDs needed for correct expression generation
        var resourceType = this.getResourceType();
        if (resourceType) {
            this.constraintTree.forEach(function (node) {
                _this.updateBaseId(node, resourceType);
            });
        }
    };
    ConstraintResolver.prototype.updateBaseId = function (node, resourceType) {
        var constraintPath = node.constraintPath;
        if (constraintPath) {
            var updatedPath = constraintPath.replace(this.rootDataPath, resourceType);
            node.element.id = updatedPath;
        }
        else {
            console.log("No constraint path defined for ", node);
        }
    };
    ConstraintResolver.prototype.getResourceType = function () {
        var rootNode = this.getRootNode();
        var resourceType = rootNode === null || rootNode === void 0 ? void 0 : rootNode.baseId;
        return resourceType;
    };
    ConstraintResolver.prototype.getRootNode = function () {
        var _this = this;
        var rootNode = this.constraintTree.find(function (node) {
            return node.dataPath === _this.rootDataPath;
        });
        return rootNode;
    };
    // recursive method to parse profileTree for constraintTree construction
    // a node is to be included if a descendant is primitive with value
    ConstraintResolver.prototype.flagNodesAndBuildTree = function (node) {
        var includeParent = false;
        var childrenResponses = [];
        var selfPath = node.dataPath;
        // end of recursion
        if (node.isPrimitive && node.value) {
            includeParent = true;
        }
        else if (node.childPaths.length > 0) {
            for (var i = 0; i < node.childPaths.length; i++) {
                var childPath = node.childPaths[i];
                var childNode = (0, tree_utils_1.getNodeByDataPath)(this.profileTree, childPath);
                // recursive call
                if (childNode) {
                    childrenResponses.push(this.flagNodesAndBuildTree(childNode));
                }
            }
        }
        // if any of the children is to be included, then the parent is to be included
        if (includeParent ||
            childrenResponses.some(function (response) { return response.includeParent; })) {
            // deep copy of profileTreeNode
            var constraintTreeNode = this.createConstraintTreeNode(node);
            this.constraintTree.push(constraintTreeNode);
            includeParent = true;
            this.updateChildPaths(constraintTreeNode, childrenResponses);
        }
        return { selfPath: selfPath, includeParent: includeParent };
    };
    ConstraintResolver.prototype.updateChildPaths = function (node, childrenResponses) {
        // update the childPaths of the node
        var newChildPaths = [];
        childrenResponses.forEach(function (response) {
            if (response.includeParent) {
                newChildPaths.push(response.selfPath);
            }
        });
        node.childPaths = newChildPaths;
    };
    ConstraintResolver.prototype.handleChoiceType = function () {
        var _this = this;
        // find all choice nodes
        var choiceNodes = this.constraintTree.filter(function (node) {
            return node.constraintPath.includes(constants_1.multiTypeString);
        });
        choiceNodes.forEach(function (node) {
            var parentFromChildren = _this.getParentFromChildren(node);
            _this.updateChoiceType(node, parentFromChildren);
        });
    };
    ConstraintResolver.prototype.getParentFromChildren = function (node) {
        var parentFromChildren = [];
        for (var i = 0; i < node.childPaths.length; i++) {
            var childPath = node.childPaths[i];
            var indexX = node.dataPath.split(".").findIndex(function (element) {
                return element.includes(constants_1.multiTypeString);
            });
            parentFromChildren.push({
                parentFromChildren: childPath.split(".")[indexX],
                index: indexX
            });
        }
        return parentFromChildren;
    };
    ConstraintResolver.prototype.updateChoiceType = function (node, parentFromChildren) {
        // assuming there is only one parent from children
        var pathArr = node.constraintPath.split(".");
        pathArr[parentFromChildren[0].index] =
            parentFromChildren[0].parentFromChildren;
        var updatedPath = pathArr.join(".");
        node.constraintPath = updatedPath;
        // update a path in element as well for constraint checking
        var idArr = node.element.id.split(".");
        idArr[parentFromChildren[0].index] =
            parentFromChildren[0].parentFromChildren;
        var updatedId = idArr.join(".");
        node.element.id = updatedId;
    };
    return ConstraintResolver;
}());
exports.ConstraintResolver = ConstraintResolver;
var GUIConstraintResolver = /** @class */ (function () {
    function GUIConstraintResolver(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.node, node = _c === void 0 ? constants_1.defaultProfileTreeNode : _c, _d = _b.orderedConstraintResults, orderedConstraintResults = _d === void 0 ? constants_1.defaultOrderedConstraintResults : _d;
        this.hasConstraint = {
            error: false,
            warning: false,
            guideline: false
        };
        this.node = node;
        this.orderedConstraintResults = orderedConstraintResults;
        this.evalHasConstraint();
    }
    GUIConstraintResolver.prototype.evalHasConstraint = function () {
        var _this = this;
        var hasError = this.orderedConstraintResults.errors.some(function (item) {
            return item.node.dataPath === _this.node.dataPath;
        });
        var hasWarning = this.orderedConstraintResults.warnings.some(function (item) {
            return item.node.dataPath === _this.node.dataPath;
        });
        var hasGuideline = this.orderedConstraintResults.guidelines.some(function (item) {
            return item.node.dataPath === _this.node.dataPath;
        });
        this.hasConstraint = {
            error: hasError,
            warning: hasWarning,
            guideline: hasGuideline
        };
    };
    // these are not used atm, but keep for later use maybe
    // to highlight nodes in gui with constraint issues
    GUIConstraintResolver.prototype.hasError = function () {
        return this.hasConstraint.error;
    };
    GUIConstraintResolver.prototype.hasWarning = function () {
        return this.hasConstraint.warning;
    };
    GUIConstraintResolver.prototype.hasGuideline = function () {
        return this.hasConstraint.guideline;
    };
    //
    GUIConstraintResolver.prototype.hasConstraintIssue = function () {
        return (this.hasConstraint.error ||
            this.hasConstraint.warning ||
            this.hasConstraint.guideline);
    };
    GUIConstraintResolver.prototype.getErrors = function () {
        var _this = this;
        var _a;
        var errors = (_a = this.orderedConstraintResults.errors.find(function (item) {
            return item.node.dataPath === _this.node.dataPath;
        })) === null || _a === void 0 ? void 0 : _a.constraints;
        return errors;
    };
    GUIConstraintResolver.prototype.getWarnings = function () {
        var _this = this;
        var _a;
        var warnings = (_a = this.orderedConstraintResults.warnings.find(function (item) {
            return item.node.dataPath === _this.node.dataPath;
        })) === null || _a === void 0 ? void 0 : _a.constraints;
        return warnings;
    };
    GUIConstraintResolver.prototype.getGuidelines = function () {
        var _this = this;
        var _a;
        var guidelines = (_a = this.orderedConstraintResults.guidelines.find(function (item) {
            return item.node.dataPath === _this.node.dataPath;
        })) === null || _a === void 0 ? void 0 : _a.constraints;
        return guidelines;
    };
    GUIConstraintResolver.prototype.reset = function () {
        this.orderedConstraintResults = __assign({}, constants_1.defaultOrderedConstraintResults);
    };
    return GUIConstraintResolver;
}());
exports.GUIConstraintResolver = GUIConstraintResolver;
