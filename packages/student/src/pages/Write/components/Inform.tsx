import { Dropdown, Input, Label } from "ui";
import { Layout } from "./Layout";

export const Inform = () => {
  return (
    <Layout title="내 정보" subTitle="내 정보를 작성하세요">
      <Input
        label="이름"
        placeholder="이름을 입력하세요"
        value=""
        onChange={() => {}}
        size="large"
      />
      <Input
        label="전공"
        placeholder="전공을 입력하세요"
        value=""
        onChange={() => {}}
        size="large"
      />
      <Label label="학번" className="flex gap-8">
        <Dropdown
          placeholder="학년"
          selected=""
          selections={["1", "2", "3"]}
          onSelect={() => {}}
          size="extraSmall"
        />
        <Dropdown
          placeholder="반"
          selected=""
          selections={["1", "2", "3", "4"]}
          onSelect={() => {}}
          size="extraSmall"
        />
        <Dropdown
          placeholder="번호"
          selected=""
          selections={[
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
          ]}
          onSelect={() => {}}
          size="extraSmall"
        />
      </Label>
      <Input
        label="기술 스택"
        placeholder="기술 스택을 입력하세요"
        value=""
        onChange={() => {}}
        size="large"
      />
      <Input
        label="이메일"
        placeholder="이메일을 입력하세요"
        value=""
        onChange={() => {}}
        size="large"
      />
      <Input
        label="추가 URL"
        placeholder="포트폴리오나, 깃허브의 URL 등을 입력하세요"
        value=""
        onChange={() => {}}
        size="large"
      />
    </Layout>
  );
};
