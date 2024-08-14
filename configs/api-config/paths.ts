export type pathType =
  | "auth"
  | "document"
  | "user"
  | "feedback"
  | "major"
  | "library"
  | "file";

export const path: { [key in pathType]: string } = {
  auth: "/auth",
  document: "/document",
  user: "/user",
  feedback: "/feedback",
  major: "/major",
  library: "/library",
  file: "/file"
};
