import { studentAll } from "@/apis";
import { useParams } from "react-router-dom";

export const Render = () => {
  const { grade } = useParams();
  const { data } = studentAll(grade as string);

  console.log(data);
  return <div></div>;
};
