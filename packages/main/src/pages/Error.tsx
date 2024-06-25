import { useParams } from "react-router-dom";

const string: { [key: string]: string } = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

export const Error = () => {
  const { code } = useParams();

  return (
    <div className="relative w-full h-[100vh] flex flex-col gap-4 items-center justify-center bg-[#2E2E2E]">
      <span className="text-white text-[100px] font-black line-fit">
        {code}
      </span>
      <span className="text-white text-[30px] font-medium line-fit">
        {string[code || "404"] || "Unsigned Error"}
      </span>
      <img
        title="http.cat"
        onClick={() =>
          window.location.replace(`https://http.cat/status/${code}`)
        }
        className="absolute h-44 cursor-pointer top-[calc(50%+100px)]"
        src={`https://http.cat/images/${code}.jpg`}
      />
    </div>
  );
};
