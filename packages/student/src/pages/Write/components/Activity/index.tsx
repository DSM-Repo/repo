import { Icon } from "@iconify/react";
import { Layout } from "../Layout";
import { Item } from "./Item";
import { Button } from "ui";
import { useResumeData } from "@/hooks/useResumeData";
import { activityType } from "@configs/default";

const defaultData: activityType = {
  elementId: "",
  name: "",
  startDate: "",
  endDate: undefined,
  description: "",
  isPeriod: false
};

export const Activity = () => {
  const { data: resume, setPartial, set } = useResumeData();
  const { activityList } = resume;

  return (
    <Layout title="활동" subTitle="참가한 활동을 작성하세요">
      <Button
        onClick={() =>
          setPartial("activityList", {
            ...defaultData,
            elementId: crypto.randomUUID()
          })
        }
        size="large"
      >
        <Icon icon="mingcute:add-fill" width={25} className="self-center" />
      </Button>
      <>{activityList?.map((i) => <Item data={i} setData={set} />)}</>
    </Layout>
  );
};
