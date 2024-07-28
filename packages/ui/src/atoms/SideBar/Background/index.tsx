import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[];
  selected: boolean;
}

export const Background = ({ children, selected, ...props }: IProp) => {
  const style = selected
    ? "bg-[#1E1E1E] border-l-[5px] pl-[calc(1rem-5px)] pr-4"
    : "bg-[#222222] pl-[calc(1rem-5px)] pr-4";

  return (
    <div
      {...props}
      className={`${style} border-l-[#141414] flex flex-col w-full min-h-[2.5rem] py-2 rounded-[5px] box-border cursor-pointer gap-2 transition-all ${props.className}`}
    >
      {children}
    </div>
  );
};
