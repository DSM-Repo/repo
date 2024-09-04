import { Button } from "./Button";
import { Title } from "./Sections/Title";

export const SlideSection = () => {
  return (
    <div className="relative flex flex-center w-full h-[420px] overflow-hidden bg-[#4444443D]">
      <div className="absolute -left-[750px] -top-10 -rotate-45 overflow-hidden">
        <div className="flex gap-5 scrolling-slider">
          <img src="/SlideLeft.png" />
          <img src="/SlideLeft.png" />
          <img src="/SlideLeft.png" />
        </div>
      </div>
      <div className="col-flex gap-4 items-center">
        <Title direction="center">깔끔한 나만의 레주메</Title>
        <span className="text-[16px] text-gray-50 leading-none">
          로그인하여 바로 시작해 보세요.
        </span>
        <Button>Repo 사용하기</Button>
      </div>
      <div className="absolute -right-[980px] -top-10 -rotate-45 overflow-hidden">
        <div className="flex gap-5 scrolling-slider-rev">
          <img src="/SlideRight.png" />
          <img src="/SlideRight.png" />
          <img src="/SlideRight.png" />
        </div>
      </div>
    </div>
  );
};
