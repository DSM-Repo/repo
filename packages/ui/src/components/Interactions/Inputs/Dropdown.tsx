import { useOutsideClickRef } from "@configs/util";
import { forwardRef, useState } from "react";
import { IDefaultProp, Label, Box, iconType } from "./Layout";

interface IProp extends IDefaultProp {
  selections?: (string | number)[];
  value?: string | number;
  onChange?: (item: string | number, id?: string) => void;
  suffix?: string;
}

export const Dropdown = forwardRef(({ placeholder, error, required, disabled, label, size, id, selections, value, suffix, onChange }: IProp, ref) => {
  const [open, setOpen] = useState(false);
  const outsideRef = useOutsideClickRef(() => setOpen(false));

  const icon: iconType = {
    name: "Arrow",
    rotate: open ? "up" : "down"
  };

  return (
    <Label size={size} required={required} label={label} ref={outsideRef}>
      <Box error={error} size={size} disabled={disabled} icon={icon} action={() => setOpen((prev) => !prev)}>
        <span className={`block w-full h-fit text-body5 leading-none ${!value ? "text-gray-400" : ""} ${disabled ? "text-gray-300 cursor-not-allowed" : "cursor-pointer"}`}>
          {value + (suffix || "") || placeholder}
        </span>
      </Box>
      {open && (
        <div
          className={`${!!label ? "top-[89px]" : "top-[60px]"} shadow-[0_4px_12px_0_rgba(0,0,0,0.32)] absolute max-h-[178px] overflow-auto z-10 w-full h-fit border-[1px] rounded-xl bg-gray-700 border-gray-600 p-2`}
        >
          {selections?.map((i, j) => (
            <div
              key={j}
              className={`${value === i ? "border-[1px] bg-gray-600 border-gray-500" : "hover:bg-gray-600"} transition-all duration-150 h-[40px] rounded-xl cursor-pointer w-full flex p-3 items-center`}
              onClick={() => {
                setOpen(false);
                onChange(i, id);
              }}
            >
              <span className="text-[14px] font-light leading-none">{i}</span>
            </div>
          ))}
        </div>
      )}
    </Label>
  );
});
