import { Api, Placeholder } from "@configs/type";
import { useParams } from "react-router-dom";
import { useMyQuery } from "@configs/util";
import { Viewer } from "ui";

export const PublicViewer = () => {
  const { id } = useParams();
  const { data: detailData } = useMyQuery<Api.Library.LibraryDetail>(
    "library",
    `/${id}/public`,
    Placeholder.LibraryDetailPlace
  );

  return (
    <div className="w-full h-screen bg-black">
      <Viewer url={detailData?.resume_url} indexList={detailData?.index} />
    </div>
  );
};
