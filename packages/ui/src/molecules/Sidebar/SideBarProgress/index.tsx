import { PercentageBar } from "../../../atoms";

interface IProp {
  progress: Number;
  isStudent: boolean;
}

export const SideBarProgress = ({ progress, isStudent }: IProp) => {
  return isStudent ? (
    <div className="col-flex gap-3 w-full mb-5">
      <span className="text-body6 leading-none">완성도</span>
      <span className="text-[#BBBBBB] text-body7 font-thin leading-none">
        레주메가{" "}
        <span className="text-[#42E224] font-semibold leading-none">
          {progress.toString()}%
        </span>{" "}
        완성되었어요
      </span>
      <PercentageBar progress={progress} type="Simple" />
    </div>
  ) : (
    <></>
  );
};
