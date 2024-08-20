import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Prefix } from "ui";

interface IProp {
  current: number;
  length: number;
  onPageMove: (type: "left" | "right") => void;
}

export const Header = ({ current, onPageMove, length }: IProp) => {
  return (
    <Box
      width="100%"
      padding="5px"
      className="flex-row justify-between items-center overflow-hidden"
    >
      <div className="flex gap-3 items-center">
        <span className="text-body5">미리보기</span>
        <Prefix>Live</Prefix>
      </div>
      <div className="flex gap-3 items-center">
        <span className="text-body8 px-3 py-1 border-[1px] border-[#333333] rounded-[50px]">
          <span className="text-[#888888]">{length} / </span>
          {current}
        </span>
        <div className="flex items-center h-fit gap-1">
          <div
            className="border-[1px] border-[#333333] rounded-full p-[5px] cursor-pointer"
            onClick={() => onPageMove("left")}
          >
            <Icon
              icon="ep:arrow-left-bold"
              width={14}
              height={14}
              color={current > 1 ? "#ffffff" : "#777777"}
            />
          </div>
          <div
            className="border-[1px] border-[#333333] rounded-full p-[5px] cursor-pointer"
            onClick={() => onPageMove("right")}
          >
            <Icon
              icon="ep:arrow-right-bold"
              width={14}
              height={14}
              color={current < 1 + length ? "#ffffff" : "#777777"}
            />
          </div>
        </div>
      </div>
    </Box>
  );
};
