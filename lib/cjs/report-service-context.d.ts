import React from "react";
export declare const Context: React.Context<{
    url: string;
} | null>;
export declare const ReportServiceProvider: React.Provider<{
    url: string;
} | null>;
export declare function useReportServiceContext(): {
    url: string;
};
