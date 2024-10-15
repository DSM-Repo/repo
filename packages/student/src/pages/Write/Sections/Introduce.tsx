import { useResumeData } from "@/hooks/useResumeData";
import { Text, TextArea } from "ui";
import { Layout } from "./Layout";
import { Box } from "./Box";

export const Introduce = () => {
  const { data: resume, setPartial } = useResumeData();
  const { introduce } = resume;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setPartial("introduce", e.target.value, e.target.id);

  return (
    <Layout title="자기소개" subTitle="자신을 다른사람에게 소개해 보세요.">
      <Box>
        <Text
          required
          label="한 줄 소개"
          placeholder="한 줄 소개를 입력하세요"
          value={introduce.heading}
          onChange={handleChange}
          size="large"
          id="heading"
        />
        <TextArea
          required
          label="자기소개"
          placeholder="자기소개를 입력하세요"
          value={introduce.introduce}
          onChange={handleChange}
          size="large"
          id="introduce"
          rows={10}
          max={300}
        />
      </Box>
    </Layout>
  );
};
