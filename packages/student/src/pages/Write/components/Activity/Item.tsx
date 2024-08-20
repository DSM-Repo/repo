import { Box, Button, Calander, CheckBox, Input, Label, Textarea } from "ui";
import { Icon } from "@iconify/react";
import { ChangeEvent } from "react";
import { setType } from "@/hooks/useResumeData";
import { activityType } from "@configs/default";

interface IProp {
  data: activityType;
  setData: setType;
}

export const Item = ({ data, setData }: IProp) => {
  const set = (id: string, value?: string | boolean) =>
    setData((prev) => ({
      data: {
        ...prev.data,
        activity_list: prev.data.activity_list.map((i) =>
          i.element_id === data.element_id ? { ...data, [id]: value } : i
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

  const handleDate = (id: string, value?: string) => set(id, value);

  return (
    <Box width="28rem" padding="20px" className="gap-6">
      <Button onClick={del} size="full" color="light">
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
      <Label label="진행일" full className="flex-col gap-3">
        <div className="w-full h-fit gap-3 items-center flex">
          <Calander
            id="start_date"
            onDelete={() => set("start_date", undefined)}
            size="full"
            placeholder={`${data.is_period ? "시작" : "진행"}일을 선택하세요`}
            value={data.start_date}
            onChange={handleDate}
          />
          {data.is_period && (
            <>
              <span>~</span>
              <Calander
                onDelete={() => set("end_date", undefined)}
                id="end_date"
                size="full"
                placeholder="종료일을 선택하세요"
                value={data.end_date}
                onChange={handleDate}
              />
            </>
          )}
        </div>
        <CheckBox
          label="기간"
          onChange={() => set("is_period", !data.is_period)}
          state={data.is_period}
          className="self-start"
        />
      </Label>

      <Textarea
        id="description"
        size="full"
        label="내용"
        placeholder="내용을 입력하세요"
        value={data.description}
        rows={10}
        onChange={handleChangeArea}
      />
    </Box>
  );
};
