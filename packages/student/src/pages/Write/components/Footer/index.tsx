import { useNavigate } from "react-router-dom";
import { Box } from "ui";
import { Content } from "./Content";

interface IProp {
  section: number;
}

export const Footer = ({ section }: IProp) => {
  const navigate = useNavigate();

  return (
    <Box
      size={{ width: "100%", height: "55px", padding: "10px" }}
      style={{ flexDirection: "row" }}
      className="px-[1.5rem_!important] justify-between"
    >
      <div className="flex gap-5 h-full items-center w-fit">
        <Content onClick={() => {}} icon="material-symbols:save">
          저장
        </Content>
        <Content onClick={() => {}} icon="ic:baseline-delete">
          초기화
        </Content>
      </div>
      <div className="flex gap-5 h-full items-center w-fit">
        <Content
          onClick={() => navigate(`/write/${section - 1}`)}
          icon="ep:arrow-left-bold"
          disabled={section <= 1}
        >
          이전으로
        </Content>
        <Content
          onClick={() => navigate(`/write/${section + 1}`)}
          icon="ep:arrow-right-bold"
          disabled={section >= 5}
          direction="right"
        >
          다음으로
        </Content>
      </div>
    </Box>
  );
};
