import { Dropdown } from "../../../ui/src/atoms/Dropdown";
import { Button } from "../../../ui/src/atoms/Button";

export const TransformationModal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center">
      <div className="w-[669px] h-[252px] bg-[#212121] p-6 rounded-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => console.log("X")}
        >
          <div className="w-[24px] h-[24px] bg-#FFFFFF" />
        </button>
        
        {/* Title */}
        <h1 className="text-white text-2xl font-semibold mb-4">변환</h1>
        
        {/* Dropdown */}
        <div className="flex items-center mb-4">
          <Dropdown
            size="large"
            placeholder="학년을 선택하세요"
            selected=""
            selections={["1학년", "2학년", "3학년"]}
            onSelect={(selected) => console.log(selected)}
          />
          <Button
            size="small"
            color="dark"
            onClick={() => alert("변환 시작 버튼 클릭됨!")}
            className="ml-4"
          >
            변환 시작
          </Button>
        </div>
        
        {/* Progress */}
        <div className="mb-4">
          <p className="text-white text-xl font-semibold mb-1">진행도</p>
          <p className="text-customGray text-base font-semibold">- 변환 시작 버튼을 눌러주세요</p>
          <div className="w-[625px] h-[30px] bg-[#454545] rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};
