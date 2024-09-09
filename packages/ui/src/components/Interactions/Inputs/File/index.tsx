import { IDefaultProp, Layout } from "../Layout";

interface IProp extends IDefaultProp {
  value?: {
    image_path: string;
    original_name: string;
  };
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onDelete?: (id?: string) => void;
  id?: string;
  accept?: string;
}

export const File = ({
  size,
  value,
  disabled,
  placeholder,
  onChange,
  onDelete,
  accept,
  required,
  label,
  id
}: IProp) => {
  // 파일 표기 로직 좀 고민해봐야 함
  return (
    <Layout
      size={size}
      required={required}
      label={label}
      disabled={disabled}
      icon={value && { name: "Trash", action: () => onDelete(id) }}
    >
      <label
        className="whitespace-nowrap overflow-x-auto w-full leading-none overflow-y-hidden"
        htmlFor="fileInput"
      >
        <span
          className={`${value ? "text-white" : "text-gray-300"} leading-none w-full inline-block text-[14px] cursor-pointer`}
        >
          {value ? value.original_name : placeholder}
        </span>
      </label>
      <input
        id="fileInput"
        type="file"
        className="hidden absolute"
        accept={accept}
        onChange={onChange}
      />
    </Layout>
  );
};
