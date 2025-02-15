import { Box, Label } from "../Layout";
import { Ternary } from "@configs/util";
import { sizeType } from "@root/size";
import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";

interface IProp extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  rows?: number;
  label?: string;
  size: sizeType;
}

export const TextArea = forwardRef<HTMLTextAreaElement, IProp>(({ label, size, rows = 5, ...rest }, ref) => {
  const length = rest.name && rest.maxLength ? useFormContext().watch(rest.name).length : 0;

  return (
    <Label size={size} label={label} required={rest.required}>
      <Box size={size} disabled={rest.disabled}>
        <textarea className="w-full text-body5 disabled:text-gray-300 disabled:cursor-not-allowed" rows={rows} ref={ref} {...rest} />
      </Box>

      {rest.name && rest.maxLength && (
        <span className={`self-end text-body5 transition-all duration-150 ${length === rest.maxLength ? "text-red-500" : length > Number(rest.maxLength) / 1.1 ? "text-yellow-400" : ""}`}>
          {length} / {rest.maxLength}
        </span>
      )}
    </Label>
  );
});
