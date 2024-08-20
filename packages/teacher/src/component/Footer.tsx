import { Feedback, LeftArrow, RightArrow } from "@/icons";
import { HTMLAttributes, useState } from "react";
import { FeedBackBox } from "./FeedBackBox";

interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  studentId: string;
  studentName: string;
  currentPage: number;
  totalPages: number;
}

export const Footer = ({
  studentId = "2114",
  studentName = "이태윤",
  currentPage = 1,
  totalPages = 2,
  ...props
}: FooterProps) => {

  const [isFeedBackBoxVisible, setFeedBackBoxVisible] = useState(false);

  const toggleFeedBackBox = () => {
    setFeedBackBoxVisible(!isFeedBackBoxVisible);
  };


  return (
    <div
      {...props}
      className={`relative flex justify-between items-center w-full h-fit box-border bg-[#222222] border-t-[1px] border-t-[#333333] py-3 ${props.className}`}
    >

      {/* Conditionally render the FeedBackBox */}
      {isFeedBackBoxVisible && (
        <div className="absolute bottom-[100%] ml-[25%] mb-2">
          <FeedBackBox />
        </div>
      )}

      {/* Left Section */}
      <div className="flex items-center space-x-4 w-[200px] justify-evenly text-white ml-28">
        {studentId} {studentName}{" "}
        <div className="text-[#C5C5C5]">
          {currentPage}~{totalPages} Page
        </div>
      </div>

      {/* Right Section */}
      <div className="flex mr-28">
        <div
          className="flex items-center text-white cursor-pointer"
          onClick={toggleFeedBackBox}
        >
          피드백 <Feedback className="ml-2" />
        </div>
        <div className="flex items-center text-white cursor-pointer ml-6">
          <LeftArrow className="mr-3" /> 이전
        </div>
        <div className="flex items-center text-white cursor-pointer ml-6">
            다음 <RightArrow className="ml-3" />
        </div>
      </div>
    </div>
  );
};
