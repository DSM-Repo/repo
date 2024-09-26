// vite.config.ts
import react from "file:///Users/yuggijun/Desktop/repo/.yarn/__virtual__/@vitejs-plugin-react-virtual-1ce8c4eeaa/0/cache/@vitejs-plugin-react-npm-4.3.1-cbe92983ea-39a027fedd.zip/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/yuggijun/Desktop/repo/.yarn/__virtual__/vite-virtual-fb1c3f5aa4/0/cache/vite-npm-5.4.7-7fb1bc703e-0ca7ca60f7.zip/node_modules/vite/dist/node/index.js";
import svgr from "file:///Users/yuggijun/Desktop/repo/.yarn/__virtual__/vite-plugin-svgr-virtual-4b97444e60/0/cache/vite-plugin-svgr-npm-4.2.0-e0c6a7a1f0-0a6400f209.zip/node_modules/vite-plugin-svgr/dist/index.js";
import path2 from "path";

// ../../config.ts
import path from "path";
import dotenv from "file:///Users/yuggijun/Desktop/repo/.yarn/cache/dotenv-npm-16.4.5-bcb20eb95d-48d9287007.zip/node_modules/dotenv/lib/main.js";
var __vite_injected_original_dirname = "/Users/yuggijun/Desktop/repo";
var getEnv = () => {
  dotenv.config({ path: path.resolve(__vite_injected_original_dirname, `.env`) });
};

// vite.config.ts
var __vite_injected_original_dirname2 = "/Users/yuggijun/Desktop/repo/packages/main";
var vite_config_default = () => {
  getEnv();
  return defineConfig({
    plugins: [
      react(),
      svgr()
      // compression({ algorithm: "gzip" }),
      // compression({ algorithm: "brotliCompress", ext: ".br" })
    ],
    cacheDir: "./.vite",
    resolve: {
      alias: [{ find: "@", replacement: path2.resolve(__vite_injected_original_dirname2, "src") }]
    },
    server: { port: 3e3 },
    define: { "process.env": process.env }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiLi4vLi4vY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3l1Z2dpanVuL0Rlc2t0b3AvcmVwby9wYWNrYWdlcy9tYWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveXVnZ2lqdW4vRGVza3RvcC9yZXBvL3BhY2thZ2VzL21haW4vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3l1Z2dpanVuL0Rlc2t0b3AvcmVwby9wYWNrYWdlcy9tYWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBzdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuLy9AdHMtaWdub3JlXG5pbXBvcnQgeyBnZXRFbnYgfSBmcm9tIFwiLi4vLi4vY29uZmlnLnRzXCI7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGdldEVudigpO1xuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICByZWFjdCgpLFxuICAgICAgc3ZncigpXG4gICAgICAvLyBjb21wcmVzc2lvbih7IGFsZ29yaXRobTogXCJnemlwXCIgfSksXG4gICAgICAvLyBjb21wcmVzc2lvbih7IGFsZ29yaXRobTogXCJicm90bGlDb21wcmVzc1wiLCBleHQ6IFwiLmJyXCIgfSlcbiAgICBdLFxuICAgIGNhY2hlRGlyOiBcIi4vLnZpdGVcIixcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczogW3sgZmluZDogXCJAXCIsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSB9XVxuICAgIH0sXG4gICAgc2VydmVyOiB7IHBvcnQ6IDMwMDAgfSxcbiAgICBkZWZpbmU6IHsgXCJwcm9jZXNzLmVudlwiOiBwcm9jZXNzLmVudiB9XG4gIH0pO1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3l1Z2dpanVuL0Rlc2t0b3AvcmVwb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3l1Z2dpanVuL0Rlc2t0b3AvcmVwby9jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3l1Z2dpanVuL0Rlc2t0b3AvcmVwby9jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5cbmV4cG9ydCBjb25zdCBnZXRFbnYgPSAoKSA9PiB7XG4gIGRvdGVudi5jb25maWcoeyBwYXRoOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgLmVudmApIH0pO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1QsT0FBTyxXQUFXO0FBQ2xVLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sVUFBVTtBQUNqQixPQUFPQSxXQUFVOzs7QUNIMk8sT0FBTyxVQUFVO0FBQzdRLE9BQU8sWUFBWTtBQURuQixJQUFNLG1DQUFtQztBQUdsQyxJQUFNLFNBQVMsTUFBTTtBQUMxQixTQUFPLE9BQU8sRUFBRSxNQUFNLEtBQUssUUFBUSxrQ0FBVyxNQUFNLEVBQUUsQ0FBQztBQUN6RDs7O0FETEEsSUFBTUMsb0NBQW1DO0FBU3pDLElBQU8sc0JBQVEsTUFBTTtBQUNuQixTQUFPO0FBQ1AsU0FBTyxhQUFhO0FBQUEsSUFDbEIsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBO0FBQUE7QUFBQSxJQUdQO0FBQUEsSUFDQSxVQUFVO0FBQUEsSUFDVixTQUFTO0FBQUEsTUFDUCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBYUMsTUFBSyxRQUFRQyxtQ0FBVyxLQUFLLEVBQUUsQ0FBQztBQUFBLElBQ3BFO0FBQUEsSUFDQSxRQUFRLEVBQUUsTUFBTSxJQUFLO0FBQUEsSUFDckIsUUFBUSxFQUFFLGVBQWUsUUFBUSxJQUFJO0FBQUEsRUFDdkMsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogWyJwYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiXQp9Cg==
