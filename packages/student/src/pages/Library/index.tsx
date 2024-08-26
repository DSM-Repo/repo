import { Ternary, Map } from "@configs/util";
import { getLibrary } from "@/apis";
import { Button } from "./Button";
import { Layout } from "ui";

export const Library = () => {
  const { data } = getLibrary();

  return (
    <Layout title="도서관" subTitle="지금까지 공개된 레주메북들을 읽어보세요">
      <Ternary data={data} onNull="데이터가 없습니다">
        <Map data={data?.data} Tomap={Button} max={4} />
      </Ternary>
    </Layout>
  );
};
