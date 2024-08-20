import { ReactElement } from "react";

interface IProp {
  data: any;
  children: ReactElement;
}

export const Ternary = ({ data, children }: IProp) => {
  if (!!data) {
    return children;
  } else {
    return <></>;
  }
};
