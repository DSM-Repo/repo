import { Background } from "@/assets";

export const FourthSec = () => {
  return (
    <div className="relative flex items-center justify-center h-[95vh] w-full">
      <div className="flex flex-col items-center gap-4 absolute z-20">
        <span className="font-semibold text-5xl line-fit">깔끔한</span>
        <span className="font-semibold text-3xl line-fit">나만의 레주메</span>
        <button className="w-fit mt-4 px-4 py-2 border-2 border-white rounded-sm pointable">
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
