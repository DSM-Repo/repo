import { useEventListeners, useShortcut } from "@configs/util";
import { useNavigate } from "react-router-dom";
import { IHeader, Layout, Resume } from "ui";
import { useEffect, useState } from "react";
import { Document } from "@configs/type";
import { toast } from "react-toastify";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

interface IProp extends IHeader {
  data?: Document.Resume;
  disableDownload?: boolean;
}

export const JSONViewer = ({
  data,
  buttons = [],
  sidebars = [],
  disableDownload
}: IProp) => {
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

  useEffect(() => {
    setPage(1);
  }, [window.location.href]);

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
        {
          icon: "Download",
          title: "다운로드",
          disabled: disableDownload,
          disabledReason: "다운로드가 비활성화된 상태입니다.",
          action: () => {
            let id = toast.loading("변환하고 있습니다...");
            const data = document.querySelector(".resume");
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
              };
            });
          }
        },
        {
          icon: "Share",
          title: "URL 복사",
          action: () => {
            navigator.clipboard
              .writeText(
                `${process.env.VITE_APP_URL_MAIN}/resume_viewer/${data?.id}`
              )
              .then(() => toast.success("성공적으로 복사되었습니다"))
              .catch(() => toast.error("복사중 오류가 발생했습니다"));
          }
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
      <div className="resume w-fit absolute overflow-hidden top-[100vh]">
        <Resume data={data} setMax={() => {}} showPadding />
      </div>
    </Layout>
  );
};
