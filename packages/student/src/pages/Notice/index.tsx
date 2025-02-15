import { HeaderProvider, Title } from "ui";
import { noticeList } from "@/api";
import { Item } from "./Item";

export const Notice = () => {
  const { data: noticeData } = noticeList();

  const sortedData = noticeData?.data.sort((prev, next) => new Date(next.created_at).getTime() - new Date(prev.created_at).getTime());

  return (
    <HeaderProvider>
      <div className="col-flex gap-4 px-[60px] py-6">
        <Title title="공지" subTitle="선생님이 작성한 공지를 확인해 보세요" />
        <div className="w-full h-fit col-flex gap-2">{sortedData?.map((item) => <Item {...item} key={item.id} />)}</div>
      </div>
    </HeaderProvider>
  );
};
