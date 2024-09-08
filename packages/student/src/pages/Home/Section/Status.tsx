import { resumeData } from "@/apis";
import { useNavigate } from "react-router-dom";
import { Box, Button, Title } from "ui";

const types = {
  ONGOING: "작성중",
  SUBMITTED: "제출됨",
  RELEASED: "공개됨"
};

export const Status = () => {
  const { data } = resumeData();
  const navigate = useNavigate();

  return (
    <Box padding="32px" className="col-start-2 col-end-2 row-start-1 row-end-1">
      <div className="w-full flex items-center justify-between">
        <div className="col-flex gap-2">
          <Title title="상태" />
          <span className="text-[40px] font-bold text-gray-200 leading-none">
            {types[data?.status || "ONGOING"]}
          </span>
        </div>

        <Button onClick={() => navigate("/write/1")} size="fit" icon="File">
          내 레주메 확인하기
        </Button>
      </div>
    </Box>
  );
};
