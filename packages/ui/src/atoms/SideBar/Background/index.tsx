import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[];
  selected: boolean;
}

export const Background = ({ children, selected, ...props }: IProp) => {
  const style = selected
    ? {
        bg: "bg-[#1E1E1E]",
        blw: "border-l-[5px]",
        blc: "border-l-[#141414]",
        pl: "pl-[calc(1rem-5px)]",
        pr: "pr-[1rem]",
      }
    : {
        bg: "bg-[#1E1E1E]",
        px: "px-4",
      };

  return (
    <div
      className={
        Object.values(style).join(" ") +
        " flex flex-col w-[14rem] min-h-[2.5rem] py-2 rounded-[5px] box-border cursor-pointer gap-2 "
      }
    >
      {children}
    </div>
  );
};
