interface IProp {
  children: React.ReactElement | React.ReactElement[];
}

export const Layout = ({ children }: IProp) => {
  return (
    <div className="flex gap-10 items-center justify-between w-3/4 h-[100vh]">
      {children}
    </div>
  );
};
