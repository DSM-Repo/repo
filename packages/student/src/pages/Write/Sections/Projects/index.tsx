import { Document } from "@configs/type";
import { useResumeData } from "@/hooks";
import { Title, Icon } from "ui";
import { Item } from "./Item";

const defaultData: Document.Project_list = {
  element_id: "",
  name: "",
  type: "PERSONAL",
  logo: undefined,
  date: {
    start_date: undefined,
    end_date: undefined
  },
  skill_set: [],
  sections: [
    {
      element_id: "r",
      title: "맡은 역할",
      description: ""
    },
    {
      element_id: "f",
      title: "기능",
      description: ""
    },
    {
      element_id: "re",
      title: "회고",
      description: ""
    }
  ],
  url: ""
};

export const Projects = () => {
  const { data: resume, setPartial, set } = useResumeData();
  const { project_list } = resume;

  const moveItem = (index: number, direction: "up" | "down") => {
    let array = [...project_list];

    if (direction === "up" && index < array.length - 1) {
      [array[index], array[index + 1]] = [array[index + 1], array[index]];
    } else if (direction === "down" && index > 0) {
      [array[index - 1], array[index]] = [array[index], array[index - 1]];
    }
    set((prev) => ({ data: { ...prev.data, project_list: array } }));
  };

  return (
    <div className="col-flex gap-6 w-fit">
      <div className="flex items-center justify-between w-[502px]">
        <Title
          title="프로젝트"
          subTitle="지금까지 진행한 프로젝트를 소개해 보세요."
        />
        <Icon
          name="Add"
          size={48}
          onClick={() =>
            setPartial("project_list", {
              ...defaultData,
              element_id: crypto.randomUUID()
            })
          }
          className="cursor-pointer"
        />
      </div>
      {project_list.map((i, j) => (
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
