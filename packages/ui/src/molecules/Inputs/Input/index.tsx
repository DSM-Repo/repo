import { Layout, inputStyle } from "../Layout";
import { ChangeEvent, useState } from "react";
import { inputType } from "..";

interface IProp extends Omit<inputType, "value" | "onChange"> {
  password?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type { IProp as IInput };

export const Input = ({
  error,
  disabled,
  size = "small",
  placeholder,
  password,
  value,
  label,
  onChange,
  ...props
}: IProp) => {
  const [visible, setVisible] = useState(false);

  return (
    <Layout
      label={label}
      size={size}
      disabled={disabled}
      error={error}
      icon={!!password ? (visible ? "mdi:eye" : "mdi:eye-closed") : undefined}
      onIconClick={() => setVisible((prev) => !prev)}
      cursor="text"
    >
      <input
        {...props}
        type={password && !visible ? "password" : "text"}
        className={`${inputStyle} w-full cursor-[inherit] ${props.className}`}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Layout>
  );
};
