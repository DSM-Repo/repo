interface IProp {
  children: React.ReactElement | React.ReactElement[];
}

export const Layout = ({ children }: IProp) => {
  return (
    <div className="flex gap-20 items-center justify-between w-9/12 max-w-[1400px] h-[100vh]">
      {children}
    </div>
  );
};
