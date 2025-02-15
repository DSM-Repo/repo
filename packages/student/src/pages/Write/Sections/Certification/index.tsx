import { useFieldArray, useFormContext } from "react-hook-form";
import { Placeholder, Document } from "@configs/type";
import { Layout } from "../Layout";
import { Item } from "./Item";

export const Certification = () => {
  const { control, ...formRest } = useFormContext<Document.Resume>();
  const fieldArray = useFieldArray({ control, name: "achievement_list" });
  const { fields, append } = fieldArray;

  return (
    <Layout title="자격증 & 수상" subTitle="자신의 자격증과 수상 내역을 소개해 보세요" add={() => append({ ...Placeholder.AchievePlace, element_id: crypto.randomUUID() })}>
      {fields.map((i, j) => (
        <Item key={i.element_id} index={j} fieldArray={fieldArray} />
      ))}
    </Layout>
  );
};
