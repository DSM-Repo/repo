import { useRef, useState } from "react";
import { Layout, Title, Box, Icon } from "ui";

const data = [
  {
    title: "제목",
    date: "2024. 09. 19",
    writer: "김윤이 선생님",
    content: "내용내용내용용",
    element_id: "asdjflkq-adgfwebf-afdqefvfa-bgfdvcx",
    read: true
  },
  {
    title: "제목333",
    date: "2024. 09. 20",
    writer: "관리자",
    content: "내용내용내용용65436",
    element_id: "134bfqf-234dsbv1-32rsvqbr-175kiopl",
    read: true
  },
  {
    title: "제목4444",
    date: "2024. 09. 18",
    writer: "관리자",
    content: "내용내용내용용324435",
    element_id: "123rtgee-32r4treg-reg32r-13refw3",
    read: true
  },
  {
    title: "제목555555",
    date: "2024. 09. 01",
    writer: "일이삼 선생님",
    content: "내용내용내용용123123",
    element_id: "132r423-342r134-2341433-5hergwfds",
    read: true
  },
  {
    title: "제목555555",
    date: "2024. 09. 01",
    writer: "일이삼 선생님",
    content: "내용내용내용용123123",
    element_id: "132r423-342r134-2341433-5hergwfdfdssdfs",
    read: false
  },
  {
    title: "제목555555",
    date: "2024. 09. 01",
    writer: "일이삼 선생님",
    content: "내용내용내용용123123",
    element_id: "132r423-342r134-2341433-5hergwfdaaaas",
    read: true
  },
  {
    title: "제목555555",
    date: "2024. 09. 01",
    writer: "일이삼 선생님",
    content: "내용내용내용용123123",
    element_id: "132r423-342r134-2341433-5hergwfddddds",
    read: false
  },
  {
    title: "제목555555",
    date: "2024. 09. 01",
    writer: "일이삼 선생님",
    content:
      "내용내용내용용123123\ntesttest\nestesljktsdajflasjdfals;fjaslkd;jfaslkd;jasdlk;adjljalsdjfasd;jasl;dfkjaslkdf;ajs;flasjkd;kasfj;\ndfs",
    element_id: "132r423-342r134-2341433-5hergwfdsadfafds",
    read: false
  }
];

export const Notice = () => {
  const [opened, setOpened] = useState<string | null>(null);
  const height = useRef<Record<string, number>>({});

  return (
    <Layout>
      <div className="col-flex w-full px-[60px] py-6 gap-5">
        <Title
          title="공지"
          subTitle="선생님이나 관리자가 작성한 공지를 확인해 보세요"
        />
        {data?.map((i) => (
          <Box
            height={
              opened === i.element_id
                ? height.current[i.element_id] + "px"
                : "60px"
            }
            round="12px"
            padding="16px"
            className="overflow-hidden gap-4 cursor-pointer transition-all duration-300"
            onClick={() => {
              setOpened(opened === i.element_id ? null : i.element_id);
            }}
            ref={(item: HTMLElement) => {
              if (item && !!!height.current[i.element_id]) {
                height.current[i.element_id] =
                  (item.childNodes[1] as HTMLElement).clientHeight + 76;
              }
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-body1">{i.title}</span>
                <span className="text-body4 text-gray-200">
                  {i.date} | {i.writer}
                </span>
                {!i.read && (
                  <span className="text-body5 text-green-400">안 읽음</span>
                )}
              </div>
              <Icon
                name="Arrow"
                rotate={opened === i.element_id ? "up" : "down"}
                size={28}
              />
            </div>
            <span className="break-words whitespace-pre-wrap">{i.content}</span>
          </Box>
        ))}
      </div>
    </Layout>
  );
};
