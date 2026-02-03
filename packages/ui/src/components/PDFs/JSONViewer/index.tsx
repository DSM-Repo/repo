import { useWindowEventListeners, useShortcut } from "@configs/util";
import { useNavigate } from "react-router-dom";
import { elementsType, HeaderProvider, Resume, SidebarProvider, buttonType } from "ui";
import { useEffect, useState, useRef } from "react";
import { Document } from "@configs/type";
import { toast } from "react-toastify";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

interface IProp {
  buttons?: buttonType[];
  sidebars?: elementsType[];
  data?: Document.Resume;
  disableDownload?: boolean;
}

export const JSONViewer = ({ data, buttons = [], sidebars = [], disableDownload }: IProp) => {
  const [scale, setScale] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const [showType, setShowType] = useState(window.innerWidth > 1280);
  const windowXl = window.innerWidth > 1280;
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleMovePage = (to: number) => {
    if (to < 1 || to > count) return;
    setPage(to);
  };

  useEffect(() => {
    setPage(1);
  }, [window.location.href]);

  useWindowEventListeners([
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
    <SidebarProvider elements={sidebars}>
      <HeaderProvider
        buttons={[
          {
            icon: "Share",
            title: "돌아가기",
            rotate: "left",
            action: { type: "CALLBACK", callback: () => navigate(-1) }
          },
          {
            icon: "Arrow",
            title: "이전으로",
            rotate: "left",
            action: { type: "CALLBACK", callback: () => handleMovePage(page - (windowXl ? 2 : 1)) }
          },
          {
            icon: "Arrow",
            title: "다음으로",
            rotate: "right",
            action: { type: "CALLBACK", callback: () => handleMovePage(page + (windowXl ? 2 : 1)) }
          },
          {
            icon: "Download",
            title: "다운로드",
            disabled: {
              state: disableDownload,
              reason: "다운로드가 비활성화된 상태입니다."
            },
            action: {
              type: "CALLBACK",
              callback: () => {
                let id = toast.loading("변환하고 있습니다...");
                const data = resumeRef.current;
                const worker = new Worker(new URL("./worker.ts", import.meta.url), {
                  type: "module"
                });

                html2canvas(data as HTMLElement, {
                  useCORS: true,
                  scale: 2.0,
                  allowTaint: true
                }).then((canvas: HTMLCanvasElement) => {
                  const imgWidth = 210;
                  const pageHeight = 297.07;
                  const imgHeight = (canvas.height * imgWidth) / canvas.width;
                  const url = canvas.toDataURL();

                  worker.postMessage({
                    imgWidth,
                    pageHeight,
                    imgHeight,
                    blobs: url
                  });

                  worker.onmessage = ({ data }) => {
                    const file = new File([data], "Rendered_Resume.pdf");
                    toast.update(id, {
                      isLoading: false,
                      type: "success",
                      autoClose: 1000,
                      render: "성공적으로 변환되었습니다!"
                    });
                    saveAs(file);
                    worker.terminate();
                  };
                });
              }
            }
          },
          ...buttons
        ]}
      >
        <div className="w-full h-full col-flex items-center justify-center gap-3 overflow-hidden relative">
          <span className="absolute self-center -top-1">{showType ? `${page} - ${page + 1} / ${count}` : `${page} / ${count}`}</span>
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
                <Resume data={data} getCount={(count) => setCount(count)} showPadding />
              </div>
            </div>
          </div>
        </div>
        <div ref={resumeRef} className="resume w-fit absolute overflow-hidden top-[100vh]">
          <Resume data={data} showPadding />
        </div>
      </HeaderProvider>
    </SidebarProvider>
  );
};
