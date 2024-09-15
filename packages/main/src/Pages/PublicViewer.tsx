import { useParams } from "react-router-dom";
import { useMyQuery } from "@configs/util";
import { Placeholder } from "@configs/type";
import { Viewer } from "ui";

export const PublicViewer = () => {
  const { id } = useParams();
  const { data: detailData } = useMyQuery(
    "library",
    `/${id}/public`,
    Placeholder.LibraryDetailPlace
  );

  return <Viewer url={detailData?.resume_url} indexList={detailData?.index} />;
};
