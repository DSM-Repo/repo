import { useResumeData } from "@/hooks";
import { toast } from "react-toastify";
import { JSONViewer } from "ui";

export const Preview = () => {
  const { data: resumeLocalData } = useResumeData();

  return (
    <JSONViewer
      data={resumeLocalData}
      buttons={[
        {
          icon: "Share",
          title: "URL 복사",
          action: () => {
            navigator.clipboard
              .writeText(
                `${process.env.VITE_APP_URL_MAIN}/resume_viewer/${resumeLocalData?.id}`
              )
              .then(() => toast.success("성공적으로 복사되었습니다"))
              .catch(() => toast.error("복사중 오류가 발생했습니다"));
          }
        }
      ]}
    />
  );
};
