import { useRef, useState } from "react";
import { useResumeData } from "@/hooks";
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

  const handleCur = (loc: "left" | "right") => {
    if (loc === "left" && cur > 1) {
      setCur((prev) => --prev);
    } else if (loc === "right" && cur < length) {
      setCur((prev) => ++prev);
    }
  };

  return (
    <Box
      width="600px"
      height="100%"
      round="0"
      padding="10px"
      className="shrink-0 gap-[10px] border-0 overflow-hidden border-l-gray-700 relative"
    >
      <Header current={cur} length={length} onPageMove={handleCur} />
      <div className="w-full h-full overflow-hidden flex rounded-[8px] bg-white">
        <div
          className="flex w-full"
          style={{
            transform: `translateX(${100 * (cur - 1) * -1}%)`
          }}
        >
          <Inform data={data} setMax={setMax} />
          {data?.project_list?.map((i) => (
            <Projects
              data={i}
              setMax={setMax}
              keep={keep}
              key={i.element_id}
              setCur={setCur}
            />
          ))}
        </div>
      </div>
    </Box>
  );
};
