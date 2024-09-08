import { useResumeData } from "@/hooks";
import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { ClientRenderer, Layout } from "ui";
import { Ternary } from "@configs/util";

export const Detail = () => {
  const { data } = useResumeData();
  const [pdf, setPdf] = useState(undefined);
  const [scale, setScale] = useState(1.0);
  const [max, setMax] = useState(1);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

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

  return (
    <Layout
      buttons={[
        { icon: "Arrow", rotate: "left", title: "이전으로", action: () => {} },
        { icon: "Arrow", rotate: "right", title: "다음으로", action: () => {} }
      ]}
    >
      <ClientRenderer data={data} setter={setPdf} />
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
        file={pdf}
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
    </Layout>
  );
};
