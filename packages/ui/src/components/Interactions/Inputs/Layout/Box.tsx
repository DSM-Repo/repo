import { Icon, iconType as iconNameType } from "../../../Others/Icon";
import { sizeTable, sizeType } from "../../../../size";
import { Ternary } from "@configs/util";

export type iconType = {
  name: iconNameType;
  rotate?: "up" | "down" | "left" | "right";
  action?: () => void;
};

interface IProp {
  children: React.ReactElement | React.ReactElement[];
  icon?: iconType;
  disabled?: boolean;
  size: sizeType;
}

export const Box = ({ children, icon, size, disabled }: IProp) => {
  return (
    <div
      className={`flex justify-between items-center gap-2 ${sizeTable[size]} ${disabled && "cursor-not-allowed"} min-h-[50px] h-fit px-5 py-[15px] border-[1px] rounded-xl ${disabled ? "bg-gray-600" : "bg-gray-700"} border-gray-600`}
    >
      {children}
      <Ternary data={icon}>
        <Icon
          name={icon?.name}
          onClick={!disabled ? icon?.action : () => {}}
          rotate={icon?.rotate}
          size={18}
          color={disabled ? "#777777" : "white"}
          className={disabled ? "cursor-not-allowed" : "cursor-pointer"}
        />
      </Ternary>
    </div>
  );
};
