import { Title, Icon } from "ui";
import { projectType } from "@configs/util";
import { useResumeData } from "@/hooks/useResumeData";
import { Item } from "./Item";

const defaultData: projectType = {
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
      {project_list.map((i) => (
        <Item data={i} setData={set} key={i.element_id} />
      ))}
    </div>
  );
};
