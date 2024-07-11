import { ButtonHTMLAttributes } from "react";

interface IProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactElement | React.ReactElement[];
  disabled?: boolean;
  onClick: () => void;
  color?: "light" | "dark";
  size?: "extraSmall" | "small" | "medium" | "large" | "extraLarge" | "full";
}

const colorList = {
  light: "bg-[#454545]",
  dark: "bg-[#222222]",
};

const sizeList = {
  extraSmall: "min-w-[5rem] px-2",
  small: "min-w-[8rem] px-2",
  medium: "min-w-[11rem] px-2",
  large: "min-w-[14rem] px-3",
  extraLarge: "min-w-[28rem] px-3",
  full: "w-full px-3",
};

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
      className={`text-white rounded-[5px] h-full transition-all py-3 duration-300 ${point} ${colorList[color]} ${sizeList[size]} ${props.className}`}
      disabled={!!disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
