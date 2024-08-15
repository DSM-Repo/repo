import { useResumeData } from "@/hooks/useResumeData";
import { Input, Textarea } from "ui";
import { ChangeEvent } from "react";
import { Layout } from "./Layout";

export const Introduce = () => {
  const { data: resume, setPartial } = useResumeData();
  const { introduce } = resume;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setPartial("introduce", e.target.value, e.target.id);

  return (
    <Layout title="자기소개" subTitle="자신에 대해 소개하는 글을 작성하세요">
      <Input
        label="한 줄 소개"
        placeholder="한 줄 소개를 입력하세요"
        value={introduce.heading}
        onChange={handleChange}
        size="large"
        id="heading"
      />
      <Textarea
        label="자기소개"
        placeholder="한 줄 소개를 입력하세요"
        value={introduce.introduce}
        onChange={handleChange}
        size="large"
        id="introduce"
        rows={10}
      />
    </Layout>
  );
};
