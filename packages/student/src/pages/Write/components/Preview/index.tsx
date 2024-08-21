import { useResumeData } from "@/hooks";
import { useEffect, useRef, useState } from "react";
import { Box, Inform, Projects } from "ui";
import { Header } from "./Header";

export type setType = React.Dispatch<
  React.SetStateAction<{
    projects: number;
    inform: number;
  }>
>;

export const Preview = () => {
  const [max, setMax] = useState({
    projects: 0,
    inform: 1
  });
  const [cur, setCur] = useState(1);

  const keep = useRef<{ [key: string]: number }>({});

  const length = Object.values(max).reduce((acc, prev) => acc + prev);
  const { data } = useResumeData();

  useEffect(() => {
    if (cur > length) {
      setCur(length);
    }
  }, [max]);

  const handleCur = (loc: "left" | "right") => {
    if (loc === "left" && cur > 1) {
      setCur((prev) => --prev);
    } else if (loc === "right" && cur < length) {
      setCur((prev) => ++prev);
    }
  };

  return (
    <Box
      width="615px"
      height="100%"
      round={{ all: 0 }}
      className="shrink-0 gap-[4px] border-l-[1px] overflow-hidden border-l-[#333333]"
    >
      <Header current={cur} length={length} onPageMove={handleCur} />
      <div className="w-full h-full overflow-hidden flex rounded-[5px] bg-white">
        <div
          className="flex"
          style={{
            transform: `translateX(${599 * (cur - 1) * -1}px)`
          }}
        >
          <Inform data={data} setMax={setMax} />
          {data?.project_list?.map((i) => (
            <Projects data={i} setMax={setMax} keep={keep} key={i.element_id} />
          ))}
        </div>
      </div>
    </Box>
  );
};
