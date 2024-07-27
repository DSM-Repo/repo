import { Box } from "ui";
import { libraries } from "./constants";
import { useNavigate } from "react-router-dom";

type TLibrary = {
  year: number,
  grade: number,
  uuid: string,
};

export const Library = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center py-10 w-full h-full">
      <div className="flex flex-col w-fit gap-4">
        <div className="flex flex-col gap-3">
          <span className="text-white text-title2 leading-none">도서관</span>
          <span className="text-[#999999] text-body3 leading-none">
            지금까지 공개된 레주메북들을 읽어보세요
          </span>
        </div>

        {libraries.map((item: TLibrary) => (
          <Box
            size={{ width: "900px", height: "fit-content", padding: "25px" }}
            onClick={() => navigate(`/books/${item.uuid}`)}
            className="cursor-pointer"
          >
            <span className="text-body4">
              {item.year} {item.grade}학년 n학기
            </span>
          </Box>
        ))}
      </div>
    </div>
  );
};
