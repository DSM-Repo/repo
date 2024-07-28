import { commonStyle, disabledStyle, errorStyle } from "./constants";
import { ChangeEvent, HTMLAttributes } from "react";
import { sizeList, sizeType } from "../../common";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Label } from "../Label";
export * from "./constants";

export interface IProp extends HTMLAttributes<HTMLInputElement> {
  id?: string;
  error?: boolean;
  disabled?: boolean;
  size?: sizeType;
  placeholder: string;
  password?: boolean;
  label?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  error,
  disabled,
  size = "small",
  placeholder,
  label,
  password,
  value,
  onChange,
  ...props
}: IProp) => {
  const [visible, setVisible] = useState(false);

  return (
    <Label label={label} full={size === "full"}>
      <div
        className={`flex items-center relative ${size === "full" ? "w-full" : "w-fit"}`}
      >
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
