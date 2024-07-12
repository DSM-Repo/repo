import Github from "./Github.svg?react";
import Facebook from "./Facebook.svg?react";
import { HTMLAttributes } from "react";

export const Footer = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={`grid items-center justify-around gap-y-3 grid-rows-[repeat(3,_fit-content(2ch))] content-center w-full bg-black h-[260px] px-8 ${props.className}`}
    >
      <span className="text-white font-semibold text-[30px] col-start-1 line-fit">
        REPO
      </span>
      <span className="text-white text-[17px]">©2024 Repo</span>
      <span className="text-white text-[14px]">
        주소 : 대전광역시 유성구 가정북로 76 (장동 23-9)
        <br />
        교무실 : 042-866-8822 | Fax : 042-867-9900 | 행정실 : 042-866-8885 | Fax
        : 042-863-4308
      </span>
      <span className="text-white col-start-2 row-start-1 place-end line-fit">
        <a className="pointable">이용약관</a> |{" "}
        <a className="pointable">개인정보처리방침</a>
      </span>
      <div className="flex gap-3 col-start-2 row-start-2 justify-end">
        <Facebook className="pointable" />
        <Github className="pointable" />
      </div>
    </div>
  );
};
