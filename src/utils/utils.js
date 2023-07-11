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
exports.checkCardinalities = exports.getPathsWithInvalidCardinality = exports.createJsonFromPathArray = exports.convertObjectToPathArray = exports.removeNullValues = exports.extractPathValuePairs = exports.shouldDisplayNode = exports.formatInputDataForResource = exports.removeBetweenColonAndPeriod = exports.isSliceString = exports.isSliceElement = exports.removeAfterColon = exports.getBaseUrl = exports.elementContainsValidType = exports.getResourceTypeFromProfile = exports.getResourceTypeFromUrl = exports.getUid = exports.isBaseUrl = exports.idIsImportant = exports.getBranchId = exports.arraysEqual = exports.isMultiTypeElement = exports.removeMultiTypeString = exports.isMultiTypeString = exports.elementExpectsArray = exports.getElementTypes = exports.getIndexString = exports.parseMaxString = exports.capitalizeFirstLetter = exports.containsDifferential = exports.containsSnapshot = exports.isUrl = exports.logWithCopy = exports.containsDot = void 0;
var constants_1 = require("./constants");
var path_utils_1 = require("./path_utils");
var tree_utils_1 = require("./tree_utils");
var uniq_1 = __importDefault(require("lodash/uniq"));
var containsDot = function (str) {
    return str.includes(".");
};
exports.containsDot = containsDot;
function logWithCopy() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] === "object") {
            var c = structuredClone(args[i]);
            console.log(c);
        }
        else {
            console.log(arguments[i]);
        }
    }
}
exports.logWithCopy = logWithCopy;
var isUrl = function (string) {
    try {
        new URL(string);
    }
    catch (_) {
        return false;
    }
    return true;
};
exports.isUrl = isUrl;
var containsSnapshot = function (profile) {
    return "snapshot" in profile;
};
exports.containsSnapshot = containsSnapshot;
var containsDifferential = function (profile) {
    return "differential" in profile;
};
exports.containsDifferential = containsDifferential;
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
var parseMaxString = function (str) {
    if (str === "*") {
        return Infinity;
    }
    else {
        return parseInt(str);
    }
};
exports.parseMaxString = parseMaxString;
function getIndexString(index) {
    return "[".concat(index, "]");
}
exports.getIndexString = getIndexString;
function getElementTypes(element) {
    var _a;
    return (_a = element.type) === null || _a === void 0 ? void 0 : _a.map(function (type) { return type.code; });
}
exports.getElementTypes = getElementTypes;
function elementExpectsArray(element) {
    var result = false;
    if (element.max &&
        (0, exports.parseMaxString)(element.max) > 1 &&
        (0, exports.containsDot)(element.id)) {
        result = true;
    }
    return result;
}
exports.elementExpectsArray = elementExpectsArray;
function isMultiTypeString(string) {
    return string.includes(constants_1.multiTypeString);
}
exports.isMultiTypeString = isMultiTypeString;
function removeMultiTypeString(str) {
    return str.replace(/\[x\]/g, "");
}
exports.removeMultiTypeString = removeMultiTypeString;
function isMultiTypeElement(element) {
    var result = false;
    if (element.type && element.type.length > 0 && element.path.includes("[x]")) {
        result = true;
    }
    return result;
}
exports.isMultiTypeElement = isMultiTypeElement;
function arraysEqual(a, b) {
    // from https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
    if (a === b)
        return true;
    if (a == null || b == null)
        return false;
    if (a.length !== b.length)
        return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}
