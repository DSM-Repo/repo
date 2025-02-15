import { checkOverflow } from "@configs/util";
import { useEffect, useRef, useState } from "react";
import { ItemLayout, PageLayout } from "../Layout";
import { Overflow } from "./Overflow";
import QRCode from "react-qr-code";
import { Document } from "@configs/type";
import { setType } from ".";

interface IProp {
  data: Document.Resume;
  setMax: setType;
  showPadding?: boolean;
  scale?: number;
  noOverflow?: boolean;
}

export const Inform = ({ data, setMax, showPadding, noOverflow, scale }: IProp) => {
  const [pages, setPages] = useState<HTMLElement[][]>([]);
  const pdf = useRef<HTMLElement>(null);

  useEffect(() => {
    if (pdf?.current && !!!noOverflow) {
      const over = checkOverflow(pdf?.current);
      setPages(over);
      setMax((prev) => ({ ...prev, inform: 1 + over.length })); // 기본 페이지 1개 + 오버된 페이지 n개
    }
  }, [data]);

  return (
    <>
      <PageLayout ref={pdf} showPadding={showPadding} scale={scale} noOverflow={noOverflow}>
        <div className="flex w-full h-[60px] justify-between items-center">
          {/* 프로필 */}
          <div className="col-flex gap-2">
            <div className="flex gap-3 items-center">
              <span className="text-resumeTitle text-black">{data.writer.name}</span>
              <span className="text-resumeSubTitle text-gray-700">{data.writer.major}</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-resumeInformation text-black">
                {data.writer.department} <span className="text-[#A5A4A4]">{data.writer.class_info.school_number}</span>
              </span>
              <span className="text-resumeInformation text-black">{data.writer.email}</span>
            </div>
          </div>
          {!!data.writer.url && (
            <a href={data.writer.url}>
              <QRCode value={data.writer.url} className="w-[60px] h-[60px]" />
            </a>
          )}
        </div>
        {data.introduce.heading && data.introduce.introduce && (
          <div className="col-flex gap-3 mt-6 w-full">
            <span className="text-resumeIntroduceHeading text-black">{data.introduce.heading}</span>
            <span className="text-resumeIntroduce text-[#818181] inline w-full font-light break-words whitespace-pre-wrap">{data.introduce.introduce}</span>
          </div>
        )}
        <ItemLayout title="기술 스택" type="rowList" data={data.writer.skill_set} />
        <ItemLayout
          title="자격증 & 수상"
          type="list"
          data={data?.achievement_list?.map((i) => ({
            title: i.name,
            subTitle: `${i.institution || "기관 미정"} | ${i.date || "날짜 미정"}`
          }))}
          isCheckAble
        />
        <ItemLayout
          title="활동"
          type="list"
          data={data?.activity_list?.map((i) => ({
            title: i.name,
            subTitle: i.is_period ? `${i?.date?.start_date || "시작일을 작성해주세요"} ~ ${i?.date?.end_date || "진행중"}` : i?.date?.start_date,
            content: i.description
          }))}
          isCheckAble
        />
      </PageLayout>

      {!!!noOverflow && <Overflow items={pages} showPadding={showPadding} scale={scale} />}
    </>
  );
};
