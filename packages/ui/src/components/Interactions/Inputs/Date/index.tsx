import { Box, IDefaultProp, Label } from "../Layout";
import { Ternary } from "@configs/util";
import { useState } from "react";
import { Icon } from "@/Others";
import dayjs from "dayjs";

const date = dayjs();
const dateTypes = ["S", "M", "T", "W", "T", "F", "S"];

interface IProp extends IDefaultProp {
  onChange: (item: string, id?: string) => void;
  onDelete: (id?: string) => void;
  value?: string;
}

export const Date = ({
  placeholder,
  required,
  disabled,
  label,
  size,
  id,
  onChange,
  onDelete,
  value
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

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
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
    <Label size={size} required={required} label={label}>
      <Box
        size={size}
        disabled={disabled}
        icon={value && { name: "Trash", action: () => onDelete(id) }}
        action={() => setOpen((prev) => !prev)}
      >
        <span
          className={`block w-full h-fit text-body5 leading-none ${!value ? "text-gray-300" : "cursor-pointer"} ${disabled ? "cursor-[not-allowed_!important]" : ""}`}
        >
          {value ? value : placeholder}
        </span>
      </Box>
      <Ternary data={open}>
        <div
          className={`${!!label ? "top-[89px]" : "top-[60px]"} left-0 shadow-[0_4px_12px_0_rgba(0,0,0,0.32)] absolute col-flex items-center z-20 w-[258px] h-fit border-[1px] rounded-xl bg-gray-700 gap-2 border-gray-600 p-2`}
        >
          <div className="flex gap-2 items-center">
            <Icon
              name="Arrow"
              className="cursor-pointer"
              rotate="left"
              id="left"
              onClick={handleClick}
            />
            <span className="text-body3">
              {sel.year}. {sel.month}
            </span>
            <Icon
              name="Arrow"
              className="cursor-pointer"
              rotate="right"
              id="right"
              onClick={handleClick}
            />
          </div>
          <div className="flex flex-row flex-wrap gap-[5px] w-full">
            {dateTypes.map((i) => (
              <span className="w-[30px] h-[30px] text-center content-center text-body5 text-gray-300 inline cursor-pointer">
                {i}
              </span>
            ))}
            {startDate.map(() => (
              <span className="w-[30px] h-[30px] inline" />
            ))}

            {days.map((_, j) => (
              <span
                className="w-[30px] h-[30px] text-center content-center text-body5 inline cursor-pointer"
                onClick={() => {
                  onChange(
                    `${sel.year}. ${sel.month.toString().padStart(2, "0")}. ${(j + 1).toString().padStart(2, "0")}`,
                    id
                  );
                  setCal();
                }}
              >
                {j + 1}
              </span>
            ))}
          </div>
        </div>
      </Ternary>
    </Label>
  );
};
