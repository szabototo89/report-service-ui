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
import React from "react";
import { useGetReports } from "./use-get-reports";
import { useSubmitReport } from "./use-submit-report";
export function BugReportSection() {
    var _this = this;
    var _a;
    var _b = React.useState(""), title = _b[0], setTitle = _b[1];
    var _c = React.useState(""), content = _c[0], setContent = _c[1];
    var reports = useGetReports();
    var submitBug = useSubmitReport();
    if (reports.isLoading) {
        return React.createElement(React.Fragment, null, "Loading ...");
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Title"),
                    React.createElement("th", null, "Content"),
                    React.createElement("th", null, "Type"),
                    React.createElement("th", null, "Created At"))),
            React.createElement("tbody", null, (_a = reports.data) === null || _a === void 0 ? void 0 : _a.map(function (report) { return (React.createElement("tr", { key: report.id },
                React.createElement("td", null, report.title),
                React.createElement("td", null, report.content),
                React.createElement("td", null, report.type),
                React.createElement("td", null, report.createdAt))); }))),
        React.createElement("section", null,
            React.createElement("header", null, "Report a bug"),
            React.createElement("main", null,
                React.createElement("label", null,
                    React.createElement("span", null, "Title"),
                    React.createElement("input", { type: "text", value: title, onChange: function (ev) { return setTitle(ev.target.value); } })),
                React.createElement("label", null,
                    React.createElement("span", null, "Content"),
                    React.createElement("textarea", { onChange: function (ev) { return setContent(ev.target.value); }, value: content })),
                React.createElement("button", { disabled: submitBug.isLoading, onClick: function () { return __awaiter(_this, void 0, void 0, function () {
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
