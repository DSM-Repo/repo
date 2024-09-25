import { Dropdown, Text, Label, List } from "ui";
import { useResumeData } from "@/hooks";
import { majorList } from "@/apis";
import { Layout } from "./Layout";
import { Box } from "./Box";

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
  const { data: resume, setPartial } = useResumeData();
  const { data: majors } = majorList();
  const { writer } = resume;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPartial("writer", e.target.value, e.target.id);

  const handleDropChange = (data: string, name?: string) =>
    setPartial("writer", data, name as string);

  const handleClassChange = (data: string, name?: string) =>
    setPartial(
      "writer",
      { ...resume.writer.class_info, [name as string]: data },
      "class_info"
    );

  return (
    <Layout
      title="My information"
      subTitle="기본적인 정보에 대해 작성해 보세요."
    >
      <Box>
        <Text
          label="이름"
          placeholder="이름을 입력하세요"
          value={writer?.name}
          onChange={handleChangeInput}
          size="large"
          id="name"
          required
          disabled
        />
        <Label label="학번" size="full" required>
          <div className="w-full flex items-center justify-between">
            <Dropdown
              placeholder="학년"
              selected={(writer?.class_info?.grade || "") + "학년"}
              selections={studId.grade}
              onChange={handleClassChange}
              size="small"
              id="grade"
              required
              disabled
            />
            <Dropdown
              placeholder="반"
              selected={(writer?.class_info?.class_number || "") + "반"}
              selections={studId.class}
              onChange={handleClassChange}
              size="small"
              id="classNumber"
              required
              disabled
            />
            <Dropdown
              placeholder="번호"
              selected={(writer?.class_info?.number || "") + "번"}
              selections={studId.num}
              onChange={handleClassChange}
              size="small"
              id="number"
              required
              disabled
            />
          </div>
        </Label>
        <Dropdown
          label="전공"
          placeholder="전공을 선택하세요"
          selected={writer?.major}
          selections={majors?.data?.map((i) => i.id)}
          onChange={handleDropChange}
          size="large"
          required
          id="major"
        />
        <List
          label="Skillsets"
          placeholder="Skillset을 입력하세요"
          values={resume.writer.skill_set.map((i) => ({ id: i, name: i }))}
          onEnter={(item) => {
            setPartial(
              "writer",
              [...resume.writer.skill_set, item],
              "skill_set"
            );
          }}
          onDelete={(i) =>
            setPartial(
              "writer",
              resume.writer?.skill_set?.filter((j) => j !== i),
              "skill_set"
            )
          }
          required
          size="large"
          listSize="large"
          id="skills"
        />
        <Text
          label="이메일"
          placeholder="이메일을 입력하세요"
          value={writer?.email}
          onChange={handleChangeInput}
          size="large"
          required
          id="email"
        />
        <Text
          label="추가 URL"
          placeholder="포트폴리오나, 깃허브의 URL 등을 입력하세요"
          value={writer?.url}
          onChange={handleChangeInput}
          size="large"
          id="url"
        />
      </Box>
    </Layout>
  );
};
