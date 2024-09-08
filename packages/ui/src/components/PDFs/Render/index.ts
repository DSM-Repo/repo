export * from "../Resume/Render/Inform";
export * from "./ClientRenderer";
export * from "../Resume/Render/Projects";

export type setType = React.Dispatch<
  React.SetStateAction<{
    projects: number;
    inform: number;
  }>
>;
