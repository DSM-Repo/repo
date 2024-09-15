import { Box, IDefaultProp, Label, iconType } from "../Layout";
import { ChangeEvent, useState } from "react";

interface IProp extends IDefaultProp {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  password?: boolean;
  value?: string;
}

export const Text = ({
  placeholder,
  required,
  disabled,
  label,
  size,
  id,
  onChange,
  password,
  value
}: IProp) => {
  const [show, setShow] = useState(false);

  const icon: iconType = {
    name: show ? "Show" : "Hide",
    rotate: "up",
    action: () => setShow((prev) => !prev)
  };

  return (
    <Label size={size} label={label} required={required}>
      <Box
        size={size}
        disabled={disabled}
        icon={
          password && {
            name: show ? "Show" : "Hide",
            action: () => setShow((prev) => !prev)
          }
        }
      >
        <input
          className="w-full text-body5 disabled:text-gray-300 disabled:cursor-not-allowed"
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          id={id}
          type={password && !show ? "password" : "text"}
        />
      </Box>
    </Label>
  );
};
