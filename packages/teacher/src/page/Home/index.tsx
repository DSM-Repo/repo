import { Ternary, Map } from "@configs/util";
import { Dropdown, Layout } from "ui";
import { Button } from "./Button";
import { students } from "@/apis";
import { useState } from "react";

const type = {
  공개: "RELEASED",
  제출: "SUBMITTED",
  미제출: "ONGOING"
};

type filterType = {
  grade: "1" | "2" | "3" | "학년";
  class: "1" | "2" | "3" | "4" | "반";
  type: "공개" | "제출" | "미제출" | "문서 상태";
};

export const Home = () => {
  const [filter, setFilter] = useState<filterType>({
    grade: "학년",
    class: "반",
    type: "문서 상태"
  });

  const { data: resumes } = students();

  const filterF = () => {
    let item = resumes?.data;
    if (item) {
      if (filter.grade && filter.grade !== "학년") {
        item = item.filter(
          (i) => i.student_info.school_number.split("")[0] === filter.grade
        );
      }
      if (filter.class && filter.class !== "반") {
        item = item.filter(
          (i) => i.student_info.school_number.split("")[1] === filter.class
        );
      }
      if (filter.type && filter.type !== "문서 상태") {
        //@ts-expect-error
        item = item.filter((i) => i.status === type[filter.type]);
      }
      return item
        .sort(
          (i: any, j: any) =>
            i.student_info.school_number - j.student_info.school_number
        )
        .map((i) => ({
          documentId: i.resume_id,
          schoolNumber: i.student_info.school_number,
          name: i.student_info.name,
          feedbacks: i.feedback_list
        }));
    }
  };

  const item = filterF();
  const handleFilter = (data: any, name: string) =>
    setFilter((prev) => ({ ...prev, [name]: data }));

  return (
    <Layout
      title="레주메 관리"
      subTitle="학생들이 작성한 레주메들을 관리해보세요"
    >
      <div className="flex gap-5">
        <Dropdown
          size="extraSmall"
          placeholder="문서 상태"
          selected={filter.type}
          selections={["공개 가능", "제출", "미제출", "문사 상태"]}
          onSelect={handleFilter}
          id="type"
        />
        <Dropdown
          size="extraSmall"
          placeholder="학년"
          id="grade"
          selected={filter.grade}
          selections={["1", "2", "3", "학년"]}
          onSelect={handleFilter}
        />
        <Dropdown
          size="extraSmall"
          placeholder="반"
          id="class"
          selected={filter.class}
          selections={["1", "2", "3", "4", "반"]}
          onSelect={handleFilter}
        />
      </div>
      <Ternary data={item} onNull="데이터가 없습니다">
        <Map data={item} Tomap={Button} max={4} />
      </Ternary>
    </Layout>
  );
};
