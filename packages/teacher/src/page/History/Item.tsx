import { delHistory, histories } from "@/apis";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";

interface IProp {
  date: string;
  content: string;
  id: string;
}

export const Item = ({ date, content, id }: IProp) => {
  const { mutate: del } = delHistory();
  const { refetch: refetchHistory } = histories();

  return (
    <div className="flex gap-5 items-start">
      <Icon
        icon="ph:x-bold"
        color="white"
        className="cursor-pointer"
        onClick={() =>
          del(
            { id },
            {
              onSuccess: () => {
                toast.success("성공적으로 삭제되었습니다");
                refetchHistory();
              }
            }
          )
        }
      />
      <div className="flex gap-16 items-start w-[580px] justify-between">
        <span className="text-gray-300 text-body6">{date}</span>
        <span className="inline-block text-body6 w-[400px] break-words">
          {content}
        </span>
      </div>
    </div>
  );
};
