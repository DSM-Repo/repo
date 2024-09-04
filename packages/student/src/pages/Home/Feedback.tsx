import { useNavigate } from "react-router-dom";

interface IProp {
  content: string;
  teacher: string;
  type: "WRITER_INFO" | "INTRODUCE" | "ACTIVITY" | "ACHIEVEMENT" | "PROJECT";
  confirm: () => void;
}

const types = {
  WRITER_INFO: ["내 정보", "1"],
  INTRODUCE: ["자기소개", "2"],
  ACTIVITY: ["활동", "5"],
  ACHIEVEMENT: ["자격증 & 수상", "4"],
  PROJECT: ["프로젝트", "3"]
};

export const Feedback = ({ content, teacher, type, confirm }: IProp) => {
  const navigate = useNavigate();

  return (
    <div className="col-flex gap-4 h-fit">
      <span className="break-words text-[16px] font-light">{content}</span>
      <div className="flex justify-between items-center w-full">
        <span className="text-gray-100">{teacher} 선생님</span>
        <div className="flex items-center gap-2">
          <button
            className="px-4 py-2 border-[1px] border-gray-600 bg-gray-700 rounded-[12px] text-[15px] text-normal text-gray-50"
            onClick={() => navigate(`/write/${types[type][1]}`)}
          >
            {types[type][0]}
          </button>
          <button
            className="px-4 py-2 border-[1px] border-green-700 bg-green-800 rounded-[12px] text-[15px] text-normal text-green-400"
            onClick={confirm}
          >
            피드백 반영
          </button>
        </div>
      </div>
    </div>
  );
};
