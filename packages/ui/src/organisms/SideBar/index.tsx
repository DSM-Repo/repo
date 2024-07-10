import { Box, PercentageBar, Prefix, Profile } from "../../atoms";

interface IUser {
  profile?: string;
  name: string;
}

export interface IStudent extends IUser {
  type: "student";
  major?: string; // 전공 타입 따로 지정 예정
  grade: number;
  class: number;
  number: number;
  progress: number;
}

export interface ITeacher extends IUser {
  type: "teacher";
}

type TUser = IStudent | ITeacher;

interface IProp {
  user: TUser;
  children: React.ReactElement | React.ReactElement[];
}
const rounded = { tr: "0", tl: "0", br: "0", bl: "0" };

export const SideBar = ({ user, children }: IProp) => {
  const isStudent = user.type === "student";
  const align = isStudent ? "justify-between" : "justify-center";

  return (
    <Box
      size={{ width: "290px", height: "100%", padding: "20px" }}
      color="dark"
      round={rounded}
      className="border-r-[1px] border-r-[#333333]"
    >
      <div className="flex flex-col gap-10">
        <div className="w-full flex items-center gap-3">
          <Profile size={40} img={user.profile} />
          <div className={`flex flex-col h-full ${align}`}>
            <span className="text-white font-medium text-[18px] line-fit flex items-center gap-2">
              {user.name}
              <Prefix color={isStudent ? "green" : "blue"}>
                {isStudent
                  ? `${user.grade}${user.class}${user.number
                      .toString()
                      .padStart(2, "0")}`
                  : "Teacher"}
              </Prefix>
            </span>
            {isStudent && (
              <span className="text-[#999999] font-light text-[15px] line-fit">
                {user.major || "전공 미정"}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-white">메인</span>
          <div className="flex flex-col gap-1">{children}</div>
        </div>
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
