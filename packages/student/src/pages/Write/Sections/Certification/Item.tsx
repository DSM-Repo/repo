import { Icon, Date, Dropdown, Text } from "ui";
import { setType } from "@/hooks/useResumeData";
import { ChangeEvent, useState } from "react";
import { Layout } from "../Layout";
import { Document } from "@configs/type";

const typeChange = {
  수상: "수여",
  자격증: "발급"
};

const typeChangeAPI = {
  수상: "AWARD",
  자격증: "CERTIFICATE"
};

const koreanChangeAPI = {
  AWARD: "수상",
  CERTIFICATE: "자격증"
};

interface IProp {
  data: Document.Achievement_list;
  setData: setType;
  index: number;
  moveItem: (index: number, direction: "up" | "down") => void;
}

export const Item = ({ data, setData, index, moveItem }: IProp) => {
  const [type, setType] = useState<"수상" | "자격증">(
    koreanChangeAPI[data.type] as "수상" | "자격증"
  );
  const set = (id: string, value?: string) =>
    setData((prev) => ({
      data: {
        ...prev.data,
        achievement_list: prev.data.achievement_list.map((i) =>
          i.element_id === data.element_id ? { ...data, [id]: value } : i
        )
      }
    }));

  const del = () => {
    setData((prev) => ({
      data: {
        ...prev.data,
        achievement_list: prev.data.achievement_list.filter(
          (item) => item.element_id !== data.element_id
        )
      }
    }));
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    set(target.id, target.value);

  const handleType = (value: "수상" | "자격증") => {
    setType(value);
    set("type", typeChangeAPI[value]);
  };

  return (
    <Layout>
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
            onClick={() => moveItem(index, "down")}
          />
          <Icon
            name="Arrow"
            rotate="down"
            className="cursor-pointer"
            onClick={() => moveItem(index, "up")}
          />
          <Icon name="Trash" className="cursor-pointer" onClick={del} />
        </div>
      </div>
      <Dropdown
        id="type"
        size="large"
        label="형태"
        placeholder="형태를 선택하세요"
        selections={["수상", "자격증"]}
        selected={type}
        onChange={(data: string) => handleType(data as "수상" | "자격증")}
      />

      <Date
        label={`${typeChange[type]}일`}
        onDelete={() => set("date", undefined)}
        size="large"
        id="date"
        placeholder={`${typeChange[type]}일을 입력하세요`}
        value={data.date}
        onChange={(item, id) => set(id as string, item)}
      />
      <Text
        id="institution"
        size="large"
        label={`${typeChange[type]} 기관`}
        placeholder={`${typeChange[type]} 기관을 입력하세요`}
        value={data.institution}
        onChange={handleChange}
      />
    </Layout>
  );
};
