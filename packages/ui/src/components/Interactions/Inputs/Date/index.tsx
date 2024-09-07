import { IDefaultProp, Layout } from "../Layout";
import { Ternary } from "@configs/util";
import { Icon } from "../../../";
import { useState } from "react";
import dayjs from "dayjs";

interface IProp extends IDefaultProp {
  value?: string;
  onChange: (item: string, id?: string) => void;
  onDelete: (id?: string) => void;
  placeholder: string;
  id?: string;
}

const date = dayjs();
const dateTypes = ["S", "M", "T", "W", "T", "F", "S"];

export const Date = ({
  size,
  value,
  onChange,
  disabled,
  placeholder,
  required,
  label,
  onDelete,
  id
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
    <div className={`relative w-fit`}>
      <Layout
        size={size}
        required={required}
        label={label}
        disabled={disabled}
        icon={value && { name: "Trash", action: () => onDelete(id) }}
      >
        <span
          className={`${!!!value ? "text-gray-300" : "text-white"} block w-full text-[14px] font-light cursor-pointer`}
          onClick={() => (disabled ? () => {} : setOpen((prev) => !prev))}
        >
          {value ? value : placeholder}
        </span>
      </Layout>
      <Ternary data={open}>
        <div
          className={`${!!label ? "top-[96px]" : "top-[60px]"} shadow-[0_4px_12px_0_rgba(0,0,0,0.32)] absolute col-flex items-center z-20 w-[258px] h-fit border-[1px] rounded-xl bg-gray-700 gap-2 border-gray-600 p-2`}
        >
          <div className="flex gap-2 items-center">
            <Icon
              name="Arrow"
              className="cursor-pointer"
              rotate="left"
              id="left"
              onClick={handleClick}
            />
            <span className="text-body5">
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
              <span className="w-[30px] h-[30px] text-center content-center text-body7 text-gray-300 inline cursor-pointer">
                {i}
              </span>
            ))}
            {startDate.map(() => (
              <span className="w-[30px] h-[30px] inline" />
            ))}

            {days.map((_, j) => (
              <span
                className="w-[30px] h-[30px] text-center content-center text-body6 inline cursor-pointer"
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
    </div>
  );
};
