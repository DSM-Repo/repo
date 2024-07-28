import { Icon } from "@iconify/react";
import { ChangeEvent, useState } from "react";
import { Box, Button, File, Input, Textarea } from "ui";
import { TData } from "./types";

interface IProp {
  data: TData;
  setData: React.Dispatch<React.SetStateAction<TData[]>>;
}

export const Item = ({ data, setData }: IProp) => {
  const [skill, setSkill] = useState<string>("");

  const set = (id: string, value: string | File | undefined) =>
    setData((prev) =>
      prev.map((i) => (i.id === data.id ? { ...data, [id]: value } : i)),
    );

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    set(target.id, target.value);

  const handleLogo = ({ target }: ChangeEvent<HTMLInputElement>) =>
    set("logo", (target.files as FileList)[0] || "");

  const handleChangeArea = ({ target }: ChangeEvent<HTMLTextAreaElement>) =>
    set(target.id, target.value);

  return (
    <Box
      size={{ width: "28rem", height: "fit-content", padding: "20px" }}
      className="gap-6"
    >
      <Button
        onClick={() =>
          setData((prev) =>
            prev.filter((i) => {
              console.log(i.id, data.id);
              return i.id !== data.id;
            }),
          )
        }
        size="full"
        color="light"
      >
        <Icon icon="ph:trash-bold" width={20} className="self-center" />
      </Button>
      <div className="flex w-full gap-3">
        <Input
          id="name"
          size="full"
          label="이름"
          placeholder="이름을 입력하세요"
          value={data.name}
          onChange={handleChange}
        />
        <File
          label="로고"
          size="full"
          placeholder="로고 파일을 선택하세요"
          onDelete={() => set("logo", undefined)}
          onChange={handleLogo}
          value={data.logo}
          ext="image/*"
        />
      </div>
      <Input
        id="date"
        size="full"
        label="진행일"
        placeholder="진행일을 입력하세요"
        value={data.date}
        onChange={handleChange}
      />
      <Input
        id="skills"
        size="full"
        label="기술 스택"
        placeholder="기술 스택을 입력하세요"
        value={skill}
        onKeyDown={(e) => e.key === "Enter" && set("skills", skill)}
        onChange={(e) => setSkill(e.target.value)}
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
      <Input
        id="url"
        size="full"
        label="URL"
        placeholder="관련된 URL을 입력하세요"
        value={data.url}
        onChange={handleChange}
      />
    </Box>
  );
};
