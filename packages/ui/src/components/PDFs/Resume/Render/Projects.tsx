import { checkOverflow } from "@configs/util";
import { useContext, useEffect, useRef, useState } from "react";
import { PageLayout, ItemLayout } from "../Layout";
import { Overflow } from "./Overflow";
import QRCode from "react-qr-code";
import { setType } from ".";
import { Document } from "@configs/type";
import { Context } from "..";

interface IProp {
  data: Document.Project_list;
  setter?: setType;
  index: number;
}

export const typeAgainChange = {
  PERSONAL: "개인",
  TEAM: "팀"
};

export const Projects = ({ data, setter, index }: IProp) => {
  const { noOverflow } = useContext(Context);
  const pdf = useRef<HTMLElement>(null);
  const [pages, setPages] = useState<HTMLElement[][]>([]);

  useEffect(() => {
    if (pdf?.current && !noOverflow) {
      const over = checkOverflow(pdf?.current);
      setPages(over);
      setter((prev) => {
        const cur = { ...prev };
        if (cur.projects[index] === undefined) cur.projects[index] = 0;
        cur.projects[index] = 1 + over.length;
        return cur;
      });
    }
    return () => setter((prev) => ({ ...prev, projects: prev.projects.filter((_, innerIndex) => innerIndex !== index) }));
  }, [data]);

  return (
    <>
      <PageLayout ref={pdf}>
        <div className="flex w-full justify-between items-center">
          <div className={`flex gap-[20px] h-[60px] items-center`}>
            {data?.logo && <img src={data?.logo?.image_path} className="w-[54px] h-[54px]" crossOrigin="anonymous" />}
            <div className="col-flex">
              <div className="flex gap-[8px] items-center">
                <span className="text-black text-resumeTitle">{data?.name || "무명"}</span>
                <span className="text-gray-600 text-resumeSubTitle">{typeAgainChange[data?.type]} 프로젝트</span>
              </div>
              {(data?.date?.start_date || data?.date?.end_date) && (
                <span className="text-gray-400 text-resumeInformation">
                  {data?.date?.start_date} ~ {data?.date?.end_date || "진행중"}
                </span>
              )}
            </div>
          </div>
          {data?.url && (
            <a href={data?.url}>
              <QRCode value={data?.url} className="w-[60px] h-[60px]" />
            </a>
          )}
        </div>
        <ItemLayout title="기술 스택" type="rowList" data={data?.skill_set} />
        <>{data?.sections.map((i) => <ItemLayout key={i.element_id} title={i.title} type="static" data={i.description} />)}</>
      </PageLayout>

      {!noOverflow && <Overflow items={pages} />}
    </>
  );
};
