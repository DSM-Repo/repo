import { studentDetail } from "@/apis/document";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  acceptFeedback,
  addFeedback,
  deleteFeedback,
  feedback as getFeedback,
  rejectFeedback
} from "@/apis/feedback";
import { Box, Dropdown, Inform, Projects, Textarea, Button } from "ui";
import { useOpen } from "@/hooks/useOpen";
import { toast } from "react-toastify";

export type typeType =
  | "WRITER_INFO"
  | "INTRODUCE"
  | "ACHIEVEMENT"
  | "ACTIVITY"
  | "PROJECT";

const type: { [keys in typeType]: string } = {
  WRITER_INFO: "내 정보",
  INTRODUCE: "자기소개",
  ACHIEVEMENT: "자격증 & 수상",
  ACTIVITY: "활동",
  PROJECT: "프로젝트"
};

interface IFeedback {
  comment: string;
  type: typeType;
}

const defaultFeed: IFeedback = {
  comment: "",
  type: "WRITER_INFO"
};

export const TeacherView = () => {
  const { id } = useParams();
  const { opened, setOpened } = useOpen();
  const { data: file, refetch: refetchDetail } = studentDetail(id as string);
  const [max, setMax] = useState({ inform: 0, projects: 0 });
  const realMax = Object.values(max).reduce((acc, prev) => acc + prev, 0);
  const { data: feedbacks, refetch: refetchFeedbacks } = getFeedback(
    id as string
  );
  const [page, setPage] = useState(1);
  const [feedback, setFeedback] = useState<IFeedback>(defaultFeed);
  const { mutate: add } = addFeedback();

  const { mutate: accept } = acceptFeedback();
  const { mutate: del } = deleteFeedback();
  const { mutate: reject } = rejectFeedback();

  useEffect(() => {
    refetchDetail();
  }, []);

  const handleClick = (value: number) => {
    if (value < 1 || value > realMax) return;
    setPage(value);
  };

  const handleAct = (message: string) => {
    refetchFeedbacks();
    toast.success(message);
  };

  if (file) {
    return (
      <div className="w-full h-full col-flex justify-between items-center overflow-hidden relative">
        <div className="flex w-[595px] max-h-[841px] h-full overflow-y-auto overflow-x-hidden">
          <div
            className="w-full h-full flex"
            style={{ transform: `translateX(-${595 * (page - 1)}px)` }}
          >
            <Inform data={file} setMax={setMax} fitA5 />
            {file.project_list.map((i) => (
              <Projects data={i} setMax={setMax} fitA5 />
            ))}
          </div>
        </div>
        {opened === "피드백 목록" && (
          <Box
            className="absolute bottom-[36.7px] right-0 gap-3 shadow-2xl"
            width="340px"
            height="calc(100% - 36.7px)"
            padding="20px"
            round={{ all: 0 }}
          >
            <div className="w-full flex items-center justify-between">
              <span className="text-body4">피드백 목록</span>
              <Icon
                icon="ph:x-bold"
                color="white"
                className="cursor-pointer"
                width={25}
                onClick={() => setOpened("")}
              />
            </div>
            <div className="col-flex gap-3 h-full w-full overflow-y-auto">
              {feedbacks?.data.map((i) => (
                <div className="col-flex gap-1 w-full h-fit items-end ">
                  <Box color="light" width="30px">
                    <span className="text-body6 break-words whitespace-pre-line">
                      {i.comment}
                    </span>
                  </Box>
                  <div className="w-full flex items-center justify-between">
                    {i.status === "CONFIRMED" ? (
                      <span className="text-lime-300">반영된 피드백</span>
                    ) : (
                      <div />
                    )}
                    {i.status === "CONFIRMED" ? (
                      <div className="flex items-center gap-3">
                        <span
                          className="text-body6 cursor-pointer"
                          onClick={() =>
                            accept(
                              { id: i.id },
                              {
                                onSuccess: () =>
                                  handleAct("성공적으로 수락되었습니다")
                              }
                            )
                          }
                        >
                          수락
                        </span>
                        <span
                          className="text-body6 cursor-pointer"
                          onClick={() =>
                            reject(
                              { id: i.id },
                              {
                                onSuccess: () =>
                                  handleAct("성공적으로 거절되었습니다")
                              }
                            )
                          }
                        >
                          거절
                        </span>
                      </div>
                    ) : (
                      <span
                        className="text-body6 cursor-pointer"
                        onClick={() =>
                          del(
                            { id: i.id },
                            {
                              onSuccess: () =>
                                handleAct("성공적으로 삭제되었습니다")
                            }
                          )
                        }
                      >
                        삭제
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Box>
        )}

        {opened === "피드백 작성" && (
          <Box
            className="absolute bottom-[36.7px] right-0 gap-3 shadow-2xl"
            padding="20px"
            round={{ all: 0 }}
          >
            <div className="w-full flex items-center justify-between">
              <span className="text-body4">피드백 작성</span>
              <Icon
                icon="ph:x-bold"
                color="white"
                className="cursor-pointer"
                width={25}
                onClick={() => setOpened("")}
              />
            </div>

            <Dropdown
              label="항목"
              selections={[
                "내 정보",
                "자기소개",
                "자격증 & 수상",
                "활동",
                "프로젝트"
              ]}
              selected={type[feedback.type]}
              size="large"
              onSelect={(data) =>
                setFeedback((prev) => ({
                  ...prev,
                  type: Object.keys(type).find(
                    (key) => type[key as typeType] === data
                  ) as typeType
                }))
              }
              placeholder="피드백할 항목을 선택하세요"
            />
            <Textarea
              label="내용"
              placeholder="피드벡 내용을 입력하세요"
              size="large"
              value={feedback.comment}
              rows={12}
              onChange={(e) =>
                setFeedback((prev) => ({ ...prev, comment: e.target.value }))
              }
            />
            <Button
              onClick={() =>
                add(
                  { ...feedback, resume_id: id as string },
                  {
                    onSuccess: () => {
                      toast.success("성공적으로 추가되었습니다!");
                      setFeedback(defaultFeed);
                      refetchFeedbacks();
                    }
                  }
                )
              }
              size="large"
              color="light"
            >
              작성 완료
            </Button>
          </Box>
        )}

        <Box
          width="100%"
          className="flex-row justify-center items-center"
          round={{ all: 0 }}
        >
          <Icon
            icon="ep:arrow-left-bold"
            color="white"
            className="cursor-pointer"
            onClick={() => handleClick(page - 1)}
          />
          <span className="text-body8">
            {page.toString().padStart(2, "0")} /{" "}
            {realMax.toString().padStart(2, "0")}
          </span>
          <Icon
            icon="ep:arrow-right-bold"
            className="cursor-pointer"
            color="white"
            onClick={() => handleClick(page + 1)}
          />
        </Box>
      </div>
    );
  }
};
