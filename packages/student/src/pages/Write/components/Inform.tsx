import { Box, Dropdown, Input, Label } from "ui";
import { Layout } from "./Layout";
import { ChangeEvent, useState } from "react";

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
    "16",
  ],
};

const skills = [
  "Frontend Developer",
  "Backend Developer",
  "Game Developer",
  "Embedded Developer",
  "Android Developer",
  "AI Developer",
  "iOS Developer",
  "Security",
];

interface IData {
  name: string;
  major: string;
  grade: string;
  class: string;
  num: string;
  skills: string[];
  email: string;
  url: string;
}

export const Inform = () => {
  const [data, setData] = useState<IData>({
    name: "",
    major: "",
    grade: "",
    class: "",
    num: "",
    skills: [],
    email: "",
    url: "",
  });
  const [skill, setSkill] = useState("");

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleDropChange = (data: string, name?: string) => {
    setData((prev) => {
      return { ...prev, [name as string]: data };
    });
  };

  return (
    <Layout title="내 정보" subTitle="내 정보를 작성하세요">
      <Input
        label="이름"
        placeholder="이름을 입력하세요"
        value={data.name}
        onChange={handleChangeInput}
        size="large"
        id="name"
      />
      <Dropdown
        label="전공"
        placeholder="전공을 선택하세요"
        selected={data.major}
        selections={skills}
        onSelect={handleDropChange}
        size="large"
        id="major"
      />
      <Label label="학번" className="flex gap-8">
        <Dropdown
          placeholder="학년"
          selected={data.grade && data.grade + "학년"}
          selections={studId.grade}
          onSelect={handleDropChange}
          size="extraSmall"
          id="grade"
        />
        <Dropdown
          placeholder="반"
          selected={data.class && data.class + "반"}
          selections={studId.class}
          onSelect={handleDropChange}
          size="extraSmall"
          id="class"
        />
        <Dropdown
          placeholder="번호"
          selected={data.num && data.num + "번"}
          selections={studId.num}
          onSelect={handleDropChange}
          size="extraSmall"
          id="num"
        />
      </Label>
      <div className="col-flex gap-3 w-fit">
        <Input
          label="기술 스택"
          placeholder="기술 스택을 입력하세요"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && skill !== "") {
              setData({ ...data, skills: [...data.skills, skill] });
              setSkill("");
            }
          }}
          size="large"
          id="skills"
        />
        <div className="flex flex-wrap gap-2 w-[28rem]">
          {data.skills.map((i) => (
            <Box
              size={{
                width: "fit-content",
                height: "fit-content",
                padding: "8px 13px",
              }}
            >
              <span className="text-body7">{i}</span>
            </Box>
          ))}
        </div>
      </div>

      <Input
        label="이메일"
        placeholder="이메일을 입력하세요"
        value={data.email}
        onChange={handleChangeInput}
        size="large"
        id="email"
      />
      <Input
        label="추가 URL"
        placeholder="포트폴리오나, 깃허브의 URL 등을 입력하세요"
        value={data.url}
        onChange={handleChangeInput}
        size="large"
        id="url"
      />
    </Layout>
  );
};
