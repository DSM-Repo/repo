export type pathType =
  | "history"
  | "teacher"
  | "auth"
  | "resume"
  | "user"
  | "feedback"
  | "major"
  | "library"
  | "file";

export const path: { [key in pathType]: string } = {
  history: "/history",
  teacher: "/teacher",
  auth: "/auth",
  resume: "/resume",
  user: "/user",
  feedback: "/feedback",
  major: "/major",
  library: "/library",
  file: "/file"
};
