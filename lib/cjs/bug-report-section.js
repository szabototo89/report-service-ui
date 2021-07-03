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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BugReportSection = void 0;
var react_1 = __importDefault(require("react"));
var use_get_reports_1 = require("./use-get-reports");
var use_submit_report_1 = require("./use-submit-report");
function BugReportSection() {
    var _this = this;
    var _a;
    var _b = react_1.default.useState(""), title = _b[0], setTitle = _b[1];
    var _c = react_1.default.useState(""), content = _c[0], setContent = _c[1];
    var reports = use_get_reports_1.useGetReports();
    var submitBug = use_submit_report_1.useSubmitReport();
    if (reports.isLoading) {
        return react_1.default.createElement(react_1.default.Fragment, null, "Loading ...");
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("table", null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("th", null, "Title"),
                    react_1.default.createElement("th", null, "Content"),
                    react_1.default.createElement("th", null, "Type"),
                    react_1.default.createElement("th", null, "Created At"))),
            react_1.default.createElement("tbody", null, (_a = reports.data) === null || _a === void 0 ? void 0 : _a.map(function (report) { return (react_1.default.createElement("tr", { key: report.id },
                react_1.default.createElement("td", null, report.title),
                react_1.default.createElement("td", null, report.content),
                react_1.default.createElement("td", null, report.type),
                react_1.default.createElement("td", null, report.createdAt))); }))),
        react_1.default.createElement("section", null,
            react_1.default.createElement("header", null, "Report a bug"),
            react_1.default.createElement("main", null,
                react_1.default.createElement("label", null,
                    react_1.default.createElement("span", null, "Title"),
                    react_1.default.createElement("input", { type: "text", value: title, onChange: function (ev) { return setTitle(ev.target.value); } })),
                react_1.default.createElement("label", null,
                    react_1.default.createElement("span", null, "Content"),
                    react_1.default.createElement("textarea", { onChange: function (ev) { return setContent(ev.target.value); }, value: content })),
                react_1.default.createElement("button", { disabled: submitBug.isLoading, onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, submitBug.mutateAsync({
                                        title: title,
                                        content: content,
                                        type: "bug",
                                    })];
                                case 1:
                                    _a.sent();
                                    setTitle("");
                                    setContent("");
                                    return [2 /*return*/];
                            }
                        });
                    }); } }, "Submit")))));
}
exports.BugReportSection = BugReportSection;
