import { Layout } from "../Layout";

export const ThirdSec = () => {
  return (
    <Layout style={{ flexDirection: "row-reverse" }}>
      <div className="min-w-[315px] col-flex gap-8">
        <span className="font-semibold text-[56px]">빠른</span>
        <span className="text-[#C5C5C5] text-title1">피드백 확인</span>
        <span className="text-body4">
          선생님이 피드백 해주신 내용을 바탕으로
          <br /> 레주메를 수정해 보세요
        </span>
      </div>
      <img src="Mockup3.png" className="w-[650px] h-[450px] object-cover" />
    </Layout>
  );
};
