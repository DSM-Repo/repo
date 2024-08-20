import { LeftArrow, RightArrow } from "@/icons";
import { useState } from "react";
import { Box, Input } from "ui";

export const FastMoveBox = () => {
    const [schoolNumber, setSchoolNumber] = useState<string>("");
    const name = "육기준"

    return (
      <Box className="gap-0 p-[20px] text-white font-bold">
        <p className="text-2xl">
          빠른 이동
        </p>
        <Input
          placeholder="학번으로 검색"
          onChange={(e) => setSchoolNumber(e.target.value)}
          size="small"
          value=""
        />
        <div className="flex justify-evenly w-full">
          <LeftArrow/>
          <p>{name}</p>
          <RightArrow/>
        </div>
      </Box>
    );
  };