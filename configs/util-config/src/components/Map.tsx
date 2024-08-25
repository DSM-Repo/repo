import { useState } from "react";
import { Ternary } from "./Ternary";
import { Icon } from "@iconify/react";

interface IProp<T> {
  data?: T[];
  Tomap: React.ComponentType<T>;
  max: number;
}

export const Map = <T,>({ data, Tomap, max = 5 }: IProp<T>) => {
  const [page, setPage] = useState(1);

  const length = Math.ceil(data.length / max);
  const items = data.slice((page - 1) * max, page * max + 1);

  const handleClick = (page: number) => {
    if (page < 1 || page > length) return;
    setPage(page);
  };

  return (
    <div className="size-full h-full flex flex-col justify-between">
      <div className="col-flex gap-3">
        {items.map((item, index) => (
          <Tomap {...item} key={index} />
        ))}
      </div>
      <Ternary data={data.length > max}>
        <div className="self-center flex gap-3 items-center">
          <Icon
            icon="ep:arrow-left-bold"
            color="white"
            width={20}
            className="cursor-pointer"
            onClick={() => handleClick(page - 1)}
          />
          {Array.from({ length }, (_, index) => (
            <span
              key={index}
              className={`cursor-pointer text-body3 ${page !== index + 1 && "text-gray-300"}`}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </span>
          ))}
          <Icon
            icon="ep:arrow-right-bold"
            color="white"
            width={20}
            className="cursor-pointer"
            onClick={() => handleClick(page + 1)}
          />
        </div>
      </Ternary>
    </div>
  );
};
