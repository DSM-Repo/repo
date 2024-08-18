import { Layout } from "../Layout";

export const SecondSec = () => {
  return (
    <Layout>
      <div className="min-w-[225px] col-flex gap-8">
        <span className="font-semibold text-[56px]">간편한</span>
        <span className="text-[#C5C5C5] text-title1">정보 입력</span>
        <span className="text-body4">
          간편하게 정보들을 입력하고,
          <br /> 멋진 이력서를 생성해 보세요
        </span>
      </div>
      <img src="/Mockup2.png" className="w-[650px] h-[450px] object-cover" />
    </Layout>
  );
};
