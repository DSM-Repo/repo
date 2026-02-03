import react from "@vitejs/plugin-react";
import { getEnv } from "../../config";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import compression from "vite-plugin-compression";
import path from "path";

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
    server: { port: 3001 },
    define: { "process.env": process.env },
    worker: {
      format: "es"
    }
  });
};
