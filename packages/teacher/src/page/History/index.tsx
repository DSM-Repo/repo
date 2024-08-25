import { histories as _histories, addHistory } from "@/apis";
import { Button, Calander, Input, Layout } from "ui";
import { toast } from "react-toastify";
import { Map } from "@configs/util";
import { useState } from "react";
import { Item } from "./Item";

const defaultData = {
  content: "",
  date: ""
};

export const History = () => {
  const [history, setHistory] = useState(defaultData);

  const { data: histories, refetch: refetchHistories } = _histories();
  const { mutate: add } = addHistory();

  const handleAdd = () => {
    if (history.content && history.date) {
      add(history, {
        onSuccess: () => {
          toast.success("성공적으로 추가되었습니다");
          setHistory(defaultData);
          refetchHistories();
        }
      });
    }
  };

  return (
    <Layout
      title="연혁 관리"
      subTitle="목차에 표기되는 연혁 목록을 관리해보세요"
    >
      <div className="w-full flex gap-3">
        <Calander
          value={history.date}
          onChange={(_, date) => setHistory((prev) => ({ ...prev, date }))}
          placeholder="연혁의 날짜를 입력하세요"
          onDelete={() => setHistory((prev) => ({ ...prev, date: "" }))}
          size="medium"
        />
        <Input
          placeholder="연혁의 내용을 입력하세요"
          value={history.content}
          onChange={(e) =>
            setHistory((prev) => ({ ...prev, content: e.target.value }))
          }
          onKeyDown={() => {}}
          size="full"
        />
        <Button
          size="medium"
          className="h-[48px_!important]"
          color="light"
          onClick={handleAdd}
        >
          추가
        </Button>
      </div>
      <Map data={histories || []} Tomap={Item} max={10} />
    </Layout>
  );
};
