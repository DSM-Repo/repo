interface IProp {
  percent?: number;
  status?: "ONGOING" | "SUBMITTED" | "RELEASED";
}

export const Percentage = ({ percent, status }: IProp) => {
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
      {status === "ONGOING" ? (
        <div className="w-full h-[8px] rounded-[100px] overflow-hidden bg-gray-700">
          <div
            style={{ width: percent + "%" }}
            className="h-full bg-green-400 transition-all duration-150"
          />
        </div>
      ) : (
        <span className="text-green-500 text-[14px]">
          현재 {status === "SUBMITTED" ? "제출" : "공개"}된 상태에요.
        </span>
      )}
    </div>
  );
};
