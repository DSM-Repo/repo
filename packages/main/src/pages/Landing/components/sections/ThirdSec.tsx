import { Layout } from "../Layout";
import Mockup from "@/assets/Mockup3.png";

export const ThirdSec = () => {
  return (
    <Layout>
      <img src={Mockup} className="w-[650px] h-[450px] object-cover" />
      <div className="min-w-[315px] flex flex-col gap-[35px]">
        <span className="font-semibold text-[56px] leading-tight">빠른</span>
        <span className="text-[#C5C5C5] font-semibold text-[32px]">
          피드백 확인
        </span>
        <span className="text-body4 leading-tight">
          선생님이 피드백 해주신 내용을 바탕으로
          <br /> 레주메를 수정해 보세요
        </span>
      </div>
    </Layout>
  );
};
