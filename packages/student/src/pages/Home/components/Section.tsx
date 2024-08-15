// import { introduce } from "../constants";
import { completion, introduce } from "@/apis";
import { Box, PercentageBar } from "ui";

const liStyle = "text-body8";

const accent = (status?: boolean) =>
  status ? "font-bold text-[#42E224]" : "font-bold text-[#686868]";

export const Section = () => {
  const { data: complete } = completion();
  const { data: intro } = introduce();

  return (
    <div className="grid grid-cols-[fit-content(100%)_auto] w-full gap-4 grid-rows-[fit-content(3ch)_1fr]">
      <Box width="100%" height="100%" padding="20px" className="gap-3">
        <span className="text-body4 leading-none">완성도</span>
        <span className="text-[#BBBBBB] text-body6 leading-none">
          레주메가{" "}
          <span className="text-[#42E224]">
            {complete?.percentComplete.toString() || "0"}%
          </span>{" "}
          완성되었어요
        </span>
        <PercentageBar
          progress={complete?.percentComplete || 0}
          type="Simple"
        />
        <ul className="flex gap-2 justify-between">
          <li className={liStyle}>
            내 정보 <span className={accent(complete?.writerInfo)}>✓</span>
          </li>
          <li className={liStyle}>
            자기소개 <span className={accent(complete?.introduce)}>✓</span>
          </li>
          <li className={liStyle}>
            자격증 & 수상{" "}
            <span className={accent(complete?.certificateAndAward)}>✓</span>
          </li>
          <li className={liStyle}>
            활동 <span className={accent(complete?.activity)}>✓</span>
          </li>
          <li className={liStyle}>
            프로젝트 <span className={accent(complete?.project)}>✓</span>
          </li>
        </ul>
      </Box>
      <Box
        width="100%"
        height="350px"
        padding="20px"
        className="row-[1/span_2] col-start-2 gap-3"
      >
        <span className="text-body4 leading-none">자기소개</span>
        <span className="text-body6">{intro?.introduce.heading}</span>
        <span className="text-body7 text-[#CACACA]">
          {intro?.introduce.introduce}
        </span>
      </Box>
      <Box width="100%" height="100%" padding="20px">
        <span className="text-body4 leading-none">최근 공개된 레주메북</span>
        <div>{intro?.recentlyShared.map((i) => <>{i.title}</>)}</div>
      </Box>
    </div>
  );
};
