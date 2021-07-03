import React from "react";

export const Context = React.createContext<{ url: string } | null>(null);
export const ReportServiceProvider = Context.Provider;

export function useReportServiceContext() {
  const reportServiceContext = React.useContext(Context);

  if (reportServiceContext == null) {
    throw new Error(
      `Please wrap your component into <ReportServiceProvider />.`
    );
  }

  return reportServiceContext;
}
