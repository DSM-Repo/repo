import { useFieldArray, useFormContext } from "react-hook-form";
import { Document, Placeholder } from "@configs/type";
import { Layout } from "../Layout";
import { Item } from "./Item";

export const Activity = () => {
  const { control } = useFormContext<Document.Resume>();
  const { fields, append } = useFieldArray({ control, name: "activity_list" });

  return (
    <Layout title="활동" subTitle="진행한 활동을 소개해 보세요." add={() => append({ ...Placeholder.ResumeDetailPlace.activity_list[0], element_id: crypto.randomUUID() })}>
      {fields.map((i, j) => (
        <Item key={i.element_id} index={j} />
      ))}
    </Layout>
  );
};
