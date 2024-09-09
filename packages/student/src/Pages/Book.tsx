import { useParams } from "react-router-dom";
import { getBook } from "@/apis";
import { Viewer } from "ui";

export const Book = () => {
  const { id } = useParams();
  const { data } = getBook(id as string);

  return <Viewer url={data?.resume_url} indexList={data?.index} />;
};
