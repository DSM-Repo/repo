import { ChangeEvent, useState } from "react";
import { Button, Date, Dropdown, Text, Label, TextArea, List, Icon } from "ui";
import { projectType, sectionType } from "@configs/util";
import { setType } from "@/hooks";
import { IImage, uploadImage, delFile } from "@/apis";
import { Layout } from "../Layout";

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

  const handleType = (data: string, name?: string) => {
    set(name as string, typeChange[data as "개인" | "팀"]);
  };

  const handleDate = (value: string, id?: string) =>
    setData((prev) => ({
      data: {
        ...prev.data,
        project_list: prev.data.project_list.map((i) =>
          i.element_id === data.element_id
            ? {
                ...data,
                date: {
                  ...data.date,
                  [id as string]: value
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
    <Layout>
      <div className="flex justify-between w-full items-center">
        <span
          className={`text-[25px] font-semibold ${data.name ? "text-white" : "text-gray-500"}`}
        >
          {data.name || "이름을 입력해주세요"}
        </span>
        <div className="flex items-center gap-[10px]">
          <Icon name="Trash" className="cursor-pointer" onClick={del} />
          <Icon name="AddRow" className="cursor-pointer" onClick={addSection} />
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <Text
          id="name"
          label="이름"
          size="small"
          placeholder="이름"
          value={data.name}
          onChange={handleChange}
        />
        <Dropdown
          selections={["개인", "팀"]}
          label="형태"
          selected={typeAgainChange[data.type]}
          size="small"
          id="type"
          onChange={handleType}
          placeholder="프로젝트 형태를 선택해주세요"
        />
        <Text
          id="name"
          label="로고"
          size="small"
          placeholder="이름"
          value={data.name}
          onChange={handleChange}
        />
        {/* <File
          size="full"
          label="프로젝트 로고"
          placeholder="로고 파일을 선택하세요"
          onDelete={deleteImage}
          onChange={handleLogo}
          value={data.logo?.original_name}
          ext="image/*"
        /> */}
      </div>
      <Label label="진행 기간" size="full">
        <div className="w-full h-fit flex justify-between items-center">
          <Date
            id="start_date"
            onDelete={() => delDate("start_date")}
            size="medium"
            placeholder="시작일을 선택하세요"
            value={data?.date?.start_date}
            onChange={handleDate}
          />
          <span>~</span>
          <Date
            onDelete={() => delDate("end_date")}
            id="end_date"
            size="medium"
            placeholder="종료일을 선택하세요"
            value={data?.date?.end_date}
            onChange={handleDate}
          />
        </div>
      </Label>
      <List
        onDelete={(i) =>
          set(
            "skill_set",
            data.skill_set.filter((j) => j !== i)
          )
        }
        label="기술 스택"
        placeholder="기술 스택을 입력하세요"
        onEnter={(i) => set("skill_set", [...data.skill_set, i])}
        listSize="large"
        values={data.skill_set.map((i) => ({ id: i, name: i }))}
        size="large"
      />
      <Text
        id="url"
        size="large"
        label="URL"
        placeholder="관련된 URL을 입력하세요"
        value={data.url}
        onChange={handleChange}
      />
      <div className="col-flex w-full gap-6">
        {data.sections.map((i) => (
          <Label size="full" label={i.title || "이름을 입력해주세요"}>
            <div className="w-full col-flex gap-3">
              <div className="w-full flex gap-3 h-full">
                <Text
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
                  size="full"
                  disabled={
                    i.element_id === "r" ||
                    i.element_id === "f" ||
                    i.element_id === "re"
                  }
                  icon="Trash"
                >
                  섹션 삭제
                </Button>
              </div>
              <TextArea
                value={i.description}
                rows={7}
                onChange={(e) =>
                  setSection(i.element_id, "description", e.target.value)
                }
                placeholder="내용을 입력하세요"
                size="full"
              />
            </div>
          </Label>
        ))}
      </div>
    </Layout>
  );
};
