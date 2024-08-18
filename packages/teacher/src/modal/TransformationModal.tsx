import { X } from "@/icons";
import { instance } from "@configs/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, PercentageBar } from "ui";

interface TransformationModalProps {
  onClose: () => void;
  onGradeSelect: (grade: number) => void;
  selectedGrade: number | null;
}

export const TransformationModal = ({ onClose, onGradeSelect }: TransformationModalProps) => {
  const [grade, setGrade] = useState<string>("");
  const [progress, setProgress] = useState<number>(0); // Progress state
  const navigate = useNavigate();

  const handleYearSelect = (selected: string) => {
    setGrade(selected);
    onGradeSelect(Number(selected.replace("학년", "").trim()));
  };

  const handleTransform = async () => {
    if (!grade) {
      alert("학년을 선택하세요");
      return;
    }

    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      console.error("No access token found");
      navigate(""); // Redirect if no token found
      return;
    }

    try {
      // Simulate progress (for demonstration purposes)
      setProgress(0);

      const response = await instance.post(
        "https://prod-server.xquare.app/whopper/library",
        {
          grade: String,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Simulate progress update
      setProgress(0);

      const { pdf_url, toc_json } = response.data;
      console.log("PDF URL:", pdf_url);
      console.log("TOC JSON:", toc_json);

      setProgress(100); // Progress reaches 100% on success
      alert("PDF and TOC retrieved successfully!");

    } catch (error) {
      console.error("Failed to start transformation", error);
      alert("Transformation failed!");
      setProgress(0); // Reset progress on failure
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="w-[669px] h-[260px] bg-[#212121] p-6 rounded-lg relative z-10">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={onClose}
        >
          <X />
        </button>

        {/* Title */}
        <h1 className="text-white text-2xl font-semibold mb-4">변환</h1>
        <p className="text-white text-1 font-semibold mb-4">학년</p>
        {/* Dropdown */}
        <div className="flex items-center mb-4">
          <Dropdown
            size="large"
            placeholder="학년을 선택하세요"
            selected={grade}
            selections={["1학년", "2학년", "3학년"]}
            onSelect={handleYearSelect}
          />
          <Button
            size="small"
            onClick={handleTransform}
            className="ml-4 bg-[#454545]"
          >
            변환 시작
          </Button>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <PercentageBar
            title={{ title: "진행도", subTitle: `변환 시작 버튼을 눌러주세요` }}
            progress={progress}
            color="Green"
            type="Full"
          />
        </div>
      </div>
    </div>
  );
};
