import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import path from "path";
//@ts-ignore
import { getEnv } from "../../config.ts";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default () => {
  getEnv();
  return defineConfig({
    plugins: [
      react(),
      svgr(),
      compression({ algorithm: "gzip" }),
      compression({ algorithm: "brotliCompress", ext: ".br" })
    ],
    cacheDir: "./.vite",
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
    },
    server: { port: 3000 },
    define: { "process.env": process.env },
    worker: {
      format: "es"
    }
  });
};
