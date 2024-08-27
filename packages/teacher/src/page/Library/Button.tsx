import { accessType, library, libraryAccess } from "@/apis";
import { Box, Dropdown } from "ui";

interface IProp {
  id: string;
  year: number;
  grade: number;
  generation: number;
  access_right: accessType;
}

const type = {
  PUBLIC: "공개",
  PRIVATE: "비공개"
};

const revType = {
  공개: "PUBLIC",
  비공개: "PRIVATE"
};

const navigate = (id: string, access: accessType) =>
  window.location.replace(
    `${process.env.VITE_APP_URL_MAIN}/viewer/library/${id}?${access === "PUBLIC" ? "isPublic=true&" : ""}prev=${window.location.href}`
  );

export const Button = ({
  id,
  year,
  grade,
  generation,
  access_right
}: IProp) => {
  const { refetch: refetchLibrary } = library();
  const { mutate: access } = libraryAccess();

  return (
    <Box
      width="800px"
      padding="10px 20px"
      className="cursor-pointer flex-row justify-between items-center"
    >
      <span
        className="text-body4 block w-full"
        onClick={() => navigate(id, access_right)}
      >
        {year}년 {grade}학년 {generation}기
      </span>
      <Dropdown
        selections={["공개", "비공개"]}
        onSelect={(data) =>
          access(
            {
              library_id: id,
              access_right: revType[data as "공개" | "비공개"] as accessType
            },
            { onSuccess: refetchLibrary }
          )
        }
        selected={type[access_right]}
        placeholder=""
      />
    </Box>
  );
};
