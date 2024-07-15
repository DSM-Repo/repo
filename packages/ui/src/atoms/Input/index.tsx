import { Label } from "../Label";
import {
  IProp,
  commonStyle,
  disabledStyle,
  errorStyle,
  sizeList,
} from "./constants";

export const Input = ({
  error,
  disabled,
  size = "small",
  value,
  onChange,
  placeholder,
  label,
  ...props
}: IProp) => {
  return (
    <Label label={label}>
      <input
        {...props}
        className={`${commonStyle} ${disabled && disabledStyle} ${
          error && errorStyle
        } ${sizeList[size]} ${props.className}`}
        disabled={!!disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};
