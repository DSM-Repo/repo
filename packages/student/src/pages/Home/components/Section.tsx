import { IStudent } from "ui/src/organisms/SideBar/types";
import { Box, PercentageBar } from "ui";

interface IProp {
  user: IStudent;
}

const introduce = {
  title:
    "안녕하세요 :) 항상 좋은 코드를 만들어나가는 뿌듯함으로 하루하루 나아가고 있습니다. 👍",
  content:
    "문제파악부터 설계, 평가까지 복잡한 프로세스를 거쳐 만든 프로그램이 좋은 평가를 받을 때, 그 어떤 일보다 큰 성취감을 느낍니다. 읽기 쉬운 코드, 모듈화가 쉬운 코드를 지향하며 꾸준히 성장하는 개발자가 되고싶습니다.",
};

const liStyle = "text-[12px] text-white font-light";

const accent = {
  green: "font-bold text-[#42E224]",
  gray: "font-bold text-[#686868]",
};

export const Section = ({ user }: IProp) => {
  return (
    <div className="grid grid-cols-[fit-content(100%)_auto] gap-4 grid-rows-[fit-content(3ch)_1fr]">
      <Box
        size={{ width: "100%", height: "fit-content", padding: "20px" }}
        className="gap-3"
      >
        <span className="text-white font-medium text-[18px] line-fit">
          완성도
        </span>
        <span className="text-[#BBBBBB] font-thin line-fit text-[15px]">
          레주메가{" "}
          <span className="text-[#42E224] font-semibold line-fit text-[14px]">
            {user.progress}%
          </span>{" "}
          완성되었어요
        </span>
        <PercentageBar progress={user.progress} type="Simple" />
        <ul className="flex gap-2 justify-between">
          <li className={liStyle}>
            내 정보 <span className={accent["green"]}>✓</span>
          </li>
          <li className={liStyle}>
            자기소개 <span className={accent["green"]}>✓</span>
          </li>
          <li className={liStyle}>
            자격증 & 수상 <span className={accent["gray"]}>✓</span>
          </li>
          <li className={liStyle}>
            활동 <span className={accent["gray"]}>✓</span>
          </li>
          <li className={liStyle}>
            프로젝트 <span className={accent["gray"]}>✓</span>
          </li>
        </ul>
      </Box>
      <Box
        size={{ width: "100%", height: "100%", padding: "20px" }}
        className="row-[1/span_2] col-start-2 gap-2"
      >
        <span className="text-white font-medium text-[18px] line-fit">
          자기소개
        </span>
        <span className="text-white font-medium text-[15px]">
          {introduce.title}
        </span>
        <span className="text-white font-light text-[13px]">
          {introduce.content}
        </span>
      </Box>
      <Box size={{ width: "100%", height: "100%", padding: "20px" }}>
        <span className="text-white font-medium text-[18px] line-fit">
          최근 공개된 레주메북
        </span>
      </Box>
    </div>
  );
};
