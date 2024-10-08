import { noticeCheck, noticeList } from "@/api";
import { Box, Icon, TitleLayout } from "ui";
import { useRef, useState } from "react";

export const Notice = () => {
  const [opened, setOpened] = useState<string | null>(null);
  const height = useRef<Record<string, number>>({});
  const { data, refetch } = noticeList();
  const { mutate: check } = noticeCheck();

  return (
    <TitleLayout title="공지" subTitle="선생님이 작성한 공지를 확인해 보세요">
      <div className="w-full h-fit col-flex gap-2">
        {data?.data
          .sort(
            (i, j) =>
              new Date(j.created_at).getTime() -
              new Date(i.created_at).getTime()
          )
          .map((i, j) => (
            <Box
              key={j}
              height={opened === i.id ? height.current[i.id] + "px" : "60px"}
              round="12px"
              padding="16px"
              className="overflow-hidden gap-4 cursor-pointer transition-all duration-300"
              onClick={() => {
                setOpened(opened === i.id ? null : i.id);
                console.log(i.id);
                if (i.checked === false) {
                  check(`/${i.id}`, { onSuccess: () => refetch() });
                }
              }}
              ref={(item: HTMLElement) => {
                if (item && !!!height.current[i.id]) {
                  height.current[i.id] =
                    (item.childNodes[1] as HTMLElement).clientHeight + 76;
                }
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-body1">{i.title}</span>
                  <span className="text-body4 text-gray-200">
                    {i.created_at.split("T")[0]} |{" "}
                    {i.writer_name === "육기준" || i.writer_name === "이태윤"
                      ? `${i.writer_name}`
                      : `${i.writer_name} 선생님`}
                  </span>
                  {!i.checked && (
                    <span className="text-body5 text-green-400">안 읽음</span>
                  )}
                </div>
                <Icon
                  name="Arrow"
                  rotate={opened === i.id ? "up" : "down"}
                  size={28}
                />
              </div>
              <span className="break-words whitespace-pre-wrap">
                {i.content}
              </span>
            </Box>
          ))}
      </div>
    </TitleLayout>
  );
};
