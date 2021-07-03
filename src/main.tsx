import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReportServiceProvider } from "./report-service-context";
import { BugReportSection } from "./bug-report-section";

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReportServiceProvider value={{ url: "http://51.68.174.218:3001/" }}>
        <BugReportSection />
      </ReportServiceProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
