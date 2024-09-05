import { Box, Title, useSideBarOpen } from "ui";
import { Ternary } from "@configs/util";
import { completion } from "@/apis";

interface IProp {
  title: string;
  complete?: boolean;
}

const Item = ({ title, complete }: IProp) => {
  return (
    <div className="p-3 flex w-full items-center justify-between">
      <span className="text-[16px] font-normal">{title} </span>
      <Ternary data={complete}>
        <span className="text-[16px] px-2 py-1 bg-green-800 border-green-700 border-[1px] rounded-lg text-green-400">
          완성됨
        </span>
      </Ternary>
    </div>
  );
};

export const Completion = () => {
  const { data: complete } = completion();
  const { sideOpened } = useSideBarOpen();

  return (
    <Box
      width={sideOpened ? "100%" : "fit-content"}
      className="gap-5"
      padding="32px 20px 32px 20px"
    >
      <div className="px-3">
        <Title title="레주메 완성도" subTitle="레주메를 완성해 보세요" />
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-[200px] col-flex gap-6">
          <div className="col-flex w-full items-center justify-between">
            <Item title="내 정보" complete={complete?.writer_info} />
            <Item title="자기소개" complete={complete?.introduce} />
            <Item title="프로젝트" complete={complete?.project} />
            <Item
              title="자격증 & 수상"
              complete={complete?.certificate_and_award}
            />
            <Item title="활동" complete={complete?.activity} />
          </div>
        </div>
      </div>
    </Box>
  );
};
