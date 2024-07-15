import { Icon } from "@iconify/react";
import { useState } from "react";
import {
  IProp,
  commonStyle,
  sizeList,
  errorStyle,
  disabledStyle,
  selectStyle,
} from "./constants";

export const Dropdown = ({
  error,
  disabled,
  size = "small",
  selected,
  selections,
  onSelect,
  placeholder,
  ...props
}: IProp) => {
  const [opened, setOpened] = useState(false);
  const rotate = opened ? "rotate-180" : "rotate-90";

  return (
    <div
      {...props}
      className={`${commonStyle} ${sizeList[size]} ${props.className} ${
        error && errorStyle
      } ${disabled && disabledStyle} ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div
        className={`flex w-full justify-between items-center py-3 px-4 ${sizeList[size]}`}
        onClick={() => !disabled && setOpened((prev) => !prev)}
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
        <div
          className={`${commonStyle} w-inherit z-20 mt-[-10px] ml-[-5px] w-[inherit] absolute max-h-[144px] overflow-auto rounded-r-[5px]`}
        >
          {selections.map((item: string, index: number) => (
            <div
              className={`py-3 pl-4 w-fitblock text-white ${
                item === selected && selectStyle
              }`}
              key={index}
              onClick={() => {
                setOpened(false);
                onSelect(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
