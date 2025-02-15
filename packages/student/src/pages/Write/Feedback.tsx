import { feedbackConfirm, feedbackList } from "@/api";
import { path, useOptimistic } from "@configs/util";
import { toast } from "react-toastify";
import { Api } from "@configs/type";
import { Button, Title } from "ui";
import { useMemo } from "react";

interface IProp {
  name: string;
  type: string;
}

export const Feedback = ({ name, type }: IProp) => {
  const { data: feedbackData } = feedbackList();
  const [optFeedback, errFeedback, settleFeedback] = useOptimistic<Api.Feedback.Feedback>([path.feedback, ""], "feedback");
  const { mutate: mutateConfirm } = feedbackConfirm({
    onSuccess: () => toast.success("성공적으로 반영되었습니다"),
    onMutate: async (variable) => {
      const type = variable.split("=")[1];
      const filterdedData = feedbackData?.data.filter((item) => item.id !== type);
      return await optFeedback({ data: filterdedData, number_of_data: filterdedData?.length });
    },
    onError: (_, __, context) => errFeedback((context as any).feedback),
    onSettled: () => settleFeedback()
  });

  const feedbacks = useMemo(() => feedbackData?.data.filter((item) => item.type === type), [type, feedbackData]);

  return (
    <div className="col-flex gap-3 w-[400px] min-h-fit h-fit">
      <Title title="피드백" subTitle={`${name} 항목의 피드백입니다.`} />
      {!feedbacks?.length ? (
        <span className="text-[14px] text-gray-400">아직 피드백이 없습니다..</span>
      ) : (
        <div className="col-flex gap-6 w-full max-h-[600px] h-fit overflow-y-auto">
          {feedbacks?.map((item) => (
            <div className="col-flex gap-2 border-gray-700">
              <div className="w-full flex items-center justify-between">
                <Title title={name} titleSize="18px" subTitle={`${item.teacher_name} 선생님`} subTitleSize="14px" row />
                {item.rejected && <span className="text-red-400 text-[14px] font-light">거부됨</span>}
              </div>

              <span className="break-words text-[16px] font-light">{item.comment}</span>
              <Button padding="10px" icon="Check" size="full" direction="center" disabled={item.status !== "PENDING"} onClick={() => mutateConfirm(`?id=${item.id}`)}>
                피드백 반영
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
