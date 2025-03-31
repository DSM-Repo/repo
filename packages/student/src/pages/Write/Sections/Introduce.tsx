import { Text, TextArea } from "ui";
import { Layout } from "./Layout";
import { Box } from "./Box";
import { Document } from "@configs/type";
import { useFormContext } from "react-hook-form";

export const Introduce = () => {
  const { register } = useFormContext<Document.Resume>();

  return (
    <Layout title="자기소개" subTitle="자신을 다른사람에게 소개해 보세요.">
      <Box>
        <Text label="한 줄 소개" placeholder="한 줄 소개를 입력하세요" size="large" {...register("introduce.heading")} />
        <TextArea label="자기소개" placeholder="자기소개를 입력하세요" size="large" rows={10} {...register("introduce.introduce")} />
      </Box>
    </Layout>
  );
};
