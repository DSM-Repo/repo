import { useFieldArray, useFormContext } from "react-hook-form";
import { Placeholder } from "@configs/type";
import { Layout } from "../Layout";
import { Document } from "@configs/type";
import { Item } from "./Item";

export const Projects = () => {
  const { control } = useFormContext<Document.Resume>();
  const fieldMethod = useFieldArray({ control, name: "project_list" });
  const { fields, append } = fieldMethod;

  return (
    <Layout title="프로젝트" subTitle="지금까지 진행한 프로젝트를 소개해 보세요." add={() => append({ ...Placeholder.ProjectPlace, element_id: crypto.randomUUID() })}>
      {fields.map((i, j) => (
        <Item fieldMethod={fieldMethod} key={i.element_id} index={j} />
      ))}
    </Layout>
  );
};
