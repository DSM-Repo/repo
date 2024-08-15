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
        activityList: prev.data.activityList.map((i) =>
          i.elementId === data.elementId ? { ...data, [id]: value } : i
        )
      }
    }));

  const del = () => {
    setData((prev) => ({
      data: {
        ...prev.data,
        activityList: prev.data.activityList.filter(
          (item) => item.elementId !== data.elementId
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
            id="startDate"
            onDelete={() => set("startDate", undefined)}
            size="full"
            placeholder={`${data.isPeriod ? "시작" : "진행"}일을 선택하세요`}
            value={data.startDate}
            onChange={handleDate}
          />
          {data.isPeriod && (
            <>
              <span>~</span>
              <Calander
                onDelete={() => set("endDate", undefined)}
                id="endDate"
                size="full"
                placeholder="종료일을 선택하세요"
                value={data.endDate}
                onChange={handleDate}
              />
            </>
          )}
        </div>
        <CheckBox
          label="기간"
          onChange={() => set("isPeriod", !data.isPeriod)}
          state={data.isPeriod}
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
