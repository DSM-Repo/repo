import { IProp, colorList, sizeList } from "./constants";

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
      className={`text-body7 rounded-[5px] h-full transition-all py-3 duration-300 ${point} ${colorList[color]} ${sizeList[size]} ${props.className}`}
      disabled={!!disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
