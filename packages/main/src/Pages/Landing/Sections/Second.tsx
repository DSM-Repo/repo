import { Title } from "./Title";

export const Second = () => {
  return (
    <section className="col-flex gap-8 w-full py-20">
      <Title direction="center">손쉽게 작성하는 이력서</Title>
      <div className="flex justify-center gap-6 w-full h-fit">
        <div className="col-flex w-fit mr-[24px]">
          <img src="/landing_award.png" className="w-[528px] h-[228px]" />
          <span className="text-[24px] font-bold text-gray-50 mt-4">
            이력서 정보별 작성
          </span>
          <span className="text-[16px] font-light leading-tights text-gray-50 mt-3">
            정보별로 모아놓은 탭을 통해, 작성하고자 하는 곳을
            <br />
            빠르게 오가며 채워나갈 수 있어요.
          </span>
        </div>
        <div className="col-flex w-fit">
          <img src="/landing_nav.png" className="w-[528px] h-[228px]" />
          <span className="text-[24px] font-bold text-gray-50 mt-4">
            다양한 입력
          </span>
          <span className="text-[16px] font-light leading-tights text-gray-50 mt-3">
            이력서 정보들의 형식에 맞게, 다양한 종류의 입력을 제공해 드리고
            있어요.
          </span>
        </div>
      </div>
    </section>
  );
};
