import { addMajor, delMajor, major as getMajor } from "@/apis/major";
import { KeyboardEvent, useState } from "react";
import { toast } from "react-toastify";
import { Input, Layout } from "ui";
import { Tag } from "./Tag";

export const Major = () => {
  const [major, setMajor] = useState("");

  const { data: majors, refetch: refetchMajor } = getMajor();
  const { mutate: add } = addMajor();
  const { mutate: del } = delMajor();

  const handleAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const item = { majors: [major] };
      add(item, {
        onSuccess: () => {
          setMajor("");
          toast.success("성공적으로 추가되었습니다");
          refetchMajor();
        }
      });
    }
  };

  return (
    <Layout
      title="전공 관리"
      subTitle="여러 곳에 사용되는 전공 목록을 관리해보세요"
    >
      <Input
        placeholder="추가할 전공을 입력하세요"
        value={major}
        onChange={(e) => setMajor(e.target.value)}
        onKeyDown={handleAdd}
        size="full"
      />
      <div className="w-full h-fit flex gap-2 flex-wrap">
        {majors?.data.map((i) => (
          <Tag
            key={i.id}
            onRemove={() => del({ id: i.id }, { onSuccess: refetchMajor })}
          >
            {i.name}
          </Tag>
        ))}
      </div>
    </Layout>
  );
};
