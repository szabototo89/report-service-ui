import { useMutation, useQueryClient } from "react-query";
import { useReportServiceContext } from "./report-service-context";

export function useSubmitReport() {
  const queryClient = useQueryClient();
  const { url } = useReportServiceContext();

  return useMutation(
    async (options: { title: string; content: string; type: "bug" }) => {
      return await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          payload: {
            title: options.title,
            content: options.content,
            type: options.type,
          },
        }),
      }).then((response) => response.json());
    },
    {
      async onSettled() {
        await queryClient.invalidateQueries("reports");
      },
    }
  );
}
