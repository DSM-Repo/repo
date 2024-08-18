import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import * as _ from "./components";
import { Box, Prefix } from "ui";
import { resumeData } from "@/apis";
import { useResumeData } from "@/hooks/useResumeData";
import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import { typeAgainChange } from "./components/Projects/Item";

export const Write = () => {
  const section = parseInt(useParams().section as string);
  const { isLoading, isError } = resumeData();
  const { data } = useResumeData();
  const [page, setPage] = useState(1);
  const [cur, setCur] = useState(1);
  const projectInfo = data?.projectList[cur - 2];

  useEffect(() => {
    setPage(1 + data.projectList.length);
    if (cur > 1 + data.projectList.length) {
      setCur((prev) => --prev);
    }
  }, [data]);

  const handleCur = (loc: "left" | "right") => {
    if (loc === "left" && cur > 1) {
      setCur((prev) => --prev);
    } else if (loc === "right" && cur < page) {
      setCur((prev) => ++prev);
    }
  };

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
                <span className="text-[#888888]">{page} / </span>
                {cur}
              </span>
              <div className="flex items-center h-fit gap-1">
                <div
                  className="border-[1px] border-[#333333] rounded-full p-[5px] cursor-pointer"
                  onClick={() => handleCur("left")}
                >
                  <Icon
                    icon="ep:arrow-left-bold"
                    width={14}
                    height={14}
                    color={cur > 1 ? "#ffffff" : "#777777"}
                  />
                </div>
                <div
                  className="border-[1px] border-[#333333] rounded-full p-[5px] cursor-pointer"
                  onClick={() => handleCur("right")}
                >
                  <Icon
                    icon="ep:arrow-right-bold"
                    width={14}
                    height={14}
                    color={cur < page ? "#ffffff" : "#777777"}
                  />
                </div>
              </div>
            </div>
          </Box>
          <div className="w-full h-full overflow-auto rounded-[5px]">
            <Box
              width="595px"
              padding="30px"
              round={{ all: 0 }}
              className="bg-white gap-6 min-h-[841px]"
            >
              {cur === 1 ? (
                <>
                  <div className="flex w-full justify-between items-center">
                    <div className="col-flex gap-1">
                      <div className="flex gap-3 items-center">
                        <div className="text-title1">{data.writer.name}</div>
                        <div className="text-title4">
                          {data.writer.majorName}
                        </div>
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
                      <span className="text-body5 text-black">
                        자격증 & 수상
                      </span>
                      {data.achievementList.map((i) => (
                        <div className="pl-5 pr-[5px] py-3 border-l-[3px] border-black flex justify-between items-center">
                          <span className="text-body5 text-black">
                            {i.name}
                          </span>
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
                  {data.activityList.length !== 0 ? (
                    <div className="col-flex gap-[10px]">
                      <span className="text-body5 text-black">활동</span>
                      {data.activityList.map((i) => (
                        <div className="pl-5 pr-[5px] py-1 border-l-[3px] border-black col-flex">
                          <div className="flex w-full justify-between items-center">
                            <span className="text-body5 text-black">
                              {i.name}
                            </span>
                            <span className="text-body8 font-light text-[#818181]">
                              {!i.isPeriod
                                ? i.startDate
                                : `${i.startDate} ~ ${i.endDate || "진행중"}`}
                            </span>
                          </div>
                          <span className="text-gray-300 whitespace-pre-line">
                            {i.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <>
                  <div className="flex w-full justify-between items-center">
                    <div className="flex gap-[15px] h-[64px] items-center">
                      {projectInfo?.imageInfo && (
                        <img
                          src={projectInfo?.imageInfo.imagePath}
                          className="w-[64px] h-[64px]"
                        />
                      )}
                      <div className="col-flex">
                        <div className="flex gap-[8px] items-end">
                          <span className="text-black text-title3">
                            {projectInfo?.name || "미정"}
                          </span>
                          <span className="text-gray-600 text-body5">
                            {typeAgainChange[projectInfo?.type]} 프로젝트
                          </span>
                        </div>
                        {(projectInfo?.startDate || projectInfo?.endDate) && (
                          <span className="text-gray-400 text-body7">
                            {projectInfo.startDate} ~{" "}
                            {projectInfo.endDate || "진행중"}
                          </span>
                        )}
                      </div>
                    </div>
                    {projectInfo?.url && (
                      <QRCode
                        value={projectInfo?.url}
                        className="w-[60px] h-[60px]"
                      />
                    )}
                  </div>
                  {projectInfo?.skillSet?.length !== 0 ? (
                    <div className="col-flex gap-[10px]">
                      <span className="text-body5 text-black">사용 기술</span>
                      <div className="border-l-[3px] border-black flex gap-1 px-[5px] flex-wrap w-full">
                        {projectInfo?.skillSet.map((i) => (
                          <span className="text-body7 px-2 py-[2px] text-black">
                            {i}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {projectInfo?.description.motive ? (
                    <div className="col-flex gap-[10px]">
                      <span className="text-body5 text-black">진행 동기</span>
                      <span className="border-l-[3px] border-black flex gap-1 px-[15px] text-body7 whitespace-pre-line w-full text-black">
                        {projectInfo?.description.motive}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                  {projectInfo?.description.role ? (
                    <div className="col-flex gap-[10px]">
                      <span className="text-body5 text-black">맡은 역할</span>
                      <span className="border-l-[3px] border-black flex gap-1 px-[15px] text-body7 whitespace-pre-line w-full text-black">
                        {projectInfo.description.role}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                  {projectInfo?.description.retrospective ? (
                    <div className="col-flex gap-[10px]">
                      <span className="text-body5 text-black">
                        프로젝트 회고
                      </span>
                      <span className="border-l-[3px] border-black flex gap-1 px-[15px] text-body7 whitespace-pre-line w-full text-black">
                        {projectInfo?.description.retrospective}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
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
