import path from "path";
import dotenv from "dotenv";

export const getEnv = () => {
  dotenv.config({ path: path.resolve(__dirname, `.env`) });
};
