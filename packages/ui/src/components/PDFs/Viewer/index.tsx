import { useShortcut, useWindowEventListeners } from "@configs/util";
import { buttonType, elementsType, Tutorial } from "ui";
import { Page, pdfjs, Document } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import { saveAs } from "file-saver";
import * as _ from "../assets";
import { Api } from "@configs/type";
import { HeaderProvider, Items, SidebarProvider, StandardSidebar } from "../../Layouts";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;

const tutorialSteps = [
  {
    content: "REPO 뷰어를 사용하기에 앞서, 간단한 안내를 진행하겠습니다"
  },
  {
    img: _.one,
    content: "먼저, 뷰어의 대부분의 기능은 헤더에서 사용합니다.\n배치는 위 이미지와 같습니다."
  },
  {
    img: _.two,
    content: "또한 방향키를 통해서도 페이지를 이동할 수 있습니다.\nShift키와 동시에 사용하면 학생별 이동이 가능합니다."
  },
  {
    content: "이상 REPO 뷰어 사용법 안내였습니다.\n(해당 내용은 2024년 이후의 레주메북 내에서도 확인 가능합니다)"
  }
];

interface IProp {
  url?: string | File;
  indexList?: Api.Library.indexData[];
  buttons?: buttonType[];
  sidebars?: elementsType[];
  disableDownload?: boolean;
}

