import { Layout } from "../Layout";
import { Button } from "ui";
import { Icon } from "@iconify/react";
import { Item } from "./Item";
import { projectType } from "@configs/util";
import { useResumeData } from "@/hooks/useResumeData";

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
    <Layout title="프로젝트" subTitle="참가한 프로젝트에 대해 작성하세요">
      <Button
        onClick={() =>
          setPartial("project_list", {
            ...defaultData,
            element_id: crypto.randomUUID()
          })
        }
        size="large"
      >
        <Icon icon="mingcute:add-fill" width={25} className="self-center" />
      </Button>
      <div className="overflow-auto col-flex gap-4">
        {project_list.map((i) => (
          <Item data={i} setData={set} key={i.element_id} />
        ))}
      </div>
    </Layout>
  );
};
