import { Title } from "./Title";

export const Third = () => {
  return (
    <div className="flex gap-4 w-full py-20">
      <div className="col-flex gap-10 w-full pt-[120px]">
        <Title direction="left">실시간 결과 확인</Title>
        <div className="col-flex gap-4 w-full">
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0 w-[280px] h-fit py-3 px-4 rounded-lg bg-gray-700">
              <span className="leading-none text-gray-50">
                작성하고 있는 정보가|
              </span>
            </div>
            <div className="w-full h-1 rounded-[100px] bg-green-400" />
          </div>
          <span className="text-[20px] font-light text-gray-50">
            실시간으로 반영되는 모습을 확인하며 작업할 수 있어요.
          </span>
        </div>
      </div>
      <img
        src="/landing_live.png"
        className="w-[443px] h-[656px]"
        loading="lazy"
      />
    </div>
  );
};
