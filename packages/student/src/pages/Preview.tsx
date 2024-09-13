import { useResumeData } from "@/hooks";
import { JSONViewer } from "ui";

export const Preview = () => {
  const { data: resumeLocalData } = useResumeData();

  return <JSONViewer data={resumeLocalData} />;
};
