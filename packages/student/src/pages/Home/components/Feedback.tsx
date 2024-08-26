import { feedback } from "@/apis";
import { useState } from "react";
import { Box } from "ui";

const section = {
  WRITER_INFO: "내 정보",
  INTRODUCE: "자기소개",
  ACHIEVEMENT: "자격증 & 수상",
  ACTIVITY: "활동",
  PROJECT: "프로젝트"
};

export const Feedback = () => {
  const [open, setOpen] = useState(false);
  const { data } = feedback();

  return (
    <div
      className={`fixed right-0 top-0 h-full flex items-center transition-all duration-300 ${open ? "" : "translate-x-[500px]"}`}
    >
      <Box
        padding="10px"
        round={{ tl: 20, bl: 20, tr: 0, br: 0 }}
        className="cursor-pointer shadow-2xl"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="inline text-body8 [writing-mode:vertical-rl]">
          피드백 목록
        </span>
      </Box>

      <Box
        className="shadow-2xl gap-3"
        width="500px"
        height="100%"
        round={{ all: 0 }}
        padding="20px"
      >
        <span className="text-body4">피드백 목록</span>
        <div className="col-flex overflow-auto gap-3">
          {data?.data.length !== 0 ? (
            data?.data.map((i) => (
              <Box color="light" width="100%" className="gap-2">
                <div className="w-full justify-between items-center flex">
                  <div className="flex items-center gap-2">
                    <span className="text-body6">{section[i.type]}</span>
                    <span className="text-body8">{i.teacher_name} 선생님</span>
                  </div>
                  {i.rejected && (
                    <span className="text-body8 text-red-500">거부됨</span>
                  )}
                </div>
                <span className="text-body7 whitespace-pre-line">
                  {i.comment}
                </span>
              </Box>
            ))
          ) : (
            <span>아직은 피드백이 없습니다..</span>
          )}
        </div>
      </Box>
    </div>
  );
};
