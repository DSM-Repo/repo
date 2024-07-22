import Facebook from "./Facebook.svg?react";
import Github from "./Github.svg?react";
import { HTMLAttributes } from "react";

export const Footer = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={`grid items-center gap-3 grid-rows-[repeat(3,_fit-content(2ch))] grid-cols-[1fr_fit-content(20ch)] content-center w-full bg-black h-[260px] box-border px-8 min-w-[640px] ${props.className}`}
    >
      <span className="font-bold text-[25px] col-start-1">REPO</span>
      <span className="text-body6">© 2024 Repo</span>
      <span className="text-body7 col-[1/span_2]">
        주소 : 대전광역시 유성구 가정북로 76 (장동 23-9)
        <br />
        교무실 : 042-866-8822 | Fax : 042-867-9900 | 행정실 : 042-866-8885 | Fax
        : 042-863-4308
      </span>
      <span className="col-start-2 row-start-1 text-body6">
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
