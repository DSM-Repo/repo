import { useResumeData } from "@/hooks/useResumeData";
import { Item } from "./Item";
import { Icon, Title } from "ui";
import { Document } from "@configs/type";

const defaultData: Document.Achievement_list = {
  element_id: "",
  name: "",
  institution: "",
  date: "",
  type: "AWARD"
};

export const Certification = () => {
  const { data: resume, setPartial, set } = useResumeData();
  const { achievement_list } = resume;

  const moveItem = (index: number, direction: "up" | "down") => {
    let array = [...achievement_list];

    if (direction === "up" && index < array.length - 1) {
      [array[index], array[index + 1]] = [array[index + 1], array[index]];
    } else if (direction === "down" && index > 0) {
      [array[index - 1], array[index]] = [array[index], array[index - 1]];
    }
    set((prev) => ({ data: { ...prev.data, achievement_list: array } }));
  };

  return (
    <div className="col-flex gap-6 w-fit">
      <div className="flex items-center justify-between w-[502px]">
        <Title
          title="자격증 & 수상"
          subTitle="자신의 자격증과 수상 내역을 소개해 보세요."
        />
        <Icon
          name="Add"
          size={48}
          onClick={() =>
            setPartial("achievement_list", {
              ...defaultData,
              element_id: crypto.randomUUID()
            })
          }
          className="cursor-pointer"
        />
      </div>
      {achievement_list?.map((i, j) => (
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
