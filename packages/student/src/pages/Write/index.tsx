import { Ternary, useEventListeners, useShortcut } from "@configs/util";
import { Activity, Certification, Inform } from "./Sections";
import { Layout, Custom, Title, Button } from "ui";
import { Introduce } from "./Sections/Introduce";
import { Projects } from "./Sections/Projects";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { useResumeData } from "@/hooks";
import { toast } from "react-toastify";
import { Preview } from "./Preview";
import {
  feedbackConfirm,
  feedbackList,
  recentlyShared,
  resumeCompletion,
  resumeDetail,
  resumeSave,
  resumeSubmit,
  studentInfo
} from "@/apis";

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
  ACHIEVEMENT: "자격증 & 수상",
  ACTIVITY: "활동"
};

export const Write = () => {
  const { id } = useParams();
  const { data: listData, refetch: listRefetch } = feedbackList();
  const { refetch: completionRefetch } = resumeCompletion();
  const { refetch: sharedRefetch } = recentlyShared();
  const { mutate: confirmMutate } = feedbackConfirm();
  const { data: resumeLocalData } = useResumeData();
  const { refetch: resumeRefetch } = resumeDetail();
  const { refetch: studentRefetch } = studentInfo();
  const { mutate: submitMutate } = resumeSubmit();
  const { mutate: saveMutate } = resumeSave();
  const [open, setOpen] = useState(!!!localStorage.getItem("ShortcutAlert"));

  const [width, setWidth] = useState(
    document.body.clientWidth - 870 < 814
      ? document.body.clientWidth - 870
      : 814
  );
  const idNum = Number(id);
  const pdf = useRef<HTMLDivElement>(null);

  const filteredFeedbacks = listData?.data.filter(
    (i) => i.type === Object.keys(sectionsName)[idNum - 1]
  );

  useEventListeners([
    {
      eventType: "resize",
      callback: () => {
        if (pdf?.current) {
          const rem = document.body.clientWidth - 870;
          setWidth(rem < 814 ? rem : 814);
        }
      }
    },
    {
      eventType: "beforeunload",
      callback: (e) => e.preventDefault()
    }
  ]);

  useShortcut([
    {
      key: "s",
      ctrl: true,
      disabled: {
        state: resumeLocalData.status !== "ONGOING",
        reason: "제출 상태에선 저장할 수 없습니다"
      },
      action: () => {
        saveMutate(resumeLocalData, {
          onSuccess: () => {
            toast.success("성공적으로 저장되었습니다");
            completionRefetch();
            studentRefetch();
            sharedRefetch();
          }
        });
      }
    },
    {
      key: "u",
      ctrl: true,
      action: () =>
        submitMutate(undefined, {
          onSuccess: () => {
            toast.success(
              `성공적으로 ${resumeLocalData.status === "ONGOING" ? "제출" : "제출 취소"}되었습니다`
            );
            resumeRefetch();
          }
        })
    }
  ]);

  return (
    <Layout
      buttons={[
        {
          icon: "Send",
          title:
            resumeLocalData.status === "ONGOING" ? "제출하기" : "제출 취소하기",
          action: () =>
            submitMutate(undefined, {
              onSuccess: () => {
                toast.success(
                  `성공적으로 ${resumeLocalData.status === "ONGOING" ? "제출" : "제출 취소"}되었습니다`
                );
                resumeRefetch();
              }
            })
        },
        {
          icon: "Save",
          title: "저장하기",
          action: () =>
            saveMutate(resumeLocalData, {
              onSuccess: () => {
                toast.success("성공적으로 저장되었습니다");
                completionRefetch();
                studentRefetch();
                sharedRefetch();
              }
            }),
          disabled: resumeLocalData.status !== "ONGOING",
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
                        disabled={i.status !== "PENDING"}
                        onClick={() =>
                          confirmMutate(`?id=${i.id}`, {
                            onSuccess: () => {
                              toast.success("성공적으로 반영되었습니다");
                              listRefetch();
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
          width: `${width}px`,
          component: (
            <Custom width={`${width}px`} name="미리보기">
              <Preview width={width} ref={pdf} />
            </Custom>
          )
        }
      ]}
    >
      <div className="w-full max-w-[620px] flex justify-center py-[24px]">
        {open && (
          <div
            className="col-flex flex-center z-30 backdrop-blur-[2px] gap-5 bg-[#00000099] w-full h-full absolute top-0 left-0 cursor-pointer"
            onClick={() => {
              localStorage.setItem("ShortcutAlert", "true");
              setOpen(false);
            }}
          >
            <div className="col-flex items-center gap-3">
              <span className="text-[28px] font-bold">
                Repo 에디터에 단축키가 추가되었습니다
              </span>
              <span className="text-[20px]">CTRL(COMMAND) + S : 저장</span>
              <span className="text-[20px]">
                CTRL(COMMAND) + U : 제출 (제출 취소)
              </span>
            </div>

            <span className="text-gray-100 text-[15px]">
              이 창은 클릭하여 닫을 수 있습니다.
            </span>
          </div>
        )}

        <div className="w-fit col-flex gap-6">{sections[idNum - 1]}</div>
      </div>
    </Layout>
  );
};
