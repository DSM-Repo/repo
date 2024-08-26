import { useResumeData } from "@/hooks/useResumeData";
import { achievementType } from "@configs/util";
import { Icon } from "@iconify/react";
import { Layout } from "../Layout";
import { Item } from "./Item";
import { Button } from "ui";

const defaultData: achievementType = {
  element_id: "",
  name: "",
  institution: "",
  date: "",
  type: "AWARD"
};

export const Certification = () => {
  const { data: resume, setPartial, set } = useResumeData();
  const { achievement_list } = resume;

  return (
    <Layout title="자격증 & 수상" subTitle="자격증이나 수상 이력을 작성하세요">
      <Button
        onClick={() =>
          setPartial("achievement_list", {
            ...defaultData,
            element_id: crypto.randomUUID()
          })
        }
        size="large"
      >
        <Icon icon="mingcute:add-fill" width={25} className="self-center" />
      </Button>
      <>
        {achievement_list?.map((i) => (
          <Item data={i} setData={set} key={i.element_id} />
        ))}
      </>
    </Layout>
  );
};
