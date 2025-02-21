interface IProp {
  selections: string[];
  selected?: string | string[];
  onClick: (value: string) => void;
}

export const Items = ({ selections, selected, onClick }: IProp) => {
  const isMultipleSelected = typeof selected === "string";

  return (
    <>
      {selections?.map((i) => {
        const isSelected = isMultipleSelected ? selected === i : selected.find((j) => j === i);
        return (
          <span
            key={i}
            onClick={() => onClick(i)}
            className={`${isSelected ? "font-semibold after:content-['_✓']" : "font-extralight hover:font-normal"} transition-all duration-150 cursor-pointer text-[18px] after:font-semibold after:text-[18px]`}
          >
            {i}
          </span>
        );
      })}
    </>
  );
};
