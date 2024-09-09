import { IDefaultProp, Layout } from "../Layout";
import { Icon } from "../../../";
import { useState } from "react";
import { sizeTable, sizeType } from "../../../../size";

type itemType = {
  id: string;
  name: string;
};

interface IProp extends IDefaultProp {
  values?: itemType[];
  onEnter: (item: string, id?: string) => void;
  onDelete: (itemId: string, id: string) => void;
  listSize?: sizeType;
  placeholder: string;
  id?: string;
}

export const List = ({
  size,
  values,
  onEnter,
  onDelete,
  listSize,
  placeholder,
  required,
  label,
  id
}: IProp) => {
  const [item, setItem] = useState("");

  return (
    <div
      className={`${sizeTable[listSize ? listSize : size]} col-flex gap-3 h-fit`}
    >
      <Layout size={size} required={required} label={label}>
        <input
          className="w-full text-[14px] font-light leading-none"
          placeholder={placeholder}
          value={item}
          onChange={(e) => setItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setItem("");
              onEnter(item, id);
            }
          }}
        />
      </Layout>
      <div className="flex flex-wrap gap-3 w-full">
        {values.map((i) => (
          <div className="flex items-center gap-2 w-fit h-fit px-3 py-2 border-[1px] rounded-xl bg-gray-700 border-gray-600">
            <span className="text-[14px] font-light">{i.name}</span>
            <Icon
              name="Close"
              size={20}
              onClick={() => onDelete(i.id, id)}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
