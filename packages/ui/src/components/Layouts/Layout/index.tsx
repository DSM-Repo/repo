import { SideBar, itemType } from "./Sidebar";
import { Header, buttonType } from "./Header";
import { useSideBarOpen } from "../../../hooks";
import { useEffect } from "react";
export * from "./Header";
export * from "./Sidebar";

export type sidebarType = {
  type: "standard" | "custom";
  component?: React.ReactElement;
  name: string;
  width?: string;
  items?: itemType[];
  default?: boolean;
};

export interface IHeader {
  buttons?: buttonType[];
  sidebars?: sidebarType[];
}

interface IProp extends IHeader {
  children: React.ReactElement | React.ReactElement[];
}

export const Layout = ({ buttons, sidebars, children }: IProp) => {
  const { sideOpened, setSideOpened } = useSideBarOpen();
  const openedDetail = sidebars?.find((i) =>
    i ? i.name === sideOpened : false
  );

  useEffect(() => {
    const defaultData = sidebars?.find((i) => i?.default);
    if (!!defaultData) {
      setSideOpened(defaultData.name);
    }
  }, []);
  const standardWidth = openedDetail?.width ? openedDetail.width : "300px";

  return (
    <div className="flex w-full overflow-hidden h-screen relative">
      <div className="absolute w-full h-[200px] bg-gradient-to-b from-[#222222FF] to-[#22222200]" />
      <div className="flex w-full h-full flex-shrink-0 relative">
        <div
          style={{
            width: !!sideOpened ? `calc(100% - ${standardWidth})` : "100%"
          }}
          className="col-flex items-center h-full transition-all duration-150"
        >
          <Header buttons={!!buttons ? buttons : []} />
          <div className="w-full h-full overflow-auto">{children}</div>
        </div>
      </div>
      <div className="w-fit h-full relative">
        {sidebars?.map((i) =>
          i ? (
            i.type === "standard" ? (
              <SideBar name={i.name} width={i.width} items={i.items} />
            ) : (
              i.component
            )
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};
