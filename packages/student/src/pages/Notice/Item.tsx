import { Api } from "@configs/type";
import { useRef } from "react";
import { Box, Icon } from "ui";

interface IProp {
  data: Api.Notice.noticeData;
  opened: string | null;
  actions: {
    set: () => void;
    check: () => void;
  };
}

export const Item = ({ data, opened, actions }: IProp) => {
  const height = useRef(0);

  return (
    <Box
      height={opened === data.id ? height.current + "px" : "60px"}
      round="12px"
      padding="16px"
      className="overflow-hidden gap-4 cursor-pointer transition-all duration-300"
      onClick={() => {
        actions.set();
        if (data.checked === false) {
          actions.check();
        }
      }}
      ref={(item: HTMLElement) => {
        if (item && !!!height.current) {
          height.current =
            (item.childNodes[1] as HTMLElement).clientHeight + 76;
        }
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-body1">{data.title}</span>
          <span className="text-body4 text-gray-200">
            {data.created_at.split("T")[0]} |{" "}
            {data.writer_name === "육기준" || data.writer_name === "이태윤"
              ? `${data.writer_name}`
              : `${data.writer_name} 선생님`}
          </span>
          {!data.checked && (
            <span className="text-body5 text-green-400">안 읽음</span>
          )}
        </div>
        <Icon
          name="Arrow"
          rotate={opened === data.id ? "up" : "down"}
          size={28}
        />
      </div>
      <span className="break-words whitespace-pre-wrap">{data.content}</span>
    </Box>
  );
};
