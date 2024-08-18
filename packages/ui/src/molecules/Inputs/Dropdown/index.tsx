import { Layout, errorStyle, selectStyle, subStyle } from "../Layout";
import { useState } from "react";
import { inputType } from "..";

interface IProp extends Omit<inputType, "onSelect" | "onChange" | "value"> {
  selected?: string;
  selections: string[];
  onSelect: (data: string, name: string) => void;
}

export type { IProp as IDropdown };

export const Dropdown = ({
  error,
  disabled,
  size = "small",
  selected,
  selections,
  onSelect,
  label,
  placeholder,
  id
}: IProp) => {
  const [opened, setOpened] = useState(false);
  const rotation = { from: 45, to: 270, value: opened };

  return (
    <Layout
      label={label}
      error={error}
      disabled={disabled}
      size={size}
      icon="ep:arrow-up-bold"
      iconRotation={rotation}
      iconColor={!selected ? "#999999" : "#ffffff"}
      onClick={() => !disabled && setOpened((prev) => !prev)}
      className={`transition-none ${opened && "rounded-b-none"}`}
      cursor="pointer"
    >
      <span className={`${!!!selected && "text-[#999999]"} text-body7`}>
        {!!selected ? selected : placeholder}
      </span>
      {opened && (
        <div className={`${subStyle} ${error && errorStyle}`}>
          {selections.map((item: string, index: number) => (
            <span
              className={`text-body7 py-3 pl-4 block ${item === selected && selectStyle}`}
              key={index}
              onClick={() => {
                onSelect(item, id);
              }}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </Layout>
  );
};
