import { useFormContext, Controller } from "react-hook-form";
import { Dropdown, Text, Label, List } from "ui";
import { Layout } from "./Layout";
import { majorList } from "@/api";
import { Box } from "./Box";

const studId = {
  grade: Array.from({ length: 3 }, (_, i) => i + 1),
  class: Array.from({ length: 4 }, (_, i) => i + 1),
  num: Array.from({ length: 16 }, (_, i) => i + 1)
};

export const Inform = () => {
  const { register, getValues, control } = useFormContext();
  const { data: majors } = majorList();

  return (
    <Layout title="내 정보" subTitle="기본적인 정보에 대해 작성해 보세요.">
      <Box>
        <Text label="이름" placeholder="이름을 입력하세요" size="large" value={getValues("writer.name")} readOnly required />
        <Label label="학번" size="full" required>
          <div className="w-full flex items-center justify-between">
            <Dropdown placeholder="학년" suffix="학년" size="small" selections={studId.grade} value={getValues("writer.class_info.grade")} disabled />
            <Dropdown placeholder="반" suffix="반" size="small" selections={studId.class} value={getValues("writer.class_info.class_number")} disabled />
            <Dropdown placeholder="번호" suffix="번" size="small" selections={studId.num} value={getValues("writer.class_info.number")} disabled />
          </div>
        </Label>
        <Controller
          name="writer.major"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Dropdown label="전공" placeholder="전공을 선택하세요" selections={majors?.data?.map((i) => i.id) || []} size="large" required {...field} />}
        />
        <Controller
          name="writer.skill_set"
          control={control}
          render={({ field: { value, onChange } }) => (
            <List
              label="기술 스택"
              placeholder="기술 스택을 입력하세요"
              size="large"
              listSize="large"
              values={value.map((i: string) => ({ id: i, name: i }))}
              onEnter={(item) => onChange([...value, item])}
              onDelete={(i) => onChange(value.filter((j: string) => j !== i))}
              required
            />
          )}
        />
        <Text
          label="이메일"
          placeholder="이메일을 입력하세요"
          size="large"
          title="'example@example.com' 과 같은 형식이어야 합니다."
          {...register("writer.email", { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
        />
        <Text
          label="추가 URL"
          placeholder="포트폴리오나, 깃허브의 URL 등을 입력하세요"
          title="'https://example.com' 과 같은 형식이어야 합니다."
          size="large"
          {...register("writer.url", { pattern: /https?:\/\/[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/ })}
        />
      </Box>
    </Layout>
  );
};
