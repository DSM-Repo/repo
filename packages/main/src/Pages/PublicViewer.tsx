import { Api, Placeholder } from "@configs/type";
import { useParams } from "react-router-dom";
import { useMyQuery } from "@configs/util";
import { Viewer } from "ui";

export const PublicViewer = () => {
  const { id } = useParams();
  const { data: detailData, isError } = useMyQuery<Api.Library.LibraryDetail>(
    "library",
    `/${id}/public`,
    Placeholder.LibraryDetailPlace
  );

  return (
    <div className="w-full h-screen bg-black flex flex-center">
      {isError ? (
        <span>존재하지 않거나 접근 권한이 없는 레주메북입니다</span>
      ) : (
        <Viewer
          url={detailData?.resume_url}
          indexList={detailData?.index}
          disableDownload
        />
      )}
    </div>
  );
};
