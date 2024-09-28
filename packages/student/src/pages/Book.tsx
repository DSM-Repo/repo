import { librarySpecific } from "@configs/api";
import { useParams } from "react-router-dom";
import { Viewer } from "ui";

export const Book = () => {
  const { id } = useParams();
  const { data: detailData } = librarySpecific(id as string);

  return <Viewer url={detailData?.resume_url} indexList={detailData?.index} />;
};
