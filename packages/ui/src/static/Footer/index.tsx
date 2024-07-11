import Github from "./Github.svg?react";
import Facebook from "./Facebook.svg?react";
import { HTMLAttributes } from "react";

export const Footer = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={`flex items-center justify-center px-56 w-full bg-black h-[260px] ${props.className}`}
    >
      <div className="flex w-full justify-between h-fit">
        <div className="flex flex-col gap-5">
          <span className="text-white font-semibold text-[30px]">REPO</span>
          <span className="text-white text-[17px]">©2024 Repo</span>
          <span className="text-white text-[14px]">
            주소 : 대전광역시 유성구 가정북로 76 (장동 23-9)
            <br />
            교무실 : 042-866-8822 | Fax : 042-867-9900 | 행정실 : 042-866-8885 |
            Fax : 042-863-4308
          </span>
        </div>
        <div className="flex flex-col items-end gap-5">
          <span className="text-white">
            <a className="pointable">개인정보처리방침</a> |{" "}
            <a className="pointable">이용약관</a>
          </span>
          <div className="flex gap-3">
            <Facebook className="pointable" />
            <Github className="pointable" />
          </div>
        </div>
      </div>
    </div>
  );
};
