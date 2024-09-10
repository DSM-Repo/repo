import { Date, CheckBox, Text, Label, TextArea, Icon } from "ui";
import { Layout } from "../Layout";
import { ChangeEvent } from "react";
import { setType } from "@/hooks/useResumeData";
import { Document } from "@configs/type";

interface IProp {
  data: Document.Activity_list;
  setData: setType;
  index: number;
  moveItem: (index: number, direction: "up" | "down") => void;
}

export const Item = ({ data, setData, index, moveItem }: IProp) => {
  const set = (id: string, value?: string | boolean) =>
    setData((prev) => ({
      data: {
        ...prev.data,
        activity_list: prev.data.activity_list.map((i) =>
          i.element_id === data.element_id ? { ...data, [id]: value } : i
        )
      }
    }));

  const setDate = (value?: string, id?: string) =>
    setData((prev) => ({
      data: {
        ...prev.data,
        activity_list: prev.data.activity_list.map((i) =>
          i.element_id === data.element_id
            ? { ...data, date: { ...data.date, [id as string]: value } }
            : i
        )
      }
    }));

  const del = () => {
    setData((prev) => ({
      data: {
        ...prev.data,
        activity_list: prev.data.activity_list.filter(
          (item) => item.element_id !== data.element_id
        )
      }
    }));
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    set(target.id, target.value);

  const handleChangeArea = ({ target }: ChangeEvent<HTMLTextAreaElement>) =>
    set(target.id, target.value);

  return (
    <Layout>
      <div className="flex justify-between w-full">
        <input
          className="font-semibold text-[25px] w-[80%]"
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
      <Label label="진행일" size="full">
        <div className="w-full col-flex gap-3">
          <div className="w-full h-fit justify-between items-center flex">
            <Date
              id="start_date"
              onDelete={() => setDate(undefined, "start_date")}
              size={data?.is_period ? "medium" : "large"}
              placeholder={`${data.is_period ? "시작" : "진행"}일을 선택하세요`}
              value={data?.date?.start_date}
              onChange={setDate}
            />
            {data.is_period && (
              <>
                <span>~</span>
                <Date
                  onDelete={() => setDate(undefined, "end_date")}
                  id="end_date"
                  size="medium"
                  placeholder="종료일을 선택하세요"
                  value={data?.date?.end_date}
                  onChange={setDate}
                />
              </>
            )}
          </div>
          <CheckBox
            label="기간"
            onClick={() => set("is_period", !data.is_period)}
            checked={data.is_period}
          />
        </div>
      </Label>

      <TextArea
        id="description"
        size="large"
        label="내용"
        placeholder="내용을 입력하세요"
        value={data.description}
        rows={10}
        onChange={handleChangeArea}
      />
    </Layout>
  );
};
