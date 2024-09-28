import { useNavigate } from "react-router-dom";
import { libraryList } from "@configs/api";
import { Button, TitleLayout } from "ui";

export const Library = () => {
  const { data: listData } = libraryList();
  const navigate = useNavigate();

  return (
    <TitleLayout
      title="도서관"
      subTitle="지금까지 공개된 레주메북들을 읽어보세요"
    >
      <div className="flex w-full flex-wrap gap-5">
        {listData?.data
          .sort((i, j) =>
            i.year !== j.year ? j.year - i.year : j.grade - i.grade
          )
          .map((i) => (
            <Button size="medium" onClick={() => navigate(`/book/${i.id}`)}>
              {`${i.year}년 ${i.grade}학년 ${i.generation}기`}
            </Button>
          ))}
      </div>
    </TitleLayout>
  );
};
