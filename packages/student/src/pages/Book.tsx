import { getBook, indexType } from "@/apis";
import { Ternary } from "@configs/util";
import { useEffect, useState } from "react";
import { Page, pdfjs, Document } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useNavigate, useParams } from "react-router-dom";
import { Layout, sidebarType, buttonType, Items } from "ui";
import { saveAs } from "file-saver";

export const Book = () => {
  const { id } = useParams();
  const { data } = getBook(id as string);
  const [scale, setScale] = useState(1);
  const [index, setIndex] = useState<indexType[][]>([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const finded = data?.index?.find(
    (i) => i.page_number === page + 1 || i.page_number === page
  );
  const [max, setMax] = useState(1);

  const handleMovePage = (next: number) => {
    if (next < 0 || next > max) {
      return;
    }
    setPage(next);
  };

  const buttons: buttonType[] = [
    {
      icon: "Share",
      title: "돌아가기",
      rotate: "left",
      action: () => navigate("/library")
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
      action: () =>
        data &&
        saveAs(
          data.resume_url,
          `${data.year}년 ${data.grade}학년 (${data.generation}기) Resume Book.pdf`
        )
    },
    {
      icon: "Users",
      title: "빠른 이동",
      action: "빠른 이동"
    }
  ];

  const ClassSection = (type: 1 | 2 | 3 | 4) => {
    return (
      <Items
        selections={index[type - 1]?.map(
          (i) => `${i.student_number} ${i.name}`
        )}
        selected={`${finded?.student_number} ${finded?.name}`}
        onClick={(value) => {
          const findClicked = data?.index.find(
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

  const sidebars: sidebarType[] = [
    {
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
  ];

  useEffect(() => {
    if (data?.index) {
      let item: indexType[][] = [[], [], [], []];
      data?.index.forEach((i) => {
        const cls = Math.floor((i.student_number % 1000) / 100);
        item[cls - 1]?.push(i);
      });
      setIndex(item);
    }
  }, [data]);

  useEffect(() => {
    const updateScale = () => {
      const windowHeight = window.innerHeight;
      const newScale = windowHeight / 1014; // 예시로 A4 크기(842px)에 맞추는 방법
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const handleKeys = (e: KeyboardEvent) => {
    if (e.shiftKey) {
      if (e.key === "ArrowRight") {
        const persons = data?.index.filter((i) => i.page_number > page + 1);
        if (persons) {
          const item = persons[0].page_number;
          handleMovePage(!!!(item % 2) ? item - 1 : item);
        }
      } else if (e.key === "ArrowLeft") {
        const persons = data?.index.filter((i) => i.page_number < page - 1);
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
    <Layout buttons={buttons} sidebars={sidebars}>
      <div className="w-full h-full flex flex-center">
        <Ternary data={!!!data || loading}>
          <div className="z-30 left-0 top-0 w-full h-full bg-[#000000DD] flex flex-center absolute text-white">
            PDF를 불러오고 있습니다..
          </div>
        </Ternary>
        <Document
          onLoadSuccess={({ numPages }) => {
            setMax(numPages);
            setLoading(false);
          }}
          file={data?.resume_url}
          className="flex gap-2 h-fit"
          onLoadStart={({ page }) => (page.style.background = "white")}
        >
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
        </Document>
      </div>
    </Layout>
  );
};
