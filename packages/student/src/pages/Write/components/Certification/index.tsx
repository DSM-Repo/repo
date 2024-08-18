import { useResumeData } from "@/hooks/useResumeData";
import { achievementType } from "@configs/default";
import { Icon } from "@iconify/react";
import { Layout } from "../Layout";
import { Item } from "./Item";
import { Button } from "ui";

const defaultData: achievementType = {
  elementId: "",
  name: "",
  institution: "",
  date: "",
  type: "AWARD"
};

export const Certification = () => {
  const { data: resume, setPartial, set } = useResumeData();
  const { achievementList } = resume;

  return (
    <Layout title="자격증 & 수상" subTitle="자격증이나 수상 이력을 작성하세요">
      <Button
        onClick={() =>
          setPartial("achievementList", {
            ...defaultData,
            elementId: crypto.randomUUID()
          })
        }
        size="large"
      >
        <Icon icon="mingcute:add-fill" width={25} className="self-center" />
      </Button>
      <>{achievementList?.map((i) => <Item data={i} setData={set} />)}</>
    </Layout>
  );
};
