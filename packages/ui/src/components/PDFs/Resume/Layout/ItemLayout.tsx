import remarkBreak from "remark-breaks";
import Markdown from "react-markdown";
import remarkGFM from "remark-gfm";
import { memo } from "react";

type dataType = {
  title?: string;
  subTitle?: string;
  content?: string;
};

interface IProp {
  title?: string;
  type: "static" | "list" | "rowList";
  data?: string | string[] | dataType[];
}

const Static = ({ data }: { data: string }) => (
  <Markdown className="text-resumeItemContent w-full text-black px-[15px] prose border-l-[3px] border-black mt-[10px]" remarkPlugins={[remarkGFM, remarkBreak]}>
    {data.replace(/  \n/gi, "\n &nbsp;")}
  </Markdown>
);

const List = ({ data }: { data: dataType[] }) =>
  data.map(({ title, subTitle, content }, index) => (
    <div className="col-flex w-full pl-4 pr-[5px] mt-[10px] py-2 h-fit flex justify-between border-l-[3px] border-black" key={index}>
      <div className="flex items-center justify-between w-full">
        <span className={`text-resumeItemTitle block ${title ? "text-black" : "text-gray-50"} ${subTitle && "w-[398px]"}`}>{title || "이름을 입력하세요"}</span>
        {subTitle && <span className="text-resumeItemContent text-gray-100">{subTitle}</span>}
      </div>
      {content && (
        <Markdown className="text-gray-100 text-resumeItemContent prose w-full full" remarkPlugins={[remarkGFM, remarkBreak]}>
          {content?.replace(/  \n/gi, "\n &nbsp;")}
        </Markdown>
      )}
    </div>
  ));

const RowList = ({ data }: { data: string[] }) => (
  <div className="flex gap-1 px-[5px] flex-wrap w-full border-l-[3px] border-black mt-[10px]">
    {data.map((item) => (
      <span key={item} className="text-body7 text-resumeItemContent px-2 py-[2px] text-black">
        {item}
      </span>
    ))}
  </div>
);

export const ItemLayout = memo(({ title, type, data }: IProp) => {
  if (Array.isArray(data) ? data.length !== 0 : data) {
    return (
      <>
        <span className={`mt-6 text-resumeSectionTitle block ${title ? "text-black" : "text-gray-50"}`}>{title || "이름 없는 섹션"}</span>
        {type === "static" && <Static data={data as string} />}
        {type === "list" && <List data={data as dataType[]} />}
        {type === "rowList" && <RowList data={data as string[]} />}
      </>
    );
  }
});
