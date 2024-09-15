import { Button, JSONViewer, Dropdown, TextArea } from "ui";
import { AddFeedback, getFeedback } from "@/apis";
import { findKeyWithValue } from "@configs/util";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import {
  ConfirmFeedback,
  DeleteFeedback,
  RejectFeedback,
  studentDetail
} from "@/apis";

const typeTable: Record<string, string> = {
  "내 정보": "WRITER_INFO",
  자기소개: "INTRODUCE",
  프로젝트: "PROJECT",
  "자격증 & 수상": "ACHIEVEMENT",
  활동: "ACTIVITY"
};

export const Resume = () => {
  const { id } = useParams();
  const { data } = studentDetail(id as string);
  const { data: feedbacks, refetch: refetchFeedbacks } = getFeedback(
    id as string
  );
  const { mutate: add } = AddFeedback();
  const defaultFeed = {
    comment: "",
    type: "",
    resume_id: id as string
  };
  const { mutate: del } = DeleteFeedback();
  const { mutate: confirm } = ConfirmFeedback();
  const { mutate: reject } = RejectFeedback();

  const [feed, setFeed] = useState(defaultFeed);

  const onSuccess = () => {
    toast.success("성공적으로 반영되었습니다");
    refetchFeedbacks();
  };

  return (
    <JSONViewer
      data={data}
      buttons={[{ icon: "Edit", title: "피드백 관리", action: "피드백 관리" }]}
      sidebars={[
        {
          name: "피드백 관리",
          type: "standard",
          items: [
            {
              name: "피드백 작성",
              content: (
                <div className="col-flex gap-2">
                  <Dropdown
                    placeholder="항목 선택"
                    size="full"
                    selected={findKeyWithValue(typeTable, feed.type)}
                    id="type"
                    onChange={(item, id) =>
                      setFeed({ ...feed, [id as string]: typeTable[item] })
                    }
                    selections={Object.keys(typeTable)}
                  />
                  <TextArea
                    rows={10}
                    value={feed.comment}
                    id="comment"
                    onChange={(e) =>
                      setFeed({
                        ...feed,
                        [e.target.id as string]: e.target.value
                      })
                    }
                    size="full"
                    placeholder="내용 입력"
                  />
                  <Button
                    size="full"
                    disabled={data?.status !== "SUBMITTED"}
                    onClick={() =>
                      add(feed, {
                        onSuccess: () => {
                          toast.success("성공적으로 추가되었습니다");
                          setFeed(defaultFeed);
                          refetchFeedbacks();
                        },
                        onError: () => console.log("err")
                      })
                    }
                    direction="center"
                  >
                    {`피드백 추가 ${data?.status !== "SUBMITTED" ? "(미제출된 문서)" : ""}`}
                  </Button>
                </div>
              )
            },
            {
              name: "피드백 목록",
              content: (
                <div className="col-flex gap-2">
                  {feedbacks?.data.length !== 0 ? (
                    feedbacks?.data.map(
                      (i) =>
                        !i.rejected && (
                          <div className="col-flex gap-1">
                            <TextArea
                              onChange={() => {}}
                              placeholder=""
                              size="full"
                              value={i.comment}
                              disabled
                            />
                            <div className="w-full flex items-center justify-between">
                              <span className="text-[16px] text-light text-green-400">
                                {i.status === "CONFIRMED"
                                  ? "반영된 피드백"
                                  : ""}
                              </span>
                              <div className="flex gap-2 items-center">
                                {i.status === "CONFIRMED" ? (
                                  <>
                                    <span
                                      className="text-[15px] cursor-pointer"
                                      onClick={() =>
                                        confirm(`?id=${i.id}`, { onSuccess })
                                      }
                                    >
                                      수락
                                    </span>
                                    <span
                                      className="text-[15px] cursor-pointer"
                                      onClick={() =>
                                        reject(`?id=${i.id}`, { onSuccess })
                                      }
                                    >
                                      거절
                                    </span>
                                  </>
                                ) : (
                                  <span
                                    className="text-[15px] cursor-pointer"
                                    onClick={() =>
                                      del(`/${i.id}`, { onSuccess })
                                    }
                                  >
                                    삭제
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                    )
                  ) : (
                    <span className="text-[14px]">아직 피드백이 없습니다</span>
                  )}
                </div>
              )
            }
          ]
        }
      ]}
    />
  );
};
