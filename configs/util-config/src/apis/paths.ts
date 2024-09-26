export type pathType =
  | "history"
  | "teacher"
  | "auth"
  | "resume"
  | "user"
  | "feedback"
  | "major"
  | "library"
  | "file"
  | "notice";

export const path: { [key in pathType]: string } = {
  history: "/history",
  teacher: "/teacher",
  auth: "/auth",
  resume: "/resume",
  user: "/user",
  feedback: "/feedback",
  major: "/major",
  library: "/library",
  file: "/file",
  notice: "/notice"
};
