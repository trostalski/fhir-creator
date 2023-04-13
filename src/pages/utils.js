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
exports.createJsonFromPathArray = exports.createJsonFromPathList = exports.mergeDifferentialWithSnapshot = exports.mergeSliceElement = exports.formatInputDataForResource = exports.removeBetweenColonAndPeriod = exports.isSliceElement = exports.removeAfterColon = exports.formatIdForPath = exports.getBaseUrl = exports.elementContainsValidType = exports.getResourceTypeFromUrl = exports.getUid = exports.isFhirBaseDefinition = exports.idIsImportant = exports.isMultiTypeString = exports.removeMultiTypeString = exports.parseMaxString = exports.containsDifferential = exports.containsSnapshot = exports.containsDot = exports.removeDots = void 0;
var constants_1 = require("./constants");
var buildTree_1 = require("./buildTree");
var removeDots = function (str) {
    return str.replace(/\./g, "");
};
exports.removeDots = removeDots;
var containsDot = function (str) {
    return str.includes(".");
};
exports.containsDot = containsDot;
var containsSnapshot = function (profile) {
    return "snapshot" in profile;
};
exports.containsSnapshot = containsSnapshot;
var containsDifferential = function (profile) {
    return "differential" in profile;
};
exports.containsDifferential = containsDifferential;
var parseMaxString = function (str) {
    if (str === "*") {
        return Infinity;
    }
    else {
        return parseInt(str);
    }
};
exports.parseMaxString = parseMaxString;
function removeMultiTypeString(str) {
    return str.replace(/\[x\]/g, "");
}
exports.removeMultiTypeString = removeMultiTypeString;
function isMultiTypeString(str) {
    return str.includes("[x]");
}
exports.isMultiTypeString = isMultiTypeString;
var idIsImportant = function (id) {
    var result = true;
    var idParts = id.split(".");
    for (var _i = 0, idParts_1 = idParts; _i < idParts_1.length; _i++) {
        var part = idParts_1[_i];
        if (constants_1.notImportantIdSuffices.includes(part)) {
            result = false;
            break;
        }
    }
    return result;
};
exports.idIsImportant = idIsImportant;
var isFhirBaseDefinition = function (url) {
    return url.startsWith("http://hl7.org/fhir/StructureDefinition/");
};
exports.isFhirBaseDefinition = isFhirBaseDefinition;
var getUid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
exports.getUid = getUid;
var getResourceTypeFromUrl = function (url) {
    var urlParts = url.split("/");
    return urlParts[urlParts.length - 1];
};
exports.getResourceTypeFromUrl = getResourceTypeFromUrl;
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
var formatIdForPath = function (id, type, resourceType) {
    var result = id;
    if (id.startsWith(resourceType + ".")) {
        result = id.replace(resourceType + ".", "");
    }
    if (isMultiTypeString(id)) {
        result = removeMultiTypeString(result);
        result = result + type;
    }
    return result;
};
exports.formatIdForPath = formatIdForPath;
var elmentsHaveSameIdStem = function (element1, element2) {
    var result = false;
    // remove first path element
    var id1 = element1.id.split(".").slice(1).join(".");
    var id2 = element2.id.split(".").slice(1).join(".");
    if (id1.startsWith(id2 + ".") || id1.startsWith(id2 + ":")) {
        result = true;
    }
    return result;
};
var removeAfterColon = function (str) {
    var colonIndex = str.indexOf(":");
    return colonIndex >= 0 ? str.slice(0, colonIndex) : str;
};
exports.removeAfterColon = removeAfterColon;
var isSliceElement = function (element) {
    return element.id.includes(":");
};
exports.isSliceElement = isSliceElement;
var removeBetweenColonAndPeriod = function (str) {
    var regex = /:[^.]*(?=\.)/g;
    return str.replace(regex, "").replace(":", "");
};
exports.removeBetweenColonAndPeriod = removeBetweenColonAndPeriod;
var removeSlicePathsFromInputData = function (inputData) {
    var result = inputData.map(function (data) {
        var newData = __assign({}, data);
        newData.path = (0, exports.removeBetweenColonAndPeriod)(data.path);
        return newData;
    });
    return result;
};
var formatInputDataForResource = function (inputData) {
    var result;
    result = removeSlicePathsFromInputData(inputData);
    return result;
};
exports.formatInputDataForResource = formatInputDataForResource;
var mergeSliceElement = function (sliceElement, baseElements, differentialElements) {
    var updatedElement;
    var diffElement = differentialElements.find(function (element) { return element.path === sliceElement.path; });
    if (diffElement) {
        updatedElement = (0, buildTree_1.updateElementWithOther)(diffElement, sliceElement);
    }
    var baseElement = baseElements.find(function (element) { return element.path === sliceElement.path; });
    if (baseElement) {
        updatedElement = (0, buildTree_1.updateElementWithOther)(baseElement, sliceElement);
    }
    if (updatedElement) {
        return updatedElement;
    }
    else {
        return sliceElement;
    }
};
exports.mergeSliceElement = mergeSliceElement;
var mergeDifferentialWithSnapshot = function (baseProfile, differentialProfile) {
    var elements = [];
    // elements that exist in base profile
    elements = baseProfile.snapshot.element.map(function (baseElement) {
        var differentialElement = differentialProfile.differential.element.find(function (diffElement) { return diffElement.id === baseElement.id; });
        if (differentialElement) {
            // update base element with differential element
            return (0, buildTree_1.updateElementWithOther)(baseElement, differentialElement);
        }
        return baseElement;
    });
    var _loop_1 = function (differentialElement) {
        if ((0, exports.isSliceElement)(differentialElement)) {
            differentialElement = (0, exports.mergeSliceElement)(differentialElement, elements, differentialProfile.differential.element);
        }
        var elementExists = elements.some(function (element) { return element.id === differentialElement.id; });
        if (!elementExists) {
            var foundElement = false;
            for (var index = 0; index < elements.length; index++) {
                // if slice element, merge with base element without slice paths in id
                var element = elements[index];
                if (elmentsHaveSameIdStem(differentialElement, element)) {
                    elements.splice(index + 1, 0, differentialElement);
                    foundElement = true;
                    break;
                }
            }
            if (!foundElement) {
                elements.push(differentialElement);
            }
        }
    };
    // new elements that dont exist in base profile
    for (var _i = 0, _a = differentialProfile.differential.element; _i < _a.length; _i++) {
        var differentialElement = _a[_i];
        _loop_1(differentialElement);
    }
    return elements;
};
exports.mergeDifferentialWithSnapshot = mergeDifferentialWithSnapshot;
function createJsonFromPathList(pathList, value) {
    var result = {}; // Initialize the result object
    for (var _i = 0, pathList_1 = pathList; _i < pathList_1.length; _i++) {
        var pathString = pathList_1[_i];
        var current = result; // Initialize the current object to the result object
        var pathArray = pathString.split("."); // Split the path string into an array of property names
        for (var i = 0; i < pathArray.length; i++) {
            var prop = pathArray[i];
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
        current = value; // Set the value at the final property
    }
    return result;
}
exports.createJsonFromPathList = createJsonFromPathList;
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
        var _loop_2 = function (key) {
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
            _loop_2(key);
        }
        return result;
    }
    return convertNumericKeysToArrays(result);
}
exports.createJsonFromPathArray = createJsonFromPathArray;
