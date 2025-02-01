import { Title } from "./Title";

export const Third = () => {
  return (
    <section className="flex gap-4 items-center">
      <div className="col-flex gap-10 w-full">
        <Title direction="left">실시간 결과 확인</Title>
        <div className="col-flex gap-4 w-full">
          <div className="flex gap-4 items-center">
            <span className="text-[20px] leading-[24px] text-gray-50 flex-shrink-0 w-[280px] py-3 px-4 rounded-lg bg-gray-700 flex items-center gap-2 after:w-[1px] after:h-[20px] after:bg-gray-50 after:block">
              작성하고 있는 정보가
            </span>
            <div className="w-full h-1 rounded-full bg-green-400" />
          </div>
          <span className="text-[20px] leading-[24px] font-light text-gray-50">
            실시간으로 반영되는 모습을 확인하며 작업할 수 있어요.
          </span>
        </div>
      </div>
      <img src="/lan_3.png" width={443} height={656} />
    </section>
  );
};
