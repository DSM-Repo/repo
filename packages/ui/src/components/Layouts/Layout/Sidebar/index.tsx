import { useRef, useState } from "react";
import { useSideBarOpen } from "../../../../hooks";
export * from "./Items";
export * from "./Custom";

export interface itemType {
  name: string;
  content: React.ReactElement | React.ReactElement[];
  key?: string;
  keepOpen?: boolean;
}

export interface ISidebarProp {
  name: string;
  width?: string;
  items: itemType[];
}

export const SideBar = ({ name, width = "300px", items }: ISidebarProp) => {
  const [opened, setOpened] = useState("");
  const { sideOpened } = useSideBarOpen();
  const ref = useRef<HTMLDivElement[]>([]);

  return (
    <div
      style={{
        width,
        transform: `translateX(${sideOpened !== name ? "0" : `-${width}`})`
      }}
      className={`transition-all w-full duration-200 flex h-screen flex-col absolute bg-gray-800 border-l-[1px] border-gray-700 overflow-y-auto`}
    >
      <div className="px-4 h-14 border-b-[1px] border-gray-700 flex items-center flex-shrink-0">
        <span className="text-[16px] font-semibold leading-none">{name}</span>
      </div>
      {items.map((i, j) => {
        return (
          <div
            key={i.key || j + 1}
            style={{
              height:
                opened === i.name || i.keepOpen
                  ? ref.current[i.key || j + 1]?.offsetHeight + 56 + "px"
                  : "56px"
            }}
            className={`${opened === i.name && !i.keepOpen ? "bg-gray-700" : "bg-gray-800"} flex-shrink-0 transition-all duration-300 overflow-hidden col-flex border-b-[1px] border-gray-700`}
          >
            <div
              className={`px-4 h-14 flex-shrink-0 flex items-center ${!i.keepOpen && "cursor-pointer"}`}
              onClick={() => setOpened(opened === i.name ? "" : i.name)}
            >
              <span className="text-[20px] font-bold leading-none">
                {i.name}
              </span>
            </div>
            <div
              className="col-flex gap-4 px-4 h-fit pb-[18px]"
              ref={(item) => (ref.current[i.key || j + 1] = item)}
            >
              {i.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};
