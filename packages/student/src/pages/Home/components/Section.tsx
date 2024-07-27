import { IStudent } from "ui/src/organisms/SideBar/types";
import { introduce } from "../constants";
import { Box, PercentageBar } from "ui";

interface IProp {
  user: IStudent;
}

const layout = { width: "100%", height: "100%", padding: "20px" };

const liStyle = "text-body7";

const accent = {
  green: "font-bold text-[#42E224]",
  gray: "font-bold text-[#686868]",
};

export const Section = ({ user }: IProp) => {
  return (
    <div className="grid grid-cols-[fit-content(100%)_auto] gap-4 grid-rows-[fit-content(3ch)_1fr]">
      <Box size={layout} className="gap-3">
        <span className="text-body4 leading-none">완성도</span>
        <span className="text-[#BBBBBB] text-body6 leading-none">
          레주메가 <span className="text-[#42E224]">{user.progress}%</span>{" "}
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
        size={{ ...layout, height: "350px" }}
        className="row-[1/span_2] col-start-2 gap-3"
      >
        <span className="text-body4 leading-none">자기소개</span>
        <span className="text-body6">{introduce.title}</span>
        <span className="text-body7">{introduce.content}</span>
      </Box>
      <Box size={layout}>
        <span className="text-body4 leading-none">최근 공개된 레주메북</span>
      </Box>
    </div>
  );
};
