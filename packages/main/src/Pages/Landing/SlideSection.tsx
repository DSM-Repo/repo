import { Button } from "./Button";
import { Title } from "./Sections";

export const SlideSection = () => {
  return (
    <div className="relative w-full h-[420px] overflow-hidden">
      <div className="absolute -left-[750px] -top-10 -rotate-45">
        <div className="flex gap-5 scrolling-slider">
          <img width={600} height={263} src="/lan_5_1.png" />
          <img width={600} height={263} src="/lan_5_1.png" />
          <img width={600} height={263} src="/lan_5_1.png" />
        </div>
      </div>
      <div className="absolute w-full h-full bg-[#000000AA] col-flex gap-4 flex-center z-20">
        <Title direction="center">깔끔한 나만의 레주메</Title>
        <span className="text-[16px] text-gray-50 leading-none">로그인하여 바로 시작해 보세요.</span>
        <Button>Repo 사용하기</Button>
      </div>
      <div className="absolute -right-[980px] -top-10 -rotate-45">
        <div className="flex gap-5 scrolling-slider-rev">
          <img width={600} height={263} src="/lan_5_2.png" />
          <img width={600} height={263} src="/lan_5_2.png" />
          <img width={600} height={263} src="/lan_5_2.png" />
        </div>
      </div>
    </div>
  );
};
