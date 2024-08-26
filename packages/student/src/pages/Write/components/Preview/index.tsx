import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { useResumeData } from "@/hooks";
import { Box, Inform, Projects } from "ui";
import { Header } from "./Header";

export type setType = React.Dispatch<
  React.SetStateAction<{
    projects: number;
    inform: number;
  }>
>;

const dragHandler: MouseEventHandler<HTMLDivElement> = (e) => {
  const target = e.currentTarget.parentElement;
  if (!target) return;

  const resize: EventListener = (e) => {
    const right =
      target.getBoundingClientRect().left +
      target.getBoundingClientRect().width;
    const left = (e as MouseEvent).clientX;
    const width = Math.min(680, Math.max(350, right - left));
    target.style.width = `${width + 5}px`;
  };

  document.addEventListener("mousemove", resize);
  document.addEventListener(
    "mouseup",
    () => document.removeEventListener("mousemove", resize),
    { once: true }
  );
};

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
      width="615px"
      height="100%"
      round={{ all: 0 }}
      className="shrink-0 gap-[4px] border-l-[1px] overflow-hidden border-l-[#333333] relative"
    >
      <Header current={cur} length={length} onPageMove={handleCur} />
      <div
        className="absolute left-0 w-[10px] h-full bg-transparent cursor-col-resize"
        onMouseDown={dragHandler}
      />
      <div className="w-full h-full overflow-hidden flex rounded-[5px] bg-white">
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
