import { Input } from "ui";
import { Layout } from "./Layout";
import { ChangeEvent, useState } from "react";

export const Introduce = () => {
  const [data, setData] = useState({
    short: "",
    long: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  return (
    <Layout title="자기소개" subTitle="자신에 대해 소개하는 글을 작성하세요">
      <Input
        label="한 줄 소개"
        placeholder="한 줄 소개를 입력하세요"
        value={data.short}
        onChange={handleChange}
        size="large"
        id="short"
      />
      <Input
        label="자기소개"
        placeholder="한 줄 소개를 입력하세요"
        value={data.long}
        onChange={handleChange}
        size="large"
        id="long"
        multiLine={10}
      />
    </Layout>
  );
};
