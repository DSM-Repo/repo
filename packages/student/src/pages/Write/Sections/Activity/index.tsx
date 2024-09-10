import { Item } from "./Item";
import { Title, Icon } from "ui";
import { useResumeData } from "@/hooks";
import { Document } from "@configs/type";

const defaultData: Document.Activity_list = {
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

  const moveItem = (index: number, direction: "up" | "down") => {
    let array = [...activity_list];

    if (direction === "up" && index < array.length - 1) {
      [array[index], array[index + 1]] = [array[index + 1], array[index]];
    } else if (direction === "down" && index > 0) {
      [array[index - 1], array[index]] = [array[index], array[index - 1]];
    }
    set((prev) => ({ data: { ...prev.data, activity_list: array } }));
  };

  return (
    <div className="col-flex gap-6 w-fit">
      <div className="flex items-center justify-between w-[502px]">
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
      {activity_list.map((i, j) => (
        <Item
          data={i}
          setData={set}
          key={i.element_id}
          index={j}
          moveItem={moveItem}
        />
      ))}
    </div>
  );
};
