import path from "path";
import dotenv from "dotenv";

export const getEnv = (mode: string) =>
  dotenv.config({ path: path.resolve(__dirname, `.env.${mode}`) });
