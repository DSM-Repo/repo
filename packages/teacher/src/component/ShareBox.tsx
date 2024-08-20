import { useState } from "react";
import { Box, Dropdown } from "ui";

export const ShareBox = () => {
    const [share, setShare] = useState<string>("");
    return (
      <Box className="gap-0 w-[520px] h-[255px] p-[20px] text-white font-bold flex flex-col">
        <p className="text-2xl mb-[10px]">
          공유
        </p>
        <p className="text-base mb-[12px]">
          공유 여부
        </p>
        <Dropdown
          className="mb-[10px]"
          size="large"
          placeholder="공유"
          selected={share !== null ? share.toString() : ''}
          selections={['공유', '미공유']}
          onSelect={(data) => {
              if (data) setShare(String(data));
          }}
        />
        <p className="text-base mb-[12px]">
          공유 Url
        </p>
        <div className="bg-[#6C6C6C] w-[447px] h-[46px] rounded-md flex pl-[24px] items-center">
          https://share.dsm-repo.com/student/(uuid)
        </div>
      </Box>
    );
  };