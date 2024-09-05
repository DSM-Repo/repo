export * from "./Inform";
export * from "./Projects";

// A5 사이즈 : x-595 y-841
// A4 사이즈: X-842 y-1191

// x-247,123.5 y-350,175
export type setType = React.Dispatch<
  React.SetStateAction<{
    projects: number;
    inform: number;
  }>
>;
