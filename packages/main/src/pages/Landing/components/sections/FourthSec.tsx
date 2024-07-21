import { Background } from "@/assets";

export const FourthSec = () => {
  return (
    <div className="relative flex items-center justify-center h-[95vh] w-full">
      <div className="flex flex-col items-center gap-[30px] absolute z-20">
        <span className="font-semibold text-[58px]">깔끔한</span>
        <span className="font-semibold text-[32px] leading-none">
          나만의 레주메
        </span>
        <button className="w-fit mt-4 px-[18px] py-[14px] border-2 text-body8 border-white rounded-sm pointable">
          Repo 시작하기
        </button>
      </div>
      <img
        src={Background}
        className="top-0 w-full h-full relative object-cover z-10"
      />
    </div>
  );
};
