import { Document } from "@configs/type";
import { useEventListeners, useShortcut } from "@configs/util";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Resume, buttonType, sidebarType } from "ui";

interface IProp {
  data?: Document.Resume;
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
  const navigate = useNavigate();
  const [showType, setShowType] = useState(window.innerWidth > 1280);
  const maxFull = max.projects + max.inform;
  const windowXl = window.innerWidth > 1280;

  const handleMovePage = (to: number) => {
    if (to < 1 || to > maxFull) return;
    setPage(to);
  };

  useEventListeners([
    {
      eventType: "resize",
      callback: () => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        if (windowWidth > 1280 && !showType) {
          setShowType(true);
          if (!!!(page % 2)) setPage(page - 1);
        } else if (windowWidth < 1280 && showType) {
          setShowType(false);
        }
        const newScale = windowHeight / 1450; // 예시로 A4 크기(842px)에 맞추는 방법
        setScale(newScale);
      },
      useCallbackOnLoad: true
    }
  ]);

  useShortcut([
    {
      key: "ArrowLeft",
      action: () => handleMovePage(page - (windowXl ? 2 : 1))
    },
    {
      key: "ArrowRight",
      action: () => handleMovePage(page + (windowXl ? 2 : 1))
    }
  ]);

  return (
    <Layout
      buttons={[
        {
          icon: "Share",
          title: "돌아가기",
          rotate: "left",
          action: () => navigate(-1)
        },
        {
          icon: "Arrow",
          title: "이전으로",
          rotate: "left",
          action: () => handleMovePage(page - (windowXl ? 2 : 1))
        },
        {
          icon: "Arrow",
          title: "다음으로",
          rotate: "right",
          action: () => handleMovePage(page + (windowXl ? 2 : 1))
        },
        ...buttons
      ]}
      sidebars={sidebars}
    >
      <div className="w-full h-full col-flex items-center justify-center gap-3 overflow-hidden relative">
        <span className="absolute self-center -top-1">
          {showType
            ? `${page} - ${page + 1} / ${maxFull}`
            : `${page} / ${maxFull}`}
        </span>
        <div
          style={{
            transform: `scale(${scale})`
          }}
        >
          <div className="w-[1696px] max-xl:w-[842px] overflow-hidden">
            <div
              style={{
                transform: `translateX(-${windowXl ? 1708 * ((page - 1) / 2) : 854 * (page - 1)}px)`
              }}
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
