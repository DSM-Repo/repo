import { Document } from "@configs/type";
import { Inform, Projects, setType } from "./Render";
import { useRef } from "react";

interface IProp {
  data: Document.Resume;
  setMax?: setType;
  showPadding?: boolean;
}

export const Resume = ({ data, setMax, showPadding }: IProp) => {
  const keep = useRef<Record<string, number>>({});

  return (
    <>
      <Inform data={data} setMax={setMax} showPadding={showPadding} />
      {data?.project_list.map((i) => (
        <Projects
          data={i}
          setMax={setMax}
          showPadding={showPadding}
          keep={keep}
        />
      ))}
    </>
  );
};
