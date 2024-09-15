import { findKeyWithValue } from "@configs/util";
import { Icon, Date, Dropdown, Text } from "ui";
import { Document } from "@configs/type";
import { useResumeData } from "@/hooks";
import { Box } from "../Box";

const typeLabel = {
  AWARD: "수여",
  CERTIFICATE: "발급"
};

const typeData = {
  AWARD: "수상",
  CERTIFICATE: "자격증"
};

interface IProp {
  data: Document.Achievement_list;
  index: number;
}

export const Item = ({ data, index }: IProp) => {
  const { moveItem, removeItem, setDeepPartial } = useResumeData();

  const set = (id: string, value?: string) =>
    setDeepPartial("achievement_list", data.element_id, value, id);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    set(target.id, target.value);

  const handleType = (value: "수상" | "자격증") => {
    set("type", findKeyWithValue(typeData, value));
  };

  return (
    <Box>
      <div className="flex justify-between w-full">
        <input
          className="font-semibold text-[25px] w-[80%]"
          placeholder="이름을 입력하세요"
          value={data.name}
          id="name"
          onChange={handleChange}
        />
        <div className="flex items-center gap-[10px]">
          <Icon
            name="Arrow"
            rotate="up"
            className="cursor-pointer"
            onClick={() => moveItem("achievement_list", index, "down")}
          />
          <Icon
            name="Arrow"
            rotate="down"
            className="cursor-pointer"
            onClick={() => moveItem("achievement_list", index, "up")}
          />
          <Icon
            name="Trash"
            className="cursor-pointer"
            onClick={() => removeItem("achievement_list", data.element_id)}
          />
        </div>
      </div>
      <Dropdown
        id="type"
        size="large"
        label="형태"
        placeholder="형태를 선택하세요"
        selections={["수상", "자격증"]}
        selected={typeData[data.type]}
        onChange={(data: string) => handleType(data as "수상" | "자격증")}
      />

      <Date
        label={`${typeLabel[data.type]}일`}
        onDelete={() => set("date", undefined)}
        size="large"
        id="date"
        placeholder={`${typeLabel[data.type]}일을 입력하세요`}
        value={data.date}
        onChange={(item, id) => set(id as string, item)}
      />
      <Text
        id="institution"
        size="large"
        label={`${typeLabel[data.type]} 기관`}
        placeholder={`${typeLabel[data.type]} 기관을 입력하세요`}
        value={data.institution}
        onChange={handleChange}
      />
    </Box>
  );
};
