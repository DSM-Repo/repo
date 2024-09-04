import { Box } from "ui";
import { Ternary, checkOverflow, projectType } from "@configs/util";
import { Fragment, useEffect, useRef, useState } from "react";
import { setType } from ".";
import QRCode from "react-qr-code";

interface IProp {
  data: projectType;
  setMax: setType;
  keep?: any;
  fitA4?: boolean;
  fitA5?: boolean;
  setCur?: React.Dispatch<React.SetStateAction<number>>;
}

export const typeAgainChange = {
  PERSONAL: "개인",
  TEAM: "팀"
};

export const Projects = ({
  data,
  setMax,
  keep,
  fitA4,
  fitA5,
  setCur
}: IProp) => {
  const pdf = useRef<HTMLElement>(null);
  const [pages, setPages] = useState<HTMLElement[][]>([]);
  const isFirst = useRef(true);
  const fastPages = useRef(0);

  useEffect(() => {
    if (!!pdf?.current) {
      const over = checkOverflow(pdf?.current, fitA5);
      if (keep) {
        keep.current[data.element_id] = over.length + 1;
      }
      if (isFirst.current) {
        setMax((prev) => ({
          ...prev,
          projects: prev.projects + (!!over.length ? over.length : 1)
        }));
        isFirst.current = false;
      }
      if (fastPages.current < over.length) {
        setMax((prev) => ({
          ...prev,
          projects: prev.projects + (over.length - fastPages.current + 1)
        }));
      } else if (fastPages.current > over.length) {
        setMax((prev) => ({
          ...prev,
          projects: prev.projects - (fastPages.current - over.length + 1)
        }));
      }
      fastPages.current = over.length;
      setPages(over);
    }
  }, [data]);

  useEffect(() => {
    // 지워지기 전에 실행햐야 함. 로직은 따로 없음
    return () => {
      if (keep) {
        setMax((prev) => {
          setCur((curPrev) =>
            curPrev >= prev.projects + prev.inform
              ? curPrev - keep.current[data.element_id]
              : curPrev
          );
          return {
            ...prev,
            projects: prev.projects - keep.current[data.element_id]
          };
        });
      }
    };
  }, []);

  return (
    <>
      <div
        className={`${fitA5 ? "w-fit h-fit" : fitA4 ? "w-[842px] h-[1191px] flex flex-center bg-gray-200" : "w-[inherit] h-full"} overflow-auto flex-shrink-0`}
      >
        <Box
          width={fitA5 ? "595px" : "794px"}
          height={fitA5 ? "841px" : "1123px"}
          padding="30px"
          round="0["
          className="bg-white checkAble gap-[0_!important] flex-shrink-0 overflow-hidden"
          ref={pdf}
        >
          <div className="flex w-full justify-between items-center">
            <div
              className={`flex gap-[15px] ${!!data?.logo || !!data.url ? "h-[64px]" : "h-fit"} items-center`}
            >
              <Ternary data={data?.logo}>
                <img
                  src={data?.logo?.image_path}
                  className="w-[64px] h-[64px]"
                />
              </Ternary>
              <div className="col-flex">
                <div className="flex gap-[8px] items-end">
                  <span className="text-black text-title3">
                    {data?.name || "미정"}
                  </span>
                  <span className="text-gray-600 text-body5">
                    {typeAgainChange[data?.type]} 프로젝트
                  </span>
                </div>
                <Ternary data={data?.date?.start_date || data?.date?.end_date}>
                  <span className="text-gray-400 text-body7">
                    {data?.date?.start_date} ~{" "}
                    {data?.date?.end_date || "진행중"}
                  </span>
                </Ternary>
              </div>
            </div>
            <Ternary data={data?.url}>
              <QRCode value={data?.url} className="w-[60px] h-[60px]" />
            </Ternary>
          </div>
          <Ternary data={data?.skill_set.length !== 0}>
            <div className="col-flex mt-6">
              <span className="text-body5 text-black">사용 기술</span>
              <div className="border-l-[3px] border-black flex gap-1 px-[5px] flex-wrap w-full mt-[10px]">
                {data?.skill_set.map((i, j) => (
                  <span className="text-body7 px-2 py-[2px] text-black" key={j}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </Ternary>
          <>
            {data?.sections.map((i) => (
              <Ternary data={i.description}>
                <div className="col-flex mt-6">
                  <span className="text-body5 text-black">
                    {i.title || "이름 없는 섹션"}
                  </span>
                  <span className="border-l-[3px] border-black flex gap-1 px-[15px] text-body7 whitespace-pre-line w-full text-black mt-[10px]">
                    {i.description}
                  </span>
                </div>
              </Ternary>
            ))}
          </>
        </Box>
      </div>
      {pages?.map((item, index) => (
        <Fragment key={index}>
          <div
            className={`${fitA5 ? "w-fit h-fit" : fitA4 ? "w-[842px] h-[1191px] flex flex-center bg-gray-200" : "w-[inherit] h-full"} overflow-auto flex-shrink-0`}
          >
            <Box
              width={fitA5 ? "595px" : "794px"}
              height={fitA5 ? "841px" : "1123px"}
              padding="30px"
              round="0"
              className="bg-white gap-[0_!important] flex-shrink-0"
              ref={(item: HTMLElement) => {
                if (item?.childNodes) {
                  item?.childNodes?.forEach((i, j) => {
                    if (!!!j) {
                      (i.childNodes[0] as HTMLElement).style.margin = "0";
                    }
                  });
                }
              }}
            >
              <>
                {item?.map((i, j) => {
                  return (
                    <div
                      key={j}
                      ref={(items) =>
                        items?.childNodes.forEach((item) => {
                          (item as HTMLElement).style.visibility = "visible";
                        })
                      }
                      dangerouslySetInnerHTML={{ __html: i.outerHTML }}
                    />
                  );
                })}
              </>
            </Box>
          </div>
        </Fragment>
      ))}
    </>
  );
};
