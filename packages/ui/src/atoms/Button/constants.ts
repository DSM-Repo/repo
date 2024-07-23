import { HTMLAttributes } from "react";

export interface IProp extends HTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactElement | React.ReactElement[];
  disabled?: boolean;
  onClick: () => void;
  color?: "light" | "dark";
  size?: "extraSmall" | "small" | "medium" | "large" | "extraLarge" | "full";
}

export const colorList = {
  light: "bg-[#454545]",
  dark: "bg-[#222222]",
};

export const sizeList = {
  extraSmall: "w-[5rem] px-2",
  small: "w-[8rem] px-2",
  medium: "w-[11rem] px-2",
  large: "w-[14rem] px-3",
  extraLarge: "w-[28rem] px-3",
  full: "w-full px-3",
};
