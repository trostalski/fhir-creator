"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
exports.buildTreeFromElementsRecursive = exports.buildProfileTree = exports.addRootNode = exports.isSliceEntry = exports.removeSliceNames = exports.removeNonePrimmitiveWithoutChildren = exports.addMissingChildren = exports.replaceWrongParentPaths = exports.isPrimitiveElement = void 0;
var constants_1 = require("./constants");
var utils_1 = require("./utils");
var path_utils_1 = require("./path_utils");
var tree_utils_1 = require("./tree_utils");
var valueset_utils_1 = require("./valueset_utils");
function parseTypeCode(code) {
    var result = code;
    if (code === "http://hl7.org/fhirpath/System.String") {
        result = "string";
    }
    return result;
}
function getTypeDefinition(type) {
    return __awaiter(this, void 0, void 0, function () {
        var result, code, typeModule, type_definition, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = null;
                    code = parseTypeCode(type.code);
                    if (!constants_1.validFhirTypes.includes(code)) {
                        return [2 /*return*/, null];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../fhir/types/".concat(code))); })];
                case 2:
                    typeModule = _a.sent();
                    type_definition = typeModule["default"];
                    if (code == "Reference") {
                        // TODO: hack because Reference.identifier results in loop
                        type_definition.snapshot.element =
                            type_definition.snapshot.element.filter(function (el) { return el.id !== "Reference.identifier"; });
                    }
                    result = type_definition;
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, result];
            }
        });
    });
}
function isPrimitiveElement(element) {
    return __awaiter(this, void 0, void 0, function () {
        var result, type, type_definition;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = false;
                    if (!(element.type && element.type.length == 1)) return [3 /*break*/, 2];
                    type = element.type[0];
                    return [4 /*yield*/, getTypeDefinition(type)];
                case 1:
                    type_definition = _a.sent();
                    if (type_definition && isPrimitiveType(type_definition)) {
                        result = true;
                    }
                    else if (constants_1.primitiveTypes.includes(type.code)) {
                        result = true;
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/, result];
            }
        });
    });
}
exports.isPrimitiveElement = isPrimitiveElement;
function isPrimitiveType(profile) {
    var result = false;
    if (profile.kind === "primitive-type") {
        result = true;
    }
    return result;
}
function getChildrenTypeDefinitions(element) {
    return __awaiter(this, void 0, void 0, function () {
        var childProfiles, _i, _a, type, childTypeDefinition;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    childProfiles = [];
                    if (!element.type) return [3 /*break*/, 4];
                    _i = 0, _a = element.type;
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    type = _a[_i];
                    return [4 /*yield*/, getTypeDefinition(type)];
                case 2:
                    childTypeDefinition = _b.sent();
                    childProfiles.push(childTypeDefinition);
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, childProfiles];
            }
        });
    });
}
function getDataPath(parentPath, element) {
    var result;
    var id = element.id;
    var idPrefix = (0, path_utils_1.getNthPartOfPath)(id, 0);
    var idPartAfterRoot = (0, path_utils_1.removeNPathPartsFromStart)(id, 1);
    if ((0, utils_1.isMultiTypeString)(parentPath)) {
        var parsedParentPath = (0, path_utils_1.replaceMultiTypePath)(parentPath, (0, utils_1.capitalizeFirstLetter)(idPrefix));
        if ((0, path_utils_1.getPathLength)(parsedParentPath) <= 1) {
            result = parsedParentPath;
        }
        else {
            result = (0, path_utils_1.mergePaths)(parsedParentPath, idPartAfterRoot);
        }
    }
    else {
        result = (0, path_utils_1.mergePaths)(parentPath, idPartAfterRoot);
    }
    if ((0, utils_1.elementExpectsArray)(element)) {
        result += (0, utils_1.getIndexString)(0);
    }
    return result;
}
function isValidElement(element) {
    var _a;
    var result = true;
    if (!element.id) {
        result = false;
    }
    else if (element.id === constants_1.rootName) {
        result = false;
    }
    else if (!element.id.includes(constants_1.pathDelimiter)) {
        result = false;
    }
    else if (((_a = element.base) === null || _a === void 0 ? void 0 : _a.path) === "Element.id") {
        result = false;
    }
    else if (element.id.endsWith(".extension")) {
        result = false;
    }
    else if (element.id.endsWith(".modifierExtension")) {
        result = false;
    }
    return result;
}
function replaceWrongParentPaths(profileTree) {
    for (var _i = 0, profileTree_1 = profileTree; _i < profileTree_1.length; _i++) {
        var node = profileTree_1[_i];
        if ((0, path_utils_1.getPathLength)(node.parentDataPath) < (0, path_utils_1.getPathLength)(node.dataPath) - 1) {
            var childPathStem = (0, path_utils_1.removeNPathPartsFromEnd)(node.dataPath, 1);
            node.parentDataPath = childPathStem;
        }
        if (!(0, tree_utils_1.getNodeByDataPath)(profileTree, node.parentDataPath)) {
            var newParentPath = node.parentDataPath + "[0]"; // try if parent is array
            if ((0, tree_utils_1.getNodeByDataPath)(profileTree, newParentPath)) {
                node.parentDataPath = newParentPath;
            }
        }
    }
}
exports.replaceWrongParentPaths = replaceWrongParentPaths;
function addMissingChildren(profileTree) {
    var _loop_1 = function (node) {
        var parentPath = node.parentDataPath;
        var parent_1 = profileTree.find(function (node) { return node.dataPath === parentPath; });
        if (parent_1 && !parent_1.childPaths.includes(node.dataPath)) {
            parent_1.childPaths.push(node.dataPath);
        }
    };
    for (var _i = 0, profileTree_2 = profileTree; _i < profileTree_2.length; _i++) {
        var node = profileTree_2[_i];
        _loop_1(node);
    }
}
exports.addMissingChildren = addMissingChildren;
function removeNonePrimmitiveWithoutChildren(profileTree) {
    // removes all none primitive elements without children
    // this is needed for some backbone children e.g. Observation.component.referenceRange
    for (var _i = 0, profileTree_3 = profileTree; _i < profileTree_3.length; _i++) {
        var node = profileTree_3[_i];
        if (!node.isPrimitive && !node.childPaths.length) {
            var idx = profileTree.indexOf(node);
            profileTree.splice(idx, 1);
        }
    }
}
exports.removeNonePrimmitiveWithoutChildren = removeNonePrimmitiveWithoutChildren;
function removeSliceNames(str) {
    var result = str;
    var sliceNames = (0, path_utils_1.getSliceNames)(str);
    for (var _i = 0, sliceNames_1 = sliceNames; _i < sliceNames_1.length; _i++) {
        var sliceName = sliceNames_1[_i];
        result = result.replace(":".concat(sliceName), "");
    }
    return result;
}
exports.removeSliceNames = removeSliceNames;
function isSliceEntry(element) {
    return "slicing" in element;
}
exports.isSliceEntry = isSliceEntry;
var tryGetBindingCodes = function (element) { return __awaiter(void 0, void 0, void 0, function () {
    var codes, valueSetResolver;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!((_a = element.binding) === null || _a === void 0 ? void 0 : _a.valueSet)) return [3 /*break*/, 2];
                valueSetResolver = new valueset_utils_1.ValueSetResolver();
                return [4 /*yield*/, valueSetResolver.resolve(element.binding.valueSet)];
            case 1:
                codes = _b.sent();
                _b.label = 2;
            case 2: return [2 /*return*/, codes];
        }
    });
}); };
function addRootNode(profileTree, elements) {
    var rootElement = elements.find(function (element) {
        return !element.id.includes(constants_1.pathDelimiter);
    });
    var elementNode = {
        element: rootElement,
        dataPath: constants_1.rootName,
        parentDataPath: "",
        basePath: constants_1.rootName,
        baseId: rootElement.id,
        isPrimitive: false,
        isRoot: true,
        childPaths: [],
        value: ""
    };
    profileTree.push(elementNode);
}
exports.addRootNode = addRootNode;
var buildProfileTree = function (profile) { return __awaiter(void 0, void 0, void 0, function () {
    var elements, profileTree;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                elements = profile.snapshot.element;
                return [4 /*yield*/, buildTreeFromElementsRecursive(elements)];
            case 1:
                profileTree = _a.sent();
                replaceWrongParentPaths(profileTree);
                addMissingChildren(profileTree);
                removeNonePrimmitiveWithoutChildren(profileTree);
                // add root node for constraint checking
                addRootNode(profileTree, elements);
                return [2 /*return*/, profileTree];
        }
    });
}); };
exports.buildProfileTree = buildProfileTree;
function buildTreeFromElementsRecursive(elements, parentPath, parentBasePath) {
    if (parentPath === void 0) { parentPath = constants_1.rootName; }
    if (parentBasePath === void 0) { parentBasePath = constants_1.rootName; }
    return __awaiter(this, void 0, void 0, function () {
        var profileTree, _loop_2, _i, elements_1, element;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    profileTree = [];
                    _loop_2 = function (element) {
                        var id, elementDataPath, elementBasePath, elementNode, multiTypeType, bindingCodes, childrenTypeDefinitions, childNodes, _b, childrenTypeDefinitions_1, childType, childElement, childBasePath, type, dataPath, childNode, grandchildNodes, childPaths, parentNode;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    id = element.id;
                                    if (!isValidElement(element)) {
                                        return [2 /*return*/, "continue"];
                                    }
                                    elementDataPath = getDataPath(parentPath, element);
                                    elementBasePath = (0, path_utils_1.mergePaths)(parentBasePath, (0, path_utils_1.getPathSuffix)(id));
                                    elementNode = {
                                        element: element,
                                        dataPath: elementDataPath,
                                        parentDataPath: parentPath,
                                        basePath: elementBasePath,
                                        baseId: id,
                                        isPrimitive: false,
                                        isRootPrimitive: parentPath === constants_1.rootName,
                                        childPaths: [],
                                        value: ""
                                    };
                                    multiTypeType = void 0;
                                    if ((0, utils_1.isMultiTypeElement)(element)) {
                                        multiTypeType = (0, utils_1.getElementTypes)(element)[0];
                                    }
                                    if (!element.binding) return [3 /*break*/, 2];
                                    return [4 /*yield*/, tryGetBindingCodes(element)];
                                case 1:
                                    bindingCodes = _c.sent();
                                    if (bindingCodes && bindingCodes.length > 0) {
                                        elementNode.bindingCodes = bindingCodes;
                                        elementNode.isPrimitive = true;
                                        profileTree.push(elementNode);
                                        return [2 /*return*/, "continue"];
                                    }
                                    _c.label = 2;
                                case 2: return [4 /*yield*/, isPrimitiveElement(element)];
                                case 3:
                                    if (!_c.sent()) return [3 /*break*/, 4];
                                    if (!profileTree.find(function (node) { return node.dataPath === elementDataPath; })) {
                                        elementNode.isPrimitive = true;
                                        profileTree.push(elementNode);
                                    }
                                    return [3 /*break*/, 10];
                                case 4: return [4 /*yield*/, getChildrenTypeDefinitions(element)];
                                case 5:
                                    childrenTypeDefinitions = _c.sent();
                                    childNodes = [];
                                    _b = 0, childrenTypeDefinitions_1 = childrenTypeDefinitions;
                                    _c.label = 6;
                                case 6:
                                    if (!(_b < childrenTypeDefinitions_1.length)) return [3 /*break*/, 9];
                                    childType = childrenTypeDefinitions_1[_b];
                                    if (childType && isPrimitiveType(childType)) {
                                        childElement = childType.snapshot.element[0];
                                        childBasePath = (0, path_utils_1.mergePaths)(elementBasePath, (0, path_utils_1.getPathSuffix)(childElement.id));
                                        type = childType.id;
                                        childElement.type = [{ code: type }];
                                        childElement.min = 0;
                                        childElement.max = "1";
                                        dataPath = (0, path_utils_1.mergePaths)(getDataPath(elementDataPath, childElement), type);
                                        childNode = {
                                            element: childElement,
                                            dataPath: dataPath,
                                            parentDataPath: elementDataPath,
                                            basePath: childBasePath,
                                            baseId: id,
                                            isPrimitive: true,
                                            childPaths: [],
                                            value: ""
                                        };
                                        childNodes.push(childNode);
                                    }
                                    if (!(childType && !isPrimitiveType(childType))) return [3 /*break*/, 8];
                                    return [4 /*yield*/, buildTreeFromElementsRecursive(childType.snapshot.element, elementDataPath, elementBasePath)];
                                case 7:
                                    grandchildNodes = _c.sent();
                                    childNodes.push.apply(childNodes, grandchildNodes);
                                    _c.label = 8;
                                case 8:
                                    _b++;
                                    return [3 /*break*/, 6];
                                case 9:
                                    childPaths = (0, tree_utils_1.extractDirectChildrenPaths)(elementDataPath, childNodes.map(function (node) { return node.dataPath; }));
                                    parentNode = {
                                        element: element,
                                        dataPath: elementDataPath,
                                        parentDataPath: parentPath,
                                        basePath: elementBasePath,
                                        baseId: id,
                                        isPrimitive: false,
                                        childPaths: childPaths,
                                        multiTypeType: multiTypeType,
                                        value: ""
                                    };
                                    profileTree.push.apply(profileTree, __spreadArray([parentNode], childNodes, false));
                                    _c.label = 10;
                                case 10: return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, elements_1 = elements;
                    _a.label = 1;
                case 1:
                    if (!(_i < elements_1.length)) return [3 /*break*/, 4];
                    element = elements_1[_i];
                    return [5 /*yield**/, _loop_2(element)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, profileTree];
            }
        });
    });
}
exports.buildTreeFromElementsRecursive = buildTreeFromElementsRecursive;
