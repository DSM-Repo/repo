<<<<<<< Updated upstream
import { useLocation } from "react-router-dom";
import { Header as DefaultHeader } from "ui";
=======

>>>>>>> Stashed changes

export interface IProp {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ setOpened }: IProp) => {
  const { pathname } = useLocation();
  return pathname === "/" ? (
    <div className="flex items-center fixed z-30 w-full">
      <DHeader/>
      <span
        className="pointable text-body8 leading-none"
        onClick={() => setOpened(true)}
      >
        <div className="px-5 py-2.5 border border-[#6D6D6D] rounded-[100px] my-[17px]">
          Login →
        </div>
      </span>
    </div>
  ) : (
    <DefaultHeader className="w-full" />
  );
};

import { Logo } from "@/assets";
import { HTMLAttributes } from "react";

export const DHeader = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={`flex flex-center w-full h-fit box-border bg-[#222222] border-b-[1px] border-b-[#333333] py-3 ${props.className}`}
    >
      <Logo
        width="72px"
        height="22px"
      />
    </div>
  );
};

