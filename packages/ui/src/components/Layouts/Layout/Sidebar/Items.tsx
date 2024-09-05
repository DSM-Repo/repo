interface IProp {
  selections: string[];
  selected?: string;
  onClick: (value: string) => void;
}

export const Items = ({ selections, selected, onClick }: IProp) => {
  return (
    <>
      {selections?.map((i) => (
        <span
          onClick={() => onClick(i)}
          className={`${selected === i ? "font-semibold" : "font-extralight hover:font-normal"} transition-all duration-150 cursor-pointer text-[18px]`}
        >
          {i}
          {selected === i ? " ✓" : ""}
        </span>
      ))}
    </>
  );
};
