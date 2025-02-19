import { Title } from "./Title";

export const Second = () => {
  return (
    <section className="col-flex items-center gap-8">
      <Title direction="center">손쉽게 작성하는 이력서</Title>
      <div className="flex justify-center gap-12 w-full h-fit">
        <div className="col-flex">
          <div className="w-[538px] h-[228px] flex flex-center bg-[#333333] rounded-xl">
            <img src="/lan_2_1.png" width={228} height={180} />
          </div>
          <span className="text-[24px] font-bold text-gray-50 mt-4 w-[528px]">이력서 정보별 작성</span>
          <span className="text-[16px] font-light leading-tights text-gray-50 mt-3 w-[528px]">
            정보별로 모아놓은 탭을 통해, 작성하고자 하는 곳을
            <br />
            빠르게 오가며 채워나갈 수 있어요.
          </span>
        </div>
        <div className="col-flex">
          <div className="w-[538px] h-[228px] flex flex-center bg-[#333333] rounded-xl">
            <img src="/lan_2_2.png" width={348} height={180} />
          </div>
          <span className="text-[24px] font-bold text-gray-50 mt-4 w-[528px]">다양한 입력</span>
          <span className="text-[16px] font-light leading-tights text-gray-50 mt-3 w-[528px]">이력서 정보들의 형식에 맞게, 다양한 종류의 입력을 제공해 드리고 있어요.</span>
        </div>
      </div>
    </section>
  );
};
