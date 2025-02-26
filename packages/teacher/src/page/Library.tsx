import { Button, Dropdown, HeaderProvider, Title } from "ui";
import { useNavigate } from "react-router-dom";
import { Id, toast } from "react-toastify";
import { useState } from "react";
import { convertResume, getLibrary } from "@/apis";

export const Library = () => {
  const { data: listData, refetch } = getLibrary();
  const sortedListData = listData?.data.sort((prev, next) => (prev.year !== next.year ? next.year - prev.year : next.grade - prev.grade));

  const { mutate: convert } = convertResume();
  const navigate = useNavigate();
  const [grade, setGrade] = useState<string | undefined>(undefined);

  const handleConvert = () => {
    const load = toast.loading("PDF로 변환하고 있습니다...");
    convert((grade as string).slice(0, 1), {
      onSuccess: () => {
        refetch();
        toast.update(load as unknown as Id, {
          type: "success",
          render: "성공적으로 변환되었습니다",
          autoClose: 1500,
          closeButton: false,
          isLoading: false
        });
      }
    });
  };

  return (
    <HeaderProvider
      buttons={[
        {
          icon: "Add",
          title: "레주메북 변환",
          action: {
            type: "OPEN_MODAL",
            modalElement: (
              <div className="col-flex gap-6 w-[220px]">
                <Title title="변환" titleSize="20px" subTitle="변환할 레주메를 선택하여 변환해보세요" subTitleSize="14px" />
                <Dropdown onChange={(item) => setGrade(item as string)} placeholder="학년" suffix="학년" value={grade} size="full" selections={["1", "2", "3"]} />
                <Button disabled={!!!grade} onClick={handleConvert} size="full" direction="center" icon="Add">
                  변환
                </Button>
              </div>
            )
          }
        }
      ]}
    >
      <div className="col-flex w-full px-[60px] py-6 gap-5">
        <Title title="도서관" subTitle="지금까지 공개된 레주메북들을 읽어보세요" />
        <div className="flex w-full flex-wrap gap-5">
          {sortedListData?.map((i) => (
            <Button key={i.id} size="medium" onClick={() => navigate(`/book/${i.id}`)}>
              {`${i.year}년 ${i.grade}학년 ${i.generation}기`}
            </Button>
          ))}
        </div>
      </div>
    </HeaderProvider>
  );
};
