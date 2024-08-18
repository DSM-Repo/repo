import { sizeList } from "../../../common";
import { Icon } from "@iconify/react";
import { Label } from "../../../atoms/Label";
import { IProp } from "./types";
export * from "./constants";
import {
  commonStyle,
  disabledStyle as _disabled,
  errorStyle as _error
} from "./constants";

export const Layout = ({
  size,
  icon,
  onIconClick,
  iconRotation,
  iconColor = "white",
  error,
  disabled,
  label,
  children,
  cursor,
  ...props
}: IProp) => {
  const disabledStyle = disabled && _disabled;
  const errorStyle = error && _error;
  const pointerStyle = {
    default: "cursor-default",
    text: "cursor-text",
    pointer: "cursor-pointer",
    banned: "cursor-not-allowed"
  };

  return (
    <Label full={size === "full"} label={label}>
      <div
        {...props}
        className={`${commonStyle} ${sizeList[size]} ${disabledStyle} ${errorStyle} ${!disabled ? pointerStyle[cursor] : pointerStyle["banned"]} ${props.className}`}
      >
        <label
          className={`${icon ? "w-[80%]" : "w-full"} h-full ${!disabled ? pointerStyle[cursor] : pointerStyle["banned"]}`}
        >
          {children}
        </label>

        {icon && (
          <Icon
            icon={icon}
            onClick={onIconClick}
            rotate={
              iconRotation
                ? iconRotation?.value
                  ? iconRotation?.to
                  : iconRotation?.from
                : 0
            }
            color={iconColor}
            className="transition-all duration-200"
            width={20}
          />
        )}
      </div>
    </Label>
  );
};
