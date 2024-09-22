import { Ternary, useAuth } from "@configs/util";
import { Profile as Image, Icon } from "../../";
import { useState } from "react";

interface IProp {
  img?: string;
  name: string;
  major: string;
}
export const Profile = ({ img, name, major }: IProp) => {
  const [opened, setOpened] = useState(false);
  const { delToken } = useAuth();

  const handleLogout = () => {
    delToken();
    window.location.replace(process.env.VITE_APP_URL_MAIN);
  };

  const handleInfo = () => {
    window.location.replace("https://github.com/DSM-Repo");
  };

  return (
    <div className="w-full h-fit relative">
      <div
        className="w-full h-fit flex justify-between gap-3 p-3 items-center cursor-pointer"
        onClick={() => setOpened((prev) => !prev)}
      >
        <Image img={img} size={40} />
        <div className="col-flex gap-1 w-full h-fit">
          <span className="font-normal text-[16px] leading-none">{name}</span>
          <span className="text-gray-200 font-light text-[14px] leading-none">
            {major}
          </span>
        </div>
        <Icon name="Arrow" rotate={opened ? "up" : "down"} size={20} />
      </div>
      <Ternary data={opened}>
        <div className="top-[72px] z-30 shadow-[0_4px_12px_0_rgba(0,0,0,0.32)] absolute w-full rounded-xl p-1 bg-gray-800 border-[1px] border-gray-400">
          <div
            className="hover:bg-gray-700 transition-all duration-150 w-full p-3 flex items-center gap-3 rounded-lg cursor-pointer"
            onClick={handleLogout}
          >
            <Icon name="Logout" />
            <span className="text-[15px] font-normal">로그아웃</span>
          </div>
          <div
            className="hover:bg-gray-700 transition-all duration-150 w-full p-3 flex items-center gap-3 rounded-lg cursor-pointer"
            onClick={handleInfo}
          >
            <Icon name="Info" color="#999999" />
            <span className="text-[15px] font-normal text-gray-100">
              서비스 정보
            </span>
          </div>
        </div>
      </Ternary>
    </div>
  );
};
