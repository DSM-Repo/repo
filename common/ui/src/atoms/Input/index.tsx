import { InputHTMLAttributes, useState } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  disabled?: boolean;
  inputSize?: "extraSmall" | "small" | "medium" | "large" | "extraLarge" | "full";
  initialValue?: string;
}

const sizeList = {
  extraSmall: "min-w-[5rem] pl-2 pr-1 py-1",
  small: "min-w-[8rem] pl-2 pr-2 py-2",
  medium: "min-w-[11rem] pl-2 pr-2 py-2",
  large: "min-w-[14rem] pl-2 pr-3 py-3",
  extraLarge: "min-w-[28rem] pl-2 pr-3 py-3",
  full: "w-full pl-2 pr-3 py-3",
};

const commonStyle = "bg-[#454545] text-[#999999] border-l-4 border-l-[#6C6C6C]";
const disabledStyle = "cursor-not-allowed bg-[#6C6C6C] text-[#999999]";
const errorStyle = "bg-[#454545] text-[#999999] border-l-4 border-l-[#FF5D5D]";

export const Input = ({
  error = false,
  disabled = false,
  inputSize = "small",
  initialValue = "Input",
  ...props
}: IInputProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <input
      className={
        `rounded-[5px] transition-all duration-300 ${commonStyle} ${
          disabled ? disabledStyle : "" || error ? errorStyle : ""
        } ` +
        sizeList[inputSize]
      }
      disabled={disabled}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};
