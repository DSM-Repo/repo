interface IProp {
  direction: "left" | "center" | "right";
  children: string;
}

export const Title = ({ direction, children }: IProp) => {
  const direct =
    direction === "center"
      ? "items-center"
      : direction === "left"
        ? "self-start items-start"
        : "self-end items-end";

  return (
    <div className={`${direct} flex flex-col gap-5`}>
      <div className="w-fit p-1 border-[1px] rounded-[100px] border-green-700 bg-green-900">
        <div className="w-6 h-2 rounded-[100px] bg-green-400" />
      </div>
      <span className="text-[36px] font-extrabold text-gray-50">
        {children}
      </span>
    </div>
  );
};
