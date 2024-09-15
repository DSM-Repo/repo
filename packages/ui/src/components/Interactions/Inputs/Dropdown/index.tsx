import { IDefaultProp, Label, Box, iconType } from "../Layout";
import { Ternary } from "@configs/util";
import { useState } from "react";

interface IProp extends IDefaultProp {
  selections?: string[];
  selected?: string;
  onChange: (item: string, id?: string) => void;
}

export const Dropdown = ({
  placeholder,
  required,
  disabled,
  label,
  size,
  id,
  selections,
  selected,
  onChange
}: IProp) => {
  const [open, setOpen] = useState(false);

  const icon: iconType = {
    name: "Arrow",
    rotate: open ? "up" : "down"
  };

  return (
    <Label size={size} required={required} label={label}>
      <Box
        size={size}
        disabled={disabled}
        icon={icon}
        action={() => setOpen((prev) => !prev)}
      >
        <span
          className={`block w-full h-full text-body5 ${!selected ? "text-gray-400" : ""} ${disabled ? "text-gray-300 cursor-not-allowed" : "cursor-pointer"}`}
        >
          {selected ? selected : placeholder}
        </span>
      </Box>
      <Ternary data={open}>
        <div
          className={`${!!label ? "top-[89px]" : "top-[60px]"} shadow-[0_4px_12px_0_rgba(0,0,0,0.32)] absolute max-h-[178px] overflow-auto z-20 w-full h-fit border-[1px] rounded-xl bg-gray-700 border-gray-600 p-2`}
        >
          {selections?.map((i, j) => (
            <div
              key={j}
              className={`${selected === i ? "border-[1px] bg-gray-600 border-gray-500" : "hover:bg-gray-600"} transition-all duration-150 h-[40px] rounded-xl cursor-pointer w-full flex p-3 items-center`}
              onClick={() => {
                setOpen(false);
                onChange(i, id);
              }}
            >
              <span className="text-[14px] font-light leading-none">{i}</span>
            </div>
          ))}
        </div>
      </Ternary>
    </Label>
  );
};
