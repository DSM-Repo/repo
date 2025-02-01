interface IProp {
  direction: "left" | "center" | "right";
  children: string;
}

export const Title = ({ direction, children }: IProp) => {
  const direct = {
    center: "items-center",
    left: "self-start items-start",
    right: "self-end items-end"
  };

  return (
    <div className={`${direct[direction]} flex flex-col gap-5`}>
      <div className="w-fit p-1 border-[1px] rounded-[100px] border-green-700 bg-green-900 after:block after:w-6 after:h-2 after:rounded-full after:bg-green-400" />
      <span className="text-[36px] font-extrabold leading-[42.96px] text-gray-50">
        {children}
      </span>
    </div>
  );
};
