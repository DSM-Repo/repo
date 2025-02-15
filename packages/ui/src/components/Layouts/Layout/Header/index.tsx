import { default as Logo } from "./Logo.svg?react";
import { Button, actionType } from "./Button";
import { iconType } from "../../../";
import { Api } from "@configs/type";

type buttonType = {
  action: actionType;
  icon: iconType;
  rotate?: "up" | "down" | "right" | "left";
  title: string;
  disabled?: Api.DisableType;
};

interface IProp {
  buttons?: buttonType[];
}

export const Header = ({ buttons }: IProp) => {
  return (
    <div className="flex justify-center w-full h-fit py-3 z-50 ">
      <div className="flex justify-between flex-shrink-0 w-[480px] h-[60px] p-[12px] items-center self-center bg-[#222222] border-[#333333] border-[1px] rounded-[100px]">
        <div className="flex px-[16px] py-[8px] bg-[#333333] rounded-[100px]">
          <Logo />
        </div>
        <div className="flex items-center gap-2 px-[12px]">{buttons?.map((item) => <Button key={item.title} {...item} />)}</div>
      </div>
    </div>
  );
};
