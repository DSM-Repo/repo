import { IProp, colors, defaultTitle } from "./constants";

export const PercentageBar = ({
  title = defaultTitle,
  progress,
  type = "Full",
  color = "Green",
  ...props
}: IProp) => {
  const checkType = type === "Simple" ? "h-1" : "h-8";
  return (
    <div {...props} className={`w-full ${props.className}`}>
      {type === "Full" && (
        <div className="pb-3">
          <span className="inline text-white font-semibold text-[16px]">
            {title.title}
          </span>
          <span className="inline text-[#999999] font-semibold text-[14px]">
            {" "}
            - {title?.subTitle || `${progress}% 진행되었습니다.`}
          </span>
        </div>
      )}
      <div
        className={`rounded-full w-full bg-[#454545] relative overflow-hidden ${checkType}`}
      >
        <div
          className={`absolute h-full transition-all duration-300 ${colors[color]}`}
          style={{ width: progress + "%" }}
        />
      </div>
    </div>
  );
};
