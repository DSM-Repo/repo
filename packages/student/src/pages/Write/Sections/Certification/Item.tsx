import { useFieldArray, useFormContext, Controller, UseFormReturn, UseFieldArrayReturn } from "react-hook-form";
import { achieveType } from "@configs/type/src/Document";
import { Icon, Date, Dropdown, Text } from "ui";
import { Box } from "../Box";
import { Document } from "@configs/type";

const typeTable = {
  AWARD: ["수여", "수상"],
  CERTIFICATE: ["발급", "자격증"]
};

const typeTypeTable = {
  수상: "AWARD",
  자격증: "CERTIFICATE"
} as const;

interface IProp {
  index: number;
  fieldArray: UseFieldArrayReturn<Document.Resume, "achievement_list", "id">;
}

export const Item = ({ index, fieldArray }: IProp) => {
  const name = `achievement_list.${index}` as const;
  const { control, register, watch, setValue, getValues } = useFormContext();
  const { remove, swap: swap } = fieldArray;
  // const display = typeTable[watch(`${name}.type`) as achieveType][0];

  return (
    <Box>
      <div className="flex justify-between w-full">
        <input className="font-semibold text-[25px] w-[80%]" placeholder="이름을 입력하세요" {...register(`${name}.name`)} />
        <div className="flex items-center gap-[10px]">
          <Icon name="Arrow" rotate="up" className="cursor-pointer" disabled={index === 0} onClick={() => swap(index, index - 1)} />
          <Icon name="Arrow" rotate="down" className="cursor-pointer" disabled={index === getValues("achievement_list").length - 1} onClick={() => swap(index, index + 1)} />
          <Icon name="Trash" className="cursor-pointer" onClick={() => remove(index)} />
        </div>
      </div>
      <Controller
        name={`${name}.type`}
        control={control}
        render={({ field: { value, onChange, ...rest } }) => (
          <Dropdown
            size="large"
            label="형태"
            placeholder="형태를 선택하세요"
            selections={["수상", "자격증"]}
            value={typeTable[value as achieveType][1]}
            onChange={(item) => onChange(typeTypeTable[item as keyof typeof typeTypeTable])}
            {...rest}
          />
        )}
      />

      {/* <Controller
        name={`${name}.date`}
        control={control}
        render={({ field }) => <Date label={`${display}일`} placeholder={`${display}일을 입력하세요`} size="large" onDelete={() => setValue(`${name}.date`, undefined)} {...field} />}
      />

      <Text label={`${display} 기관`} placeholder={`${display} 기관을 입력하세요`} size="large" {...register(`${name}.institution`)} /> */}
    </Box>
  );
};
