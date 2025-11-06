import { Controller, UseFieldArrayReturn, useFormContext } from "react-hook-form";
import { Date, CheckBox, Label, TextArea, Icon, Text } from "ui";
import { Box } from "../Box";
import { Document } from "@configs/type";

interface IProp {
  index: number;
  fieldArray: UseFieldArrayReturn<Document.Resume, "activity_list", "id">;
}

export const Item = ({ index, fieldArray }: IProp) => {
  const name = `activity_list.${index}` as const;
  const {
    control,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors }
  } = useFormContext<Document.Resume>();
  const { remove, swap } = fieldArray;
  const is_period = watch(`${name}.is_period`);

  return (
    <Box>
      <div className="flex justify-between w-full">
        <input className="font-semibold text-[25px] w-[80%]" placeholder="섹션명을 입력하세요" {...register(`${name}.section_name`)} />
        <div className="flex items-center gap-[10px]">
          <Icon name="Arrow" onClick={() => swap(index, index - 1)} rotate="up" className="cursor-pointer" disabled={index === 0} />
          <Icon name="Arrow" rotate="down" className="cursor-pointer" disabled={index === getValues("activity_list").length - 1} onClick={() => swap(index, index + 1)} />
          <Icon name="Trash" className="cursor-pointer" onClick={() => remove(index)} />
        </div>
      </div>

      <Label label="활동명" size="full" required>
        <Text
          error={errors?.activity_list?.[index]?.name?.message}
          placeholder="활동명을 입력하세요"
          size="large"
          {...register(`${name}.name`, { required: "활동명을 입력해주세요" })}
        />
      </Label>
      <Label label="진행일" size="full" required>
        <div className="w-full col-flex gap-3">
          <div className="w-full h-fit justify-between items-center flex">
            <Controller
              name={`${name}.date.start_date`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Date
                  error={errors?.activity_list?.[index]?.date?.start_date?.message}
                  placeholder={`${is_period ? "시작" : "진행"}일을 선택하세요`}
                  size={is_period ? "medium" : "large"}
                  onDelete={() => setValue(`${name}.date.start_date`, undefined)}
                  {...field}
                />
              )}
            />
            {is_period && (
              <>
                <span>~</span>
                <Controller
                  name={`${name}.date.end_date`}
                  control={control}
                  render={({ field }) => <Date placeholder="종료일 선택 (진행중)" size="medium" onDelete={() => setValue(`${name}.date.end_date`, undefined)} {...field} />}
                />
              </>
            )}
          </div>
          <CheckBox label="기간" onClick={() => setValue(`${name}.is_period`, !is_period)} checked={is_period} />
        </div>
      </Label>

      <TextArea error={errors?.activity_list?.[index]?.description?.message} label="내용" placeholder="내용을 입력하세요" size="large" rows={10} {...register(`${name}.description`)} required />
    </Box>
  );
};
