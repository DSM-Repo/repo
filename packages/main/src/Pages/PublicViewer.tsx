import { useParams } from "react-router-dom";
import { Placeholder } from "@configs/type";
import { useMyQuery } from "@configs/util";
import { Viewer } from "ui";

export const PublicViewer = () => {
  const { id } = useParams();
  const { data: detailData } = useMyQuery(
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
