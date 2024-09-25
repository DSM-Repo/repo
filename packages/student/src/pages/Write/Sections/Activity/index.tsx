import { Placeholder } from "@configs/type";
import { useResumeData } from "@/hooks";
import { Layout } from "../Layout";
import { Item } from "./Item";

export const Activity = () => {
  const { data: resume, addItem } = useResumeData();
  const { activity_list } = resume;

  return (
    <Layout
      title="Activity"
      subTitle="진행한 활동을 소개해 보세요."
      add={() =>
        addItem("activity_list", Placeholder.ResumeDetailPlace.activity_list[0])
      }
    >
      {activity_list.map((i, j) => (
        <Item data={i} key={i.element_id} index={j} />
      ))}
    </Layout>
  );
};
