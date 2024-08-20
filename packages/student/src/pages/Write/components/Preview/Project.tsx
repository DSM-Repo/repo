import { Box } from "ui";
import { typeAgainChange } from "../Projects/Item";
import { projectType } from "@configs/default";
import { useEffect, useRef, useState } from "react";
import { setType } from ".";
import { checkOverflow } from "@/util";
import { Ternary } from "./Ternary";
import QRCode from "react-qr-code";

interface IProp {
  data: projectType;
  setMax: setType;
}

export const Projects = ({ data, setMax }: IProp) => {
  const [pages, setPages] = useState<HTMLElement[][]>([]);

  const pdf = useRef<HTMLElement>(null);

  useEffect(() => {
    if (pdf?.current) {
      const over = checkOverflow(pdf?.current);
      setPages(over);
      setMax((prev) => ({ ...prev, inform: over.length + 1 }));
    }
  }, [data]);

  return (
    <>
      <div className="overflow-auto flex-shrink-0 w-fit h-full">
        <Box
          width="595px"
          height="841px"
          padding="30px"
          round={{ all: 0 }}
          className="bg-white checkAble gap-[0_!important] flex-shrink-0 overflow-hidden"
          ref={pdf}
        >
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-[15px] h-[64px] items-center">
              <Ternary data={data?.image_info}>
                <img
                  src={data?.image_info?.image_path}
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
                <Ternary data={data?.start_date || data?.end_date}>
                  <span className="text-gray-400 text-body7">
                    {data.start_date} ~ {data.end_date || "진행중"}
                  </span>
                </Ternary>
              </div>
            </div>
            <Ternary data={data?.url}>
              <QRCode value={data?.url} className="w-[60px] h-[60px]" />
            </Ternary>
          </div>
          <Ternary data={data?.skill_set}>
            <div className="col-flex mt-6">
              <span className="text-body5 text-black">사용 기술</span>
              <div className="border-l-[3px] border-black flex gap-1 px-[5px] flex-wrap w-full mt-[10px]">
                {data?.skill_set.map((i) => (
                  <span className="text-body7 px-2 py-[2px] text-black">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </Ternary>
          <Ternary data={data?.description?.motive}>
            <div className="col-flex mt-6">
              <span className="text-body5 text-black">진행 동기</span>
              <span className="border-l-[3px] border-black flex gap-1 px-[15px] text-body7 whitespace-pre-line w-full text-black mt-[10px]">
                {data?.description.motive}
              </span>
            </div>
          </Ternary>
          <Ternary data={data?.description.role}>
            <div className="col-flex mt-6">
              <span className="text-body5 text-black">맡은 역할</span>
              <span className="border-l-[3px] border-black flex gap-1 px-[15px] text-body7 whitespace-pre-line w-full text-black mt-[10px]">
                {data.description.role}
              </span>
            </div>
          </Ternary>
          <Ternary data={data?.description.retrospective}>
            <div className="col-flex mt-6">
              <span className="text-body5 text-black">프로젝트 회고</span>
              <span className="border-l-[3px] border-black flex gap-1 px-[15px] text-body7 whitespace-pre-line w-full text-black mt-[10px]">
                {data?.description.retrospective}
              </span>
            </div>
          </Ternary>
        </Box>
      </div>
      {pages.map((item) => (
        <div className="overflow-auto flex-shrink-0 w-fit h-full">
          <Box
            width="595px"
            height="841px"
            padding="30px"
            round={{ all: 0 }}
            className="bg-white gap-[0_!important] flex-shrink-0"
          >
            <>
              {item?.map((i) => {
                return (
                  <div
                    ref={(items) =>
                      items?.childNodes.forEach(
                        (i) => ((i as HTMLElement).style.visibility = "visible")
                      )
                    }
                    dangerouslySetInnerHTML={{ __html: i.outerHTML }}
                  />
                );
              })}
            </>
          </Box>
        </div>
      ))}
    </>
  );
};
