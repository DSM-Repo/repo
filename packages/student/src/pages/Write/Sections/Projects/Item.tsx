import {
  Button,
  Date,
  Dropdown,
  Text,
  Label,
  TextArea,
  List,
  Icon,
  File
} from "ui";
import { setType } from "@/hooks";
import { Api, Document } from "@configs/type";
import { Layout } from "../Layout";
import { fileRemove, fileUpload } from "@/apis";
import { sectionData } from "@configs/type/src/Document";

interface IProp {
  data: Document.Project_list;
  setData: setType;
  index: number;
  moveItem: (index: number, direction: "up" | "down") => void;
}

const typeChange = {
  개인: "PERSONAL",
  팀: "TEAM"
};

export const typeAgainChange = {
  PERSONAL: "개인",
  TEAM: "팀"
};

const defaultSect: Document.sectionData = {
  element_id: "",
  title: "",
  description: ""
};

export const Item = ({ data, setData, index, moveItem }: IProp) => {
  const { mutate: fileUploadMutate } = fileUpload();
  const { mutate: fileReomoveMutate } = fileRemove();

  const set = (
    id: string,
    value?: string | string[] | Api.File.Image | sectionData[]
  ) =>
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
                  { ...defaultSect, element_id: crypto.randomUUID() },
                  ...data.sections
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
    fileReomoveMutate(`?url=${data?.logo?.image_path as string}`, {
      onSuccess: () => set("logo", undefined)
    });
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    set(target.id, target.value);

  const handleLogo = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const file = (target.files as FileList)[0];
    if (file) {
      const form = new FormData();
      form.append("file", file);
      fileUploadMutate(form, {
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

  const moveSection = (index: number, direction: "up" | "down") => {
    let array = [...data.sections];

    if (direction === "up" && index < array.length - 1) {
      [array[index], array[index + 1]] = [array[index + 1], array[index]];
    } else if (direction === "down" && index > 0) {
      [array[index - 1], array[index]] = [array[index], array[index - 1]];
    }
    set("sections", array);
  };

  return (
    <Layout>
      <div className="flex justify-between w-full">
        <input
          className="font-semibold text-[25px] w-[80%] item"
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
            placeholder="종료일 선택 (진행중)"
            value={data?.date?.end_date}
            onChange={handleDate}
          />
        </div>
      </Label>
      <Dropdown
        selections={["개인", "팀"]}
        label="형태"
        selected={typeAgainChange[data.type]}
        size="large"
        id="type"
        onChange={handleType}
        placeholder="프로젝트 형태를 선택해주세요"
      />
      <File
        size="large"
        label="로고"
        placeholder="로고"
        onChange={handleLogo}
        onDelete={deleteImage}
        accept="image/*"
        value={data.logo}
      />
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
      <Label label="섹션" size="full">
        <div className="w-full col-flex gap-8">
          <Button
            size="full"
            onClick={addSection}
            icon="Add"
            direction="center"
          >
            섹션 추가
          </Button>
          {data.sections.map((i, j) => (
            <Label size="full" label="">
              <div className="w-full col-flex gap-3">
                <div className="self-end flex gap-2 items-center">
                  <Icon
                    name="Arrow"
                    rotate="up"
                    size={20}
                    className="cursor-pointer"
                    onClick={() => moveSection(j, "down")}
                  />
                  <Icon
                    name="Arrow"
                    rotate="down"
                    size={20}
                    onClick={() => moveSection(j, "up")}
                    className="cursor-pointer"
                  />
                </div>
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
      </Label>
    </Layout>
  );
};
