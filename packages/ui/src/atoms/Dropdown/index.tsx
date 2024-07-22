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
  const rounded = opened ? "rounded-t-[5px]" : "rounded-[5px]";

  return (
    <div
      {...props}
      className={`${commonStyle} ${rounded} ${sizeList[size]}  ${
        error && errorStyle
      } ${disabled && disabledStyle} ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${props.className}`}
    >
      <div
        className={`flex w-full justify-between items-center py-3 px-4 ${sizeList[size]}`}
        onClick={() => !disabled && setOpened((prev) => !prev)}
      >
        <span className={`${!!!selected && "text-[#999999]"}`}>
          {!!selected ? selected : placeholder}
        </span>
        <Icon
          icon="ep:arrow-up-bold"
          width={15}
          color={!!selected ? "white" : "#999999"}
          className={rotate + " transition-all duration-150"}
        />
      </div>
      {opened && (
        <div
          className={`${commonStyle} rounded-none rounded-b-[5px] w-[inherit] ml-[-5px] z-20 absolute max-h-[135px] overflow-auto`}
        >
          {selections.map((item: string, index: number) => (
            <span
              className={`text-body7 py-3 pl-4 block ${item === selected && selectStyle}`}
              key={index}
              onClick={() => {
                setOpened(false);
                onSelect(item);
              }}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
