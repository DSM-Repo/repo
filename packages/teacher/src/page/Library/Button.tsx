import { Box, Dropdown } from "ui";

interface IProp {
  id: string;
  year: number;
  grade: number;
  generation: number;
}

const navigate = (id: string) =>
  window.location.replace(
    `${process.env._VITE_APP_URL_MAIN}/library/${id}?prev=${window.location.href}`
  );

export const Button = ({ id, year, grade, generation }: IProp) => {
  return (
    <Box
      width="800px"
      padding="10px 20px"
      className="cursor-pointer flex-row justify-between items-center"
    >
      <span className="text-body4 block w-full" onClick={() => navigate(id)}>
        {year}년 {grade}학년 {generation}학기
      </span>
      <Dropdown
        selections={["공개", "비공개"]}
        onSelect={() => {}}
        selected="공개"
        placeholder=""
      />
    </Box>
  );
};
