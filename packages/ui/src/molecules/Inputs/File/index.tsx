import { Layout } from "../Layout";
import { inputType } from "..";
import { ChangeEvent } from "react";

interface IProp extends Omit<inputType, "value" | "onChange"> {
  value?: string;
  ext?: string;
  onDelete: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type { IProp as IFile };

export const File = ({
  error,
  disabled,
  size = "small",
  placeholder,
  value,
  label,
  onChange,
  onDelete,
  ext,
  ...props
}: IProp) => {
  return (
    <Layout
      label={label}
      size={size}
      cursor="pointer"
      icon={value && "ph:trash-bold"}
      onIconClick={onDelete}
    >
      <span
        className={`${!!!value ? "text-[#999999]" : ""} text-body7 block w-full truncate`}
      >
        {value ? value : placeholder}
      </span>
      <input
        accept={ext}
        className="hidden"
        {...props}
        type="file"
        disabled={disabled}
        onChange={onChange}
      />
    </Layout>
  );
};
