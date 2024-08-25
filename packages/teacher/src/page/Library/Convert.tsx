import { convertResume, library } from "@/apis";
import { Box, Button, Dropdown } from "ui";
import { Ternary } from "@configs/util";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { useState } from "react";

interface IProp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

let state: any = undefined;

export const Convert = ({ open, setOpen }: IProp) => {
  const [grade, setGrade] = useState(1);
  const { mutate: convert } = convertResume(state);
  const { refetch: refetchBooks } = library();

  const handleSuccess = () => {
    toast.update(state, {
      render: "성공적으로 변환되었습니다",
      type: "success",
      isLoading: false,
      autoClose: 2000
    });
    refetchBooks();
    setOpen(false);
  };

  return (
    <Ternary data={open}>
      <div className="absolute w-full h-full top-0 left-0 bg-[#000000a1] z-20 flex flex-center">
        <Box padding="20px" className="gap-5">
          <div className="w-full flex justify-between items-center">
            <span className="text-title3">변환</span>
            <Icon
              icon="ph:x-bold"
              color="white"
              className="cursor-pointer"
              width={24}
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="flex items-end gap-4">
            <Dropdown
              label="학년"
              size="medium"
              selected={grade + "학년"}
              selections={["1학년", "2학년", "3학년"]}
              onSelect={(data) => setGrade(Number(data.replace("학년", "")))}
              placeholder="학년을 선택하세요"
            />
            <Button
              size="extraSmall"
              color="light"
              className="h-[48px]"
              onClick={() => convert({ grade }, { onSuccess: handleSuccess })}
            >
              변환
            </Button>
          </div>
        </Box>
      </div>
    </Ternary>
  );
};
