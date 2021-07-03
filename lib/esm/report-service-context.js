import React from "react";
export var Context = React.createContext(null);
export var ReportServiceProvider = Context.Provider;
export function useReportServiceContext() {
    var reportServiceContext = React.useContext(Context);
    if (reportServiceContext == null) {
        throw new Error("Please wrap your component into <ReportServiceProvider />.");
    }
    return reportServiceContext;
}
