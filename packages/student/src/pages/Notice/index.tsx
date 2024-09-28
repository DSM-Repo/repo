import { noticeCheck, noticeList } from "@/api";
import { Layout, Title } from "ui";
import { useState } from "react";
import { Item } from "./Item";

export const Notice = () => {
  const [opened, setOpened] = useState<string | null>(null);
  const { data, refetch } = noticeList();
  const { mutate: check } = noticeCheck();

  return (
    <Layout>
      <div className="col-flex w-full px-[60px] py-6 gap-5">
        <Title
          title="공지"
          subTitle="선생님이나 관리자가 작성한 공지를 확인해 보세요"
        />
        {data?.data
          .sort(
            (i, j) =>
              new Date(j.created_at).getTime() -
              new Date(i.created_at).getTime()
          )
          .map((i) => (
            <Item
              data={i}
              opened={opened}
              actions={{
                set: () => setOpened(i.id),
                check: () => check(`/${i.id}`, { onSuccess: () => refetch() })
              }}
            />
          ))}
      </div>
    </Layout>
  );
};
