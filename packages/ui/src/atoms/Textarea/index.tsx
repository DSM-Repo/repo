import { Label } from "../Label";
import {
  commonStyle,
  disabledStyle,
  errorStyle,
  sizeList,
} from "../Input/constants";
import { IProp } from "./types";

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
    <Label label={label}>
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
