import { Box, HeaderProvider, Icon, Text, Title } from "ui";
import { useNavigate } from "react-router-dom";
import { fuzzySearch } from "@configs/util";
import { Api } from "@configs/type";
import { useState } from "react";
import { students } from "@/apis";

export const Home = () => {
  const navigate = useNavigate();
  const { data: resumes } = students();
  const [opened, setOpened] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("");

  const filterList = () => {
    let item: Record<string, Api.Resume.resumeStudentData[]> = {};
    resumes?.data.forEach((i) => {
      const number = i.student_info.school_number.split("").splice(0, 2).join("");
      if (!!!item[number]) item[number] = [];
      item[number] = [...item[number], i];
    });
    return item;
  };

  const filterItem = () => {
    if (!isNaN(Number(filter))) {
      return resumes?.data.filter((i) => i.student_info.school_number.includes(filter));
    } else {
      return resumes?.data
        .filter((i) => fuzzySearch(filter, i.student_info.name)?.success)
        .sort((i, j) => fuzzySearch(filter, j.student_info.name)?.index - fuzzySearch(filter, i.student_info.name)?.index);
    }
  };

  return (
    <HeaderProvider>
      <div className="col-flex w-full px-[60px] py-6 gap-5">
        <Title title="레주메 관리" subTitle="학생들의 레주메를 관리해보세요" />
        <Text placeholder="검색할 이름이나 학번을 입력하세요" onChange={({ target }) => setFilter(target.value)} value={filter} size="large" />
        {filter
          ? filterItem()?.map((i) => (
              <Box key={i.resume_id} width="440px" height="fit-content" className="flex-row cursor-pointer items-center" padding="24px" onClick={() => navigate(`/resume/${i.resume_id}`)}>
                <span className="leading-none">
                  {i.student_info.school_number} {i.student_info.name}
                </span>
                <span className="leading-none text-gray-200">
                  피드백 {i.feedback_list.length}개, 반영된 피드백 {i.feedback_list.filter((i) => i.status === "CONFIRMED").length}개
                </span>
                {i.status !== "ONGOING" && <span className={`text-body4 ${i.status === "SUBMITTED" ? "text-green-400" : "text-red-500"}`}>{i.status === "SUBMITTED" ? "제출됨" : "공개됨"}</span>}
              </Box>
            ))
          : resumes &&
            Object.entries(filterList()).map((i, j) => (
              <div key={j} className="col-flex gap-5 w-[440px]">
                <div className="flex gap-2 w-full h-fit items-center">
                  <Icon name="Arrow" onClick={() => setOpened(opened === i[0] ? null : i[0])} className="cursor-pointer" rotate={opened === i[0] ? "up" : "down"} />
                  <span className="flex-shrink-0 text-body5">
                    {i[0].split("").join("-")} ({i[1].length}명)
                  </span>
                  <hr className="bg-white w-full" />
                </div>

                {opened === i[0] &&
                  i[1].map((i) => (
                    <Box key={i.resume_id} width="440px" height="fit-content" className="flex-row cursor-pointer items-center" padding="24px" onClick={() => navigate(`/resume/${i.resume_id}`)}>
                      <span className="leading-none">
                        {i.student_info.school_number} {i.student_info.name}
                      </span>
                      <span className="leading-none text-gray-200">
                        피드백 {i.feedback_list.length}개, 반영된 피드백 {i.feedback_list.filter((i) => i.status === "CONFIRMED").length}개
                      </span>
                      {i.status !== "ONGOING" && <span className={`text-body4 ${i.status === "SUBMITTED" ? "text-green-400" : "text-red-500"}`}>{i.status === "SUBMITTED" ? "제출됨" : "공개됨"}</span>}
                    </Box>
                  ))}
              </div>
            ))}
      </div>
    </HeaderProvider>
  );
};
