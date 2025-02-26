import { Document } from "@configs/type";
import { Inform, Projects } from "./Render";
import { createContext, useEffect, useState } from "react";

interface IProp {
  data?: Document.Resume;
  getCount?: (count: number) => void;
  showPadding?: boolean;
  scale?: number;
  noOverflow?: boolean;
}

export const Context = createContext({ noOverflow: false, scale: 1, showPadding: true });

export const Resume = ({ data, showPadding, getCount, scale, noOverflow }: IProp) => {
  const [count, setCount] = useState<{ projects: number[]; inform: number }>({
    projects: [],
    inform: 1
  });

  useEffect(() => getCount && getCount(count.projects.reduce((acc, prev) => acc + prev, 0) + count.inform), [count]);

  if (data) {
    return (
      <Context.Provider value={{ noOverflow, scale, showPadding }}>
        <Inform data={data} setter={setCount} />
        {data?.project_list.map((item, index) => <Projects key={item.element_id} index={index} data={item} setter={setCount} />)}
      </Context.Provider>
    );
  }
};
