import { Box, IDefaultProp, Label } from "../Layout";
import { Api } from "@configs/type";

interface IProp extends IDefaultProp {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onDelete?: (id?: string) => void;
  accept?: string;
  value?: Api.File.Image;
}

export const File = ({
  placeholder,
  required,
  disabled,
  label,
  size,
  id,
  onChange,
  onDelete,
  accept,
  value
}: IProp) => {
  return (
    <Label size={size} required={required} label={label}>
      <Box
        size={size}
        disabled={disabled}
        icon={value && { name: "Trash", action: () => onDelete(id) }}
        action={() => {}}
      >
        <span
          className={`w-full h-fit truncate block text-body5 leading-none ${!value ? "text-gray-300 cursor-not-allowed" : "cursor-pointer"}`}
        >
          {value ? value.original_name : placeholder}
        </span>
        <input
          type="file"
          className="hidden absolute"
          accept={accept}
          onChange={onChange}
        />
      </Box>
    </Label>
  );
};
