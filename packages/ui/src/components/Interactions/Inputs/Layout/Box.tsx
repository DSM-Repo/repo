import { Icon, iconType as iconNameType } from "../../../Others/Icon";
import { sizeTable, sizeType } from "../../../../size";
import { childernType } from "@configs/type";
import { Ternary } from "@configs/util";

export type iconType = {
  name: iconNameType;
  rotate?: "up" | "down" | "left" | "right";
  action?: () => void;
};

interface IProp {
  children: childernType;
  icon?: iconType;
  disabled?: boolean;
  size: sizeType;
  action?: () => void;
}

export const Box = ({ children, icon, size, disabled, action }: IProp) => {
  return (
    <label
      onClick={(e) => {
        const { tagName } = e.target as HTMLElement;
        if (
          ((tagName === "path" || tagName === "svg") && !!icon?.action) ||
          !!!action ||
          !!disabled
        )
          return;
        action();
      }}
      className={`relative flex justify-between items-center gap-2 min-h-[50px] h-fit px-5 py-[15px] border-[1px] rounded-xl border-gray-600 ${disabled ? "cursor-not-allowed" : !!action ? "cursor-pointer" : "cursor-text"} ${sizeTable[size]} ${disabled ? "bg-gray-600" : "bg-gray-700"}`}
    >
      {children}
      <Ternary data={icon}>
        <Icon
          name={icon?.name}
          onClick={!!icon?.action && !!!disabled ? icon?.action : undefined}
          rotate={icon?.rotate}
          size={18}
          color={disabled ? "#777777" : "white"}
          className={disabled ? "cursor-not-allowed" : "cursor-pointer"}
        />
      </Ternary>
    </label>
  );
};
