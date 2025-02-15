import Markdown from "react-markdown";
import remarkGFM from "remark-gfm";
import remarkBreak from "remark-breaks";

type dataType = {
  title?: string;
  subTitle?: string;
  content?: string;
};

interface IProp {
  title?: string;
  type: "static" | "list" | "rowList";
  isCheckAble?: boolean;
  data?: string | string[] | dataType[];
}

export const ItemLayout = ({ title, type, isCheckAble, data }: IProp) => {
  if (Array.isArray(data) ? data.length === 0 : data) {
    return (
      <div className={isCheckAble ? "checkAble" : ""}>
        <span className={`mt-6 text-resumeSectionTitle block ${!!title ? "text-black" : "text-gray-50"}`}>{title || "이름 없는 섹션"}</span>
        <div className={`checkAble ${type === "list" ? "" : "border-l-[3px] border-black mt-[10px]"}`}>
          {type === "static" && (
            <Markdown className="text-resumeItemContent w-full text-black px-[15px] prose full" remarkPlugins={[remarkGFM, remarkBreak]}>
              {(data as string)?.replace(/  \n/gi, "\n &nbsp;")}
            </Markdown>
          )}
          {type === "list" && (
            <div className={`col-flex ${isCheckAble ? "checkAble" : ""}`}>
              {(data as dataType[]).map((i, j) => (
                <div className="col-flex w-full pl-4 pr-[5px] mt-[10px] py-2 h-fit flex justify-between border-l-[3px] border-black" key={j}>
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-resumeItemTitle block ${!!i.title ? "text-black" : "text-gray-50"} ${i.subTitle && "w-[398px]"}`}>{i.title || "이름을 입력하세요"}</span>
                    {i.subTitle && <span className="text-resumeItemContent text-gray-100">{i.subTitle}</span>}
                  </div>
                  {i.content && (
                    <Markdown
                      className="text-gray-100 text-resumeItemContent prose w-full full"
                      remarkPlugins={[remarkGFM, remarkBreak]}
                      components={{
                        li(props) {
                          return <li className="light" {...props} />;
                        }
                      }}
                    >
                      {i.content?.replace(/  \n/gi, "\n &nbsp;")}
                    </Markdown>
                  )}
                </div>
              ))}
            </div>
          )}
          {type === "rowList" && (
            <div className="flex gap-1 px-[5px] flex-wrap w-full">
              {(data as string[]).map((i) => (
                <span key={i} className="text-body7 text-resumeItemContent px-2 py-[2px] text-black">
                  {i}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
};
