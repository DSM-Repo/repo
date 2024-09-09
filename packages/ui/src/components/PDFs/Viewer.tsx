import { Layout, sidebarType, buttonType, Items } from "ui";
import { Page, pdfjs, Document } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Ternary } from "@configs/util";
import { saveAs } from "file-saver";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;

type indexType = {
  name: string;
  major: string;
  student_number: number;
  page_number: number;
};

interface IProp {
  url?: string | File;
  indexList?: indexType[];
  buttons?: buttonType[];
  sidebars?: sidebarType[];
}

export const Viewer = ({ url, indexList, buttons, sidebars }: IProp) => {
  const [scale, setScale] = useState(1);
  const [index, setIndex] = useState<indexType[][]>([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const finded = indexList?.find(
    (i) => i.page_number === page + 1 || i.page_number === page
  );
  const [max, setMax] = useState(1);

  const handleMovePage = (next: number) => {
    if (next < 0 || next > max) {
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
    index && {
      icon: "Users",
      title: "빠른 이동",
      action: "빠른 이동"
    },
    ...(buttons || [])
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
    index && {
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
    },
    ...(sidebars || [])
  ];

  useEffect(() => {
    if (indexList) {
      let item: indexType[][] = [[], [], [], []];
      indexList.forEach((i) => {
        const cls = Math.floor((i.student_number % 1000) / 100);
        item[cls - 1]?.push(i);
      });
      setIndex(item);
    }
  }, [indexList]);

  useEffect(() => {
    const updateScale = () => {
      const windowHeight = window.innerHeight;
      const newScale = windowHeight / 1050; // 예시로 A4 크기(842px)에 맞추는 방법
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const handleKeys = (e: KeyboardEvent) => {
    if (e.shiftKey) {
      if (e.key === "ArrowRight") {
        const persons = indexList.filter((i) => i.page_number > page + 1);
        if (persons) {
          const item = persons[0].page_number;
          handleMovePage(!!!(item % 2) ? item - 1 : item);
        }
      } else if (e.key === "ArrowLeft") {
        const persons = indexList.filter((i) => i.page_number < page - 1);
        if (persons) {
          const item = persons[persons.length - 1].page_number;
          handleMovePage(!!!(item % 2) ? item - 1 : item);
        }
      }
      return;
    } else if (e.key === "ArrowLeft") {
      handleMovePage(page - 2);
    } else if (e.key === "ArrowRight" && page + 1 < max) {
      handleMovePage(page + 2);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeys);
    return () => {
      document.removeEventListener("keydown", handleKeys);
    };
  }, [handleKeys]);

  return (
    <Layout buttons={_buttons} sidebars={_sidebars}>
      <div className="w-full h-full flex flex-center">
        <Ternary data={!!!url || loading}>
          <div className="z-30 left-0 top-0 w-full h-full bg-[#000000DD] flex flex-center absolute text-white">
            PDF를 불러오고 있습니다..
          </div>
        </Ternary>
        <Document
          onLoadSuccess={({ numPages }) => {
            setMax(numPages);
            setLoading(false);
          }}
          file={url}
          className="col-flex items-center h-fit gap-2"
          onLoadStart={({ page }) => (page.style.background = "white")}
        >
          <span>
            {page - 1} - {page} / {max}
          </span>
          <div className="flex gap-2">
            <Page
              pageIndex={page - 1}
              scale={scale}
              className={`${page - 1 === 0 ? "invisible" : ""} h-fit`}
            />

            <Page
              pageIndex={page === max ? page - 1 : page}
              scale={scale}
              className={`${page === max ? "invisible" : ""} h-fit`}
            />
          </div>
        </Document>
      </div>
    </Layout>
  );
};
