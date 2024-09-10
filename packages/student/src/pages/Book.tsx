import { useParams } from "react-router-dom";
import { libraryDetail } from "@/apis";
import { Viewer } from "ui";

export const Book = () => {
  const { id } = useParams();
  const { data: detailData } = libraryDetail(id as string);

  return <Viewer url={detailData?.resume_url} indexList={detailData?.index} />;
};
