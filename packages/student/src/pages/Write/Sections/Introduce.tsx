import { useResumeData } from "@/hooks/useResumeData";
import { Text, TextArea, Title } from "ui";
import { ChangeEvent } from "react";
import { Layout } from "./Layout";

export const Introduce = () => {
  const { data: resume, setPartial } = useResumeData();
  const { introduce } = resume;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setPartial("introduce", e.target.value, e.target.id);

  return (
    <div className="col-flex gap-6 w-fit">
      <Title title="자기소개" subTitle="자신을 다른사람에게 소개해 보세요." />
      <Layout>
        <Text
          label="한 줄 소개"
          placeholder="한 줄 소개를 입력하세요"
          value={introduce.heading}
          onChange={handleChange}
          size="large"
          id="heading"
        />
        <TextArea
          label="자기소개"
          placeholder="자기소개를 입력하세요"
          value={introduce.introduce}
          onChange={handleChange}
          size="large"
          id="introduce"
          rows={10}
        />
      </Layout>
    </div>
  );
};
