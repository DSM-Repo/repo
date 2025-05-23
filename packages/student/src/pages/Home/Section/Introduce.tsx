import { Box, Title } from "ui";
import { resumeIntroduce } from "@/api";

export const Introduce = () => {
  const { data } = resumeIntroduce();

  return (
    <Box height="100%" padding="32px" className="gap-6">
      <Title title="자기소개" subTitle="자기소개에 작성한 내용을 바탕으로 나를 더 성장시켜 보세요." />
      <div className="col-flex gap-3 whitespace-pre-wrap h-fit">
        <span className="text-[20px] font-normal inline-block w-full">{data?.introduce.heading}</span>
        <span className="text-[16px] font-light break-words w-full whitespace-pre-wrap">{data?.introduce.introduce}</span>
      </div>
    </Box>
  );
};
