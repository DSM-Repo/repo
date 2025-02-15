import { useNavigate } from "react-router-dom";
import { Button, HeaderProvider } from "ui";
import { libraryList } from "@/api";

export const Library = () => {
  const { data: listData } = libraryList();
  const sortedListData = listData?.data.sort((prev, next) => (prev.year !== next.year ? next.year - prev.year : next.grade - prev.grade));

  const navigate = useNavigate();

  return (
    <HeaderProvider>
      <div className="col-flex gap-4 px-[60px] py-6">
        <div className="flex w-full flex-wrap gap-5">
          {sortedListData?.map(({ id, year, grade, generation }) => (
            <Button size="medium" onClick={() => navigate(`/book/${id}`)}>
              {`${year}년 ${grade}학년 ${generation}기`}
            </Button>
          ))}
        </div>
      </div>
    </HeaderProvider>
  );
};
