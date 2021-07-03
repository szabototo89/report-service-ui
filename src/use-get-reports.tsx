import { useQuery } from "react-query";
import { useReportServiceContext } from "./report-service-context";

export function useGetReports() {
  const { url } = useReportServiceContext();

  return useQuery<
    ReadonlyArray<{
      id: string;
      title: string;
      content: string;
      createdAt: string;
      type: string;
    }>
  >("reports", async () => {
    return fetch(url).then((response) => response.json());
  });
}
