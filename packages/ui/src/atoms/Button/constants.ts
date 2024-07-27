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
  extraSmall: "w-[8rem]",
  small: "w-[11rem]",
  medium: "w-[14rem]",
  large: "w-[28rem]",
  extraLarge: "w-[36rem]",
  full: "w-full",
};
