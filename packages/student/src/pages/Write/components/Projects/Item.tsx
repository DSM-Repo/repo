import { Icon } from "@iconify/react";
import { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Calander,
  Dropdown,
  File,
  Input,
  Label,
  Textarea
} from "ui";
import { projectType } from "@configs/default";
import { setType } from "@/hooks/useResumeData";
import { uploadImage } from "@/apis/file";
import { IImage } from "@/apis/file/types";

interface IProp {
  data: projectType;
  setData: setType;
}

const typeChange = {
  개인: "PERSONAL",
  팀: "TEAM"
};

export const typeAgainChange = {
  PERSONAL: "개인",
  TEAM: "팀"
};

export const Item = ({ data, setData }: IProp) => {
  const [skill, setSkill] = useState<string>("");
  const { mutate } = uploadImage("profile");

  const set = (id: string, value?: string | string[] | IImage) =>
    setData((prev) => ({
      data: {
        ...prev.data,
        projectList: prev.data.projectList.map((i) =>
          i.elementId === data.elementId ? { ...data, [id]: value } : i
        )
      }
    }));

  const del = () => {
    setData((prev) => ({
      data: {
        ...prev.data,
        projectList: prev.data.projectList.filter(
          (item) => item.elementId !== data.elementId
        )
      }
    }));
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    set(target.id, target.value);

  const handleLogo = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = (target.files as FileList)[0];
    if (file) {
      const form = new FormData();
      form.append("file", file);
      mutate(form, {
        onSuccess: (res) => set("imageInfo", res)
      });
    }
  };

  const handleType = (data: string, name: string) => {
    set(name, typeChange[data as "개인" | "팀"]);
  };

  const handleChangeArea = ({ target }: ChangeEvent<HTMLTextAreaElement>) =>
    setData((prev) => ({
      data: {
        ...prev.data,
        projectList: prev.data.projectList.map((i) =>
          i.elementId === data.elementId
            ? {
                ...data,
                description: { ...data.description, [target.id]: target.value }
              }
            : i
        )
      }
    }));

  const handleDate = (id: string, value?: string) => set(id, value);

  return (
    <Box width="28rem" padding="20px" className="gap-6">
      <Button onClick={del} size="full" color="light">
        <Icon icon="ph:trash-bold" width={20} className="self-center" />
      </Button>
      <div className="grid grid-cols-[47%_47%] gap-2 justify-between w-full">
        <Input
          id="name"
          label="프로젝트 이름"
          size="full"
          placeholder="이름을 입력하세요"
          value={data.name}
          onChange={handleChange}
        />
        <File
          size="full"
          label="프로젝트 로고"
          placeholder="로고 파일을 선택하세요"
          onDelete={() => set("imageInfo", undefined)}
          onChange={handleLogo}
          value={data.imageInfo?.originalName}
          ext="image/*"
        />
      </div>
      <Dropdown
        selections={["개인", "팀"]}
        label="프로젝트 형태"
        selected={typeAgainChange[data.type]}
        size="full"
        id="type"
        onSelect={handleType}
        placeholder="프로젝트 형태를 선택해주세요"
      />
      <Label label="진행일" full className="w-full gap-3 items-center flex">
        <Calander
          id="startDate"
          onDelete={() => set("startDate", undefined)}
          size="full"
          placeholder="시작일을 선택하세요"
          value={data.startDate}
          onChange={handleDate}
        />
        <span>~</span>
        <Calander
          onDelete={() => set("endDate", undefined)}
          id="endDate"
          size="full"
          placeholder="종료일을 선택하세요"
          value={data.endDate}
          onChange={handleDate}
        />
      </Label>

      <div className="col-flex gap-3 w-full">
        <Input
          id="skills"
          size="full"
          label="기술 스택"
          placeholder="기술 스택을 입력하세요"
          value={skill}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSkill("");
              set("skillSet", [...data.skillSet, skill]);
            }
          }}
          onChange={(e) => setSkill(e.target.value)}
        />
        <div className="flex flex-wrap gap-2 w-full">
          {data.skillSet?.map((n) => (
            <Box
              padding="8px 13px"
              color="light"
              className="flex flex-row items-center gap-2"
            >
              <span className="text-body7">{n}</span>
              <Icon
                icon="ph:x-bold"
                color="white"
                className="cursor-pointer"
                onClick={() =>
                  set(
                    "skillSet",
                    data.skillSet.filter((j) => j !== n)
                  )
                }
              />
            </Box>
          ))}
        </div>
      </div>
      <Textarea
        id="motive"
        size="full"
        label="동기"
        placeholder="개발 동기를 입력하세요"
        value={data?.description.motive}
        rows={4}
        onChange={handleChangeArea}
      />
      <Textarea
        id="role"
        size="full"
        label="직책"
        placeholder="맡은 역할을 입력하세요"
        value={data?.description.role}
        rows={4}
        onChange={handleChangeArea}
      />
      <Textarea
        id="retrospective"
        size="full"
        label="회고"
        placeholder="프로젝트 회고를 입력하세요"
        value={data?.description.retrospective}
        rows={4}
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
