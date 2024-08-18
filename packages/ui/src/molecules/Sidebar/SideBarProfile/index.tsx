import { Prefix, Profile } from "../../../atoms";
import { IStudent } from "@configs/default";

export interface IProp {
  data: IStudent;
  isStudent: boolean;
}

export const SideBarProfile = ({ data, isStudent }: IProp) => {
  return (
    <div className="w-full flex gap-2 items-center">
      <Profile size={40} img={data?.profileImage} />
      <div className="grid gap-x-2 gap-y-1 grid-rows-[fit-content(2ch)_fit-content(2ch)] grid-cols-[auto_fit-content(2ch)]">
        <span className="text-body6 font-semibold leading-none w-fit">
          {data?.name}
        </span>
        <Prefix
          color={isStudent ? "green" : "blue"}
          className="col-start-2 row-start-1"
        >
          {isStudent ? data?.classInfo.schoolNumber : "Teacher"}
        </Prefix>

        {isStudent && (
          <span className="text-[#999999] text-body7 font-thin leading-none col-[1/5] row-start-2">
            {data?.majorName || "전공 미정"}
          </span>
        )}
      </div>
    </div>
  );
};
