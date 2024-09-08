interface IProp {
  data: any;
  onNull?: string;
  children: React.ReactElement | React.ReactElement[];
}

export const Ternary = ({ data, onNull, children }: IProp) => {
  if (Array.isArray(data) ? data.length !== 0 : !!data) {
    return children;
  } else {
    return onNull ? <span className="text-body4">{onNull}</span> : <></>;
  }
};
