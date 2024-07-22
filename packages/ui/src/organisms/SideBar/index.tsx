import { Box, PercentageBar, Prefix, Profile } from "../../atoms";
import { IProp } from "./types";

const rounded = { tr: "0", tl: "0", br: "0", bl: "0" };

export const SideBar = ({ user, children, ...props }: IProp) => {
  const isStudent = user.type === "student";
  const align = isStudent ? "justify-between" : "justify-center";

  return (
    <Box
      {...props}
      size={{ width: "270px", height: "100%", padding: "20px" }}
      color="dark"
      round={rounded}
      className={`grid grid-rows-[0.1fr_1fr_0.1fr] border-r-[1px] border-r-[#333333] gap-8 ${props.className}`}
    >
      <div className="w-full flex gap-2 items-center">
        <Profile size={40} img={user.profile} />
        <div className="grid gap-x-2 gap-y-1 grid-rows-[fit-content(2ch)_fit-content(2ch)] grid-cols-[auto_fit-content(2ch)]">
          <span className="text-white font-medium text-[18px] line-fit w-fit">
            {user.name}
          </span>
          <Prefix
            color={isStudent ? "green" : "blue"}
            className="col-start-2 row-start-1"
          >
            {isStudent
              ? `${user.grade}${user.class}${user.number
                  .toString()
                  .padStart(2, "0")}`
              : "Teacher"}
          </Prefix>

          {isStudent && (
            <span className="text-[#999999] font-light text-[15px] line-fit col-[1/5] row-start-2">
              {user.major || "전공 미정"}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-white">메인</span>
        <div className="flex flex-col gap-1">{children}</div>
      </div>
      {isStudent && (
        <div className="flex flex-col gap-3 w-full mb-5">
          <span className="text-white font-medium line-fit">완성도</span>
          <span className="text-[#BBBBBB] font-thin line-fit text-[15px]">
            레주메가{" "}
            <span className="text-[#42E224] font-semibold line-fit text-[14px]">
              {user.progress}%
            </span>{" "}
            완성되었어요
          </span>
          <PercentageBar progress={user.progress} type="Simple" />
        </div>
      )}
    </Box>
  );
};
