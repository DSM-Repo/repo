import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[];
  selected: boolean;
}

export const Background = ({ children, selected, ...props }: IProp) => {
  const style = selected
    ? "bg-[#1E1E1E] border-l-[5px] border-l-[#141414] pl-[calc(1rem-5px)] pr-[1rem] "
    : "bg-[#222222] px-4 ";

  return (
    <div
      className={
        style +
        "flex flex-col w-[14rem] min-h-[2.5rem] py-2 rounded-[5px] box-border cursor-pointer gap-2 "
      }
      {...props}
    >
      {children}
    </div>
  );
};
