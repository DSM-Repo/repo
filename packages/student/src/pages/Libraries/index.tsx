import { Box } from "ui";
import { libraries } from "./constants";
import { useNavigate } from "react-router-dom";

type TLibrary = {
  year: number;
  grade: number;
  uuid: string;
};

export const Library = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center py-10 w-full h-full">
      <div className="flex flex-col w-fit gap-2">
        <span className="text-white font-bold text-xl">도서관</span>
        <span className="text-[#999999] font-light">
          지금까지 공개된 레주메북들을 읽어보세요
        </span>
        {libraries.map((item: TLibrary) => (
          <Box
            size={{ width: "900px", height: "fit-content", padding: "30px" }}
            onClick={() => navigate(`/books/${item.uuid}`)}
            className="cursor-pointer"
          >
            <span className="text-white text-[20px] font-medium line-fit">
              {item.year} {item.grade}학년 n학기
            </span>
          </Box>
        ))}
      </div>
    </div>
  );
};
