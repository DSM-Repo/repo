import { HTMLAttributes } from "react";
import Default from "./Default.svg?react";

interface IProp extends HTMLAttributes<HTMLImageElement> {
  img?: string;
  size: number;
}

export const Profile = ({ img, size, ...props }: IProp) => {
  return !!img ? (
    <>
      <img
        src={img}
        width={size}
        height={size}
        alt="프로필 이미지"
        className="rounded-full aspect-square object-cover"
        {...props}
      />
    </>
  ) : (
    <Default width={size} height={size} />
  );
};
