import { IDefaultProp, Layout } from "../Layout";
import { ChangeEvent, useState } from "react";
import { iconType } from "../Layout/Box";

interface IProp extends IDefaultProp {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id?: string;
  password?: boolean;
}

export const Text = ({
  size,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  password,
  label,
  id
}: IProp) => {
  const [show, setShow] = useState(false);

  const icon: iconType = {
    name: show ? "Show" : "Hide",
    rotate: "up",
    action: () => setShow((prev) => !prev)
  };

  return (
    <Layout
      size={size}
      required={required}
      icon={password ? icon : undefined}
      label={label}
      disabled={disabled}
    >
      <input
        className="w-full text-[14px] px-5 py-[15px] h-full font-light leading-none disabled:text-gray-300 disabled:cursor-not-allowed"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        id={id}
        type={password && !show ? "password" : "text"}
      />
    </Layout>
  );
};
