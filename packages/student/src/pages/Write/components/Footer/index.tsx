import { useResumeData } from "@/hooks/useResumeData";
import { useNavigate } from "react-router-dom";
import { Content } from "./Content";
import {
  completion,
  currentInfo,
  major,
  resumeData,
  submit,
  update,
  urlType
} from "@/apis";
import { useEffect, useState } from "react";
import { Box } from "ui";
import { toast } from "react-toastify";
import { feedback as getFeedback, checkFeedback } from "@/apis";

interface IProp {
  section: number;
}

const sections = [
  ["writer-info", "WRITER_INFO"],
  ["introduce", "INTRODUCE"],
  ["achievement", "ACHIEVEMENT"],
  ["activity", "AWARD"],
  ["project", "PROJECT"]
];

export const Footer = ({ section }: IProp) => {
  const navigate = useNavigate();
  const { set, data } = useResumeData();
  const { data: resume, refetch: refetchResume } = resumeData();
  const { mutate } = update(sections[section - 1][0] as urlType);
  const { data: majors } = major();
  const { data: complete, refetch } = completion();
  const { mutate: submitMutate } = submit();
  const { refetch: refetchInfo } = currentInfo();
  const _major = majors?.data.find(
    (i) => i.name === data.writer?.major_name
  )?.id;
  const [open, setOpen] = useState(false);
  const { data: feedback, refetch: refetchFeedback } = getFeedback();
  const { mutate: acceptFeedback } = checkFeedback();
  const feedbacks = feedback?.data.filter(
    (i) => i.type === sections[section - 1][1] && i.status !== "CONFIRMED"
  );

  useEffect(() => {
    if (resume) set(() => ({ data: resume }));
  }, [resume]);

  const handleNavigate = (pos: "left" | "right") => {
    const newSection = pos === "left" ? section - 1 : section + 1;
    navigate(`/write/${newSection}`);
  };

  const handleMutate = () => {
    const onSuccess = () => {
      toast.success("성공적으로 저장되었습니다");
      refetchInfo();
      refetch();
    };

    if (_major && data) {
      if (section === 1) {
        mutate(
          {
            major_id: _major,
            email: data?.writer.email,
            url: data?.writer.url,
            skill_set: data?.writer.skill_set
          },
          { onSuccess }
        );
      } else if (section === 2) mutate(data.introduce, { onSuccess });
      else if (section === 3)
        mutate({ list: data.achievement_list }, { onSuccess });
      else if (section === 4)
        mutate({ list: data.activity_list }, { onSuccess });
      else if (section === 5)
        mutate({ list: data.project_list }, { onSuccess });
    }
  };

  const handleSubmit = () => {
    submitMutate(undefined, { onSuccess: refetchResume });
  };

  return (
    <Box
      width="100%"
      height="55px"
      padding="20px"
      style={{ flexDirection: "row" }}
      round={{ all: 0 }}
      className="px-[1.5rem_!important] justify-between border-t-[1px] border-t-[#333333]"
    >
      <div className="flex gap-5 h-full items-center w-fit">
        {data.status !== "RELEASED" && (
          <>
            <Content
              onClick={handleSubmit}
              icon="material-symbols:upload"
              disabled={
                !(
                  (data.status === "ONGOING" || data.status === "SUBMITTED") &&
                  complete?.percent_complete === 100
                )
              }
            >
              {data.status === "ONGOING" ? "제출" : "제출 취소"}
            </Content>
            <Content onClick={handleMutate} icon="material-symbols:save">
              저장
            </Content>
            <div className="relative col-flex">
              {open && (
                <Box
                  width="24rem"
                  height="20rem"
                  padding="20px"
                  className="col-flex gap-2 absolute bottom-11 self-start z-20 shadow-2xl"
                >
                  <span className="text-body3">피드백</span>
                  <div className="h-full overflow-auto col-flex gap-2">
                    {feedbacks?.length !== 0 ? (
                      <>
                        {feedbacks?.map((i) => (
                          <Box width="100%" color="light" className="gap-2">
                            <div className="w-full justify-between items-center flex">
                              <span className="text-body8">
                                {i.teacher_name} 선생님
                              </span>
                              {i.rejected && (
                                <span className="text-body8 text-red-500">
                                  거부됨
                                </span>
                              )}
                            </div>

                            <span className="text-body7">{i.comment}</span>
                            <Box
                              width="100%"
                              className="items-center cursor-pointer"
                              onClick={() =>
                                acceptFeedback(
                                  { id: i.id },
                                  { onSuccess: refetchFeedback }
                                )
                              }
                            >
                              <span className="text-body8">피드백 반영</span>
                            </Box>
                          </Box>
                        ))}
                      </>
                    ) : (
                      <span className="text-body7 text-">
                        아직은 피드백이 없습니다..
                      </span>
                    )}
                  </div>
                </Box>
              )}
              <Content
                onClick={() => setOpen((prev) => !prev)}
                icon="ic:baseline-feedback"
                className=""
              >
                피드백
              </Content>
            </div>
          </>
        )}
      </div>
      <div className="flex gap-5 h-full items-center w-fit">
        <Content
          onClick={() => handleNavigate("left")}
          icon="ep:arrow-left-bold"
          disabled={section <= 1}
        >
          이전으로
        </Content>
        <Content
          onClick={() => handleNavigate("right")}
          icon="ep:arrow-right-bold"
          disabled={section >= 5}
          direction="right"
        >
          다음으로
        </Content>
      </div>
    </Box>
  );
};
