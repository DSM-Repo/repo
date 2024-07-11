import { Icon } from "@iconify/react";
import { HTMLAttributes, useState } from "react";

type TSize =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge"
  | "full";

interface IProps extends Omit<HTMLAttributes<HTMLInputElement>, "onSelect"> {
  error?: boolean;
  disabled?: boolean;
  size?: TSize;
  placeholder: string;
  selected: string;
  selections: string[];
  onSelect: (selected: string) => void;
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
  "outline-none rounded-[5px] transition-all duration-300 box-border bg-[#454545] text-[#999999] border-l-[5px] border-l-[#6C6C6C]";
const disabledStyle = "cursor-not-allowed bg-[#6C6C6C]";
const errorStyle = "border-l-[#FF5D5D]";
const selectStyle = "bg-[#6c6c6c]";

export const Dropdown = ({
  error,
  disabled,
  size = "small",
  selected,
  selections,
  onSelect,
  placeholder,
  ...props
}: IProps) => {
  const [opened, setOpened] = useState(false);
  const rotate = opened ? "rotate-180" : "rotate-90";

  return (
    <div
      {...props}
      className={`${commonStyle} ${props.className} ${error && errorStyle} ${
        disabled && disabledStyle
      } ${size === "full" ? "w-full" : "w-fit"} cursor-pointer`}
    >
      <div
        className={`flex w-full justify-between items-center py-3 ${sizeList[size]}`}
        onClick={() => setOpened((prev) => !prev)}
      >
        <span className={`${!!selected ? "text-white" : "test-[#999999]"}`}>
          {!!selected ? selected : placeholder}
        </span>
        <Icon
          icon="ep:arrow-up-bold"
          width={15}
          color={!!selected ? "white" : "gray"}
          className={rotate + " transition-all duration-150"}
        />
      </div>
      {opened && (
        <div>
          {selections.map((i, j) => (
            <div
              className={`${sizeList[size]} py-3 block text-white ${
                i === selected && selectStyle
              }`}
              key={j}
              onClick={() => {
                setOpened(false);
                onSelect(i);
              }}
            >
              {i}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