export const Viewer = React.memo(({ url, indexList, buttons = [], sidebars = [], disableDownload }: IProp) => {
  const [index, setIndex] = useState<Api.Library.indexData[][]>([]);
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const [page, setPage] = useState(1);
  const [max, setMax] = useState(1);
  const navigate = useNavigate();

  const finded = indexList?.filter((i) => i.page_number === page - 1 || i.page_number === page);

  const handleMovePage = (next: number) => {
    if (next < 0 || next > max + 1) return;
    setPage(next);
  };

  const _buttons: buttonType[] = [
    { icon: "Share", title: "돌아가기", rotate: "left", action: { type: "CALLBACK", callback: () => navigate(-1) } },
    { icon: "Arrow", title: "이전으로", rotate: "left", action: { type: "CALLBACK", callback: () => handleMovePage(page - 2) } },
    { icon: "Arrow", title: "다음으로", rotate: "right", action: { type: "CALLBACK", callback: () => handleMovePage(page + 2) } },
    {
      icon: "Download",
      title: "다운로드",
      action: { type: "CALLBACK", callback: () => url && saveAs(url, `Resume.pdf`) },
      disabled: { state: disableDownload, reason: "다운로드가 비활성화된 상태입니다." }
    },
    indexList
      ? {
          icon: "Users",
          title: "빠른 이동",
          action: { type: "OPEN_SIDEBAR", sideBarName: "빠른 이동" }
        }
      : undefined,
    ...buttons
  ];

  const ClassSection = (type: 1 | 2 | 3 | 4) => {
    return (
      <Items
        selections={index[type - 1]?.map((i) => `${i.student_number} ${i.name}`)}
        selected={finded.map(({ student_number, name }) => `${student_number} ${name}`)}
        onClick={(value) => {
          const findClicked = indexList.find((i) => i.student_number === Number(value.slice(0, 4)));
          if (findClicked) {
            setPage(findClicked.page_number % 2 ? findClicked.page_number : findClicked.page_number + 1);
          }
        }}
      />
    );
  };

  const _sidebars: elementsType[] = indexList
    ? [
        {
          name: "빠른 이동",
          element: (
            <StandardSidebar
              name="빠른 이동"
              items={[
                { name: "1반", content: ClassSection(1) },
                { name: "2반", content: ClassSection(2) },
                { name: "3반", content: ClassSection(3) },
                { name: "4반", content: ClassSection(4) }
              ]}
            />
          )
        },
        ...sidebars
      ]
    : sidebars;

  useEffect(() => {
    if (indexList) {
      const grouped = indexList.reduce<Api.Library.indexData[][]>(
        (acc, i) => {
          const cls = Math.floor((i.student_number % 1000) / 100);
          const idx = cls - 1;
          if (idx >= 0 && idx < 4) {
            return acc.map((group, j) => j === idx ? [...group, i] : group);
          }
          return acc;
        },
        [[], [], [], []]
      );
      setIndex(grouped);
    }
  }, [indexList]);

  const handleMoveStudent = (direction: "Left" | "Right") => {
    const persons = indexList.filter((i) => (direction === "Left" ? i.page_number < page - 1 : i.page_number >= page + 1));
    const item = persons[direction === "Left" ? persons.length - 1 : 0].page_number;
    if (persons.length !== 0 && item) {
      handleMovePage(item % 2 ? item : item + 1);
    }
  };

  useWindowEventListeners([{ eventType: "resize", callback: () => setScale(window.innerHeight / 1050), useCallbackOnLoad: true }]);

  useShortcut([
    { key: "ArrowRight", action: () => handleMovePage(page + 2) },
    { key: "ArrowLeft", action: () => handleMovePage(page - 2) },
    { key: "ArrowRight", shift: true, action: () => handleMoveStudent("Right") },
    { key: "ArrowLeft", shift: true, action: () => handleMoveStudent("Left") },
    { key: "d", ctrl: true, action: () => url && saveAs(url, `Resume.pdf`) }
  ]);

  const CHUNK_SIZE = 50;

  const chunks = useMemo(
    () => Array.from({ length: Math.ceil(max / CHUNK_SIZE) }, (_, _index) => Array.from({ length: CHUNK_SIZE + 1 }, (_, index) => index + CHUNK_SIZE * _index).filter((i) => i <= max)),
    [max]
  );

  const selected_chunks = useMemo(() => chunks[Math.floor((page - 1) / CHUNK_SIZE)], [Math.floor((page - 1) / CHUNK_SIZE), loading]);

  return (
    <SidebarProvider elements={_sidebars}>
      <HeaderProvider buttons={_buttons}>
        <Tutorial name="Viewer" steps={tutorialSteps} />
        {(!url || loading) && (
          <div className="z-30 left-0 top-0 w-full h-full bg-[#000000DD] flex flex-center absolute text-white">{!url ? "PDF를 다운로드하고 있습니다.." : "PDF를 렌더링하고 있습니다..."}</div>
        )}
        <div className="w-full h-full flex flex-center relative">
          <span className="absolute top-0">
            {page - 1} - {page} / {max}
          </span>
          <div style={{ transform: `scale(${scale / 2.9})` }}>
            <Document
              onLoadSuccess={({ numPages }) => {
                setMax(numPages - 1);
                setLoading(false);
              }}
              file={url}
              className="w-full col-flex items-center h-fit gap-2 shrink-0"
              onLoadStart={({ page }) => (page.style.background = "white")}
              renderMode="canvas"
            >
              <div className="w-[3600px] h-full overflow-hidden relative">
                <div style={{ transform: `translateX(calc(-${((page - 1) % CHUNK_SIZE) / 2} * (100% + ${48}px)))` }} className="flex gap-10 items-center viewer">
                  {!loading && (
                    <>
                      {selected_chunks.map((i) => (
                        <div key={i} className="flex flex-col relative">
                          <span className="scale-[3] absolute z-20 bottom-6 text-black text-[12px] self-center">{`- ${i} -`}</span>
                          <Page scale={3} width={594.8} renderTextLayer={false} key={i} pageIndex={i} renderMode="canvas" className={`${i === 0 ? "invisible" : ""} `} />
                        </div>
                      ))}
                      {page >= max && <Page pageIndex={0} scale={3} className="invisible" />}
                    </>
                  )}
                </div>
              </div>
            </Document>
          </div>
        </div>
      </HeaderProvider>
    </SidebarProvider>
  );
});
