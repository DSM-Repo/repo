import { HTMLAttributes } from "react";

type TSize =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge"
  | "full";

export interface IProp
  extends Omit<HTMLAttributes<HTMLInputElement>, "onSelect"> {
  error?: boolean;
  disabled?: boolean;
  size?: TSize;
  placeholder: string;
  selected: string;
  selections: string[];
  onSelect: (selected: string) => void;
}

export const sizeList = {
  extraSmall: "w-[8rem]",
  small: "w-[11rem]",
  medium: "w-[14rem]",
  large: "w-[28rem] ",
  extraLarge: "w-[36rem]",
  full: "w-full",
};

export const commonStyle =
  "outline-none rounded-[5px] transition-all h-fit duration-300 box-border bg-[#454545] text-[#999999] border-l-[5px] border-l-[#6C6C6C]";
export const disabledStyle = "cursor-not-allowed bg-[#6C6C6C]";
export const errorStyle = "border-l-[#FF5D5D]";
export const selectStyle = "bg-[#6c6c6c]";
