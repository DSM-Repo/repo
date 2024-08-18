import { Box } from "ui";
import { useNavigate } from "react-router-dom";
import { getLibrary } from "@/apis/library";

export const Library = () => {
  const navigate = useNavigate();
  const { data } = getLibrary();

  return (
    <div className="flex justify-center py-10 w-full h-full">
      <div className="flex flex-col w-[800px] gap-4">
        <div className="flex flex-col gap-3">
          <span className="text-title2 leading-none">도서관</span>
          <span className="text-[#999999] text-body3 leading-none">
            지금까지 공개된 레주메북들을 읽어보세요
          </span>
        </div>

        {data?.data.map((item) => (
          <Box
            width="800px"
            padding="25px"
            onClick={() => navigate(`/book/${item.id}`)}
            className="cursor-pointer"
          >
            <span className="text-body4">
              {item.year}년 {item.grade}학년 {item.generation}학기
            </span>
          </Box>
        ))}
      </div>
    </div>
  );
};
