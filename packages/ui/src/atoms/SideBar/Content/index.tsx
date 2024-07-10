import { HTMLAttributes } from "react";
import * as Icons from "./icons";

export type iconType = "My" | "Library" | "Edit";

interface IProp extends HTMLAttributes<HTMLDivElement> {
  icon: iconType;
  children: string;
  selected: boolean;
}

export const Content = ({ icon, children, selected, ...props }: IProp) => {
  const font = selected
    ? "text-white font-semibold"
    : "text-[#999999] font-regular";

  const Icon = Icons[icon];

  return (
    <div {...props} className={`flex items-center gap-2 ${props.className}`}>
      <div className="flex items-center justify-center w-8 h-8 bg-[#333333] rounded-md">
        <Icon />
      </div>
      <span className={font}>{children}</span>
    </div>
  );
};
