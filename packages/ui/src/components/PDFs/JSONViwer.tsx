import { Document } from "@configs/type";
import { useEventListeners } from "@configs/util";
import { useState } from "react";
import { Layout, Resume, buttonType, sidebarType } from "ui";

interface IProp {
  data: Document.Resume;
  buttons?: buttonType[];
  sidebars?: sidebarType[];
}
export const JSONViewer = ({ data, buttons = [], sidebars = [] }: IProp) => {
  const [scale, setScale] = useState(0);
  const [page, setPage] = useState(0);
  const [max, setMax] = useState({
    projects: 0,
    inform: 0
  });

  const handleMovePage = (to: number) => {
    if (to < 0 || to > Math.ceil((max.inform + max.projects) / 2 - 1)) return;
    setPage(to);
  };

  useEventListeners([
    {
      eventType: "resize",
      callback: () => {
        const windowHeight = window.innerHeight;
        const newScale = windowHeight / 1400; // 예시로 A4 크기(842px)에 맞추는 방법
        setScale(newScale);
      },
      useCallbackOnLoad: true
    }
  ]);

  return (
    <Layout
      buttons={[
        {
          icon: "Arrow",
          title: "이전으로",
          rotate: "left",
          action: () => handleMovePage(page - 1)
        },
        {
          icon: "Arrow",
          title: "다음으로",
          rotate: "right",
          action: () => handleMovePage(page + 1)
        },
        ...buttons
      ]}
      sidebars={sidebars}
    >
      <div className="w-full h-full flex items-center justify-center gap-3 overflow-hidden">
        <div
          style={{
            transform: `scale(${scale})`
          }}
        >
          <div className="w-[1696px] overflow-hidden">
            <div
              style={{ transform: `translateX(-${1708 * page}px)` }}
              className="flex gap-3 items-center"
            >
              <Resume data={data} setMax={setMax} showPadding />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
