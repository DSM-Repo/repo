import { Profile as User } from "ui";
import { currentInfo } from "@/apis";

export const Profile = () => {
  const { data } = currentInfo();

  return (
    <div className="flex gap-3 items-center">
      <User size={125} img={data?.profileImage} />
      <div className="grid grid-cols-[fit-content(16ch)_fit-content(16ch)] items-center gap-2">
        <span className="col-start-1 text-title1 leading-none">
          {data?.name}
        </span>
        <span className="col-start-2 self-end text-body4 leading-none">
          {`${data?.classInfo.grade}`}학년 {`${data?.classInfo.classNumber}`}반{" "}
          {`${data?.classInfo.number}`}번
        </span>
        <span className="col-start-1 row-start-2 col-[1/span_2] text-body4 leading-none">
          {data?.majorName}
        </span>
      </div>
    </div>
  );
};
