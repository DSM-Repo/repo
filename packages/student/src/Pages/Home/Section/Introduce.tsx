import { introduce } from "@/apis";
import { Box, Title, useSideBarOpen } from "ui";

export const Introduce = () => {
  const { data } = introduce();
  const { sideOpened } = useSideBarOpen();

  return (
    <Box
      width="inherit"
      height={sideOpened ? "500px" : "100%"}
      padding="32px"
      className={`gap-6 col-start-2 col-end-2 row-start-2 row-end-2 ${!sideOpened ? "overflow-auto" : ""}`}
    >
      <Title
        title="자기소개"
        subTitle="자기소개에 작성한 내용을 바탕으로 나를 더 성장시켜 보세요."
      />
      <div className="col-flex gap-3 whitespace-pre-wrap overflow-auto ">
        <span className="text-[20px] font-normal inline-block w-full">
          {data?.introduce.heading}
        </span>
        <span className="text-[16px] font-light break-words w-full">
          {data?.introduce.introduce}
        </span>
      </div>
    </Box>
  );
};
