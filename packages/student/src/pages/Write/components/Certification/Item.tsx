import { Box, Button, Calander, Dropdown, Input } from "ui";
import { achievementType } from "@configs/default";
import { setType } from "@/hooks/useResumeData";
import { ChangeEvent, useState } from "react";
import { Icon } from "@iconify/react";

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
    <Box width="28rem" padding="20px" className="gap-6">
      <Button onClick={del} size="full" color="light">
        <Icon icon="ph:trash-bold" width={20} className="self-center" />
      </Button>
      <Input
        id="name"
        size="full"
        label="이름"
        placeholder="이름을 입력하세요"
        value={data.name}
        onChange={handleChange}
      />
      <Dropdown
        id="type"
        size="full"
        label="형태"
        placeholder="형태를 선택하세요"
        selections={["수상", "자격증"]}
        selected={type}
        onSelect={(data: string) => handleType(data as "수상" | "자격증")}
      />
      <Calander
        label={`${typeChange[type]}일`}
        onDelete={() => set("date", undefined)}
        size="full"
        id="date"
        placeholder={`${typeChange[type]}일을 입력하세요`}
        value={data.date}
        onChange={set}
      />
      <Input
        id="institution"
        size="full"
        label={`${typeChange[type]} 기관`}
        placeholder={`${typeChange[type]} 기관을 입력하세요`}
        value={data.institution}
        onChange={handleChange}
      />
    </Box>
  );
};
