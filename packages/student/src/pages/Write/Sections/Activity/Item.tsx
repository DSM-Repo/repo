import { Date, CheckBox, Label, TextArea, Icon } from "ui";
import { Document } from "@configs/type";
import { useResumeData } from "@/hooks";
import { Box } from "../Box";

interface IProp {
  data: Document.Activity_list;
  index: number;
}

export const Item = ({ data, index }: IProp) => {
  const { removeItem, moveItem, setDeepPartial } = useResumeData();

  const handleDate = (value?: string, id?: string) =>
    setDeepPartial(
      "activity_list",
      data.element_id,
      { ...data.date, [id as string]: value },
      "date"
    );

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setDeepPartial("activity_list", data.element_id, target.value, target.id);

  const handleChangeArea = ({
    target
  }: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDeepPartial("activity_list", data.element_id, target.value, target.id);

  return (
    <Box>
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
            onClick={() => moveItem("activity_list", index, "down")}
          />
          <Icon
            name="Arrow"
            rotate="down"
            className="cursor-pointer"
            onClick={() => moveItem("activity_list", index, "up")}
          />
          <Icon
            name="Trash"
            className="cursor-pointer"
            onClick={() => removeItem("activity_list", data.element_id)}
          />
        </div>
      </div>
      <Label label="진행일" size="full">
        <div className="w-full col-flex gap-3">
          <div className="w-full h-fit justify-between items-center flex">
            <Date
              id="start_date"
              onDelete={() => handleDate(undefined, "start_date")}
              size={data?.is_period ? "medium" : "large"}
              placeholder={`${data.is_period ? "시작" : "진행"}일을 선택하세요`}
              value={data?.date?.start_date}
              onChange={handleDate}
            />
            {data.is_period && (
              <>
                <span>~</span>
                <Date
                  onDelete={() => handleDate(undefined, "end_date")}
                  id="end_date"
                  size="medium"
                  placeholder="종료일 선택 (진행중)"
                  value={data?.date?.end_date}
                  onChange={handleDate}
                />
              </>
            )}
          </div>
          <CheckBox
            label="기간"
            onClick={() =>
              setDeepPartial(
                "activity_list",
                data.element_id,
                !data.is_period,
                "is_period"
              )
            }
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
    </Box>
  );
};
