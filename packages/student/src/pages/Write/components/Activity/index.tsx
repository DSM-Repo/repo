import { Icon } from "@iconify/react";
import { Layout } from "../Layout";
import { useState } from "react";
import { Item } from "./Item";
import { Button } from "ui";

export type dataType = {
  id: number,
  name: string,
  date: string,
  content: string,
};

const defaultData: dataType = {
  id: 0,
  name: "",
  date: "",
  content: "",
};

export const Activity = () => {
  const [data, setData] = useState<dataType[]>([]);

  return (
    <Layout title="활동" subTitle="참가한 활동을 작성하세요">
      <Button
        onClick={() =>
          setData((prev) => [...prev, { ...defaultData, id: Math.random() }])
        }
        size="large"
      >
        <Icon icon="mingcute:add-fill" width={25} className="self-center" />
      </Button>
      <>
        {data.map((i) => (
          <Item data={i} setData={setData} />
        ))}
      </>
    </Layout>
  );
};
