import react from "@vitejs/plugin-react";
//@ts-ignore
import { getEnv } from "../../config";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import path from "path";

export default () => {
  getEnv();
  return defineConfig({
    plugins: [react(), svgr()],
    cacheDir: "./.vite",
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
    },
    server: { port: 3001 },
    define: { "process.env": process.env },
    worker: {
      format: "es"
    }
  });
};
