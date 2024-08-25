import { Box } from "ui";

const navigate = (id: string) =>
  window.location.replace(
    `${process.env._VITE_APP_URL_MAIN}/library/${id}?prev=${window.location.href}`
  );

interface IProp {
  id: string;
  year: number;
  grade: number;
  generation: number;
}

export const Button = ({ id, year, grade, generation }: IProp) => {
  return (
    <Box
      width="100%"
      padding="25px"
      onClick={() => navigate(id)}
      className="cursor-pointer"
    >
      <span className="text-body4">
        {year}년 {grade}학년 {generation}학기
      </span>
    </Box>
  );
};
