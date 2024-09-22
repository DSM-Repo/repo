import { getLibrary } from "@/apis";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, Layout, Title } from "ui";

export const Library = () => {
  const { data } = getLibrary();
  const navigate = useNavigate();
  const [grade, setGrade] = useState<string | undefined>(undefined);

  return (
    <Layout
      buttons={[
        {
          icon: "Add",
          action: (
            <div className="col-flex gap-6 w-[220px]">
              <Title
                title="변환"
                titleSize="20px"
                subTitle="변환할 레주메를 선택하여 변환해보세요"
                subTitleSize="14px"
              />
              <Dropdown
                onChange={(item: string) =>
                  setGrade(item !== "학년" ? item : undefined)
                }
                placeholder="학년"
                selected={grade}
                size="full"
                selections={["1학년", "2학년", "3학년", "학년"]}
              />
              <Button
                onClick={() => {}}
                size="full"
                direction="center"
                icon="Add"
              >
                변환
              </Button>
            </div>
          ),
          title: "레주메북 변환"
        }
      ]}
    >
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
