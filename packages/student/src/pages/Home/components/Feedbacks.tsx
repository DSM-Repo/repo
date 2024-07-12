import { Box } from "ui";

type TFeedback = {
  section: string;
  teacher: string;
  content: string;
};

interface IProp {
  feedbacks: TFeedback[];
}

const boxSizes = {
  layout: {
    size: { width: "35%", height: "100%", padding: "12px" },
    round: { tr: 0, tl: 0, br: 0, bl: 0 },
  },
  innerLayout: { width: "100%", height: "100%", padding: "20px" },
  content: {
    size: { width: "100%", height: "fit-content", padding: "20px" },
    round: { tr: 5, tl: 5, br: 5, bl: 5 },
  },
};

export const Feedbacks = ({ feedbacks }: IProp) => {
  return (
    <Box
      size={boxSizes.layout.size}
      round={boxSizes.layout.round}
      className="gap-[12px] border-l-[1px] border-[#333333]"
    >
      <span className="text-white font-semibold">피드백 목록</span>
      <Box
        color="light"
        size={boxSizes.innerLayout}
        className="overflow-scroll gap-3"
      >
        {feedbacks.map((item: TFeedback, index: number) => (
          <Box
            size={boxSizes.content.size}
            round={boxSizes.content.round}
            className="gap-2"
            key={index}
          >
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-[15px] line-fit">
                {item.section}
              </span>
              <span className="text-white font-semibold text-[13px] line-fit">
                {item.teacher} 선생님
              </span>
            </div>
            <span className="text-white font-light text-[13px]">
              {item.content}
            </span>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
