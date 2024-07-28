import { commonStyle, disabledStyle, errorStyle } from "../Input";
import { sizeList } from "../../common";
import { IProp } from "./types";
import { Label } from "../Label";

export const Textarea = ({
  error,
  disabled,
  size = "small",
  placeholder,
  label,
  rows,
  ...props
}: IProp) => {
  return (
    <Label label={label} full={size === "full"}>
      <textarea
        {...props}
        rows={rows}
        className={`${commonStyle} ${disabled && disabledStyle} ${
          error && errorStyle
        } ${sizeList[size]} ${props.className}`}
        disabled={!!disabled}
        placeholder={placeholder}
      />
    </Label>
  );
};
