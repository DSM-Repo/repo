import { forwardRef, useState } from "react";
import { useResumeData } from "@/hooks";
import { Header } from "./Header";
import { Box, Resume } from "ui";

export type setType = React.Dispatch<
  React.SetStateAction<{
    projects: number;
    inform: number;
  }>
>;

export const Preview = forwardRef(({ width }: { width: number }, ref: any) => {
  const [max, setMax] = useState({
    projects: 0,
    inform: 1
  });
  const [cur, setCur] = useState(1);

  const length = Object.values(max).reduce((acc, prev) => acc + prev);
  const { data } = useResumeData();

  const handleCur = (loc: "left" | "right") => {
    if (loc === "left" && cur > 1) {
      setCur((prev) => --prev);
    } else if (loc === "right" && cur < length) {
      setCur((prev) => ++prev);
    }
  };

  return (
    <Box
      width={`${width}px`}
      height="100%"
      round="0"
      padding="10px"
      className="shrink-0 gap-[10px] border-0 overflow-hidden border-l-gray-700 relative"
      ref={ref}
    >
      <Header current={cur} length={length} onPageMove={handleCur} />
      <div className="w-full h-full overflow-hidden flex rounded-[8px] bg-white">
        <div
          className="flex w-full"
          style={{
            transform: `translateX(${100 * (cur - 1) * -1}%)`
          }}
        >
          <Resume data={data} setMax={setMax} />
        </div>
      </div>
    </Box>
  );
});
