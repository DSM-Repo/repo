import { Layout, inputStyle } from "../Layout";
import { textAreaType } from "..";
import { ChangeEvent } from "react";

interface IProp extends Omit<textAreaType, "onChange" | "value"> {
  value: string;
  rows: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export type { IProp as ITextarea };

export const Textarea = ({
  error,
  disabled,
  size = "small",
  placeholder,
  rows,
  label,
  onChange,
  ...props
}: IProp) => {
  return (
    <Layout size={size} label={label} cursor="text">
      <textarea
        {...props}
        className={inputStyle}
        rows={rows}
        disabled={!!disabled}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Layout>
  );
};
