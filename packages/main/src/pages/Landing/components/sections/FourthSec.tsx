import { StartButton } from "../StartButton";

export const FourthSec = () => {
  return (
    <div className="col-flex flex-center gap-8 bg-[url(/Background.png)] h-[95vh] w-full bg-no-repeat bg-cover">
      <span className="font-semibold text-[58px] leading-none">깔끔한</span>
      <span className="font-semibold text-[32px]">나만의 레주메</span>
      <StartButton />
    </div>
  );
};
