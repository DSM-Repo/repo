import { noticeCreate, noticeDelete, noticeList, teacher } from "@/apis";
import { ChangeEvent, useRef, useState } from "react";
import { instance } from "@configs/util";
import { Title, Box, Icon, Text, TextArea, Button, HeaderProvider } from "ui";
import { useMutation } from "@tanstack/react-query";
import { Api } from "@configs/type";

const defaultContent = { title: "", content: "" };

export const Notice = () => {
  const [opened, setOpened] = useState<string | null>(null);
  const [content, setContent] = useState(defaultContent);
  const { data, refetch } = noticeList();
  const { data: userData } = teacher();
  const { mutate: del } = noticeDelete();
  const { mutate: _edit } = useMutation({
    mutationFn: ({ path, items }: { path: string; items: Api.Notice.AddNotice }) => instance.patch(`/notice/${path}`, items),
    onSuccess: () => {
      refetch();
      setContent(defaultContent);
    }
  });
  const { mutate: add } = noticeCreate();
  const [edit, setEdit] = useState<undefined | string>(undefined);

  const height = useRef<Record<string, number>>({});

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setContent({ ...content, [e.target.id]: e.target.value });
  };

  const handleChangeEdit = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setContent({ ...content, [target.id]: target.value });

  return (
    <HeaderProvider>
      {edit && (
        <div className="absolute w-full h-full bg-[#000000AA] flex flex-center left-0 top-0 z-50">
          <Box width="fit-content" height="fit-content" className="gap-4">
            <div className="w-full items-center justify-between flex">
              <span className="text-body1">수정</span>
              <Icon
                name="Close"
                className="cursor-pointer"
                onClick={() => {
                  setEdit(undefined);
                  setContent(defaultContent);
                }}
              />
            </div>
            <Text size="large" placeholder="제목" id="title" value={content.title} onChange={handleChangeEdit} />
            <TextArea size="large" placeholder="내용" id="content" value={content.content} onChange={handleChangeEdit} />
            <Button
              size="large"
              onClick={() =>
                _edit(
                  { path: `${edit}`, items: content },
                  {
                    onSuccess: () => {
                      setEdit(undefined);
                      setContent(defaultContent);
                      refetch();
                    }
                  }
                )
              }
              direction="center"
              icon="Check"
            >
              수정 완료
            </Button>
          </Box>
        </div>
      )}
      <div className="col-flex w-full px-[60px] py-6 gap-5">
        <Title title="공지" subTitle="선생님이나 관리자가 작성한 공지를 확인해 보세요" />
        <Box
          height={opened === "write" ? "412px" : "60px"}
          round="12px"
          padding="16px"
          className="overflow-hidden gap-4 cursor-pointer transition-all duration-300"
          onClick={({ target }) => {
            const { tagName } = target as HTMLElement;
            if (tagName === "DIV" || tagName === "SPAN" || tagName === "path" || tagName === "svg") {
              setOpened(opened === "write" ? null : "write");
            }
          }}
        >
          <div className="w-full flex justify-center items-center gap-3">
            <Icon name="Add" size={28} />
            <span className="text-body1">공지사항 추가</span>
          </div>
          <Text onChange={handleChange} id="title" value={content.title} placeholder="제목을 입력하세요" size="full" />
          <TextArea id="content" onChange={handleChange} value={content.content} placeholder="내용을 입력하세요" rows={10} size="full" />
          <Button
            onClick={() =>
              add(content, {
                onSuccess: () => {
                  refetch();
                  setContent(defaultContent);
                }
              })
            }
            size="full"
            icon="Add"
            direction="center"
          >
            추가
          </Button>
        </Box>
        {data?.data
          .sort((i, j) => new Date(j.created_at).getTime() - new Date(i.created_at).getTime())
          .map((i) => (
            <Box
              height={opened === i.id ? height.current[i.id] + "px" : "60px"}
              round="12px"
              padding="16px"
              className="overflow-hidden gap-4 cursor-pointer transition-all duration-300"
              onClick={({ target }) => {
                const { tagName } = target as HTMLElement;
                if (tagName === "path" || tagName === "svg" || tagName === "INPUT" || tagName === "TEXTAREA") return;
                setOpened(opened === i.id ? null : i.id);
              }}
              ref={(item: HTMLElement) => {
                if (item) {
                  height.current[i.id] = (item.childNodes[1] as HTMLElement).clientHeight + 76;
                }
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-body1">{i.title}</span>
                  <span className="text-body4 text-gray-200">
                    {i.created_at.split("T")[0]} | {i.writer_name}
                  </span>
                  {i.writer_name === userData?.name && (
                    <>
                      <Icon
                        name="Edit"
                        className="pointable"
                        onClick={() => {
                          setEdit(i.id);
                          setContent({ title: i.title, content: i.content });
                          refetch();
                        }}
                      />
                      {i.id === edit && <Icon name="Check" className="pointable" onClick={() => setEdit(undefined)} />}
                      <Icon name="Trash" className="pointable" onClick={() => del(`/${i.id}`, { onSuccess: () => refetch() })} />
                    </>
                  )}
                </div>
                <Icon name="Arrow" rotate={opened === i.id ? "up" : "down"} size={28} />
              </div>
              <span className="break-words whitespace-pre-wrap">{i.content}</span>
            </Box>
          ))}
      </div>
    </HeaderProvider>
  );
};
