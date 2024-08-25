import { ReactElement } from "react";

interface IProp {
  data: any;
  onNull?: string;
  children: ReactElement;
}

export const Ternary = ({ data, onNull, children }: IProp) => {
  if (!!data) {
    return children;
  } else {
    return onNull ? <span className="text-body4">{onNull}</span> : <></>;
  }
};
