import React from "react";
import { useGetReports } from "./use-get-reports";
import { useSubmitReport } from "./use-submit-report";

export function BugReportSection() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const reports = useGetReports();
  const submitBug = useSubmitReport();

  if (reports.isLoading) {
    return <>Loading ...</>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Type</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {reports.data?.map((report) => (
            <tr key={report.id}>
              <td>{report.title}</td>
              <td>{report.content}</td>
              <td>{report.type}</td>
              <td>{report.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section>
        <header>Report a bug</header>
        <main>
          <label>
            <span>Title</span>
            <input
              type="text"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
          </label>
          <label>
            <span>Content</span>
            <textarea
              onChange={(ev) => setContent(ev.target.value)}
              value={content}
            />
          </label>
          <button
            disabled={submitBug.isLoading}
            onClick={async () => {
              await submitBug.mutateAsync({
                title,
                content,
                type: "bug",
              });
              setTitle("");
              setContent("");
            }}
          >
            Submit
          </button>
        </main>
      </section>
    </>
  );
}
