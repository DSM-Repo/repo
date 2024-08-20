export * from "./Inform";
export * from "./Projects";

export type setType = React.Dispatch<
  React.SetStateAction<{
    projects: number;
    inform: number;
  }>
>;
