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
exports.__esModule = true;
exports.buildTreeFromElementsIterative = exports.buildTreeFromElementsRecursive = exports.updateElementWithOther = exports.containsDot = void 0;
var constants_1 = require("./constants");
var TreeComponents;
(function (TreeComponents) {
    TreeComponents["PrimitveInput"] = "PrimitveInput";
    TreeComponents["ParentWrapper"] = "ParentWrapper";
})(TreeComponents || (TreeComponents = {}));
var containsDot = function (str) {
    return str.includes(".");
};
exports.containsDot = containsDot;
var updateElementWithOther = function (element, otherElement) {
    // merge element with otherElement, properties of otherElement overwrite properties of element
    var updatedElement = __assign(__assign({}, element), otherElement);
    return updatedElement;
};
exports.updateElementWithOther = updateElementWithOther;
function parseCode(code) {
    var result = code;
    if (code === "http://hl7.org/fhirpath/System.String") {
        result = "string";
    }
    return result;
}
function getTypeDefinition(type) {
    var result = null;
    var type_base_path = "../data/fhir-types/";
    var code = parseCode(type.code);
    try {
        var type_definition = require("".concat(type_base_path).concat(code, ".json"));
        result = type_definition;
    }
    catch (error) { }
    return result;
}
function isPrimitiveElement(element) {
    var result = false;
    if (element.type && element.type.length == 1) {
        var type = element.type[0];
        var type_definition = getTypeDefinition(type);
        if (type_definition && isPrimitiveType(type_definition)) {
            result = true;
        }
        if (constants_1.primitiveTypes.includes(type.code)) {
            result = true;
        }
        if (constants_1.primitiveTypes.includes(getIdSuffix(element.id))) {
            result = true;
        }
        return result;
    }
}
function isPrimitiveType(profile) {
    var result = false;
    if (profile.kind === "primitive-type") {
        result = true;
    }
    else if (profile.id === "Reference") {
        result = true;
    }
    else if (profile.id === "Identifier") {
        result = true;
    }
    return result;
}
function idExistsInTree(id, tree) {
    for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
        var node = tree_1[_i];
        if (node.path === id) {
            return true;
        }
    }
    return false;
}
function getChildElements(element) {
    var childElements = [];
    if (element.type) {
        for (var _i = 0, _a = element.type; _i < _a.length; _i++) {
            var type = _a[_i];
            var childProfile = getTypeDefinition(type);
            if (!childProfile) {
                continue;
            }
            for (var _b = 0, _c = childProfile.snapshot.element; _b < _c.length; _b++) {
                var childElement = _c[_b];
                childElements.push(childElement);
            }
        }
    }
    return childElements;
}
function getChildrenTypeDefinitions(element) {
    var childProfiles = [];
    if (element.type) {
        for (var _i = 0, _a = element.type; _i < _a.length; _i++) {
            var type = _a[_i];
            var childTypeDefinition = getTypeDefinition(type);
            childProfiles.push(childTypeDefinition);
        }
    }
    return childProfiles;
}
function getIdSuffix(id) {
    var idParts = id.split(".");
    return idParts[idParts.length - 1];
}
function buildTreeFromElementsRecursive(elements, profileTree, parentId) {
    if (profileTree === void 0) { profileTree = []; }
    if (parentId === void 0) { parentId = ""; }
    var result = profileTree;
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var element = elements_1[_i];
        if (!(0, exports.containsDot)(element.id)) {
            continue;
        }
        if (idExistsInTree(element.id, profileTree)) {
            // const existingNode = profileTree.find((node) => node.path === element.id);
            // const updatedElement = updateElementWithOther(
            //   existingNode?.element!,
            //   element
            // );
            // // update node in tree
            // existingNode!.element = updatedElement;
        }
        if (isPrimitiveElement(element)) {
            // is a primitive type
            profileTree.push({
                element: element,
                component: TreeComponents.PrimitveInput,
                parentId: parentId
            });
        }
        else {
            // is a complex type
            // add node to and add all type children
            var childrenTypeDefinitions = getChildrenTypeDefinitions(element);
            var childrenElements = [];
            for (var _a = 0, childrenTypeDefinitions_1 = childrenTypeDefinitions; _a < childrenTypeDefinitions_1.length; _a++) {
                var childType = childrenTypeDefinitions_1[_a];
                if (!childType) {
                    continue;
                }
                if (isPrimitiveType(childType)) {
                    profileTree.push({
                        element: childType.snapshot.element[0],
                        component: TreeComponents.PrimitveInput,
                        parentId: element.id
                    });
                }
                else {
                    childrenElements.push.apply(childrenElements, childType.snapshot.element);
                }
            }
            result.push({
                element: element,
                component: TreeComponents.ParentWrapper,
                parentId: element.id
            });
            profileTree.concat(buildTreeFromElementsRecursive(childrenElements, profileTree, element.id));
        }
    }
    return result;
}
exports.buildTreeFromElementsRecursive = buildTreeFromElementsRecursive;
function getChildren(element, parentPath) {
    var childElements = getChildElements(element);
}
function buildTreeFromElementsIterative(elements) {
    var profileTree = [];
    for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
        var element = elements_2[_i];
        if (!exports.containsDot) {
            continue;
        }
        else if (isPrimitiveElement(element)) {
            profileTree.push({
                element: element,
                component: TreeComponents.PrimitveInput,
                parentId: null
            });
        }
        else {
            var children = getChildren(element, element.id);
        }
    }
}
exports.buildTreeFromElementsIterative = buildTreeFromElementsIterative;
var test = function () {
    var profile = require("../data/base-profiles/Condition_profile.json");
    var elements = profile.snapshot.element;
    var tree = buildTreeFromElementsRecursive(elements, [], "");
    console.log(tree.length);
    tree.map(function (node) {
        console.log(node.element.id);
    });
};
test();
