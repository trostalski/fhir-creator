"use strict";
exports.__esModule = true;
exports.nodeIsType = exports.getExpansionBgColour = exports.deleteBranch = exports.getFirstChildren = exports.duplicateBranch = exports.updateNode = exports.insertAfterNode = exports.getChildNodes = exports.getBranchIds = exports.getNodeByDataPath = exports.getLastDescendant = exports.getAllDescendants = exports.copyAllDescendants = exports.extractDirectChildren = exports.extractDirectChildrenPaths = void 0;
var constants_1 = require("./constants");
var path_utils_1 = require("./path_utils");
var utils_1 = require("./utils");
function extractDirectChildrenPaths(parentPath, childPaths) {
    var directChildren = [];
    for (var _i = 0, childPaths_1 = childPaths; _i < childPaths_1.length; _i++) {
        var childPath = childPaths_1[_i];
        if ((0, path_utils_1.getPathLength)(childPath) === (0, path_utils_1.getPathLength)(parentPath) + 1) {
            directChildren.push(childPath);
        }
    }
    return directChildren;
}
exports.extractDirectChildrenPaths = extractDirectChildrenPaths;
function extractDirectChildren(parentNode, childNodes) {
    var directChildren = [];
    for (var _i = 0, childNodes_1 = childNodes; _i < childNodes_1.length; _i++) {
        var childNode = childNodes_1[_i];
        if ((0, path_utils_1.getPathLength)(childNode.dataPath) ===
            (0, path_utils_1.getPathLength)(parentNode.dataPath) + 1) {
            directChildren.push(childNode);
        }
    }
    return directChildren;
}
exports.extractDirectChildren = extractDirectChildren;
function copyAllDescendants(node, profileTree, types) {
    var descendants = [];
    var childPaths = node.childPaths.slice(); // first level copy
    if (types) {
        childPaths = childPaths.filter(function (path) {
            for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
                var type = types_1[_i];
                if (path.toLowerCase().includes(type.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
    }
    while (childPaths.length > 0) {
        var childPath = childPaths.shift();
        var existingChildNode = getNodeByDataPath(profileTree, childPath);
        var childNodeCopy = structuredClone(existingChildNode);
        if (childNodeCopy) {
            descendants.push(childNodeCopy);
            childPaths = childPaths.concat(childNodeCopy.childPaths);
        }
    }
    return descendants;
}
exports.copyAllDescendants = copyAllDescendants;
function getAllDescendants(profileTree, node, types) {
    var descendants = [];
    var childPaths = node.childPaths.slice(); // first level copy
    if (types) {
        childPaths = childPaths.filter(function (path) {
            for (var _i = 0, types_2 = types; _i < types_2.length; _i++) {
                var type = types_2[_i];
                if (path.toLowerCase().includes(type.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
    }
    var _loop_1 = function () {
        var childPath = childPaths.shift();
        var childNode = profileTree.find(function (node) { return node.dataPath === childPath; });
        if (childNode) {
            descendants.push(childNode);
            childPaths = childPaths.concat(childNode.childPaths);
        }
    };
    while (childPaths.length > 0) {
        _loop_1();
    }
    return descendants;
}
exports.getAllDescendants = getAllDescendants;
function getLastDescendant(profileTree, node) {
    // returns the last descendant or the node itself if it has no descendants
    var descendants = getAllDescendants(profileTree, node);
    if (descendants.length > 0) {
        return descendants[descendants.length - 1];
    }
    return node;
}
exports.getLastDescendant = getLastDescendant;
function getNodeByDataPath(nodes, dataPath) {
    return nodes.find(function (node) { return node.dataPath === dataPath; });
}
exports.getNodeByDataPath = getNodeByDataPath;
function getBranchIds(profileTree) {
    // Get all paths that have the rootName as parent without the root
    var nodes = profileTree.filter(function (node) { return node.parentDataPath === constants_1.rootName; });
    var branchIds = nodes.map(function (node) { return (0, utils_1.getBranchId)(node.baseId); });
    return branchIds;
}
exports.getBranchIds = getBranchIds;
function getChildNodes(profileTree, node) {
    var childNodes = [];
    for (var _i = 0, _a = node.childPaths; _i < _a.length; _i++) {
        var childPath = _a[_i];
        var childNode = getNodeByDataPath(profileTree, childPath);
        if (childNode) {
            childNodes.push(childNode);
        }
    }
    return childNodes;
}
exports.getChildNodes = getChildNodes;
function insertAfterNode(profileTree, afterNode, nodeIn) {
    var afterNodeIndex = profileTree.indexOf(afterNode);
    profileTree.splice(afterNodeIndex + 1, 0, nodeIn);
    return profileTree;
}
exports.insertAfterNode = insertAfterNode;
function updateNode(profileTree, newNode) {
    var node = getNodeByDataPath(profileTree, newNode.dataPath);
    if (node) {
        Object.assign(node, newNode);
    }
    return profileTree;
}
exports.updateNode = updateNode;
function duplicateBranch(profileTree, node) {
    var parentNode = getNodeByDataPath(profileTree, node.parentDataPath);
    var descendants = copyAllDescendants(node, profileTree);
    var directChildren = extractDirectChildren(node, descendants);
    if (parentNode) {
        parentNode.childPaths.push(node.dataPath);
    }
    if (descendants) {
        var prevChild = node;
        var oldDataPath_1 = directChildren[0].parentDataPath;
        for (var _i = 0, descendants_1 = descendants; _i < descendants_1.length; _i++) {
            var descendant = descendants_1[_i];
            descendant.dataPath = descendant.dataPath.replace(oldDataPath_1, node.dataPath);
            descendant.childPaths = descendant.childPaths.map(function (childPath) {
                return childPath.replace(oldDataPath_1, node.dataPath);
            });
            descendant.value = "";
            insertAfterNode(profileTree, prevChild, descendant);
            prevChild = descendant;
        }
        var newChildPaths = [];
        for (var _a = 0, directChildren_1 = directChildren; _a < directChildren_1.length; _a++) {
            var directChild = directChildren_1[_a];
            directChild.parentDataPath = node.dataPath;
            newChildPaths.push(directChild.dataPath);
        }
        node.childPaths = newChildPaths;
        updateNode(profileTree, node);
    }
    return profileTree;
}
exports.duplicateBranch = duplicateBranch;
function getFirstChildren(profileTree) {
    var firstChildren = [];
    profileTree.forEach(function (node) {
        // find nodes one level below the root node
        if (node.dataPath.split(".").length == 2) {
            firstChildren.push(node);
        }
    });
    return firstChildren;
}
exports.getFirstChildren = getFirstChildren;
function deleteBranch(profileTree, node) {
    var parentNode = getNodeByDataPath(profileTree, node.parentDataPath);
    var descendants = getAllDescendants(profileTree, node);
    if (parentNode) {
        parentNode.childPaths = parentNode.childPaths.filter(function (childPath) { return childPath !== node.dataPath; });
    }
    for (var _i = 0, descendants_2 = descendants; _i < descendants_2.length; _i++) {
        var descendant = descendants_2[_i];
        var index_1 = profileTree.indexOf(descendant);
        profileTree.splice(index_1, 1);
    }
    var index = profileTree.indexOf(node);
    profileTree.splice(index, 1);
    return profileTree;
}
exports.deleteBranch = deleteBranch;
function nodeOrChildWasModified(profileTree, node) {
    if (node.value !== "") {
        return true;
    }
    var children = getChildNodes(profileTree, node);
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var child = children_1[_i];
        if (nodeOrChildWasModified(profileTree, child)) {
            return true;
        }
    }
    return false;
}
function getExpansionBgColour(profileTree, pathsWithInvalidCardinality, hastConstraintIssues, node) {
    if (nodeOrChildWasModified(profileTree, node)) {
        return "bg-green-500";
    }
    else if (pathsWithInvalidCardinality.includes(node.dataPath)) {
        return "bg-red-400";
    }
    else if (hastConstraintIssues) {
        return "bg-pink-800";
    }
    else if (node.element.sliceName) {
        return "bg-violet-300";
    }
    else {
        return "bg-blue-300";
    }
}
exports.getExpansionBgColour = getExpansionBgColour;
function nodeIsType(node, type) {
    if (node.multiTypeType) {
        return node.multiTypeType === type;
    }
    else if (!node.element.type) {
        return false;
    }
    else {
        return node.element.type[0].code === type;
    }
}
exports.nodeIsType = nodeIsType;
