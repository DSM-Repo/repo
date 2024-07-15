import { useParams } from "react-router-dom";

const string: { [key: string]: string } = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
};

export const Error = () => {
  const { code } = useParams();

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-[100vh] bg-[#2E2E2E]">
      <span className="text-white text-8xl font-black line-fit">{code}</span>
      <span className="text-white text-3xl font-medium line-fit">
        {string[code || "404"] || "Unsigned Error"}
      </span>
    </div>
  );
};
