import { Item } from "./Item";
import { Title, Icon } from "ui";
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
    <div className="col-flex gap-6 w-fit">
      <div className="flex items-center justify-between w-[532px]">
        <Title title="활동" subTitle="진행한 활동을 소개해 보세요." />
        <Icon
          name="Add"
          size={48}
          onClick={() =>
            setPartial("activity_list", {
              ...defaultData,
              element_id: crypto.randomUUID()
            })
          }
          className="cursor-pointer"
        />
      </div>
      {activity_list.map((i) => (
        <Item data={i} setData={set} key={i.element_id} />
      ))}
    </div>
  );
};
