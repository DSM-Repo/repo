import { Layout } from "../Layout";
import { Button } from "ui";
import { Icon } from "@iconify/react";
import { Item } from "./Item";
import { projectType } from "@configs/default";
import { useResumeData } from "@/hooks/useResumeData";

const defaultData: projectType = {
  elementId: "",
  name: "",
  type: "PERSONAL",
  imageInfo: undefined,
  startDate: undefined,
  endDate: undefined,
  skillSet: [],
  description: {
    motive: "",
    role: "",
    retrospective: ""
  },
  url: ""
};

export const Projects = () => {
  const { data: resume, setPartial, set } = useResumeData();
  const { projectList } = resume;

  return (
    <Layout title="프로젝트" subTitle="참가한 프로젝트에 대해 작성하세요">
      <Button
        onClick={() =>
          setPartial("projectList", {
            ...defaultData,
            elementId: crypto.randomUUID()
          })
        }
        size="large"
      >
        <Icon icon="mingcute:add-fill" width={25} className="self-center" />
      </Button>
      <div className="overflow-auto col-flex xl:flex-row gap-4">
        {projectList.map((i) => (
          <Item data={i} setData={set} />
        ))}
      </div>
    </Layout>
  );
};
