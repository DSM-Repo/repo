import { feedbackListType } from "@/apis";
import { Box, Profile } from "ui";

interface IProp {
  documentId: string;
  schoolNumber: string;
  name: string;
  feedbacks: feedbackListType[];
}

const navigate = (id: string) =>
  window.location.replace(
    `${process.env.VITE_APP_URL_MAIN}/viewer/teacher/${id}?prev=${window.location.href}`
  );

export const Button = ({
  documentId,
  schoolNumber,
  name,
  feedbacks
}: IProp) => {
  return (
    <Box width="100%" padding="20px">
      <div
        className="flex items-center space-x-4 cursor-pointer"
        onClick={() => navigate(documentId)}
      >
        <Profile size={32} />
        <div className="flex items-center gap-3">
          <span className="text-body4">
            {schoolNumber} {name}
          </span>
          <span className="text-body5 text-gray-300">
            피드백 {feedbacks.length}개, 반영된 피드백{" "}
            {feedbacks.filter((i) => i.status === "CONFIRMED").length}개
          </span>
        </div>
      </div>
    </Box>
  );
};
