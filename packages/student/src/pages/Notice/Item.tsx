import { useOutsideClickRef } from "@configs/util";
import { useRef, useState } from "react";
import { Box, Icon } from "ui";
import { noticeCheck, noticeList } from "@/api";

interface IProp {
  checked: boolean;
  title: string;
  writer_name: string;
  created_at: string;
  id: string;
  content: string;
}

export const Item = ({ checked, title, writer_name, created_at, content, id }: IProp) => {
  const height = useRef<number>(0);
  const { mutate: check } = noticeCheck();
  const { refetch } = noticeList();
  const [open, setOpen] = useState(false);
  const outSideRef = useOutsideClickRef(() => setOpen(false));

  return (
    <Box
      height={open ? height.current + "px" : "60px"}
      round="12px"
      padding="16px"
      className="overflow-hidden gap-4 cursor-pointer transition-all duration-300"
      onClick={() => {
        setOpen((prev) => !prev);
        if (checked === false) check(`/${id}`, { onSuccess: () => refetch() });
      }}
      ref={outSideRef}
    >
      <div
        className="flex justify-between items-center"
        ref={(item: HTMLDivElement) => {
          if (item) height.current = (item.childNodes[1] as HTMLElement).clientHeight + 76;
        }}
      >
        <div className="flex items-center gap-3">
          <span className="text-body1">{title}</span>
          <span className="text-body4 text-gray-200">
            {created_at.split("T")[0]} | {`${writer_name} 선생님`}
          </span>
          <span className={`${checked && "hidden"} text-body5 text-green-400`}>안 읽음</span>
        </div>
        <Icon name="Arrow" rotate={open ? "up" : "down"} size={28} />
      </div>
      <span className="break-words whitespace-pre-wrap">{content}</span>
    </Box>
  );
};
