import Default from "./Default.svg?react";
import { HTMLAttributes } from "react";

interface IProp extends HTMLAttributes<HTMLImageElement> {
  img?: string;
  size: number;
  round?: string;
}

export const Profile = ({ img, size, round = "9999px", ...props }: IProp) => {
  return !!img ? (
    <>
      <img
        {...props}
        src={img}
        width={size}
        height={size}
        style={{ borderRadius: round }}
        alt="프로필 이미지"
        className={`flex-shrink-0 rounded-full aspect-square object-cover bg-white ${props.className}`}
      />
    </>
  ) : (
    <Default
      width={size}
      height={size}
      className="flex-shrink-0 w-fit h-fit"
      style={{ borderRadius: round }}
    />
  );
};
