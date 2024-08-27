import { Logo, Bell } from "@/assets/newAssets";
import { Button } from "./Button";

export const Header = () => {
  return (
    <div className="w-[480px] flex justify-between p-[12px] items-center self-center bg-[#222222] border-[#333333] border-[1px] rounded-[100px]">
      <div className="flex px-[16px] py-[8px] bg-[#333333] rounded-[100px]">
        <Logo />
      </div>
      <div className="flex items-center gap-2 px-[12px]">
        <Button onClick={() => {}} icon="test" title="레주메 미리보기" />
      </div>
    </div>
  );
};
