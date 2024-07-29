import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  color?: "green" | "blue";
}

const colors = {
  green: "bg-[#193913] text-[#42E224]",
  blue: "bg-[#132939] text-[#2492E2]",
};

export const Prefix = ({ children, color = "green", ...props }: IProp) => {
  return (
    <span
      {...props}
      className={`${colors[color]} text-[12px] self-center w-fit h-fit py-1 px-2 rounded-md leading-none ${props.className}`}
    >
      {children}
    </span>
  );
};
