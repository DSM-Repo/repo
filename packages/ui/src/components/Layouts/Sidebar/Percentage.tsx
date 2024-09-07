interface IProp {
  percent?: number;
}

export const Percentage = ({ percent }: IProp) => {
  return (
    <div className="col-flex gap-4 w-full h-fit py-6 px-3">
      <span className="font-semibold text-[20px] leading-none">완성도</span>
      <span className="text-[14px] font-light leading-none text-gray-100">
        레주메가{" "}
        <span className="text-[14px] font-semibold leading-none text-green-400">
          {percent || 0}%
        </span>{" "}
        완성되었어요
      </span>
      <div className="w-full h-[8px] rounded-[100px] overflow-hidden bg-gray-700">
        <div style={{ width: percent + "%" }} className="h-full bg-green-400" />
      </div>
    </div>
  );
};
