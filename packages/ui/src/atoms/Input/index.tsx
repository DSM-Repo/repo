import { useState } from "react";
import { Label } from "../Label";
import { commonStyle, disabledStyle, errorStyle, sizeList } from "./constants";
import { Icon } from "@iconify/react";
import { IProp } from "./types";

export const Input = ({
  error,
  disabled,
  size = "small",
  placeholder,
  label,
  password,
  value,
  onChange,
  form,
  name,
  ...props
}: IProp) => {
  const [visible, setVisible] = useState(false);

  return (
    <Label label={label}>
      <div className="flex items-center w-fit relative">
        <input
          {...props}
          type={!!password && !visible ? "password" : "text"}
          className={`${commonStyle} ${disabled && disabledStyle} ${
            error && errorStyle
          } ${sizeList[size]} ${props.className}`}
          disabled={!!disabled}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          form={form}
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
    </Label>
  );
};
