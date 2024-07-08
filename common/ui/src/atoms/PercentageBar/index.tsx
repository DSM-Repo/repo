import { HTMLAttributes } from "react";

type TTitle = {
  title: string;
  subTitle?: string;
};

interface IProp extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: TTitle;
  progress: number;
  type?: "Full" | "NoTitle" | "Simple";
  color?: "Blue" | "Green";
}

const colors = {
  Blue: "bg-[#2492E2]",
  Green: "bg-[#42E224]",
};

const defaultTitle = {
  title: "진행도",
};

export const PercentageBar = ({
  title = defaultTitle,
  progress,
  type = "Full",
  color = "Green",
  ...props
}: IProp) => {
  return (
    <div className="w-full" {...props}>
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
        className={`rounded-full w-full bg-[#454545] relative overflow-hidden ${
          type === "Simple" ? "h-1" : "h-8"
        }`}
      >
        <div
          className={
            "absolute h-full transition-all duration-300 " + colors[color]
          }
          style={{ width: progress + "%" }}
        />
      </div>
    </div>
  );
};
