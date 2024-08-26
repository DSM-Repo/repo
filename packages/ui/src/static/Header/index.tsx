import { HTMLAttributes } from "react";
import Logo from "./Logo.svg?react";
import { useLocation } from "react-router-dom";

export const Header = (props: HTMLAttributes<HTMLDivElement>) => {
  const url = window.location.href
    .split("/")
    .slice(0, 3)
    .filter((i) => i !== "")
    .join("//");
  return (
    <div
      {...props}
      className={`flex flex-center w-full h-fit box-border bg-[#222222] border-b-[1px] border-b-[#333333] py-3 ${props.className}`}
    >
      <Logo
        width="72px"
        height="22px"
        className="cursor-pointer"
        onClick={() => window.location.replace(url)}
        //student, teacher 등 url이 다른 사이트에서도 홈에 쉽게 접속할 수 있게 window 방식으로 작성
      />
    </div>
  );
};
