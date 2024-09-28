import { childernType } from "@configs/type";

interface IProp {
  data: any;
  onNull?: string;
  children: childernType;
}

export const Ternary = ({ data, onNull, children }: IProp) => {
  if (Array.isArray(data) ? data.length !== 0 : !!data) {
    return children;
  } else {
    return onNull ? <span className="text-body4">{onNull}</span> : <></>;
  }
};
