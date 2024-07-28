import { useState } from "react";
import { Layout } from "../Layout";
import { Button } from "ui";
import { Icon } from "@iconify/react";
import { TData } from "./types";
import { Item } from "./Item";

const defaultData: TData = {
  id: 0,
  name: "",
  logo: undefined,
  date: "",
  skills: [],
  content: "",
  url: "",
};

export const Projects = () => {
  const [data, setData] = useState<TData[]>([]);

  return (
    <Layout title="프로젝트" subTitle="참가한 프로젝트에 대해 작성하세요">
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
