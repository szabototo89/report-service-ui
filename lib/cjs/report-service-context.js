"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReportServiceContext = exports.ReportServiceProvider = exports.Context = void 0;
var react_1 = __importDefault(require("react"));
exports.Context = react_1.default.createContext(null);
exports.ReportServiceProvider = exports.Context.Provider;
function useReportServiceContext() {
    var reportServiceContext = react_1.default.useContext(exports.Context);
    if (reportServiceContext == null) {
        throw new Error("Please wrap your component into <ReportServiceProvider />.");
    }
    return reportServiceContext;
}
exports.useReportServiceContext = useReportServiceContext;
