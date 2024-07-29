import { Box, Button, Input, Textarea } from "ui";
import { Icon } from "@iconify/react";
import { ChangeEvent } from "react";
import { dataType } from ".";

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

  const handleChangeArea = ({ target }: ChangeEvent<HTMLTextAreaElement>) =>
    set(target.id, target.value);

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
        label="활동 이름"
        placeholder="이름을 입력하세요"
        value={data.name}
        onChange={handleChange}
      />
      <Input
        id="date"
        size="full"
        label="진행일"
        placeholder="진행 기간을 입력하세요"
        value={data.date}
        onChange={handleChange}
      />
      <Textarea
        id="content"
        size="full"
        label="내용"
        placeholder="내용을 입력하세요"
        value={data.content}
        rows={10}
        onChange={handleChangeArea}
      />
    </Box>
  );
};
