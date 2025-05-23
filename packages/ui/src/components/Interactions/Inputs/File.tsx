import { forwardRef } from "react";
import { Box, IDefaultProp, Label } from "./Layout";
import { Api } from "@configs/type";

interface IProp extends IDefaultProp {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onDelete?: (id?: string) => void;
  accept?: string;
  value?: Api.File.Image;
}

export const File = forwardRef(({ placeholder, error, required, disabled, label, size, id, onChange, onDelete, accept, value }: IProp, ref) => {
  return (
    <Label size={size} required={required} label={label}>
      <Box error={error} size={size} disabled={disabled} icon={value && { name: "Trash", action: () => onDelete(id) }} action={() => {}}>
        <span className={`w-full h-fit truncate block text-body5 leading-snug ${!value ? "text-gray-300" : "cursor-pointer"} ${disabled && "cursor-[not-allowed_!important]"}`}>
          {value ? value.original_name : placeholder}
        </span>
        <input type="file" className="hidden absolute" accept={accept} onChange={onChange} ref={ref as any} />
      </Box>
    </Label>
  );
});
