import { Icon } from "@iconify/react";
import { Layout } from "../Layout";
import { useState } from "react";
import { Item } from "./Item";
import { Button } from "ui";

export type dataType = {
  id: number,
  name: string,
  type: "수상" | "자격증",
  date: string,
  certificator: string,
};

const defaultData: dataType = {
  id: 0,
  name: "",
  type: "수상",
  date: "",
  certificator: "",
};

export const Certification = () => {
  const [data, setData] = useState<dataType[]>([]);

  return (
    <Layout title="자격증 & 수상" subTitle="자격증이나 수상 이력을 작성하세요">
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
