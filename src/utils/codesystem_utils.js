"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CodeSystemResolver = void 0;
var utils_1 = require("./utils");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var CodeSystemResolver = /** @class */ (function () {
    function CodeSystemResolver() {
        this._codeSystemEndpoint = "api/codeSystems/";
    }
    CodeSystemResolver.prototype.resolve = function (codeSystemUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var codes, isurl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isurl = (0, utils_1.isUrl)(codeSystemUrl);
                        if (!(isurl && (0, utils_1.isBaseUrl)(codeSystemUrl))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.resolveBase(codeSystemUrl)];
                    case 1:
                        codes = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        if (isurl) {
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, codes];
                }
            });
        });
    };
    CodeSystemResolver.prototype.resolveBase = function (codeSystemUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var codes, parsedUrl, codeSystem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        codes = [];
                        parsedUrl = this.parseCodeSystemUrl(codeSystemUrl);
                        return [4 /*yield*/, this.getBaseCodeSystem(parsedUrl)];
                    case 1:
                        codeSystem = _a.sent();
                        if (codeSystem.concept) {
                            codes = this.resolveConcept(codeSystem.concept);
                        }
                        return [2 /*return*/, codes];
                }
            });
        });
    };
    CodeSystemResolver.prototype.resolveConcept = function (concepts) {
        var codes = [];
        for (var _i = 0, concepts_1 = concepts; _i < concepts_1.length; _i++) {
            var concept = concepts_1[_i];
            var coding = {
                system: this._codeSystemUrl,
                code: concept.code,
                display: concept.display
            };
            codes.push(coding);
            if (concept.concept) {
                var childCodes = this.resolveConcept(concept.concept);
                codes = codes.concat(childCodes);
            }
        }
        return codes;
    };
    Object.defineProperty(CodeSystemResolver.prototype, "codeSystemUrl", {
        get: function () {
            return this._codeSystemUrl;
        },
        enumerable: false,
        configurable: true
    });
    CodeSystemResolver.prototype.fetchBaseCodeSystem = function (codeSystemUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var fileName, codeSystemRes, codeSystem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileName = codeSystemUrl + ".json";
                        return [4 /*yield*/, fetch(this._codeSystemEndpoint +
                                "?" +
                                new URLSearchParams({ filename: fileName }))];
                    case 1:
                        codeSystemRes = _a.sent();
                        if (!codeSystemRes.ok) {
                            throw new Error("Error fetching code system");
                        }
                        return [4 /*yield*/, codeSystemRes.json()];
                    case 2:
                        codeSystem = _a.sent();
                        this._codeSystemUrl = codeSystem.url;
                        return [2 /*return*/, codeSystem];
                }
            });
        });
    };
    CodeSystemResolver.prototype.getBaseCodeSystem = function (codeSystemUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var filePath, codeSystem, data;
            return __generator(this, function (_a) {
                filePath = path_1["default"].join(process.cwd(), "data/codesystems/".concat(codeSystemUrl, ".json"));
                codeSystem = fs_1["default"].readFileSync(filePath, "utf8");
                data = JSON.parse(codeSystem);
                this._codeSystemUrl = data.url;
                return [2 /*return*/, data];
            });
        });
    };
    CodeSystemResolver.prototype.parseCodeSystemUrl = function (codeSystemUrl) {
        if (codeSystemUrl.includes("|")) {
            var _a = codeSystemUrl.split("|"), url = _a[0], version = _a[1];
            codeSystemUrl = url;
        }
        // const result = codeSystemUrl.split("/").at(-1)!;
        var result = codeSystemUrl.split("/")[codeSystemUrl.split("/").length - 1];
        return result;
    };
    return CodeSystemResolver;
}());
exports.CodeSystemResolver = CodeSystemResolver;
