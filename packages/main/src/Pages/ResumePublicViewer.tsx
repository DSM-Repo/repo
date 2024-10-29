import { Api, Placeholder } from "@configs/type";
import { useParams } from "react-router-dom";
import { useMyQuery } from "@configs/util";
import { Resume } from "ui";

export const ResumePublicViewer = () => {
  const { id } = useParams();
  const { data: detailData } = useMyQuery<Api.Resume.ResumeDetail>(
    "resume",
    `/student/${id}`,
    Placeholder.ResumeDetailPlace
  );

  return (
    <div className="w-full h-fit bg-[#F1F3F5] flex flex-col items-center pt-20 pb-20">
      <div className="shadow-md shadow-gray-50 rounded-md h-fit overflow-hidden">
        <Resume data={detailData} />
      </div>
    </div>
  );
};
