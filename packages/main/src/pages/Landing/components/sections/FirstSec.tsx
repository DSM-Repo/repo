import { Logo } from "@/assets";
import { Layout } from "../Layout";
import image from "@/assets/Mockup.png";

// 여기 코드 좀 개선해야 함
export const FirstSec = () => {
  return (
    <Layout>
      <div className="relative w-full flex flex-col gap-[40px]">
        <Logo width="180px" height="70px" />
        <span className="text-[28px] font-thin leading-none text-[#F6F6F6]">
          이력서 온라인 작성 서비스
        </span>
        <button className="w-fit px-[18px] py-[14px] text-body8 border-2 border-white rounded-[2px] pointable mt-[4px]">
          Repo 시작하기
        </button>
        <img
          src={image}
          className="absolute right-0 bottom-[-15rem] min-w-[684px] w-full max-w-[1000px] h-fit mb-[-100px] z-20 object-fit"
        />
      </div>

      <div className="w-full h-[200px] rotate-180 absolute bottom-[-110px] left-0 bg-[#1B1B1B] z-10"></div>
    </Layout>
  );
};
