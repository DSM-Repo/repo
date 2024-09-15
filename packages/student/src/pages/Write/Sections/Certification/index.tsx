import { useResumeData } from "@/hooks/useResumeData";
import { Placeholder } from "@configs/type";
import { Layout } from "../Layout";
import { Item } from "./Item";

export const Certification = () => {
  const { data: resume, addItem } = useResumeData();
  const { achievement_list } = resume;

  return (
    <Layout
      title="자격증 및 수상"
      subTitle="자신의 자격증과 수상 내역을 소개해 보세요"
      add={() =>
        addItem(
          "achievement_list",
          Placeholder.ResumeDetailPlace.achievement_list[0]
        )
      }
    >
      {achievement_list?.map((i, j) => (
        <Item data={i} key={i.element_id} index={j} />
      ))}
    </Layout>
  );
};
