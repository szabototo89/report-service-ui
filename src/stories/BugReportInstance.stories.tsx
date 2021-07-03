import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { BugReportSection } from "../bug-report-section";
import { ReportServiceProvider } from "../report-service-context";
import { QueryClient, QueryClientProvider } from "react-query";

export default {
  title: `Test/${BugReportSection.name}`,
  component: BugReportSection,
  argTypes: {},
} as ComponentMeta<typeof BugReportSection>;

const client = new QueryClient();

export const Default: ComponentStory<typeof Button> = (args) => (
  <QueryClientProvider client={client}>
    <ReportServiceProvider value={{ url: "http://51.68.174.218:3001/" }}>
      <BugReportSection />
    </ReportServiceProvider>
  </QueryClientProvider>
);
