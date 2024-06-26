import Github from "../../assets/Github.svg?react";
import Facebook from "../../assets/Facebook.svg?react";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between w-full bg-black px-[250px] h-[260px] py-[50px]">
      <div className="flex flex-col justify-between h-full">
        <span className="text-white font-semibold text-[30px]">REPO</span>
        <span className="text-white text-[17px]">©2024 Repo</span>
        <span className="text-white text-[14px]">
          주소 : 대전광역시 유성구 가정북로 76 (장동 23-9)
          <br />
          교무실 : 042-866-8822 | Fax : 042-867-9900 | 행정실 : 042-866-8885 |
          Fax : 042-863-4308
        </span>
      </div>
      <div className="flex flex-col justify-between items-end h-full">
        <div className="flex gap-3">
          <Facebook className="pointable" />
          <Github className="pointable" />
        </div>
        <span className="text-white">
          <a className="pointable">개인정보처리방침</a> |{" "}
          <a className="pointable">이용약관</a>
        </span>
      </div>
    </div>
  );
};
