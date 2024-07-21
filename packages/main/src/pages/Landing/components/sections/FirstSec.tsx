import { StartButton } from "../StartButton";
import image from "@/assets/Mockup.png";
import { Layout } from "../Layout";
import { Logo } from "@/assets";

export const FirstSec = () => {
  return (
    <Layout>
      <div className="col-flex gap-8 w-full relative">
        <Logo width="180px" />
        <span className="text-title4">이력서 온라인 작성 서비스</span>
        <StartButton />
        <img
          src={image}
          className="absolute right-0 -bottom-96 min-w-[684px] w-full max-w-[1000px] z-10"
        />
      </div>
      <div className="w-full h-52 absolute -bottom-24 left-0 bg-[#1B1B1B]" />
    </Layout>
  );
};
