import { Icon } from "@iconify/react";
import { ChangeEvent } from "react";
import { Box, Button, Dropdown, Input } from "ui";
import { dataType } from ".";

const type = {
  수상: "수여",
  자격증: "발급",
};

interface IProp {
  data: dataType;
  setData: React.Dispatch<React.SetStateAction<dataType[]>>;
}

export const Item = ({ data, setData }: IProp) => {
  const set = (id: string, value: string) =>
    setData((prev) =>
      prev.map((i) => (i.id === data.id ? { ...data, [id]: value } : i)),
    );

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    set(target.id, target.value);

  const handleSelect = (data: string, name?: string) => set(name || "", data);

  return (
    <Box
      size={{ width: "28rem", height: "fit-content", padding: "20px" }}
      className="gap-6"
    >
      <Button
        onClick={() => setData((prev) => prev.filter((i) => i.id !== data.id))}
        size="full"
        color="light"
      >
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
        selected={data.type}
        onSelect={handleSelect}
      />
      <Input
        id="date"
        size="full"
        label={`${type[data.type]}일`}
        placeholder={`${type[data.type]}일을 입력하세요`}
        value={data.date}
        onChange={handleChange}
      />
      <Input
        id="certificator"
        size="full"
        label={`${type[data.type]} 기관`}
        placeholder={`${type[data.type]} 기관을 입력하세요`}
        value={data.certificator}
        onChange={handleChange}
      />
    </Box>
  );
};
