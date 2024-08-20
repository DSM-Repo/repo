import { useResumeData } from "@/hooks/useResumeData";
import { Box, Dropdown, Input, Label } from "ui";
import { dataType } from "@/apis/common/types";
import { ChangeEvent, useState } from "react";
import { Icon } from "@iconify/react";
import { major } from "@/apis/common";
import { Layout } from "./Layout";

const studId = {
  grade: ["1", "2", "3"],
  class: ["1", "2", "3", "4"],
  num: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16"
  ]
};

export const Inform = () => {
  const [skill, setSkill] = useState("");
  const { data: resume, setPartial } = useResumeData();
  const { data: majors } = major();
  const { writer } = resume;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
    setPartial("writer", e.target.value, e.target.id);

  const handleDropChange = (data: string, name: string) =>
    setPartial("writer", data, name);

  const handleClassChange = (data: string, name: string) =>
    setPartial(
      "writer",
      { ...resume.writer.class_info, [name]: data },
      "class_info"
    );

  return (
    <Layout title="내 정보" subTitle="내 정보를 작성하세요">
      <Input
        label="이름"
        placeholder="이름을 입력하세요"
        value={writer?.name}
        onChange={handleChangeInput}
        size="large"
        id="name"
        disabled
      />
      <Label label="학번" className="flex gap-8">
        <Dropdown
          placeholder="학년"
          selected={(writer?.class_info?.grade || "") + "학년"}
          selections={studId.grade}
          onSelect={handleClassChange}
          size="extraSmall"
          id="grade"
          disabled
        />
        <Dropdown
          placeholder="반"
          selected={(writer?.class_info?.class_number || "") + "반"}
          selections={studId.class}
          onSelect={handleClassChange}
          size="extraSmall"
          id="classNumber"
          disabled
        />
        <Dropdown
          placeholder="번호"
          selected={(writer?.class_info?.number || "") + "번"}
          selections={studId.num}
          onSelect={handleClassChange}
          size="extraSmall"
          id="number"
          disabled
        />
      </Label>
      <Dropdown
        label="전공"
        placeholder="전공을 선택하세요"
        selected={writer?.major_name}
        selections={majors ? majors?.data.map((i: dataType) => i.name) : []}
        onSelect={handleDropChange}
        size="large"
        id="major_name"
      />
      <div className="col-flex gap-3 w-fit">
        <Input
          label="기술 스택"
          placeholder="기술 스택을 입력하세요"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              skill !== "" &&
              !e.nativeEvent.isComposing
            ) {
              setPartial(
                "writer",
                [...resume.writer.skill_set, skill],
                "skill_set"
              );
              setSkill("");
            }
          }}
          size="large"
          id="skills"
        />
        <div className="flex flex-wrap gap-2 w-[28rem]">
          {writer?.skill_set?.map((i, j) => (
            <Box
              padding="8px 13px"
              className="flex flex-row items-center gap-2"
              key={j}
            >
              <span className="text-body7">{i}</span>
              <Icon
                icon="ph:x-bold"
                color="white"
                className="cursor-pointer"
                onClick={() =>
                  setPartial(
                    "writer",
                    resume.writer?.skill_set?.filter((j) => j !== i),
                    "skill_set"
                  )
                }
              />
            </Box>
          ))}
        </div>
      </div>

      <Input
        label="이메일"
        placeholder="이메일을 입력하세요"
        value={writer?.email}
        onChange={handleChangeInput}
        size="large"
        id="email"
      />
      <Input
        label="추가 URL"
        placeholder="포트폴리오나, 깃허브의 URL 등을 입력하세요"
        value={writer?.url}
        onChange={handleChangeInput}
        size="large"
        id="url"
      />
    </Layout>
  );
};
