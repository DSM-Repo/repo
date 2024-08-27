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

const sizes: { [key: string]: number } = {
  "25": 4.417,
  "33.5": 3.281,
  "50": 2.144,
  "66.5": 1.575723,
  "75": 1.386,
  "80": 1.292,
  "90": 1.134,
  "100": 1.006,
  "110": 0.903,
  "125": 0.779,
  "150": 0.627,
  "175": 0.52,
  "200": 0.438
};

export const LibraryView = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const isPublic = searchParams.get("isPublic");
  const { data: file } = getLibrary(id as string, !!isPublic);
  const [max, setMax] = useState(2);
  const { page, setPage } = usePage();
  const [size, setSize] = useState("100");
  const { opened, setOpened } = useOpen();

  useEffect(() => {
    setSize((Math.round(window.devicePixelRatio * 100) / 2).toString());
    window.addEventListener("resize", () => {
      const item = Math.round(window.devicePixelRatio * 100) / 2;
      setSize(item.toString());
    });
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
            scale={sizes[size]}
            className={page - 1 === 0 ? "invisible" : ""}
          />
          <Page
            pageIndex={page === max ? page - 1 : page}
            width={450}
            scale={sizes[size]}
            className={page === max ? "invisible" : ""}
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
