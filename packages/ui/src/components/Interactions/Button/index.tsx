import { sizeTable, sizeType } from "../../../size";
import { Icon, iconType } from "../../";
import { Ternary } from "@configs/util";

interface IProp {
  size: sizeType;
  padding?: string;
  color?: "Green" | "Gray";
  icon?: iconType;
  onClick: () => void;
  children: string;
  direction?: "left" | "right" | "center";
  disabled?: boolean;
}

const colorTable = {
  Green: "bg-green-800 border-green-700 text-green-400",
  Gray: "bg-gray-700 border-gray-600 text-white disabled:bg-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed"
};

export const Button = ({
  size,
  icon,
  onClick,
  children,
  padding = "16px",
  color = "Gray",
  disabled,
  direction = "left"
}: IProp) => {
  const direct =
    direction === "center"
      ? "justify-center"
      : direction === "left"
        ? "justify-start"
        : "justify-end";

  return (
    <button
      style={{ padding }}
      className={`flex items-center gap-[10px] max-h-[50px] border-[1px] rounded-xl text-[14px] font-semibold leading-none ${colorTable[color]} ${direct} ${sizeTable[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Ternary data={icon}>
        <Icon name={icon} size={20} color={disabled ? "#777777" : "white"} />
      </Ternary>
      {children}
    </button>
  );
};
