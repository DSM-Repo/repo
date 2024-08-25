import { Prefix, Profile } from "../../../atoms";
import { IStudent } from "@configs/util";

export interface IProp {
  data: IStudent | { name: string };
  isStudent: boolean;
}

export const SideBarProfile = ({ data, isStudent }: IProp) => {
  if (isStudent) {
    return (
      <div className="w-full h-fit flex gap-2 items-center">
        {/*@ts-expect-error*/}
        <Profile size={40} img={data?.profile_image} />
        <div className="grid gap-x-2 gap-y-1 grid-rows-[fit-content(2ch)_fit-content(2ch)] grid-cols-[auto_fit-content(2ch)]">
          <span className="text-body6 font-semibold leading-none w-fit">
            {data?.name}
          </span>
          <Prefix
            color={isStudent ? "green" : "blue"}
            className="col-start-2 row-start-1"
          >
            {/*@ts-expect-error*/}
            {data?.class_info.school_number}
          </Prefix>

          <span className="text-[#999999] text-body7 font-thin leading-none col-[1/5] row-start-2">
            {/*@ts-expect-error*/}
            {data?.major_name || "전공 미정"}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-fit flex gap-2 items-center">
      {/*@ts-expect-error*/}
      <Profile size={40} img={data?.profile_image} />
      <div className="grid gap-x-2 gap-y-1 grid-rows-[fit-content(2ch)_fit-content(2ch)] grid-cols-[auto_fit-content(2ch)]">
        <span className="text-body6 font-semibold leading-none w-fit">
          {data?.name}
        </span>
        <Prefix
          color={isStudent ? "green" : "blue"}
          className="col-start-2 row-start-1"
        >
          Teacher
        </Prefix>
      </div>
    </div>
  );
};
