import { path, useOptimistic } from "@configs/util";
import { HeaderProvider, List, Title } from "ui";
import { addMajor, delMajor, getMajor } from "@/apis";

export const Major = () => {
  const { data, refetch } = getMajor();
  const [optMajor, errMajor, settleMajor] = useOptimistic([path.major, ""], "major");
  const { mutate: del } = delMajor({
    onMutate: async (variant) => {
      return await optMajor({ data: data?.data.filter((i) => i.id !== variant.split("/")[0]) });
    },
    onError: (_, __, context) => errMajor((context as any).major),
    onSettled: settleMajor
  });
  const { mutate: add } = addMajor({
    onMutate: async (variant) => {
      return await optMajor({ data: variant.majors });
    },
    onError: (_, __, context) => errMajor((context as any).major),
    onSettled: settleMajor
  });

  return (
    <HeaderProvider>
      <div className="col-flex w-full px-[60px] py-6 gap-5">
        <Title title="전공 관리" subTitle="레주메 작성에 사용되는 전공을 관리해 보세요" />
        <List
          values={data?.data.map((i) => ({ id: i.id, name: i.id })) || []}
          placeholder="전공을 입력하세요"
          onEnter={(item) => add({ majors: [item] }, { onSuccess: refetch })}
          onDelete={(itemId) => del(`/${itemId}`, { onSuccess: refetch })}
          size="large"
          listSize="full"
        />
      </div>
    </HeaderProvider>
  );
};
