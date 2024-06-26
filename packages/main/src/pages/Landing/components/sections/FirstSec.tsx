import { Logo } from "@/assets";
import { Layout } from "../Layout";

// 여기 코드 좀 개선해야 함
export const FirstSec = () => {
  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <Layout>
        <div className="flex flex-col gap-8">
          <Logo width="200px" height="70px" />
          <span className="text-[24px] mt-[-6px] text-white font-thin line-fit">
            이력서 온라인 작성 서비스
          </span>
          <button className="text-white w-[fit-content] px-4 py-2 border-2 border-white rounded-[2px] pointable">
            Repo 시작하기
          </button>
        </div>
        <div className="w-[621px] h-[497px] bg-white z-20 relative" />
      </Layout>
      <div className="w-full h-[200px] rotate-180 absolute bottom-0 bg-[#1B1B1B] z-10" />
    </div>
  );
};
