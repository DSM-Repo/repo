import { Layout } from "../Layout";
import Mockup from "@/assets/Mockup2.png";

export const SecondSec = () => {
  return (
    <Layout>
      <div className="min-w-[225px] flex flex-col gap-[35px]">
        <span className="font-semibold text-[56px] leading-tight">간편한</span>
        <span className="text-[#C5C5C5] font-semibold text-[32px]">
          정보 입력
        </span>
        <span className="text-body4 leading-tight">
          간편하게 정보들을 입력하고,
          <br /> 멋진 이력서를 생성해 보세요
        </span>
      </div>
      <img src={Mockup} className="w-[650px] h-[450px] object-cover" />
    </Layout>
  );
};
