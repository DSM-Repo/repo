import { useFieldArray, useFormContext, Controller, UseFieldArrayReturn } from "react-hook-form";
import { Button, Date, Dropdown, Text, Label, TextArea, List, Icon, File } from "ui";

import { findKeyWithValue } from "@configs/util";
import { fileAdd, fileRemove } from "@/api";
import { Document } from "@configs/type";
import { Box } from "../Box";

interface IProp {
  fieldMethod: UseFieldArrayReturn<Document.Resume, "project_list", "id">;
  index: number;
}

const typeTable = {
  개인: "PERSONAL",
  팀: "TEAM"
} as const;

const disableTable: Record<string, boolean> = {
  r: true,
  f: true,
  re: true
};

export const Item = ({ fieldMethod: { remove, swap }, index }: IProp) => {
  const name = `project_list.${index}` as const;
  const { control, register, watch, setValue, getValues } = useFormContext<Document.Resume>();
  const { fields: fieldsSections, append: appendSection, remove: removeSection, swap: swapSection } = useFieldArray({ control, name: `${name}.sections` });

  const { mutate: fileUploadMutate } = fileAdd();
  const { mutate: fileReomoveMutate } = fileRemove();

  const handleLogo = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const file = (target.files as FileList)[0];
    const prevLogo = getValues(`${name}.logo`);

    const upload = () => {
      const form = new FormData();
      form.append("file", file);
      fileUploadMutate(form, { onSuccess: (res) => setValue(`${name}.logo`, res) });
    };

    if (file) {
      if (prevLogo) fileReomoveMutate(`?url=${prevLogo}`, { onSuccess: upload });
      else upload();
    }
  };

  return (
    <Box>
      <div className="flex justify-between w-full">
        <input className="font-semibold text-[25px] w-[80%]" placeholder="이름을 입력하세요" {...register(`${name}.name`)} />
        <div className="flex items-center gap-[10px]">
          <Icon name="Arrow" rotate="up" className="cursor-pointer" disabled={index === 0} onClick={() => swap(index, index - 1)} />
          <Icon name="Arrow" rotate="down" className="cursor-pointer" disabled={index === getValues("project_list").length - 1} onClick={() => swap(index, index + 1)} />
          <Icon name="Trash" className="cursor-pointer" onClick={() => remove(index)} />
        </div>
      </div>
      <Label label="진행 기간" size="full">
        <div className="w-full h-fit flex justify-between items-center">
          <Controller
            name={`${name}.date.start_date`}
            control={control}
            render={({ field }) => <Date placeholder="시작일을 선택하세요" size="medium" onDelete={() => setValue(`${name}.date.start_date`, undefined)} {...field} />}
          />
          <span>~</span>
          <Controller
            control={control}
            name={`${name}.date.end_date`}
            render={({ field }) => <Date placeholder="종료일 선택 (진행중)" size="medium" onDelete={() => setValue(`${name}.date.end_date`, undefined)} {...field} />}
          />
        </div>
      </Label>

      <Controller
        name={`${name}.type`}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Dropdown
            label="형태"
            placeholder="프로젝트 형태를 선택해주세요"
            selections={["개인", "팀"]}
            size="large"
            required
            value={findKeyWithValue(typeTable, value)}
            onChange={(item) => onChange(typeTable[item as keyof typeof typeTable])}
          />
        )}
      />

      <File size="large" label="로고" placeholder="로고" accept="image/*" value={watch(`${name}.logo`)} onChange={handleLogo} onDelete={() => fileReomoveMutate(`?url=${getValues(`${name}.logo`)}`)} />

      <Controller
        name={`${name}.skill_set`}
        control={control}
        render={({ field: { value, onChange } }) => (
          <List
            label="기술 스택"
            placeholder="기술 스택을 입력하세요"
            values={value.map((i) => ({ id: i, name: i }))}
            onEnter={(i) => setValue(`${name}.skill_set`, [...value, i])}
            onDelete={(i) => onChange(value.filter((j) => j !== i))}
            required
            size="large"
            listSize="large"
          />
        )}
      />
      
      <Text
        placeholder="관련된 URL을 입력하세요"
        label="URL"
        title="'https://example.com' 과 같은 형식이어야 합니다."
        size="large"
        {...register(`${name}.url`, { pattern: /https?:\/\/[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/ })}
      />
      <Label label="섹션" size="full">
        <div className="w-full col-flex gap-8">
          <Button size="full" onClick={() => appendSection({ description: "", title: "", element_id: crypto.randomUUID() })} icon="Add" direction="center">
            섹션 추가
          </Button>
          {fieldsSections.map((i, j) => (
            <div key={i.element_id}>
              <div className="col-flex w-full gap-2">
                <div className="flex items-center justify-between">
                  <input
                    className="text-body5 disabled:text-gray-300 disabled:cursor-not-allowed"
                    placeholder="섹션 이름을 입력하세요"
                    {...register(`${name}.sections.${j}.title`, { disabled: disableTable[i.element_id] })}
                  />
                  <div className="flex gap-2 items-center">
                    <Icon name="Arrow" rotate="up" disabled={j === 0} size={20} className="cursor-pointer" onClick={() => swapSection(j, j - 1)} />
                    <Icon name="Arrow" rotate="down" disabled={j === getValues(`${name}.sections`).length - 1} size={20} onClick={() => swapSection(j, j + 1)} className="cursor-pointer" />
                    <Icon name="Trash" size={20} disabled={disableTable[i.element_id]} onClick={() => removeSection(j)} className="cursor-pointer" />
                  </div>
                </div>
                <TextArea placeholder="내용을 입력하세요" size="large" rows={7} {...register(`${name}.sections.${j}.description`)} />
              </div>
            </div>
          ))}
        </div>
      </Label>
    </Box>
  );
};
