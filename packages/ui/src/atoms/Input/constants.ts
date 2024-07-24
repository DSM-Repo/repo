import { HTMLAttributes } from "react";

type TSize =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge"
  | "full";

export interface IProp
  extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  error?: boolean;
  disabled?: boolean;
  size?: TSize;
  value: string;
  placeholder?: string;
  password?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  label?: string;
  multiLine?: number;
}

export const sizeList = {
  extraSmall: "w-[8rem]",
  small: "w-[11rem]",
  medium: "w-[14rem]",
  large: "w-[28rem]",
  extraLarge: "w-[36rem]",
  full: "w-full",
};

export const commonStyle =
  "outline-none rounded-[5px] text-body7 transition-all duration-300 box-border bg-[#454545] py-3 px-4 placeholder:text-[#999999] border-l-[5px] border-l-[#6C6C6C]";
export const disabledStyle = "cursor-not-allowed bg-[#6C6C6C]";
export const errorStyle = "border-l-[#FF5D5D]";
