import path from "path";
import dotenv from "dotenv";

export const getEnv = () => {
  const mode = process.env.NODE_ENV || "development";
  const envFile = mode === "production" ? ".env.production" : ".env.development";
  dotenv.config({ path: path.resolve(__dirname, envFile) });
};
