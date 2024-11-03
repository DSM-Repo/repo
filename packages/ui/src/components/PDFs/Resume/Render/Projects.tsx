import { Ternary, checkOverflow } from "@configs/util";
import { useEffect, useRef, useState } from "react";
import { PageLayout, ItemLayout } from "../Layout";
import { Overflow } from "./Overflow";
import QRCode from "react-qr-code";
import { setType } from ".";
import { Document } from "@configs/type";

interface IProp {
  data: Document.Project_list;
  setMax?: setType;
  keep?: any;
  showPadding?: boolean;
  scale?: number;
  noOverflow?: boolean;
}

export const typeAgainChange = {
  PERSONAL: "개인",
  TEAM: "팀"
};

export const Projects = ({
  data,
  setMax,
  keep,
  showPadding,
  noOverflow,
  scale
}: IProp) => {
  const pdf = useRef<HTMLElement>(null);
  const [pages, setPages] = useState<HTMLElement[][]>([]);
  const isFirst = useRef(true);

  useEffect(() => {
    return () => {
      isFirst.current = true;
      setMax((prev) => ({ ...prev, projects: 0 }));
      keep.current[data.element_id] = 0;
    };
  }, [data.element_id]);

  useEffect(() => {
    if (!!pdf?.current && !!!noOverflow) {
      const over = checkOverflow(pdf?.current);
      setPages(over);
      if (keep && setMax) {
        const check = over.length + 1 - (keep.current[data.element_id] || 0);
        if (isFirst.current) {
          setMax((prev) => ({ ...prev, projects: ++prev.projects }));
          isFirst.current = false;
        }
        setMax((prev) => ({
          ...prev,
          projects:
            check === 0
              ? prev.projects
              : check < 0
                ? prev.projects + check
                : prev.projects + over.length
        }));
        keep.current[data.element_id] = over.length + 1;
      }
    }
  }, [data]);

  useEffect(() => {
    // 지워지기 전에 실행햐야 함. 로직은 따로 없음
    return () => {
      if (keep && setMax) {
        setMax((prev) => ({
          ...prev,
          projects: prev.projects - keep.current[data.element_id]
        }));
      }
    };
  }, []);

  return (
    <>
      <PageLayout
        ref={pdf}
        showPadding={showPadding}
        scale={scale}
        noOverflow={noOverflow}
      >
        <div className="flex w-full justify-between items-center">
          <div className={`flex gap-[20px] h-[60px] items-center`}>
            <Ternary data={data?.logo}>
              <img
                src={data?.logo?.image_path + `?timestamp=${Date.now()}`}
                className="w-[54px] h-[54px]"
                crossOrigin="anonymous"
                loading="lazy"
              />
            </Ternary>
            <div className="col-flex">
              <div className="flex gap-[8px] items-center">
                <span className="text-black text-resumeTitle">
                  {data?.name || "무명"}
                </span>
                <span className="text-gray-600 text-resumeSubTitle">
                  {typeAgainChange[data?.type]} 프로젝트
                </span>
              </div>
              <Ternary data={data?.date?.start_date || data?.date?.end_date}>
                <span className="text-gray-400 text-resumeInformation">
                  {data?.date?.start_date} ~ {data?.date?.end_date || "진행중"}
                </span>
              </Ternary>
            </div>
          </div>
          <Ternary data={data?.url}>
            <a href={data?.url}>
              <QRCode value={data?.url} className="w-[60px] h-[60px]" />
            </a>
          </Ternary>
        </div>
        <ItemLayout title="기술 스택" type="rowList" data={data?.skill_set} />
        <>
          {data?.sections.map((i) => (
            <ItemLayout title={i.title} type="static" data={i.description} />
          ))}
        </>
      </PageLayout>

      {!!!noOverflow && (
        <Overflow items={pages} showPadding={showPadding} scale={scale} />
      )}
    </>
  );
};
