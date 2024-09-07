import { resumeData } from "@/apis";
import { Box, Title } from "ui";

const types = {
  ONGOING: "작성중",
  SUBMITTED: "제출됨",
  RELEASED: "공개됨"
};

export const Status = () => {
  const { data } = resumeData();

  return (
    <Box height="fit-content" padding="32px" className="">
      <Title title="상태" />
      <span className="text-[40px] font-bold text-gray-200 leading-none">
        {types[data?.status || "ONGOING"]}
      </span>
    </Box>
  );
};
