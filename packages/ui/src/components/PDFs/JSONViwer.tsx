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
  const [page, setPage] = useState(1);
  const [max, setMax] = useState({
    projects: 0,
    inform: 0
  });
  const maxFull = max.projects + max.inform;

  const handleMovePage = (to: number) => {
    if (to < 1 || to > maxFull) return;
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
          action: () => handleMovePage(page - 2)
        },
        {
          icon: "Arrow",
          title: "다음으로",
          rotate: "right",
          action: () => handleMovePage(page + 2)
        },
        ...buttons
      ]}
      sidebars={sidebars}
    >
      <div className="w-full h-full col-flex items-center justify-center gap-3 overflow-hidden relative">
        <span className="absolute self-center -top-1">
          {page} - {page + 1} / {maxFull}
        </span>
        <div
          style={{
            transform: `scale(${scale})`
          }}
        >
          <div className="w-[1696px] overflow-hidden">
            <div
              style={{ transform: `translateX(-${1708 * ((page - 1) / 2)}px)` }}
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
