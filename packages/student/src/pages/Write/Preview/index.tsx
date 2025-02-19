import { Control, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";
import { Document } from "@configs/type";
import { Box, Resume } from "ui";
import { Header } from "./Header";

export type setType = React.Dispatch<React.SetStateAction<{ projects: number; inform: number }>>;

interface IProp {
  control: Control<Document.Resume, any>;
}

export const Preview = ({ control }: IProp) => {
  const [index, setIndex] = useState(1);
  const [max, setMax] = useState({
    projects: 0,
    inform: 1
  });
  const length = Object.values(max).reduce((acc, prev) => acc + prev);

  const data = useWatch({ control });

  useEffect(() => {
    if (length < index) {
      setIndex(index - (index - length));
    }
  }, [max]);

  const handlePageMove = (target: number) => {
    const result = target + index;
    if (result > 0 && result <= length) {
      setIndex(result);
    }
  };

  return (
    <Box width="100%" height="100%" round="0" padding="10px" className="max-w-[815px] gap-[10px] border-0 overflow-hidden border-l-gray-700">
      <Header current={index} length={length} onPageMove={handlePageMove} />
      <div className="w-full h-full overflow-hidden flex rounded-[8px] bg-white">
        <div className="flex w-full relative" style={{ transform: `translateX(-${100 * (index - 1)}%)` }}>
          <Resume data={data as Document.Resume} setMax={setMax} />
        </div>
      </div>
    </Box>
  );
};
