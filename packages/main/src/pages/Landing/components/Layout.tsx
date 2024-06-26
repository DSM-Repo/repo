interface IProp {
  children: React.ReactElement | React.ReactElement[];
}

export const Layout = ({ children }: IProp) => {
  return (
    <div className="w-[75%] h-[100vh] flex gap-10 items-center justify-between">
      {children}
    </div>
  );
};
