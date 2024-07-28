import { IProp as IInput } from "../Input";
import { sizeList } from "../../common";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Label } from "../Label";
import {
  commonStyle,
  errorStyle,
  disabledStyle,
  selectStyle,
} from "./constants";

interface IProp extends Omit<IInput, "onSelect" | "onChange" | "value"> {
  selected?: string;
  selections: string[];
  onSelect: (data: string, name?: string) => void;
}

export const Dropdown = ({
  error,
  disabled,
  size = "small",
  selected,
  selections,
  label,
  onSelect,
  placeholder,
  id,
  ...props
}: IProp) => {
  const [opened, setOpened] = useState(false);
  const rotate = opened ? "rotate-180" : "rotate-90";
  const rounded = opened ? "rounded-t-[5px]" : "rounded-[5px]";

  return (
    <Label label={label} full={size === "full"}>
      <div
        {...props}
        className={`${commonStyle} ${rounded} ${sizeList[size]} ${
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
            className={`transition-all duration-150 ${rotate} `}
          />
        </div>
        {opened && (
          <div
            className={`${commonStyle} rounded-none rounded-b-[5px] w-[inherit] -ml-1 z-20 absolute max-h-[135px] overflow-auto`}
          >
            {selections.map((item: string) => (
              <span
                className={`text-body7 py-3 pl-4 block ${item === selected && selectStyle}`}
                key=""
                onClick={() => {
                  setOpened(false);
                  onSelect(item, id);
                }}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </Label>
  );
};
