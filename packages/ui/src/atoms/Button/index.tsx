import { colorInput, colorType, sizeList, sizeType } from "../../common";
import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactElement;
  onClick: () => void;
  disabled?: boolean;
  color?: colorType;
  size?: sizeType;
}

export const Button = ({
  children,
  disabled,
  onClick,
  color = "dark",
  size = "small",
  ...props
}: IProp) => {
  const point = !!disabled ? "disable" : "pointable";

  return (
    <button
      {...props}
      className={`text-white text-body7 flex flex-center rounded-[5px] h-full transition-all py-3 duration-300 px-4 ${point} ${colorInput[color]} ${sizeList[size]} ${props.className}`}
      disabled={!!disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
