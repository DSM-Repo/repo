import { IDefaultProp, Layout } from "../Layout";
import { Ternary } from "@configs/util";
import { ChangeEvent } from "react";

interface IProp extends IDefaultProp {
  value?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  id?: string;
  max?: number;
  rows?: number;
}

export const TextArea = ({
  size,
  value,
  onChange,
  placeholder,
  disabled,
  required,
  label,
  max,
  rows = 5,
  id
}: IProp) => {
  const isFull = size === "full";

  return (
    <div className={`col-flex gap-2 ${isFull ? "w-full" : "w-fit"} h-fit`}>
      <Layout
        size={size}
        required={required}
        label={label}
        disabled={disabled}
        height={23 * rows}
      >
        <textarea
          style={{ height: 23 * rows }}
          disabled={disabled}
          className="leading-snug w-full h-fit text-[14px] font-light absolute px-5 py-[10px]"
          placeholder={placeholder}
          value={value}
          rows={rows}
          onChange={onChange}
          id={id}
          maxLength={max}
        />
      </Layout>
      <Ternary data={max}>
        <span className="self-end text-[14px] font-light">
          {value ? value.length : 0} / {max}
        </span>
      </Ternary>
    </div>
  );
};
