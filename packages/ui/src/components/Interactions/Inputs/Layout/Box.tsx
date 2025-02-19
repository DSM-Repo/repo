import { Icon, iconType as iconNameType } from "../../../Others/Icon";
import { sizeTable, sizeType } from "../../../../size";
import { ForwardedRef, forwardRef } from "react";

export type iconType = {
  name: iconNameType;
  rotate?: "up" | "down" | "left" | "right";
  action?: () => void;
};

interface IProp {
  children: React.ReactNode;
  icon?: iconType;
  disabled?: boolean;
  readonly?: boolean;
  error?: string;
  size: sizeType;
  action?: () => void;
}

export const Box = forwardRef(({ children, icon, size, disabled, action, error, readonly }: IProp, ref: ForwardedRef<any>) => {
  return (
    <div className={`${sizeTable[size]} col-flex gap-[2px]`}>
      <label
        ref={ref}
        onClick={(e) => {
          const { tagName } = e.target as HTMLElement;
          if (((tagName === "path" || tagName === "svg") && !!icon?.action) || !!disabled) e.preventDefault();
          else if (!!action) action();
        }}
        className={`relative flex justify-between items-center gap-2 min-h-[50px] h-fit px-5 py-[15px] border-[1px] rounded-xl border-gray-600 ${disabled || readonly ? "cursor-not-allowed" : !!action ? "cursor-pointer" : "cursor-text"} ${sizeTable[size]} ${disabled || readonly ? "bg-gray-600" : "bg-gray-700"}`}
      >
        {children}
        <Icon
          visible={!!icon}
          name={icon?.name}
          onClick={!!icon?.action && !!!disabled ? icon?.action : undefined}
          rotate={icon?.rotate}
          size={18}
          color={disabled ? "#777777" : "white"}
          className={disabled ? "cursor-not-allowed" : "cursor-pointer"}
        />
      </label>
      <span className={`${!error && "hidden"} text-red-400 text-[12px]`}>{error}</span>
    </div>
  );
});
