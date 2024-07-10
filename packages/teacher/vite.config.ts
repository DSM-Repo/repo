import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import { getEnv } from "../../config.ts";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  getEnv(mode);
  return defineConfig({
    plugins: [react(), svgr()],
    cacheDir: "./.vite",
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    server: {
      port: 3002,
    },
    define: {
      "process.env": process.env,
    },
  });
};
