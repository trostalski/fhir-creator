"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.incrementDataPath = exports.removeLastIndex = exports.extractIndex = exports.getDisplayPath = exports.getNthPartOfPath = exports.getPathLength = exports.mergePaths = exports.replaceMultiTypePath = exports.getPathSuffix = exports.removeNPathPartsFromStart = exports.removeNPathPartsFromEnd = exports.getSliceNames = void 0;
var constants_1 = require("./constants");
var utils_1 = require("./utils");
function getSliceNames(input) {
    var regex = /:(.*?)(\.|$)/g;
    var matches;
    var substrings = [];
    while ((matches = regex.exec(input)) !== null) {
        substrings.push(matches[1]);
    }
    return substrings;
}
exports.getSliceNames = getSliceNames;
function removeNPathPartsFromEnd(path, n) {
    var pathParts = path.split(constants_1.pathDelimiter);
    var result = pathParts.slice(0, pathParts.length - n).join(constants_1.pathDelimiter);
    return result;
}
exports.removeNPathPartsFromEnd = removeNPathPartsFromEnd;
function removeNPathPartsFromStart(path, n) {
    var pathParts = path.split(".");
    var result = pathParts.slice(n).join(".");
    return result;
}
exports.removeNPathPartsFromStart = removeNPathPartsFromStart;
function getPathSuffix(path) {
    var pathParts = path.split(".");
    var result = pathParts[pathParts.length - 1];
    return result;
}
exports.getPathSuffix = getPathSuffix;
function replaceMultiTypePath(path, // path with [x] in it
type) {
    return path.replace(constants_1.multiTypeString, (0, utils_1.capitalizeFirstLetter)(type));
}
exports.replaceMultiTypePath = replaceMultiTypePath;
function mergePaths() {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    paths = paths.filter(function (path) { return path && path.length > 0; });
    return paths.join(constants_1.pathDelimiter);
}
exports.mergePaths = mergePaths;
function getPathLength(path) {
    return path.split(constants_1.pathDelimiter).length;
}
exports.getPathLength = getPathLength;
function getNthPartOfPath(path, n) {
    var pathParts = path.split(constants_1.pathDelimiter);
    if (n === -1) {
        n = pathParts.length - 1;
    }
    return pathParts[n];
}
exports.getNthPartOfPath = getNthPartOfPath;
function getDisplayPath(node) {
    var display = getPathSuffix(node.dataPath);
    display = display.replace(display + ".", "").replace(/\[.\]/g, "");
    return display;
}
exports.getDisplayPath = getDisplayPath;
function extractIndex(str) {
    var match = str.match(/\[(\d+)\]/);
    if (match) {
        return parseInt(match[1]);
    }
    return -1; // or throw an error, if there is no index found
}
exports.extractIndex = extractIndex;
function removeLastIndex(dataPath) {
    var currSuffix = getPathSuffix(dataPath);
    var currSuffixWithoutIndex = currSuffix.replace(/\[\d+\]$/, "");
    var dataPathWithoutLastIndex = dataPath.replace(currSuffix, currSuffixWithoutIndex);
    return dataPathWithoutLastIndex;
}
exports.removeLastIndex = removeLastIndex;
function incrementDataPath(profileTree, node) {
    var newDataPath = node.dataPath.slice();
    var sliceNames;
    if ((0, utils_1.isSliceString)(newDataPath)) {
        sliceNames = getSliceNames(newDataPath);
        newDataPath = (0, utils_1.removeAfterColon)(newDataPath);
    }
    var currSuffix = getPathSuffix(newDataPath);
    var currIndex = extractIndex(currSuffix);
    var dataPathWithoutLastIndex = removeLastIndex(newDataPath);
    var nodesWithSamePath = profileTree.filter(function (n) {
        return n.parentDataPath === node.parentDataPath &&
            n.dataPath.startsWith(dataPathWithoutLastIndex);
    });
    var indices = nodesWithSamePath.map(function (n) {
        return extractIndex(getPathSuffix(n.dataPath));
    });
    var highestIndex = Math.max.apply(Math, __spreadArray(__spreadArray([], indices, false), [currIndex], false));
    if (highestIndex >= 0) {
        newDataPath = newDataPath.replace(/\[\d+\]$/, "[".concat(highestIndex + 1, "]"));
        if (sliceNames) {
            newDataPath = newDataPath + ":" + sliceNames[sliceNames.length - 1];
        }
        return newDataPath;
    }
    return node.dataPath.slice();
}
exports.incrementDataPath = incrementDataPath;