exports.arraysEqual = arraysEqual;
function getBranchId(id) {
    return (0, path_utils_1.removeNPathPartsFromStart)(id, 1);
}
exports.getBranchId = getBranchId;
var idIsImportant = function (id) {
    var result = true;
    if (constants_1.notImportantIdSuffices.includes(id)) {
        result = false;
    }
    return result;
};
exports.idIsImportant = idIsImportant;
var isBaseUrl = function (url) {
    return url.includes("hl7.org");
};
exports.isBaseUrl = isBaseUrl;
var getUid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
exports.getUid = getUid;
var getResourceTypeFromUrl = function (url) {
    var urlParts = url.split("/");
    return urlParts[urlParts.length - 1];
};
exports.getResourceTypeFromUrl = getResourceTypeFromUrl;
var getResourceTypeFromProfile = function (profile) {
    var _a, _b;
    var result = undefined;
    if ((0, exports.containsSnapshot)(profile)) {
        result = (_a = profile.snapshot.element[0].id) === null || _a === void 0 ? void 0 : _a.split(".")[0];
    }
    else if ((0, exports.containsDifferential)(profile)) {
        result = (_b = profile.differential.element[0].id) === null || _b === void 0 ? void 0 : _b.split(".")[0];
    }
    return result;
};
exports.getResourceTypeFromProfile = getResourceTypeFromProfile;
var elementContainsValidType = function (element) {
    var result = true;
    var types = element.type;
    if (types === undefined || types.length === 0) {
        result = false;
    }
    types === null || types === void 0 ? void 0 : types.forEach(function (type) {
        if (type.code.includes("BackboneElement")) {
            result = false;
        }
    });
    return result;
};
exports.elementContainsValidType = elementContainsValidType;
var getBaseUrl = function (profile) {
    return profile.baseDefinition;
};
exports.getBaseUrl = getBaseUrl;
var removeAfterColon = function (str) {
    var colonIndex = str.indexOf(":");
    return colonIndex >= 0 ? str.slice(0, colonIndex) : str;
};
exports.removeAfterColon = removeAfterColon;
var isSliceElement = function (element) {
    return element.id.includes(constants_1.sliceDelimiter);
};
exports.isSliceElement = isSliceElement;
var isSliceString = function (str) {
    return str.includes(constants_1.sliceDelimiter);
};
exports.isSliceString = isSliceString;
var removeBetweenColonAndPeriod = function (str) {
    var regex = /:[^.]*(?=\.)/g;
    return str.replace(regex, "").replace(":", "");
};
exports.removeBetweenColonAndPeriod = removeBetweenColonAndPeriod;
var getCharsAfterVar = function (str, variable, n) {
    var index = str.indexOf(variable);
    if (index < 0) {
        return "";
    }
    else if (index + variable.length + n > str.length) {
        return str.substring(index + variable.length);
    }
    else {
        return str.substring(index + variable.length, index + variable.length + n);
    }
};
var formatInputDataForResource = function (inputData) {
    // TODO this is a mess
    inputData = inputData.sort(function (a, b) {
        if (a.path < b.path) {
            return -1;
        }
        else if (a.path > b.path) {
            return 1;
        }
        else {
            return 0;
        }
    });
    var result;
    result = inputData.map(function (data) {
        var path = data.path;
        if (path.includes(":")) {
            var indexRegex_1 = /\[(\d+)\]/;
            var sliceNames = (0, path_utils_1.getSliceNames)(path);
            var _loop_1 = function (sliceName) {
                var slicePart = path
                    .split(".")
                    .filter(function (part) { return part.includes(sliceName); })[0];
                var startPart = path.substring(0, path.indexOf(sliceName) - 4);
                if (indexRegex_1.test(slicePart)) {
                    var t = inputData.filter(function (data) {
                        return data.path.startsWith(startPart);
                    });
                    var prevIndeces = inputData
                        .filter(function (data) { return data.path.startsWith(startPart); })
                        .map(function (d) {
                        var indexPart = getCharsAfterVar(d.path, startPart, 4);
                        var match = indexRegex_1.exec(indexPart);
                        return match ? parseInt(match[1]) : -1;
                    });
                    var maxPrevIndex = Math.max.apply(Math, prevIndeces);
                    if (maxPrevIndex < prevIndeces.length) {
                        var currentStart_1 = path.substring(0, path.indexOf(sliceName) + sliceName.length);
                        var newStartPart_1 = startPart + "[" + (maxPrevIndex + 1) + "]";
                        inputData = inputData.map(function (data) {
                            if (data.path.startsWith(currentStart_1)) {
                                data.path = data.path.replace(currentStart_1, newStartPart_1);
                            }
                            return data;
                        });
                    }
                }
            };
            for (var _i = 0, sliceNames_1 = sliceNames; _i < sliceNames_1.length; _i++) {
                var sliceName = sliceNames_1[_i];
                _loop_1(sliceName);
            }
        }
        var newData = __assign({}, data);
        var newPath = (0, exports.removeBetweenColonAndPeriod)(data.path);
        newPath = (0, path_utils_1.removeNPathPartsFromStart)(newPath, 1); // remove root
        newData.path = newPath;
        return newData;
    });
    return result;
};
exports.formatInputDataForResource = formatInputDataForResource;
function shouldDisplayNode(node, checkedBranchIds) {
    var result = true;
    if (node.parentDataPath === constants_1.rootName) {
        result = checkedBranchIds.includes(getBranchId(node.baseId));
    }
    return result;
}
exports.shouldDisplayNode = shouldDisplayNode;
function extractPathValuePairs(profileTree) {
    var inputData = profileTree
        .filter(function (node) { return node.value; })
        .map(function (node) { return ({
        path: node.dataPath,
        value: node.value
    }); });
    return inputData;
}
exports.extractPathValuePairs = extractPathValuePairs;
function removeNullValues(obj) {
    // remoces null values from json
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(removeNullValues).filter(function (val) { return val !== null; });
    }
    return Object.entries(obj)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, removeNullValues(value)];
    })
        .reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        if (value !== null) {
            acc[key] = value;
        }
        return acc;
    }, {});
}
exports.removeNullValues = removeNullValues;
function convertObjectToPathArray(obj) {
    var result = [];
    function traverseObject(obj, currentPath) {
        if (currentPath === void 0) { currentPath = ""; }
        var _loop_2 = function (key) {
            if (obj.hasOwnProperty(key)) {
                var value = obj[key];
                var newPath_1 = currentPath ? "".concat(currentPath, ".").concat(key) : key;
                if (Array.isArray(value)) {
                    value.forEach(function (item, index) {
                        var arrayPath = "".concat(newPath_1, "[").concat(index, "]");
                        if (typeof item === "object") {
                            traverseObject(item, arrayPath);
                        }
                        else {
                            result.push({ path: arrayPath, value: item });
                        }
                    });
                }
                else if (typeof value === "object") {
                    traverseObject(value, newPath_1);
                }
                else {
                    result.push({ path: newPath_1, value: value });
                }
            }
        };
        for (var key in obj) {
            _loop_2(key);
        }
    }
    traverseObject(obj);
    return result;
}
exports.convertObjectToPathArray = convertObjectToPathArray;
// currently in use
function createJsonFromPathArray(pathArray) {
    var result = {}; // Initialize the result object
    for (var _i = 0, pathArray_1 = pathArray; _i < pathArray_1.length; _i++) {
        var pathObj = pathArray_1[_i];
        var id = pathObj.path, value = pathObj.value;
        var current = result; // Initialize the current object to the result object
        var pathArray_2 = id.split("."); // Split the path string into an array of property names
        for (var i = 0; i < pathArray_2.length - 1; i++) {
            var prop = pathArray_2[i];
            var isArray = /\[\d+\]$/.test(prop); // Check if the property is an array index
            if (isArray) {
                var arrayProp = prop.substring(0, prop.indexOf("["));
                var index = parseInt(prop.substring(prop.indexOf("[") + 1, prop.indexOf("]")));
                current[arrayProp] = current[arrayProp] || [];
                current = current[arrayProp];
                current[index] = current[index] || {};
                current = current[index];
            }
            else {
                current[prop] = current[prop] || {};
                current = current[prop];
            }
        }
        var lastProp = pathArray_2[pathArray_2.length - 1];
        var lastIsArray = /\[\d+\]$/.test(lastProp); // Check if the last property is an array index
        if (lastIsArray) {
            var lastArrayProp = lastProp.substring(0, lastProp.indexOf("["));
            var lastIndex = parseInt(lastProp.substring(lastProp.indexOf("[") + 1, lastProp.indexOf("]")));
            current[lastArrayProp] = current[lastArrayProp] || [];
            current[lastArrayProp][lastIndex] = value;
        }
        else {
            current[lastProp] = value;
        }
    }
    // Convert any objects with numeric keys to arrays
    function convertNumericKeysToArrays(obj) {
        var result = {};
        var _loop_3 = function (key) {
            var value = obj[key];
            if (typeof value === "object" && !Array.isArray(value)) {
                var numericKeys = Object.keys(value)
                    .map(function (k) { return parseInt(k); })
                    .filter(function (k) { return !isNaN(k); });
                if (numericKeys.length > 0) {
                    var arrayValue = numericKeys.map(function (k) { return value[k]; });
                    result[key] = arrayValue;
                }
                else {
                    result[key] = convertNumericKeysToArrays(value);
                }
            }
            else {
                result[key] = value;
            }
        };
        for (var key in obj) {
            _loop_3(key);
        }
        return result;
    }
    return removeNullValues(convertNumericKeysToArrays(result));
}
exports.createJsonFromPathArray = createJsonFromPathArray;
function getCardinality(profileTreeNode) {
    var cardinality = { min: 0, max: "0" };
    if (profileTreeNode.element.min) {
        cardinality.min = profileTreeNode.element.min;
    }
    if (profileTreeNode.element.max) {
        cardinality.max = profileTreeNode.element.max;
    }
    return cardinality;
}
function getChildrenForNode(profileTree, profileTreeNode) {
    var children = [];
    for (var _i = 0, _a = profileTreeNode.childPaths; _i < _a.length; _i++) {
        var childDataPath = _a[_i];
        var childNode = (0, tree_utils_1.getNodeByDataPath)(profileTree, childDataPath);
        children.push(childNode);
    }
    return children;
}
function existsInInputData(inputData, dataPath) {
    var path;
    if (isMultiTypeString(dataPath)) {
        path = removeMultiTypeString(dataPath);
    }
    else {
        path = dataPath;
    }
    var exists = inputData.some(function (data) { return data.path.startsWith(path); });
    return exists;
}
function hasValue(inputData, path) {
    var exists = inputData.some(function (data) { return data.path === path && data.value; });
    return exists;
}
function getPathsWithInvalidCardinality(profileTree, dataPath, inputData, notMetPaths) {
    var profileTreeNode = (0, tree_utils_1.getNodeByDataPath)(profileTree, dataPath);
    var cardinality = getCardinality(profileTreeNode);
    var isPrimitive = profileTreeNode.isPrimitive;
    var hasChildren = profileTreeNode.childPaths.length > 0;
    if (cardinality.min > 0 && !existsInInputData(inputData, dataPath)) {
        notMetPaths.push(dataPath);
    }
    if (hasChildren && existsInInputData(inputData, dataPath)) {
        var children = getChildrenForNode(profileTree, profileTreeNode);
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            if (child.element.sliceName) {
                // if the child is a slice, check if any of its children have a value
                var children_2 = getChildrenForNode(profileTree, child);
                if (!children_2.some(function (child) { return child.value !== ""; })) {
                    continue;
                }
            }
            var childPath = child.dataPath;
            getPathsWithInvalidCardinality(profileTree, childPath, inputData, notMetPaths);
        }
    }
    if (isPrimitive && cardinality.min > 0 && !hasValue(inputData, dataPath)) {
        notMetPaths.push(dataPath);
    }
}
exports.getPathsWithInvalidCardinality = getPathsWithInvalidCardinality;
function checkCardinalities(profileTree, inputData) {
    var isValid = true;
    var pathsWithInvalidCardinality = [];
    var branchNodes = profileTree.filter(function (node) { return node.parentDataPath === constants_1.rootName; });
    for (var _i = 0, branchNodes_1 = branchNodes; _i < branchNodes_1.length; _i++) {
        var child = branchNodes_1[_i];
        var dataPath = child.dataPath;
        getPathsWithInvalidCardinality(profileTree, dataPath, inputData, pathsWithInvalidCardinality);
        if (pathsWithInvalidCardinality.length > 0) {
            isValid = false;
        }
    }
    return {
        isValid: isValid,
        pathsWithInvalidCardinality: (0, uniq_1["default"])(pathsWithInvalidCardinality)
    };
}
exports.checkCardinalities = checkCardinalities;
