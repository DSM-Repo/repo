import { Button } from "../../../ui/src/atoms/Button";

export const Library = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title Section */}
      <h1 className="text-white text-3xl font-bold">도서관</h1>
      <h2 className="text-customSubHeaderText text-2xl font-bold">
        지금까지 작성된 레주메북들을 읽어보세요
      </h2>

      {/* Content Section */}
      <div className="w-[1000px] h-[101px] bg-libraryBackground flex justify-between items-center px-4">
        <span className="text-white text-xl font-bold">2024 2학년 10기</span>
        <Button size="small" color="dark" onClick={() => alert("공유 버튼 클릭됨!")}>
          공유
        </Button>
      </div>

      {/* Add Box Section */}
      <div className="w-[1000px] h-[101px] bg-libraryBackground flex items-center justify-center">
        {/* Plus Button */}
        <div className="w-[33px] h-[33px] bg-#FFFFFF"/>
      </div>
    </div>
  );
};
