import { useFormContext } from "react-hook-form";
import { Text, TextArea } from "ui";
import { Layout } from "./Layout";
import { Box } from "./Box";

export const Introduce = () => {
  const { register } = useFormContext();

  return (
    <Layout title="자기소개" subTitle="자신을 다른사람에게 소개해 보세요.">
      <Box>
        <Text label="한 줄 소개" placeholder="한 줄 소개를 입력하세요" size="large" {...register("introduce.heading", { required: true })} />
        <TextArea label="자기소개" placeholder="자기소개를 입력하세요" size="large" rows={10} maxLength={300} {...register("introduce.introduce", { required: true })} />
      </Box>
    </Layout>
  );
};
