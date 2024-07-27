import { IStudent } from "ui/src/organisms/SideBar/types";
import { Profile as User } from "ui";

interface IProp {
  user: IStudent;
}

export const Profile = ({ user }: IProp) => {
  return (
    <div className="flex gap-3 items-center">
      <User size={125} />
      <div className="grid grid-cols-[fit-content(16ch)_fit-content(16ch)] items-center gap-2">
        <span className="col-start-1 text-title1 leading-none">
          {user.name}
        </span>
        <span className="col-start-2 self-end text-body4 leading-none">
          {user.grade}학년 {user.class}반 {user.number}번
        </span>
        <span className="col-start-1 row-start-2 col-[1/span_2] text-body4 leading-none">
          {user.major || "전공 미정"}
        </span>
      </div>
    </div>
  );
};
