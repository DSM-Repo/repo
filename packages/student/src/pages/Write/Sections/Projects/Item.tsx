import { findKeyWithValue } from "@configs/util";
import { fileRemove, fileUpload } from "@/apis";
import { Api, Document } from "@configs/type";
import { useResumeData } from "@/hooks";
import { Box } from "../Box";
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

interface IProp {
  data: Document.Project_list;
  index: number;
}

const typeChange = {
  개인: "PERSONAL",
  팀: "TEAM"
};

const defaultSect: Document.sectionData = {
  element_id: "",
  title: "",
  description: ""
};

export const Item = ({ data, index }: IProp) => {
  const { setDeepPartial, removeItem, moveItem } = useResumeData();
  const { mutate: fileUploadMutate } = fileUpload();
  const { mutate: fileReomoveMutate } = fileRemove();

  const set = (
    id: string,
    value?:
      | string
      | string[]
      | Api.File.Image
      | Document.sectionData[]
      | Document.dateType
  ) => setDeepPartial("project_list", data.element_id, value, id);

  const setSection = (eleId: string, id: string, value?: string) =>
    set(
      "sections",
      data.sections.map((i) =>
        i.element_id === eleId ? { ...i, [id]: value } : i
      )
    );

  const addSection = () =>
    set("sections", [
      ...data.sections,
      { ...defaultSect, element_id: crypto.randomUUID() }
    ]);

  const delSection = (delId: string) =>
    set(
      "sections",
      data.sections.filter((i) => i.element_id !== delId)
    );

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
    set("date", { ...data.date, [id as keyof Document.dateType]: value });

  const delDate = (id: string) =>
    set("date", { ...data.date, [id as keyof Document.dateType]: undefined });

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
    <Box>
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
            onClick={() => moveItem("project_list", index, "down")}
          />
          <Icon
            name="Arrow"
            rotate="down"
            className="cursor-pointer"
            onClick={() => moveItem("project_list", index, "up")}
          />
          <Icon
            name="Trash"
            className="cursor-pointer"
            onClick={() => removeItem("project_list", data.element_id)}
          />
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
        selected={findKeyWithValue(typeChange, data.type)}
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
          {data.sections.map((i, j) => {
            const disabled =
              i.element_id === "r" ||
              i.element_id === "f" ||
              i.element_id === "re";

            return (
              <div>
                <div className="col-flex w-full gap-2">
                  <div className="flex items-center justify-between">
                    <input
                      className="text-body5 disabled:text-gray-300 disabled:cursor-not-allowed"
                      placeholder="섹션 이름을 입력하세요"
                      disabled={disabled}
                      onChange={(e) =>
                        setSection(i.element_id, "title", e.target.value)
                      }
                      value={i.title}
                    />
                    <div className="flex gap-2 items-center">
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
                      <Icon
                        name="Trash"
                        size={20}
                        disabled={disabled}
                        onClick={() => delSection(i.element_id)}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  <TextArea
                    value={i.description}
                    rows={7}
                    onChange={(e) =>
                      setSection(i.element_id, "description", e.target.value)
                    }
                    placeholder="내용을 입력하세요"
                    size="large"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Label>
    </Box>
  );
};
