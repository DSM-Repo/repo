import { Document as DocuType } from "@configs/type";
import { useOverflow } from "@configs/util";
import QRCode from "react-qr-code";
import { useContext } from "react";
import { ItemLayout, PageLayout } from "../Layout";
import { Overflow } from "./Overflow";
import { Context } from "..";
import { setType } from ".";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

interface IProp {
  data: DocuType.Resume;
  setter: setType;
}

export const Inform = ({ data, setter }: IProp) => {
  const { noOverflow } = useContext(Context);
  const [target, pages] = useOverflow({ observeTarget: data, onCalc: ({ length }) => setter((prev) => ({ ...prev, inform: 1 + length })) });

  return (
    <>
      <PageLayout ref={target}>
        <header className="flex w-full h-[60px] justify-between items-center">
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
          {data.writer.url && (
            <a href={data.writer.url}>
              <QRCode value={data.writer.url} className="w-[60px] h-[60px]" />
            </a>
          )}
        </header>
        {(data.introduce.heading || data.introduce.introduce) && (
          <div className="col-flex gap-3 mt-6 w-full">
            {data.introduce.heading && <span className="text-resumeIntroduceHeading text-black">{data.introduce.heading}</span>}
            {data.introduce.introduce && (
              <Markdown className="text-gray-100 text-resumeItemContent prose w-full max-w-none break-words -ml-2" remarkPlugins={[remarkGfm, remarkBreaks]}>
                {"   " + data.introduce.introduce.replace(/\n/g, "\n&nbsp;  ")}
              </Markdown>
            )}
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
        />
        <ItemLayout
          title="활동"
          type="list"
          data={data?.activity_list?.map((i) => ({
            title: i.name,
            subTitle: i.is_period ? `${i?.date?.start_date || "시작일을 작성해주세요"} ~ ${i?.date?.end_date || "진행중"}` : i?.date?.start_date,
            content: i.description
          }))}
        />
      </PageLayout>

      {!noOverflow && <Overflow items={pages} />}
    </>
  );
};
