import { useState } from "react";
import { Box, Dropdown, Input } from "ui";

export const FeedBackBox = () => {
  const [feedback, setFeedback] = useState<string>(""); // 빈 문자열로 초기화하여 null 방지
  const [comment, setComment] = useState<string>(""); // 피드백 내용도 빈 문자열로 초기화

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('No access token found');
      return;
    }

    const payload = {
      comment: comment,
      element_id: feedback, // feedback 값을 element_id로 사용
      document_id: "your-document-id", // 실제 document_id로 대체
    };

    try {
      const response = await fetch('https://your-api-endpoint.com/feedback', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setFeedback(""); // 제출 후 feedback 상태 초기화
        setComment(""); // 제출 후 comment 상태 초기화
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (err) {
      console.log("error");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // 기본 Enter 동작 방지
      handleSubmit(); // handleSubmit 함수 호출
    }
  };

  return (
    <Box className="gap-0 w-[520px] h-[255px] p-[20px] text-white font-bold flex flex-col">
      <p className="text-2xl mb-[10px]">피드백</p>
      <p className="text-base mb-[12px]">항목</p>
      <Dropdown
        className="mb-[10px]"
        size="large"
        placeholder="피드백할 항목을 선택해주세요"
        selected={feedback || ""} // feedback이 항상 문자열로 전달되도록 설정
        selections={['한 줄 소개', '자기소개', '기술스택', '자격증 & 수상', '활동', '프로젝트']}
        onSelect={(data) => setFeedback(data)} // 선택된 값을 feedback 상태에 저장
      />
      <div className="flex flex-col">
        <label className="text-white mb-[12px]">
          내용
          <span className="text-[#999999]"> - Enter를 누르면 제출됩니다</span>
        </label>
        <Input
          size="large"
          placeholder="피드백 내용을 입력해주세요"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={handleKeyDown} // Enter 키 누를 때 handleSubmit 호출
        />
      </div>
    </Box>
  );
};
