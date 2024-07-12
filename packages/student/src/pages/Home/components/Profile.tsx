import { IStudent } from "ui/src/organisms/SideBar/types";
import { Profile as User } from "ui";

interface IProp {
  user: IStudent;
}

export const Profile = ({ user }: IProp) => {
  return (
    <div className="flex gap-3 items-center self-end">
      <User size={125} />
      <div className="grid grid-cols-[fit-content(16ch)_fit-content(16ch)] items-center gap-2">
        <span className="col-start-1 text-[30px] font-bold text-white line-fit">
          {user.name}
        </span>
        <span className="col-start-2 self-end text-[20px] font-medium text-white text-whitev line-fit">
          {user.grade}학년 {user.class}반 {user.number}번
        </span>
        <span className="col-start-1 row-start-2 col-[1/span_2] text-white font-light text-[20px] line-fit">
          {user.major || "전공 미정"}
        </span>
      </div>
    </div>
  );
};
