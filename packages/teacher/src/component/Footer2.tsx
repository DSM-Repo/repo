import { FastMove, Feedback, LeftArrow, Out, RightArrow } from "@/icons";
import { HTMLAttributes, useState } from "react";
import { FeedBackBox } from "./FeedBackBox";
// import { ShareBox } from "./ShareBox";
import { FastMoveBox } from "./FastMoveBox";

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
  // const [isShareBoxVisible, setShareBoxVisible] = useState(false);
  const [isFeedBackBoxVisible, setFeedBackBoxVisible] = useState(false);
  const [isFastMoveBoxVixible, setFastMoveBoxVixible] = useState(false);

  // const toggleShareBox = () => {
  //   if (isFeedBackBoxVisible) {
  //     setFeedBackBoxVisible(false);
  //   }
  //   setShareBoxVisible(!isShareBoxVisible);
  // };

  const toggleFeedBackBox = () => {
    if (isFastMoveBoxVixible) {
      setFastMoveBoxVixible(false);
    }
    setFeedBackBoxVisible(!isFeedBackBoxVisible);
  };

  const toggleFastMoveBox = () => {
    if (isFeedBackBoxVisible) {
      setFeedBackBoxVisible(false);
    }
    setFastMoveBoxVixible(!isFastMoveBoxVixible)
  }

  return (
    <div
      {...props}
      className={`relative flex justify-around items-center w-full h-fit box-border bg-[#222222] border-t-[1px] border-t-[#333333] py-3 ${props.className}`}
    >
      {/* Conditionally render the FastMoveBox */}
      {isFastMoveBoxVixible && (
        <div className="absolute bottom-[100%] ml-[19%] mb-2">
          <FastMoveBox/>
        </div>
      )}
      {/* Conditionally render the ShareBox */}
      {/* {isShareBoxVisible && (
        <div className="absolute bottom-[100%] ml-[19%] mb-2">
          <ShareBox />
        </div>
      )} */}

      {/* Conditionally render the FeedBackBox */}
      {isFeedBackBoxVisible && (
        <div className="absolute bottom-[100%] ml-[25%] mb-2">
          <FeedBackBox />
        </div>
      )}

      {/* Left Section */}
      <div className="flex items-center space-x-4 w-[200px] justify-evenly text-white">
        {studentId} {studentName}{" "}
        <div className="text-[#C5C5C5]">
          {currentPage}~{totalPages} Page
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 mr-[100px] pr-4">
        <div
          className="flex items-center text-white cursor-pointer"
          onClick={toggleFastMoveBox}
        >
          빠른 이동 <FastMove className="ml-2" />
        </div>
        {/* <div
          className="flex items-center text-white cursor-pointer"
          onClick={toggleShareBox}
        >
          공유 <Share className="ml-2" />
        </div> */}
        <div
          className="flex items-center text-white cursor-pointer"
          onClick={toggleFeedBackBox}
        >
          피드백 <Feedback className="ml-2" />
        </div>
        <div className="flex items-center text-white cursor-pointer">
          나가기 <Out className="ml-2" />
        </div>
        <div className="flex items-center text-white cursor-pointer ml-6">
          <LeftArrow className="mr-2" /> 이전
        </div>
        <div className="flex items-center text-white cursor-pointer">
          다음 <RightArrow className="ml-2" />
        </div>
      </div>
    </div>
  );
};
