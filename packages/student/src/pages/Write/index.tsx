import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import * as _ from "./components";
import { Box, Prefix } from "ui";
import { resumeData } from "@/apis";
import { useResumeData } from "@/hooks/useResumeData";
import QRCode from "react-qr-code";

export const Write = () => {
  const section = parseInt(useParams().section as string);
  const { isLoading, isError } = resumeData();
  const { data } = useResumeData();

  if (section) {
    return (
      <div className="flex w-full h-full relative">
        <div className="flex flex-col w-full h-full relative overflow-x-hidden">
          <div className="size-full relative">
            {data.status === "SUBMITTED" && (
              <div className="size-full col-flex flex-center gap-5 absolute z-20 bg-[#00000080]">
                <span className="text-body3">
                  제출 상태에선 수정이 불가합니다
                </span>
              </div>
            )}
            <div
              className="flex size-full transition-all duration-300"
              style={{
                transform: `translateX(${(section - 1) * -100}%)`
              }}
            >
              <_.Inform />
              <_.Introduce />
              <_.Certification />
              <_.Activity />
              <_.Projects />
            </div>
          </div>

          <_.Footer section={section} />
        </div>
        <Box
          width="600px"
          height="100%"
          round={{ all: 0 }}
          className="shrink-0 gap-[4px] border-l-[1px] border-l-[#333333]"
        >
          <Box
            width="100%"
            padding="5px"
            className="flex-row justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <span className="text-body5">미리보기</span>
              <Prefix>Live</Prefix>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-body8 px-3 py-1 border-[1px] border-[#333333] rounded-[50px]">
                <span className="text-[#888888]">1 / </span>1
              </span>
              <div className="flex items-center h-fit gap-1">
                <div className="border-[1px] border-[#333333] rounded-full p-[5px] cursor-pointer">
                  <Icon
                    icon="ep:arrow-left-bold"
                    width={14}
                    height={14}
                    color="#777777"
                  />
                </div>
                <div className="border-[1px] border-[#333333] rounded-full p-[5px] cursor-pointer">
                  <Icon
                    icon="ep:arrow-right-bold"
                    width={14}
                    height={14}
                    color="white"
                  />
                </div>
              </div>
            </div>
          </Box>
          <div className="w-full h-full overflow-auto rounded-[5px]">
            <Box
              width="595px"
              height="841px"
              padding="30px"
              round={{ all: 0 }}
              className="bg-white gap-6"
            >
              <div className="flex w-full justify-between items-center">
                <div className="col-flex gap-1">
                  <div className="flex gap-3 items-center">
                    <div className="text-title1">{data.writer.name}</div>
                    <div className="text-title4">{data.writer.majorName}</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="text-body8 text-black font-light">
                      {data.writer.department}{" "}
                      <span className="text-[#A5A4A4]">
                        {data.writer.classInfo.schoolNumber}
                      </span>
                    </span>
                    <span className="text-body8 text-black font-light">
                      {data.writer.email}
                    </span>
                  </div>
                </div>
                {!!data.writer.url && (
                  <QRCode
                    value={data.writer.url}
                    className="w-[60px] h-[60px]"
                  />
                )}
              </div>
              {!!data.introduce.heading || !!data.introduce.introduce ? (
                <div className="col-flex gap-5">
                  <span className="text-body3 text-black">
                    {data.introduce.heading}
                  </span>
                  <span className="text-body8 text-[#818181] font-light">
                    {data.introduce.introduce}
                  </span>
                </div>
              ) : (
                <></>
              )}
              {data.writer.skillSet?.length !== 0 ? (
                <div className="col-flex gap-[10px]">
                  <span className="text-body5 text-black">기술 스택</span>
                  <div className="border-l-[3px] border-black flex gap-1 px-[5px] flex-wrap w-full">
                    {data.writer.skillSet.map((i) => (
                      <span className="text-body7 px-2 py-[2px] text-black">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <></>
              )}
              {data.achievementList.length !== 0 ? (
                <div className="col-flex gap-[10px]">
                  <span className="text-body5 text-black">자격증 & 수상</span>
                  {data.achievementList.map((i) => (
                    <div className="pl-5 pr-[5px] py-3 border-l-[3px] border-black flex justify-between items-center">
                      <span className="text-body5 text-black">{i.name}</span>
                      <div className="flex gap-[10px] items-center">
                        <span className="text-body8 font-light text-[#818181]">
                          {i.institution}
                        </span>
                        <div className="h-[16px] bg-[#818181] w-[1px] rounded-full" />
                        <span className="text-body8 font-light text-[#818181]">
                          {i.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </Box>
          </div>
        </Box>
        {(isLoading || isError) && (
          <div className="size-full col-flex flex-center gap-5 absolute z-20 bg-[#00000080]">
            <Icon
              icon="line-md:loading-twotone-loop"
              color="white"
              width={80}
            />
            <span className="text-body3">데이터를 불러오고 있습니다...</span>
          </div>
        )}
      </div>
    );
  }
};
