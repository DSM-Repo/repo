import { resumeDetail } from "@/api";
import { toast } from "react-toastify";
import { JSONViewer } from "ui";

export const Preview = () => {
  const { data: resumeData } = resumeDetail();

  return (
    <JSONViewer
      data={resumeData}
      buttons={[
        {
          icon: "Share",
          title: "URL 복사",
          action: {
            type: "CALLBACK",
            callback: () => {
              navigator.clipboard
                .writeText(`${process.env.VITE_APP_URL_MAIN}/resume_viewer/${resumeData?.id}`)
                .then(() => toast.success("성공적으로 복사되었습니다"))
                .catch(() => toast.error("복사중 오류가 발생했습니다"));
            }
          }
        }
      ]}
    />
  );
};
