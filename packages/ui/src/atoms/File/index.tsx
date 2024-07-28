import { sizeList } from "../../common";
import { Icon } from "@iconify/react";
import { Label } from "../Label";
import {
  IProp as IInput,
  commonStyle,
  disabledStyle,
  errorStyle,
} from "../Input";

interface IProp extends Omit<IInput, "value"> {
  value?: File;
  ext?: string;
  onDelete: () => void;
}

export const File = ({
  error,
  disabled,
  size = "small",
  placeholder,
  label,
  value,
  onChange,
  onDelete,
  ext,
  ...props
}: IProp) => {
  return (
    <Label label={label} full={size === "full"}>
      <div
        className={
          (size === "full" ? "w-full" : "w-fit") + " relative flex items-center"
        }
      >
        <label
          className={`flex items-center relative cursor-pointer ${commonStyle} ${disabled && disabledStyle} ${
            error && errorStyle
          } ${sizeList[size]} ${props.className}`}
        >
          <span
            className={`${!!!value ? "text-[#999999]" : ""} truncate w-[calc(100%_-_25px)]`}
          >
            {!!value ? value.name : placeholder}
          </span>
          <input
            accept={ext}
            className="hidden"
            {...props}
            type="file"
            disabled={!!disabled}
            placeholder={placeholder}
            onChange={onChange}
          />
        </label>
        {!!value && (
          <Icon
            icon="ph:trash-bold"
            width={20}
            color="white"
            className="absolute right-4 z-20 cursor-pointer"
            onClick={onDelete}
          />
        )}
      </div>
    </Label>
  );
};
