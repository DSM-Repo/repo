import { useResumeData } from "@/hooks/useResumeData";
import { achievementType } from "@configs/util";
import { Item } from "./Item";
import { Icon, Title } from "ui";

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
      {achievement_list?.map((i) => (
        <Item data={i} setData={set} key={i.element_id} />
      ))}
    </div>
  );
};
