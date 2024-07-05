interface IProp {
  children: React.ReactElement | React.ReactElement[];
  selected: boolean;
}

export const Background = ({ children, selected }: IProp) => {
  const style = selected
    ? "bg-[#1E1E1E] border-l-[5px] border-l-[#141414] "
    : "bg-[#222222] ";

  return (
    <div
      className={
        style +
        "flex flex-col gap-2 w-[14rem] min-h-[2.5rem] px-3 py-2 rounded-[5px]"
      }
    >
      {children}
    </div>
  );
};
