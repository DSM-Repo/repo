import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import * as _ from "./components";
import { resumeData } from "@/apis";
import { useResumeData } from "@/hooks";

export const Write = () => {
  const section = parseInt(useParams().section as string);
  const { isLoading, isError } = resumeData();
  const { data } = useResumeData();

  if (section) {
    return (
      <div className="flex w-full h-full relative">
        <div className="flex flex-col w-full h-full relative overflow-x-hidden">
          <div className="size-full relative">
            {(data.status === "SUBMITTED" || data.status === "RELEASED") && (
              <div className="size-full col-flex flex-center gap-5 absolute z-20 bg-[#00000080]">
                <span className="text-body3">
                  {data.status === "SUBMITTED" ? "제출" : "공개"} 상태에선
                  수정이 불가합니다
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
        <_.Preview />
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
