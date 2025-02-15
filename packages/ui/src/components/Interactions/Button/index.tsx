import { sizeTable, sizeType } from "../../../size";
import { Icon, iconType } from "../../";

interface IProp {
  size: sizeType;
  padding?: string;
  color?: "green" | "gray";
  icon?: iconType;
  onClick: () => void;
  children?: string;
  direction?: "left" | "right" | "center";
  disabled?: boolean;
}

const colorTable = {
  green: "bg-green-800 border-green-700 text-green-400 disabled:bg-green-700 disabled:text-green-900",
  gray: "bg-gray-700 border-gray-600 text-white disabled:bg-gray-600 disabled:text-gray-300"
};

export const Button = ({ size, icon, onClick, children, padding = "16px", color = "gray", disabled, direction = "left" }: IProp) => {
  const direct = direction === "center" ? "justify-center" : direction === "left" ? "justify-start" : "justify-end";

  return (
    <button
      style={{ padding }}
      className={`flex items-center gap-[10px] h-[50px] border-[1px] rounded-xl text-body4 disabled:cursor-not-allowed ${colorTable[color]} ${direct} ${sizeTable[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <Icon name={icon} size={20} color={color === "gray" ? (disabled ? "#777777" : "white") : disabled ? "#083300" : "#37E517"} />}
      {children}
    </button>
  );
};
