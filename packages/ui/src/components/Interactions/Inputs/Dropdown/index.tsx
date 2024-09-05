import { IDefaultProp, Layout } from "../Layout";
import { iconType } from "../Layout/Box";
import { Ternary } from "@configs/util";
import { useState } from "react";

interface IProp extends IDefaultProp {
  selections: string[];
  selected?: string;
  onChange: (item: string, id?: string) => void;
  placeholder: string;
  id?: string;
}

export const Dropdown = ({
  size,
  selections,
  selected,
  onChange,
  disabled,
  placeholder,
  required,
  label,
  id
}: IProp) => {
  const [open, setOpen] = useState(false);
  const isFull = size === "full";

  const icon: iconType = {
    name: "Arrow",
    rotate: open ? "up" : "down"
  };

  return (
    <div className={`relative ${isFull ? "w-full" : "w-fit"}`}>
      <Layout
        size={size}
        required={required}
        label={label}
        icon={icon}
        disabled={disabled}
      >
        <span
          className={`${!selected ? "text-gray-400" : ""} block w-full text-[16px] font-light cursor-pointer`}
          onClick={() => (disabled ? () => {} : setOpen((prev) => !prev))}
        >
          {selected ? selected : placeholder}
        </span>
      </Layout>
      <Ternary data={open}>
        <div className="absolute top-[90px] max-h-[160px] overflow-auto z-20 w-full h-fit border-[1px] rounded-xl bg-gray-700 border-gray-600 p-2">
          {selections.map((i, j) => (
            <div
              key={j}
              className={`${selected === i ? "border-[1px] bg-gray-600 border-gray-500" : ""} rounded-xl cursor-pointer w-full flex p-3 items-center`}
              onClick={() => {
                setOpen(false);
                onChange(i, id);
              }}
            >
              <span className="text-[16px] font-light">{i}</span>
            </div>
          ))}
        </div>
      </Ternary>
    </div>
  );
};
