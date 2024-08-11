import { MouseEvent, useState } from "react";
import { Icon } from "@iconify/react";
import { Input, Box } from "../..";
import { IInput } from "..";
import dayjs from "dayjs";
import { Layout } from "../Inputs/Layout";

interface IProp extends Omit<IInput, "onChange" | "value"> {
  value?: string;
  label?: string;
  onChange: (id: string, value: string) => void;
  onDelete: (id: string, value: string) => void;
}

const date = dayjs();

export const Calander = ({
  value,
  onChange,
  onDelete,
  label,
  placeholder,
  ...props
}: IProp) => {
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState({
    year: date.get("year"),
    month: date.get("month") + 1
  });
  const selToDate = dayjs(`${sel.year}-${sel.month}-1`);

  const startDate = Array.from({ length: dayjs(selToDate).get("day") });

  const days = Array.from({
    length: dayjs(selToDate).endOf("month").get("date")
  });

  const handleClick = (e: MouseEvent<SVGSVGElement>) => {
    if (e.currentTarget.id === "left") {
      if (sel.month > 1) setSel({ ...sel, month: --sel.month });
      else setSel({ year: --sel.year, month: 12 });
    } else {
      if (sel.month < 12) setSel({ ...sel, month: ++sel.month });
      else setSel({ year: ++sel.year, month: 1 });
    }
  };

  const setCal = () => {
    setOpen((prev) => !prev);
    setSel({
      year: date.get("year"),
      month: date.get("month") + 1
    });
  };

  return (
    <div className="relative w-full">
      <Layout
        label={label}
        size={props.size}
        cursor="pointer"
        onClick={() => setOpen((prev) => !prev)}
        className="flex-row justify-between"
        icon={value && "ph:trash-bold"}
        onIconClick={() => {
          onDelete(props.id, value);
          setOpen((prev) => !prev);
        }}
      >
        <span className={`text-body7 ${!value && "text-[#999999]"}`}>
          {value ? value : placeholder}
        </span>
      </Layout>
      {open && (
        <Box
          width="280px"
          height="fit-content"
          padding="20px"
          className={`gap-3 items-center absolute z-20 shadow-2xl ${label ? "top-[90px]" : "top-[55px]"}`}
          color="light"
        >
          <div className="flex gap-2 items-center">
            <Icon
              icon="ep:arrow-left-bold"
              color="white"
              className="cursor-pointer"
              id="left"
              onClick={handleClick}
            />
            <span className="text-body5">
              {sel.year}. {sel.month}
            </span>
            <Icon
              icon="ep:arrow-right-bold"
              color="white"
              className="cursor-pointer"
              id="right"
              onClick={handleClick}
            />
          </div>
          <div className="flex flex-row flex-wrap gap-[5px] w-full">
            {startDate.map(() => (
              <span className="w-[30px] h-[30px] inline" />
            ))}

            {days.map((i, j) => (
              <span
                className="w-[30px] h-[30px] text-center content-center text-body6 inline cursor-pointer"
                onClick={() => {
                  onChange(
                    props.id,
                    `${sel.year}-${sel.month.toString().padStart(2, "0")}-${(j + 1).toString().padStart(2, "0")}`
                  );
                  setCal();
                }}
              >
                {j + 1}
              </span>
            ))}
          </div>
        </Box>
      )}
    </div>
  );
};
