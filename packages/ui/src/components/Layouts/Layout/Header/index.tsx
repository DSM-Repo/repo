import { default as Logo } from "./Logo.svg?react";
import { Button, actionType } from "./Button";
import { iconType } from "../../..";
import { Api } from "@configs/type";
import { HTMLAttributes } from "react";

export type buttonType =
  | {
      action: actionType;
      icon: iconType;
      rotate?: "up" | "down" | "right" | "left";
      title: string;
      disabled?: Api.DisableType;
    }
  | undefined;

interface IProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  buttons?: buttonType[];
}

export const HeaderProvider = ({ children, buttons, ...rest }: IProp) => {
  return (
    <div {...rest} className={`col-flex w-full h-full relative ${rest?.className}`}>
      <header className="flex justify-center w-full h-fit py-3 z-40">
        <div className="flex justify-between items-center shrink-0 w-[480px] h-[60px] p-3 border-[1px] rounded-full bg-[#222222] border-[#333333]">
          <div className="px-4 py-2 bg-[#333333] rounded-full">
            <Logo />
          </div>
          <div className="flex items-center gap-2">{buttons?.map((item) => item && <Button key={item.title} {...item} />)}</div>
        </div>
      </header>
      <div className="z-20 w-full flex-1 min-h-0 overflow-auto">{children}</div>
    </div>
  );
};
