import { addMajor, delMajor, getMajor } from "@/apis";
import { Layout, List, Title } from "ui";

export const Major = () => {
  const { data, refetch } = getMajor();
  const { mutate: del } = delMajor();
  const { mutate: add } = addMajor();

  return (
    <Layout>
      <div className="col-flex w-full px-[60px] py-6 gap-5">
        <Title
          title="전공 관리"
          subTitle="레주메 작성에 사용되는 전공을 관리해 보세요"
        />
        <List
          values={data ? data.data.map((i) => ({ id: i.id, name: i.id })) : []}
          placeholder="전공을 입력하세요"
          onEnter={(item) => add({ majors: [item] }, { onSuccess: refetch })}
          onDelete={(itemId) => del(`/${itemId}`, { onSuccess: refetch })}
          size="large"
          listSize="full"
        />
      </div>
    </Layout>
  );
};
