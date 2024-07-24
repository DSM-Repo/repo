import { useState } from "react";
import { Label } from "../Label";
import {
  IProp,
  commonStyle,
  disabledStyle,
  errorStyle,
  sizeList,
} from "./constants";
import { Icon } from "@iconify/react";

export const Input = ({
  error,
  disabled,
  size = "small",
  value,
  onChange,
  placeholder,
  label,
  password,
  multiLine,
  ...props
}: IProp) => {
  const [visible, setVisible] = useState(false);

  return (
    <Label label={label}>
      {!!!multiLine ? (
        <div className="flex items-center w-fit relative">
          <input
            type={!!password && !visible ? "password" : "text"}
            {...props}
            className={`${commonStyle} ${disabled && disabledStyle} ${
              error && errorStyle
            } ${sizeList[size]} ${props.className}`}
            disabled={!!disabled}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {!!password && (
            <Icon
              color="white"
              width={20}
              icon={visible ? "mdi:eye" : "mdi:eye-closed"}
              className="absolute right-0 mr-5 cursor-pointer"
              onClick={() => setVisible((prev) => !prev)}
            />
          )}
        </div>
      ) : (
        <textarea
          {...props}
          rows={multiLine}
          className={`${commonStyle} ${disabled && disabledStyle} ${
            error && errorStyle
          } ${sizeList[size]} ${props.className}`}
          disabled={!!disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </Label>
  );
};
