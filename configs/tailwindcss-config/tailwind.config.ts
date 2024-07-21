import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../ui/src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      title1: ["30px", { fontWeight: 600, lineHeight: "35.8px" }],
      title2: ["27px", { fontWeight: 500, lineHeight: "32.2px" }],
      title3: ["24px", { fontWeight: 600, lineHeight: "28.6px" }],
      title4: ["24px", { fontWeight: 100, lineHeight: "28.6px" }],
      body1: ["22px", { fontWeight: 500, lineHeight: "26.3px" }],
      body2: ["22px", { fontWeight: 400, lineHeight: "26.3px" }],
      body3: ["20px", { fontWeight: 500, lineHeight: "23.9px" }],
      body4: ["20px", { fontWeight: 400, lineHeight: "23.9px" }],
      body5: ["17px", { fontWeight: 500, lineHeight: "20,3px" }],
      body6: ["17px", { fontWeight: 400, lineHeight: "20.3px" }],
      body7: ["14px", { fontWeight: 400, lineHeight: "160%" }],
      body8: ["14px", { fontWeight: 600, lineHeight: "16.7px" }],
    },
  },
  plugins: [],
} satisfies Config;
