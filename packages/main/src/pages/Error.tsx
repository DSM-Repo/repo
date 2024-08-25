import { Header } from "ui";
import { useParams } from "react-router-dom";

const string: { [key: string]: string } = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  unsigned: "Unsigned Error"
};

export const Error = () => {
  const { code } = useParams();

  return (
    <div className="col-flex flex-center w-full h-screen relative">
      <Header className="absolute top-0" />
      <span className="text-[7rem] font-black">{code}</span>
      <span className="text-[1.5rem] font-medium">
        {string[code || "unsigned"]}
      </span>
    </div>
  );
};
