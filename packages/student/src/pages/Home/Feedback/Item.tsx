import { useQueryClient } from "@tanstack/react-query";
import { path, useOptimistic } from "@configs/util";
import { useNavigate } from "react-router-dom";
import { Document, Api } from "@configs/type";
import { toast } from "react-toastify";
import { feedbackConfirm } from "@/api";

interface IProp {
  comment: string;
  teacher_name: string;
  type: Document.sectionType;
  id: string;
  index: number;
}

const types = {
  WRITER_INFO: ["내 정보", "inform"],
  INTRODUCE: ["자기소개", "introduce"],
  ACTIVITY: ["활동", "projects"],
  ACHIEVEMENT: ["자격증 & 수상", "certifications"],
  PROJECT: ["프로젝트", "activities"]
};

export const Item = ({ comment, teacher_name, type, id, index }: IProp) => {
  const navigate = useNavigate();
  const [optFeedback, errFeedback, settleFeedback] = useOptimistic([path.feedback, ""], "feedback");
  const client = useQueryClient();
  const { mutate: mutateConfirm } = feedbackConfirm({
    onMutate: async (variable) => {
      const id = variable.split("=")[1];
      const { data } = client.getQueriesData({ queryKey: [path.feedback, ""] })[0][1] as Api.Feedback.Feedback;
      toast.success("성공적으로 반영되었습니다!");
      return await optFeedback({ data: data.filter((item) => item.id !== id) });
    },
    onError: errFeedback,
    onSettled: settleFeedback
  });

  return (
    <div className={`col-flex gap-2 h-fit p-5 ${index !== 0 && "border-t-[1px] border-[#515151]"}`}>
      <span className="text-[20px] font-bold">{types[type][0]}</span>
      <span className="break-words text-[16px] font-light">{comment}</span>
      <div className="flex justify-between items-center w-full">
        <span className="text-gray-100 text-[16px]">{teacher_name} 선생님</span>
        <div className="flex items-center gap-2">
          <button
            className="px-4 py-2 border-[1px] border-gray-600 bg-gray-700 rounded-[12px] text-[15px] text-normal text-gray-50"
            onClick={() => navigate(`/write/${types[type][1]}`)}
            title="클릭시 해당 항목으로 이동합니다"
          >
            {types[type][0]}
          </button>
          <button className="px-4 py-2 border-[1px] border-green-700 bg-green-800 rounded-[12px] text-[15px] text-normal text-green-400" onClick={() => mutateConfirm(`?id=${id}`)}>
            피드백 반영
          </button>
        </div>
      </div>
    </div>
  );
};
