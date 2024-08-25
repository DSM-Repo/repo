import { getLibrary } from "@/apis/library";
import { Document, Page, pdfjs } from "react-pdf";
import { useLocation, useParams } from "react-router-dom";
import { Box } from "ui";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export const LibraryView = () => {
  const { id } = useParams();
  const { data: file } = getLibrary(id as string);
  const [max, setMax] = useState(2);
  const [page, setPage] = useState(1);

  const handleClick = (value: number) => {
    if (value < 1 || value > max) return;
    setPage(value);
  };

  if (file) {
    return (
      <div className="flex flex-col items-center justify-between h-full">
        <Document
          file={file.resume_url}
          className="flex gap-2 w-fit h-full"
          onLoadSuccess={({ numPages }) => setMax(numPages)}
          onLoadStart={({ page }) => (page.style.background = "white")}
        >
          {page - 1 === 0 ? (
            <div className="w-[450px] h-full" />
          ) : (
            <Page pageIndex={page - 1} className="w-fit h-fit" width={450} />
          )}
          {page === max ? (
            <div className="w-[450px] h-full" />
          ) : (
            <Page pageIndex={page} className="w-fit h-fit" width={450} />
          )}
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
            onClick={() => handleClick(page - 2)}
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
            onClick={() => handleClick(page + 2)}
          />
        </Box>
      </div>
    );
  }
};
