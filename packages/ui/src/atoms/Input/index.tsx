import { HTMLAttributes } from "react";

type TSize =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge"
  | "full";

interface IProps extends HTMLAttributes<HTMLInputElement> {
  error?: boolean;
  disabled?: boolean;
  size?: TSize;
  value: string;
  placeholder?: string;
  onChange: () => void;
}

const sizeList = {
  extraSmall: "w-[8rem] px-4",
  small: "w-[11rem] px-4",
  medium: "w-[14rem] px-4",
  large: "w-[28rem] px-4",
  extraLarge: "w-[36rem] px-4",
  full: "w-full px-4",
};

const commonStyle =
  "outline-none rounded-[5px] transition-all duration-300 box-border bg-[#454545] py-3 text-[#999999] border-l-[5px] border-l-[#6C6C6C]";
const disabledStyle = "cursor-not-allowed bg-[#6C6C6C]";
const errorStyle = "border-l-[#FF5D5D]";

export const Input = ({
  error,
  disabled,
  size = "small",
  value,
  onChange,
  placeholder,
  ...props
}: IProps) => {
  return (
    <input
      {...props}
      className={`${commonStyle} ${disabled && disabledStyle} ${
        error && errorStyle
      } ${sizeList[size]} ${props.className}`}
      disabled={!!disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
