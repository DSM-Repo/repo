import { Ternary } from "@configs/util";

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
  return (
    <Ternary data={Array.isArray(data) ? data.length !== 0 : !!data}>
      <div className={isCheckAble ? "checkAble" : ""}>
        <span
          className={`mt-6 text-body5 block ${!!title ? "text-black" : "text-gray-50"}`}
        >
          {title || "이름 없는 섹션"}
        </span>
        {type === "static" && (
          <span className="border-l-[3px] border-black flex gap-1 px-[15px] text-body7 whitespace-pre-line w-full text-black mt-[10px]">
            {data as string}
          </span>
        )}
        {type === "list" && (
          <div className={`col-flex ${isCheckAble ? "checkAble" : ""}`}>
            {(data as dataType[]).map((i, j) => (
              <div
                className="col-flex w-full pl-5 pr-[5px] py-1 border-l-[3px] mt-[10px] h-fit border-black flex justify-between"
                key={j}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-body5 block ${!!i.title ? "text-black" : "text-gray-50"} ${i.subTitle && "w-[500px]"}`}
                  >
                    {i.title || "이름을 입력하세요"}
                  </span>
                  <Ternary data={i.subTitle}>
                    <span className="text-body8 font-light text-gray-100">
                      {i.subTitle}
                    </span>
                  </Ternary>
                </div>
                <Ternary data={i.content}>
                  <span className="text-gray-100 text-body7 whitespace-pre-line">
                    {i.content}
                  </span>
                </Ternary>
              </div>
            ))}
          </div>
        )}
        {type === "rowList" && (
          <div className="border-l-[3px] border-black flex mt-[10px] gap-1 px-[5px] flex-wrap w-full">
            {(data as string[]).map((i) => (
              <span className="text-body7 px-2 py-[2px] text-black">{i}</span>
            ))}
          </div>
        )}
      </div>
    </Ternary>
  );
};
