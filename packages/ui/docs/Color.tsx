interface IProp {
  title: string;
  colors: {
    name: string;
    color: string;
  }[];
}

export const Color = ({ title, colors }: IProp) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "95%",

        height: "fit-content",
        gap: "3px",
        alignItems: "center"
      }}
    >
      <span className="text-title1">{title}</span>
      <div
        style={{
          width: "100%",
          height: "fit-content",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
          overflow: "hidden",
          borderRadius: "20px"
        }}
      >
        {colors.map((i) => (
          <div
            style={{ backgroundColor: i.color, height: "80px" }}
            className={`col-flex items-center gap-1 justify-center`}
          >
            <span
              style={{ filter: "invert(100%)" }}
              className="text-[20px] font-bold"
            >
              {i.name}
            </span>
            <span style={{ filter: "invert(100%)", fontSize: "14px" }}>
              {i.color}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
