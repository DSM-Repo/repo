import { Inform, Projects, setType } from "./Render";
import { IResume } from "@configs/util";
import { useRef } from "react";

interface IProp {
  data: IResume;
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
