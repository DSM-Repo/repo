import { Box, IDefaultProp, Label } from "../Layout";
import { Ternary } from "@configs/util";
import { ChangeEvent } from "react";

interface IProp extends IDefaultProp {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  rows?: number;
  max?: number;
}

export const TextArea = ({
  placeholder,
  required,
  disabled,
  label,
  size,
  id,
  onChange,
  value,
  rows = 5,
  max
}: IProp) => {
  return (
    <Label size={size} label={label} required={required}>
      <Box size={size} disabled={disabled}>
        <textarea
          disabled={disabled}
          className="w-full text-body5 disabled:text-gray-300 disabled:cursor-not-allowed"
          placeholder={placeholder}
          value={value}
          rows={rows}
          onChange={onChange}
          id={id}
          maxLength={max}
        />
      </Box>

      <Ternary data={max}>
        <span
          className={`self-end text-body5 transition-all duration-150 ${value?.length === max ? "text-red-500" : value?.length > max / 1.1 ? "text-yellow-400" : ""}`}
        >
          {value ? value.length : 0} / {max}
        </span>
      </Ternary>
    </Label>
  );
};
