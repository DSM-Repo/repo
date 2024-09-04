import { useParams } from "react-router-dom";
import { Layout, Custom, Title, Button } from "ui";
import { Activity, Certification, Inform } from "./Sections";
import { Preview } from "./Preview";
import { confirm, feedback, resumeData } from "@/apis";
import { useEffect } from "react";
import { useResumeData } from "@/hooks";
import { Ternary } from "@configs/util";
import { Introduce } from "./Sections/Introduce";
import { Projects } from "./Sections/Projects";

const sections = [
  <Inform />,
  <Introduce />,
  <Projects />,
  <Certification />,
  <Activity />
];

const sectionsName = {
  WRITER_INFO: "내 정보",
  INTRODUCE: "자기소개",
  PROJECT: "프로젝트",
  ACTIVITY: "활동",
  ACHIEVEMENT: "자격증 & 수상"
};

export const Write = () => {
  const { id } = useParams();
  const { data: feedbacks, refetch } = feedback();
  const { mutate } = confirm();
  const idNum = Number(id);

  return (
    <Layout
      buttons={[
        {
          icon: "Send",
          title: "제출하기",
          action: () => {}
        },
        {
          icon: "Save",
          title: "해당 항목 저장하기",
          action: () => {}
        },
        {
          icon: "Edit",
          title: "피드백",
          action: (
            <div className="col-flex gap-6 w-[400px] min-h-[58px] h-fit max-h-[600px] overflow-y-auto">
              <Title
                title="피드백"
                subTitle={`${Object.values(sectionsName)[idNum - 1]} 항목의 피드백입니다.`}
              />
              {feedbacks?.data
                .filter((i) => i.type === Object.keys(sectionsName)[idNum - 1])
                .map((i) => (
                  <div className="col-flex gap-2 border-gray-700">
                    <div className="w-full flex items-center justify-between">
                      <Title
                        title={Object.values(sectionsName)[idNum - 1]}
                        titleSize="18px"
                        subTitle={`${i.teacher_name} 선생님`}
                        subTitleSize="14px"
                        row
                      />
                      <Ternary data={i.rejected}>
                        <span className="text-red-400 text-[14px] font-light">
                          거부됨
                        </span>
                      </Ternary>
                    </div>

                    <span className="break-words text-[16px] font-light">
                      {i.comment}
                    </span>
                    <Button
                      padding="10px"
                      icon="Check"
                      size="full"
                      direction="center"
                      onClick={() =>
                        mutate({ id: i.id }, { onSuccess: () => refetch() })
                      }
                    >
                      피드백 반영
                    </Button>
                  </div>
                ))}
            </div>
          )
        },
        {
          icon: "BarRight",
          title: "미리보기",
          action: "미리보기"
        }
      ]}
      sidebars={[
        {
          type: "custom",
          name: "미리보기",
          width: "600px",
          component: (
            <Custom width="600px" name="미리보기">
              <Preview />
            </Custom>
          )
        }
      ]}
    >
      <div className="w-fit px-[60px] flex justify-center py-[24px]">
        <div className="w-fit col-flex gap-6">{sections[idNum - 1]}</div>
      </div>
    </Layout>
  );
};
