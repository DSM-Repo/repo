import { Icon, Date, Dropdown, Text } from "ui";
import { achievementType } from "@configs/util";
import { setType } from "@/hooks/useResumeData";
import { ChangeEvent, useState } from "react";
import { Layout } from "../Layout";

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
  data: achievementType;
  setData: setType;
}

export const Item = ({ data, setData }: IProp) => {
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
      <div className="flex justify-between w-full items-center">
        <span
          className={`text-[25px] font-semibold ${data.name ? "text-white" : "text-gray-500"}`}
        >
          {data.name || "이름을 입력해주세요"}
        </span>
        <Icon name="Trash" className="cursor-pointer" onClick={del} />
      </div>
      <div className="w-full flex justify-between items-center">
        <Text
          id="name"
          size="medium"
          label="이름"
          placeholder="이름을 입력하세요"
          value={data.name}
          onChange={handleChange}
        />
        <Dropdown
          id="type"
          size="medium"
          label="형태"
          placeholder="형태를 선택하세요"
          selections={["수상", "자격증"]}
          selected={type}
          onChange={(data: string) => handleType(data as "수상" | "자격증")}
        />
      </div>

      <Date
        label={`${typeChange[type]}일`}
        onDelete={() => set("date", undefined)}
        size="large"
        id="date"
        placeholder={`${typeChange[type]}일을 입력하세요`}
        value={data.date}
        onChange={set}
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
