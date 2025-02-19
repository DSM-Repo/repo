import { feedbackList } from "@/api";
import { Item } from "./Item";

export const Feedback = () => {
  const { data: feedbackData } = feedbackList();

  return (
    <div className={`w-[480px] transition-all duration-200 flex h-full flex-col bg-gray-800 border-l-[1px] border-gray-700 overflow-y-auto`}>
      <div className="px-4 h-14 border-b-[1px] border-gray-700 flex items-center flex-shrink-0">
        <span className="text-[16px] font-semibold leading-none">피드백 목록</span>
      </div>
      <div className="w-full flex col-flex overflow-auto">
        {feedbackData?.number_of_data !== 0 ? (
          feedbackData?.data.map((item, index) => <Item {...item} index={index} key={item.id} />)
        ) : (
          <span className="p-5 text-[15px] text-gray-200">아직 피드백이 없습니다...</span>
        )}
      </div>
    </div>
  );
};
