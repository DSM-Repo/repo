export const isDevelopment = process.env.NODE_ENV === "development";

export const checkBuild = () => {
  if (isDevelopment) document.title = "🔧 Repo";
};
