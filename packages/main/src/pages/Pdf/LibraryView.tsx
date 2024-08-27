import { getLibrary } from "@/apis/library";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams, useSearchParams } from "react-router-dom";
import { Box } from "ui";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePage } from "@/hooks/usePage";
import { useOpen } from "@/hooks/useOpen";

export const LibraryView = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const isPublic = searchParams.get("isPublic");
  const { data: file } = getLibrary(id as string, !!isPublic);
  const [max, setMax] = useState(2);
  const { page, setPage } = usePage();
  const { opened, setOpened } = useOpen();

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const windowHeight = window.innerHeight;
      const newScale = windowHeight / 721; // 예시로 A4 크기(842px)에 맞추는 방법
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const handleKeys = (e: KeyboardEvent) => {
    if (e.shiftKey) {
      if (e.key === "ArrowRight") {
        const persons = file?.index.filter((i) => i.page_number > page + 1);
        if (persons) {
          const item = persons[0].page_number;
          const section =
            Math.floor((persons[0].student_number % 1000) / 100) + "반";
          setPage(!!!(item % 2) ? item - 1 : item, max);
          if (opened !== section) {
            setOpened(section);
          }
        }
      } else if (e.key === "ArrowLeft") {
        const persons = file?.index.filter((i) => i.page_number < page - 1);
        if (persons) {
          const item = persons[persons.length - 1].page_number;
          const section =
            Math.floor(
              (persons[persons.length - 1].student_number % 1000) / 100
            ) + "반";
          setPage(!!!(item % 2) ? item - 1 : item, max);
          if (opened !== section) {
            setOpened(section);
          }
        }
      }
      return;
    } else if (e.key === "ArrowLeft" && page - 1 > 0) {
      setPage(page - 2, max);
    } else if (e.key === "ArrowRight" && page + 1 < max) {
      setPage(page + 2, max);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeys);
    return () => {
      document.removeEventListener("keydown", handleKeys);
    };
  }, [handleKeys]);

  if (file) {
    return (
      <div className="flex flex-col items-center justify-between h-full">
        <Document
          file={file.resume_url}
          className="flex gap-2 w-fit h-full"
          onLoadSuccess={({ numPages }) => setMax(numPages)}
          onLoadStart={({ page }) => (page.style.background = "white")}
        >
          <Page
            pageIndex={page - 1}
            width={450}
            scale={scale}
            className={`${page - 1 === 0 ? "invisible" : ""} h-fit`}
          />
          <Page
            pageIndex={page === max ? page - 1 : page}
            width={450}
            scale={scale}
            className={`${page === max ? "invisible" : ""} h-fit`}
          />
        </Document>
        <Box
          width="100%"
          className="flex-row justify-center items-center"
          round={{ all: 0 }}
        >
          <Icon
            icon="ep:arrow-left-bold"
            color="white"
            className="cursor-pointer"
            onClick={() => setPage(page - 2, max)}
          />
          <span className="text-body8">
            {page === 1
              ? `01`
              : `${(page - 1).toString().padStart(2, "0")} -
              ${page.toString().padStart(2, "0")}`}{" "}
            / {max.toString().padStart(2, "0")}
          </span>
          <Icon
            icon="ep:arrow-right-bold"
            className="cursor-pointer"
            color="white"
            onClick={() => setPage(page + 2, max)}
          />
        </Box>
      </div>
    );
  }
};
