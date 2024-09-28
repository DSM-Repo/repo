import { Button, Date, Layout, Text, TextArea, Title, TitleLayout } from "ui";
import { history, historyAdd, historyDel } from "@/apis";
import { useState } from "react";
import { Api } from "@configs/type";
import { toast } from "react-toastify";

const defaultHistory = {
  date: "",
  content: ""
};

export const History = () => {
  const { data: historyData, refetch: historyRefetch } = history();
  const { mutate: addMutate } = historyAdd();
  const { mutate: delMutate } = historyDel();
  const [content, setContent] =
    useState<Api.History.HistoryAdd>(defaultHistory);

  return (
    <TitleLayout
      title="연혁 관리"
      subTitle="레주메북에 사용되는 연혁을 관리해 보세요"
    >
      <div className="flex gap-3">
        <Date
          placeholder="날짜를 입력하세요"
          id="date"
          onChange={(item) => setContent({ ...content, date: item })}
          onDelete={() => setContent({ ...content, date: "" })}
          value={content.date}
          size="medium"
        />
        <Text
          size="large"
          placeholder="연혁 내용을 입력하세요"
          onChange={({ target }) =>
            setContent({ ...content, content: target.value })
          }
          value={content.content}
        />
        <Button
          icon="Add"
          onClick={() =>
            addMutate(content, {
              onSuccess: () => {
                toast.success("성공적으로 추가되었습니다!");
                setContent(defaultHistory);
                historyRefetch();
              }
            })
          }
          size="fit"
        />
      </div>
      <div className="col-flex gap-3">
        {historyData?.data.map((i) => (
          <div className="flex gap-3">
            <Text
              size="medium"
              value={i.date}
              placeholder=""
              onChange={() => {}}
              disabled
            />
            <TextArea
              size="large"
              value={i.content}
              placeholder=""
              onChange={() => {}}
              rows={
                Math.ceil(i.content.length / 30) === 1
                  ? 1
                  : Math.ceil(i.content.length / 30) - 1
              }
              disabled
            />
            <Button
              icon="Trash"
              onClick={() =>
                delMutate(`/${i.id}`, {
                  onSuccess: () => {
                    toast.success("성공적으로 제거되었습니다");
                    historyRefetch();
                  }
                })
              }
              size="fit"
            />
          </div>
        ))}
      </div>
    </TitleLayout>
  );
};
