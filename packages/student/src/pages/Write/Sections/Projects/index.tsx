import { Placeholder } from "@configs/type";
import { useResumeData } from "@/hooks";
import { Layout } from "../Layout";
import { Item } from "./Item";

export const Projects = () => {
  const { data: resume, addItem } = useResumeData();
  const { project_list } = resume;

  return (
    <Layout
      title="프로젝트"
      subTitle="지금까지 진행한 프로젝트를 소개해 보세요."
      add={() =>
        addItem("project_list", Placeholder.ResumeDetailPlace.project_list[0])
      }
    >
      {project_list.map((i, j) => (
        <Item data={i} key={i.element_id} index={j} />
      ))}
    </Layout>
  );
};
