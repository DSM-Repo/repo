import { useParams } from "react-router-dom";
import { Layout, Custom, Title, Button } from "ui";
import { Activity, Certification, Inform } from "./Sections";
import { Preview } from "./Preview";
import {
  completion,
  confirm,
  currentInfo,
  feedback,
  resumeData,
  submit,
  update
} from "@/apis";
import { Ternary } from "@configs/util";
import { Introduce } from "./Sections/Introduce";
import { Projects } from "./Sections/Projects";
import { useResumeData } from "@/hooks";
import { toast } from "react-toastify";

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
  const { data: resume } = useResumeData();
  const { refetch: refetchResume } = resumeData();
  const { data: complete, refetch: refetchCompl } = completion();
  const { mutate } = confirm();
  const { mutate: submitResume } = submit();
  const { mutate: saveResume } = update();
  const { refetch: refetchInfo } = currentInfo();
  const idNum = Number(id);

  const filteredFeedbacks = feedbacks?.data.filter(
    (i) => i.type === Object.keys(sectionsName)[idNum - 1]
  );

  return (
    <Layout
      buttons={[
        {
          icon: "Send",
          title: resume.status === "ONGOING" ? "제출하기" : "제출 취소하기",
          action: () =>
            submitResume(undefined, {
              onSuccess: () => {
                toast.success(
                  `성공적으로 ${resume.status === "ONGOING" ? "제출" : "제출 취소"}되었습니다`
                );
                refetchResume();
              }
            }),
          disabled: complete?.percent_complete !== 100,
          disabledReason: "레주메 완성 시 제출 가능합니다"
        },
        {
          icon: "Save",
          title: "저장하기",
          action: () =>
            saveResume(resume, {
              onSuccess: () => {
                toast.success("성공적으로 저장되었습니다");
                refetchCompl();
                refetchInfo();
              }
            }),
          disabled: resume.status !== "ONGOING",
          disabledReason: "제출 / 공개 상태에선 저장할 수 없습니다."
        },
        {
          icon: "Edit",
          title: "피드백",
          action: (
            <div className="col-flex gap-3 w-[400px] min-h-fit h-fit">
              <Title
                title="피드백"
                subTitle={`${Object.values(sectionsName)[idNum - 1]} 항목의 피드백입니다.`}
              />
              {!!!filteredFeedbacks?.length ? (
                <span className="text-[14px] text-gray-400">
                  아직 피드백이 없습니다..
                </span>
              ) : (
                <div className="col-flex gap-6 w-full max-h-[600px] h-fit overflow-y-auto">
                  {filteredFeedbacks?.map((i) => (
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
                          mutate(`?id=${i.id}`, {
                            onSuccess: () => {
                              toast.success("성공적으로 반영되었습니다");
                              refetch();
                            }
                          })
                        }
                      >
                        피드백 반영
                      </Button>
                    </div>
                  ))}
                </div>
              )}
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
          width: "680px",
          component: (
            <Custom width="680px" name="미리보기">
              <Preview />
            </Custom>
          )
        }
      ]}
    >
      <div className="w-full max-w-[620px] flex justify-center py-[24px]">
        <div className="w-fit col-flex gap-6">{sections[idNum - 1]}</div>
      </div>
    </Layout>
  );
};
