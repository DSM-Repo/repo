import { sizeTable, sizeType } from "../../../../size";
import { Box, IDefaultProp, Label } from "../Layout";
import { Icon } from "../../../";
import { useState } from "react";

type itemType = {
  id: string;
  name: string;
};

interface IProp extends IDefaultProp {
  listSize?: sizeType;
  onDelete: (itemId: string, id: string) => void;
  onEnter: (item: string, id?: string) => void;
  values?: itemType[];
}

export const List = ({ placeholder, required, disabled, label, size, id, listSize, onDelete, onEnter, values }: IProp) => {
  const [item, setItem] = useState("");

  return (
    <Label size={size} label={label} required={required}>
      <Box size={size} disabled={disabled}>
        <input
          className="w-full text-body5 disabled:text-gray-300 disabled:cursor-not-allowed"
          placeholder={placeholder + " (Enter 키로 추가)"}
          value={item}
          onChange={(e) => setItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
              setItem("");
              onEnter(item, id);
            }
          }}
        />
      </Box>
      <div className={`flex flex-wrap gap-3 ${sizeTable[listSize]}`}>
        {values.map((i) => (
          <div className="flex items-center gap-2 w-fit h-fit px-3 py-2 border-[1px] rounded-xl bg-gray-700 border-gray-600" key={i.id}>
            <span className="text-[14px] font-light">{i.name}</span>
            <Icon name="Close" size={20} onClick={() => onDelete(i.id, id)} className="cursor-pointer" />
          </div>
        ))}
      </div>
    </Label>
  );
};
