import { Button, JSONViewer, Dropdown, TextArea, Items } from "ui";
import { AddFeedback, getFeedback, studentRelease, students } from "@/apis";
import { findKeyWithValue } from "@configs/util";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import {
  ConfirmFeedback,
  DeleteFeedback,
  RejectFeedback,
  studentDetail
} from "@/apis";
import { Api } from "@configs/type";

const statusTable: Record<string, string> = {
  SUBMITTED: "(제출됨)",
  RELEASED: "(공개됨)"
}

const typeTable: Record<string, string> = {
  "내 정보": "WRITER_INFO",
  자기소개: "INTRODUCE",
  프로젝트: "PROJECT",
  "자격증 & 수상": "ACHIEVEMENT",
  활동: "ACTIVITY"
};

export const Resume = () => {
  const { id } = useParams();
  const { data, refetch } = studentDetail(id as string);
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
  const { mutate: release } = studentRelease();

  const navigate = useNavigate();
  const { data: resumes, refetch: refetchResumes } = students();

  const [feed, setFeed] = useState(defaultFeed);

  const onSuccess = () => {
    toast.success("성공적으로 반영되었습니다");
    refetchFeedbacks();
  };

  const filter = () => {
    const classNumber = data?.writer.class_info.grade + "";
    let list: Api.Resume.resumeStudentData[][] = [];
    resumes?.data
      .filter(
        ({ student_info }) => student_info.school_number[0] === classNumber
      )
      .forEach((i) => {
        const classNumber = Number(i.student_info.school_number[1]) - 1;
        if (!!!list[classNumber]) list[classNumber] = [];
        list[classNumber] = [...list[classNumber], i];
      });
    return list;
  };

  return (
    <JSONViewer
      data={data}
      buttons={[
        { icon: "Edit", title: "피드백 관리", action: "피드백 관리" },
        {
          icon: "Share",
          title: data?.status === "RELEASED" ? "문서 비공개" : "문서 공개",
          disabled: data?.status === "ONGOING",
          disabledReason: "미제출된 문서는 공개할 수 없습니다",
          action: () =>
            release(`/${data?.id}`, {
              onSuccess: () => {
                toast.success("성공적으로 상태를 변경하였습니다");
                refetch();
                refetchResumes();
              }
            })
        },
        {
          icon: "Users",
          title: "빠른 이동",
          action: "빠른 이동"
        }
      ]}
      sidebars={[
        {
          name: "피드백 관리",
          type: "standard",
          width: "250px",
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
                    feedbacks?.data.map((i) => (
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
                            {i.status === "CONFIRMED" ? "반영된 피드백" : ""}
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
                                onClick={() => del(`/${i.id}`, { onSuccess })}
                              >
                                삭제
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <span className="text-[14px]">아직 피드백이 없습니다</span>
                  )}
                </div>
              )
            }
          ]
        },
        {
          name: "빠른 이동",
          type: "standard",
          items: filter()?.map((i, j) => ({
            name: `${j + 1}반`,
            content: (
              <Items
                selections={i.map(
                  ({ student_info, ...other }) =>
                    `${student_info.school_number} ${student_info.name} ${statusTable[other.status] ? statusTable[other.status] : ""}`
                )}
                onClick={(value) => {
                  navigate(
                    `/resume/${filter()[j].find((n) => n.student_info.school_number === value.slice(0, 4))?.resume_id}`
                  );
                }}
                selected={`${data?.writer.class_info.school_number} ${data?.writer.name} ${data && statusTable[data.status] ? statusTable[data.status] : ""}`}
              />
            )
          })),
          width: "250px"
        }
      ]}
    />
  );
};
