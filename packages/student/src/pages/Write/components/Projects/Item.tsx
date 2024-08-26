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
import { projectType, sectionType } from "@configs/util";
import { setType } from "@/hooks";
import { IImage, uploadImage, delFile } from "@/apis";

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

const defaultSect: sectionType = {
  element_id: "",
  title: "",
  description: ""
};

export const Item = ({ data, setData }: IProp) => {
  const [skill, setSkill] = useState<string>("");
  const { mutate } = uploadImage("profile");
  const { mutate: delImage } = delFile();

  const set = (id: string, value?: string | string[] | IImage) =>
    setData((prev) => ({
      data: {
        ...prev.data,
        project_list: prev.data.project_list.map((i) =>
          i.element_id === data.element_id ? { ...data, [id]: value } : i
        )
      }
    }));

  const del = () => {
    setData((prev) => ({
      data: {
        ...prev.data,
        project_list: prev.data.project_list.filter(
          (item) => item.element_id !== data.element_id
        )
      }
    }));
  };

  const setSection = (eleId: string, id: string, value?: string) =>
    setData((prev) => ({
      data: {
        ...prev.data,
        project_list: prev.data.project_list.map((i) =>
          i.element_id === data.element_id
            ? {
                ...data,
                sections: data.sections.map((j) =>
                  j.element_id === eleId ? { ...j, [id]: value } : j
                )
              }
            : i
        )
      }
    }));

  const addSection = () =>
    setData((prev) => ({
      data: {
        ...prev.data,
        project_list: prev.data.project_list.map((i) =>
          i.element_id === data.element_id
            ? {
                ...data,
                sections: [
                  ...data.sections,
                  { ...defaultSect, element_id: crypto.randomUUID() }
                ]
              }
            : i
        )
      }
    }));

  const delSection = (delId: string) =>
    setData((prev) => ({
      data: {
        ...prev.data,
        project_list: prev.data.project_list.map((i) =>
          i.element_id === data.element_id
            ? {
                ...data,
                sections: data.sections.filter((j) => j.element_id !== delId)
              }
            : i
        )
      }
    }));

  const deleteImage = () => {
    delImage(
      { url: data?.logo?.image_path as string },
      { onSuccess: () => set("logo", undefined) }
    );
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    set(target.id, target.value);

  const handleLogo = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = (target.files as FileList)[0];
    if (file) {
      const form = new FormData();
      form.append("file", file);
      mutate(form, {
        onSuccess: (res) => set("logo", res)
      });
    }
  };

  const handleType = (data: string, name: string) => {
    set(name, typeChange[data as "개인" | "팀"]);
  };

  const handleDate = (id: string, value?: string) =>
    setData((prev) => ({
      data: {
        ...prev.data,
        project_list: prev.data.project_list.map((i) =>
          i.element_id === data.element_id
            ? {
                ...data,
                date: {
                  ...data.date,
                  [id]: value
                }
              }
            : i
        )
      }
    }));

  const delDate = (id: string) =>
    setData((prev) => ({
      data: {
        ...prev.data,
        project_list: prev.data.project_list.map((i) =>
          i.element_id === data.element_id
            ? {
                ...data,
                date: {
                  ...data.date,
                  [id]: undefined
                }
              }
            : i
        )
      }
    }));

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
          onDelete={deleteImage}
          onChange={handleLogo}
          value={data.logo?.original_name}
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
          id="start_date"
          onDelete={() => delDate("start_date")}
          size="full"
          placeholder="시작일을 선택하세요"
          value={data?.date?.start_date}
          onChange={handleDate}
        />
        <span>~</span>
        <Calander
          onDelete={() => delDate("end_date")}
          id="end_date"
          size="full"
          placeholder="종료일을 선택하세요"
          value={data?.date?.end_date}
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
              set("skill_set", [...data.skill_set, skill]);
            }
          }}
          onChange={(e) => setSkill(e.target.value)}
        />
        <div className="flex flex-wrap gap-2 w-full">
          {data.skill_set?.map((n) => (
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
                    "skill_set",
                    data.skill_set.filter((j) => j !== n)
                  )
                }
              />
            </Box>
          ))}
        </div>
      </div>
      <Input
        id="url"
        size="full"
        label="URL"
        placeholder="관련된 URL을 입력하세요"
        value={data.url}
        onChange={handleChange}
      />
      <div className="col-flex w-full gap-6 ">
        <Label label="섹션" full>
          <Button color="light" size="full" onClick={() => addSection()}>
            <Icon icon="ph:plus-bold" width={20} />
          </Button>
        </Label>
        {data.sections.map((i) => (
          <Label label={i.title || "이름 없는 섹션"} full>
            <Box color="light" width="100%" className="gap-3">
              <div className="w-full flex gap-3 h-full">
                <Input
                  placeholder="섹션 이름을 입력하세요"
                  value={i.title}
                  onChange={(e) =>
                    setSection(i.element_id, "title", e.target.value)
                  }
                  disabled={
                    i.element_id === "r" ||
                    i.element_id === "f" ||
                    i.element_id === "re"
                  }
                  size="full"
                />
                <Button
                  onClick={() => delSection(i.element_id)}
                  className="h-12"
                  size="full"
                  disabled={
                    i.element_id === "r" ||
                    i.element_id === "f" ||
                    i.element_id === "re"
                  }
                >
                  <Icon
                    icon="ph:trash-bold"
                    width={20}
                    className="self-center"
                  />
                </Button>
              </div>
              <Textarea
                value={i.description}
                rows={5}
                onChange={(e) =>
                  setSection(i.element_id, "description", e.target.value)
                }
                placeholder="내용을 입력하세요"
                size="full"
              />
            </Box>
          </Label>
        ))}
      </div>
    </Box>
  );
};
