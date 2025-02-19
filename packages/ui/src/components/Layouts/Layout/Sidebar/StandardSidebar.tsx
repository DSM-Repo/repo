import { useEffect, useRef, useState } from "react";
import { useSideBarOpen } from "../../../../hooks";
export * from "./Items";

export interface itemType {
  name: string;
  content?: React.ReactElement | React.ReactElement[];
  key?: string;
  keepOpen?: boolean;
}

export interface ISidebarProp {
  name: string;
  width?: string;
  items: itemType[];
}

export const StandardSidebar = ({ name, width = "300px", items }: ISidebarProp) => {
  const [opened, setOpened] = useState("");
  const ref = useRef<HTMLDivElement[]>([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    setState((prev) => !prev);
  }, [items]);

  return (
    <div style={{ width }} className={`transition-all duration-200 flex h-full flex-col bg-gray-800 border-l-[1px] border-gray-700 overflow-y-auto`}>
      <div className="px-4 h-14 border-b-[1px] border-gray-700 flex items-center flex-shrink-0">
        <span className="text-[16px] font-semibold leading-none">{name}</span>
      </div>
      {items.map((i, j) => {
        return (
          <div
            key={j}
            style={{ height: i.keepOpen ? "fit-content" : opened === i.name ? ref.current[i.key || j + 1]?.offsetHeight + 56 + "px" : "56px" }}
            className={`${opened === i.name && !i.keepOpen ? "bg-gray-700" : "bg-gray-800"} flex-shrink-0 transition-all duration-300 overflow-hidden col-flex border-b-[1px] border-gray-700`}
          >
            <div className={`px-4 h-14 flex-shrink-0 flex items-center ${!i.keepOpen && "cursor-pointer"}`} onClick={() => setOpened(opened === i.name ? "" : i.name)}>
              <span className="text-[20px] font-bold leading-none">{i.name}</span>
            </div>
            {i.content && (
              <div className="col-flex gap-4 px-4 h-fit pb-[18px]" ref={(item) => (ref.current[i.key || j + 1] = item)}>
                {i.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
