import { Document } from "@configs/type";
import { Inform, Projects, setType } from "./Render";
import { useRef } from "react";

interface IProp {
  data?: Document.Resume;
  setMax?: setType;
  showPadding?: boolean;
  scale?: number;
  noOverflow?: boolean;
}

export const Resume = ({
  data,
  setMax = () => {},
  showPadding,
  scale,
  noOverflow
}: IProp) => {
  const keep = useRef<Record<string, number>>({});

  if (data) {
    return (
      <>
        <Inform
          data={data}
          setMax={setMax}
          showPadding={showPadding}
          scale={scale}
          noOverflow={noOverflow}
        />
        {data?.project_list.map((i) => (
          <Projects
            data={i}
            setMax={setMax}
            showPadding={showPadding}
            scale={scale}
            keep={keep}
            noOverflow={noOverflow}
          />
        ))}
      </>
    );
  }
};
