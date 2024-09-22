import { Ternary, useShortcut, useEventListeners } from "@configs/util";
import { Layout, sidebarType, buttonType, Items, Tutorial } from "ui";
import { Page, pdfjs, Document } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { Api } from "@configs/type";
import tuto1 from "./assets/tuto1.png";
import tuto2 from "./assets/tuto2.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;

interface IProp {
  url?: string | File;
  indexList?: Api.Library.indexData[];
  buttons?: buttonType[];
  sidebars?: sidebarType[];
}

export const Viewer = ({
  url,
  indexList,
  buttons = [],
  sidebars = []
}: IProp) => {
  const [index, setIndex] = useState<Api.Library.indexData[][]>([]);
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const [page, setPage] = useState(1);
  const [max, setMax] = useState(1);
  const navigate = useNavigate();

  const finded = indexList?.find(
    (i) => i.page_number === page + 1 || i.page_number === page
  );

  const handleMovePage = (next: number) => {
    if (next < 0 || next > max + 1) {
      return;
    }
    setPage(next);
  };

  const _buttons: buttonType[] = [
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
      action: () => handleMovePage(page - 2)
    },
    {
      icon: "Arrow",
      title: "다음으로",
      rotate: "right",
      action: () => handleMovePage(page + 2)
    },
    {
      icon: "Download",
      title: "다운로드",
      action: () => url && saveAs(url, `Resume.pdf`)
    },
    indexList
      ? {
          icon: "Users",
          title: "빠른 이동",
          action: "빠른 이동"
        }
      : undefined,
    ...buttons
  ];

  const ClassSection = (type: 1 | 2 | 3 | 4) => {
    return (
      <Items
        selections={index[type - 1]?.map(
          (i) => `${i.student_number} ${i.name}`
        )}
        selected={`${finded?.student_number} ${finded?.name}`}
        onClick={(value) => {
          const findClicked = indexList.find(
            (i) => i.student_number === Number(value.slice(0, 4))
          );
          if (findClicked) {
            setPage(
              !!!(findClicked.page_number % 2)
                ? findClicked.page_number - 1
                : findClicked.page_number
            );
          }
        }}
      />
    );
  };

  const _sidebars: sidebarType[] = [
    indexList
      ? {
          name: "빠른 이동",
          width: "200px",
          type: "standard",
          items: [
            {
              name: "1반",
              content: ClassSection(1)
            },
            {
              name: "2반",
              content: ClassSection(2)
            },
            {
              name: "3반",
              content: ClassSection(3)
            },
            {
              name: "4반",
              content: ClassSection(4)
            }
          ]
        }
      : undefined,
    ...sidebars
  ];

  useEffect(() => {
    if (indexList) {
      let item: Api.Library.indexData[][] = [[], [], [], []];
      indexList.forEach((i) => {
        const cls = Math.floor((i.student_number % 1000) / 100);
        item[cls - 1]?.push(i);
      });
      setIndex(item);
    }
  }, [indexList]);

  const handleMoveStudent = (direction: "Left" | "Right") => {
    const persons = indexList.filter((i) =>
      direction === "Left" ? i.page_number < page - 1 : i.page_number > page + 1
    );
    const item =
      persons[direction === "Left" ? persons.length - 1 : 0].page_number;
    if (persons.length !== 0 && item) {
      handleMovePage(!!!(item % 2) ? item - 1 : item);
    }
  };

  useEventListeners([
    {
      eventType: "resize",
      callback: () => {
        const windowHeight = window.innerHeight;
        const newScale = windowHeight / 1050; // 예시로 A4 크기(842px)에 맞추는 방법
        setScale(newScale);
      },
      useCallbackOnLoad: true
    }
  ]);

  useShortcut([
    { key: "ArrowRight", action: () => handleMovePage(page + 2) },
    { key: "ArrowLeft", action: () => handleMovePage(page - 2) },
    {
      key: "ArrowRight",
      shift: true,
      action: () => handleMoveStudent("Right")
    },
    { key: "ArrowLeft", shift: true, action: () => handleMoveStudent("Left") },
    { key: "d", ctrl: true, action: () => url && saveAs(url, `Resume.pdf`) }
  ]);

  return (
    <Layout buttons={_buttons} sidebars={_sidebars}>
      <div className="w-full h-full flex flex-center">
        <Tutorial
          name="Viewer"
          steps={[
            {
              content:
                "REPO 뷰어를 사용하기에 앞서, 간단한 안내를 진행하겠습니다"
            },
            {
              img: tuto1,
              content:
                "먼저, 뷰어의 대부분의 기능은 헤더에서 사용합니다.\n배치는 위 이미지와 같습니다."
            },
            {
              img: tuto2,
              content:
                "또한 방향키를 통해서도 페이지를 이동할 수 있습니다.\nShift키와 동시에 사용하면 학생별 이동이 가능합니다."
            },
            {
              content:
                "이상 REPO 뷰어 사용법 안내였습니다.\n(해당 내용은 2024년 이후의 레주메북 내에서도 확인 가능합니다)"
            }
          ]}
        />
        <Ternary data={!!!url || loading}>
          <div className="z-30 left-0 top-0 w-full h-full bg-[#000000DD] flex flex-center absolute text-white">
            {!!!url
              ? "PDF를 다운로드하고 있습니다.."
              : "PDF를 렌더링하고 있습니다..."}
          </div>
        </Ternary>
        <Document
          onLoadSuccess={({ numPages }) => {
            setMax(numPages - 1);
            setLoading(false);
          }}
          file={url}
          className="col-flex items-center h-fit gap-2"
          onLoadStart={({ page }) => (page.style.background = "white")}
        >
          <span>
            {page - 1} - {page} / {max}
          </span>
          <div className="flex gap-2 viewer">
            <Page pageIndex={page + 1} className="hidden absolute" />
            <Page
              pageIndex={page - 1}
              scale={scale}
              className={`${page - 1 === 0 ? "invisible" : ""} h-fit`}
            />

            <Page
              pageIndex={page > max ? page - 1 : page}
              scale={scale}
              className={`${page > max ? "invisible" : ""} h-fit`}
            />
            <Page
              pageIndex={page > max ? page : page + 2}
              className="hidden absolute"
            />
          </div>
        </Document>
      </div>
    </Layout>
  );
};
