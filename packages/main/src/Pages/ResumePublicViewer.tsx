import { Api, Placeholder } from "@configs/type";
import { useParams } from "react-router-dom";
import { useMyQuery } from "@configs/util";
import { JSONViewer } from "ui";

export const ResumePublicViewer = () => {
  const { id } = useParams();
  const { data: detailData } = useMyQuery<Api.Resume.ResumeDetail>(
    "resume",
    `/student/${id}`,
    Placeholder.ResumeDetailPlace
  );

  return (
    <div className="w-full h-screen bg-[#111111]">
      <JSONViewer data={detailData} disableDownload />
    </div>
  );
};
