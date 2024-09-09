import { students } from "@/apis";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Dropdown, Layout, Title } from "ui";

type filterType = {
  grade: "1학년" | "2학년" | "3학년" | "학년";
  class: "1반" | "2반" | "3반" | "4반" | "반";
};

export const Home = () => {
  const [filter, setFilter] = useState<filterType>({
    grade: "학년",
    class: "반"
  });

  const { data: resumes } = students();

  const filterF = () => {
    let item = resumes?.data;
    if (item) {
      if (filter.grade && filter.grade !== "학년") {
        item = item.filter(
          (i) =>
            i.student_info.school_number.split("")[0] ===
            filter.grade.split("")[0]
        );
      }
      if (filter.class && filter.class !== "반") {
        item = item.filter(
          (i) =>
            i.student_info.school_number.split("")[1] ===
            filter.class.split("")[0]
        );
      }
      return item.sort(
        (i: any, j: any) =>
          i.student_info.school_number - j.student_info.school_number
      );
    }
  };

  const item = filterF();
  const handleFilter = (item: string, id?: string) =>
    setFilter((prev) => ({ ...prev, [id as string]: item }));
  const navigate = useNavigate();

  return (
    <Layout
      buttons={[
        {
          icon: "Filter",
          title: "필터",
          action: (
            <div className="col-flex gap-6 w-[220px]">
              <Title
                title="필터"
                titleSize="20px"
                subTitle="자신이 원하는 데이터만 필터링해보세요"
                subTitleSize="14px"
              />
              <div className="col-flex gap-2">
                <Dropdown
                  onChange={handleFilter}
                  placeholder="학년"
                  selected={filter.grade}
                  id="grade"
                  size="full"
                  selections={["1학년", "2학년", "3학년", "학년"]}
                />
                <Dropdown
                  onChange={handleFilter}
                  selected={filter.class}
                  selections={["1반", "2반", "3반", "4반", "반"]}
                  placeholder="반"
                  id="class"
                  size="full"
                />
              </div>
            </div>
          )
        }
      ]}
    >
      <div className="col-flex w-full px-[60px] py-6 gap-5">
        <Title title="레주메 관리" subTitle="학생들의 레주메를 관리해보세요" />
        {item?.map((i) => (
          <Box
            width="440px"
            height="fit-content"
            className="flex-row cursor-pointer"
            padding="24px"
            onClick={() => navigate(`/resume/${i.resume_id}`)}
          >
            <span className="leading-none">
              {i.student_info.school_number} {i.student_info.name}
            </span>
            <span className="leading-none text-gray-200">
              피드백 {i.feedback_list.length}개, 반영된 피드백{" "}
              {i.feedback_list.filter((i) => i.status === "CONFIRMED").length}개
            </span>
          </Box>
        ))}
      </div>
    </Layout>
  );
};
