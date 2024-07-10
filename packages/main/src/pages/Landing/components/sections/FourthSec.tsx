import { Background } from "@/assets";

export const FourthSec = () => {
  return (
    <div className="relative flex items-center justify-center h-[95vh] w-full">
      <div className="flex flex-col items-center gap-2 absolute z-20">
        <span className="text-white font-semibold text-[50px] line-fit">
          깔끔한
        </span>
        <span className="text-white font-semibold text-[30px] line-fit">
          나만의 레주메
        </span>
        <button className="mt-4 text-white w-[fit-content] px-4 py-2 border-2 border-white rounded-[2px] pointable">
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
