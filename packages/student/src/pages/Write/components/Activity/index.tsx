import { Icon } from "@iconify/react";
import { Layout } from "../Layout";
import { Item } from "./Item";
import { Button } from "ui";
import { useResumeData } from "@/hooks/useResumeData";
import { activityType } from "@configs/util";

const defaultData: activityType = {
  element_id: "",
  name: "",
  date: {
    start_date: "",
    end_date: undefined
  },
  description: "",
  is_period: false
};

export const Activity = () => {
  const { data: resume, setPartial, set } = useResumeData();
  const { activity_list } = resume;

  return (
    <Layout title="활동" subTitle="참가한 활동을 작성하세요">
      <Button
        onClick={() =>
          setPartial("activity_list", {
            ...defaultData,
            element_id: crypto.randomUUID()
          })
        }
        size="large"
      >
        <Icon icon="mingcute:add-fill" width={25} className="self-center" />
      </Button>
      <>
        {activity_list.map((i) => (
          <Item data={i} setData={set} key={i.element_id} />
        ))}
      </>
    </Layout>
  );
};
