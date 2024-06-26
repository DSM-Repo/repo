import { Layout } from "../Layout";

export const ThirdSec = () => {
  return (
    <Layout>
      <div className="w-[650px] h-[450px] bg-white z-20 relative" />
      <div className="flex flex-col gap-6">
        <span className="text-white font-semibold text-[45px] line-fit">
          빠른
        </span>
        <span className="text-[#C5C5C5] font-semibold text-[30px] line-fit">
          피드백 확인
        </span>
        <span className="w-[325px] text-white text-[20px] font-thin line-fit-br">
          선생님이 피드백 해주신 내용을 바탕으로 레주메를 수정해 보세요
        </span>
      </div>
    </Layout>
  );
};
