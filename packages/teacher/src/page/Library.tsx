import { getLibrary } from "@/apis";
import { useNavigate } from "react-router-dom";
import { Button, Layout, Title } from "ui";

export const Library = () => {
  const { data } = getLibrary();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="col-flex w-full px-[60px] py-6 gap-5">
        <Title
          title="도서관"
          subTitle="지금까지 공개된 레주메북들을 읽어보세요"
        />
        <div className="flex w-full flex-wrap gap-5">
          {data?.data
            .sort((i, j) =>
              i.year !== j.year ? j.year - i.year : j.grade - i.grade
            )
            .map((i) => (
              <Button size="medium" onClick={() => navigate(`/book/${i.id}`)}>
                {`${i.year}년 ${i.grade}학년 ${i.generation}기`}
              </Button>
            ))}
        </div>
      </div>
    </Layout>
  );
};
